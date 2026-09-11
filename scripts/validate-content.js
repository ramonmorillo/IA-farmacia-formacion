const fs = require('fs');
const vm = require('vm');
const src = ['data/course-data.js','data/cases.js','data/site-v5.js','data/teaching-programs.js'].map(file=>fs.readFileSync(file,'utf8')).join('\n');
const context = {window:{}}; vm.createContext(context); vm.runInContext(src, context);
const data = context.window.COURSE_DATA;
const teaching = context.window.TEACHING_DATA;
const banned = [/próximamente/i,/contenido pendiente/i,/lorem ipsum/i,/\bTODO\b/,/por desarrollar/i];
let errors=[];
function words(s){return String(s||'').split(/\s+/).filter(Boolean).length}
function req(cond,msg){if(!cond)errors.push(msg)}
function hasUrl(u){return /^https:\/\//.test(String(u||''))}
const requiredPaths=['github','codex','claude','claude-code'];
req(data.meta?.version==='5.2.0','Versión pública y modelo de datos no sincronizados');
req(/function renderProposal/.test(fs.readFileSync('js/app.js','utf8')),'Falta el configurador de propuestas');
req(teaching?.programs?.length===3,'Deben existir tres cursos docentes principales');
req(teaching?.programs?.reduce((n,p)=>n+p.sessions.length,0)===14,'El aula debe contener 14 sesiones listas para impartir');
const flagship=teaching?.programs?.find(p=>p.id==='curso-ia-practica');
req(flagship?.featured&&flagship?.delivery,'Falta la formación insignia');
req(flagship?.delivery?.formats?.length===3,'La formación insignia debe ofrecer tres formatos');
req(flagship?.delivery?.participantPreparation?.length>=5&&flagship?.delivery?.roomSetup?.length>=5,'La formación insignia no está preparada para convocar e impartir');
req(flagship?.delivery?.liveAgenda?.length>=8,'La formación insignia no tiene una agenda completa');
req(flagship?.delivery?.capstone?.evidence?.length>=5,'La formación insignia no define la carpeta de evidencias');
req(flagship?.delivery?.followUp?.length===3,'La formación insignia no tiene seguimiento 48 h, 2 semanas y 30 días');
const caseIds = new Set((data.cases||[]).map(c=>c.id));
for(const p of teaching?.programs||[]){
 req(p.before?.length>=4&&p.after?.length>=4&&p.outcomes?.length>=4,`Curso ${p.id} sin transformación o productos suficientes`);
 for(const s of p.sessions||[]){
  req(s.objectives?.length>=3&&s.concepts?.length>=3&&s.demo?.steps?.length>=3&&s.activity?.deliverable&&s.checklist?.length>=3,`Sesión ${s.id} incompleta`);
  req(s.example?.title&&s.example?.context&&s.example?.task&&s.example?.expectedEvidence,`Sesión ${s.id} sin ejemplo farmacéutico completo`);
  req(s.template?.title&&s.template?.fields?.length>=6,`Sesión ${s.id} sin ficha de participante suficiente`);
  req(s.caseIds?.length>=2,`Sesión ${s.id} sin casos relacionados suficientes`);
  for(const id of s.caseIds||[]) req(caseIds.has(id),`Sesión ${s.id} enlaza un caso inexistente: ${id}`);
 }
}
req((teaching?.featuredTools||[]).every(t=>/^https:\/\/ramonmorillo\.github\.io\//.test(t[2])),'El acceso destacado debe abrir herramientas publicadas');
req(data.cases?.length===32,'La biblioteca debe contener 32 casos prácticos');
req(data.programs?.length===3,'Deben existir tres programas formativos principales');
req(data.levels?.length===5,'Deben existir cinco niveles reales');
for (const p of requiredPaths) req(data.modules?.some(m=>(m.pathway||m.route)===p),`Falta ruta ${p}`);
for (const m of data.modules){
 req(m.id&&m.title&&m.author&&(m.updatedAt||m.reviewedAt),`Módulo ${m.id} sin metadatos esenciales`);
 req(Number.isInteger(m.level)&&m.level>=0&&m.level<=4,`Módulo ${m.id} sin nivel 0-4`);
 req(m.deliveryModes?.includes('self-paced')&&m.deliveryModes?.includes('seminar'),`Módulo ${m.id} sin modalidades autónoma/seminario`);
 req(m.objectives?.length>=3,`Módulo ${m.id} sin objetivos suficientes`);
 req(m.sections?.length>=8,`Módulo ${m.id} sin desarrollo suficiente`);
 req(words(m.sections?.map(s=>s.body).join(' '))>=250,`Módulo ${m.id} demasiado breve`);
 req(m.guidedPractice?.instructions,`Módulo ${m.id} sin práctica guiada`);
 req(m.independentPractice?.instructions,`Módulo ${m.id} sin práctica autónoma`);
 req(m.expertChallenge?.instructions,`Módulo ${m.id} sin reto experto`);
 req(m.tests?.length,`Módulo ${m.id} sin pruebas`);
 req(m.checklist?.length,`Módulo ${m.id} sin checklist`);
 req(m.repositoryExamples?.every(r=>hasUrl(r.url)),`Módulo ${m.id} con enlaces de repositorio rotos`);
 req(m.assessment?.[0]?.feedback?.length===m.assessment?.[0]?.options?.length,`Módulo ${m.id} sin feedback por respuesta`);
 req(!m.guidedPractice?.solution&&!m.independentPractice?.solution&&!m.expertChallenge?.solution,`Módulo ${m.id} expone soluciones reservadas`);
 req(!m.teacherGuide&&!m.presentationSlides,`Módulo ${m.id} expone material docente reservado`);
 req((m.assessment||[]).every(item=>typeof item.answer==='undefined'),`Módulo ${m.id} expone respuestas de evaluación`);
 banned.forEach(r=>req(!r.test(JSON.stringify(m)),`Módulo ${m.id} contiene texto provisional ${r}`));
 req(!/modificar producción|editar producción/i.test(JSON.stringify(m)) || /no modificar producción|sin tocar producción/i.test(JSON.stringify(m)),`Módulo ${m.id} puede inducir modificación de producción`);
}
for (const s of data.seminars||[]){
 req(s.durationMinutes>=180&&s.durationMinutes<=240,`Taller ${s.id} sin duración 180-240`);
 req(s.agenda?.length>=5,`Taller ${s.id} sin agenda suficiente`);
 req(s.roles?.length>=6,`Taller ${s.id} sin roles mixtos`);
 req(s.activities?.length>=3,`Taller ${s.id} sin capas de actividad`);
 req(s.offlinePlan?.summary,`Taller ${s.id} sin plan offline`);
 req(!s.teacherNotes&&!s.solutions&&!s.rubric,`Taller ${s.id} expone material docente reservado`);
}
for (const c of data.cases||[]){
 req(!c.resolution&&!c.deliberateErrors&&!c.verificationProcess&&!c.rubric&&!c.questions&&!c.simulatedOutput,`Caso ${c.id} expone solución o evaluación reservada`);
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
req(!/function renderTeacher|function renderPresentation|function downloadGuide/.test(app),'La aplicación pública conserva funciones docentes reservadas');
const buttons = [...app.matchAll(/data-action="([^"]+)"/g)].map(m=>m[1]);
for (const b of buttons) req(app.includes(`'${b}'`)||app.includes(`===\"${b}\"`),`Botón sin acción registrada: ${b}`);
const report = {checkedAt:new Date().toISOString(), totalModules:data.modules.length, pathways:[...new Set(data.modules.map(m=>m.pathway||m.route))], totalSeminars:(data.seminars||[]).length, portfolioItems:(data.portfolio||[]).length, brokenRoutes:errors.filter(e=>/roto|enlace/.test(e)).length, buttonsWithoutAction:errors.filter(e=>/Botón/.test(e)).length, errors};
fs.writeFileSync('validation-report.json', JSON.stringify(report,null,2));
if(errors.length){console.error(JSON.stringify(report,null,2)); process.exit(1)}
console.log(JSON.stringify(report,null,2));
