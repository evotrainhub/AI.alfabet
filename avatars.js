/* =====================================================================
   PERSONAJELE-GHID (desenate de la zero, SVG)
   ===================================================================== */
window.AVATARS = [
  { id: 'ana',    name: 'Ana',    tag: 'Curioasă, pune multe întrebări',       skin: '#F2C9A5', hair: '#5A3825', style: 'long',  shirt: '#22A55B', pants: '#2F4858' },
  { id: 'mihai',  name: 'Mihai',  tag: 'Pragmatic, vrea să câștige timp',       skin: '#E8B892', hair: '#2B2B2B', style: 'short', shirt: '#1F8CC9', pants: '#3B3B4F', hat: true },
  { id: 'ioana',  name: 'Ioana',  tag: 'Organizată, îi plac listele clare',     skin: '#C98E66', hair: '#1E1A18', style: 'bun',   shirt: '#FF8A3D', pants: '#2F4858', glasses: true },
  { id: 'radu',   name: 'Radu',   tag: 'Sceptic, verifică tot de două ori',     skin: '#8D5A3B', hair: '#141414', style: 'curly', shirt: '#12B5A6', pants: '#3B3B4F' },
  { id: 'elena',  name: 'Elena',  tag: 'Cu experiență, învață toată viața',     skin: '#F0D0B4', hair: '#BDBDBD', style: 'bob',   shirt: '#E0457B', pants: '#4A4A5A', glasses: true },
  { id: 'andrei', name: 'Andrei', tag: 'Explorator, încearcă orice unealtă nouă', skin: '#D9A47E', hair: '#7A4A22', style: 'beard', shirt: '#7C4DDB', pants: '#2F4858', hat: true }
];

window.avatarSVG = function (a, opts) {
  opts = opts || {};
  const head = !!opts.head;
  const vb = head ? '12 -3 40 40' : '0 -2 64 98';
  let backHair = '', frontHair = '', extra = '';
  const H = a.hair;
  switch (a.style) {
    case 'long':
      backHair = `<path d="M17 20 Q17 5 32 5 Q47 5 47 20 L48 48 Q40 52 32 48 Q24 52 16 48Z" fill="${H}"/>`;
      frontHair = `<path d="M19 22 Q18 8 32 8 Q46 8 45 22 Q39 13 30 14 Q23 15 19 22Z" fill="${H}"/>`;
      break;
    case 'bun':
      frontHair = `<circle cx="32" cy="6" r="6.5" fill="${H}"/><path d="M19 22 Q18 8 32 8 Q46 8 45 22 Q41 14 32 14 Q23 14 19 22Z" fill="${H}"/>`;
      break;
    case 'curly':
      frontHair = [[20,18,5],[24,12,5.5],[31,9,6],[38,11,5.5],[43,17,5],[45,23,3.5],[19,24,3.5]].map(c => `<circle cx="${c[0]}" cy="${c[1]}" r="${c[2]}" fill="${H}"/>`).join('');
      break;
    case 'bob':
      frontHair = `<path d="M18 27 Q15 6 32 6 Q49 6 46 27 L46 32 Q44 34 42 32 L42 20 Q37 14 30 15 Q24 16 22 21 L22 32 Q20 34 18 32Z" fill="${H}"/>`;
      break;
    case 'beard':
      frontHair = `<path d="M19 22 Q18 8 32 8 Q46 8 45 22 Q42 14 32 14 Q23 14 19 22Z" fill="${H}"/>`;
      extra += `<path d="M19.5 24 Q20 38 32 38.5 Q44 38 44.5 24 Q41 31 32 30.5 Q23 31 19.5 24Z" fill="${H}"/><path d="M28.5 28.5 Q32 31 35.5 28.5" stroke="#F2D6C0" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
      break;
    default:
      frontHair = `<path d="M19 22 Q18 8 32 8 Q46 8 45 22 Q42 14 32 14 Q23 14 19 22Z" fill="${H}"/>`;
  }
  if (a.glasses) extra += `<g fill="none" stroke="#2A2A2A" stroke-width="1.3"><circle cx="27.5" cy="23" r="3.4"/><circle cx="36.5" cy="23" r="3.4"/><path d="M30.9 23h2.2"/></g>`;
  const hat = a.hat ? `<ellipse cx="32" cy="12" rx="19" ry="4" fill="#C9A66B"/><path d="M21.5 12 Q21.5 0 32 0 Q42.5 0 42.5 12Z" fill="#DDBB7C"/><rect x="21.5" y="8.5" width="21" height="3" fill="#8A6A3A"/>` : '';
  const body = head ? '' : `
    <g class="leg leg-l"><rect x="23" y="62" width="8" height="25" rx="4" fill="${a.pants}"/><ellipse cx="26" cy="88" rx="6" ry="3.4" fill="#3A2A1F"/></g>
    <g class="leg leg-r"><rect x="33" y="62" width="8" height="25" rx="4" fill="${a.pants}"/><ellipse cx="38" cy="88" rx="6" ry="3.4" fill="#3A2A1F"/></g>
    <g class="arm arm-l"><rect x="11" y="41" width="7" height="21" rx="3.5" fill="${a.shirt}"/><circle cx="14.5" cy="63" r="3.6" fill="${a.skin}"/></g>
    <g class="arm arm-r"><rect x="46" y="41" width="7" height="21" rx="3.5" fill="${a.shirt}"/><circle cx="49.5" cy="63" r="3.6" fill="${a.skin}"/></g>
    <rect x="17" y="37" width="30" height="31" rx="11" fill="${a.shirt}"/>
    <path d="M21 41 L43 65" stroke="rgba(0,0,0,.2)" stroke-width="3" stroke-linecap="round"/>
    <circle cx="41" cy="61" r="3" fill="rgba(0,0,0,.18)"/>`;
  return `<svg class="av" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${a.name}"><g class="av-body">
    ${backHair}${body}
    <rect x="28" y="31" width="8" height="8" fill="${a.skin}"/>
    <circle cx="32" cy="22" r="13" fill="${a.skin}"/>
    ${frontHair}
    <circle cx="27.5" cy="23" r="1.6" fill="#1B1B1B"/><circle cx="36.5" cy="23" r="1.6" fill="#1B1B1B"/>
    <circle cx="24.5" cy="27" r="1.8" fill="#F08A7A" opacity=".35"/><circle cx="39.5" cy="27" r="1.8" fill="#F08A7A" opacity=".35"/>
    <path d="M28.5 28 Q32 31 35.5 28" stroke="#1B1B1B" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    ${extra}${hat}
  </g></svg>`;
};
