/**
 * AI pas cu pas – primirea datelor în Google Sheets
 * Instrucțiuni complete în README.md, pasul 2.
 *
 * Foaia „Chestionar”  – răspunsuri anonime (fără e-mail)
 * Foaia „Emailuri”    – adrese + acordul pentru anunțuri
 */

// Trimite un e-mail de bun venit după înscriere (true / false)
const TRIMITE_BUN_VENIT = true;
const LINK_APLICATIE = 'https://UTILIZATOR.github.io/REPO/';   // ← completează
const NUME_EXPEDITOR = 'EvoTrainHub';

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents || '{}');
    if (d.hp) return raspuns();                       // capcană pentru roboți
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (d.type === 'survey') {
      foaie(ss, 'Chestionar', ['Data', 'Sector', 'Domeniu', 'Utilizare AI', 'Interes', 'Sursa'])
        .appendRow([new Date(), curat(d.sector), curat(d.domain), curat(d.level), curat(d.goal), curat(d.source)]);
    }

    if (d.type === 'email') {
      const email = String(d.email || '').trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 120) return raspuns();
      const sh = foaie(ss, 'Emailuri', ['Data', 'Email', 'Acord anunturi', 'Text acord', 'Sursa']);
      const existente = sh.getRange(2, 2, Math.max(sh.getLastRow() - 1, 1), 1).getValues().flat();
      const nou = existente.indexOf(email) === -1;
      sh.appendRow([new Date(), curat(email), d.marketing ? 'DA' : 'NU', curat(d.consentText), curat(d.source)]);
      if (TRIMITE_BUN_VENIT && nou) bunVenit(email);
    }
  } catch (err) {
    console.error(err);
  }
  return raspuns();
}

function doGet() {
  return ContentService.createTextOutput('Serviciul AI pas cu pas funcționează.');
}

function bunVenit(email) {
  MailApp.sendEmail({
    to: email,
    name: NUME_EXPEDITOR,
    subject: 'Bun venit în „AI pas cu pas”',
    htmlBody:
      '<p>Bună!</p>' +
      '<p>Mulțumim că înveți cu noi. Ai acces la toate cele 7 module ale aplicației „AI pas cu pas”.</p>' +
      '<p><a href="' + LINK_APLICATIE + '">Continuă de unde ai rămas</a></p>' +
      '<p>Progresul se salvează în browserul în care ai început. Folosește același dispozitiv și același browser.</p>' +
      '<p>Echipa EvoTrainHub</p>' +
      '<p style="color:#888;font-size:12px">Ai primit acest mesaj pentru că ți-ai lăsat adresa în aplicație. ' +
      'Dacă vrei să ștergem adresa, răspunde la acest e-mail.</p>'
  });
}

function foaie(ss, nume, antet) {
  let sh = ss.getSheetByName(nume);
  if (!sh) { sh = ss.insertSheet(nume); sh.appendRow(antet); sh.setFrozenRows(1); }
  return sh;
}

// Previne injectarea de formule în foaie
function curat(v) {
  v = String(v == null ? '' : v).slice(0, 300);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function raspuns() {
  return ContentService.createTextOutput('ok');
}
