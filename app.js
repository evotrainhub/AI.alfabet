(function () {
'use strict';
const C = window.CONFIG, M = window.MODULES, POSTS = window.BLOG_POSTS || [];
const $ = s => document.querySelector(s);
const app = $('#app'), overlay = $('#overlay');

/* ---------------- icoane ---------------- */
const sv = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const I = {
  spark: sv('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>'),
  chat: sv('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01"/>'),
  pen: sv('<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>'),
  briefcase: sv('<rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 13h18"/>'),
  alert: sv('<path d="M12 3l9.5 17h-19z"/><path d="M12 10v4M12 17.5h.01"/>'),
  shield: sv('<path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>'),
  scale: sv('<path d="M12 4v16M7 20h10M5 8h14M5 8l-3 6a3 3 0 0 0 6 0zM19 8l-3 6a3 3 0 0 0 6 0z"/>'),
  check: sv('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
  lock: sv('<rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
  star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.9l10.2-6.5a1 1 0 0 0 0-1.8L9.5 4.6A1 1 0 0 0 8 5.5z"/></svg>',
  trophy: sv('<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4.5a3 3 0 0 0 3.5 4M16 6h3.5a3 3 0 0 1-3.5 4M12 13v4M8 21h8M9.5 17h5"/>'),
  x: sv('<path d="M6 6l12 12M18 6L6 18"/>'),
  bolt: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 2L4 14h7l-1 8 9.5-12h-7z"/></svg>',
  fire: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c1 3.5 5 6 5 11a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5 0 2 1 3 2 3 0-3-1.5-5.5.5-9z"/></svg>',
  thumb: sv('<path d="M7 11v9H4v-9zM7 11l4-8a2.5 2.5 0 0 1 2.5 2.5V9h5.5a2 2 0 0 1 2 2.3l-1.2 7A2 2 0 0 1 17.8 20H7"/>'),
  no: sv('<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>'),
  left: sv('<path d="M15 6l-6 6 6 6"/>')
};

/* ---------------- stare ---------------- */
const KEY = 'evotrainhub.aipascupas.v1';
const defaults = () => ({ survey: false, email: false, done: {}, xp: 0, streak: 0, lastDay: null, gatePrompted: false, certName: '', avatar: null, walkFrom: null });
let S;
try { S = Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch { S = defaults(); }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} };

const ALL = [];
M.forEach((m, mi) => m.lessons.forEach((l, li) => ALL.push(Object.assign({}, l, { m, mi, li, idx: ALL.length }))));
const byId = id => ALL.find(l => l.id === id);
const isUnlocked = l => l.idx === 0 || !!S.done[ALL[l.idx - 1].id];
const needsEmail = l => l.mi >= (C.FREE_MODULES || 1) && !S.email;
const moduleDone = mi => M[mi].lessons.every(l => S.done[l.id]);
const allDone = () => ALL.every(l => S.done[l.id]);
const today = () => { const d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

/* ---------------- trimitere date ---------------- */
function send(payload) {
  if (!C.SHEETS_URL) { console.info('[AI pas cu pas] SHEETS_URL nu e setat; nu trimit:', payload); return; }
  try {
    fetch(C.SHEETS_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) }).catch(() => {});
  } catch {}
}

/* ---------------- utilitare UI ---------------- */
let toastT;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 3200); }
function updateStats() {
  $('#xp').textContent = S.xp;
  const alive = S.lastDay && (S.lastDay === today() || S.lastDay === (() => { const d = new Date(); d.setDate(d.getDate() - 1); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); })());
  $('#streak').textContent = alive ? S.streak : 0;
}
function setNav(r) {
  document.querySelectorAll('.nav a').forEach(a => a.setAttribute('aria-current', a.dataset.r === r ? 'page' : 'false'));
}
function confetti() {
  const box = document.createElement('div'); box.className = 'confetti';
  const cols = ['#22A55B', '#FFC23D', '#12B5A6', '#FF8A3D', '#E0457B', '#8BD346', '#1F8CC9'];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('i');
    p.style.left = Math.random() * 100 + 'vw'; p.style.background = cols[i % cols.length];
    p.style.animationDelay = Math.random() * .5 + 's'; p.style.animationDuration = 1.2 + Math.random() * 1 + 's';
    box.appendChild(p);
  }
  document.body.appendChild(box); setTimeout(() => box.remove(), 2800);
}

/* ---------------- router ---------------- */
function go(h) { if (location.hash === h) route(); else location.hash = h; }
window.addEventListener('hashchange', route);
function route() {
  const h = location.hash.replace(/^#\/?/, '');
  const [r, arg] = h.split('/');
  overlay.innerHTML = ''; document.body.style.overflow = '';
  document.title = C.APP_NAME + ' · EvoTrainHub';
  updateStats();
  if (r === 'chestionar') { setNav(''); return renderSurvey(); }
  if (r === 'ghid') { setNav('drum'); if (!S.survey) return go('#/chestionar'); return renderGuidePicker(); }
  if (r === 'drum') { setNav('drum'); if (!S.survey) return go('#/chestionar'); return renderMap(); }
  if (r === 'lectie') { setNav('drum'); return openLesson(arg); }
  if (r === 'blog') { setNav('blog'); return arg ? renderPost(arg) : renderBlog(); }
  if (r === 'despre') { setNav('despre'); return renderAbout(); }
  if (r === 'confidentialitate') { setNav(''); return renderPrivacy(); }
  if (r === 'certificat') { setNav('drum'); return renderCert(); }
  setNav(''); renderHome();
}

/* ---------------- pagina de start ---------------- */
function renderHome() {
  const started = S.survey;
  const orbPos = [[50, -3], [93, 25], [93, 72], [50, 100], [7, 72], [7, 25]];
  app.innerHTML = `
  <section class="hero">
    <div>
      <h1>Descoperă inteligența artificială, pas cu pas.</h1>
      <p>O expediție gratuită în 7 etape prin jungla tehnologiei, pentru oricine vrea să folosească AI la muncă, corect și în siguranță. Fără termeni tehnici, cu un ghid care te însoțește la fiecare pas.</p>
      <div class="cta">
        <a class="btn" href="${started ? '#/drum' : '#/chestionar'}">${started ? 'Continuă drumul' : 'Începe gratuit'}</a>
        <a class="btn ghost" href="#/blog">Citește blogul</a>
      </div>
    </div>
    <div class="hero-art" aria-hidden="true">
      <div class="ring"></div>
      <img src="assets/logo.png" alt="">
      ${M.slice(0, 6).map((m, i) => `<span class="orb" style="background:${m.color};left:calc(${orbPos[i][0]}% - 31px);top:calc(${orbPos[i][1]}% - 31px)">${I[m.icon]}</span>`).join('')}
    </div>
  </section>
  <div class="crew" aria-label="Ghizii care te pot însoți">${window.AVATARS.map((a, i) => `<span class="crew-av idle" style="--d:${i}">${avatarSVG(a)}</span>`).join('')}<p>Alege-ți un ghid care te însoțește prin toate cele 7 zone.</p></div>
  <div class="facts">
    <div class="fact"><b>7 module</b><span>de la „ce este AI” până la AI Act</span></div>
    <div class="fact"><b>28 de lecții</b><span>de 5–7 minute, cu simulări și exerciții</span></div>
    <div class="fact"><b>Certificat</b><span>de parcurgere, la final</span></div>
  </div>
  <h2 class="sec">Ce vei învăța</h2>
  <div class="mods">
    ${M.map((m, i) => `<div class="mod-card" style="--mc:${m.color}"><i>${I[m.icon]}</i><div><small>${esc(m.zone || '')}</small><b>${i + 1}. ${esc(m.title)}</b><span>${esc(m.subtitle)}</span></div></div>`).join('')}
  </div>
  ${ctaBox()}`;
}
function ctaBox() {
  return `<div class="cta-box"><h3>Vrei un training pentru echipa ta?</h3>
  <p>EvoTrainHub organizează programe de alfabetizare AI și de conformitate cu AI Act pentru instituții publice și companii, adaptate domeniului vostru.</p>
  <a class="btn" href="${esc(C.SITE_URL)}" target="_blank" rel="noopener">Află mai multe pe evotrainhub.com</a></div>`;
}

/* ---------------- chestionar ---------------- */
const SURVEY = [
  { k: 'sector', q: 'Unde lucrezi?', o: ['Sector public', 'Sector privat', 'ONG', 'Mediul academic', 'Sunt elev sau student', 'Altă situație'] },
  { k: 'domain', q: 'În ce domeniu activezi?', o: ['Administrație publică', 'Educație', 'Sănătate', 'Financiar-contabil', 'Juridic', 'Resurse umane', 'Vânzări și marketing', 'IT și tehnologie', 'Producție și industrie', 'Alt domeniu'] },
  { k: 'level', q: 'Cât de des folosești instrumente AI (ChatGPT, Copilot, Gemini etc.)?', o: ['Niciodată', 'Am încercat de câteva ori', 'Săptămânal', 'Zilnic'] },
  { k: 'goal', q: 'Ce te interesează cel mai mult?', o: ['Să economisesc timp la muncă', 'Să înțeleg riscurile', 'Să-mi ajut echipa sau elevii', 'Sunt curios, vreau să înțeleg'] }
];
function renderSurvey() {
  if (S.survey) return go(S.avatar ? '#/drum' : '#/ghid');
  const ans = {}; let i = 0;
  const draw = () => {
    const s = SURVEY[i];
    app.innerHTML = `<section class="survey">
      <div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="4" aria-valuenow="${i}"><div style="width:${i / SURVEY.length * 100}%"></div></div>
      <p class="step-count" style="margin-top:22px">Întrebarea ${i + 1} din ${SURVEY.length}</p>
      <h2>${esc(s.q)}</h2>
      ${i === 0 ? '<p class="why">Patru întrebări rapide, fără nume. Ne ajută să facem materiale potrivite pentru oameni ca tine.</p>' : '<p class="why">Alege varianta cea mai apropiată.</p>'}
      <div class="choices${s.o.length > 6 ? ' two' : ''}">
        ${s.o.map((o, j) => `<button class="choice${ans[s.k] === o ? ' sel' : ''}" data-v="${esc(o)}"><span class="k">${j + 1}</span>${esc(o)}</button>`).join('')}
      </div>
      ${i > 0 ? '<button class="link" id="back">Înapoi</button>' : ''}
    </section>`;
    app.querySelectorAll('.choice').forEach(b => b.onclick = () => {
      ans[s.k] = b.dataset.v; b.classList.add('sel');
      setTimeout(() => {
        if (i < SURVEY.length - 1) { i++; draw(); }
        else {
          send(Object.assign({ type: 'survey', source: 'ai-pas-cu-pas' }, ans));
          S.survey = true; save(); go('#/ghid'); toast('Mulțumim! Acum alege-ți ghidul.');
        }
      }, 220);
    });
    const bk = $('#back'); if (bk) bk.onclick = () => { i--; draw(); };
    window.scrollTo(0, 0);
  };
  draw();
}

/* ---------------- alegerea ghidului ---------------- */
const AV = window.AVATARS;
const myAvatar = () => AV.find(a => a.id === S.avatar) || AV[0];
function renderGuidePicker() {
  let pick = S.avatar || null;
  app.innerHTML = `<section class="picker">
    <h1>Alege-ți ghidul</h1>
    <p>Te va însoți prin junglă, de la o lecție la alta. Îl poți schimba oricând.</p>
    <div class="av-grid" role="radiogroup" aria-label="Ghizi">
      ${AV.map(a => `<button class="av-card${pick === a.id ? ' sel' : ''}" role="radio" aria-checked="${pick === a.id}" data-id="${a.id}">
        <span class="av-fig idle">${avatarSVG(a)}</span><b>${esc(a.name)}</b><small>${esc(a.tag)}</small></button>`).join('')}
    </div>
    <button class="btn" id="avGo" ${pick ? '' : 'disabled'}>Pornim la drum</button>
  </section>`;
  app.querySelectorAll('.av-card').forEach(b => b.onclick = () => {
    pick = b.dataset.id;
    app.querySelectorAll('.av-card').forEach(x => { x.classList.toggle('sel', x === b); x.setAttribute('aria-checked', x === b); });
    $('#avGo').disabled = false;
  });
  $('#avGo').onclick = () => { S.avatar = pick; save(); go('#/drum'); };
  window.scrollTo(0, 0);
}

/* ---------------- harta ---------------- */
const OFFS = [0, .7, 1, .7, 0, -.7, -1, -.7];
const LEAF = (a, b, c) => `<svg viewBox="0 0 120 170" aria-hidden="true">
  <path d="M60 168 C62 120 56 70 60 18" stroke="#0E6B4F" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M60 42 C22 30 4 62 10 94 C40 90 60 70 60 42Z" fill="${a}"/>
  <path d="M60 74 C98 58 118 88 112 120 C84 118 62 100 60 74Z" fill="${b}"/>
  <path d="M60 110 C28 104 14 130 22 158 C46 152 60 136 60 110Z" fill="${c}"/>
  <g stroke="rgba(255,255,255,.75)" stroke-width="1.6" fill="rgba(255,255,255,.9)">
    <path d="M58 48 L34 62 L22 62" fill="none"/><circle cx="22" cy="62" r="2.4"/>
    <path d="M62 80 L86 92 L98 92" fill="none"/><circle cx="98" cy="92" r="2.4"/>
    <path d="M58 116 L40 130" fill="none"/><circle cx="40" cy="130" r="2.4"/>
  </g></svg>`;
const LEAF_SETS = [['#22A55B', '#8BD346', '#12B5A6'], ['#12B5A6', '#22A55B', '#8BD346'], ['#8BD346', '#12B5A6', '#22A55B']];

function renderMap() {
  if (!S.avatar) return go('#/ghid');
  const doneN = ALL.filter(l => S.done[l.id]).length;
  const cur = ALL.findIndex(l => !S.done[l.id]);
  const me = myAvatar();
  let html = `<div class="map-head"><div><h1>Drumul tău prin junglă</h1><p>${doneN === 0 ? `${esc(me.name)} te așteaptă la prima lecție.` : doneN === ALL.length ? 'Ai străbătut toată jungla. Felicitări!' : 'Continuă de unde ai rămas.'}</p>
      <button class="link small" id="chg">Schimbă ghidul</button></div>
    <div class="overall"><small>${doneN} din ${ALL.length} lecții</small><div class="bar"><div style="width:${doneN / ALL.length * 100}%"></div></div></div></div>
    <div class="path" id="path"><svg class="trail" id="trail" aria-hidden="true"></svg>`;
  M.forEach((m, mi) => {
    const mDone = m.lessons.filter(l => S.done[l.id]).length;
    const firstIdx = ALL.findIndex(l => l.mi === mi);
    const unitLocked = !isUnlocked(ALL[firstIdx]);
    const ls = LEAF_SETS[mi % 3];
    html += `<section class="unit${unitLocked ? ' locked' : ''}" style="--mc:${m.color}" aria-label="Modulul ${mi + 1}: ${esc(m.title)}">
      <div class="deco deco-l">${LEAF(...ls)}</div><div class="deco deco-r">${LEAF(ls[2], ls[0], ls[1])}</div>
      <div class="unit-banner"><i>${I[m.icon]}</i><div class="t"><small>Modulul ${mi + 1}: ${esc(m.zone || '')}</small><b>${esc(m.title)}</b></div><span class="p">${mDone}/${m.lessons.length}</span></div>
      <div class="nodes">`;
    m.lessons.forEach(l0 => {
      const l = byId(l0.id);
      const st = S.done[l.id] ? 'done' : l.idx === cur ? 'current' : isUnlocked(l) ? 'open' : 'locked';
      const icon = st === 'done' ? I.star : st === 'locked' ? I.lock : I.play;
      const k = OFFS[l.idx % OFFS.length];
      html += `<div class="node-wrap ${st}" style="--x:calc(${k} * min(100px, 21vw))">
        ${st === 'current' ? `<span class="start-tip">${doneN === 0 ? 'Începe aici' : 'Continuă'}</span>` : ''}
        <button class="node ${st}" data-id="${l.id}" aria-label="Lecția ${l.li + 1}: ${esc(l.title)}${st === 'done' ? ', terminată' : st === 'locked' ? ', blocată' : ''}">${icon}</button>
        <span class="node-label">${esc(l.title)}</span></div>`;
    });
    html += `</div></section>`;
  });
  const fin = allDone();
  html += `<div class="trophy"><button class="node ${fin ? 'gold' : 'locked'}" id="trophy" aria-label="Certificat${fin ? '' : ', blocat'}">${I.trophy}</button>
    <p class="node-label">${fin ? 'Descarcă certificatul' : 'Certificatul te așteaptă la capătul junglei'}</p></div>
    <div class="map-av idle" id="mapAv" aria-hidden="true">${avatarSVG(me)}</div></div>`;
  app.innerHTML = html;

  app.querySelectorAll('.node[data-id]').forEach(b => b.onclick = () => {
    const l = byId(b.dataset.id);
    if (!isUnlocked(l)) return toast('Termină întâi lecția anterioară.');
    if (needsEmail(l)) return openGate(l.id);
    go('#/lectie/' + l.id);
  });
  $('#trophy').onclick = () => fin ? go('#/certificat') : toast('Termină toate lecțiile ca să deblochezi certificatul.');
  $('#chg').onclick = () => go('#/ghid');

  const target = fin ? $('#trophy') : app.querySelector(`.node[data-id="${ALL[cur].id}"]`);
  const fromNode = S.walkFrom ? app.querySelector(`.node[data-id="${S.walkFrom}"]`) : null;
  S.walkFrom = null; save();
  requestAnimationFrame(() => {
    drawTrail(cur < 0 ? ALL.length : cur);
    placeAvatar(fromNode || target, false);
    if (fromNode && fromNode !== target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => placeAvatar(target, true), 450);
    } else if (doneN > 0) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'center' }), 120);
  });
  if (moduleDone(0) && !S.email && !S.gatePrompted) { S.gatePrompted = true; save(); setTimeout(() => openGate(null), 2200); }
}
function nodeCenter(n, pr) { const r = n.getBoundingClientRect(); return { x: r.left - pr.left + r.width / 2, y: r.top - pr.top + r.height / 2, b: r.bottom - pr.top }; }
function drawTrail(curIdx) {
  const path = $('#path'), svg = $('#trail'); if (!path || !svg) return;
  const pr = path.getBoundingClientRect();
  const nodes = [...path.querySelectorAll('.node')];
  const pts = nodes.map(n => nodeCenter(n, pr));
  const seg = (arr) => arr.reduce((d, p, i) => i === 0 ? `M${p.x} ${p.y}` : (() => { const a = arr[i - 1], my = (a.y + p.y) / 2; return d + ` C${a.x} ${my} ${p.x} ${my} ${p.x} ${p.y}`; })(), '');
  svg.setAttribute('width', pr.width); svg.setAttribute('height', path.offsetHeight);
  svg.setAttribute('viewBox', `0 0 ${pr.width} ${path.offsetHeight}`);
  svg.innerHTML = `<path class="t-base" d="${seg(pts)}"/>${curIdx > 0 ? `<path class="t-done" d="${seg(pts.slice(0, curIdx + 1))}"/>` : ''}`;
}
let walkT;
function placeAvatar(node, animate) {
  const path = $('#path'), av = $('#mapAv'); if (!path || !av || !node) return;
  const pr = path.getBoundingClientRect(), c = nodeCenter(node, pr);
  const side = c.x > pr.width / 2 ? -1 : 1;
  const x = c.x + side * 66 - 27, y = c.b - 84;
  const prevX = parseFloat(av.dataset.x || x);
  av.dataset.x = x;
  if (!animate) { av.style.transition = 'none'; av.style.transform = `translate(${x}px,${y}px)`; av.offsetHeight; av.style.transition = ''; return; }
  av.classList.remove('idle'); av.classList.add('walking');
  av.classList.toggle('face-left', x < prevX);
  av.style.transform = `translate(${x}px,${y}px)`;
  clearTimeout(walkT);
  walkT = setTimeout(() => { av.classList.remove('walking'); av.classList.add('idle', 'cheer'); setTimeout(() => av.classList.remove('cheer'), 1300); }, 1700);
}
let rzT;
window.addEventListener('resize', () => {
  clearTimeout(rzT);
  rzT = setTimeout(() => {
    if (!$('#path')) return;
    const cur = ALL.findIndex(l => !S.done[l.id]);
    drawTrail(cur < 0 ? ALL.length : cur);
    placeAvatar(allDone() ? $('#trophy') : app.querySelector(`.node[data-id="${ALL[cur].id}"]`), false);
  }, 150);
});

/* ---------------- poarta de e-mail ---------------- */
let pendingLesson = null;
function openGate(lessonId) {
  pendingLesson = lessonId;
  const d = $('#gate');
  $('#gEmail').value = ''; $('#gMkt').checked = false; $('#gErr').textContent = '';
  d.showModal(); setTimeout(() => $('#gEmail').focus(), 50);
}
function initGate() {
  $('#gLater').onclick = () => $('#gate').close();
  $('#gPriv').onclick = () => $('#gate').close();
  $('#gForm').onsubmit = e => {
    e.preventDefault();
    const email = $('#gEmail').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { $('#gErr').textContent = 'Verifică adresa de e-mail. Pare incompletă.'; return; }
    const mkt = $('#gMkt').checked;
    send({ type: 'email', email, marketing: mkt, consentText: mkt ? $('#gMktTxt').textContent.trim() : '', source: 'ai-pas-cu-pas', hp: $('#gHp').value });
    S.email = true; save(); $('#gate').close();
    toast('Gata! Ai acces la toate modulele.');
    if (pendingLesson) go('#/lectie/' + pendingLesson); else route();
  };
}

/* ---------------- vizualuri din ecranele „Descoperă” ---------------- */
function visualHTML(v) {
  if (!v) return '';
  if (v.type === 'reveal') {
    if (v.layout === 'rings') {
      const n = v.items.length;
      return `<div class="vis rings-wrap"><div class="rings">${v.items.map((it, i) => `<button class="ring" data-i="${i}" style="--i:${i};--n:${n}"><span>${esc(it.label)}</span></button>`).join('')}</div>
        <div class="reveal-out" aria-live="polite"><p class="muted">Atinge un cerc.</p></div></div>`;
    }
    return `<div class="vis reveal ${v.layout || 'grid'}">${v.items.map((it, i) => {
      const m = /^(\d{1,2}:\d{2}) · (.*)$/.exec(it.label || '');
      return `<button class="tile" data-i="${i}">${it.icon ? `<span class="ic">${it.icon}</span>` : ''}${m ? `<span class="time">${m[1]}</span><span class="lb">${esc(m[2])}</span>` : `<span class="lb">${esc(it.label)}</span>`}</button>`;
    }).join('')}</div><div class="reveal-out" aria-live="polite"><p class="muted">Atinge un element.</p></div>`;
  }
  if (v.type === 'compare') {
    const col = (c, cls) => `<div class="cmp ${cls}"><div class="cmp-h"><span class="ic">${c.icon || ''}</span>${esc(c.title)}</div><ul>${c.lines.map((l, i) => `<li style="--d:${i}">${esc(l)}</li>`).join('')}</ul></div>`;
    return `<div class="vis compare">${col(v.left, 'l')}<div class="vs">vs</div>${col(v.right, 'r')}</div>`;
  }
  if (v.type === 'steps') {
    return `<div class="vis steps${v.cycle ? ' cycle' : ''}"><div class="st-row">${v.items.map((it, i) => `<div class="st" data-i="${i}"><span class="ic">${it.icon}</span><span class="lb">${esc(it.label)}</span></div>${i < v.items.length - 1 ? '<span class="arr">›</span>' : v.cycle ? '<span class="arr loop">↺</span>' : ''}`).join('')}</div>
      <div class="reveal-out" aria-live="polite"><p class="muted">Apasă „Pasul următor”.</p></div><button class="btn small ghost" type="button" id="stNext">Pasul următor</button></div>`;
  }
  if (v.type === 'slider') {
    return `<div class="vis slider"><label for="sl"><b>${esc(v.label)}</b></label>
      <input type="range" id="sl" min="0" max="${v.stops.length - 1}" step="1" value="0">
      <div class="sl-ticks">${v.stops.map(s => `<span>${esc(s.label)}</span>`).join('')}</div>
      <div class="meter"><div class="meter-f" id="slBar"></div><span id="slVal"></span></div>
      <p id="slCap" aria-live="polite"></p>${v.note ? `<small class="note">${esc(v.note)}</small>` : ''}</div>`;
  }
  if (v.type === 'toggle') {
    return `<div class="vis toggle">${v.q ? `<p><b>${esc(v.q)}</b></p>` : ''}<div class="seg" role="group">${v.options.map((o, i) => `<button type="button" data-i="${i}" aria-pressed="${i === 0}">${esc(o.label)}</button>`).join('')}</div>
      <div class="tg-out" aria-live="polite"></div>${v.note ? `<small class="note">${esc(v.note)}</small>` : ''}</div>`;
  }
  return '';
}
function wireVisual(v, root) {
  if (!v) return;
  const out = root.querySelector('.reveal-out');
  if (v.type === 'reveal') {
    root.querySelectorAll(v.layout === 'rings' ? '.ring' : '.tile').forEach(b => b.onclick = () => {
      root.querySelectorAll('.ring,.tile').forEach(x => x.classList.remove('on'));
      b.classList.add('on', 'seen');
      const it = v.items[+b.dataset.i];
      out.innerHTML = `<p class="pop"><b>${it.icon ? it.icon + ' ' : ''}${esc(it.label.replace(/^(\d{1,2}:\d{2}) · /, '$1, '))}</b><br>${esc(it.text)}</p>`;
    });
  }
  if (v.type === 'steps') {
    let k = -1;
    root.querySelector('#stNext').onclick = () => {
      k = (k + 1) % v.items.length;
      root.querySelectorAll('.st').forEach((x, i) => { x.classList.toggle('on', i === k); if (i <= k) x.classList.add('seen'); });
      const it = v.items[k];
      out.innerHTML = `<p class="pop"><b>${it.icon} ${k + 1}. ${esc(it.label)}</b><br>${esc(it.text)}</p>`;
      root.querySelector('#stNext').textContent = k === v.items.length - 1 ? (v.cycle ? 'Încă o tură' : 'De la capăt') : 'Pasul următor';
    };
  }
  if (v.type === 'slider') {
    const sl = root.querySelector('#sl');
    const upd = () => { const s = v.stops[+sl.value]; root.querySelector('#slBar').style.width = s.bar + '%'; root.querySelector('#slBar').style.setProperty('--p', s.bar); root.querySelector('#slVal').textContent = 'Precizie: ' + s.bar + '%'; root.querySelector('#slCap').textContent = s.caption; };
    sl.oninput = upd; upd();
  }
  if (v.type === 'toggle') {
    const o = root.querySelector('.tg-out');
    let typer;
    const show = i => {
      const op = v.options[i];
      root.querySelectorAll('.seg button').forEach((b, j) => b.setAttribute('aria-pressed', j === i));
      clearInterval(typer);
      if (op.output) {
        o.innerHTML = `<div class="chat"><div class="msg me">${esc(op.input)}</div><div class="msg ai"><span id="typed"></span><span class="caret"></span></div></div>`;
        const el = o.querySelector('#typed'); let n = 0; const txt = op.output;
        const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) { el.textContent = txt; return; }
        typer = setInterval(() => { n += 2; el.textContent = txt.slice(0, n); if (n >= txt.length) clearInterval(typer); }, 22);
      } else {
        o.innerHTML = `<div class="meter big"><div class="meter-f" style="width:${op.bar}%;--p:${op.bar}"></div><span>${esc(op.barLabel || '')}: ${op.bar}%</span></div><p>${esc(op.caption)}</p>`;
      }
    };
    root.querySelectorAll('.seg button').forEach(b => b.onclick = () => show(+b.dataset.i));
    show(0);
  }
}

/* ---------------- lecția ---------------- */
const PHASE = t => t === 'info' ? 0 : t === 'recap' ? 2 : 1;
const KINDS = { mcq: 'Alege răspunsul', tf: 'Adevăr sau mit?', order: 'Pune în ordine', match: 'Potrivește perechile', spot: 'Găsește în text', sort: 'Sortează', flip: 'Întoarce cartonașele' };
function openLesson(id) {
  const L = byId(id);
  if (!L) return go('#/drum');
  if (!S.survey) return go('#/chestionar');
  if (!S.avatar) return go('#/ghid');
  if (!isUnlocked(L)) { go('#/drum'); return toast('Termină întâi lecția anterioară.'); }
  if (needsEmail(L)) { go('#/drum'); return setTimeout(() => openGate(L.id), 50); }
  if (!app.querySelector('.path')) renderMap();
  document.body.style.overflow = 'hidden'; $('#toast').classList.remove('show');
  const me = myAvatar();
  const hasRecap = L.steps.some(s => s.t === 'recap');

  const queue = L.steps.map(s => ({ s, tries: 0 }));
  let pos = 0, mistakes = 0, firstTry = 0, graded = 0;
  let sel = null, checked = false, orderAns = [], matchLeft = null, matchDone = 0, matchErr = false, spotSel = new Set(), flipped = new Set();

  overlay.innerHTML = `<div class="lesson" role="dialog" aria-modal="true" aria-label="${esc(L.title)}" style="--mc:${L.m.color}">
    <div class="l-top"><button class="x" id="lx" aria-label="Închide lecția">${I.x}</button><div class="bar"><div id="lbar" style="width:0"></div></div></div>
    <div class="phases" id="phases">${['Descoperă', 'Exersează', 'Pe scurt'].map((p, i) => (i === 2 && !hasRecap) ? '' : `<span data-p="${i}">${p}</span>`).join('')}</div>
    <div class="l-body" id="lbody"></div>
    <div class="l-foot" id="lfoot"></div></div>`;
  $('#lx').onclick = () => { if (pos === 0 || confirm('Ieși din lecție? Vei relua lecția de la început.')) go('#/drum'); };
  const body = $('#lbody'), foot = $('#lfoot');

  function footer(state, fb, label) {
    foot.className = 'l-foot' + (state === 'good' ? ' good' : state === 'bad' ? ' bad' : '');
    const left = fb ? `<div class="fb" role="status"><b>${state === 'good' ? I.check : I.x}${esc(fb.title)}</b>${fb.text ? `<p>${fb.text}</p>` : ''}</div>` : `<div class="fb">${label && label.hint ? `<p>${label.hint}</p>` : ''}</div>`;
    const txt = state === 'check' ? 'Verifică' : (label && label.text) || 'Continuă';
    const cls = state === 'good' ? 'ok' : state === 'bad' ? 'bad' : '';
    foot.innerHTML = `<div class="in">${left}<button class="btn ${cls}" id="lgo">${txt}</button></div>`;
    $('#lgo').disabled = state === 'check' ? !canCheck() : (state === 'wait');
    $('#lgo').onclick = state === 'check' ? check : next;
  }
  function canCheck() {
    const st = queue[pos].s;
    if (st.t === 'mcq' || st.t === 'tf') return sel !== null;
    if (st.t === 'order') return orderAns.length === st.items.length;
    if (st.t === 'spot') return spotSel.size > 0;
    return true;
  }
  function refreshBtn() { const b = $('#lgo'); if (b && !checked && foot.dataset.mode === 'check') b.disabled = !canCheck(); }

  function draw() {
    const st = queue[pos].s;
    sel = null; checked = false; orderAns = []; matchLeft = null; matchDone = 0; matchErr = false; spotSel = new Set(); flipped = new Set();
    $('#lbar').style.width = (pos / queue.length * 100) + '%';
    const ph = PHASE(st.t);
    $('#phases').querySelectorAll('span').forEach(s => { const p = +s.dataset.p; s.className = p < ph ? 'past' : p === ph ? 'now' : ''; });
    let h = `<div class="l-in">`;
    if (st.t !== 'info' && st.t !== 'recap') h += `<p class="kind">${KINDS[st.t]}${queue[pos].tries ? '<span class="again">A doua încercare</span>' : ''}</p>`;
    if (st.t === 'info') {
      if (st.guide) h += `<div class="guide"><span class="g-av">${avatarSVG(me, { head: true })}</span><p><b>${esc(me.name)}:</b> ${esc(st.guide)}</p></div>`;
      h += `<h2>${esc(st.title)}</h2><div class="info-card">${st.body}</div>${visualHTML(st.visual)}`;
    } else if (st.t === 'recap') {
      h += `<div class="recap"><span class="r-av idle">${avatarSVG(me)}</span><div><h2>Pe scurt</h2><ul>${st.points.map((p, i) => `<li style="--d:${i}">${I.check}<span>${esc(p)}</span></li>`).join('')}</ul></div></div>`;
    } else if (st.t === 'mcq') {
      h += `<h2>${esc(st.q)}</h2>`;
      if (st.context) h += `<div class="ctx"><small>${esc(st.context.label)}</small><p>${esc(st.context.text)}</p></div>`;
      h += `<div class="choices">${st.options.map((o, i) => `<button class="choice" data-i="${i}"><span class="k">${i + 1}</span><span>${esc(o)}</span></button>`).join('')}</div>`;
    } else if (st.t === 'tf') {
      h += `<h2>${esc(st.q)}</h2><div class="tf"><button class="choice" data-i="1">${I.thumb}Adevărat</button><button class="choice" data-i="0">${I.no}Mit</button></div>`;
    } else if (st.t === 'order') {
      const items = shuffle(st.items.map((t, i) => ({ t, i })));
      h += `<h2>${esc(st.q)}</h2><div class="answer-line" id="oline"></div><div class="bank">${items.map(o => `<button class="chip" data-i="${o.i}">${esc(o.t)}</button>`).join('')}</div>`;
    } else if (st.t === 'match') {
      const L1 = shuffle(st.pairs.map((p, i) => ({ t: p[0], i }))), R1 = shuffle(st.pairs.map((p, i) => ({ t: p[1], i })));
      h += `<h2>${esc(st.q)}</h2><div class="match"><div class="col">${L1.map(o => `<button class="chip" data-side="l" data-i="${o.i}">${esc(o.t)}</button>`).join('')}</div>
        <div class="col">${R1.map(o => `<button class="chip" data-side="r" data-i="${o.i}">${esc(o.t)}</button>`).join('')}</div></div>`;
    } else if (st.t === 'spot') {
      let k = 0;
      h += `<h2>${esc(st.q)}</h2><p class="story">${st.segments.map(sg => typeof sg === 'string' ? esc(sg) : `<button class="phrase" data-k="${k++}">${esc(sg.p)}</button>`).join('')}</p>`;
    } else if (st.t === 'sort') {
      h += `<h2>${esc(st.q)}</h2><div class="sort"><div class="sort-card" id="sCard" aria-live="polite"></div><p class="sort-count" id="sCount"></p>
        <div class="buckets">${st.buckets.map((b, i) => `<button class="bucket" data-b="${i}"><span>${esc(b)}</span><span class="cnt" id="bc${i}">0</span></button>`).join('')}</div></div>`;
    } else if (st.t === 'flip') {
      h += `<h2>${esc(st.q)}</h2><div class="flips">${st.cards.map((c, i) => `<button class="flip" data-i="${i}" aria-label="${esc(c.front)}. Atinge ca să întorci."><span class="fi"><span class="ff">${esc(c.front)}</span><span class="fb2 ${c.tag === 'Mit' ? 'myth' : 'fact'}"><b>${esc(c.tag)}</b>${esc(c.back)}</span></span></button>`).join('')}</div>`;
    }
    body.innerHTML = h + '</div>'; body.scrollTop = 0;

    if (st.t === 'info') { foot.dataset.mode = 'info'; footer('info'); wireVisual(st.visual, body); return; }
    if (st.t === 'recap') { foot.dataset.mode = 'info'; footer('info', null, { text: 'Termină lecția' }); return; }
    if (st.t === 'flip') {
      foot.dataset.mode = 'wait'; footer('wait', null, { hint: 'Atinge fiecare cartonaș ca să vezi răspunsul.' });
      body.querySelectorAll('.flip').forEach(b => b.onclick = () => {
        b.classList.add('on'); flipped.add(b.dataset.i);
        if (flipped.size === st.cards.length) { foot.dataset.mode = 'info'; footer('good', { title: 'Le-ai întors pe toate!', text: '' }); }
      });
      return;
    }
    if (st.t === 'match') {
      foot.dataset.mode = 'wait'; footer('wait', null, { hint: 'Atinge un element din stânga, apoi perechea lui din dreapta.' });
      body.querySelectorAll('.match .chip').forEach(b => b.onclick = () => {
        if (b.dataset.side === 'l') { body.querySelectorAll('[data-side="l"]').forEach(x => x.classList.remove('sel')); b.classList.add('sel'); matchLeft = b; return; }
        if (!matchLeft) { b.classList.add('wrong'); setTimeout(() => b.classList.remove('wrong'), 350); return; }
        if (matchLeft.dataset.i === b.dataset.i) {
          matchLeft.classList.remove('sel'); matchLeft.classList.add('good'); b.classList.add('good'); matchLeft = null; matchDone++;
          if (matchDone === st.pairs.length) {
            checked = true; graded++; if (!matchErr && !queue[pos].tries) firstTry++;
            foot.dataset.mode = 'info'; footer('good', { title: matchErr ? 'Gata, toate perechile!' : 'Perfect!', text: esc(st.explain || '') });
          }
        } else {
          matchErr = true; mistakes++;
          const a = matchLeft; [a, b].forEach(x => x.classList.add('wrong'));
          setTimeout(() => [a, b].forEach(x => x.classList.remove('wrong')), 400);
        }
      });
      return;
    }
    if (st.t === 'sort') {
      foot.dataset.mode = 'wait'; footer('wait', null, { hint: 'Alege categoria pentru fiecare cartonaș.' });
      const items = shuffle(st.items); let k = 0, errs = 0; const cnt = [0, 0, 0];
      const showCard = () => {
        $('#sCard').className = 'sort-card pop'; $('#sCard').textContent = items[k].text;
        $('#sCount').textContent = `${k + 1} din ${items.length}`;
      };
      showCard();
      body.querySelectorAll('.bucket').forEach(b => b.onclick = () => {
        if (k >= items.length || b.disabled) return;
        const it = items[k], ok = +b.dataset.b === it.b;
        const card = $('#sCard');
        if (ok) { cnt[it.b]++; $('#bc' + it.b).textContent = cnt[it.b]; card.className = 'sort-card good'; }
        else { errs++; mistakes++; cnt[it.b]++; $('#bc' + it.b).textContent = cnt[it.b]; card.className = 'sort-card wrong'; card.innerHTML = `${esc(it.text)}<small>Locul corect: ${esc(st.buckets[it.b])}</small>`; }
        body.querySelectorAll('.bucket').forEach(x => x.disabled = true);
        setTimeout(() => {
          body.querySelectorAll('.bucket').forEach(x => x.disabled = false);
          k++;
          if (k < items.length) showCard();
          else {
            checked = true; graded++; if (!errs && !queue[pos].tries) firstTry++;
            card.className = 'sort-card done'; card.textContent = errs ? `Gata! ${items.length - errs} din ${items.length} din prima.` : 'Toate la locul lor!';
            $('#sCount').textContent = '';
            foot.dataset.mode = 'info'; footer(errs ? 'bad' : 'good', { title: errs ? 'Aproape!' : 'Perfect!', text: esc(st.explain || '') });
          }
        }, ok ? 550 : 1500);
      });
      return;
    }
    foot.dataset.mode = 'check'; footer('check');
    if (st.t === 'mcq' || st.t === 'tf') {
      body.querySelectorAll('.choice').forEach(b => b.onclick = () => {
        if (checked) return;
        body.querySelectorAll('.choice').forEach(x => x.classList.remove('sel'));
        b.classList.add('sel'); sel = +b.dataset.i; refreshBtn();
      });
    }
    if (st.t === 'spot') {
      body.querySelectorAll('.phrase').forEach(b => b.onclick = () => {
        if (checked) return;
        const k = b.dataset.k; if (spotSel.has(k)) { spotSel.delete(k); b.classList.remove('sel'); } else { spotSel.add(k); b.classList.add('sel'); }
        refreshBtn();
      });
    }
    if (st.t === 'order') {
      const line = $('#oline');
      body.querySelectorAll('.bank .chip').forEach(b => b.onclick = () => {
        if (checked) return;
        b.classList.add('used'); orderAns.push(+b.dataset.i);
        const c = document.createElement('button'); c.className = 'chip'; c.dataset.i = b.dataset.i;
        c.innerHTML = `<span class="n">${orderAns.length}</span>${esc(st.items[+b.dataset.i])}`;
        c.onclick = () => {
          if (checked) return;
          orderAns = orderAns.filter(x => x !== +c.dataset.i); c.remove(); b.classList.remove('used');
          line.querySelectorAll('.chip').forEach((x, k) => x.querySelector('.n').textContent = k + 1); refreshBtn();
        };
        line.appendChild(c); refreshBtn();
      });
    }
  }

  function check() {
    const st = queue[pos].s; if (checked || !canCheck()) return;
    checked = true; graded++; foot.dataset.mode = 'info';
    let ok, correctText = '', custom = '';
    if (st.t === 'mcq') { ok = sel === st.answer; correctText = st.options[st.answer]; if (st.feedback) custom = st.feedback[sel]; }
    if (st.t === 'tf') { ok = (sel === 1) === st.answer; correctText = st.answer ? 'Adevărat' : 'Mit'; }
    if (st.t === 'order') { ok = orderAns.every((v, k) => v === k); correctText = st.items.map((t, k) => (k + 1) + '. ' + esc(t)).join('<br>'); }
    if (st.t === 'spot') {
      const hits = new Set(); let k = 0; st.segments.forEach(sg => { if (typeof sg !== 'string') { if (sg.hit) hits.add(String(k)); k++; } });
      ok = hits.size === spotSel.size && [...hits].every(x => spotSel.has(x));
      body.querySelectorAll('.phrase').forEach(b => { const k = b.dataset.k; if (hits.has(k)) b.classList.add(spotSel.has(k) ? 'good' : 'missed'); else if (spotSel.has(k)) b.classList.add('wrong'); });
    }
    if (st.t === 'mcq' || st.t === 'tf') {
      body.querySelectorAll('.choice').forEach(b => {
        const i = +b.dataset.i;
        const isRight = st.t === 'mcq' ? i === st.answer : (i === 1) === st.answer;
        if (isRight) b.classList.add('good'); else if (b.classList.contains('sel')) b.classList.add('wrong');
      });
    }
    const expl = custom || st.explain || '';
    if (ok) {
      if (!queue[pos].tries) firstTry++;
      footer('good', { title: ['Corect!', 'Foarte bine!', 'Exact!', 'Bravo!'][Math.floor(Math.random() * 4)], text: esc(expl) });
    } else {
      mistakes++;
      const again = queue[pos].tries < 2;
      if (again) queue.push({ s: st, tries: queue[pos].tries + 1 });
      let ans = '';
      if (st.t === 'order') ans = `<strong style="display:block;margin-top:4px">Ordinea corectă:</strong>${correctText}`;
      else if (st.t === 'spot') ans = 'Cele marcate cu verde punctat îți scăpaseră.';
      else ans = `Răspuns corect: <strong>${esc(correctText)}</strong>`;
      footer('bad', { title: 'Nu chiar.', text: (custom ? esc(custom) + '<br>' : '') + ans + (!custom && st.explain ? '<br>' + esc(st.explain) : (st.t === 'spot' && st.explain ? '<br>' + esc(st.explain) : '')) + (again ? '<br><i>Revenim la întrebare la final.</i>' : '') });
    }
  }

  function next() { pos++; if (pos >= queue.length) return finish(); draw(); }

  function finish() {
    const already = !!S.done[L.id];
    const perfect = mistakes === 0;
    const gain = already ? 5 : 10 + (perfect ? 5 : 0);
    S.xp += gain;
    if (S.lastDay !== today()) {
      const y = new Date(); y.setDate(y.getDate() - 1);
      const yk = y.getFullYear() + '-' + (y.getMonth() + 1) + '-' + y.getDate();
      S.streak = S.lastDay === yk ? S.streak + 1 : 1; S.lastDay = today();
    }
    if (!already) S.walkFrom = L.id;
    S.done[L.id] = true; save(); updateStats();
    const modFinished = !already && moduleDone(L.mi);
    const acc = graded ? Math.round(firstTry / graded * 100) : 100;
    $('#lbar').style.width = '100%';
    $('#phases').querySelectorAll('span').forEach(s => s.className = 'past');
    body.innerHTML = `<div class="l-in done-screen">
      <div class="done-av cheer">${avatarSVG(me)}</div>
      <h2>${modFinished ? `Ai terminat modulul ${L.mi + 1}!` : 'Lecție terminată!'}</h2>
      <p class="muted">${modFinished ? `Ai ieșit din ${esc(L.m.zone || L.m.title)}.` : `${esc(me.name)} merge mai departe pe potecă.`}</p>
      <div class="scores"><div class="score"><small>XP câștigat</small><b class="xp-c">+${gain}</b></div>
      <div class="score"><small>Din prima încercare</small><b class="ok-c">${acc}%</b></div></div>
      ${allDone() && !already ? '<p><b>Ai parcurs toată jungla. Certificatul tău e gata!</b></p>' : ''}
    </div>`;
    foot.className = 'l-foot'; foot.innerHTML = `<div class="in"><div class="fb"></div><button class="btn" id="lgo">Continuă</button></div>`;
    $('#lgo').onclick = () => go(allDone() && !already ? '#/certificat' : '#/drum');
    $('#lgo').focus();
    confetti();
  }

  overlay.onkeydown = e => {
    if (e.key === 'Enter' && !(e.target && e.target.tagName === 'BUTTON' && e.target.id !== 'lgo')) { const b = $('#lgo'); if (b && !b.disabled) { e.preventDefault(); b.click(); } }
    const st = queue[pos] && queue[pos].s;
    if (!checked && st && (st.t === 'mcq' || st.t === 'tf') && /^[1-4]$/.test(e.key)) {
      const bs = body.querySelectorAll('.choice'); const b = bs[+e.key - 1]; if (b) b.click();
    }
  };
  draw();
  setTimeout(() => $('#lx').focus(), 30);
}

/* ---------------- blog ---------------- */
function md(src) {
  const inline = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*(.+?)\*/g, '<i>$1</i>')
    .replace(/\[(.+?)\]\((https?:[^)\s]+|#[^)\s]*)\)/g, (m, t, u) => `<a href="${u}"${u[0] === '#' ? '' : ' target="_blank" rel="noopener"'}>${t}</a>`);
  return src.trim().split(/\n\s*\n/).map(b => {
    b = b.trim();
    if (b.startsWith('## ')) return `<h2>${inline(b.slice(3))}</h2>`;
    const lines = b.split('\n');
    if (lines.every(l => /^\s*-\s+/.test(l))) return `<ul>${lines.map(l => `<li>${inline(l.replace(/^\s*-\s+/, ''))}</li>`).join('')}</ul>`;
    return `<p>${inline(lines.join(' '))}</p>`;
  }).join('');
}
const fmtDate = d => new Date(d + 'T12:00:00').toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' });
function renderBlog() {
  const posts = POSTS.slice().sort((a, b) => b.date.localeCompare(a.date));
  app.innerHTML = `<div class="page"><div class="map-head"><div><h1>Blog</h1><p>Idei scurte și practice despre AI, pentru oameni care nu sunt tehnicieni.</p></div></div>
    <div class="posts">${posts.map(p => `<a class="post-card" href="#/blog/${esc(p.slug)}"><span class="tag">${esc(p.tag || 'AI')}</span><span class="meta">${fmtDate(p.date)}</span>
      <h3>${esc(p.title)}</h3><p>${esc(p.excerpt || '')}</p></a>`).join('') || '<p>Primele articole apar în curând.</p>'}</div></div>`;
  window.scrollTo(0, 0);
}
function renderPost(slug) {
  const p = POSTS.find(x => x.slug === slug);
  if (!p) return go('#/blog');
  document.title = p.title + ' · EvoTrainHub';
  app.innerHTML = `<article class="page"><a class="back" href="#/blog">${I.left.replace('<svg', '<svg width="18" height="18"')} Toate articolele</a>
    <div class="prose"><p class="meta" style="margin-top:18px"><span class="tag">${esc(p.tag || 'AI')}</span>${fmtDate(p.date)}</p><h1>${esc(p.title)}</h1>${md(p.body)}</div>
    ${S.survey ? '' : `<p><a class="btn" href="#/chestionar">Încearcă gratuit „${esc(C.APP_NAME)}”</a></p>`}
    ${ctaBox()}</article>`;
  window.scrollTo(0, 0);
}

/* ---------------- despre + confidențialitate ---------------- */
function renderAbout() {
  app.innerHTML = `<div class="page prose"><h1>Despre „${esc(C.APP_NAME)}”</h1>
    <p>Aplicația e creată de <b>EvoTrainHub</b>, o echipă care organizează programe de formare în inteligență artificială și conformitate pentru instituții publice și companii.</p>
    <p>Am construit-o gratuit, pentru oamenii care încep acum să folosească AI. Explicăm fără jargon ce este AI-ul, cum lucrezi cu el, unde greșește și cum îți protejezi datele. Ultimul modul explică pe scurt regulile europene din AI Act.</p>
    <h2>Pentru organizații</h2>
    <p>Articolul 4 din AI Act cere organizațiilor care folosesc AI să ia măsuri care să sprijine alfabetizarea în domeniul AI a personalului. Putem adapta acest traseu, sau un program complet, domeniului vostru.</p>
    <p>Scrie-ne la <a href="mailto:${esc(C.CONTACT_EMAIL)}">${esc(C.CONTACT_EMAIL)}</a>.</p>
    ${ctaBox()}</div>`;
  window.scrollTo(0, 0);
}
function renderPrivacy() {
  app.innerHTML = `<div class="page prose"><h1>Confidențialitate</h1>
    <p><b>Operator:</b> ${esc(C.OPERATOR)}. Contact: <a href="mailto:${esc(C.CONTACT_EMAIL)}">${esc(C.CONTACT_EMAIL)}</a>.</p>
    <h2>Ce date colectăm și de ce</h2>
    <ul>
      <li><b>Chestionarul de la început</b> (sectorul, domeniul, cât folosești AI, ce te interesează) e anonim. Nu cerem nume și nu legăm răspunsurile de adresa de e-mail. Le folosim doar statistic, ca să facem materiale mai potrivite.</li>
      <li><b>Adresa de e-mail</b>, cerută după primul modul, o folosim ca să-ți dăm acces la restul modulelor și ca să-ți trimitem un singur e-mail de bun venit, cu linkul aplicației.</li>
      <li><b>Anunțurile despre cursuri</b> ți le trimitem doar dacă ai bifat separat această opțiune. Bifa nu e obligatorie pentru a folosi aplicația. Te poți dezabona oricând, din orice mesaj sau scriindu-ne.</li>
      <li><b>Progresul tău</b> (lecțiile terminate, punctele) rămâne doar în browserul tău. Nu îl primim.</li>
      <li><b>Numele de pe certificat</b> e folosit doar în browserul tău, ca să genereze imaginea. Nu îl primim.</li>
    </ul>
    <h2>Temeiul legal și durata</h2>
    <p>Pentru accesul la aplicație și e-mailul de bun venit: executarea serviciului pe care l-ai cerut. Pentru anunțuri: consimțământul tău, pe care îl poți retrage oricând. Păstrăm adresa ${esc(C.RETENTION)}.</p>
    <h2>Unde sunt stocate</h2>
    <p>Răspunsurile și adresele sunt stocate într-un document Google (Google Workspace), cu acces restrâns. Nu vindem și nu dăm datele altor firme.</p>
    <h2>Drepturile tale</h2>
    <p>Ai dreptul să ceri acces la date, rectificarea sau ștergerea lor, restricționarea prelucrării, portabilitatea și să te opui prelucrării. Scrie-ne la adresa de mai sus. Poți depune și plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).</p>
    <p class="fine">Dacă vrei să ștergi progresul de pe acest dispozitiv: <button class="link" id="reset">șterge progresul local</button></p></div>`;
  $('#reset').onclick = () => { if (confirm('Ștergi progresul de pe acest dispozitiv? Nu poate fi recuperat.')) { localStorage.removeItem(KEY); S = defaults(); updateStats(); toast('Progres șters.'); go('#/'); } };
  window.scrollTo(0, 0);
}

/* ---------------- certificat ---------------- */
function renderCert() {
  if (!allDone()) {
    const left = ALL.filter(l => !S.done[l.id]).length;
    app.innerHTML = `<div class="page cert-wrap"><h1 class="sec" style="font-size:28px">Certificatul tău</h1><p>Mai ai ${left} ${left === 1 ? 'lecție' : 'lecții'} până la certificat.</p><a class="btn" href="#/drum">Înapoi la drum</a></div>`;
    return;
  }
  app.innerHTML = `<div class="cert-wrap"><h1 class="sec" style="font-size:28px;margin-top:10px">Certificatul tău</h1>
    <p style="color:var(--muted);margin:0">Scrie numele exact cum vrei să apară. Numele rămâne pe dispozitivul tău, nu îl primim.</p>
    <label class="field"><span>Nume și prenume</span><input id="cName" maxlength="60" autocomplete="name" value="${esc(S.certName || '')}"></label>
    <canvas id="cv" width="1600" height="1130" aria-label="Previzualizare certificat"></canvas>
    <div style="display:flex;gap:12px;flex-wrap:wrap"><button class="btn" id="dl">Descarcă certificatul (PNG)</button><a class="btn ghost" href="#/drum">Înapoi la drum</a></div>
    ${ctaBox()}</div>`;
  const cv = $('#cv'), ctx = cv.getContext('2d'), logo = new Image();
  let logoOk = true;
  logo.src = 'assets/logo.png';
  const F = 'Lexend, system-ui, sans-serif';
  const draw = () => {
    const name = $('#cName').value.trim() || 'Numele tău';
    const W = 1600, H = 1130;
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#E1F4E8'; ctx.fillRect(0, 0, W, 14); ctx.fillRect(0, H - 14, W, 14);
    ctx.strokeStyle = '#0E6B4F'; ctx.lineWidth = 3; ctx.strokeRect(50, 50, W - 100, H - 100);
    ctx.strokeStyle = '#22A55B'; ctx.lineWidth = 1.5; ctx.strokeRect(64, 64, W - 128, H - 128);
    if (logoOk && logo.complete && logo.naturalWidth) ctx.drawImage(logo, W / 2 - 80, 110, 160, 160);
    ctx.textAlign = 'center'; ctx.fillStyle = '#0E6B4F';
    ctx.font = `600 64px ${F}`; ctx.fillText('Certificat de parcurgere', W / 2, 350);
    ctx.fillStyle = '#5A7568'; ctx.font = `400 30px ${F}`; ctx.fillText('Se acordă', W / 2, 440);
    let size = 84; ctx.font = `600 ${size}px ${F}`;
    while (ctx.measureText(name).width > W - 320 && size > 40) { size -= 4; ctx.font = `600 ${size}px ${F}`; }
    ctx.fillStyle = '#12332A'; ctx.fillText(name, W / 2, 545);
    ctx.strokeStyle = '#FFC23D'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(W / 2 - 260, 580); ctx.lineTo(W / 2 + 260, 580); ctx.stroke();
    ctx.fillStyle = '#12332A'; ctx.font = `400 32px ${F}`;
    ctx.fillText(`pentru parcurgerea programului „${C.APP_NAME}”`, W / 2, 660);
    ctx.fillStyle = '#5A7568'; ctx.font = `400 26px ${F}`;
    ctx.fillText('7 module și 28 de lecții de alfabetizare în domeniul inteligenței artificiale:', W / 2, 720);
    ctx.fillText('noțiuni de bază, formularea prompturilor, utilizare la birou, verificarea informațiilor,', W / 2, 760);
    ctx.fillText('protecția datelor și Regulamentul (UE) 2024/1689 (AI Act).', W / 2, 800);
    const date = new Date().toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' });
    ctx.textAlign = 'left'; ctx.fillStyle = '#12332A'; ctx.font = `600 26px ${F}`; ctx.fillText(date, 180, 950);
    ctx.fillStyle = '#5A7568'; ctx.font = `400 22px ${F}`; ctx.fillText('Data', 180, 985);
    ctx.textAlign = 'right'; ctx.fillStyle = '#12332A'; ctx.font = `600 26px ${F}`; ctx.fillText(C.CERT_SIGNATURE, W - 180, 950);
    ctx.fillStyle = '#5A7568'; ctx.font = `400 22px ${F}`; ctx.fillText(C.CERT_SIGNATURE_ROLE, W - 180, 985);
  };
  logo.onload = draw; logo.onerror = () => { logoOk = false; draw(); };
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(draw);
  $('#cName').oninput = () => { S.certName = $('#cName').value; save(); draw(); };
  $('#dl').onclick = () => {
    if (!$('#cName').value.trim()) { toast('Scrie întâi numele.'); $('#cName').focus(); return; }
    const done = blob => { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'certificat-ai-pas-cu-pas.png'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); };
    try { cv.toBlob(b => b ? done(b) : fail()); } catch { fail(); }
    function fail() { logoOk = false; draw(); try { cv.toBlob(b => b && done(b)); } catch { toast('Descărcarea nu a mers. Încearcă din alt browser.'); } }
  };
  try { if (!sessionStorage.getItem('certConfetti')) { sessionStorage.setItem('certConfetti', '1'); confetti(); } } catch {}
}

/* ---------------- pornire ---------------- */
initGate();
route();
})();
