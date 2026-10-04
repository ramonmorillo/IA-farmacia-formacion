/* Sin peticiones externas: datos y búsqueda permanecen en el navegador. */
(() => {
  'use strict';
  const isTools = document.body.dataset.resource === 'herramientas';
  const data = isTools ? window.HERRAMIENTAS_IA?.items : window.DICCIONARIO_IA;
  const controls = document.querySelector('.resource-controls');
  if (!Array.isArray(data)) {
    document.querySelector('#error-carga').hidden = false;
    return;
  }
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es');
  const el = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  const externalLink = (url, label, className) => {
    const a = el('a', label, className);
    // Only HTTPS links from the curated local data; never interpret content as HTML.
    if (new URL(url).protocol === 'https:') a.href = url;
    return a;
  };
  const results = document.querySelector('#resultados');
  const search = document.querySelector('#buscar');
  const level = document.querySelector('#nivel');
  const recommended = document.querySelector('#recomendadas');
  let selection = '';
  const records = [...data].sort((a,b) => a.name.localeCompare(b.name,'es')).map(item => {
    const card = el('article', '', 'resource-card');
    const chips = el('div', '', 'card-chips');
    chips.append(el('span', item.level, 'card-chip'));
    if (isTools) {
      chips.append(el('span', `Acceso: ${item.access}`, 'card-chip'));
      if (item.recommended) chips.append(el('span', '★ Recomendada', 'card-chip recommended'));
    }
    card.append(chips, el('h2', item.name), el('p', isTools ? item.description : item.definition));
    const dl = el('dl');
    for (const [label, text] of isTools ? [['En Farmacia Hospitalaria', item.use]] : [['¿Por qué me importa?', item.why], ['Ejemplo en Farmacia Hospitalaria', item.example]]) {
      dl.append(el('dt',label),el('dd',text));
    }
    card.append(dl);
    if (isTools) {
      const tags = el('div','','card-chips category-list');
      item.categories.forEach(cat => tags.append(el('span',cat,'card-chip category')));
      card.append(tags, externalLink(item.url, `Web oficial de ${item.name} →`, 'official-link'));
      const details = el('details');
      details.append(el('summary','Acceso y fuente verificada'), el('p',item.accessNote), externalLink(item.source,'Consultar fuente oficial'));
      const date = el('time', item.reviewedAt);
      date.dateTime = item.reviewedAt;
      const reviewed = el('p','Revisado: ');
      reviewed.append(date);
      details.append(reviewed);
      card.append(details);
    }
    results.append(card);
    const searchable = [item.name,item.level,item.definition,item.why,item.example,item.description,item.use,...(item.categories || [])].filter(Boolean).join(' ');
    return {item,card,text:normalize(searchable)};
  });
  const group = document.querySelector(isTools ? '#categorias' : '#niveles');
  const choices = isTools ? window.HERRAMIENTAS_IA.categories : ['Básico','Intermedio','Avanzado'];
  for (const value of ['',...choices]) {
    const button = el('button',value || (isTools ? 'Todas' : 'Todos'));
    button.type = 'button';
    button.dataset.value = value;
    button.setAttribute('aria-pressed', String(value === ''));
    button.setAttribute('aria-controls','resultados');
    button.addEventListener('click', () => {
      selection = value;
      updateButtons();
      filter();
    });
    group.append(button);
  }
  function updateButtons() {
    group.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed',String(b.dataset.value === selection)));
  }
  function filter() {
    const words = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    let count = 0;
    for (const {item,card,text} of records) {
      const matches = words.every(word => text.includes(word)) &&
        (!selection || (isTools ? item.categories.includes(selection) : item.level === selection)) &&
        (!isTools || ((!level.value || item.level === level.value) && (!recommended.checked || item.recommended)));
      card.hidden = !matches;
      if (matches) count++;
    }
    document.querySelector('#recuento').textContent = `${count} de ${data.length} ${isTools ? 'herramientas' : 'conceptos'}`;
    document.querySelector('#sin-resultados').hidden = count !== 0;
  }
  controls.addEventListener('submit',event => event.preventDefault());
  controls.addEventListener('reset',event => {
    event.preventDefault();
    search.value = '';
    selection = '';
    if (isTools) {level.value = ''; recommended.checked = false;}
    updateButtons();
    filter();
    search.focus();
  });
  search.addEventListener('input',filter);
  if (isTools) {level.addEventListener('change',filter); recommended.addEventListener('change',filter);}
  controls.hidden = false;
  filter();
})();
