/**
 * AI pas cu pas – primirea datelor în Google Sheets
 * Instrucțiuni complete în README.md, pasul 2.
 *
 * Foaia „Chestionar”  – răspunsuri anonime (fără e-mail)
 * Foaia „Emailuri”    – adrese + acordul pentru anunțuri
 * Foaia „Evenimente”  – statistici anonime (vizite, lecții, module, certificate, clicuri)
 * Foaia „Statistici”  – panoul tău; se (re)creează cu funcția creeazaStatistici()
 */

// Trimite un e-mail de bun venit după înscriere (true / false)
const TRIMITE_BUN_VENIT = true;
const LINK_APLICATIE = 'https://evotrainhub.github.io/AI.alfabet/';
const NUME_EXPEDITOR = 'Ruxandra Boghian, EvoTrainHub';
const SEMNATURA_NUME = 'Ruxandra Boghian';
const SEMNATURA_ROL = 'Fondator EvoTrainHub';
const SITE = 'https://evotrainhub.com';
const LINK_CURSURI = 'https://evotrainhub.com/cursuri-online';

function doPost(e) {
  let tip = '';
  try {
    const d = JSON.parse(e.postData.contents || '{}');
    tip = d.type;
    if (d.hp) return tip === 'email' ? json(true) : raspuns();   // capcană pentru roboți
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (d.type === 'survey') {
      foaie(ss, 'Chestionar', ['Data', 'Sector', 'Domeniu', 'Utilizare AI', 'Interes', 'Sursa'])
        .appendRow([new Date(), curat(d.sector), curat(d.domain), curat(d.level), curat(d.goal), curat(d.source)]);
    }

    if (d.type === 'event') {
      const permise = ['prima_vizita', 'modul_terminat', 'certificat', 'click_cursuri', 'click_training',
                       'click_start', 'ghid_ales', 'lectie_inceputa', 'lectie_terminata', 'chestionar_omis'];
      if (permise.indexOf(d.name) !== -1) {
        foaie(ss, 'Evenimente', ['Data', 'Eveniment', 'Detaliu']).appendRow([new Date(), d.name, curat(d.value)]);
      }
    }

    if (d.type === 'email') {
      const email = String(d.email || '').trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 120) return json(false);
      const sh = foaie(ss, 'Emailuri', ['Data', 'Email', 'Acord anunturi', 'Text acord', 'Sursa']);
      const existente = sh.getRange(2, 2, Math.max(sh.getLastRow() - 1, 1), 1).getValues().flat();
      const nou = existente.indexOf(email) === -1;
      sh.appendRow([new Date(), curat(email), d.marketing ? 'DA' : 'NU', curat(d.consentText), curat(d.source)]);
      // adresa e salvată; dacă e-mailul de bun venit nu pleacă, înscrierea rămâne valabilă
      if (TRIMITE_BUN_VENIT && nou) { try { bunVenit(email); } catch (err) { console.error(err); } }
      return json(true);
    }
  } catch (err) {
    console.error(err);
    if (tip === 'email') return json(false);
  }
  return raspuns();
}

function doGet() {
  return ContentService.createTextOutput('Serviciul AI pas cu pas funcționează.');
}

function bunVenit(email) {
  const html =
    '<div style="font-family:Georgia,\'Times New Roman\',serif;max-width:520px;margin:0 auto;color:#1a1a1a">' +
      '<div style="padding:28px 8px 20px;border-bottom:3px solid #0E6B4F">' +
        '<a href="' + SITE + '" style="font-size:22px;font-weight:bold;color:#0E6B4F;text-decoration:none">EvoTrainHub</a><br>' +
        '<span style="font-size:12px;letter-spacing:1.5px;color:#5A7568;text-transform:uppercase">Formare și consultanță în inteligență artificială</span>' +
      '</div>' +
      '<div style="padding:28px 8px;font-size:15px;line-height:1.65">' +
        '<p>Bună ziua,</p>' +
        '<p>Vă mulțumesc pentru interesul acordat programului <b>„AI pas cu pas”</b>. Mai jos găsiți linkul aplicației, ca să reveniți oricând la cele 7 module, gândite pentru a vă ajuta să folosiți inteligența artificială corect și în siguranță, la locul de muncă.</p>' +
        '<div style="text-align:center;margin:28px 0">' +
          '<a href="' + LINK_APLICATIE + '" style="background:#0E6B4F;color:#ffffff;text-decoration:none;padding:13px 28px;border-radius:8px;font-size:15px;font-weight:bold;display:inline-block">Continuați de unde ați rămas</a>' +
        '</div>' +
        '<p style="font-size:13px;color:#5A7568">Progresul se salvează în browserul cu care ați început, așa că vă recomand să folosiți același dispozitiv și același browser data viitoare.</p>' +
        '<p style="margin-top:28px">Dacă doriți să exersați pe situații din munca dumneavoastră, cu feedback de la formator, găsiți <a href="' + LINK_CURSURI + '" style="color:#0E6B4F">cursurile noastre online aici</a>. Pentru formări adaptate organizației dumneavoastră, vă stăm cu drag la dispoziție.</p>' +
        '<p style="margin-top:22px">Cu considerație,</p>' +
        '<p style="margin-top:26px;margin-bottom:0;font-size:15px;font-weight:bold;color:#0E6B4F">' + SEMNATURA_NUME + '</p>' +
        '<p style="margin:0;font-size:13px;color:#5A7568">' + SEMNATURA_ROL + '</p>' +
        '<p style="margin:2px 0 0;font-size:13px"><a href="' + SITE + '" style="color:#0E6B4F;text-decoration:none">evotrainhub.com</a></p>' +
      '</div>' +
      '<div style="border-top:1px solid #ddd;padding:16px 8px 0;font-size:11px;color:#999;line-height:1.5">' +
        'Ați primit acest mesaj deoarece v-ați lăsat adresa în aplicația „AI pas cu pas”. ' +
        'Dacă doriți să ștergem adresa dumneavoastră, răspundeți la acest e-mail.' +
      '</div>' +
    '</div>';
  MailApp.sendEmail({
    to: email,
    name: NUME_EXPEDITOR,
    subject: 'Bun venit în programul „AI pas cu pas” — EvoTrainHub',
    htmlBody: html
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

// Răspuns citit de aplicație: {"ok":true} doar dacă adresa a fost salvată
function json(ok) {
  return ContentService.createTextOutput(JSON.stringify({ ok: ok })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Rulează din editor ca să creezi sau să refaci foaia „Statistici”.
 * Șterge și reface doar foaia „Statistici”; datele din celelalte foi rămân neatinse.
 */
function creeazaStatistici() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  foaie(ss, 'Evenimente', ['Data', 'Eveniment', 'Detaliu']);
  foaie(ss, 'Chestionar', ['Data', 'Sector', 'Domeniu', 'Utilizare AI', 'Interes', 'Sursa']);
  foaie(ss, 'Emailuri', ['Data', 'Email', 'Acord anunturi', 'Text acord', 'Sursa']);
  let sh = ss.getSheetByName('Statistici');
  if (sh) sh.clear(); else sh = ss.insertSheet('Statistici', 0);
  const E = 'Evenimente!', V = 'COUNTIF(' + E + 'B:B,"prima_vizita")';
  const n7 = (ev) => '=COUNTIFS(' + E + 'B:B,"' + ev + '",' + E + 'A:A,">="&(TODAY()-7))';
  const ev = (name, det) => '=COUNTIFS(' + E + 'B:B,"' + name + '",' + E + 'C:C,"' + det + '")';
  const ev7 = (name, det) => '=COUNTIFS(' + E + 'B:B,"' + name + '",' + E + 'C:C,"' + det + '",' + E + 'A:A,">="&(TODAY()-7))';
  const rows = [
    ['AI pas cu pas – statistici', '', ''],
    ['', 'Total', 'Ultimele 7 zile'],
    ['Au deschis aplicația (prima vizită)', '=' + V, n7('prima_vizita')],
    ['Au completat chestionarul', '=MAX(0,COUNTA(Chestionar!A:A)-1)', '=COUNTIFS(Chestionar!A:A,">="&(TODAY()-7))'],
    ['Au terminat modulul 1', ev('modul_terminat', 'm1'), ev7('modul_terminat', 'm1')],
    ['Și-au lăsat e-mailul (adrese unice)', '=IFERROR(COUNTUNIQUE(Emailuri!B2:B),0)', ''],
    ['Au acceptat anunțurile (adrese unice)', '=COUNTUNIQUEIFS(Emailuri!B2:B,Emailuri!C2:C,"DA")', ''],
    ['Au terminat modulul 2', ev('modul_terminat', 'm2'), ''],
    ['Au terminat modulul 3', ev('modul_terminat', 'm3'), ''],
    ['Au terminat modulul 4', ev('modul_terminat', 'm4'), ''],
    ['Au terminat modulul 5', ev('modul_terminat', 'm5'), ''],
    ['Au terminat modulul 6', ev('modul_terminat', 'm6'), ''],
    ['Au terminat modulul 7', ev('modul_terminat', 'm7'), ''],
    ['Au ajuns la certificat', '=COUNTIF(' + E + 'B:B,"certificat")', n7('certificat')],
    ['', '', ''],
    ['Din cei care au deschis aplicația:', '', ''],
    ['… au terminat modulul 1', '=IFERROR(B5/B3,0)', ''],
    ['… au ajuns la certificat', '=IFERROR(B14/B3,0)', ''],
    ['', '', ''],
    ['Interes pentru cursuri (clicuri)', '', ''],
    ['Clicuri către cursurile online', '=COUNTIF(' + E + 'B:B,"click_cursuri")', n7('click_cursuri')],
    ['   … din pagina principală', ev('click_cursuri', 'acasa'), ''],
    ['   … după modulul 3', ev('click_cursuri', 'modul3'), ''],
    ['   … de la certificat', ev('click_cursuri', 'certificat'), ''],
    ['   … din meniu, subsol, blog, „Despre”', '=B21-B22-B23-B24', ''],
    ['Clicuri pe „Solicită un training”', '=COUNTIF(' + E + 'B:B,"click_training")', n7('click_training')],
    ['', '', ''],
    ['Pâlnia de început (de unde pleacă oamenii)', 'Total', 'Ultimele 7 zile'],
    ['1. Au deschis aplicația', '=B3', '=C3'],
    ['2. Au apăsat „Începe gratuit”', '=COUNTIF(' + E + 'B:B,"click_start")', n7('click_start')],
    ['3. Au ales ghidul', '=COUNTIF(' + E + 'B:B,"ghid_ales")', n7('ghid_ales')],
    ['4. Au început lecția 1', ev('lectie_inceputa', 'm1l1'), ev7('lectie_inceputa', 'm1l1')],
    ['5. Au terminat lecția 1', ev('lectie_terminata', 'm1l1'), ev7('lectie_terminata', 'm1l1')],
    ['6. Au terminat lecția 2', ev('lectie_terminata', 'm1l2'), ev7('lectie_terminata', 'm1l2')],
    ['7. Au terminat lecția 3', ev('lectie_terminata', 'm1l3'), ev7('lectie_terminata', 'm1l3')],
    ['8. Au terminat lecția 4 (tot modulul 1)', ev('lectie_terminata', 'm1l4'), ev7('lectie_terminata', 'm1l4')],
    ['Au sărit peste chestionar (după lecția 1)', '=COUNTIF(' + E + 'B:B,"chestionar_omis")', n7('chestionar_omis')]
  ];
  sh.getRange(1, 1, rows.length, 3).setValues(rows);
  sh.getRange('A1').setFontSize(14).setFontWeight('bold');
  sh.getRange('A2:C2').setFontWeight('bold');
  sh.getRange('A16').setFontWeight('bold');
  sh.getRange('A20').setFontWeight('bold');
  sh.getRange('A28:C28').setFontWeight('bold');
  sh.getRange('B17:B18').setNumberFormat('0%');
  sh.setColumnWidth(1, 320); sh.setColumnWidths(2, 2, 130);
  sh.setFrozenRows(2);
}

function testMail() {
  bunVenit('evotrainhub@gmail.com');
}
