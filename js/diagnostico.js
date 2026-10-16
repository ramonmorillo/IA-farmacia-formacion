// Diagnóstico IA de tu servicio. Autoevaluación orientativa: no guarda ni envía nada salvo que el usuario pulse «Enviar el resultado».
// Preguntas, umbrales y recomendaciones: ver DIAGNOSTICO_IA_PROPUESTA.md (pendientes de validación).
const DIAG_DIMENSIONS=[
  {id:'A',name:'Gobernanza y normas',focus:'acordar con la dirección criterios de uso, herramientas autorizadas y una persona de referencia',questions:[
    ['A1','¿Tu hospital o servicio tiene una norma o instrucción escrita sobre el uso de IA generativa?',['No, y no sé si se está preparando','Se está preparando o hay indicaciones verbales','Existe una norma general del hospital','Existe norma general y criterios específicos para farmacia']],
    ['A2','¿Está claro qué herramientas de IA están autorizadas para el trabajo?',['No; cada persona usa lo que quiere','Hay recomendaciones informales','Hay una lista de herramientas autorizadas','Lista autorizada, con cuentas institucionales y condiciones de uso']],
    ['A3','¿Hay alguien en el servicio que coordine o responda dudas sobre IA?',['No','Alguien lo hace de forma voluntaria','Hay una persona o grupo de referencia reconocido','Hay un responsable con tiempo asignado y conexión con la dirección del hospital']]]},
  {id:'B',name:'Datos y seguridad',focus:'uso seguro: qué información no se introduce, cómo se verifica cada resultado y cómo se deja constancia',questions:[
    ['B1','¿El equipo sabe qué información NO puede introducir en una herramienta de IA (datos de pacientes, documentos internos)?',['No se ha hablado del tema','Algunas personas lo tienen claro','Se ha comunicado a todo el equipo','Se ha formado al equipo y se revisa periódicamente']],
    ['B2','Cuando se usa un resultado de IA en el trabajo, ¿se verifica contra la fuente original?',['Rara vez o nunca','Depende de la persona','Habitualmente, sin un procedimiento definido','Siempre, con un procedimiento o lista de comprobación']],
    ['B3','¿Se deja constancia de cuándo un documento o material se ha elaborado con ayuda de IA?',['No','A veces','Habitualmente','Siempre, con un criterio común']]]},
  {id:'C',name:'Competencias del equipo',focus:'formación práctica por niveles, para que el equipo avance al mismo ritmo',questions:[
    ['C1','¿Qué parte del equipo usa IA generativa al menos una vez por semana en su trabajo?',['Casi nadie','Menos de la cuarta parte','Entre la cuarta parte y la mitad','Más de la mitad']],
    ['C2','¿El equipo ha recibido formación específica en IA?',['Ninguna','Charlas generales o formación por iniciativa propia','Una formación específica para farmacia','Formación específica y continuada, con práctica']],
    ['C3','¿Alguien del servicio sabe construir instrucciones elaboradas, asistentes o pequeñas herramientas con IA?',['No','Alguien lo ha probado','Una o dos personas lo hacen con soltura','Varias personas, y comparten lo que hacen']]]},
  {id:'D',name:'Usos actuales',focus:'elegir dos o tres tareas reales del servicio y trabajarlas con método',questions:[
    ['D1','¿En qué grado se usa la IA en gestión y documentación (protocolos, informes, actas, correos)?',['Nada','De forma puntual','Habitual en algunas tareas','Integrada en el flujo de trabajo']],
    ['D2','¿Y en investigación y docencia (búsquedas, resúmenes, manuscritos, sesiones)?',['Nada','De forma puntual','Habitual en algunas tareas','Integrada en el flujo de trabajo']],
    ['D3','¿Y en apoyo a la atención farmacéutica (preparar entrevistas, materiales para pacientes, estratificación)?',['Nada','De forma puntual','Habitual en algunas tareas','Integrada, con verificación definida']]]}
];
const DIAG_CONTEXT=[
  ['X1','Tamaño aproximado del grupo que se formaría',['Menos de 10','10–25','26–50','Más de 50']],
  ['X2','¿Qué te preocupa más ahora mismo?',['Seguridad y protección de datos','Ganar tiempo en tareas repetitivas','Investigación y publicaciones','Crear herramientas propias','Que el equipo avance al mismo ritmo']],
  ['X3','¿Qué formato encaja mejor en tu servicio?',['Sesión de 60–90 minutos','Taller de 3–4 horas','Jornada de 6–8 horas','Programa de varias sesiones','Consultoría por proyecto o mentoría','No lo sé']]
];
const DIAG_LEVELS=[
  {max:9,name:'Inicial',text:'La IA ya se usa de forma individual, pero sin normas comunes. La prioridad es un uso seguro.'},
  {max:18,name:'En exploración',text:'Hay interés y usos puntuales. Falta un método común y la verificación sistemática de resultados.'},
  {max:27,name:'En desarrollo',text:'Hay base. El siguiente paso es sistematizar y elegir los casos de uso de mayor valor.'},
  {max:36,name:'Avanzado',text:'El servicio puede construir herramientas propias y evaluar su impacto.'}
];

function renderDiagnostic(){
  const radios=(id,options,scored)=>options.map((o,i)=>`<label class="diag-option"><input type="radio" name="${id}" value="${scored?i:escapeHtml(o)}" required> ${scored?`<span class="diag-points" aria-hidden="true">${i}</span>`:''}${escapeHtml(o)}</label>`).join('');
  const dims=DIAG_DIMENSIONS.map(d=>`<section class="diag-dimension"><p class="section-kicker">Bloque ${d.id}</p><h2>${d.name}</h2>${d.questions.map(([id,q,opts])=>`<fieldset class="diag-question"><legend>${id}. ${escapeHtml(q)}</legend>${radios(id,opts,true)}</fieldset>`).join('')}</section>`).join('');
  const ctx=DIAG_CONTEXT.map(([id,q,opts])=>`<fieldset class="diag-question"><legend>${escapeHtml(q)}</legend>${radios(id,opts,false)}</fieldset>`).join('');
  shell('¿Dónde está tu servicio con la IA?',`<p class="lead">Doce preguntas para valorar el punto de partida de un servicio de farmacia hospitalaria y saber qué formato de formación encaja. Cinco minutos.</p>
  <div class="diag-notice card"><p><strong>Cómo funciona.</strong> Es anónimo. Las respuestas se calculan en tu navegador y no se guardan ni se envían a ningún sitio, salvo que al final decidas enviarme el resultado.</p><p><strong>Qué no es.</strong> Es una autoevaluación orientativa, no un instrumento validado. Sirve para empezar la conversación, no para comparar servicios.</p></div>
  <form id="diagForm" class="diag-form" novalidate>${dims}<section class="diag-dimension"><p class="section-kicker">Contexto</p><h2>Para ajustar la recomendación</h2><p class="muted">Estas preguntas no puntúan.</p>${ctx}</section><button class="btn" type="submit">Ver el resultado</button><p id="diagStatus" class="contact-status error" role="alert"></p></form><div id="diagResult" aria-live="polite"></div>`);
  $('#diagForm').addEventListener('submit',showDiagnostic);
}

function diagRecommendation(level,scores,ctx){
  const weakB=scores.B<=3;
  let format;
  if(level.name==='Inicial'||weakB)format='Sesión de 60–90 minutos o taller de 3–4 horas sobre uso seguro y eficaz';
  else if(level.name==='En exploración')format='Taller de 3–4 horas o jornada de 6–8 horas, con práctica sobre tareas del propio servicio';
  else if(level.name==='En desarrollo')format='Programa de varias sesiones, con un caso de uso del servicio como hilo conductor';
  else format='Consultoría por proyecto o mentoría';
  if(ctx.X2==='Crear herramientas propias'&&level.name!=='Inicial'&&!weakB)format='Consultoría por proyecto o mentoría';
  const chosen=ctx.X3&&ctx.X3!=='No lo sé'?ctx.X3:null;
  return {format,chosen};
}

function showDiagnostic(event){
  event.preventDefault();
  const form=event.currentTarget, values=Object.fromEntries(new FormData(form)), status=$('#diagStatus');
  const all=[...DIAG_DIMENSIONS.flatMap(d=>d.questions.map(q=>q[0])),...DIAG_CONTEXT.map(q=>q[0])];
  const missing=all.filter(id=>!(id in values));
  if(missing.length){status.textContent=`Faltan ${missing.length} ${missing.length===1?'pregunta':'preguntas'} por responder.`; form.querySelector(`[name="${missing[0]}"]`).closest('fieldset').scrollIntoView({behavior:'smooth',block:'center'}); return;}
  status.textContent='';
  const scores=Object.fromEntries(DIAG_DIMENSIONS.map(d=>[d.id,d.questions.reduce((s,q)=>s+Number(values[q[0]]),0)]));
  const total=Object.values(scores).reduce((a,b)=>a+b,0);
  const level=DIAG_LEVELS.find(l=>total<=l.max);
  const weak=DIAG_DIMENSIONS.filter(d=>scores[d.id]<=3);
  const ctx={X1:values.X1,X2:values.X2,X3:values.X3};
  const rec=diagRecommendation(level,scores,ctx);
  const bars=DIAG_DIMENSIONS.map(d=>`<div class="diag-bar"><span>${d.name}</span><div class="diag-track" role="img" aria-label="${d.name}: ${scores[d.id]} de 9"><i style="width:${Math.round(scores[d.id]/9*100)}%"></i></div><b>${scores[d.id]}/9</b></div>`).join('');
  const priorities=weak.length?`<h3>Prioridad</h3><ul>${weak.map(d=>`<li><strong>${d.name}</strong> (${scores[d.id]}/9): ${d.focus}.</li>`).join('')}</ul>`:'';
  const formatText=rec.chosen?`<p><strong>Formato que has elegido:</strong> ${escapeHtml(rec.chosen)}. Por el resultado, el contenido debería centrarse en ${weak.length?weak.map(d=>d.name.toLowerCase()).join(' y '):'consolidar lo que ya funciona y elegir nuevos casos de uso'}.</p><p class="muted">Por el resultado, el formato sugerido sería: ${rec.format}.</p>`:`<p><strong>Formato recomendado:</strong> ${rec.format}.</p>`;
  const summary=[`Resultado del diagnóstico IA: ${total}/36 · nivel ${level.name}.`,...DIAG_DIMENSIONS.map(d=>`- ${d.name}: ${scores[d.id]}/9`),`Grupo: ${ctx.X1}. Preocupación principal: ${ctx.X2}. Formato preferido: ${ctx.X3}.`,`Recomendación orientativa: ${rec.chosen||rec.format}.`,'','Me gustaría comentarlo:'].join('\n');
  $('#diagResult').innerHTML=`<section class="card diag-result"><p class="section-kicker">Resultado orientativo</p><h2>${total}/36 · ${level.name}</h2><p class="lead">${level.text}</p><div class="diag-bars">${bars}</div>${priorities}${formatText}<p class="muted">Recuerda: es una autoevaluación orientativa. La propuesta definitiva se ajusta tras una primera conversación.</p><div class="hero-actions"><a class="btn" href="#contacto" data-action="contact" data-subject="Propuesta de formación o consultoría en IA" data-message="${escapeHtml(summary)}">Enviar el resultado a Ramón</a><button class="btn secondary" type="button" id="diagReset">Repetir el diagnóstico</button></div></section>`;
  $('#diagReset').addEventListener('click',()=>{form.reset();$('#diagResult').innerHTML='';window.scrollTo({top:0,behavior:'smooth'});});
  $('#diagResult').scrollIntoView({behavior:'smooth',block:'start'});
}
