// Dibuja el módulo de SciSpace a partir de data/scispace-ejercicios.js.
// Sin dependencias ni almacenamiento: el selector de modalidad y la lista de comprobación solo viven en esta pestaña.
(function () {
  const data = window.SCISPACE_EJERCICIOS;
  const root = document.getElementById('scispace-app');
  if (!data || !root) return;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  let mode = 'alumno';
  const stepsTitle = { alumno: 'Pasos para el alumno', profesor: 'Guion para la demostración' };

  const card = (ex, i) => `<article class="ss-card" data-id="${ex.id}">
    <h4 class="ss-card-head"><button type="button" class="ss-toggle" aria-expanded="false" aria-controls="ss-${ex.id}-body">
      <span class="ss-num" aria-hidden="true">${i + 1}</span>
      <span class="ss-head-text"><span class="ss-title">Ejercicio ${i + 1} · ${esc(ex.title)}</span>
        <span class="ss-meta"><span class="ss-time">${ex.minutes} min</span><span class="ss-level ss-${ex.level}">${esc(data.levels[ex.level])}</span><span class="ss-feature">${esc(ex.feature)}</span></span></span>
      <span class="fold-chevron" aria-hidden="true"></span></button></h4>
    <div class="ss-body" id="ss-${ex.id}-body" hidden>
      <div class="ss-case"><p><strong>Caso.</strong> ${esc(ex.case)}</p><p><strong>Objetivo.</strong> ${esc(ex.objective)}</p>${ex.material ? `<p><strong>Material.</strong> ${esc(ex.material)}</p>` : ''}</div>
      <div class="ss-steps"><h5 data-steps-title>${stepsTitle[mode]}</h5><ol data-steps></ol></div>
      ${ex.alternative ? `<p class="ss-alt"><strong>Si tu plan no lo permite:</strong> ${esc(ex.alternative)}</p>` : ''}
      <div class="prompt"><strong>Prompt</strong><pre id="ss-${ex.id}-prompt">${esc(ex.prompt)}</pre><button type="button" class="ss-copy" data-target="ss-${ex.id}-prompt">Copiar prompt</button><span class="copy-status" role="status" aria-live="polite"></span></div>
      <p class="ss-open"><a class="ss-open-link" href="${esc(data.url)}" target="_blank" rel="noopener noreferrer">Abrir SciSpace en una pestaña nueva ↗</a></p>
      <div class="ss-checks"><h5>Qué debes comprobar</h5><ul>${ex.checks.map(c => `<li>${esc(c)}</li>`).join('')}</ul></div>
      <p class="ss-outcome"><strong>Resultado de aprendizaje.</strong> ${esc(ex.outcome)}</p>
    </div>
  </article>`;

  root.innerHTML = `<div class="ss-toolbar">
      <div class="ss-mode" role="group" aria-label="Modalidad de las instrucciones">
        <span class="ss-mode-label">Modalidad</span>
        <button type="button" data-mode="profesor" aria-pressed="false">Demostración del profesor</button>
        <button type="button" data-mode="alumno" aria-pressed="true">Práctica del alumno</button>
      </div>
      <div class="ss-all"><button type="button" data-ss-all="1">Abrir los cinco</button><button type="button" data-ss-all="0">Cerrar los cinco</button></div>
    </div>
    <p class="ss-mode-note" role="status" aria-live="polite"></p>
    <div class="ss-list">${data.exercises.map(card).join('')}</div>`;

  const modeNote = root.querySelector('.ss-mode-note');
  function renderSteps() {
    root.querySelectorAll('.ss-card').forEach(el => {
      const ex = data.exercises.find(x => x.id === el.dataset.id);
      el.querySelector('[data-steps-title]').textContent = stepsTitle[mode];
      el.querySelector('[data-steps]').innerHTML = ex.steps[mode].map(s => `<li>${esc(s)}</li>`).join('');
    });
    root.querySelectorAll('[data-mode]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
    modeNote.textContent = mode === 'profesor'
      ? 'Modo demostración: el docente proyecta SciSpace y el grupo comenta y verifica en voz alta.'
      : 'Modo práctica: cada asistente trabaja en su cuenta, o en pareja si no la tiene.';
  }
  renderSteps();

  function toggle(btn, force) {
    const open = force ?? btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    document.getElementById(btn.getAttribute('aria-controls')).hidden = !open;
    btn.closest('.ss-card').classList.toggle('is-open', open);
  }

  root.addEventListener('click', async e => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.mode) { mode = b.dataset.mode; renderSteps(); }
    else if (b.dataset.ssAll) root.querySelectorAll(".ss-toggle").forEach(t => toggle(t, b.dataset.ssAll === "1"));
    else if (b.classList.contains('ss-toggle')) toggle(b);
    else if (b.classList.contains('ss-copy')) {
      const status = b.nextElementSibling;
      try { await navigator.clipboard.writeText(document.getElementById(b.dataset.target).textContent); status.textContent = 'Prompt copiado.'; }
      catch { status.textContent = 'No se ha podido copiar: selecciona el texto y cópialo manualmente.'; }
      clearTimeout(b._t); b._t = setTimeout(() => { status.textContent = ''; }, 4000);
    }
  });

  // Lista de comprobación final: solo en memoria, sin guardar nada.
  const list = document.getElementById('scispace-checklist');
  if (list) {
    list.innerHTML = `<ul class="ss-checklist">${data.checklist.map((c, i) => `<li><label><input type="checkbox" data-check="${i}"> <span>${esc(c)}</span></label></li>`).join('')}</ul>
      <div class="ss-check-foot"><p class="ss-check-progress" role="status" aria-live="polite"></p><button type="button" class="ss-check-reset">Desmarcar todo</button></div>`;
    const boxes = [...list.querySelectorAll('input[type=checkbox]')];
    const progress = list.querySelector('.ss-check-progress');
    const update = () => {
      const n = boxes.filter(x => x.checked).length;
      progress.textContent = n === boxes.length ? '5 de 5 comprobaciones hechas: ya puedes usar la información con más confianza.' : `${n} de ${boxes.length} comprobaciones hechas.`;
      list.classList.toggle('is-complete', n === boxes.length);
    };
    list.addEventListener('change', update);
    list.querySelector('.ss-check-reset').addEventListener('click', () => { boxes.forEach(x => { x.checked = false; }); update(); });
    update();
  }
})();
