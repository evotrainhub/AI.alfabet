/* =====================================================================
   CONȚINUTUL CURSULUI
   Tipuri de pași:
   info  – ecran explicativ            {t:'info', title, body, example?}
   mcq   – alegere unică               {t:'mcq', q, context?, options, answer, explain}
   tf    – adevăr sau mit              {t:'tf', q, answer:true|false, explain}
   order – pune în ordine              {t:'order', q, items:[în ordinea corectă], explain}
   match – potrivește perechile        {t:'match', q, pairs:[[stânga, dreapta],...], explain}
   ===================================================================== */
window.MODULES = [
{
  id: 'm1', title: 'Ce este AI și ce nu este', subtitle: 'Bazele, fără termeni complicați', color: '#1F8CC9', icon: 'spark',
  lessons: [
  { id: 'm1l1', title: 'AI e deja în viața ta', steps: [
    {t:'info', title:'Folosești AI de ani de zile', body:'Când telefonul îți recunoaște fața, când YouTube îți recomandă un video, când e-mailul mută un mesaj în Spam sau când Waze găsește un drum ocolitor, în spate lucrează inteligența artificială.<br><br>Ce s-a schimbat în ultimii ani: acum poți <b>vorbi direct</b> cu ea, în limba română.'},
    {t:'mcq', q:'Care dintre acestea NU folosește inteligență artificială?', options:['Filtrul de spam din e-mail','Deblocarea telefonului cu fața','Un calculator de buzunar care face adunări','Traducerea automată a unei pagini web'], answer:2, explain:'Calculatorul urmează reguli fixe, scrise de un programator. Nu învață nimic din exemple.'},
    {t:'info', title:'Program clasic sau AI?', body:'Un <b>program clasic</b> urmează reguli scrise pas cu pas: „dacă se întâmplă X, fă Y”.<br><br>Un <b>sistem AI</b> își învață singur regulile din foarte multe exemple. Nimeni nu a scris regula exactă pentru fiecare mesaj de spam. Sistemul a învățat-o din milioane de mesaje marcate de oameni.'},
    {t:'tf', q:'Inteligența artificială e o tehnologie a viitorului, pe care încă n-o folosim în viața de zi cu zi.', answer:false, explain:'O folosești deja zilnic: în telefon, pe rețelele sociale, în hărți, în e-mail.'},
    {t:'match', q:'Potrivește aplicația cu ce face AI-ul din ea', pairs:[['Waze / Google Maps','Estimează traficul și propune ruta'],['YouTube / Netflix','Îți recomandă ce să vezi'],['Camera telefonului','Recunoaște fețe și reglează poza'],['Google Translate','Traduce texte între limbi']], explain:'Toate învață din date: trasee, preferințe, imagini, texte.'}
  ]},
  { id: 'm1l2', title: 'Ce înseamnă, de fapt, „AI”', steps: [
    {t:'info', title:'O definiție simplă', body:'Inteligența artificială înseamnă sisteme informatice care fac sarcini pentru care, de obicei, e nevoie de inteligență umană: să recunoască imagini, să înțeleagă limbajul, să facă recomandări, să scrie texte.<br><br>Nu e un „creier” și nu are intenții. E matematică avansată aplicată pe cantități uriașe de date.'},
    {t:'tf', q:'Sistemele AI de azi au conștiință și emoții, doar că nu le arată.', answer:false, explain:'Un chatbot poate scrie „mă bucur”, pentru că a văzut milioane de texte în care oamenii scriu așa. Nu simte nimic.'},
    {t:'info', title:'AI specializat și AI general', body:'Tot ce există azi e AI <b>specializat</b>: foarte bun la anumite sarcini, slab la altele.<br><br>Un AI <b>general</b>, care să facă orice sarcină ca un om, rămâne subiect de cercetare și dezbatere. Chiar și chatboturile care par să știe de toate au limite clare. Le vei vedea în modulul 5.'},
    {t:'mcq', q:'Care descriere se potrivește cel mai bine AI-ului de azi?', options:['Un program care gândește exact ca un om','Un sistem care învață tipare din date și le aplică','O bază de date cu toate răspunsurile corecte','Un robot care poate face orice sarcină'], answer:1, explain:'Cheia este „învață tipare din date”. De acolo vin și punctele lui forte, și greșelile.'},
    {t:'tf', q:'Un chatbot poate scrie foarte bine un text și, în același timp, poate greși un calcul simplu.', answer:true, explain:'Este foarte bun la limbaj, dar nu este un calculator. Vei vedea de ce în modulul următor.'}
  ]},
  { id: 'm1l3', title: 'Cum învață o mașină', steps: [
    {t:'info', title:'Învățarea din exemple', body:'Gândește-te cum învață un copil ce e o pisică. Vede multe pisici, i se spune „asta e o pisică”, iar după un timp recunoaște una pe care n-a mai văzut-o.<br><br><b>Învățarea automată</b> (machine learning) funcționează asemănător. Sistemul primește foarte multe exemple și își ajustează singur „setările interne” până greșește tot mai rar.'},
    {t:'order', q:'Pune în ordine etapele prin care se construiește un sistem AI', items:['Se adună foarte multe date (exemple)','Sistemul este antrenat pe aceste date','Este testat pe exemple pe care nu le-a văzut','Este pus la dispoziția utilizatorilor'], explain:'Date, antrenare, testare, folosire. Calitatea fiecărei etape se vede în rezultat.'},
    {t:'info', title:'Datele contează enorm', body:'Un sistem AI e atât de bun cât sunt datele din care a învățat.<br><br>Dacă a avut <b>date puține</b>, greșește des. Dacă datele au fost <b>dezechilibrate</b>, preia dezechilibrele. Dacă datele sunt <b>vechi</b>, nu știe ce s-a întâmplat recent.'},
    {t:'mcq', q:'Un sistem care recunoaște bolile plantelor a fost antrenat doar cu poze făcute vara. Ce se poate întâmpla iarna?', options:['Funcționează perfect, plantele sunt aceleași','Poate greși mai des, pentru că n-a văzut exemple de iarnă','Se actualizează singur cu poze de iarnă','Refuză să funcționeze'], answer:1, explain:'Sistemul recunoaște bine doar situații asemănătoare celor din care a învățat.'},
    {t:'tf', q:'Un chatbot învață în timp real din fiecare conversație cu tine și devine imediat mai deștept.', answer:false, explain:'De obicei modelul e antrenat dinainte și apoi rămâne „înghețat”. Unele companii pot folosi conversațiile mai târziu, pentru antrenări viitoare, dacă setările permit. De aceea contează ce scrii (modulul 6).'}
  ]},
  { id: 'm1l4', title: 'AI-ul care creează', steps: [
    {t:'info', title:'AI generativ', body:'<b>AI-ul generativ</b> creează conținut nou: texte, imagini, sunet, video, cod.<br><br>Instrumente cunoscute: <b>ChatGPT</b> (OpenAI), <b>Claude</b> (Anthropic), <b>Gemini</b> (Google), <b>Copilot</b> (Microsoft). Pentru imagini există generatoare separate sau incluse în aceste aplicații.'},
    {t:'match', q:'Potrivește instrumentul cu ce face', pairs:[['ChatGPT, Claude, Gemini','Asistenți de conversație pentru text'],['Copilot în Word sau Excel','AI integrat în aplicațiile de birou'],['Generator de imagini','Creează o imagine dintr-o descriere'],['Transcriere automată','Transformă vorbirea în text']], explain:'Multe aplicații le combină pe toate, dar ideea de bază rămâne aceeași.'},
    {t:'info', title:'Ce e nou', body:'Înainte, AI-ul mai mult <b>clasifica</b>: spam sau nu, pisică sau câine.<br><br>Acum AI-ul <b>produce</b> conținut. De aceea e util oricui scrie, citește sau organizează informații, adică aproape oricărui job de birou.'},
    {t:'mcq', q:'Care sarcină e potrivită pentru un AI generativ?', options:['Să scrie prima variantă a unui anunț pentru un eveniment','Să decidă singur cine primește un împrumut','Să semneze un contract în numele tău','Să garanteze că o informație e adevărată'], answer:0, explain:'O primă variantă de text este punctul lui forte. Decizia, semnătura și verificarea rămân la tine.'},
    {t:'tf', q:'Textele create de AI generativ sunt copiate cuvânt cu cuvânt dintr-o bază de date.', answer:false, explain:'Textul e generat cuvânt cu cuvânt, pe baza tiparelor învățate. Rareori poate semăna mult cu un text existent, așa că verifici înainte să-l publici.'}
  ]}
  ]
},
{
  id: 'm2', title: 'Cum „gândește” un chatbot', subtitle: 'Ce se întâmplă când apeși Enter', color: '#2E6FB5', icon: 'chat',
  lessons: [
  { id: 'm2l1', title: 'Ghicitorul de cuvinte', steps: [
    {t:'info', title:'Un model mare de limbaj', body:'Chatboturile precum ChatGPT sau Claude sunt construite pe un <b>model mare de limbaj</b> (în engleză <b>LLM</b>, Large Language Model).<br><br>Pe scurt: modelul a citit cantități enorme de text și a învățat să prezică ce cuvânt urmează cel mai probabil. Răspunsul ți-l construiește cuvânt cu cuvânt.'},
    {t:'mcq', q:'Completează ca un model de limbaj: „Afară plouă, așa că îmi iau …”', options:['umbrela','bicicleta','ochelarii de soare','costumul de baie'], answer:0, explain:'„Umbrela” e continuarea cea mai probabilă în acest context. Modelul face același lucru, de miliarde de ori, la o scară mult mai mare.'},
    {t:'info', title:'Mai mult decât completare automată', body:'Pentru că prezice foarte bine continuarea, ținând cont de tot ce ai scris, modelul poate rezuma, traduce, explica sau argumenta.<br><br>Mecanismul rămâne însă același: <b>probabilități</b>, nu înțelegere ca a unui om.'},
    {t:'tf', q:'Când un chatbot îți răspunde, el caută răspunsul gata scris într-o bază de date.', answer:false, explain:'Răspunsul e generat pe loc, cuvânt cu cuvânt. Nu există un depozit de răspunsuri gata făcute.'},
    {t:'mcq', q:'Ce înseamnă LLM?', options:['Large Language Model, adică model mare de limbaj','Legal Language Machine','Limited Learning Mode','Low Level Memory'], answer:0, explain:'Pe acest tip de model sunt construiți toți marii asistenți de conversație.'}
  ]},
  { id: 'm2l2', title: 'Ce știe și ce nu știe', steps: [
    {t:'info', title:'Data-limită a cunoștințelor', body:'Modelul a învățat din texte scrise până la o anumită dată. Ce s-a întâmplat după aceea nu știe, <b>decât</b> dacă aplicația caută pe internet sau îi dai tu informația.'},
    {t:'tf', q:'Orice chatbot știe automat știrile de azi.', answer:false, explain:'Doar dacă are căutarea pe internet activată. Altfel răspunde din ce a învățat până la data-limită.'},
    {t:'info', title:'Cunoaște textele, nu realitatea', body:'Modelul știe cum se vorbește despre un subiect, dar nu verifică faptele în lume.<br><br>Îți poate explica foarte bine ce este TVA-ul, dar poate greși cota sau un termen dacă legea s-a schimbat între timp.'},
    {t:'mcq', q:'Vrei să afli o cotă de impozit valabilă anul acesta. Care e cea mai sigură abordare?', options:['Întrebi chatbotul și iei răspunsul ca atare','Întrebi chatbotul, apoi verifici pe site-ul oficial (de ex. ANAF)','Întrebi de trei ori și alegi răspunsul cel mai frecvent','Nu folosești AI pentru nimic legat de taxe'], answer:1, explain:'AI-ul te ajută să înțelegi subiectul. Cifra exactă o confirmi din sursa oficială.'},
    {t:'tf', q:'Dacă îi dai chatbotului un document, poate lucra cu informațiile din el, chiar dacă sunt noi.', answer:true, explain:'Ce pui în conversație devine material de lucru. De aceea poți rezuma sau analiza documente recente.'}
  ]},
  { id: 'm2l3', title: 'Memoria conversației', steps: [
    {t:'info', title:'Fereastra de context', body:'Chatbotul „ține minte” ce s-a spus în conversația curentă, într-o zonă numită <b>fereastră de context</b>. Seamănă cu un birou pe care stau foile conversației.<br><br>Textul e împărțit în bucăți mici, numite <b>tokeni</b>. Când biroul se umple, foile cele mai vechi pot să nu mai fie luate în calcul.'},
    {t:'mcq', q:'Ce este un „token”?', options:['O bucată mică de text (un cuvânt sau o parte de cuvânt)','O parolă de acces','O monedă virtuală','Un tip de virus'], answer:0, explain:'Modelele lucrează cu tokeni. De aceea limitele de lungime se măsoară adesea în tokeni, nu în pagini.'},
    {t:'mcq', q:'Ai o conversație foarte lungă, iar chatbotul pare să fi uitat cerințele de la început. Ce faci?', options:['Scrii mai apăsat, cu majuscule','Începi o conversație nouă și reiei pe scurt cerințele importante','Te cerți cu el','Renunți la AI'], answer:1, explain:'O conversație nouă, cu un rezumat clar al cerințelor, rezolvă de obicei problema.'},
    {t:'info', title:'Conversație nouă, foaie albă', body:'De regulă, o conversație nouă nu știe nimic din cele anterioare.<br><br>Unele aplicații au o funcție de „memorie” care reține preferințe, dar nu te baza pe ea pentru detalii importante.'},
    {t:'tf', q:'E o idee bună să folosești aceeași conversație, luni la rând, pentru toate subiectele.', answer:false, explain:'O conversație pentru fiecare subiect dă răspunsuri mai clare și mai puțin „amestecate”.'}
  ]},
  { id: 'm2l4', title: 'De ce nu răspunde la fel de două ori', steps: [
    {t:'info', title:'Probabilități, nu reguli fixe', body:'La fiecare cuvânt, modelul are mai multe variante posibile și alege dintre cele probabile, cu o doză de variație.<br><br>De aceea aceeași întrebare poate primi răspunsuri formulate diferit. E normal și chiar util, pentru că poți cere o altă variantă.'},
    {t:'tf', q:'Dacă primești două răspunsuri diferite la aceeași întrebare, chatbotul e defect.', answer:false, explain:'Variația e parte din felul în care funcționează. Important e ca faptele să fie corecte, nu ca formularea să fie identică.'},
    {t:'mcq', q:'Ai primit un text de prezentare care nu-ți place. Ce faci?', options:['Închizi aplicația','Ceri o altă variantă sau explici ce anume nu-ți place','Copiezi textul oricum','Pui aceeași întrebare, identic, de zece ori'], answer:1, explain:'Cu cât spui mai precis ce nu-ți place, cu atât următoarea variantă e mai bună.'},
    {t:'info', title:'Formularea ta schimbă răspunsul', body:'Cu cât întrebarea e mai clară și mai bogată în context, cu atât răspunsurile sunt mai utile și mai stabile.<br><br>Exact despre asta e modulul următor.'},
    {t:'match', q:'Recapitulare: potrivește termenul cu explicația', pairs:[['LLM','Model mare de limbaj'],['Fereastră de context','Memoria conversației curente'],['Data-limită','Momentul până la care a învățat'],['Token','Bucată mică de text']], explain:'Acum știi vocabularul de bază despre chatboturi.'}
  ]}
  ]
},
{
  id: 'm3', title: 'Primul tău prompt', subtitle: 'Cum ceri ca să primești ce vrei', color: '#149C9C', icon: 'pen',
  lessons: [
  { id: 'm3l1', title: 'Ce e un prompt', steps: [
    {t:'info', title:'Mesajul tău către AI', body:'<b>Promptul</b> este mesajul pe care i-l scrii AI-ului.<br><br>Regula de aur: scrie-i ca unui coleg nou, foarte deștept, care nu știe nimic despre tine, despre organizația ta sau despre situația ta.'},
    {t:'mcq', q:'Care prompt va da un rezultat mai bun?', options:['„Scrie un e-mail.”','„Scrie un e-mail politicos către un furnizor, prin care cer amânarea livrării cu o săptămână din cauza inventarului. Ton cordial, maximum 120 de cuvinte.”','„E-mail furnizor amânare.”','„Te rog frumos, ajută-mă!”'], answer:1, explain:'Spune cui, ce, de ce, pe ce ton și cât de lung. AI-ul nu mai are nimic de ghicit.'},
    {t:'info', title:'Nu există cuvinte magice', body:'Nu ai nevoie de formule speciale și nici de limba engleză. Scrii în română, clar, ca și cum ai explica unui om.<br><br>Politețea nu strică, dar claritatea contează mult mai mult.'},
    {t:'tf', q:'Ca să funcționeze bine, promptul trebuie scris în engleză.', answer:false, explain:'Asistenții mari înțeleg foarte bine limba română.'},
    {t:'tf', q:'Un prompt mai detaliat dă, de regulă, un rezultat mai potrivit.', answer:true, explain:'Mai detaliat nu înseamnă mai încâlcit. Contează detaliile relevante: public, scop, format.'}
  ]},
  { id: 'm3l2', title: 'Rețeta în 4 ingrediente', steps: [
    {t:'info', title:'Rol, context, sarcină, format', body:'Un prompt bun are, de obicei:<br><br><b>Rolul</b>: cine să fie AI-ul („ești un consilier HR”).<br><b>Contextul</b>: situația, publicul, scopul.<br><b>Sarcina</b>: ce să facă, spus cu un verb clar.<br><b>Formatul</b>: cum vrei rezultatul (listă, tabel, lungime, ton).'},
    {t:'match', q:'Potrivește ingredientul cu exemplul', pairs:[['Rol','„Ești specialist în comunicare publică.”'],['Context','„Primăria organizează o consultare pentru un parc nou.”'],['Sarcină','„Scrie anunțul pentru site.”'],['Format','„Maximum 150 de cuvinte, cu titlu.”']], explain:'Nu e obligatoriu să le folosești pe toate de fiecare dată, dar ajută mult.'},
    {t:'order', q:'Construiește promptul în ordinea rețetei', items:['Ești profesor de matematică la gimnaziu.','Elevii mei de clasa a VI-a au dificultăți cu fracțiile.','Propune 5 exerciții din viața de zi cu zi.','Pune-le într-un tabel cu exercițiul și rezolvarea.'], explain:'Rol, context, sarcină, format. Un prompt complet în patru propoziții.'},
    {t:'info', title:'Formatul te scapă de muncă', body:'Dacă ceri direct formatul dorit (un tabel, un e-mail gata de trimis, puncte scurte), nu mai pierzi timp să rearanjezi răspunsul.'},
    {t:'mcq', q:'Ce lipsește din promptul „Ești jurist. Scrie un rezumat.”?', options:['Rolul','Contextul: rezumatul a ce și pentru cine','Nimic, e complet','Emoticoanele'], answer:1, explain:'Fără context, AI-ul nu știe ce să rezume, pentru cine și cu ce scop.'}
  ]},
  { id: 'm3l3', title: 'Repară promptul', steps: [
    {t:'info', title:'Greșelile cele mai dese', body:'Cele mai frecvente probleme sunt:<br><br>promptul e <b>prea vag</b> („ajută-mă cu un raport”);<br>nu spune <b>pentru cine</b> e textul;<br>nu spune <b>cât de lung</b> să fie;<br>cere <b>prea multe lucruri</b> deodată.'},
    {t:'mcq', q:'Care e cea mai bună îmbunătățire?', context:{label:'Prompt inițial', text:'Fă-mi o prezentare despre AI.'}, options:['„Fă-mi o prezentare foarte bună despre AI.”','„Fă-mi structura unei prezentări de 10 minute despre AI pentru colegii de la contabilitate, care nu l-au folosit niciodată. 6 slide-uri, fiecare cu titlu și 3 idei.”','„Prezentare AI, urgent!!!”','„Fă-mi o prezentare despre AI, te rog.”'], answer:1, explain:'Adaugă durata, publicul, nivelul lor și formatul exact.'},
    {t:'mcq', q:'Ce informație lipsește cel mai tare?', context:{label:'Prompt inițial', text:'Scrie ceva pentru Facebook despre evenimentul nostru.'}, options:['Detaliile evenimentului: ce, când, unde, pentru cine','Culoarea preferată a AI-ului','Numele aplicației folosite','Nimic, AI-ul le ghicește'], answer:0, explain:'Fără faptele concrete, AI-ul fie inventează, fie scrie ceva general, fără valoare.'},
    {t:'info', title:'Arată un exemplu', body:'Dacă ai un text care îți place ca stil, arată-l: „Scrie în stilul acestui exemplu: …”.<br><br>Un exemplu bun valorează cât zece explicații.'},
    {t:'tf', q:'Dacă îi arăți AI-ului un exemplu de text, îl ajuți să înțeleagă stilul pe care îl vrei.', answer:true, explain:'Exemplele sunt una dintre cele mai eficiente tehnici de prompt.'}
  ]},
  { id: 'm3l4', title: 'Conversația, nu un singur mesaj', steps: [
    {t:'info', title:'Primul răspuns e o ciornă', body:'Poți continua conversația: „mai scurt”, „mai formal”, „pune-l în tabel”, „adaugă un exemplu din administrația publică”.<br><br>Lucrezi cu AI-ul ca într-un dialog, nu ca la un automat.'},
    {t:'mcq', q:'Răspunsul e bun, dar prea lung. Ce scrii?', options:['„Nu e bine.”','„Păstrează ideile, dar redu textul la jumătate și scoate termenii tehnici.”','Ștergi tot și o iei de la capăt','„Mai încearcă.”'], answer:1, explain:'O cerere concretă („la jumătate”, „fără termeni tehnici”) dă o corectură concretă.'},
    {t:'info', title:'Lasă-l să te întrebe', body:'Un truc foarte util: la finalul promptului adaugi<br><br><i>„Înainte să răspunzi, pune-mi întrebările de care ai nevoie ca să faci asta bine.”</i><br><br>Așa afli ce informații lipsesc.'},
    {t:'tf', q:'La o sarcină complexă, e util să ceri AI-ului să-ți pună întrebări înainte să lucreze.', answer:true, explain:'Economisești câteva runde de corecturi.'},
    {t:'order', q:'Ordinea firească a unei sesiuni de lucru cu AI', items:['Scrii promptul, cu context și o sarcină clară','Citești critic primul răspuns','Ceri ajustări concrete','Verifici faptele și finalizezi tu textul'], explain:'Ultimul pas e mereu al tău.'}
  ]}
  ]
},
{
  id: 'm4', title: 'AI la birou', subtitle: 'E-mailuri, documente, tabele, idei', color: '#2F9E5B', icon: 'briefcase',
  lessons: [
  { id: 'm4l1', title: 'E-mailuri și texte', steps: [
    {t:'info', title:'Prima variantă, în câteva secunde', body:'AI-ul e excelent la prima variantă a unui text: e-mailuri, adrese oficiale, anunțuri, răspunsuri la reclamații.<br><br><b>Tu aduci faptele și decizia, el aduce formularea.</b> Poate și să corecteze gramatica sau să schimbe tonul unui text scris de tine.'},
    {t:'mcq', q:'Ai scris un e-mail prea dur unui coleg. Cum te ajută AI-ul?', options:['„Rescrie acest e-mail într-un ton calm și colaborativ, păstrând cererea: [textul tău]”','„Trimite e-mailul în locul meu.”','„Spune-mi dacă are colegul dreptate.”','Nu se poate folosi AI pentru asta'], answer:0, explain:'Schimbarea tonului, cu păstrarea mesajului, este una dintre cele mai utile folosiri.'},
    {t:'info', title:'Tu rămâi autorul', body:'Citește textul întotdeauna înainte să-l trimiți. Verifică nume, date, sume și promisiuni.<br><br>AI-ul poate adăuga din proprie inițiativă un termen sau un angajament pe care nu l-ai făcut.'},
    {t:'tf', q:'Dacă promptul a fost bun, poți trimite e-mailul generat de AI fără să-l citești.', answer:false, explain:'Un prompt bun reduce greșelile, dar nu le elimină.'},
    {t:'mcq', q:'Care cerere e mai utilă pentru răspunsul la o reclamație?', options:['„Răspunde la reclamație.”','„Scrie un răspuns empatic la reclamația de mai jos. Recunoaște întârzierea, explică pe scurt cauza (o defecțiune tehnică) și oferă livrare gratuită data viitoare. Maximum 150 de cuvinte.”','„Scrie ceva frumos.”','„Scuză-te.”'], answer:1, explain:'Conține faptele, soluția oferită, tonul și lungimea.'}
  ]},
  { id: 'm4l2', title: 'Rezumate și documente lungi', steps: [
    {t:'info', title:'Citește mai repede', body:'Poți încărca un document (PDF, Word) sau lipi un text și poți cere: un rezumat, ideile principale, termenele, obligațiile, întrebări de clarificat.<br><br>Economisești mult timp la rapoarte, legislație sau procese-verbale.'},
    {t:'mcq', q:'Care cerere de rezumat e cea mai utilă?', options:['„Rezumă.”','„Rezumă acest regulament în 5 puncte pentru angajații noi și listează separat termenele și obligațiile lor.”','„Spune-mi dacă documentul e bun.”','„Citește și ține minte.”'], answer:1, explain:'Spui pentru cine e rezumatul și ce vrei să iasă în evidență.'},
    {t:'info', title:'Rezumatul poate pierde lucruri', body:'AI-ul poate omite o excepție importantă sau poate formula ceva mai sigur decât textul original.<br><br>Când iei o decizie, verifici punctele esențiale în document. Un truc util: cere-i să indice secțiunea sau pagina din care a luat fiecare idee.'},
    {t:'tf', q:'Rezumatul făcut de AI conține mereu tot ce e important din document.', answer:false, explain:'Poate scăpa detalii, mai ales excepțiile și condițiile.'},
    {t:'tf', q:'E util să-i ceri AI-ului să arate din ce parte a documentului a luat fiecare idee.', answer:true, explain:'Așa verifici rapid, direct în sursă.'}
  ]},
  { id: 'm4l3', title: 'Tabele, cifre și Excel', steps: [
    {t:'info', title:'Ajutorul tău pentru foi de calcul', body:'AI-ul te poate ajuta să:<br><br>scrii formule („ce formulă calculează vechimea din data angajării?”);<br>transformi un text dezordonat în tabel;<br>înțelegi o formulă primită de la altcineva;<br>găsești tendințe în date.'},
    {t:'mcq', q:'Care cerere va produce cea mai utilă formulă?', options:['„Dă-mi o formulă.”','„În Excel, coloana B are data angajării. Vreau în coloana C vechimea în ani întregi, la data de azi.”','„Excel nu merge.”','„Fă-mi calculele.”'], answer:1, explain:'Spui unde sunt datele și ce rezultat vrei. Asta e tot ce îi trebuie.'},
    {t:'info', title:'Cifrele se verifică mereu', body:'Modelele de limbaj pot greși calculele, mai ales pe cele lungi. Unele aplicații rulează cod pentru calcule și sunt mai exacte, dar tot verifici câteva rânduri.<br><br><b>Regula:</b> AI-ul propune metoda, tu verifici rezultatul.'},
    {t:'tf', q:'Totalurile calculate de un chatbot direct în text sunt întotdeauna corecte.', answer:false, explain:'Verifică-le în Excel sau cu un calcul simplu.'},
    {t:'match', q:'Potrivește situația cu cererea potrivită', pairs:[['Date scrise dezordonat','„Transformă lista într-un tabel cu coloanele…”'],['O formulă primită de la un coleg','„Explică-mi pas cu pas ce face formula…”'],['Un tabel mare de vânzări','„Ce tendințe observi în aceste date?”'],['O formulă care dă eroare','„Formula dă #VALUE!. De ce și cum o repar?”']], explain:'Descrie situația concretă, iar AI-ul îți dă ajutorul potrivit.'}
  ]},
  { id: 'm4l4', title: 'Idei, planuri și învățare', steps: [
    {t:'info', title:'Partener de idei și profesor răbdător', body:'AI-ul e un bun partener de brainstorming: „dă-mi 10 idei pentru…”, un plan de proiect, pregătirea unei ședințe sau a unui interviu.<br><br>E și un profesor răbdător: „explică-mi, ca unui începător, ce este un contract de achiziție publică”.'},
    {t:'mcq', q:'Mâine ai o ședință dificilă. Cum te poate ajuta AI-ul?', options:['Participă în locul tău','Te ajută să-ți structurezi argumentele și să anticipezi întrebările grele','Decide ce trebuie să spui','Nu te poate ajuta'], answer:1, explain:'Poți chiar să-i ceri să joace rolul celui mai critic participant.'},
    {t:'info', title:'Transcrieri și note de ședință', body:'Multe aplicații de videoconferință pot transcrie ședințele și pot genera rezumate sau liste de sarcini.<br><br>Înainte să înregistrezi, <b>informează participanții</b> și respectă regulile organizației tale.'},
    {t:'tf', q:'Participanții trebuie informați înainte ca o ședință să fie înregistrată și transcrisă cu AI.', answer:true, explain:'Este o chestiune de respect și, de multe ori, o obligație legală.'},
    {t:'mcq', q:'Care folosire a AI-ului la birou e cea mai riscantă?', options:['Idei de titlu pentru un newsletter','Corectarea gramaticală a unui anunț','Lipirea contractelor clienților, cu nume și CNP-uri, într-un chatbot gratuit','Explicarea unui termen tehnic'], answer:2, explain:'Datele personale nu se pun în instrumente neaprobate. Detaliile sunt în modulul 6.'}
  ]}
  ]
},
{
  id: 'm5', title: 'Când AI-ul greșește', subtitle: 'Halucinații, verificare, prejudecăți', color: '#E08A2E', icon: 'alert',
  lessons: [
  { id: 'm5l1', title: 'Halucinațiile', steps: [
    {t:'info', title:'Invenții spuse cu încredere', body:'O <b>halucinație</b> este o informație inventată, prezentată cu încredere: o lege care nu există, un articol cu numărul greșit, o carte fictivă, o statistică fără sursă.<br><br>Apare pentru că modelul produce text <b>plauzibil</b>, nu text <b>verificat</b>.'},
    {t:'mcq', q:'Ce faci cu această informație?', context:{label:'Răspunsul AI-ului', text:'Conform Legii nr. 482/2019 privind utilizarea AI în administrație, instituțiile publice sunt obligate să numească un responsabil AI.'}, options:['O copiez în raport','Caut legea în sursa oficială înainte să o folosesc','O folosesc, pentru că are număr și an, deci pare exactă','O trimit colegilor ca noutate'], answer:1, explain:'Numărul și anul dau o aparență de exactitate. Exact detaliile precise trebuie verificate. (Legea din exemplu e inventată.)'},
    {t:'info', title:'Unde apar cel mai des', body:'Fii atent mai ales la: <b>cifre și statistici, citate, numere de legi și articole, nume de persoane, titluri de cărți sau studii, linkuri</b>.<br><br>În aceste locuri apar cel mai des invențiile.'},
    {t:'tf', q:'Dacă AI-ul răspunde foarte sigur pe el, informația e cu siguranță corectă.', answer:false, explain:'Tonul sigur nu spune nimic despre corectitudine. Modelul sună la fel de sigur și când greșește.'},
    {t:'mcq', q:'Ce trebuie verificat cu prioritate într-un răspuns AI?', options:['Tonul prietenos','Un procent citat „dintr-un studiu recent”','Folosirea diacriticelor','Lungimea răspunsului'], answer:1, explain:'Cifrele atribuite unor surse vagi sunt printre cele mai frecvente halucinații.'}
  ]},
  { id: 'm5l2', title: 'Cum verifici', steps: [
    {t:'info', title:'Metode simple', body:'Poți verifica așa:<br><br>ceri sursa, apoi <b>o deschizi tu</b>;<br>verifici în surse oficiale (legislatie.just.ro, site-urile ministerelor, ANAF, Eurostat);<br>compari cu o a doua sursă;<br>pentru decizii importante, întrebi un specialist.<br><br>Unele aplicații caută pe internet și dau linkuri. Deschide-le, nu te mulțumi doar să le vezi.'},
    {t:'order', q:'Pașii de verificare a unei informații importante', items:['Identifici afirmațiile precise (cifre, legi, nume)','Ceri AI-ului sursa fiecăreia','Deschizi sursa și verifici că spune același lucru','Pentru decizii importante, confirmi cu un specialist'], explain:'Verificarea durează câteva minute. O greșeală publică poate costa mult mai mult.'},
    {t:'info', title:'Regula proporției', body:'Cu cât consecințele sunt mai mari, cu atât verifici mai mult.<br><br>O idee de titlu nu trebuie verificată. Un termen legal, o doză de medicament sau o sumă dintr-un contract trebuie verificate obligatoriu.'},
    {t:'match', q:'Cât verifici? Potrivește situația', pairs:[['Idei de titlu pentru un afiș','Nu e nevoie de verificare'],['Termenul de depunere al unei declarații','Verifici pe site-ul oficial'],['Rezumatul unui document intern','Verifici esențialul în document'],['Interpretarea unei clauze din contract','Confirmi cu un jurist']], explain:'Proporția între risc și efort face verificarea sustenabilă.'},
    {t:'tf', q:'Un link oferit de AI dovedește că informația e corectă, chiar dacă nu-l deschizi.', answer:false, explain:'Linkurile pot fi greșite, inventate sau pot duce la o pagină care spune altceva.'}
  ]},
  { id: 'm5l3', title: 'Prejudecăți (bias)', steps: [
    {t:'info', title:'AI-ul preia stereotipuri', body:'AI-ul învață din texte scrise de oameni, cu tot cu stereotipurile lor.<br><br>Poate presupune, de exemplu, că un inginer e bărbat și o asistentă medicală e femeie. Poate evalua diferit două CV-uri identice care au doar nume diferite.'},
    {t:'tf', q:'Pentru că e o mașină, AI-ul este automat neutru și obiectiv.', answer:false, explain:'Este atât de neutru cât sunt datele din care a învățat, adică nu complet.'},
    {t:'info', title:'De ce contează la muncă', body:'Când AI-ul e folosit la recrutare, la evaluare sau la acordarea unor beneficii, prejudecățile pot duce la decizii nedrepte față de oameni reali.<br><br>De aceea legislația europeană tratează aceste utilizări ca fiind cu <b>risc ridicat</b> (modulul 7).'},
    {t:'mcq', q:'Ceri 5 exemple de „manageri de succes” și primești doar bărbați. Ce faci?', options:['Accepți, așa arată datele','Observi dezechilibrul și ceri explicit exemple diverse','Nu mai folosești AI','Ignori, e o problemă tehnică fără importanță'], answer:1, explain:'Să observi dezechilibrul e primul pas. Apoi ceri explicit ce ai nevoie.'},
    {t:'tf', q:'Este o practică bună ca o decizie despre o persoană să nu se bazeze doar pe evaluarea făcută de AI.', answer:true, explain:'Supravegherea umană e esențială când sunt în joc drepturile oamenilor.'}
  ]},
  { id: 'm5l4', title: 'Omul rămâne responsabil', steps: [
    {t:'info', title:'Asistent, nu decident', body:'AI-ul e un asistent, nu un decident. Când semnezi un document, trimiți un e-mail sau iei o decizie, <b>responsabilitatea e a ta</b>, nu a instrumentului.<br><br>„Așa a zis ChatGPT” nu este o justificare acceptată.'},
    {t:'mcq', q:'Un coleg a trimis un răspuns oficial cu o informație greșită generată de AI. Cine răspunde?', options:['Compania care a creat AI-ul','Colegul și instituția care au trimis răspunsul','Nimeni, a greșit o mașină','Cetățeanul, pentru că nu a verificat'], answer:1, explain:'Cine folosește instrumentul răspunde pentru ce trimite.'},
    {t:'info', title:'Transparența', body:'În multe situații e corect să spui că ai folosit AI, mai ales la texte publice sau în educație.<br><br>Verifică și regulile interne ale organizației tale. Unele cer explicit acest lucru.'},
    {t:'tf', q:'Dacă AI-ul a greșit, responsabilitatea se mută asupra lui.', answer:false, explain:'Responsabilitatea rămâne a omului și a organizației.'},
    {t:'mcq', q:'Care e atitudinea potrivită față de AI la muncă?', options:['Încredere totală','Refuz total','Folosire activă, cu verificare și asumarea responsabilității','Folosire în secret'], answer:2, explain:'Aceasta e, pe scurt, esența unei folosiri responsabile.'}
  ]}
  ]
},
{
  id: 'm6', title: 'Datele tale și siguranța', subtitle: 'Ce scrii, ce nu scrii, cum te protejezi', color: '#7A5BC7', icon: 'shield',
  lessons: [
  { id: 'm6l1', title: 'Ce nu scrii într-un chatbot', steps: [
    {t:'info', title:'Ce scrii poate fi păstrat', body:'Ce scrii poate fi stocat pe serverele furnizorului. În funcție de setări, poate fi analizat pentru verificări sau folosit la antrenare.<br><br><b>Regula simplă:</b> nu scrie într-un chatbot nimic ce n-ai trimite pe e-mail unei firme externe.'},
    {t:'mcq', q:'Ce informație poți pune fără griji într-un chatbot public?', options:['CNP-ul și adresa unui cetățean','Parola contului de e-mail','Un text public de pe site-ul instituției, pentru rezumat','Diagnosticul medical al unui coleg'], answer:2, explain:'Informația deja publică nu expune pe nimeni.'},
    {t:'info', title:'Lista neagră', body:'Nu pui în instrumente neaprobate:<br><br>date personale (nume cu CNP, adrese, telefoane);<br>date despre sănătate;<br>date financiare și bancare;<br>parole și coduri;<br>documente confidențiale sau clasificate;<br>secrete comerciale;<br>date despre copii.'},
    {t:'tf', q:'Dacă ștergi conversația, datele dispar sigur și complet de pe serverele furnizorului.', answer:false, explain:'Depinde de politica fiecărui furnizor. Unii păstrează datele o perioadă. Nu te baza pe ștergere.'},
    {t:'tf', q:'Dacă vrei doar un rezumat, e în regulă să lipești contractul unui client, cu toate datele lui, într-un chatbot gratuit.', answer:false, explain:'Scopul nu schimbă riscul. Anonimizează textul sau folosește instrumentul aprobat de organizație.'}
  ]},
  { id: 'm6l2', title: 'Anonimizarea', steps: [
    {t:'info', title:'Scoate ce identifică persoana', body:'Poți folosi AI-ul și pentru cazuri reale, dacă scoți datele care identifică persoana.<br><br>Înlocuiești numele cu „Cetățeanul A”, scoți CNP-ul, adresa și numărul de dosar și schimbi detaliile care ar trăda despre cine e vorba.'},
    {t:'mcq', q:'Care variantă e anonimizată corect?', options:['„Ion Popescu, CNP 1850101…, din str. Florilor 3, a depus o plângere.”','„Un locuitor din cartier a depus o plângere privind zgomotul.”','„Ion P., str. Florilor 3, a depus o plângere.”','„Domnul Popescu de la nr. 3 a depus o plângere.”'], answer:1, explain:'Păstrează problema, fără să se poată afla despre cine e vorba.'},
    {t:'info', title:'Atenție la combinații', body:'Chiar și fără nume, o combinație de detalii poate identifica o persoană, de exemplu „singurul medic veterinar din comuna X, 45 de ani”.<br><br>Păstrează doar ce e necesar pentru sarcină.'},
    {t:'tf', q:'Contează doar numele. Restul detaliilor nu pot identifica o persoană.', answer:false, explain:'Vârsta, funcția și localitatea, puse împreună, pot fi la fel de identificabile ca un nume.'},
    {t:'mcq', q:'Vrei ajutor pentru răspunsul la o reclamație. Ce păstrezi în prompt?', options:['Tot textul, cu nume și telefon','Conținutul reclamației, fără nume și date de contact','Doar numele reclamantului','Nimic, nu poți folosi AI aici'], answer:1, explain:'AI-ul are nevoie de problemă, nu de identitatea persoanei.'}
  ]},
  { id: 'm6l3', title: 'Conturi, setări și reguli', steps: [
    {t:'info', title:'Gratuit, personal sau de firmă', body:'Versiunile gratuite, pentru uz personal, au adesea alte setări decât versiunile pentru organizații.<br><br>Multe aplicații îți permit să oprești folosirea conversațiilor pentru antrenare. Caută în <b>Setări</b>, la secțiunea despre date sau confidențialitate. Versiunile pentru organizații oferă de obicei garanții contractuale suplimentare.'},
    {t:'tf', q:'La muncă e bine să folosești instrumentele AI aprobate de organizație, nu orice aplicație găsită online.', answer:true, explain:'Instrumentele aprobate au fost verificate din punctul de vedere al protecției datelor.'},
    {t:'info', title:'Regulile interne', body:'Tot mai multe organizații au reguli despre ce instrumente AI sunt permise și pentru ce. Dacă a ta nu are, întreabă.<br><br>Folosirea pe ascuns a unor aplicații neaprobate (numită „shadow AI”) e unul dintre cele mai mari riscuri pentru date.'},
    {t:'mcq', q:'Organizația ta nu are nicio regulă despre AI. Ce faci?', options:['Folosești orice aplicație, oricum','Întrebi conducerea sau responsabilul IT/GDPR și, între timp, nu introduci date sensibile','Nu mai folosești niciodată nimic','Instalezi toate aplicațiile AI pe calculatorul de serviciu'], answer:1, explain:'O întrebare simplă poate declanșa o regulă utilă pentru toată echipa.'},
    {t:'tf', q:'Extensiile de browser cu AI pot avea acces la conținutul paginilor pe care le deschizi.', answer:true, explain:'Verifică ce permisiuni cer înainte să le instalezi, mai ales pe calculatorul de serviciu.'}
  ]},
  { id: 'm6l4', title: 'Deepfake și fraude', steps: [
    {t:'info', title:'Voci, fețe și mesaje false', body:'AI-ul poate imita voci, fețe și stiluri de scriere. Escrocii îl folosesc pentru:<br><br>apeluri cu vocea clonată a unei rude sau a unui șef;<br>e-mailuri de phishing fără greșeli;<br>videoclipuri false în care persoane publice „recomandă” investiții.'},
    {t:'mcq', q:'Primești un apel cu vocea șefului tău, care îți cere urgent un transfer bancar. Ce faci?', options:['Faci transferul, e vocea lui','Închizi și îl suni tu înapoi pe numărul cunoscut sau verifici pe alt canal','Ceri datele contului prin SMS','Aștepți să te mai sune'], answer:1, explain:'Verificarea pe un canal separat oprește majoritatea fraudelor.'},
    {t:'info', title:'Semne de alarmă', body:'Fii atent la: <b>urgență mare</b>, <b>cereri de bani sau de date</b>, <b>cereri de păstrare a secretului</b> („nu spune nimănui”), <b>un canal neobișnuit</b>.<br><br>În familie ajută un cuvânt-cod pe care îl știți doar voi.'},
    {t:'tf', q:'Un videoclip în care o persoană cunoscută recomandă o investiție dovedește că recomandarea e reală.', answer:false, explain:'Videoclipurile false cu vedete sunt printre cele mai răspândite fraude online.'},
    {t:'mcq', q:'Care dintre acestea NU este un semn de alarmă?', options:['Ți se cere să acționezi în 10 minute','Ți se cere să nu spui nimănui','Un coleg îți trimite, pe canalul obișnuit, documentul pe care îl așteptai','Ți se cer datele cardului'], answer:2, explain:'Situațiile obișnuite, pe canalele obișnuite, nu sunt suspecte. Urgența, secretul și cererile de date sunt.'}
  ]}
  ]
},
{
  id: 'm7', title: 'AI Act pe înțelesul tuturor', subtitle: 'Regulile europene, pe scurt', color: '#1D4E6B', icon: 'scale',
  lessons: [
  { id: 'm7l1', title: 'Ce este AI Act', steps: [
    {t:'info', title:'Regulamentul european privind AI', body:'<b>AI Act</b> este Regulamentul (UE) 2024/1689 privind inteligența artificială, primul set cuprinzător de reguli pentru AI din lume.<br><br>Fiind regulament european, se aplică <b>direct</b> în România, fără o lege națională de transpunere. A intrat în vigoare în august 2024 și se aplică în etape.<br><br>În iulie 2026 a fost modificat prin Regulamentul (UE) 2026/1744, numit și „Digital Omnibus”, care a amânat unele termene și a adăugat interdicții noi.'},
    {t:'tf', q:'AI Act se aplică în România doar după ce Parlamentul adoptă o lege separată.', answer:false, explain:'Regulamentele UE se aplică direct în toate statele membre. Legile naționale pot stabili doar aspecte de aplicare, precum autoritățile competente.'},
    {t:'info', title:'Ideea centrală: riscul', body:'Regulamentul nu tratează la fel toate aplicațiile AI. Cu cât riscul pentru siguranța și drepturile oamenilor e mai mare, cu atât regulile sunt mai stricte.<br><br>Un filtru de spam și un sistem care selectează candidați la angajare nu au aceleași obligații.'},
    {t:'mcq', q:'Pe ce se bazează regulile din AI Act?', options:['Pe mărimea companiei care face AI-ul','Pe nivelul de risc al utilizării','Pe țara în care a fost creat sistemul','Pe prețul aplicației'], answer:1, explain:'Abordarea bazată pe risc este coloana vertebrală a regulamentului.'},
    {t:'tf', q:'AI Act se aplică și firmelor din afara UE, dacă sistemele lor sunt folosite în UE.', answer:true, explain:'Contează unde este folosit sistemul, nu doar unde a fost creat.'},
    {t:'info', title:'Calendarul, pe scurt', body:'<b>Februarie 2025:</b> interdicțiile și obligația privind alfabetizarea AI.<br><b>August 2025:</b> regulile pentru modelele de uz general (cele din spatele chatboturilor).<br><b>August 2026:</b> obligațiile de transparență (chatboturi, conținut generat).<br><b>Decembrie 2026:</b> interdicții noi, adăugate în 2026.<br><b>Decembrie 2027:</b> regulile pentru sistemele cu risc ridicat, precum cele din recrutare, educație sau credit.<br><b>August 2028:</b> regulile pentru AI-ul inclus în produse reglementate (de ex. dispozitive medicale).'},
    {t:'tf', q:'Regulile pentru sistemele AI cu risc ridicat folosite la recrutare se aplică din decembrie 2027.', answer:true, explain:'Termenul inițial era august 2026. A fost mutat la 2 decembrie 2027 prin modificarea din 2026.'}
  ]},
  { id: 'm7l2', title: 'Cele patru niveluri de risc', steps: [
    {t:'info', title:'De la interzis la liber', body:'<b>Risc inacceptabil: interzis.</b> Exemple: scorul social al cetățenilor, manipularea care exploatează vulnerabilitățile, recunoașterea emoțiilor la locul de muncă sau în școli (cu excepții restrânse). Din decembrie 2026 sunt interzise și aplicațiile care creează imagini intime false ale unor persoane reale, fără acordul lor, sau materiale de abuz sexual asupra copiilor.<br><br><b>Risc ridicat: permis, cu obligații stricte.</b> Exemple: recrutarea și evaluarea angajaților, evaluările în educație, acordarea de credite, accesul la servicii publice esențiale.<br><br><b>Risc limitat: obligații de transparență</b> (chatboturi, conținut generat).<br><br><b>Risc minim: fără obligații noi</b> (filtre de spam, jocuri).'},
    {t:'match', q:'Potrivește sistemul cu nivelul de risc', pairs:[['Scor social al cetățenilor','Interzis'],['AI care triază CV-uri','Risc ridicat'],['Chatbot pe site-ul unei primării','Obligație de transparență'],['Filtru anti-spam','Risc minim']], explain:'Aceasta este harta de bază a regulamentului.'},
    {t:'mcq', q:'Un sistem AI care decide cine primește o bursă școlară intră, cel mai probabil, la:', options:['Risc minim','Risc ridicat','Practici interzise','Nu e reglementat'], answer:1, explain:'Accesul la educație și evaluarea în educație sunt domenii cu risc ridicat.'},
    {t:'info', title:'Ce înseamnă „risc ridicat”', body:'Sistemele cu risc ridicat trebuie să aibă, printre altele: date de calitate, documentație tehnică, evaluarea riscurilor, supraveghere umană și înregistrarea funcționării.<br><br>Și organizațiile care le folosesc au obligații, de exemplu să asigure supravegherea de către persoane pregătite.'},
    {t:'tf', q:'Recunoașterea emoțiilor angajaților la locul de muncă este, ca regulă, interzisă de AI Act.', answer:true, explain:'Excepțiile sunt restrânse la motive medicale sau de siguranță.'},
    {t:'mcq', q:'Scorul de credit calculat de o bancă cu AI și „scorul social” al cetățenilor sunt:', options:['Același lucru, ambele interzise','Diferite: scorul social e interzis, scorul de credit e risc ridicat','Ambele permise fără reguli','Ambele risc minim'], answer:1, explain:'Confuzia e frecventă. Scorul de credit e permis, dar cu obligații stricte.'}
  ]},
  { id: 'm7l3', title: 'Ce înseamnă pentru tine', steps: [
    {t:'info', title:'Ca cetățean și ca angajat', body:'<b>Ca cetățean:</b> din august 2026 ai dreptul să știi când vorbești cu un chatbot, iar conținutul generat sau manipulat artificial (deepfake) trebuie semnalat ca atare.<br><br><b>Ca angajat:</b> organizațiile care folosesc AI trebuie să ia măsuri care să sprijine dezvoltarea cunoștințelor despre AI ale personalului, ținând cont de experiența oamenilor și de contextul în care folosesc AI. Aceasta este <b>alfabetizarea în domeniul AI</b> (articolul 4), obligatorie din februarie 2025.'},
    {t:'tf', q:'Când vorbești cu un chatbot pe site-ul unei instituții, trebuie să ți se spună că este un sistem AI.', answer:true, explain:'Este una dintre obligațiile de transparență, cu excepția cazurilor în care e evident din context.'},
    {t:'mcq', q:'Ce înseamnă „alfabetizare în domeniul AI”?', options:['Să știi să programezi un AI','Cunoștințe suficiente ca să folosești AI informat, înțelegând oportunitățile și riscurile','Să citești integral regulamentul','Să ai diplomă în informatică'], answer:1, explain:'Nu e nevoie să fii tehnician. E nevoie să știi ce face AI-ul, unde greșește și cum îl folosești responsabil.'},
    {t:'info', title:'Ai făcut deja un pas important', body:'Ce ai parcurs aici acoperă bazele alfabetizării AI: ce este AI-ul, cum funcționează, cum îl folosești, unde greșește și cum îți protejezi datele.<br><br>Pentru echipe și organizații, pasul următor este un training adaptat domeniului lor.'},
    {t:'tf', q:'AI Act interzice folosirea chatboturilor la locul de muncă.', answer:false, explain:'Nu le interzice. Cere folosirea lor informată, transparentă și, în anumite cazuri, cu reguli suplimentare.'}
  ]},
  { id: 'm7l4', title: 'Recapitulare finală', steps: [
    {t:'info', title:'Ultimul pas', body:'Urmează câteva întrebări din tot drumul parcurs. După ele îți poți descărca <b>certificatul</b>.'},
    {t:'mcq', q:'Cum își construiește un chatbot răspunsul?', options:['Caută răspunsul într-o enciclopedie','Prezice, cuvânt cu cuvânt, continuarea cea mai probabilă','Întreabă un operator uman','Copiază primul rezultat de pe Google'], answer:1, explain:'Din acest mecanism vin atât fluența, cât și halucinațiile.'},
    {t:'tf', q:'Un prompt bun include contextul, sarcina și formatul dorit.', answer:true, explain:'Rol, context, sarcină, format.'},
    {t:'mcq', q:'AI-ul îți indică un număr de lege. Ce faci?', options:['Îl folosești direct','Îl verifici în sursa oficială','Îl întrebi dacă e sigur','Îl ignori complet'], answer:1, explain:'Detaliile precise se verifică întotdeauna.'},
    {t:'mcq', q:'Ce faci înainte să ceri ajutor pentru un caz real al unui client?', options:['Lipești tot documentul','Anonimizezi datele și folosești un instrument aprobat','Trimiți doar CNP-ul','Nimic special'], answer:1, explain:'Protejezi persoana și organizația.'},
    {t:'match', q:'Potrivește termenul cu definiția', pairs:[['Halucinație','Informație inventată prezentată ca adevărată'],['Deepfake','Voce, imagine sau video fals creat cu AI'],['Bias','Prejudecată preluată din date'],['Prompt','Mesajul pe care i-l scrii AI-ului']], explain:'Felicitări, ai parcurs tot drumul!'}
  ]}
  ]
}
];
