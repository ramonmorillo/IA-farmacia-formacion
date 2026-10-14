// Dibuja el catálogo «Ecosistema Google IA» a partir de data/google-ia.js.
// Sin dependencias ni almacenamiento: el filtro solo vive en esta pestaña.
(function () {
  const data = window.GOOGLE_IA;
  const root = document.getElementById('google-ia-app');
  if (!data || !root) return;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  // Iconos de trazo propios (no son logotipos oficiales).
  const icons = {
    layout: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
    megaphone: '<path d="M3 10v4h3l7 4V6L6 10H3z"/><path d="M16 9a4 4 0 0 1 0 6M19 6.5a8 8 0 0 1 0 11"/>',
    music: '<path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z"/>',
    code: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
    film: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9.5v5l4.5-2.5z"/>',
    board: '<rect x="3" y="3" width="8" height="10" rx="1.5"/><rect x="13" y="3" width="8" height="6" rx="1.5"/><rect x="13" y="11" width="8" height="10" rx="1.5"/><rect x="3" y="15" width="8" height="6" rx="1.5"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${icons[name] || icons.sparkle}</svg>`;
  let filter = 'Todas';

  const card = t => `<article class="gi-card" data-categories="${esc(t.categories.join('|'))}">
    <div class="gi-card-top"><span class="gi-icon">${icon(t.icon)}</span><h4>${esc(t.name)}</h4></div>
    <div class="card-chips"><span class="gi-access gi-access-${esc(t.access)}">${esc(data.accessLevels[t.access])}</span>${t.categories.map(c => `<span class="card-chip">${esc(c)}</span>`).join('')}</div>
    <p class="gi-desc">${esc(t.description)}</p>
    <p class="gi-example"><strong>En Farmacia Hospitalaria</strong>${esc(t.example)}</p>
    <details class="gi-prompt"><summary>Ver el ejercicio práctico</summary><pre id="gi-${esc(t.id)}-prompt">${esc(t.prompt)}</pre></details>
    <p class="gi-access-note"><strong>Acceso:</strong> ${esc(t.accessNote)}</p>
    <div class="gi-actions">
      <button type="button" class="gi-copy" data-target="gi-${esc(t.id)}-prompt">Copiar prompt</button>
      <a class="gi-open" href="${esc(t.url)}" target="_blank" rel="noopener noreferrer">Abrir herramienta <span aria-hidden="true">↗</span><span class="gi-sr"> (se abre en una pestaña nueva)</span></a>
    </div>
    <p class="gi-copy-status" role="status" aria-live="polite"></p>
  </article>`;

  root.innerHTML = `<div class="gi-filter" role="group" aria-label="Filtrar herramientas por uso">
      <div class="filter-chips">${['Todas', ...data.categories].map(c => `<button type="button" data-gi-filter="${esc(c)}" aria-pressed="${c === filter}">${esc(c)}</button>`).join('')}</div>
    </div>
    <p class="gi-count" role="status" aria-live="polite"></p>
    <div class="gi-grid">${data.tools.map(card).join('')}</div>`;

  const cards = [...root.querySelectorAll('.gi-card')];
  const count = root.querySelector('.gi-count');
  function applyFilter() {
    let n = 0;
    cards.forEach(el => {
      const show = filter === 'Todas' || el.dataset.categories.split('|').includes(filter);
      el.hidden = !show;
      if (show) n++;
    });
    root.querySelectorAll('[data-gi-filter]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.giFilter === filter)));
    count.textContent = filter === 'Todas' ? `${n} herramientas` : `${n} de ${cards.length} herramientas · ${filter}`;
  }
  applyFilter();

  root.addEventListener('click', async e => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.giFilter) { filter = b.dataset.giFilter; applyFilter(); }
    else if (b.classList.contains('gi-copy')) {
      const status = b.closest('.gi-card').querySelector('.gi-copy-status');
      try { await navigator.clipboard.writeText(document.getElementById(b.dataset.target).textContent); status.textContent = 'Prompt copiado.'; }
      catch { status.textContent = 'No se ha podido copiar: abre «Ver el ejercicio práctico», selecciona el texto y cópialo manualmente.'; }
      clearTimeout(b._t); b._t = setTimeout(() => { status.textContent = ''; }, 4000);
    }
  });
})();
