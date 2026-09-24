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
const defaults = () => ({ survey: false, email: false, done: {}, xp: 0, streak: 0, lastDay: null, gatePrompted: false, certName: '' });
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
  const cols = ['#1F8CC9', '#F4B63F', '#2BAE66', '#E08A2E', '#7A5BC7', '#149C9C'];
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
      <h1>Învață inteligența artificială, pas cu pas.</h1>
      <p>Un traseu gratuit, în 7 module scurte, pentru oricine vrea să folosească AI la muncă, corect și în siguranță. Fără termeni tehnici, cu exerciții de câteva minute.</p>
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
  <div class="facts">
    <div class="fact"><b>7 module</b><span>de la „ce este AI” până la AI Act</span></div>
    <div class="fact"><b>28 de lecții</b><span>de 3–4 minute, cu exerciții interactive</span></div>
    <div class="fact"><b>Certificat</b><span>de parcurgere, la final</span></div>
  </div>
  <h2 class="sec">Ce vei învăța</h2>
  <div class="mods">
    ${M.map((m, i) => `<div class="mod-card" style="--mc:${m.color}"><i>${I[m.icon]}</i><div><b>${i + 1}. ${esc(m.title)}</b><span>${esc(m.subtitle)}</span></div></div>`).join('')}
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
  if (S.survey) return go('#/drum');
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
          S.survey = true; save(); go('#/drum'); toast('Mulțumim! Poți începe prima lecție.');
        }
      }, 220);
    });
    const bk = $('#back'); if (bk) bk.onclick = () => { i--; draw(); };
    window.scrollTo(0, 0);
  };
  draw();
}

/* ---------------- harta ---------------- */
const OFFS = [0, .7, 1, .7, 0, -.7, -1, -.7];
function renderMap() {
  const doneN = ALL.filter(l => S.done[l.id]).length;
  const cur = ALL.findIndex(l => !S.done[l.id]);
  let html = `<div class="map-head"><div><h1>Drumul tău</h1><p>${doneN === 0 ? 'Începe cu prima lecție. Durează câteva minute.' : doneN === ALL.length ? 'Ai terminat tot drumul. Felicitări!' : 'Continuă de unde ai rămas.'}</p></div>
    <div class="overall"><small>${doneN} din ${ALL.length} lecții</small><div class="bar" style="margin-top:6px"><div style="width:${doneN / ALL.length * 100}%"></div></div></div></div>
    <div class="path">`;
  M.forEach((m, mi) => {
    const mDone = m.lessons.filter(l => S.done[l.id]).length;
    const firstIdx = ALL.findIndex(l => l.mi === mi);
    const unitLocked = !isUnlocked(ALL[firstIdx]);
    html += `<section class="unit${unitLocked ? ' locked' : ''}" style="--mc:${m.color}" aria-label="Modulul ${mi + 1}: ${esc(m.title)}">
      <div class="unit-banner"><i>${I[m.icon]}</i><div class="t"><small>Modulul ${mi + 1}</small><b>${esc(m.title)}</b></div><span class="p">${mDone}/${m.lessons.length}</span></div>
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
  html += `<div class="trophy"><button class="node ${fin ? '' : 'locked'}" id="trophy" aria-label="Certificat${fin ? '' : ', blocat'}" style="--mc:#F4B63F">${I.trophy}</button>
    <p class="node-label" style="max-width:none">${fin ? 'Descarcă certificatul' : 'Certificatul te așteaptă la final'}</p></div></div>`;
  app.innerHTML = html;

  app.querySelectorAll('.node[data-id]').forEach(b => b.onclick = () => {
    const l = byId(b.dataset.id);
    if (!isUnlocked(l)) return toast('Termină întâi lecția anterioară.');
    if (needsEmail(l)) return openGate(l.id);
    go('#/lectie/' + l.id);
  });
  $('#trophy').onclick = () => fin ? go('#/certificat') : toast('Termină toate lecțiile ca să deblochezi certificatul.');

  const c = app.querySelector('.node-wrap.current');
  if (c && doneN > 0) setTimeout(() => c.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
  if (moduleDone(0) && !S.email && !S.gatePrompted) { S.gatePrompted = true; save(); setTimeout(() => openGate(null), 600); }
}

/* ---------------- poarta de e-mail ---------------- */
let pendingLesson = null;
function openGate(lessonId) {
  pendingLesson = lessonId;
  const d = $('#gate');
  $('#gEmail').value = ''; $('#gMkt').checked = false; $('#gErr').textContent = '';
  d.showModal(); setTimeout(() => $('#gEmail').focus(), 50);
}
function initGate() {
  $('#gPriv').href = '#/confidentialitate';
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

/* ---------------- lecția ---------------- */
function openLesson(id) {
  const L = byId(id);
  if (!L) return go('#/drum');
  if (!S.survey) return go('#/chestionar');
  if (!isUnlocked(L)) { go('#/drum'); return toast('Termină întâi lecția anterioară.'); }
  if (needsEmail(L)) { go('#/drum'); return setTimeout(() => openGate(L.id), 50); }
  if (!app.querySelector('.path')) renderMap();
  document.body.style.overflow = 'hidden'; $('#toast').classList.remove('show');

  const queue = L.steps.map(s => ({ s, tries: 0 }));
  let pos = 0, mistakes = 0, firstTry = 0, graded = 0;
  let sel = null, checked = false, orderAns = [], matchLeft = null, matchDone = 0, matchErr = false;

  overlay.innerHTML = `<div class="lesson" role="dialog" aria-modal="true" aria-label="${esc(L.title)}">
    <div class="l-top"><button class="x" id="lx" aria-label="Închide lecția">${I.x}</button><div class="bar"><div id="lbar" style="width:0"></div></div></div>
    <div class="l-body" id="lbody"></div>
    <div class="l-foot" id="lfoot"></div></div>`;
  $('#lx').onclick = () => { if (pos === 0 || confirm('Ieși din lecție? Vei relua lecția de la început.')) go('#/drum'); };

  const body = $('#lbody'), foot = $('#lfoot');
  const kinds = { info: 'De reținut', mcq: 'Alege răspunsul corect', tf: 'Adevăr sau mit?', order: 'Pune în ordine', match: 'Potrivește perechile' };

  function footer(state, fb) {
    foot.className = 'l-foot' + (state === 'good' ? ' good' : state === 'bad' ? ' bad' : '');
    let left = '';
    if (fb) left = `<div class="fb" role="status"><b>${state === 'good' ? I.check : I.x}${esc(fb.title)}</b>${fb.text ? `<p>${fb.text}</p>` : ''}</div>`;
    else left = '<div class="fb"></div>';
    const label = state === 'check' ? 'Verifică' : 'Continuă';
    const cls = state === 'good' ? 'ok' : state === 'bad' ? 'bad' : '';
    foot.innerHTML = `<div class="in">${left}<button class="btn ${cls}" id="lgo" ${state === 'check' && !canCheck() ? 'disabled' : ''}>${label}</button></div>`;
    $('#lgo').onclick = state === 'check' ? check : next;
  }
  function canCheck() {
    const st = queue[pos].s;
    if (st.t === 'mcq' || st.t === 'tf') return sel !== null;
    if (st.t === 'order') return orderAns.length === st.items.length;
    return true;
  }
  function refreshBtn() { const b = $('#lgo'); if (b && !checked) b.disabled = !canCheck(); }

  function draw() {
    const st = queue[pos].s;
    sel = null; checked = false; orderAns = []; matchLeft = null; matchDone = 0; matchErr = false;
    $('#lbar').style.width = (pos / queue.length * 100) + '%';
    let h = `<div class="l-in"><p class="kind">${kinds[st.t]}${queue[pos].tries ? ' · a doua încercare' : ''}</p>`;
    if (st.t === 'info') {
      h += `<h2>${esc(st.title)}</h2><div class="info-card">${st.body}</div>`;
    } else if (st.t === 'mcq') {
      h += `<h2>${esc(st.q)}</h2>`;
      if (st.context) h += `<div class="ctx"><small>${esc(st.context.label)}</small><p>${esc(st.context.text)}</p></div>`;
      h += `<div class="choices">${st.options.map((o, i) => `<button class="choice" data-i="${i}"><span class="k">${i + 1}</span><span>${esc(o)}</span></button>`).join('')}</div>`;
    } else if (st.t === 'tf') {
      h += `<h2>${esc(st.q)}</h2><div class="tf">
        <button class="choice" data-i="1">${I.thumb}Adevărat</button><button class="choice" data-i="0">${I.no}Mit</button></div>`;
    } else if (st.t === 'order') {
      const items = shuffle(st.items.map((t, i) => ({ t, i })));
      h += `<h2>${esc(st.q)}</h2><div class="answer-line" id="oline"></div>
        <div class="bank">${items.map(o => `<button class="chip" data-i="${o.i}">${esc(o.t)}</button>`).join('')}</div>`;
    } else if (st.t === 'match') {
      const L1 = shuffle(st.pairs.map((p, i) => ({ t: p[0], i }))), R1 = shuffle(st.pairs.map((p, i) => ({ t: p[1], i })));
      h += `<h2>${esc(st.q)}</h2><div class="match">
        <div class="col">${L1.map(o => `<button class="chip" data-side="l" data-i="${o.i}">${esc(o.t)}</button>`).join('')}</div>
        <div class="col">${R1.map(o => `<button class="chip" data-side="r" data-i="${o.i}">${esc(o.t)}</button>`).join('')}</div></div>`;
    }
    body.innerHTML = h + '</div>'; body.scrollTop = 0;

    if (st.t === 'info') { footer('info'); return; }
    footer('check');

    if (st.t === 'mcq' || st.t === 'tf') {
      body.querySelectorAll('.choice').forEach(b => b.onclick = () => {
        if (checked) return;
        body.querySelectorAll('.choice').forEach(x => x.classList.remove('sel'));
        b.classList.add('sel'); sel = +b.dataset.i; refreshBtn();
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
    if (st.t === 'match') {
      foot.innerHTML = `<div class="in"><div class="fb"><p>Atinge un element din stânga, apoi perechea lui din dreapta.</p></div></div>`;
      body.querySelectorAll('.match .chip').forEach(b => b.onclick = () => {
        if (b.dataset.side === 'l') { body.querySelectorAll('[data-side="l"]').forEach(x => x.classList.remove('sel')); b.classList.add('sel'); matchLeft = b; return; }
        if (!matchLeft) { b.classList.add('wrong'); setTimeout(() => b.classList.remove('wrong'), 350); return; }
        if (matchLeft.dataset.i === b.dataset.i) {
          matchLeft.classList.remove('sel'); matchLeft.classList.add('good'); b.classList.add('good'); matchLeft = null; matchDone++;
          if (matchDone === st.pairs.length) {
            checked = true; graded++; if (!matchErr && !queue[pos].tries) firstTry++;
            footer('good', { title: matchErr ? 'Gata, toate perechile!' : 'Perfect!', text: esc(st.explain || '') });
          }
        } else {
          matchErr = true; mistakes++;
          const a = matchLeft; [a, b].forEach(x => x.classList.add('wrong'));
          setTimeout(() => [a, b].forEach(x => x.classList.remove('wrong')), 400);
        }
      });
    }
  }

  function check() {
    const st = queue[pos].s; if (checked || !canCheck()) return;
    checked = true; graded++;
    let ok, correctText = '';
    if (st.t === 'mcq') { ok = sel === st.answer; correctText = st.options[st.answer]; }
    if (st.t === 'tf') { ok = (sel === 1) === st.answer; correctText = st.answer ? 'Adevărat' : 'Mit'; }
    if (st.t === 'order') { ok = orderAns.every((v, k) => v === k); correctText = st.items.map((t, k) => (k + 1) + '. ' + t).join('<br>'); }
    if (st.t === 'mcq' || st.t === 'tf') {
      body.querySelectorAll('.choice').forEach(b => {
        const i = +b.dataset.i;
        const isRight = st.t === 'mcq' ? i === st.answer : (i === 1) === st.answer;
        if (isRight) b.classList.add('good'); else if (b.classList.contains('sel')) b.classList.add('wrong');
      });
    }
    if (ok) {
      if (!queue[pos].tries) firstTry++;
      footer('good', { title: ['Corect!', 'Foarte bine!', 'Exact!', 'Bravo!'][Math.floor(Math.random() * 4)], text: esc(st.explain || '') });
    } else {
      mistakes++;
      if (queue[pos].tries < 2) queue.push({ s: st, tries: queue[pos].tries + 1 });
      const ans = st.t === 'order' ? `<strong style="display:block;margin-top:4px">Ordinea corectă:</strong>${correctText}` : `Răspuns corect: <strong>${esc(correctText)}</strong>`;
      footer('bad', { title: 'Nu chiar.', text: ans + (st.explain ? '<br>' + esc(st.explain) : '') + (queue[pos].tries < 2 ? '<br><i>Revenim la întrebare la final.</i>' : '') });
    }
  }

  function next() {
    pos++;
    if (pos >= queue.length) return finish();
    draw();
  }

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
    S.done[L.id] = true; save(); updateStats();
    const modFinished = !already && moduleDone(L.mi);
    const acc = graded ? Math.round(firstTry / graded * 100) : 100;
    $('#lbar').style.width = '100%';
    body.innerHTML = `<div class="l-in done-screen">
      <div class="big">${modFinished ? I.trophy : I.star}</div>
      <h2>${modFinished ? `Ai terminat modulul ${L.mi + 1}!` : 'Lecție terminată!'}</h2>
      <p style="color:var(--muted)">${modFinished ? esc(L.m.title) : esc(L.title)}</p>
      <div class="scores"><div class="score"><small>XP câștigat</small><b style="color:#C98E1E">+${gain}</b></div>
      <div class="score"><small>Din prima încercare</small><b style="color:var(--ok)">${acc}%</b></div></div>
      ${allDone() && !already ? '<p><b>Ai parcurs tot drumul. Certificatul tău e gata!</b></p>' : ''}
    </div>`;
    foot.className = 'l-foot'; foot.innerHTML = `<div class="in"><div class="fb"></div><button class="btn" id="lgo">Continuă</button></div>`;
    $('#lgo').onclick = () => go(allDone() && !already ? '#/certificat' : '#/drum');
    $('#lgo').focus();
    confetti();
  }

  overlay.onkeydown = e => {
    if (e.key === 'Enter') { const b = $('#lgo'); if (b && !b.disabled) { e.preventDefault(); b.click(); } }
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
    ctx.fillStyle = '#E6F2F9'; ctx.fillRect(0, 0, W, 14); ctx.fillRect(0, H - 14, W, 14);
    ctx.strokeStyle = '#1D4E6B'; ctx.lineWidth = 3; ctx.strokeRect(50, 50, W - 100, H - 100);
    ctx.strokeStyle = '#1F8CC9'; ctx.lineWidth = 1.5; ctx.strokeRect(64, 64, W - 128, H - 128);
    if (logoOk && logo.complete && logo.naturalWidth) ctx.drawImage(logo, W / 2 - 80, 110, 160, 160);
    ctx.textAlign = 'center'; ctx.fillStyle = '#1D4E6B';
    ctx.font = `600 64px ${F}`; ctx.fillText('Certificat de parcurgere', W / 2, 350);
    ctx.fillStyle = '#5A7281'; ctx.font = `400 30px ${F}`; ctx.fillText('Se acordă', W / 2, 440);
    let size = 84; ctx.font = `600 ${size}px ${F}`;
    while (ctx.measureText(name).width > W - 320 && size > 40) { size -= 4; ctx.font = `600 ${size}px ${F}`; }
    ctx.fillStyle = '#15303F'; ctx.fillText(name, W / 2, 545);
    ctx.strokeStyle = '#F4B63F'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(W / 2 - 260, 580); ctx.lineTo(W / 2 + 260, 580); ctx.stroke();
    ctx.fillStyle = '#15303F'; ctx.font = `400 32px ${F}`;
    ctx.fillText(`pentru parcurgerea programului „${C.APP_NAME}”`, W / 2, 660);
    ctx.fillStyle = '#5A7281'; ctx.font = `400 26px ${F}`;
    ctx.fillText('7 module și 28 de lecții de alfabetizare în domeniul inteligenței artificiale:', W / 2, 720);
    ctx.fillText('noțiuni de bază, formularea prompturilor, utilizare la birou, verificarea informațiilor,', W / 2, 760);
    ctx.fillText('protecția datelor și Regulamentul (UE) 2024/1689 (AI Act).', W / 2, 800);
    const date = new Date().toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' });
    ctx.textAlign = 'left'; ctx.fillStyle = '#15303F'; ctx.font = `600 26px ${F}`; ctx.fillText(date, 180, 950);
    ctx.fillStyle = '#5A7281'; ctx.font = `400 22px ${F}`; ctx.fillText('Data', 180, 985);
    ctx.textAlign = 'right'; ctx.fillStyle = '#15303F'; ctx.font = `600 26px ${F}`; ctx.fillText(C.CERT_SIGNATURE, W - 180, 950);
    ctx.fillStyle = '#5A7281'; ctx.font = `400 22px ${F}`; ctx.fillText(C.CERT_SIGNATURE_ROLE, W - 180, 985);
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
