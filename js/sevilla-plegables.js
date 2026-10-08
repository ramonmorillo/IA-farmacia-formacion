// Bloques desplegables de la página del taller de Sevilla.
// Sin JavaScript, todo el contenido queda visible. Con él, los bloques de la guía y las secciones largas
// empiezan plegados y se abren al pulsarlos o al llegar desde un enlace interno.
(function () {
  const bodies = [];

  // Pliega todo lo que hay en `container` después de `keep` y añade el control que lo abre.
  function makeCollapsible(container, keep, makeControl) {
    const body = document.createElement('div');
    body.className = 'fold-body';
    body.id = container.id + '-cuerpo';
    body.hidden = true;
    body.dataset.foldBody = '';
    while (keep.nextSibling) body.appendChild(keep.nextSibling);
    const control = makeControl(body.id);
    keep.after(control.node, body);
    bodies.push({ body, set: control.set });
    control.set(false);
    return body;
  }

  // Bloques de la guía: el título del bloque hace de botón.
  document.querySelectorAll('#guia > article.lesson').forEach(lesson => {
    const heading = lesson.querySelector(':scope > .lesson-heading');
    const h3 = heading && heading.querySelector('h3');
    if (!h3) return;
    let button;
    const body = makeCollapsible(lesson, heading, id => {
      button = document.createElement('button');
      button.type = 'button';
      button.className = 'lesson-toggle';
      button.setAttribute('aria-controls', id);
      button.innerHTML = `<span class="lesson-toggle-text">${h3.innerHTML}</span><span class="fold-chevron" aria-hidden="true"></span>`;
      h3.replaceChildren(button);
      const set = open => { button.setAttribute('aria-expanded', String(open)); lesson.classList.toggle('is-open', open); };
      return { node: document.createTextNode(''), set };
    });
    heading.addEventListener('click', e => { if (!e.target.closest('button')) button.click(); });
    button.addEventListener('click', () => toggle(body));
    const foot = document.createElement('p');
    foot.className = 'fold-foot';
    foot.innerHTML = '<button type="button" class="fold-close">Cerrar este bloque</button><a href="#top">↑ Volver al inicio</a>';
    foot.querySelector('.fold-close').addEventListener('click', () => { toggle(body, false); lesson.scrollIntoView({ block: 'start' }); button.focus({ preventScroll: true }); });
    body.appendChild(foot);
  });

  // Secciones largas: se mantiene visible la presentación y se pliega el resto.
  [
    { id: 'atajos', keep: '.gift-head', open: 'Ver los 12 atajos', close: 'Ocultar los atajos' },
    { id: 'codigos', keep: '.section-intro', open: 'Ver los 11 «códigos»', close: 'Ocultar los «códigos»' }
  ].forEach(cfg => {
    const section = document.getElementById(cfg.id);
    const keep = section && section.querySelector(':scope > ' + cfg.keep);
    if (!keep) return;
    const body = makeCollapsible(section, keep, id => {
      const wrap = document.createElement('p');
      wrap.className = 'fold-cta';
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'section-toggle';
      b.setAttribute('aria-controls', id);
      wrap.appendChild(b);
      b.addEventListener('click', () => toggle(document.getElementById(id)));
      const set = open => { b.setAttribute('aria-expanded', String(open)); b.innerHTML = `${open ? cfg.close : cfg.open}<span class="fold-chevron" aria-hidden="true"></span>`; };
      return { node: wrap, set };
    });
  });

  function toggle(body, force) {
    const entry = bodies.find(x => x.body === body);
    if (!entry) return;
    const open = force ?? body.hidden;
    body.hidden = !open;
    entry.set(open);
  }

  // Abrir y cerrar todos los bloques de la guía.
  const guide = document.getElementById('guia');
  const intro = guide && guide.querySelector(':scope > h2');
  if (intro) {
    const bar = document.createElement('p');
    bar.className = 'fold-all';
    bar.innerHTML = '<span>Pulsa en cada bloque para desplegarlo.</span><button type="button" data-all="1">Abrir todos</button><button type="button" data-all="0">Cerrar todos</button>';
    intro.after(bar);
    bar.addEventListener('click', e => {
      const b = e.target.closest('button[data-all]');
      if (!b) return;
      bodies.filter(x => guide.contains(x.body)).forEach(x => toggle(x.body, b.dataset.all === '1'));
    });
  }

  // Si un enlace apunta a algo que está plegado, se abre antes de saltar.
  function reveal(target) {
    let el = target;
    while (el) {
      if (el.dataset && 'foldBody' in el.dataset && el.hidden) toggle(el, true);
      el = el.parentElement;
    }
    // Un bloque plegado cuyo propio id es el destino también se abre.
    const own = target.querySelector && target.querySelector(':scope > [data-fold-body]');
    if (own && own.hidden) toggle(own, true);
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.getAttribute('href') === '#top') return;
    const target = document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)));
    if (target) reveal(target);
  }, true);
  function fromHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    const target = id && id !== 'top' && document.getElementById(id);
    if (target) { reveal(target); target.scrollIntoView({ block: 'start' }); }
  }
  window.addEventListener('hashchange', fromHash);
  fromHash();
})();
