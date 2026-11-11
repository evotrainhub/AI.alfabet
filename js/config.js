/* =====================================================================
   CONFIGURARE – completează înainte de publicare
   ===================================================================== */
window.CONFIG = {
  APP_NAME: 'AI Alfabet',

  // Adresa aplicației web Google Apps Script (vezi README, pasul 2).
  // Cât timp e goală, aplicația merge normal, dar nu trimite nimic.
  SHEETS_URL: 'https://script.google.com/macros/s/AKfycbzl8u2rAFA3PMAWXERn_ug43DNO247ycxNcamQLUQNYCV_FJ4D2N19K-aazNL8eG8FF/exec',

  SITE_URL: 'https://evotrainhub.com',
  COURSES_URL: 'https://evotrainhub.com/cursuri-online',   // cursurile online
  CONTACT_URL: 'https://evotrainhub.com/contact',          // cerere de training pentru echipă
  APP_URL: 'https://alfabet.evotrainhub.com/',    // adresa publică, pentru „Trimite unui coleg”
  CONTACT_EMAIL: 'evotrainhub@gmail.com',          // ← verifică adresa

  // Operatorul datelor (apare în pagina Confidențialitate)
  OPERATOR: 'EvoTrainHub – Boghian Ruxandra PFA, CUI 53185139',  // ← completează

  // Cât timp păstrezi adresele de e-mail
  RETENTION: 'până la retragerea acordului sau cel mult 3 ani de la ultima interacțiune',

  // Semnătura de pe certificat
  CERT_SIGNATURE: 'EvoTrainHub',
  CERT_SIGNATURE_ROLE: 'Program de alfabetizare în domeniul AI',

  // Ghidul NU mai citește replicile cu voce tare. (true = le citește cu vocea de sinteză a telefonului.)
  GUIDE_SPEECH: false,

  // ---- Autorul aplicației și butoanele „Urmărește” ----
  // Completează linkurile. Un link lăsat gol ('') ascunde butonul respectiv.
  AUTHOR: {
    name: 'Ruxandra Boghian',
    role: 'Conf. univ. dr. habil. la ASE București · consultant AI, fondator EvoTrainHub',
    photo: '',                       // opțional: 'assets/autor.jpg' (pătrată, min. 200×200)
    facebook: 'https://www.facebook.com/ruxandra.dinulescu/',
    linkedin: 'https://www.linkedin.com/in/ruxandra-b-911576b1/'
  },
  BRAND_SOCIAL: {
    facebook: 'https://www.facebook.com/evotrainhub',
    linkedin: 'https://www.linkedin.com/company/evotrainhub'
  },

  // E-mailul e opțional: invitația apare o singură dată, după primul modul
  FREE_MODULES: 1
};
