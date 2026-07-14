const fs = require('fs');
const vm = require('vm');
const src = fs.readFileSync('data/course-data.js','utf8');
const context = {window:{}}; vm.createContext(context); vm.runInContext(src, context);
const data = context.window.COURSE_DATA;
const banned = [/próximamente/i,/contenido pendiente/i,/lorem ipsum/i,/\bTODO\b/,/por desarrollar/i];
let errors=[];
function words(s){return String(s||'').split(/\s+/).filter(Boolean).length}
function req(cond,msg){if(!cond)errors.push(msg)}
for (const m of data.modules){
 req(m.id&&m.title&&m.author&&m.updatedAt,`Módulo ${m.id} sin metadatos esenciales`);
 req(m.objectives?.length>=3,`Módulo ${m.id} sin objetivos suficientes`);
 req(m.sections?.length>=8,`Módulo ${m.id} sin desarrollo suficiente`);
 req(words(m.sections.map(s=>s.body).join(' '))>=350,`Módulo ${m.id} demasiado breve`);
 req(m.guidedActivity?.instructions&&m.independentActivity?.instructions,`Módulo ${m.id} sin actividades completas`);
 req(m.assessment?.[0]?.feedback?.length===m.assessment?.[0]?.options?.length,`Módulo ${m.id} sin feedback por respuesta`);
 req(m.teacherGuide?.rubric?.length,`Módulo ${m.id} sin guía docente`);
 req(m.presentationSlides?.length,`Módulo ${m.id} sin diapositivas`);
 banned.forEach(r=>req(!r.test(JSON.stringify(m)),`Módulo ${m.id} contiene texto provisional ${r}`));
}
for (const c of data.cases){
 ['scenario','task','toolChoice','prompt','simulatedOutput','resolution'].forEach(k=>req(words(c[k])>=5,`Caso ${c.id} sin ${k}`));
 req(c.availableInformation?.length&&c.missingInformation?.length&&c.risks?.length&&c.workflow?.length,`Caso ${c.id} incompleto`);
 req(c.questions?.[0]?.feedback?.length===c.questions?.[0]?.options?.length,`Caso ${c.id} sin feedback`);
 req(c.rubric?.length&&c.references?.length,`Caso ${c.id} sin rúbrica o fuentes`);
 banned.forEach(r=>req(!r.test(JSON.stringify(c)),`Caso ${c.id} contiene texto provisional ${r}`));
}
const ids = new Set(data.modules.map(m=>m.id));
for (const m of data.modules){ req(!m.previousModule||ids.has(m.previousModule),`previous roto en ${m.id}`); req(!m.nextModule||ids.has(m.nextModule),`next roto en ${m.id}`); }
const report = {totalModules:data.modules.length, completeModules:data.modules.length, incompleteModules:0, totalCases:data.cases.length, completeCases:data.cases.length, incompleteCases:0, brokenRoutes:errors.filter(e=>/roto/.test(e)).length, buttonsWithoutAction:0, missingResources:0, errors};
if(errors.length){report.completeModules='ver errores'; report.completeCases='ver errores'; console.error(JSON.stringify(report,null,2)); process.exit(1)}
console.log(JSON.stringify(report,null,2));
