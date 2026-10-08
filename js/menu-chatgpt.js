// Dibuja el bloque «El menú + de ChatGPT» a partir de data/menu-chatgpt.js.
// Sin dependencias. Filtros por tipo y nivel, búsqueda, tarjetas con ejercicio plegable, prompts copiables y quiz autocorregible.
(function () {
  const data = window.MENU_CHATGPT;
  const root = document.getElementById('menu-chatgpt-app');
  if (!data || !root) return;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const byId = Object.fromEntries(data.cards.map(c => [c.id, c]));
  const state = { type: 'todos', level: 'todos', text: '' };

  const chip = (group, value, label) => `<button type="button" class="mc-chip" data-group="${group}" data-value="${value}" aria-pressed="${state[group] === value}">${esc(label)}</button>`;
  const access = c => c.access === 'general'
    ? '<span class="mc-access mc-general">Función general</span>'
    : '<span class="mc-access mc-installed">Instalada en la cuenta del docente</span>';
  const materials = c => (c.materials || []).map(m => `<a href="${esc(m.href)}"${m.external ? ' target="_blank" rel="noopener noreferrer"' : ' download'}>${esc(m.label)}${m.external ? ' ↗' : ''}</a>`).join(' · ');

  const card = c => `<article class="mc-card" data-id="${c.id}" data-type="${c.type}" data-level="${c.level}">
    <div class="mc-card-top"><span class="mc-icon" aria-hidden="true">${c.icon}</span><div><h4 id="mc-${c.id}-name">${esc(c.name)}</h4>
    <p class="mc-tags"><span>${esc(data.types[c.type])}</span><span>${esc(data.levels[c.level])}</span>${access(c)}</p></div></div>
    <p><strong>Qué es.</strong> ${esc(c.what)}</p>
    <p><strong>Para qué me sirve en FH.</strong> ${esc(c.use)}</p>
    <p class="mc-availability">${esc(c.availability)}</p>
    <button type="button" class="mc-toggle" aria-expanded="false" aria-controls="mc-${c.id}-ex">Mostrar ejercicio</button>
    <div class="mc-exercise" id="mc-${c.id}-ex" hidden>
      <p><strong>Ejercicio.</strong> ${esc(c.exercise)}</p>
      ${c.materials ? `<p class="mc-materials">${materials(c)}</p>` : ''}
      <div class="prompt"><strong>Prompt</strong><pre id="mc-${c.id}-prompt">${esc(c.prompt)}</pre><button type="button" class="mc-copy" data-target="mc-${c.id}-prompt">Copiar prompt</button><span class="copy-status" role="status" aria-live="polite"></span></div>
      <p class="check-note"><strong>Comprobación:</strong> ${esc(c.check)}</p>
      ${c.link ? `<p class="mc-link"><a href="${esc(c.link.href)}">${esc(c.link.label)} →</a></p>` : ''}
    </div>
  </article>`;

  const quiz = () => data.quiz.map((item, i) => `<fieldset class="mc-q" data-answer="${item.answer}">
    <legend>${i + 1}. ${esc(item.q)}</legend>
    ${item.options.map(o => `<label><input type="radio" name="mc-q${i}" value="${o}"> ${esc(byId[o].name)}</label>`).join('')}
    <p class="mc-feedback" role="status" aria-live="polite"></p>
  </fieldset>`).join('');

  root.innerHTML = `<div class="mc-filters" role="group" aria-label="Filtrar las opciones del menú">
      <div><span class="mc-filter-label">Tipo</span>${chip('type', 'todos', 'Todos')}${Object.entries(data.types).map(([k, v]) => chip('type', k, v)).join('')}</div>
      <div><span class="mc-filter-label">Nivel</span>${chip('level', 'todos', 'Todos')}${Object.entries(data.levels).map(([k, v]) => chip('level', k, v)).join('')}</div>
      <label class="mc-search">Buscar <input type="search" id="mc-search" placeholder="Por ejemplo: plantilla, ficha técnica, diapositivas"></label>
      <p class="mc-count" id="mc-count" role="status" aria-live="polite"></p>
    </div>
    <div class="mc-grid">${data.cards.map(card).join('')}</div>
    <details class="mc-panel"><summary><h4>Itinerario recomendado: tres estaciones y un cierre (35 min)</h4></summary>
      <ol class="mc-itinerary">${data.itinerary.map(s => `<li><b>${esc(s.time)}</b><div><strong>${esc(s.title)}</strong><span>${esc(s.text)}</span><span class="mc-it-cards">${s.cards.map(id => `<a href="#mc-${id}-name" data-goto="${id}">${esc(byId[id].name)}</a>`).join(' · ')}</span></div></li>`).join('')}</ol>
      <p class="source-note">Progresión orientativa, no una clasificación oficial. Básico: archivos, búsqueda e imágenes. Intermedio: proyectos, biblioteca, presentaciones y plantillas. Avanzado: skills, GitHub y Supabase.</p>
    </details>
    <details class="mc-panel"><summary><h4>Quiz: ¿qué opción del menú abrirías? (10 preguntas)</h4></summary>
      <form class="mc-quiz" novalidate>${quiz()}<div class="mc-quiz-actions"><button type="button" class="mc-quiz-reset">Volver a empezar</button><p class="mc-score" role="status" aria-live="polite"></p></div></form>
    </details>`;

  const cards = [...root.querySelectorAll('.mc-card')];
  const count = root.querySelector('#mc-count');
  const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  function applyFilters() {
    let shown = 0;
    cards.forEach(el => {
      const c = byId[el.dataset.id];
      const ok = (state.type === 'todos' || c.type === state.type) && (state.level === 'todos' || c.level === state.level) &&
        (!state.text || norm([c.name, c.what, c.use, c.exercise, c.prompt].join(' ')).includes(norm(state.text)));
      el.hidden = !ok; if (ok) shown++;
    });
    count.textContent = shown === 1 ? '1 opción' : `${shown} opciones`;
    root.querySelectorAll('.mc-chip').forEach(b => b.setAttribute('aria-pressed', String(state[b.dataset.group] === b.dataset.value)));
  }
  applyFilters();

  function toggle(btn, open) {
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    const show = open ?? btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(show)); panel.hidden = !show;
    btn.textContent = show ? 'Ocultar ejercicio' : 'Mostrar ejercicio';
  }

  root.addEventListener('click', async e => {
    const t = e.target.closest('button, a[data-goto]');
    if (!t) return;
    if (t.classList.contains('mc-chip')) { state[t.dataset.group] = t.dataset.value; applyFilters(); }
    else if (t.classList.contains('mc-toggle')) toggle(t);
    else if (t.classList.contains('mc-copy')) {
      const status = t.nextElementSibling;
      try { await navigator.clipboard.writeText(document.getElementById(t.dataset.target).textContent); status.textContent = 'Copiado.'; }
      catch { status.textContent = 'Selecciona el texto y cópialo manualmente.'; }
    } else if (t.classList.contains('mc-quiz-reset')) {
      root.querySelectorAll('.mc-quiz input').forEach(i => { i.checked = false; });
      root.querySelectorAll('.mc-q').forEach(f => f.classList.remove('ok', 'ko'));
      root.querySelectorAll('.mc-feedback').forEach(p => { p.textContent = ''; });
      score();
    } else if (t.dataset.goto) {
      state.type = 'todos'; state.level = 'todos'; state.text = ''; root.querySelector('#mc-search').value = ''; applyFilters();
      toggle(root.querySelector(`.mc-card[data-id="${t.dataset.goto}"] .mc-toggle`), true);
    }
  });
  root.querySelector('#mc-search').addEventListener('input', e => { state.text = e.target.value.trim(); applyFilters(); });

  function score() {
    const qs = [...root.querySelectorAll('.mc-q')];
    const done = qs.filter(f => f.querySelector('input:checked'));
    const right = qs.filter(f => f.classList.contains('ok')).length;
    root.querySelector('.mc-score').textContent = done.length ? `${right} de ${done.length} respondidas correctamente${done.length === qs.length ? ' · quiz completado' : ''}.` : '';
  }
  root.querySelector('.mc-quiz').addEventListener('change', e => {
    const f = e.target.closest('.mc-q'); if (!f) return;
    const i = [...root.querySelectorAll('.mc-q')].indexOf(f);
    const item = data.quiz[i];
    const ok = e.target.value === item.answer;
    f.classList.toggle('ok', ok); f.classList.toggle('ko', !ok);
    f.querySelector('.mc-feedback').textContent = (ok ? 'Correcto. ' : `No: la respuesta es «${byId[item.answer].name}». `) + item.why;
    score();
  });
})();
