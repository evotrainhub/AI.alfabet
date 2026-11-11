# AI Alfabet · EvoTrainHub

Curs interactiv gratuit despre inteligența artificială, pentru începători: 7 module, 28 de lecții, hartă de progres, exerciții, certificat și blog.

## 1. Publicare pe GitHub Pages

1. Creează un repository nou (de ex. `ai-pas-cu-pas`) și urcă **tot conținutul acestui folder**, păstrând subfolderele `assets`, `css`, `js`.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` → Save.
3. După 1–2 minute: `https://UTILIZATOR.github.io/ai-pas-cu-pas/`.
4. (Opțional) subdomeniu propriu, de ex. `ai.evotrainhub.com`: Settings → Pages → Custom domain, plus o înregistrare CNAME la furnizorul de domeniu.

## 2. Primirea e-mailurilor și a răspunsurilor (Google Sheets)

1. Creează un Google Sheet gol, de ex. „AI Alfabet – date”.
2. În Sheet: **Extensii → Apps Script**. Șterge codul existent și lipește tot conținutul din `apps-script.gs`.
3. Completează `LINK_APLICATIE` cu adresa de la pasul 1. Salvează.
4. **Implementare → Implementare nouă** → tip: *Aplicație web*.
   - Execută ca: **Eu**
   - Cine are acces: **Oricine**
5. Autorizează (Google va avertiza că aplicația nu e verificată: *Avansat → Accesează*). Copiază adresa care se termină în `/exec`.
6. Pune adresa în `js/config.js`, la `SHEETS_URL`. Urcă din nou `config.js` pe GitHub.

Foile `Chestionar` și `Emailuri` se creează singure la primele date.

**Test:** completează chestionarul și modulul 1 într-o fereastră privată. În câteva secunde apar rânduri în Sheet și primești e-mailul de bun venit.

> Dacă modifici ulterior codul Apps Script: Implementare → Gestionează implementările → editează → *Versiune nouă*. Adresa `/exec` rămâne aceeași.

## 3. Ce completezi în `js/config.js`

- `OPERATOR` – denumirea exactă a PFA-ului și CIF-ul (apar în pagina Confidențialitate)
- `CONTACT_EMAIL`
- `RETENTION` – cât păstrezi adresele
- `CERT_SIGNATURE`, `CERT_SIGNATURE_ROLE` – textul de pe certificat

## 4. Trimiterea anunțurilor

Trimite anunțuri **doar** adreselor cu `DA` în coloana „Acord anunturi”. Pentru trimitere, exportă-le într-un serviciu de newsletter (Brevo, MailerLite), care adaugă automat linkul de dezabonare.

## 5. Articole noi pe blog

Deschide `js/blog-posts.js`, copiază un bloc `{ ... }`, schimbă `slug` (fără diacritice și spații), `title`, `date`, `tag`, `excerpt`, `body`. În text poți folosi `## Subtitlu`, `**îngroșat**`, `- listă`, `[text](link)`.

## 6. Modificarea lecțiilor

Tot conținutul e în `js/content.js`. Tipurile de exerciții sunt descrise la începutul fișierului.

## Structură

```
index.html          pagina aplicației
css/style.css       aspectul
js/config.js        setări (de completat)
js/content.js       modulele și lecțiile
js/blog-posts.js    articolele de blog
js/app.js           logica aplicației
assets/             logo, iconițe, imagine de distribuire
manifest.webmanifest, sw.js   instalarea ca aplicație și lucrul fără internet
apps-script.gs      codul pentru Google Sheets (nu se urcă pe GitHub, se lipește în Apps Script)
```

## 7. Noutăți în versiunea 2

**Ce urci pe GitHub:** tot conținutul folderului, inclusiv fișierele noi din rădăcină: `manifest.webmanifest` și `sw.js`. Ele trebuie să stea lângă `index.html`, nu într-un subfolder.

**Instalare pe telefon (PWA).** Butonul „Instalează aplicația” apare pe prima pagină, pe hartă și în „Despre”. Pe Android (Chrome, Edge, Samsung Internet) deschide fereastra de instalare; pe iPhone arată cei trei pași din Safari; în browserul din Facebook/Instagram/LinkedIn explică întâi cum se deschide în browserul telefonului.

**La fiecare actualizare:** deschide `sw.js` și schimbă `aialfabet-v2` în `v3`, `v4` ... Astfel telefoanele care au aplicația instalată primesc sigur varianta nouă.

**Autor și rețele (`js/config.js`).** Completează `AUTHOR.facebook`, `AUTHOR.linkedin` și `BRAND_SOCIAL`. Un link gol ascunde butonul. Pentru fotografie: pune o imagine pătrată în `assets/` și scrie calea la `AUTHOR.photo`.

**Iconița și imaginea de distribuire.** Iconițele sunt `assets/app-*.png`. Imaginea care apare când linkul e distribuit pe Facebook/LinkedIn este `assets/og.png` (1200×630). Dacă muți aplicația pe alt domeniu, schimbă cele două adrese `og:url` și `og:image` din `index.html` și `APP_URL` din `config.js`.

**Statistici.** Apar două evenimente noi: `click_instalare` și `click_social`. Ca să fie înregistrate, lipește din nou `apps-script.gs` în Apps Script și publică o *Versiune nouă* (vezi nota de la pasul 2). Apoi rulează o dată `creeazaStatistici`.

**Sunete și vibrații.** Sunt pornite implicit; butonul cu difuzor (pe hartă și în lecție) le oprește. Vibrațiile merg doar pe Android.

**Replicile ghizilor.** Sunt în `js/app.js`, în blocul `VOICE`. Le poți rescrie liber.

## 8. Adresa aplicației

Aplicația e publicată la **https://alfabet.evotrainhub.com/** (înregistrare CNAME `alfabet` → `evotrainhub.github.io` în zona DNS Hostinger; domeniul personalizat e setat în GitHub → Settings → Pages). Adresa veche, `evotrainhub.github.io/AI.alfabet/`, redirecționează automat spre cea nouă.

Nu șterge fișierul `CNAME` din rădăcina repo-ului și nu modifica înregistrarea din Hostinger: fără ele, adresa nouă nu mai funcționează.
