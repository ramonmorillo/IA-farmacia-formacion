const teachingData=window.TEACHING_DATA;

function teachingProgramCard(program){
  return `<article class="course-card"><div class="course-index">${program.number}</div><div><p class="section-kicker">${program.level}</p><h2>${program.title}</h2><p>${program.promise}</p><div class="course-facts"><span>${program.sessions.length} sesiones</span><span>${program.duration}</span><span>${program.outcomes.length} productos</span></div><a class="btn" href="#${program.id}">Ver programa completo</a></div></article>`;
}

function renderTeachingHome(){
  const featured=teachingData.featuredTools.slice(0,3);
  shell('Tu aula de inteligencia artificial aplicada a farmacia hospitalaria',`<section class="teaching-intro"><div><p class="lead">Cursos, sesiones y actividades preparados para aprender haciendo y para utilizarlos directamente durante una formación.</p><p>Empieza por un recorrido. Cada sesión indica qué explicar, qué demostrar, qué debe hacer el participante y qué evidencia tiene que producir.</p><div class="hero-actions"><a class="btn" href="#aula">Abrir el aula</a><a class="btn secondary" href="#cursos">Ver los tres cursos</a></div></div><aside class="teaching-callout"><strong>El método de trabajo</strong><ol><li>Comprender la decisión.</li><li>Ver una demostración.</li><li>Practicar con datos ficticios.</li><li>Verificar el resultado.</li><li>Conservar una evidencia.</li></ol></aside></section><section><p class="section-kicker">Tres recorridos</p><h2>Elige por el resultado que necesitas</h2><div class="course-grid">${teachingData.programs.map(teachingProgramCard).join('')}</div></section><section class="teaching-sequence"><div><p class="section-kicker">Antes</p><h3>Preparar</h3><p>Selecciona curso, sesión y herramientas. Comparte el objetivo y los requisitos con el grupo.</p></div><div><p class="section-kicker">Durante</p><h3>Impartir</h3><p>Proyecta la sesión, abre la demostración y utiliza la actividad con el tiempo indicado.</p></div><div><p class="section-kicker">Después</p><h3>Comprobar</h3><p>Recoge el producto, aplica tu rúbrica privada y documenta qué debe mejorar el grupo.</p></div></section><section><div class="section-heading"><div><p class="section-kicker">Laboratorio aplicado</p><h2>Herramientas que se abren, no repositorios de código</h2></div><a href="#portfolio">Ver todo el laboratorio</a></div><div class="tool-strip">${featured.map(t=>`<a href="${t[2]}" target="_blank" rel="noreferrer"><strong>${t[0]}</strong><span>${t[1]}</span><em>Abrir herramienta ↗</em></a>`).join('')}</div></section>`);
}

function renderCourseIndex(){
  shell('Cursos para enseñar y aplicar',`<p class="lead">Tres itinerarios independientes y combinables. El programa completo es público; las soluciones, rúbricas y notas de facilitación permanecen en el kit docente privado.</p><div class="course-grid">${teachingData.programs.map(teachingProgramCard).join('')}</div><section class="card course-choice"><div><p class="section-kicker">Si no sabes por dónde empezar</p><h2>Usa el configurador según el grupo y el resultado esperado</h2><p>La recomendación distingue nivel, formato, tamaño y tipo de organización.</p></div><a class="btn" href="#propuesta">Diseñar una formación</a></section><section class="teaching-faq"><p class="section-kicker">Preguntas frecuentes</p><h2>Antes de elegir un recorrido</h2><details><summary>¿Es necesario saber programar?</summary><p>No para los dos primeros cursos. El recorrido de creación de herramientas comienza sin código, pero requiere soltura básica con el ordenador y disposición para revisar pruebas y errores.</p></details><details><summary>¿Hay que utilizar datos de pacientes?</summary><p>No. Las prácticas se diseñan con información pública, anonimizada de forma efectiva o completamente ficticia. La autorización institucional debe comprobarse antes de cualquier uso profesional.</p></details><details><summary>¿Son cursos autónomos o para impartir en directo?</summary><p>Las páginas pueden consultarse de forma autónoma, pero su estructura principal está pensada para formaciones facilitadas: explicación, demostración, práctica y comprobación.</p></details><details><summary>¿Se necesitan suscripciones de pago?</summary><p>No como requisito general. Antes de cada formación se revisan las herramientas disponibles y se prepara una alternativa que no dependa de contratar una API.</p></details><details><summary>¿Completar el curso valida una herramienta?</summary><p>No. Una práctica o un prototipo docente no equivalen a validación clínica, certificación institucional ni autorización para uso asistencial.</p></details></section>`);
}

function renderTeachingCourse(program){
  shell(program.title,`<section class="course-overview"><div><p class="lead">${program.promise}</p><div class="course-facts large"><span>${program.level}</span><span>${program.duration}</span><span>${program.sessions.length} sesiones</span></div><a class="btn" href="#${program.sessions[0].id}">Abrir la primera sesión</a></div><article class="card"><p class="section-kicker">Productos del participante</p><ul>${program.outcomes.map(x=>`<li>${x}</li>`).join('')}</ul></article></section><section class="before-after"><article><p class="section-kicker">Punto de partida</p><h2>Antes</h2><ul>${program.before.map(x=>`<li>${x}</li>`).join('')}</ul></article><article><p class="section-kicker">Resultado esperado</p><h2>Después</h2><ul>${program.after.map(x=>`<li>${x}</li>`).join('')}</ul></article></section><section><p class="section-kicker">Programa completo</p><h2>Cada sesión termina en una evidencia</h2><div class="session-list">${program.sessions.map((session,index)=>`<article><div class="session-number">${String(index+1).padStart(2,'0')}</div><div><p class="session-meta">${session.duration}</p><h3>${session.title}</h3><p>${session.summary}</p><p><strong>Producto:</strong> ${session.outcome}</p></div><a class="btn secondary" href="#${session.id}">Abrir sesión</a></article>`).join('')}</div></section><section class="grid two"><article class="card"><h2>Cómo se trabaja</h2><ul><li>Explicaciones breves orientadas a decisiones.</li><li>Demostraciones que hacen visible el proceso.</li><li>Práctica con información pública o ficticia.</li><li>Comprobación mediante un producto observable.</li></ul></article><article class="card"><h2>Qué no promete</h2><ul><li>No sustituye formación clínica ni normativa institucional.</li><li>No convierte un prototipo en herramienta validada.</li><li>No exige introducir información de pacientes.</li><li>No depende de memorizar marcas o interfaces.</li></ul></article></section>`);
}

function renderClassroom(){
  shell('Aula de formación',`<p class="lead">Selecciona una sesión y úsala como guion público durante la clase. Las respuestas y criterios detallados de evaluación se mantienen fuera de esta web.</p>${teachingData.programs.map(program=>`<section class="classroom-course"><div class="section-heading"><div><p class="section-kicker">Curso ${program.number}</p><h2>${program.shortTitle}</h2></div><a href="#${program.id}">Ver programa</a></div><div class="classroom-sessions">${program.sessions.map((session,index)=>`<a href="#${session.id}"><span>${String(index+1).padStart(2,'0')}</span><div><strong>${session.title}</strong><small>${session.duration} · ${session.outcome}</small></div></a>`).join('')}</div></section>`).join('')}`);
}

function findTeachingSession(id){
  for(const program of teachingData.programs){
    const index=program.sessions.findIndex(session=>session.id===id);
    if(index>=0)return {program,session:program.sessions[index],index};
  }
}

function sessionLinks(links){
  return links.map(([label,url])=>`<a class="btn secondary" href="${url}" ${url.startsWith('#')?'':'target="_blank" rel="noreferrer"'}>${label}</a>`).join('');
}

function relatedCases(ids){
  return (ids||[]).map(id=>(data.cases||[]).find(item=>item.id===id)).filter(Boolean);
}

function downloadTeachingTemplate(sessionId){
  const found=findTeachingSession(sessionId);
  if(!found)return;
  const {program,session}=found;
  const content=[
    `# ${session.template.title}`,
    '',
    `Curso: ${program.title}`,
    `Sesión: ${session.title}`,
    '',
    '## Ejemplo de trabajo',
    '',
    `**Contexto:** ${session.example.context}`,
    '',
    `**Tarea:** ${session.example.task}`,
    '',
    `**Evidencia esperada:** ${session.example.expectedEvidence}`,
    '',
    '## Ficha del participante',
    '',
    ...session.template.fields.flatMap(field=>[`### ${field}`,'','________________________________________________________________','']),
    '---',
    'Utiliza únicamente información pública, efectivamente anonimizada o ficticia. Revisa el resultado con criterio profesional.'
  ].join('\n');
  const filename=`${session.id}-ficha-participante.md`;
  const blob=new Blob([content],{type:'text/markdown;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const link=document.createElement('a');
  link.href=url; link.download=filename; link.click();
  URL.revokeObjectURL(url);
}

function renderTeachingSession(found){
  const {program,session,index}=found;
  const previous=program.sessions[index-1];
  const next=program.sessions[index+1];
  const cases=relatedCases(session.caseIds);
  shell(session.title,`<div class="session-shell"><aside class="session-agenda"><p class="section-kicker">Curso ${program.number}</p><a href="#${program.id}">${program.shortTitle}</a><dl><dt>Duración</dt><dd>${session.duration}</dd><dt>Producto</dt><dd>${session.outcome}</dd></dl><ol><li>Apertura y objetivo</li><li>Tres ideas clave</li><li>Demostración</li><li>Ejemplo farmacéutico</li><li>Actividad y ficha</li><li>Casos y comprobación</li></ol><button class="btn secondary" type="button" onclick="window.print()">Imprimir sesión</button></aside><article class="session-content"><section class="opening-question"><p class="section-kicker">Pregunta de apertura</p><h2>${session.question}</h2></section><section><h2>Al terminar, el participante podrá</h2><ul class="objective-list">${session.objectives.map(x=>`<li>${x}</li>`).join('')}</ul></section><section><p class="section-kicker">Explicación</p><h2>Tres ideas que deben quedar claras</h2><div class="concept-grid">${session.concepts.map((x,i)=>`<article><span>0${i+1}</span><p>${x}</p></article>`).join('')}</div></section><section class="demo-block"><p class="section-kicker">Demostración en directo</p><h2>${session.demo.title}</h2><ol>${session.demo.steps.map(x=>`<li>${x}</li>`).join('')}</ol><div class="hero-actions">${sessionLinks(session.demo.links)}</div></section><section class="pharmacy-example"><p class="section-kicker">Ejemplo farmacéutico ficticio</p><h2>${session.example.title}</h2><p><strong>Contexto:</strong> ${session.example.context}</p><p><strong>Encargo al grupo:</strong> ${session.example.task}</p><p><strong>Evidencia esperada:</strong> ${session.example.expectedEvidence}</p></section><section class="activity-block"><div><p class="section-kicker">Actividad del participante · ${session.activity.time}</p><h2>${session.activity.title}</h2><ol>${session.activity.instructions.map(x=>`<li>${x}</li>`).join('')}</ol></div><aside><strong>Entrega</strong><p>${session.activity.deliverable}</p></aside></section><section class="participant-sheet"><div class="section-heading"><div><p class="section-kicker">Material de trabajo</p><h2>${session.template.title}</h2></div><button class="btn" type="button" onclick="downloadTeachingTemplate('${session.id}')">Descargar ficha .md</button></div><p>Complétala individualmente o en equipo. La descarga incluye el ejemplo y campos en blanco; no contiene la solución.</p><div class="template-fields">${session.template.fields.map(field=>`<div><strong>${field}</strong><span aria-hidden="true"></span></div>`).join('')}</div></section><section><p class="section-kicker">Práctica conectada</p><h2>Casos relacionados</h2><div class="related-cases">${cases.map(item=>`<a href="#${item.id}"><span>${item.professionalArea}</span><strong>${item.title}</strong><small>${item.competency} · ${item.estimatedMinutes} min</small></a>`).join('')}</div></section><section><p class="section-kicker">Comprobación</p><h2>Evidencia mínima antes de cerrar</h2><ul class="check-list">${session.checklist.map(x=>`<li>${x}</li>`).join('')}</ul><p class="private-note">La solución razonada, la rúbrica y las notas de facilitación se encuentran en el kit docente privado.</p></section><nav class="session-nav">${previous?`<a class="btn secondary" href="#${previous.id}">← Sesión anterior</a>`:`<a class="btn secondary" href="#${program.id}">← Programa</a>`}<a class="btn secondary" href="#aula">Todas las sesiones</a>${next?`<a class="btn" href="#${next.id}">Siguiente sesión →</a>`:`<a class="btn" href="#casos">Practicar con casos →</a>`}</nav></article></div>`,'teaching-session');
}

function renderToolLab(){
  const tools=(data.portfolio||[]).filter(tool=>tool.featured&&tool.published&&tool.name!=='IA-farmacia-formacion');
  shell('Herramientas farmacéuticas para abrir y analizar',`<p class="lead">Accede directamente a las aplicaciones publicadas. En clase pueden utilizarse para observar requisitos, reglas, decisiones, experiencia de uso, casos límite y necesidades de validación.</p><div class="tool-lab">${tools.map(tool=>`<article class="tool-card"><div><p class="section-kicker">${tool.category}</p><h2>${tool.name}</h2><p>${tool.problem}</p><p><strong>Qué permite estudiar:</strong> ${tool.activity||tool.solution}</p></div><a class="btn" href="${tool.published}" target="_blank" rel="noreferrer">Abrir herramienta ↗</a><p class="portfolio-warning">${tool.warning}</p></article>`).join('')}</div><section class="card"><h2>Propuesta de uso durante una formación</h2><ol><li>Define qué decisión o proceso representa la herramienta.</li><li>Ejecuta un caso ficticio normal y otro límite.</li><li>Identifica qué reglas necesitan fuente o validación profesional.</li><li>Propón una mejora y un criterio para comprobarla.</li></ol></section>`);
}
