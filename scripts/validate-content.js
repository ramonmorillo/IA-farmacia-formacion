const fs = require('fs');
const vm = require('vm');
const src = fs.readFileSync('data/course-data.js','utf8');
const context = {window:{}}; vm.createContext(context); vm.runInContext(src, context);
const data = context.window.COURSE_DATA;
const banned = [/próximamente/i,/contenido pendiente/i,/lorem ipsum/i,/\bTODO\b/,/por desarrollar/i];
let errors=[];
function words(s){return String(s||'').split(/\s+/).filter(Boolean).length}
function req(cond,msg){if(!cond)errors.push(msg)}
function hasUrl(u){return /^https:\/\//.test(String(u||''))}
const requiredPaths=['github','codex','claude','claude-code'];
req(data.levels?.length===5,'Deben existir cinco niveles reales');
for (const p of requiredPaths) req(data.modules?.some(m=>(m.pathway||m.route)===p),`Falta ruta ${p}`);
for (const m of data.modules){
 req(m.id&&m.title&&m.author&&(m.updatedAt||m.reviewedAt),`Módulo ${m.id} sin metadatos esenciales`);
 req(Number.isInteger(m.level)&&m.level>=0&&m.level<=4,`Módulo ${m.id} sin nivel 0-4`);
 req(m.deliveryModes?.includes('self-paced')&&m.deliveryModes?.includes('seminar'),`Módulo ${m.id} sin modalidades autónoma/seminario`);
 req(m.objectives?.length>=3,`Módulo ${m.id} sin objetivos suficientes`);
 req(m.sections?.length>=8,`Módulo ${m.id} sin desarrollo suficiente`);
 req(words(m.sections?.map(s=>s.body).join(' '))>=250,`Módulo ${m.id} demasiado breve`);
 req(m.guidedPractice?.instructions&&m.guidedPractice?.solution,`Módulo ${m.id} sin práctica guiada y solución`);
 req(m.independentPractice?.instructions&&m.independentPractice?.solution,`Módulo ${m.id} sin práctica autónoma y solución`);
 req(m.expertChallenge?.instructions&&m.expertChallenge?.solution,`Módulo ${m.id} sin reto experto y solución`);
 req(m.tests?.length,`Módulo ${m.id} sin pruebas`);
 req(m.checklist?.length,`Módulo ${m.id} sin checklist`);
 req(m.repositoryExamples?.every(r=>hasUrl(r.url)),`Módulo ${m.id} con enlaces de repositorio rotos`);
 req(m.assessment?.[0]?.feedback?.length===m.assessment?.[0]?.options?.length,`Módulo ${m.id} sin feedback por respuesta`);
 req(m.teacherGuide?.rubric?.length,`Módulo ${m.id} sin guía docente`);
 req(m.presentationSlides?.length,`Módulo ${m.id} sin diapositivas`);
 banned.forEach(r=>req(!r.test(JSON.stringify(m)),`Módulo ${m.id} contiene texto provisional ${r}`));
 req(!/modificar producción|editar producción/i.test(JSON.stringify(m)) || /no modificar producción|sin tocar producción/i.test(JSON.stringify(m)),`Módulo ${m.id} puede inducir modificación de producción`);
}
for (const s of data.seminars||[]){
 req(s.durationMinutes>=180&&s.durationMinutes<=240,`Taller ${s.id} sin duración 180-240`);
 req(s.agenda?.length>=5,`Taller ${s.id} sin agenda suficiente`);
 req(s.roles?.length>=6,`Taller ${s.id} sin roles mixtos`);
 req(s.activities?.length>=3,`Taller ${s.id} sin capas de actividad`);
 req(s.offlinePlan?.summary,`Taller ${s.id} sin plan offline`);
 req(s.rubric?.length,`Taller ${s.id} sin rúbrica`);
}
for (const t of data.portfolio||[]){
 req(hasUrl(t.repository),`Herramienta ${t.name} sin repositorio válido`);
 req(t.warning&&/validada clínicamente|validación clínica|uso docente/i.test(t.warning),`Herramienta ${t.name} sin advertencia de validación`);
 req(t.risks,`Herramienta ${t.name} sin riesgos`);
}
for (const p of ['proyecto-a','proyecto-b','proyecto-c','proyecto-d','proyecto-e']) req(data.modules.some(m=>m.id===p),`Falta proyecto escalonado ${p}`);
const ids = new Set(data.modules.map(m=>m.id));
for (const m of data.modules){ req(!m.previousModule||ids.has(m.previousModule),`previous roto en ${m.id}`); req(!m.nextModule||ids.has(m.nextModule),`next roto en ${m.id}`); }
const app = fs.readFileSync('js/app.js','utf8');
const buttons = [...app.matchAll(/data-action="([^"]+)"/g)].map(m=>m[1]);
for (const b of buttons) req(app.includes(`'${b}'`)||app.includes(`===\"${b}\"`),`Botón sin acción registrada: ${b}`);
const report = {checkedAt:new Date().toISOString(), totalModules:data.modules.length, pathways:[...new Set(data.modules.map(m=>m.pathway||m.route))], totalSeminars:(data.seminars||[]).length, portfolioItems:(data.portfolio||[]).length, brokenRoutes:errors.filter(e=>/roto|enlace/.test(e)).length, buttonsWithoutAction:errors.filter(e=>/Botón/.test(e)).length, errors};
fs.writeFileSync('validation-report.json', JSON.stringify(report,null,2));
if(errors.length){console.error(JSON.stringify(report,null,2)); process.exit(1)}
console.log(JSON.stringify(report,null,2));
