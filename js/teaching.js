const teachingData=window.TEACHING_DATA;

function teachingProgramCard(program){
  return `<article class="course-card"><div class="course-index">${program.number}</div><div><p class="section-kicker">${program.level}</p><h2>${program.title}</h2><p>${program.promise}</p><div class="course-facts"><span>${program.sessions.length} sesiones</span><span>${program.duration}</span><span>${program.outcomes.length} productos</span></div><a class="btn" href="#${program.id}">Ver programa completo</a></div></article>`;
}

function renderTeachingHome(){
  shell('IA que entiende la farmacia hospitalaria.',`<div class="public-home">
    <section class="identity-hero"><div><p class="section-kicker">Ramón Morillo Verdugo · Farmacéutico de hospital</p><h1>IA que entiende la farmacia hospitalaria.</h1><p class="lead">Formación y conferencias para pasar de la curiosidad por la IA a proyectos útiles, verificables y seguros en el trabajo farmacéutico.</p><div class="hero-actions"><a class="btn" href="#cursos">Explorar formación <span aria-hidden="true">↗</span></a><a class="btn secondary" href="#contacto">Invitarme a una sesión</a></div><p class="hero-footnote">Para servicios de farmacia, sociedades científicas, universidades y equipos sanitarios.</p></div><figure class="hero-portrait"><img src="assets/ramon-morillo-retrato.webp" alt="Retrato de Ramón Morillo" width="1122" height="1402" fetchpriority="high"><figcaption>Ramón Morillo <span>Farmacia hospitalaria · IA aplicada</span></figcaption></figure></section>
    <section class="credibility" aria-label="Trayectoria"><p>Más de 20 años en farmacia hospitalaria</p><p>Coordinación MAPEX · SEFH</p><p>Investigación y docencia universitaria</p></section>
    <section class="home-section" id="home-formacion"><div class="section-intro"><div><p class="section-kicker">01 / Formación</p><h2>Aprender haciendo, desde el nivel de tu equipo.</h2></div><p>Talleres prácticos y programas modulares con casos de farmacia hospitalaria. Cada participante sale con un método y un trabajo que puede revisar.</p></div><div class="offer-grid"><article><span>01</span><h3>Empezar con criterio</h3><p>Fundamentos, privacidad, instrucciones, fuentes y comprobación de respuestas.</p><a href="#cursos">Ver cursos →</a></article><article><span>02</span><h3>Investigar y enseñar</h3><p>Búsqueda, lectura crítica, escritura científica y creación de materiales docentes.</p><a href="#cursos">Ver cursos →</a></article><article><span>03</span><h3>Construir herramientas</h3><p>De una necesidad concreta a un prototipo, sus pruebas y sus límites de uso.</p><a href="#cursos">Ver cursos →</a></article></div><p class="home-subnav"><a href="#aula">Entrar en el aula abierta</a><a href="#catalogo">Explorar la biblioteca técnica</a></p></section>
    <section class="home-feature"><div><p class="section-kicker">02 / Conferencias</p><h2>Ideas con aplicaciones reales en farmacia.</h2><p>Sesiones para congresos y equipos que necesitan comprender las oportunidades, los límites y las decisiones que importan. El contenido se ajusta al público y al tiempo disponible.</p><div class="event-teaser"><span>Próxima cita · Madrid, 3 de octubre de 2026</span><strong>FOCO-VIH</strong><a href="foco-3-octubre.html">Abrir materiales del encuentro →</a></div><a class="btn" href="#conferencias">Ver temas y formatos</a></div><div class="feature-quote"><span aria-hidden="true">“</span><p>Una buena demostración enseña también dónde falla la herramienta y cómo comprobarlo.</p></div></section>
    <section class="home-section"><div class="section-intro"><div><p class="section-kicker">03 / Proyectos</p><h2>Trabajo que se puede abrir y examinar.</h2></div><p>Ejemplos de desarrollo aplicado a problemas farmacéuticos. Su publicación no implica validación clínica ni autorización institucional.</p></div><div class="project-preview"><article><small>Estratificación farmacéutica</small><h3>Hub de Estratificación CMO</h3><p>Un único punto de acceso a las herramientas de estratificación por patologías y contextos. Cada aplicación mantiene sus criterios y límites propios.</p><a href="https://ramonmorillo.github.io/hub-estratificacionCMO/" target="_blank" rel="noopener noreferrer">Abrir el Hub CMO ↗</a></article><article><small>Seguridad farmacoterapéutica</small><h3>HIV Prescribing Cascade Auditor</h3><p>Herramienta de revisión de posibles cascadas terapéuticas en personas con VIH. Registro de propiedad intelectual 04/2026/2614, compartido con Cecilia Solís Martín.</p><a href="https://ramonmorillo.github.io/hiv-prescribing-cascade-auditor/" target="_blank" rel="noopener noreferrer">Abrir herramienta ↗</a></article><article><small>Plataforma con dominio propio</small><h3>IRIS CMO</h3><p>Atención farmacéutica y seguimiento del riesgo cardiovascular desde farmacia comunitaria. Registro de propiedad intelectual 04/2026/3197, compartido con María Romero Murillo.</p><a href="#iris">Conocer IRIS →</a></article></div><p class="home-subnav"><a href="#portfolio">Ver los proyectos con más detalle</a></p></section>
    <section class="home-about"><div><p class="section-kicker">Quién está detrás</p><h2>Farmacéutico primero. Docente y constructor de herramientas, también.</h2><p>Soy Ramón Morillo. Mi experiencia en atención farmacéutica, investigación y desarrollo me permite enseñar IA con el lenguaje y las restricciones de nuestro entorno de trabajo.</p><a href="#acerca">Conocer mi trayectoria →</a></div><div class="initial-mark" aria-hidden="true">RM</div></section>
    <section class="home-contact"><p class="section-kicker">Hablemos</p><h2>Cuéntame qué necesita aprender tu equipo.</h2><p>Indícame el público, el nivel de partida, el formato y el resultado que esperas. Prepararé una propuesta ajustada al contexto.</p><div class="hero-actions"><a class="btn" href="#contacto">Contactar</a><a class="btn secondary" href="#propuesta">Definir el encargo</a></div></section>
  </div>`);
  $('#app').classList.add('home-page');
}

function renderCourseIndex(){
  shell('Cursos para enseñar y aplicar',`<p class="lead">Tres itinerarios independientes y combinables. El programa completo es público; las soluciones, rúbricas y notas de facilitación permanecen en el kit docente privado.</p><div class="course-grid">${teachingData.programs.map(teachingProgramCard).join('')}</div><section class="card course-choice"><div><p class="section-kicker">Si no sabes por dónde empezar</p><h2>Usa el configurador según el grupo y el resultado esperado</h2><p>La recomendación distingue nivel, formato, tamaño y tipo de organización.</p></div><a class="btn" href="#propuesta">Diseñar una formación</a></section><section class="teaching-faq"><p class="section-kicker">Preguntas frecuentes</p><h2>Antes de elegir un recorrido</h2><details><summary>¿Es necesario saber programar?</summary><p>No para los dos primeros cursos. El recorrido de creación de herramientas comienza sin código, pero requiere soltura básica con el ordenador y disposición para revisar pruebas y errores.</p></details><details><summary>¿Hay que utilizar datos de pacientes?</summary><p>No. Las prácticas se diseñan con información pública, anonimizada de forma efectiva o completamente ficticia. La autorización institucional debe comprobarse antes de cualquier uso profesional.</p></details><details><summary>¿Son cursos autónomos o para impartir en directo?</summary><p>Las páginas pueden consultarse de forma autónoma, pero su estructura principal está pensada para formaciones facilitadas: explicación, demostración, práctica y comprobación.</p></details><details><summary>¿Se necesitan suscripciones de pago?</summary><p>No como requisito general. Antes de cada formación se revisan las herramientas disponibles y se prepara una alternativa que no dependa de contratar una API.</p></details><details><summary>¿Completar el curso valida una herramienta?</summary><p>No. Una práctica o un prototipo docente no equivalen a validación clínica, certificación institucional ni autorización para uso asistencial.</p></details></section>`);
}

function renderCourseDelivery(program){
  const delivery=program.delivery;
  if(!delivery)return '';
  return `<section class="flagship-course"><div class="section-heading"><div><p class="section-kicker">${delivery.label}</p><h2>Lista para impartir de principio a fin</h2></div><button class="btn" type="button" onclick="downloadCourseWorkbook('${program.id}')">Descargar cuaderno completo</button></div><p class="lead">${delivery.proposition}</p><div class="delivery-facts"><article><strong>Participantes</strong><p>${delivery.audience}</p></article><article><strong>Tamaño recomendado</strong><p>${delivery.groupSize}</p></article></div><h3>Formatos de impartición</h3><div class="delivery-formats">${delivery.formats.map(item=>`<article><span>${item.duration}</span><h4>${item.title}</h4><p>${item.description}</p></article>`).join('')}</div><div class="delivery-preflight"><article><p class="section-kicker">Antes de convocar</p><h3>Preparación del participante</h3><ul>${delivery.participantPreparation.map(item=>`<li>${item}</li>`).join('')}</ul></article><article><p class="section-kicker">Antes de abrir el aula</p><h3>Preparación logística</h3><ul>${delivery.roomSetup.map(item=>`<li>${item}</li>`).join('')}</ul></article></div><h3>Agenda recomendada para una jornada presencial</h3><div class="live-agenda">${delivery.liveAgenda.map(item=>`<article><time>${item.time}</time><div><h4>${item.sessionId?`<a href="#${item.sessionId}">${item.title}</a>`:item.title}</h4><p>${item.detail}</p></div></article>`).join('')}</div><section class="capstone"><p class="section-kicker">Transferencia a la práctica</p><h3>${delivery.capstone.title}</h3><p>${delivery.capstone.task}</p><strong>Carpeta de evidencias</strong><ul>${delivery.capstone.evidence.map(item=>`<li>${item}</li>`).join('')}</ul><p class="portfolio-warning">${delivery.capstone.boundary}</p></section><section><p class="section-kicker">Después de la formación</p><h3>Plan de transferencia 48 horas · 2 semanas · 30 días</h3><ol>${delivery.followUp.map(item=>`<li>${item}</li>`).join('')}</ol></section></section>`;
}

function renderTeachingCourse(program){
  shell(program.title,`<section class="course-overview"><div><p class="lead">${program.promise}</p><div class="course-facts large"><span>${program.level}</span><span>${program.duration}</span><span>${program.sessions.length} sesiones</span></div><a class="btn" href="#${program.sessions[0].id}">Abrir la primera sesión</a></div><article class="card"><p class="section-kicker">Productos del participante</p><ul>${program.outcomes.map(x=>`<li>${x}</li>`).join('')}</ul></article></section><section class="before-after"><article><p class="section-kicker">Punto de partida</p><h2>Antes</h2><ul>${program.before.map(x=>`<li>${x}</li>`).join('')}</ul></article><article><p class="section-kicker">Resultado esperado</p><h2>Después</h2><ul>${program.after.map(x=>`<li>${x}</li>`).join('')}</ul></article></section><section><p class="section-kicker">Programa completo</p><h2>Cada sesión termina en una evidencia</h2><div class="session-list">${program.sessions.map((session,index)=>`<article><div class="session-number">${String(index+1).padStart(2,'0')}</div><div><p class="session-meta">${session.duration}</p><h3>${session.title}</h3><p>${session.summary}</p><p><strong>Producto:</strong> ${session.outcome}</p></div><a class="btn secondary" href="#${session.id}">Abrir sesión</a></article>`).join('')}</div></section>${renderCourseDelivery(program)}<section class="grid two"><article class="card"><h2>Cómo se trabaja</h2><ul><li>Explicaciones breves orientadas a decisiones.</li><li>Demostraciones que hacen visible el proceso.</li><li>Práctica con información pública o ficticia.</li><li>Comprobación mediante un producto observable.</li></ul></article><article class="card"><h2>Qué no promete</h2><ul><li>No sustituye formación clínica ni normativa institucional.</li><li>No convierte un prototipo en herramienta validada.</li><li>No exige introducir información de pacientes.</li><li>No depende de memorizar marcas o interfaces.</li></ul></article></section>`);
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

function teachingTable(block){
  return `<div class="session-table-wrap"><table><thead><tr>${block.headers.map(x=>`<th>${x}</th>`).join('')}</tr></thead><tbody>${block.rows.map(row=>`<tr>${row.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function renderPromptBuilder(session){
  if(!session.promptBuilder)return '';
  const requirements=findTeachingSession('sesion-requisitos').session.template.fields;
  const fields=requirements.map((label,index)=>{
    const key=`requirement-${index}`;
    const required=label==='Problema'||label==='Criterios de aceptación';
    return `<div class="prompt-field"><label for="${key}">${label}${required?' *':''}</label><textarea id="${key}" data-requirement="${label}" ${required?'required aria-describedby="'+key+'-error"':''}></textarea>${required?`<span class="field-error" id="${key}-error"></span>`:''}</div>`;
  }).join('');
  return `<section class="card prompt-builder" id="prompt-builder"><p class="section-kicker">Asistente</p><h2>${session.promptBuilder.title}</h2><p>Nada de lo que escribas se guarda ni sale de este navegador. Copia o descarga tu resultado antes de cerrar.</p><form id="first-prompt-form" novalidate><div class="prompt-field"><label for="tool-name">Nombre de la herramienta *</label><input id="tool-name" required aria-describedby="tool-name-error"><span class="field-error" id="tool-name-error"></span></div><fieldset><legend>¿La herramienta manejará datos de pacientes?</legend><label><input type="radio" name="patient-data" value="Sí"> Sí</label><label><input type="radio" name="patient-data" value="No" checked> No</label></fieldset><fieldset><legend>Agente que usarás</legend><label><input type="radio" name="code-agent" value="Codex" checked> Codex</label><label><input type="radio" name="code-agent" value="Claude Code"> Claude Code</label></fieldset><p class="patient-warning" id="patient-warning" role="alert" hidden>El repositorio y la web serán públicos. No uses nunca datos reales de pacientes, ni siquiera seudonimizados, en el código, en los ejemplos ni en el repositorio.</p><div class="prompt-fields">${fields}</div><button class="btn" type="submit">Generar</button></form><div id="prompt-results" class="prompt-results" hidden><article><h3>PRIMER PROMPT</h3><pre id="first-prompt-output" tabindex="0"></pre><div class="hero-actions"><button class="btn secondary" type="button" data-copy-output="first-prompt-output">Copiar</button><button class="btn secondary" type="button" data-download-output="first-prompt-output" data-filename="primer-prompt.md">Descargar .md</button></div></article><article><h3>ARCHIVO DE INSTRUCCIONES: <span id="instructions-filename">AGENTS.md</span></h3><pre id="instructions-output" tabindex="0"></pre><div class="hero-actions"><button class="btn secondary" type="button" data-copy-output="instructions-output">Copiar</button><button class="btn secondary" type="button" data-download-output="instructions-output" id="instructions-download" data-filename="AGENTS.md">Descargar .md</button></div></article></div><article class="change-prompt"><h3>Prompt de cambio (fase B)</h3><pre id="change-prompt-output"># Prompt de cambio (fase B)\n\n## Qué cambiar\n\n## Qué no tocar\n\n## Criterios de aceptación\n\n## Pruebas\n\n## Entrega\nEntrega el cambio como pull request.</pre><button class="btn secondary" type="button" data-copy-output="change-prompt-output">Copiar</button></article></section>`;
}

function renderSessionExtras(session){
  const parts=[];
  if(session.prerequisites)parts.push(`<section class="card session-prerequisites"><p class="section-kicker">Preparación</p><h2>${session.prerequisites.title}</h2><ul class="check-list">${session.prerequisites.items.map(x=>`<li>${x}</li>`).join('')}</ul></section>`);
  if(session.repoAnatomy)parts.push(`<section class="card repo-anatomy"><p class="section-kicker">Orientación</p><h2>${session.repoAnatomy.title}</h2>${teachingTable(session.repoAnatomy)}<p><a href="${session.repoAnatomy.link[1]}">${session.repoAnatomy.link[0]}</a></p></section>`);
  parts.push(renderPromptBuilder(session));
  if(session.workflow)parts.push(`<section class="session-workflow"><p class="section-kicker">Método</p><h2>${session.workflow.title}</h2><div class="workflow-grid">${session.workflow.phases.map(phase=>`<article class="card"><h3>${phase.title}</h3><ol>${phase.steps.map(step=>`<li><p>${step}</p><small><strong>Qué deberías ver:</strong> el resultado descrito en este paso.</small></li>`).join('')}</ol></article>`).join('')}</div><p class="private-note">${session.workflow.note}</p></section>`);
  if(session.troubleshooting)parts.push(`<section class="card troubleshooting"><p class="section-kicker">Ayuda</p><h2>${session.troubleshooting.title}</h2>${teachingTable(session.troubleshooting)}</section>`);
  if(session.security)parts.push(`<section class="card session-security"><p class="section-kicker">Límites</p><h2>${session.security.title}</h2><ul class="check-list">${session.security.items.map(x=>`<li>${x}</li>`).join('')}</ul></section>`);
  return parts.join('');
}

function promptValue(label){
  return document.querySelector(`[data-requirement="${label}"]`)?.value.trim()||'';
}

function patientClauses(){
  return ['No enviar datos a ningún servidor.','No guardar datos introducidos por el usuario en el navegador salvo petición expresa.','Usar ejemplos solo con datos ficticios marcados como tales.','Incluir un aviso de uso en el README.'];
}

function initializePromptBuilder(){
  const form=document.getElementById('first-prompt-form');
  if(!form)return;
  const warning=document.getElementById('patient-warning');
  form.addEventListener('change',()=>{warning.hidden=form.elements['patient-data'].value!=='Sí';});
  form.addEventListener('submit',event=>{
    event.preventDefault();
    document.querySelectorAll('.field-error').forEach(x=>x.textContent='');
    const required=[{element:document.getElementById('tool-name'),message:'Indica el nombre de la herramienta.'},{element:document.querySelector('[data-requirement="Problema"]'),message:'Describe el problema.'},{element:document.querySelector('[data-requirement="Criterios de aceptación"]'),message:'Añade al menos un criterio de aceptación.'}];
    const missing=required.find(item=>!item.element.value.trim());
    if(missing){
      document.getElementById(`${missing.element.id}-error`).textContent=missing.message;
      missing.element.setAttribute('aria-invalid','true');
      missing.element.focus();
      document.getElementById('prompt-results').hidden=true;
      return;
    }
    required.forEach(item=>item.element.removeAttribute('aria-invalid'));
    const values=Object.fromEntries([...form.querySelectorAll('[data-requirement]')].map(x=>[x.dataset.requirement,x.value.trim()]));
    const criteria=values['Criterios de aceptación'].split('\n').map(x=>x.trim()).filter(Boolean).map(x=>`- ${x}`).join('\n');
    const patient=form.elements['patient-data'].value==='Sí';
    const protection=patient?`\n\n## Protección de datos\n${patientClauses().map(x=>`- ${x}`).join('\n')}`:'';
    const prompt=`# ${document.getElementById('tool-name').value.trim()}\n\n## Objetivo\nCrear la herramienta descrita en esta especificación.\n\n## Contexto de uso\n- Usuario: ${values.Usuario||''}\n- Problema: ${values.Problema}\n- Decisión apoyada: ${values['Decisión apoyada']||''}\n\n## Entradas, reglas con su fuente y salidas\n- Entradas: ${values['Entradas mínimas']||''}\n- Reglas y fuente: ${values['Reglas y fuente']||''}\n- Salidas: ${values.Salidas||''}\n\n## Fuera de alcance\n${values['Casos fuera de alcance']||''}\n\n## Tecnología\nHTML, CSS y JavaScript sin compilación, compatible con GitHub Pages, sin dependencias ni servicios externos.\n\n## Qué no hacer\nNo ampliar el alcance ni usar datos reales de pacientes.\n\n## Criterios de aceptación\n${criteria}\n\n## Pruebas a realizar antes de terminar\nComprobar cada criterio de aceptación.\n\n## Entrega\nEntregar como pull request con una descripción de los cambios y el resultado de cada criterio.${protection}`;
    const agent=form.elements['code-agent'].value;
    const filename=agent==='Codex'?'AGENTS.md':'CLAUDE.md';
    const instructions=`# Instrucciones permanentes\n\n- Crear una web estática sin compilación.\n- No añadir dependencias ni servicios externos sin permiso.\n- No romper funcionalidades existentes y verificarlas tras cada cambio.\n- Trabajar siempre mediante pull request con cambios pequeños.\n- Mantener el README con finalidad, uso y limitaciones.\n- La herramienta es docente y no sustituye el juicio clínico ni está validada clínicamente.${patient?`\n${patientClauses().map(x=>`- ${x}`).join('\n')}`:''}`;
    document.getElementById('first-prompt-output').textContent=prompt;
    document.getElementById('instructions-output').textContent=instructions;
    document.getElementById('instructions-filename').textContent=filename;
    document.getElementById('instructions-download').dataset.filename=filename;
    document.getElementById('prompt-results').hidden=false;
  });
  document.querySelectorAll('[data-copy-output]').forEach(button=>button.addEventListener('click',()=>navigator.clipboard.writeText(document.getElementById(button.dataset.copyOutput).textContent)));
  document.querySelectorAll('[data-download-output]').forEach(button=>button.addEventListener('click',()=>{
    const content=document.getElementById(button.dataset.downloadOutput).textContent;
    const url=URL.createObjectURL(new Blob([content],{type:'text/markdown;charset=utf-8'}));
    const link=document.createElement('a'); link.href=url; link.download=button.dataset.filename; link.click(); URL.revokeObjectURL(url);
  }));
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

function downloadCourseWorkbook(programId){
  const program=teachingData.programs.find(item=>item.id===programId);
  if(!program||!program.delivery)return;
  const delivery=program.delivery;
  const sections=program.sessions.flatMap((session,index)=>[
    '',
    `# ${index+1}. ${session.title}`,
    '',
    `Duración: ${session.duration}`,
    '',
    `**Pregunta de apertura:** ${session.question}`,
    '',
    `**Ejemplo:** ${session.example.title}`,
    '',
    `**Contexto:** ${session.example.context}`,
    '',
    `**Tarea:** ${session.example.task}`,
    '',
    `**Evidencia esperada:** ${session.example.expectedEvidence}`,
    '',
    ...session.template.fields.flatMap(field=>[`## ${field}`,'','________________________________________________________________',''])
  ]);
  const content=[
    `# Cuaderno del participante`,
    '',
    `## ${program.title}`,
    '',
    delivery.proposition,
    '',
    '### Compromiso de seguridad',
    '',
    'Trabajaré únicamente con información pública, efectivamente anonimizada o ficticia. No introduciré datos personales, clínicos, internos o confidenciales sin autorización institucional expresa.',
    ...sections,
    '',
    `# ${delivery.capstone.title}`,
    '',
    delivery.capstone.task,
    '',
    ...delivery.capstone.evidence.flatMap(item=>[`## ${item}`,'','________________________________________________________________','']),
    '',
    `> ${delivery.capstone.boundary}`,
    '',
    '# Plan de transferencia',
    '',
    ...delivery.followUp.map(item=>`- [ ] ${item}`)
  ].join('\n');
  const blob=new Blob([content],{type:'text/markdown;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const link=document.createElement('a');
  link.href=url; link.download=`${program.id}-cuaderno-participante.md`; link.click();
  URL.revokeObjectURL(url);
}

function renderTeachingSession(found){
  const {program,session,index}=found;
  const previous=program.sessions[index-1];
  const next=program.sessions[index+1];
  const cases=relatedCases(session.caseIds);
  shell(session.title,`<div class="session-shell"><aside class="session-agenda"><p class="section-kicker">Curso ${program.number}</p><a href="#${program.id}">${program.shortTitle}</a><dl><dt>Duración</dt><dd>${session.duration}</dd><dt>Producto</dt><dd>${session.outcome}</dd></dl><ol>${session.promptBuilder?'<li>Apertura y objetivo</li><li>Tres ideas clave</li><li>Demostración</li><li>Antes de la sesión</li><li>Partes del repositorio</li><li>Asistente de primer prompt</li><li>Dos ciclos de trabajo</li><li>Resolución de problemas</li><li>Datos y responsabilidad</li><li>Ejemplo farmacéutico</li><li>Actividad y ficha</li><li>Casos y comprobación</li>':'<li>Apertura y objetivo</li><li>Tres ideas clave</li><li>Demostración</li><li>Ejemplo farmacéutico</li><li>Actividad y ficha</li><li>Casos y comprobación</li>'}</ol><button class="btn secondary" type="button" onclick="window.print()">Imprimir sesión</button></aside><article class="session-content"><section class="opening-question"><p class="section-kicker">Pregunta de apertura</p><h2>${session.question}</h2></section><section><h2>Al terminar, el participante podrá</h2><ul class="objective-list">${session.objectives.map(x=>`<li>${x}</li>`).join('')}</ul></section><section><p class="section-kicker">Explicación</p><h2>Tres ideas que deben quedar claras</h2><div class="concept-grid">${session.concepts.map((x,i)=>`<article><span>0${i+1}</span><p>${x}</p></article>`).join('')}</div></section><section class="demo-block"><p class="section-kicker">Demostración en directo</p><h2>${session.demo.title}</h2><ol>${session.demo.steps.map(x=>`<li>${x}</li>`).join('')}</ol><div class="hero-actions">${sessionLinks(session.demo.links)}</div></section>${renderSessionExtras(session)}<section class="pharmacy-example"><p class="section-kicker">Ejemplo farmacéutico ficticio</p><h2>${session.example.title}</h2><p><strong>Contexto:</strong> ${session.example.context}</p><p><strong>Encargo al grupo:</strong> ${session.example.task}</p><p><strong>Evidencia esperada:</strong> ${session.example.expectedEvidence}</p></section><section class="activity-block"><div><p class="section-kicker">Actividad del participante · ${session.activity.time}</p><h2>${session.activity.title}</h2><ol>${session.activity.instructions.map(x=>`<li>${x}</li>`).join('')}</ol></div><aside><strong>Entrega</strong><p>${session.activity.deliverable}</p></aside></section><section class="participant-sheet"><div class="section-heading"><div><p class="section-kicker">Material de trabajo</p><h2>${session.template.title}</h2></div><button class="btn" type="button" onclick="downloadTeachingTemplate('${session.id}')">Descargar ficha .md</button></div><p>Complétala individualmente o en equipo. La descarga incluye el ejemplo y campos en blanco; no contiene la solución.</p><div class="template-fields">${session.template.fields.map(field=>`<div><strong>${field}</strong><span aria-hidden="true"></span></div>`).join('')}</div></section><section><p class="section-kicker">Práctica conectada</p><h2>Casos relacionados</h2><div class="related-cases">${cases.map(item=>`<a href="#${item.id}"><span>${item.professionalArea}</span><strong>${item.title}</strong><small>${item.competency} · ${item.estimatedMinutes} min</small></a>`).join('')}</div></section><section><p class="section-kicker">Comprobación</p><h2>Evidencia mínima antes de cerrar</h2><ul class="check-list">${session.checklist.map(x=>`<li>${x}</li>`).join('')}</ul><p class="private-note">La solución razonada, la rúbrica y las notas de facilitación se encuentran en el kit docente privado.</p></section><nav class="session-nav">${previous?`<a class="btn secondary" href="#${previous.id}">← Sesión anterior</a>`:`<a class="btn secondary" href="#${program.id}">← Programa</a>`}<a class="btn secondary" href="#aula">Todas las sesiones</a>${next?`<a class="btn" href="#${next.id}">Siguiente sesión →</a>`:`<a class="btn" href="#casos">Practicar con casos →</a>`}</nav></article></div>`,'teaching-session');
  initializePromptBuilder();
}

function renderToolLab(){
  shell('Proyectos y herramientas',`<p class="lead">Tres líneas de trabajo que muestran cómo una necesidad farmacéutica se convierte en una herramienta revisable. Las aplicaciones publicadas no equivalen por sí mismas a validación clínica ni autorización para uso asistencial.</p><div class="tool-lab curated-tools"><article class="tool-card"><p class="section-kicker">Estratificación CMO</p><h2>Hub de Estratificación CMO</h2><p>El acceso unificado a las herramientas de estratificación: VIH, riesgo cardiovascular y otras áreas terapéuticas desde un solo lugar.</p><p>Las reglas y el alcance deben comprobarse en cada herramienta antes de usarla.</p><a class="btn" href="https://ramonmorillo.github.io/hub-estratificacionCMO/" target="_blank" rel="noopener noreferrer">Abrir Hub CMO ↗</a></article><article class="tool-card"><p class="section-kicker">Seguridad farmacoterapéutica</p><h2>HIV Prescribing Cascade Auditor</h2><p>Auditoría estructurada de posibles cascadas terapéuticas en personas con VIH para su revisión profesional.</p><p class="registration"><strong>Registro de propiedad intelectual:</strong> programa de ordenador, asiento 04/2026/2614. Autoría y titularidad originaria compartidas por Ramón Alejandro Morillo Verdugo (50 %) y Cecilia Solís Martín (50 %).</p><a class="btn" href="https://ramonmorillo.github.io/hiv-prescribing-cascade-auditor/" target="_blank" rel="noopener noreferrer">Abrir herramienta ↗</a></article><article class="tool-card"><p class="section-kicker">Plataforma con dominio propio</p><h2>IRIS CMO</h2><p>Plataforma de atención farmacéutica CMO y seguimiento del riesgo cardiovascular en farmacia comunitaria, vinculada al proyecto de investigación de María Romero Murillo.</p><p class="registration"><strong>Registro de propiedad intelectual:</strong> programa de ordenador, asiento 04/2026/3197. Autoría y titularidad originaria compartidas por Ramón Alejandro Morillo Verdugo (50 %) y María Romero Murillo (50 %).</p><a class="btn" href="#iris">Conocer el proyecto IRIS →</a></article></div><section class="card"><h2>Cómo se usan en formación</h2><p>Se trabaja con ejemplos ficticios para analizar la decisión apoyada, las fuentes, los casos límite y la evidencia que faltaría antes de utilizar una herramienta en la práctica real.</p><a href="#aula">Explorar el aula</a></section>`);
}
