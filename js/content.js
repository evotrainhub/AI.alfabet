/* =====================================================================
   CONȚINUTUL CURSULUI
   Tipuri de pași:
   info  – ecran explicativ            {t:'info', title, body, example?}
   mcq   – alegere unică               {t:'mcq', q, context?, options, answer, explain}
   tf    – adevăr sau mit              {t:'tf', q, answer:true|false, explain}
   order – pune în ordine              {t:'order', q, items:[în ordinea corectă], explain}
   match – potrivește perechile        {t:'match', q, pairs:[[stânga, dreapta],...], explain}
   spot  – atinge fragmentele corecte  {t:'spot', q, segments:['text', {p:'fragment', hit:true|false}, ...], explain}
   sort  – sortează în categorii       {t:'sort', q, buckets:['A','B'], items:[{text, b:0|1}], explain}
   flip  – cartonașe care se întorc    {t:'flip', q, cards:[{front, tag, back}]}
   recap – „Pe scurt”, finalul lecției {t:'recap', points:[...]}
   La info: guide (replica ghidului) și visual:
     {type:'reveal', layout:'timeline'|'grid'|'rings'|'line', items:[{icon,label,text}]}
     {type:'compare', left:{icon,title,lines}, right:{...}}
     {type:'steps', cycle?, items:[{icon,label,text}]}
     {type:'slider', label, note?, stops:[{label,bar,caption}]}
     {type:'toggle', q?, note?, options:[{label, bar?, barLabel?, caption?, input?, output?}]}
   La mcq: feedback:[...] oferă un mesaj pentru fiecare variantă.
   ===================================================================== */
window.MODULES = [
{
  id: 'm1', title: 'Ce este AI și ce nu este', zone: 'Luminișul începuturilor', subtitle: 'Bazele, fără termeni complicați', color: '#22A55B', icon: 'spark',
  lessons: [
  { id: 'm1l1', title: 'AI e deja în viața ta', steps: [
    {t:'info', title:'O zi obișnuită, plină de AI', guide:'Înainte de ChatGPT, hai să vedem cât AI folosești deja. Atinge fiecare moment al zilei.',
      body:'Inteligența artificială nu a apărut odată cu ChatGPT. Lucrează de ani buni în telefonul tău, în e-mail și în aplicațiile de zi cu zi, de cele mai multe ori fără să o observi.',
      visual:{type:'reveal', layout:'timeline', items:[
        {icon:'📱', label:'7:00 · Deblochezi telefonul', text:'Telefonul îți recunoaște fața. Un model AI a învățat din milioane de fețe cum să deosebească trăsăturile unei persoane de ale alteia.'},
        {icon:'🗺️', label:'8:10 · Pleci spre birou', text:'Aplicația de hărți estimează traficul și îți propune altă rută. AI-ul învață din datele de deplasare ale milioanelor de utilizatori.'},
        {icon:'📧', label:'9:30 · Deschizi e-mailul', text:'Mesajele de tip spam au ajuns deja în dosarul separat. Filtrul a învățat din mesajele marcate ca spam de alți oameni.'},
        {icon:'💳', label:'13:00 · Plătești cu cardul', text:'Banca verifică în câteva milisecunde dacă plata seamănă cu obiceiurile tale. Dacă pare neobișnuită, o poate bloca.'},
        {icon:'🎬', label:'21:00 · Te uiți la un film', text:'Platforma îți recomandă ce să vezi, pe baza a ce ai urmărit tu și a ce au urmărit oameni cu gusturi asemănătoare.'}
      ]}},
    {t:'info', title:'Program clasic sau AI? Diferența-cheie', guide:'Asta e ideea cea mai importantă din toată lecția.',
      body:'Un <b>program clasic</b> funcționează ca o rețetă: un programator scrie regulile pas cu pas („dacă mesajul conține cuvântul X, mută-l în spam”). Problema: cei care trimit spam schimbă cuvintele, iar regulile rămân în urmă.<br><br>Un <b>sistem AI</b> nu primește regulile. Primește <b>exemple</b> (milioane de mesaje marcate „spam” sau „normal”) și își formează singur tiparele. De aceea se descurcă și cu mesaje pe care nu le-a mai văzut.',
      visual:{type:'compare',
        left:{icon:'📋', title:'Program clasic', lines:['Omul scrie regulile','Regulile sunt fixe','Face exact ce i s-a spus','Nu se descurcă cu situații noi']},
        right:{icon:'🧠', title:'Sistem AI', lines:['Omul dă exemple','Sistemul își formează tiparele','Se descurcă și cu cazuri noi','Poate greși în moduri neașteptate']}}},
    {t:'info', title:'De ce tocmai acum?', guide:'Apasă „Pasul următor” ca să vezi cele trei ingrediente.',
      body:'Ideea de inteligență artificială există din anii 1950. Explozia din ultimii ani vine din întâlnirea a trei ingrediente. În noiembrie 2022, lansarea ChatGPT a făcut ca oricine să poată vorbi direct cu un astfel de sistem.',
      visual:{type:'steps', items:[
        {icon:'🗂️', label:'Date', text:'Internetul a adunat cantități uriașe de texte, imagini și înregistrări din care sistemele pot învăța.'},
        {icon:'⚡', label:'Putere de calcul', text:'Plăcile grafice, create inițial pentru jocuri, s-au dovedit perfecte pentru calculele de care are nevoie AI-ul.'},
        {icon:'🧩', label:'Metode noi', text:'În 2017, cercetători de la Google au publicat arhitectura „Transformer”, pe care se bazează aproape toți asistenții de azi.'}
      ]}},
    {t:'spot', q:'Citește ziua Mariei și atinge momentele în care folosește AI', segments:[
      'Maria ', {p:'își deblochează telefonul cu fața', hit:true}, ', apoi ', {p:'își face o cafea la espressor', hit:false}, '. În mașină, ', {p:'aplicația de hărți o anunță că e trafic', hit:true}, '. La prânz ', {p:'numără restul primit la piață', hit:false}, ', iar seara ', {p:'YouTube îi propune un video nou', hit:true}, '.'
    ], explain:'Deblocarea cu fața folosește un model care a învățat să deosebească trăsăturile tale de ale altor oameni. Aplicația de hărți estimează traficul din datele de deplasare ale multor utilizatori, iar YouTube îți propune videoclipuri pe baza a ce ai urmărit tu și alți oameni cu gusturi asemănătoare. Espressorul urmează un program fix, iar socotitul restului e aritmetică simplă, fără nicio învățare.'},
    {t:'sort', q:'Program clasic sau AI? Pune fiecare exemplu la locul lui', buckets:['📋 Program clasic','🧠 AI'], items:[
      {text:'Calculatorul de buzunar', b:0},{text:'Filtrul de spam din e-mail', b:1},{text:'O formulă de adunare din Excel', b:0},
      {text:'Recunoașterea comenzilor vocale', b:1},{text:'Semaforul cu timp fix', b:0},{text:'Recomandările de produse ale unui magazin online', b:1}
    ], explain:'Calculatorul, formula de adunare din Excel și semaforul cu timp fix execută exact regulile scrise de un om, la fel de fiecare dată. Filtrul de spam, recunoașterea vocii și recomandările și-au format tiparele din foarte multe exemple, așa că se descurcă și cu situații pe care nu le-au mai întâlnit. Întrebarea-cheie e mereu aceeași: a învățat din exemple sau urmează o rețetă?'},
    {t:'mcq', explain:'Un sistem devine AI prin felul în care a fost construit: nu a primit reguli scrise pas cu pas, ci foarte multe exemple, din care și-a format singur tiparele. De aceea se descurcă și cu cazuri noi, dar poate și greși în moduri pe care nu le-ai anticipa.', q:'Ce îl face pe un sistem să fie „AI”?', options:['Faptul că e foarte rapid','Faptul că își formează singur tiparele din exemple','Faptul că rulează pe internet','Faptul că e scump'], answer:1,
      feedback:['Și un calculator clasic e foarte rapid. Viteza nu îl face AI.','Exact. Învățarea din exemple e diferența-cheie.','Multe programe clasice rulează pe internet.','Prețul nu are legătură cu felul în care funcționează.']},
    {t:'tf', q:'Inteligența artificială e o tehnologie a viitorului, pe care încă nu o folosim în viața de zi cu zi.', answer:false, explain:'AI-ul e deja în telefonul tău (recunoașterea feței, tastatura care îți sugerează cuvinte), în aplicațiile de hărți, în filtrul de e-mail și în sistemele băncilor care verifică plățile. Ce e nou din 2022 este că poți vorbi direct, în limbaj obișnuit, cu asistenți precum ChatGPT, Claude sau Gemini.'},
    {t:'recap', points:['AI-ul e deja prezent în multe aplicații pe care le folosești zilnic.','Un program clasic urmează reguli scrise de om. Un sistem AI își formează tiparele din exemple.','Explozia recentă vine din date multe, putere de calcul și metode noi.']}
  ]},
  { id: 'm1l2', title: 'Ce înseamnă, de fapt, „AI”', steps: [
    {t:'info', title:'O familie de tehnologii', guide:'Atinge fiecare cerc, de la exterior spre interior.',
      body:'Vei auzi mulți termeni: AI, machine learning, deep learning, AI generativ. Nu sunt lucruri diferite, ci cercuri unul în altul, de la cel mai larg la cel mai specific.',
      visual:{type:'reveal', layout:'rings', items:[
        {label:'Inteligență artificială', text:'Tot domeniul: sisteme care fac sarcini pentru care, de obicei, e nevoie de inteligență umană (recunoaștere, limbaj, recomandări, decizii).'},
        {label:'Învățare automată', text:'Machine learning. Metoda prin care sistemul învață din exemple, în loc să primească reguli scrise. Aproape tot AI-ul modern e construit așa.'},
        {label:'Învățare profundă', text:'Deep learning. Învățare automată cu „rețele neuronale” foarte mari, cu multe straturi. A adus marile progrese la imagini, voce și limbaj.'},
        {label:'AI generativ', text:'Sistemele care creează conținut nou: text, imagini, sunet, cod. ChatGPT, Claude, Gemini sau Copilot fac parte de aici.'}
      ]}},
    {t:'info', title:'Nu gândește ca noi', guide:'Aici apar cele mai multe neînțelegeri.',
      body:'AI-ul nu are gânduri, intenții sau emoții. Nu există dovezi că sistemele de azi ar avea conștiință.<br><br>Un chatbot poate scrie „mă bucur să te ajut” pentru că a văzut milioane de texte în care oamenii scriu așa, nu pentru că simte ceva. Seamănă cu o <b>oglindă foarte sofisticată a limbajului uman</b>: reflectă tiparele din texte, cu tot ce au ele bun și rău.',
      visual:{type:'compare',
        left:{icon:'🙂', title:'Ce pare', lines:['Înțelege ce spun','Are păreri','E sigur pe el','Știe tot']},
        right:{icon:'🔍', title:'Ce se întâmplă de fapt', lines:['Recunoaște tipare în text','Reproduce formulări frecvente','Tonul sigur e doar stil','Știe doar ce a învățat']}}},
    {t:'info', title:'Specializat sau general?', guide:'Mută-te de-a lungul liniei și vezi unde se află fiecare.',
      body:'Tot AI-ul care există azi e <b>specializat</b>: foarte bun la unele sarcini, slab la altele. Un chatbot pare să știe de toate, dar are limite clare. Un AI <b>general</b>, capabil de orice sarcină intelectuală ca un om, rămâne subiect de cercetare și de dezbatere.',
      visual:{type:'reveal', layout:'line', items:[
        {icon:'🧮', label:'Calculator', text:'Nu e AI. Urmează reguli fixe, fără învățare.'},
        {icon:'♟️', label:'AI de șah', text:'Specializat îngust: bate orice campion, dar nu știe să scrie un e-mail.'},
        {icon:'💬', label:'Chatbot', text:'Specializat larg: scrie, rezumă, traduce, explică. Dar greșește la calcule, poate inventa informații și nu acționează singur în lume.'},
        {icon:'❓', label:'AI general', text:'Ipotetic. Nu există azi. Specialiștii nu sunt de acord nici când, nici dacă va apărea.'}
      ]}},
    {t:'flip', q:'Mit sau realitate? Întoarce fiecare cartonaș', cards:[
      {front:'„AI-ul gândește ca un om.”', tag:'Mit', back:'Recunoaște tipare statistice. Nu are gânduri sau intenții.'},
      {front:'„AI-ul poate greși cu mare încredere.”', tag:'Realitate', back:'Tonul sigur nu garantează că răspunsul e corect.'},
      {front:'„AI-ul va înlocui mâine toate joburile.”', tag:'Mit', back:'Schimbă mai ales sarcini din cadrul joburilor, nu joburi întregi peste noapte.'},
      {front:'„AI-ul e atât de bun cât sunt datele lui.”', tag:'Realitate', back:'Datele puține, vechi sau dezechilibrate duc la rezultate slabe.'}
    ]},
    {t:'match', q:'Potrivește termenul cu explicația', pairs:[['Inteligență artificială','Tot domeniul'],['Învățare automată','Învățare din exemple'],['Învățare profundă','Rețele neuronale mari'],['AI generativ','Creează conținut nou']], explain:'Gândește-te la păpușile rusești. Inteligența artificială e domeniul întreg. Învățarea automată e metoda prin care aproape tot AI-ul modern învață din exemple. Învățarea profundă folosește rețele neuronale foarte mari, iar AI-ul generativ (ChatGPT, Claude, Gemini) e construit pe ea și creează conținut nou.'},
    {t:'mcq', explain:'AI-ul de azi recunoaște tipare statistice în cantități uriașe de date și le folosește ca să răspundă. De aici vine fluența lui la limbaj și la recunoaștere, dar și explicația pentru răspunsurile fluente și totuși greșite: produce ce e plauzibil, nu ce a verificat.', q:'Care descriere se potrivește cel mai bine AI-ului de azi?', options:['Un program care gândește exact ca un om','Un sistem care învață tipare din date și le aplică','O bază de date cu toate răspunsurile corecte','Un robot care poate face orice sarcină'], answer:1,
      feedback:['Pare așa, dar nu gândește ca un om.','Exact. De aici vin și punctele lui forte, și greșelile.','Nu caută răspunsuri gata scrise. Le generează.','Asta ar fi AI-ul general, care nu există azi.']},
    {t:'tf', q:'Un chatbot poate scrie foarte bine un text și, în același timp, poate greși un calcul simplu.', answer:true, explain:'Un chatbot lucrează cu limbajul: produce cuvinte plauzibile, nu face calcule ca un calculator. La o înmulțire lungă poate scrie un rezultat care „arată corect” fără să fie. Unele aplicații rulează în spate un mic program de calcul, ceea ce reduce greșelile, dar cifrele importante le verifici oricum.'},
    {t:'recap', points:['AI, învățare automată, învățare profundă și AI generativ sunt cercuri unul în altul.','AI-ul nu gândește și nu simte. Reflectă tiparele din datele din care a învățat.','Tot AI-ul de azi e specializat, inclusiv chatboturile.']}
  ]},
  { id: 'm1l3', title: 'Cum învață o mașină', steps: [
    {t:'info', title:'Învățarea din exemple', guide:'Mută glisorul și urmărește ce se întâmplă cu precizia.',
      body:'Gândește-te cum învață un copil ce e o pisică. Vede multe pisici, i se spune „asta e pisică”, iar după un timp recunoaște una pe care n-a mai văzut-o.<br><br>Un sistem AI face ceva asemănător, doar că are nevoie de <b>mult mai multe exemple</b> decât un copil.',
      visual:{type:'slider', label:'Câte poze etichetate primește sistemul?', note:'Valori ilustrative', stops:[
        {label:'10', bar:52, caption:'Aproape la întâmplare. Nu a văzut destule pisici ca să le deosebească de câini.'},
        {label:'100', bar:71, caption:'Începe să prindă tiparele: urechi ascuțite, mustăți, forma botului.'},
        {label:'10.000', bar:90, caption:'Recunoaște majoritatea pisicilor, dar încă greșește la poze neclare.'},
        {label:'1.000.000', bar:97, caption:'Foarte precis, dar tot nu perfect. Nicio cantitate de date nu elimină complet greșelile.'}
      ]}},
    {t:'info', title:'Cum „învață”, concret', guide:'Apasă „Pasul următor” ca să parcurgi ciclul.',
      body:'În interior, sistemul are un număr uriaș de „butoane de reglaj” numite <b>parametri</b>. Modelele mari au miliarde. Antrenarea înseamnă repetarea unui ciclu simplu de foarte multe ori:',
      visual:{type:'steps', cycle:true, items:[
        {icon:'🎯', label:'Ghicește', text:'Sistemul primește un exemplu și dă un răspuns: „pisică, 60%”.'},
        {icon:'✅', label:'Compară', text:'Răspunsul este comparat cu eticheta corectă pusă de oameni: „câine”.'},
        {icon:'🔧', label:'Ajustează', text:'Parametrii sunt modificați puțin, ca data viitoare greșeala să fie mai mică.'},
        {icon:'🔁', label:'Repetă', text:'Ciclul se repetă de milioane de ori, pe milioane de exemple, până când greșelile devin rare.'}
      ]}},
    {t:'info', title:'Datele decid rezultatul', guide:'Comută între cele două variante.',
      body:'Un sistem AI e atât de bun cât sunt datele din care a învățat. Dacă datele au fost <b>puține</b>, greșește des. Dacă au fost <b>dezechilibrate</b>, preia dezechilibrele. Dacă sunt <b>vechi</b>, nu știe ce s-a schimbat.',
      visual:{type:'toggle', q:'Sistem care recunoaște boli ale plantelor. Cum se descurcă iarna?', options:[
        {label:'Antrenat doar cu poze de vară', bar:48, barLabel:'Precizie iarna', caption:'Nu a văzut niciodată frunze cu brumă sau lumină de iarnă, așa că greșește des.'},
        {label:'Antrenat cu poze din tot anul', bar:91, barLabel:'Precizie iarna', caption:'A văzut condiții variate și se descurcă mult mai bine.'}
      ], note:'Valori ilustrative'}},
    {t:'info', title:'După antrenare, modelul „îngheață”', guide:'Asta explică multe lucruri despre chatboturi.',
      body:'După antrenare, modelul e testat și pus la dispoziția oamenilor. De obicei <b>nu mai învață</b> din fiecare conversație, în timp real. De aceea nu știe ce s-a întâmplat după data până la care a fost antrenat.<br><br>Unele companii pot folosi conversațiile mai târziu, pentru antrenări viitoare, dacă setările contului permit. De aceea contează ce scrii (modulul 6).'},
    {t:'order', q:'Pune în ordine etapele prin care se construiește un sistem AI', items:['Se adună foarte multe date (exemple)','Oamenii etichetează exemplele','Sistemul este antrenat pe aceste date','Este testat pe exemple pe care nu le-a văzut','Este pus la dispoziția utilizatorilor'], explain:'Totul pornește de la date: cu cât sunt mai multe și mai variate, cu atât mai bine. Oamenii le etichetează („pisică”, „câine”), apoi sistemul e antrenat pe ele. Testarea se face pe exemple noi, nevăzute la antrenare, ca să se vadă dacă a învățat cu adevărat sau doar a memorat. Abia apoi e pus la dispoziția oamenilor.'},
    {t:'sort', q:'Date bune sau date problematice pentru un sistem care recunoaște indicatoare rutiere?', buckets:['👍 Date bune','⚠️ Date problematice'], items:[
      {text:'Poze din toate anotimpurile', b:0},{text:'Doar poze făcute ziua', b:1},{text:'Poze din mai multe țări', b:0},
      {text:'Poze etichetate greșit', b:1},{text:'Doar 20 de poze', b:1},{text:'Poze și cu indicatoare murdare sau parțial acoperite', b:0}
    ], explain:'Un sistem care va funcționa pe străzi reale trebuie să fi văzut situații reale: noapte, ploaie, zăpadă, indicatoare murdare sau parțial acoperite, modele din mai multe țări. Pozele etichetate greșit îl învață lucruri greșite, iar 20 de poze sunt mult prea puține. Dacă a văzut doar poze de zi, poate greși tocmai noaptea, când riscul e mai mare.'},
    {t:'mcq', explain:'Fiecare model are o dată-limită a cunoștințelor. Ce s-a întâmplat după nu știe, decât dacă aplicația caută pe internet sau îi dai tu textul. Problema e că adesea răspunde oricum, pe baza informațiilor vechi, fără să te avertizeze. La legi și termene recente, verifici în sursa oficială.', q:'Un chatbot a fost antrenat până la o anumită dată. Îl întrebi despre o lege adoptată luna trecută. Ce se poate întâmpla?', options:['Știe sigur, pentru că învață zilnic','Poate să nu știe sau să răspundă cu informații vechi, dacă nu caută pe internet','Refuză mereu să răspundă','Sună la Parlament'], answer:1,
      feedback:['De obicei modelul nu învață zilnic. E „înghețat” după antrenare.','Corect. Fără căutare pe internet, răspunde din ce a învățat înainte.','Uneori recunoaște că nu știe, dar adesea răspunde oricum.','Nu are cum.']},
    {t:'tf', q:'Un chatbot învață în timp real din fiecare conversație cu tine și devine imediat mai deștept.', answer:false, explain:'Antrenarea unui model mare durează săptămâni sau luni și costă enorm, așa că nu se repetă la fiecare conversație. În timpul discuției, chatbotul „ține minte” doar ce e în conversația curentă. Unele aplicații rețin preferințe între conversații, iar unele companii pot folosi conversațiile pentru antrenări viitoare, dacă setările permit, dar asta nu face modelul mai deștept pe loc.'},
    {t:'recap', points:['Sistemul învață din foarte multe exemple etichetate: ghicește, compară, ajustează, repetă.','Calitatea datelor decide calitatea rezultatului: multe, corecte, variate, actuale.','După antrenare modelul e „înghețat” și nu știe ce s-a întâmplat după aceea.']}
  ]},
  { id: 'm1l4', title: 'AI-ul care creează', steps: [
    {t:'info', title:'De la „sortează” la „creează”', guide:'Comută între cele două moduri și urmărește rezultatul.',
      body:'Multă vreme, AI-ul mai mult <b>clasifica</b>: spam sau nu, pisică sau câine, plată normală sau suspectă. <b>AI-ul generativ</b> face altceva: <b>produce</b> conținut nou, care nu exista înainte.',
      visual:{type:'toggle', options:[
        {label:'AI care clasifică', input:'E-mail: „Ați câștigat 10.000 €! Apăsați aici.”', output:'Rezultat: SPAM (încredere 98%)'},
        {label:'AI generativ', input:'Cerere: „Scrie o invitație scurtă la ședința de luni.”', output:'Bună ziua! Vă invităm luni, la ora 10:00, în sala de consiliu, la ședința de planificare. Vă rugăm să confirmați participarea până vineri.'}
      ]}},
    {t:'info', title:'Uneltele pe care le vei întâlni', guide:'Atinge fiecare unealtă.',
      body:'Există multe instrumente, iar cele mai multe au o variantă gratuită, cu limite. Principiile din acest curs se aplică la toate.',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'💬', label:'ChatGPT', text:'Asistentul de conversație creat de OpenAI. A popularizat AI-ul generativ în 2022.'},
        {icon:'💬', label:'Claude', text:'Asistentul de conversație creat de Anthropic, folosit mult pentru texte și documente lungi.'},
        {icon:'💬', label:'Gemini', text:'Asistentul Google, integrat și în Gmail, Docs și celelalte servicii Google.'},
        {icon:'🧩', label:'Copilot', text:'Asistentul Microsoft, integrat în Word, Excel, Outlook și Teams.'},
        {icon:'🎨', label:'Generatoare de imagini', text:'Creează imagini dintr-o descriere în cuvinte. Multe sunt incluse direct în asistenții de mai sus.'},
        {icon:'🎙️', label:'Transcriere', text:'Transformă vorbirea în text, de exemplu din înregistrarea unei ședințe.'}
      ]}},
    {t:'info', title:'Nu doar text', guide:'Asta se numește „multimodal”.',
      body:'Asistenții de azi pot lucra cu mai multe tipuri de conținut. Poți să le arăți o poză cu un tabel și să le ceri să-l transforme în Excel, să încarci un PDF și să ceri un rezumat sau să le vorbești în loc să scrii.',
      visual:{type:'compare',
        left:{icon:'✅', title:'La ce e bun', lines:['Prima variantă a unui text','Rezumate și explicații','Idei și structuri','Reformulări și traduceri']},
        right:{icon:'⚠️', title:'Unde trebuie atenție', lines:['Cifre, date, legi (verifici)','Decizii despre oameni','Informații foarte recente','Date personale (nu le introduci)']}}},
    {t:'match', q:'Potrivește instrumentul cu ce face', pairs:[['ChatGPT, Claude, Gemini','Conversație și texte'],['Copilot în Word sau Excel','AI în aplicațiile de birou'],['Generator de imagini','Imagine dintr-o descriere'],['Transcriere automată','Vorbire transformată în text']], explain:'Asistenții de conversație lucrează cu text, la cerere. Copilot și ceilalți asistenți integrați lucrează direct în documentele tale. Generatoarele de imagini transformă o descriere în imagine, iar transcrierea transformă vorbirea în text. Multe aplicații le combină, dar principiul e același: primesc ceva de la tine și produc conținut nou.'},
    {t:'sort', q:'Sarcină bună pentru AI generativ sau decizie care rămâne la om?', buckets:['🤖 Potrivită pentru AI','🧑 Rămâne la om'], items:[
      {text:'Prima variantă a unui anunț', b:0},{text:'Idei de titluri pentru un newsletter', b:0},{text:'Aprobarea unui buget', b:1},
      {text:'Rezumatul unui raport lung', b:0},{text:'Semnarea unui contract', b:1},{text:'Decizia de a angaja un candidat', b:1}
    ], explain:'AI-ul e bun la munca pregătitoare: o primă variantă, idei, un rezumat. Deciziile cu consecințe pentru bani, contracte sau oameni rămân la om, pentru că omul răspunde pentru ele. Pentru decizii despre oameni, cum ar fi angajarea, AI Act impune reguli stricte, pe care le vei vedea în modulul 7.'},
    {t:'mcq', explain:'Un text generat poate conține greșeli greu de observat: un nume scris greșit, o dată inventată, o cifră rotunjită, o promisiune pe care organizația nu a făcut-o. Într-un comunicat de presă, greșeala devine publică și e greu de corectat. AI-ul scrie prima variantă, omul verifică faptele și își asumă textul.', q:'Colegul tău spune: „Am cerut AI-ului textul comunicatului și l-am trimis direct presei.” Ce ar fi trebuit să facă?', options:['Nimic, e în regulă','Să citească și să verifice textul (nume, date, cifre) înainte să-l trimită','Să ceară AI-ului să-l trimită singur','Să nu folosească deloc AI'], answer:1,
      feedback:['Riscant. AI-ul poate inventa detalii sau poate schimba sensul.','Exact. AI-ul face prima variantă, omul verifică și răspunde.','Tot el ar fi răspunzător, și mai puțin controlat.','Nu e nevoie să renunțe. E nevoie să verifice.']},
    {t:'tf', q:'Textele create de AI generativ sunt copiate cuvânt cu cuvânt dintr-o bază de date.', answer:false, explain:'Modelul generează textul cuvânt cu cuvânt, pe baza tiparelor învățate din foarte multe texte, nu copiază o pagină anume. Rareori, mai ales la texte foarte cunoscute, poate reproduce aproape identic fragmente existente. De aceea, pentru materiale publice, verifici și originalitatea.'},
    {t:'recap', points:['AI-ul generativ creează conținut nou: text, imagini, sunet, cod.','Principalele unelte sunt asistenții de conversație și AI-ul integrat în aplicațiile de birou.','E excelent pentru prima variantă. Verificarea și decizia rămân la tine.']}
  ]}
  ]
},
{
  id: 'm2', title: 'Cum „gândește” un chatbot', zone: 'Râul cuvintelor', subtitle: 'Ce se întâmplă când apeși Enter', color: '#12B5A6', icon: 'chat',
  lessons: [
  { id: 'm2l1', title: 'Ghicitorul de cuvinte', steps: [
    {t:'info', title:'Un chatbot construiește răspunsul cuvânt cu cuvânt', guide:'Joacă-te tu de-a modelul: alege, pe rând, cuvântul următor.',
      body:'Asistenți precum ChatGPT, Claude sau Gemini sunt construiți pe un <b>model mare de limbaj</b> (în engleză <b>LLM</b>, Large Language Model). La fiecare pas, modelul calculează ce cuvinte ar putea urma și cât de probabil e fiecare. Alege unul, îl adaugă și o ia de la capăt, până termină răspunsul.',
      visual:{type:'nextword', start:'Afară plouă, așa că îmi iau', end:' la birou.', note:'Probabilități ilustrative', steps:[
        [{w:'umbrela',p:62},{w:'geaca',p:21},{w:'cizmele',p:12},{w:'ochelarii de soare',p:1}],
        [{w:'și',p:44},{w:'înainte să',p:31},{w:'apoi',p:17},{w:'repede și',p:8}],
        [{w:'plec',p:48},{w:'ies',p:30},{w:'alerg',p:14},{w:'zbor',p:2}]
      ]}},
    {t:'info', title:'Ca tastatura telefonului, dar la altă scară', guide:'Compară cele două. Diferența e de mărime, nu de principiu.',
      body:'Tastatura telefonului îți sugerează și ea cuvântul următor. Modelele mari de limbaj fac același lucru, doar că au citit o cantitate uriașă de text (cărți, articole, pagini web, cod) și țin cont de <b>tot</b> ce ai scris, nu doar de ultimele cuvinte.',
      visual:{type:'compare',
        left:{icon:'📱', title:'Tastatura telefonului', lines:['Se uită la ultimele cuvinte','Propune 3 variante scurte','A învățat din textele tale','Nu poate scrie un paragraf']},
        right:{icon:'💬', title:'Model mare de limbaj', lines:['Ține cont de toată conversația','Poate scrie pagini întregi','A învățat din volume uriașe de text','Poate rezuma, traduce, explica']}}},
    {t:'info', title:'Cum devine un model „asistent”', guide:'Apasă „Pasul următor” și parcurge etapele.',
      body:'Un model care doar completează text nu e încă un asistent util. Companiile îl mai trec prin câteva etape, ca să răspundă la întrebări, să urmeze instrucțiuni și să refuze cererile periculoase.',
      visual:{type:'steps', items:[
        {icon:'📚', label:'Pre-antrenare', text:'Modelul citește cantități uriașe de text și învață să prezică cuvântul următor. Aici își formează cunoștințele generale despre limbă și lume.'},
        {icon:'🧑‍🏫', label:'Exemple de conversații', text:'Oameni scriu exemple de întrebări și răspunsuri bune. Modelul învață din ele formatul de asistent: să răspundă, nu doar să continue textul.'},
        {icon:'👍', label:'Feedback de la oameni', text:'Evaluatori compară mai multe răspunsuri și aleg ce e mai util și mai corect. Modelul e ajustat să prefere astfel de răspunsuri.'},
        {icon:'🛡️', label:'Reguli de siguranță', text:'Modelul e antrenat și testat să refuze cererile periculoase și să fie mai atent la subiectele sensibile.'}
      ]}},
    {t:'mcq', q:'Ce înseamnă LLM?', options:['Large Language Model, adică model mare de limbaj','Legal Language Machine','Limited Learning Mode','Low Level Memory'], answer:0,
      feedback:['Corect. Pe acest tip de model sunt construiți toți marii asistenți de conversație.','Nu are legătură cu domeniul juridic.','Nu e un „mod de învățare”, e tipul de model.','Nu e un tip de memorie.'],
      explain:'„Mare” se referă atât la cantitatea de text din care a învățat, cât și la numărul de parametri: modelele de azi au miliarde. „De limbaj” înseamnă că lucrează cu text. De aici vine și limita lui principală: e foarte bun cu cuvintele, dar nu verifică faptele în lume.'},
    {t:'tf', q:'Când un chatbot îți răspunde, el caută răspunsul gata scris într-o bază de date.', answer:false,
      explain:'Răspunsul e generat pe loc, cuvânt cu cuvânt, de fiecare dată. Nu există un depozit cu răspunsuri gata făcute. De aceea aceeași întrebare poate primi formulări diferite, iar când modelul nu „știe”, poate produce un răspuns plauzibil, dar inventat. Unele aplicații pot căuta pe internet, dar și atunci răspunsul final e generat de model.'},
    {t:'order', q:'Pune în ordine etapele prin care un model devine asistent', items:['Pre-antrenare pe cantități uriașe de text','Învățare din exemple de conversații bune','Ajustare pe baza feedbackului de la oameni','Testare și reguli de siguranță'],
      explain:'Mai întâi modelul își formează cunoștințele generale, citind foarte mult text. Apoi învață formatul de asistent din exemple scrise de oameni. Feedbackul evaluatorilor îl face mai util și mai atent, iar testele de siguranță verifică dacă refuză cererile periculoase. Niciuna dintre etape nu garantează însă că nu greșește.'},
    {t:'recap', points:['Un chatbot construiește răspunsul cuvânt cu cuvânt, alegând continuări probabile.','A învățat din volume uriașe de text, apoi a fost ajustat să se comporte ca un asistent.','Răspunsul e generat pe loc, nu căutat într-o bază de date.']}
  ]},
  { id: 'm2l2', title: 'Ce știe și ce nu știe', steps: [
    {t:'info', title:'Data-limită a cunoștințelor', guide:'Uită-te la diferența dintre cele două situații.',
      body:'Modelul a învățat din texte scrise până la o anumită dată, numită <b>dată-limită a cunoștințelor</b>. Ce s-a întâmplat după aceea nu știe, <b>decât</b> dacă aplicația poate căuta pe internet sau îi dai tu informația.',
      visual:{type:'compare',
        left:{icon:'🧊', title:'Fără căutare pe internet', lines:['Răspunde din ce a învățat','Nu știe noutățile','Poate da informații depășite','Adesea nu te avertizează']},
        right:{icon:'🌐', title:'Cu căutare pe internet', lines:['Caută pagini actuale','Îți poate arăta sursele','Tot poate interpreta greșit','Deschizi sursele și verifici']}}},
    {t:'info', title:'Un exemplu real: cota de TVA', guide:'Comută între variante și citește răspunsurile.',
      body:'Cota standard de TVA din România a crescut de la 19% la 21% de la 1 august 2025. Un model antrenat înainte de această schimbare poate răspunde cu cifra veche, pe un ton perfect sigur.',
      visual:{type:'toggle', options:[
        {label:'Model fără căutare', input:'Care este cota standard de TVA în România?', output:'Cota standard de TVA în România este de 19%. Pentru anumite produse și servicii se aplică cote reduse, de 9% și 5%.'},
        {label:'Model cu căutare', input:'Care este cota standard de TVA în România?', output:'Potrivit surselor găsite, cota standard a fost majorată la 21% de la 1 august 2025, iar cotele reduse au fost unificate la 11%. Îți recomand să verifici pe anaf.ro dacă au apărut modificări între timp.'}
      ]}},
    {t:'info', title:'Cunoaște textele, nu realitatea', guide:'Asta e cheia pentru a-l folosi corect.',
      body:'Modelul știe foarte bine <b>cum se vorbește</b> despre un subiect, dar nu verifică faptele în lume. Îți poate explica excelent ce este TVA-ul și cum funcționează, dar poate greși cifra exactă sau un termen dacă legea s-a schimbat.<br><br>Soluția cea mai simplă: <b>dă-i tu sursa</b>. Dacă lipești textul actual al unei legi sau încarci documentul, modelul lucrează cu informația corectă.',
      visual:{type:'compare',
        left:{icon:'💭', title:'Îl întrebi „din memorie”', lines:['Răspunde din ce a învățat','Poate amesteca versiuni vechi','Poate inventa detalii']},
        right:{icon:'📄', title:'Îi dai documentul', lines:['Lucrează cu textul actual','Poate cita din el','Tot verifici esențialul']}}},
    {t:'mcq', q:'Vrei să afli o cotă de impozit valabilă anul acesta. Care e cea mai sigură abordare?', options:['Întrebi chatbotul și iei răspunsul ca atare','Întrebi chatbotul, apoi verifici pe site-ul oficial (de ex. ANAF)','Întrebi de trei ori și alegi răspunsul cel mai frecvent','Nu folosești AI pentru nimic legat de taxe'], answer:1,
      feedback:['Riscant. Modelul poate răspunde cu o cotă depășită, fără să te avertizeze.','Exact. AI-ul te ajută să înțelegi, sursa oficială confirmă cifra.','Dacă modelul a învățat cifra veche, o va repeta de trei ori.','Nu e nevoie să renunți. AI-ul explică foarte bine noțiunile.'],
      explain:'Folosește AI-ul pentru ce face bine: îți explică noțiunile, te ajută să înțelegi un calcul, îți spune ce întrebări să pui. Cifrele, termenele și cotele, care se schimbă prin lege, le confirmi din sursa oficială. Exemplul TVA-ului arată cât de ușor rămâne un model în urmă.'},
    {t:'sort', q:'Poate răspunde din ce a învățat sau are nevoie de informații actuale?', buckets:['🧠 Poate răspunde din ce a învățat','🌐 Are nevoie de informații actuale'], items:[
      {text:'Ce este TVA-ul', b:0},{text:'Cursul euro de azi', b:1},{text:'Cum se scrie o cerere formală', b:0},
      {text:'Rezultatul meciului de aseară', b:1},{text:'Ce înseamnă „buget participativ”', b:0},{text:'Programul de azi al unei instituții', b:1}
    ], explain:'Noțiunile stabile (definiții, explicații, formulări) sunt punctul forte al modelului. Tot ce se schimbă des (prețuri, cursuri, rezultate, programe, legi recente) cere căutare pe internet sau o sursă dată de tine. Și chiar și atunci, verifici cifra în sursa originală.'},
    {t:'tf', q:'Dacă îi dai chatbotului un document, poate lucra cu informațiile din el, chiar dacă sunt mai noi decât data-limită a cunoștințelor.', answer:true,
      explain:'Ce pui în conversație devine material de lucru pentru model, indiferent de data la care a fost antrenat. De aceea poți rezuma sau analiza documente recente. Rămâne însă riscul ca modelul să amestece informațiile din document cu ce „știa” dinainte, așa că îi poți cere explicit să folosească doar documentul.'},
    {t:'recap', points:['Fiecare model are o dată-limită a cunoștințelor și poate răspunde cu informații depășite.','Modelul știe cum se vorbește despre un subiect, dar nu verifică faptele.','Cea mai bună protecție: îi dai tu sursa sau verifici în sursa oficială.']}
  ]},
  { id: 'm2l3', title: 'Tokeni și memoria conversației', steps: [
    {t:'info', title:'Modelul citește „bucăți”, nu cuvinte', guide:'Scrie orice frază în caseta de mai jos.',
      body:'Modelul nu lucrează direct cu litere sau cuvinte întregi, ci cu <b>tokeni</b>: bucăți de text, de obicei cuvinte scurte sau părți de cuvinte. Cuvintele lungi și cele cu diacritice sunt adesea tăiate în mai multe bucăți. Limitele de lungime ale chatboturilor și prețurile pentru firme se măsoară tot în tokeni.',
      visual:{type:'tokens', text:'Inteligența artificială ne ajută la birou.', note:'Împărțire ilustrativă. Fiecare model are propriul mod de a tăia textul.'}},
    {t:'info', title:'Fereastra de context: biroul modelului', guide:'Mută glisorul și urmărește cât se umple biroul.',
      body:'Chatbotul „ține minte” conversația curentă într-o zonă numită <b>fereastră de context</b>. Seamănă cu un birou pe care stau toate foile discuției: întrebările tale, răspunsurile lui, documentele încărcate. Biroul e mare, dar nu infinit.',
      visual:{type:'slider', label:'Cât de lungă e conversația?', barLabel:'Fereastră ocupată', note:'Valori ilustrative', stops:[
        {label:'10 mesaje', bar:6, caption:'Totul încape fără probleme. Modelul vede toată discuția.'},
        {label:'100 de mesaje', bar:35, caption:'Încape încă, dar detaliile spuse cu mult timp în urmă pot primi mai puțină atenție.'},
        {label:'+ un raport', bar:70, caption:'Documentele lungi ocupă mult loc. Modelul poate trece mai ușor peste un detaliu din mijloc.'},
        {label:'Foarte lungă', bar:100, caption:'Biroul e plin. Aplicația poate rezuma sau ignora începutul conversației, iar cerințele de la început se pot pierde.'}
      ]}},
    {t:'info', title:'Conversație nouă, foaie albă', guide:'Un obicei simplu care îmbunătățește mult răspunsurile.',
      body:'De regulă, o conversație nouă nu știe nimic din cele anterioare. Unele aplicații au o funcție de „memorie” care reține preferințe, dar nu te baza pe ea pentru detalii importante.<br><br>Pentru un subiect nou, deschide o conversație nouă. Dacă o conversație s-a lungit și modelul pare să uite cerințele, cere-i un rezumat, începe una nouă și lipește rezumatul la început.',
      visual:{type:'compare',
        left:{icon:'🗃️', title:'O conversație pentru tot', lines:['Subiectele se amestecă','Cerințele vechi se pierd','Răspunsuri mai confuze']},
        right:{icon:'🗂️', title:'O conversație pe subiect', lines:['Context curat','Cerințele rămân clare','Răspunsuri mai precise']}}},
    {t:'mcq', q:'Ce este un „token”?', options:['O bucată mică de text (un cuvânt sau o parte de cuvânt)','O parolă de acces','O monedă virtuală','Un tip de virus'], answer:0,
      feedback:['Corect. Modelele lucrează cu tokeni, nu cu litere sau pagini.','Nu are legătură cu securitatea contului.','În alte contexte, „token” poate însemna asta, dar nu aici.','Nu are legătură cu virușii.'],
      explain:'Tokenii sunt unitatea de măsură a modelelor: fereastra de context, limitele de lungime și costurile pentru firme se socotesc în tokeni. În limba română, din cauza diacriticelor și a cuvintelor lungi, un text are de obicei mai mulți tokeni decât același text în engleză.'},
    {t:'mcq', q:'Ai o conversație foarte lungă, iar chatbotul pare să fi uitat cerințele de la început. Ce faci?', options:['Scrii mai apăsat, cu majuscule','Ceri un rezumat, deschizi o conversație nouă și pornești de la el','Te cerți cu el','Renunți la AI'], answer:1,
      feedback:['Majusculele nu readuc informația pierdută din fereastra de context.','Exact. Pornești curat, cu cerințele importante la vedere.','Nu ajută. Nu e o problemă de atitudine, ci de spațiu.','Nu e nevoie. Problema are o soluție simplă.'],
      explain:'Când conversația depășește ce încape comod în fereastra de context, detaliile de la început primesc mai puțină atenție sau sunt eliminate. Un rezumat al cerințelor, pus la începutul unei conversații noi, readuce totul în centrul atenției modelului.'},
    {t:'tf', q:'E o idee bună să folosești aceeași conversație, luni la rând, pentru toate subiectele.', answer:false,
      explain:'O conversație foarte lungă și amestecată umple fereastra de context cu informații care nu au legătură cu întrebarea de acum. Modelul poate confunda cerințele sau poate prelua un ton ori un format dintr-o discuție veche. O conversație pentru fiecare subiect dă răspunsuri mai clare.'},
    {t:'recap', points:['Modelul citește textul în bucăți numite tokeni.','Fereastra de context e „biroul” conversației: mare, dar nu infinit.','Un subiect nou merită o conversație nouă, iar cerințele importante le repeți.']}
  ]},
  { id: 'm2l4', title: 'De ce nu răspunde la fel de două ori', steps: [
    {t:'info', title:'Aceeași întrebare, formulări diferite', guide:'Comută între cele trei variante primite la aceeași cerere.',
      body:'La fiecare cuvânt, modelul are mai multe variante posibile și alege dintre cele probabile, cu o doză de variație. De aceea, aceeași cerere primește de fiecare dată o formulare puțin diferită. E normal și chiar util: poți cere oricând „încă o variantă”.',
      visual:{type:'toggle', options:[
        {label:'Varianta 1', input:'Scrie o frază de invitație la ședința de luni.', output:'Vă invităm luni, la ora 10:00, la ședința de planificare din sala de consiliu.'},
        {label:'Varianta 2', input:'Scrie o frază de invitație la ședința de luni.', output:'Vă așteptăm luni, de la ora 10:00, în sala de consiliu, pentru ședința de planificare.'},
        {label:'Varianta 3', input:'Scrie o frază de invitație la ședința de luni.', output:'Luni, la ora 10:00, ne întâlnim în sala de consiliu pentru ședința de planificare. Vă rugăm să confirmați prezența.'}
      ]}},
    {t:'info', title:'„Temperatura”: între precis și creativ', guide:'Mută glisorul și citește ce se schimbă.',
      body:'Gradul de variație se numește <b>temperatură</b>. În aplicațiile obișnuite nu îl setezi tu, dar îl poți influența prin ce ceri: „fii concis și exact” sau „dă-mi idei neobișnuite”.',
      visual:{type:'slider', label:'Cât de multă variație?', barLabel:'Variație', stops:[
        {label:'Scăzută', bar:15, caption:'Răspunsuri previzibile și asemănătoare de la o încercare la alta. Potrivit pentru rezumate, definiții, formule.'},
        {label:'Medie', bar:50, caption:'Echilibru între claritate și naturalețe. Potrivit pentru e-mailuri și explicații.'},
        {label:'Ridicată', bar:90, caption:'Idei surprinzătoare, formulări neobișnuite, dar și risc mai mare de greșeli. Potrivit pentru brainstorming, sloganuri, titluri.'}
      ]}},
    {t:'info', title:'Un truc de verificare', guide:'Folosește-l când nu ești sigur de un fapt.',
      body:'Variația are și o parte utilă. Dacă întrebi de două ori, în conversații separate, despre un <b>fapt</b> (o dată, un număr de lege, o cifră) și primești răspunsuri diferite, e un semnal clar că modelul nu „știe” sigur. Atunci verifici în sursa oficială.<br><br>Atenție la reciprocă: dacă primești același răspuns de două ori, tot nu e o garanție. Un model poate repeta aceeași greșeală, mai ales dacă a învățat o informație depășită.'},
    {t:'tf', q:'Dacă primești două răspunsuri diferite la aceeași întrebare, chatbotul e defect.', answer:false,
      explain:'Variația face parte din felul în care funcționează modelul: la fiecare pas alege dintre mai multe continuări probabile. La texte (e-mailuri, anunțuri) e chiar utilă, pentru că poți alege varianta care îți place. Doar la fapte (date, cifre, legi), răspunsurile diferite sunt un semnal de verificare.'},
    {t:'mcq', q:'Întrebi în două conversații separate anul în care a fost adoptată o lege și primești doi ani diferiți. Ce înseamnă?', options:['Unul dintre răspunsuri e sigur corect, îl aleg pe primul','Modelul nu știe sigur, verific în sursa oficială','Legea a fost adoptată de două ori','Trebuie să mai întreb o dată și să aleg majoritatea'], answer:1,
      feedback:['Nu ai de unde ști care e corect. Poate niciunul.','Exact. Răspunsurile diferite la un fapt sunt un semnal de alarmă.','Puțin probabil. Mai probabil e o confuzie a modelului.','„Votul” nu transformă o presupunere în fapt.'],
      explain:'Pentru fapte precise, modelul nu consultă o arhivă, ci generează ce i se pare plauzibil. Când plauzibilitatea e împărțită între mai multe variante, apar răspunsuri diferite. Sursa oficială (de exemplu, portalul legislativ) rezolvă întrebarea în câteva minute.'},
    {t:'match', q:'Recapitulare: potrivește termenul cu explicația', pairs:[['LLM','Model mare de limbaj'],['Fereastră de context','Memoria conversației curente'],['Data-limită','Momentul până la care a învățat'],['Temperatură','Cât de multă variație are răspunsul']],
      explain:'Acum ai vocabularul de bază despre chatboturi. Aceste patru noțiuni explică aproape toate comportamentele „ciudate” pe care le vei întâlni: informații depășite, cerințe uitate și răspunsuri care diferă de la o încercare la alta.'},
    {t:'recap', points:['Variația răspunsurilor e normală și utilă la texte.','Temperatura descrie cât de previzibil sau de creativ e răspunsul.','Răspunsuri diferite la același fapt înseamnă: verifică în sursa oficială.']}
  ]}
  ]
},
{
  id: 'm3', title: 'Primul tău prompt', zone: 'Podul prompturilor', subtitle: 'Cum ceri ca să primești ce vrei', color: '#1F8CC9', icon: 'pen',
  lessons: [
  { id: 'm3l1', title: 'Ce e un prompt', steps: [
    {t:'info', title:'Mesajul tău face diferența', guide:'Comută între promptul slab și cel bun și compară rezultatele.',
      body:'<b>Promptul</b> este mesajul pe care i-l scrii AI-ului. Regula de aur: scrie-i ca unui coleg nou, foarte deștept, care nu știe nimic despre tine, despre organizația ta sau despre situația ta. Tot ce nu îi spui, va ghici, iar ghicitul duce la texte generale.',
      visual:{type:'toggle', options:[
        {label:'Prompt vag', input:'Scrie un e-mail către furnizor.', output:'Stimate furnizor, vă scriu în legătură cu colaborarea noastră. Vă rog să mă contactați pentru a discuta detaliile. Cu stimă, [Numele dumneavoastră]'},
        {label:'Prompt clar', input:'Scrie un e-mail politicos către furnizorul nostru de hârtie, prin care cer amânarea livrării de joi cu o săptămână, din cauza inventarului anual. Ton cordial, maximum 100 de cuvinte.', output:'Bună ziua, vă mulțumim pentru colaborare. Din cauza inventarului anual, vă rugăm să amânați livrarea programată joi cu o săptămână, pentru joia următoare. Ne cerem scuze pentru schimbare și vă stăm la dispoziție pentru orice detaliu. Cu stimă,'}
      ]}},
    {t:'info', title:'Ce nu știe AI-ul despre tine', guide:'Atinge fiecare element. Pe toate le poți spune în prompt.',
      body:'AI-ul nu vede situația ta. Cu cât îi dai mai multe dintre aceste informații, cu atât răspunsul e mai potrivit din prima.',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'🧑', label:'Cine ești', text:'Rolul tău schimbă tonul: un răspuns pentru un director de școală diferă de unul pentru un contabil.'},
        {icon:'👥', label:'Pentru cine e textul', text:'Cetățeni, colegi, conducere, clienți? Publicul decide nivelul de detaliu și limbajul.'},
        {icon:'🎯', label:'Scopul', text:'Vrei să informezi, să convingi, să ceri ceva, să refuzi politicos? Spune-o direct.'},
        {icon:'🗣️', label:'Tonul', text:'Formal, cordial, ferm, prietenos? Fără indicații, AI-ul alege un ton „mediu”, adesea prea formal.'},
        {icon:'📏', label:'Lungimea', text:'„Maximum 100 de cuvinte”, „3 puncte”, „o pagină”. Altfel răspunsul e de obicei mai lung decât ai nevoie.'},
        {icon:'📎', label:'Ce s-a întâmplat înainte', text:'Istoricul situației: e-mailul la care răspunzi, ce s-a discutat, ce s-a promis deja.'}
      ]}},
    {t:'info', title:'Mituri despre prompturi', guide:'Vestea bună: nu ai nevoie de trucuri.',
      body:'Pe internet circulă multe „formule magice”. Pentru asistenții de azi, contează în primul rând claritatea: scrii în română, firesc, ca și cum ai explica unui om.',
      visual:{type:'compare',
        left:{icon:'🪄', title:'Mituri', lines:['Trebuie scris în engleză','Există cuvinte magice','Cu cât mai scurt, cu atât mai bine','Trebuie să fii programator']},
        right:{icon:'✅', title:'Ce contează de fapt', lines:['Contextul situației','O sarcină clară','Publicul și scopul','Formatul dorit']}}},
    {t:'mcq', q:'Care prompt va da un rezultat mai bun?', options:['„Scrie un anunț.”','„Scrie un anunț de 80 de cuvinte pentru site-ul primăriei despre închiderea străzii Libertății pe 12 mai, între 8:00 și 16:00, pentru lucrări la canalizare. Ton neutru, cu rută ocolitoare.”','„Anunț stradă închisă urgent.”','„Te rog frumos, scrie ceva bun.”'], answer:1,
      feedback:['Prea vag. AI-ul va inventa detaliile sau va scrie un text general.','Exact. Conține faptele, publicul, tonul, lungimea și ce trebuie inclus.','Are câteva cuvinte-cheie, dar lipsesc data, ora, motivul și ruta ocolitoare.','Politețea nu înlocuiește informațiile.'],
      explain:'Un prompt bun îi dă AI-ului faptele concrete (ce, unde, când, de ce) și îi spune cum să arate rezultatul (lungime, ton, ce să conțină). Dacă lipsesc faptele, modelul fie le inventează, fie scrie un text general pe care trebuie să-l refaci.'},
    {t:'spot', q:'Atinge cuvintele prea vagi din acest prompt', segments:['Fă-mi ', {p:'un raport', hit:true}, ' ', {p:'bun', hit:true}, ' despre ', {p:'situație', hit:true}, ', ', {p:'până mâine la ora 12', hit:false}, ', ', {p:'în format Word', hit:false}, '.'],
      explain:'„Un raport” nu spune ce tip de raport și cât de lung. „Bun” nu spune pentru cine și după ce criterii. „Situație” nu spune despre ce e vorba. Termenul și formatul, în schimb, sunt clare. Un prompt mai bun: „Fă-mi un raport de 2 pagini pentru conducere despre stadiul proiectului X, cu realizări, întârzieri și riscuri.”'},
    {t:'tf', q:'Ca să funcționeze bine, promptul trebuie scris în engleză.', answer:false,
      explain:'Marii asistenți înțeleg foarte bine limba română și răspund firesc în română. Engleza poate ajuta doar în cazuri rare, de exemplu la termeni tehnici foarte specializați. Mai important decât limba este ca mesajul să fie clar și complet.'},
    {t:'recap', points:['Promptul e mesajul tău către AI: scrie-i ca unui coleg nou, fără context.','Spune cine ești, pentru cine e textul, scopul, tonul și lungimea.','Nu ai nevoie de formule magice, ci de claritate.']}
  ]},
  { id: 'm3l2', title: 'Rețeta în 4 ingrediente', steps: [
    {t:'info', title:'Rol, context, sarcină, format', guide:'Atinge fiecare ingredient.',
      body:'Un prompt bun are, de obicei, patru ingrediente. Nu trebuie să le folosești de fiecare dată pe toate, dar cu cât sarcina e mai importantă, cu atât contează mai mult.',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'🎭', label:'Rol', text:'Cine să fie AI-ul: „Ești specialist în comunicare publică.” Rolul îi schimbă vocabularul și nivelul de detaliu.'},
        {icon:'🧭', label:'Context', text:'Situația, publicul, scopul: „Primăria organizează o consultare publică pentru un parc nou. Publicul sunt locuitorii cartierului.”'},
        {icon:'🛠️', label:'Sarcină', text:'Ce să facă, cu un verb clar: „Scrie anunțul pentru site.” Un verb precis (scrie, rezumă, compară, corectează) valorează mult.'},
        {icon:'📐', label:'Format', text:'Cum arată rezultatul: „Maximum 150 de cuvinte, cu titlu și 3 paragrafe scurte.” Te scapă de rearanjat.'}
      ]}},
    {t:'info', title:'Un prompt construit pas cu pas', guide:'Apasă „Pasul următor” și urmărește cum se construiește.',
      body:'Iată cum arată un prompt complet, adăugând câte un ingredient. Fiecare propoziție îi ia AI-ului o ghicitoare de pe umeri.',
      visual:{type:'steps', items:[
        {icon:'🎭', label:'Rol', text:'„Ești profesor de matematică la gimnaziu, cu experiență în a explica pe înțelesul copiilor.”'},
        {icon:'🧭', label:'Context', text:'„Elevii mei de clasa a VI-a au dificultăți cu fracțiile și se plictisesc la exercițiile abstracte.”'},
        {icon:'🛠️', label:'Sarcină', text:'„Propune 5 exerciții cu fracții din viața de zi cu zi: cumpărături, rețete, sport.”'},
        {icon:'📐', label:'Format', text:'„Pune-le într-un tabel cu trei coloane: exercițiul, rezolvarea, greșeala frecventă.”'}
      ]}},
    {t:'info', title:'Ingrediente în plus', guide:'Pentru sarcini importante, adaugă și acestea.',
      body:'Pe lângă cele patru ingrediente, ajută mult: <b>un exemplu</b> de text care îți place, <b>restricții</b> („fără termeni juridici”, „nu promite termene”) și <b>ce să evite</b> („nu folosi superlative”).',
      visual:{type:'compare',
        left:{icon:'📝', title:'Prompt de bază', lines:['Rol','Context','Sarcină','Format']},
        right:{icon:'🧩', title:'Prompt complet', lines:['Tot ce e în stânga','Un exemplu de stil','Restricții clare','Ce să evite']}}},
    {t:'match', q:'Potrivește ingredientul cu exemplul', pairs:[['Rol','„Ești specialist în resurse umane.”'],['Context','„Angajăm un contabil pentru o firmă mică din Cluj.”'],['Sarcină','„Scrie anunțul de angajare.”'],['Format','„Maximum 200 de cuvinte, cu responsabilități și beneficii în liste.”']],
      explain:'Rolul spune cine vorbește, contextul spune ce se întâmplă și pentru cine, sarcina spune ce trebuie făcut, iar formatul spune cum arată rezultatul. Când le recunoști, poți „repara” rapid orice prompt care dă rezultate slabe.'},
    {t:'sort', q:'În ce ingredient intră fiecare bucată de prompt?', buckets:['🎭 Rol','🧭 Context','🛠️ Sarcină','📐 Format'], items:[
      {text:'„Ești consilier de carieră.”', b:0},{text:'„Clientul are 45 de ani și vrea să se reorienteze profesional.”', b:1},
      {text:'„Propune trei direcții de carieră.”', b:2},{text:'„Sub formă de tabel cu avantaje și dezavantaje.”', b:3},
      {text:'„Publicul nu are studii economice.”', b:1},{text:'„Maximum 200 de cuvinte.”', b:3}
    ], explain:'Unele bucăți par să se potrivească în mai multe locuri, dar întrebarea-cheie ajută: descrie cine vorbește (rol), situația (context), ce trebuie făcut (sarcină) sau cum arată rezultatul (format)? De exemplu, „publicul nu are studii economice” descrie situația, deci e context.'},
    {t:'mcq', q:'Ce lipsește cel mai tare din promptul „Ești jurist. Scrie un rezumat.”?', options:['Rolul','Contextul: rezumatul a ce, pentru cine și cu ce scop','Nimic, e complet','Emoticoanele'], answer:1,
      feedback:['Rolul există: „Ești jurist.”','Exact. Fără context, AI-ul nu știe ce să rezume, pentru cine și cu ce scop.','Are rol și sarcină, dar îi lipsesc contextul și formatul.','Nu contează deloc.'],
      explain:'Rolul și sarcina singure lasă AI-ul să ghicească tot restul. Un rezumat pentru conducere arată complet diferit de unul pentru cetățeni sau pentru un coleg nou. Adaugă ce document e, cui îi e destinat rezumatul și cât de lung să fie.'},
    {t:'recap', points:['Cele patru ingrediente: rol, context, sarcină, format.','Pentru sarcini importante adaugi un exemplu, restricții și ce să evite.','Când un rezultat e slab, verifică ce ingredient lipsește.']}
  ]},
  { id: 'm3l3', title: 'Repară promptul', steps: [
    {t:'info', title:'Cele mai frecvente greșeli', guide:'Atinge fiecare greșeală ca să vezi cum se repară.',
      body:'Majoritatea rezultatelor slabe vin din câteva greșeli repetate. Vestea bună e că fiecare are o reparație simplă.',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'🌫️', label:'Prea vag', text:'„Ajută-mă cu un raport.” Reparație: spui ce raport, pentru cine, cât de lung și ce trebuie să conțină.'},
        {icon:'👤', label:'Fără public', text:'Nu spui pentru cine e textul. Reparație: „pentru cetățeni fără cunoștințe juridice” sau „pentru conducere, foarte concis”.'},
        {icon:'📏', label:'Fără lungime', text:'Primești trei pagini când voiai trei rânduri. Reparație: „maximum 100 de cuvinte” sau „5 puncte”.'},
        {icon:'🧶', label:'Prea multe deodată', text:'Ceri analiză, rezumat, e-mail și prezentare în același mesaj. Reparație: împarți în pași, câte un mesaj pentru fiecare.'}
      ]}},
    {t:'info', title:'Înainte și după', guide:'Comută între variante.',
      body:'Iată același subiect, cu un prompt vag și cu unul reparat. Diferența de calitate vine aproape integral din informațiile adăugate.',
      visual:{type:'toggle', options:[
        {label:'Înainte', input:'Fă-mi o prezentare despre AI.', output:'1. Ce este AI 2. Istoria AI 3. Tipuri de AI 4. Aplicații 5. Viitorul AI 6. Concluzii'},
        {label:'După', input:'Fă-mi structura unei prezentări de 10 minute despre AI pentru colegii de la contabilitate, care nu l-au folosit niciodată. 6 slide-uri, fiecare cu titlu și 3 idei, cu exemple din munca lor.', output:'1. Ce poate face AI pentru un contabil (3 exemple din birou). 2. Cum pui o întrebare bună. 3. Demonstrație: rezumatul unei legi fiscale. 4. Unde greșește: cifre și termene. 5. Ce date nu introduci niciodată. 6. Primii pași de mâine.'}
      ]}},
    {t:'info', title:'Arată un exemplu și împarte sarcina', guide:'Două tehnici care rezolvă multe probleme.',
      body:'<b>Arată un exemplu.</b> Dacă ai un text care îți place ca stil, adaugă-l: „Scrie în stilul acestui exemplu: …”. Un exemplu bun valorează cât zece explicații.<br><br><b>Împarte sarcina.</b> O sarcină mare dă rezultate mai bune în pași: întâi structura, apoi fiecare secțiune, apoi revizuirea.',
      visual:{type:'compare',
        left:{icon:'📦', title:'Totul într-un mesaj', lines:['Rezultat lung și superficial','Greu de corectat','Greșelile se amestecă']},
        right:{icon:'🪜', title:'Pas cu pas', lines:['Validezi structura întâi','Corectezi fiecare parte','Rezultat mai atent']}}},
    {t:'mcq', q:'Ce informație lipsește cel mai tare?', context:{label:'Prompt inițial', text:'Scrie ceva pentru Facebook despre evenimentul nostru.'}, options:['Detaliile evenimentului: ce, când, unde, pentru cine','Culoarea preferată a AI-ului','Numele aplicației folosite','Nimic, AI-ul le ghicește'], answer:0,
      feedback:['Exact. Fără fapte, AI-ul inventează sau scrie ceva general.','Nu are nicio legătură.','Nu contează pentru rezultat.','Exact asta e problema: le va ghici, adesea greșit.'],
      explain:'Fără detaliile evenimentului, modelul are două variante: să scrie un text atât de general încât nu spune nimic, sau să inventeze detalii plauzibile (o dată, o oră, un loc), care par reale. A doua variantă e mai periculoasă, pentru că poate ajunge publicată.'},
    {t:'order', q:'Pune în ordine pașii pentru un raport lung, lucrat cu AI', items:['Ceri structura raportului și o validezi','Ceri prima secțiune și o corectezi','Continui secțiune cu secțiune','Ceri o revizuire a întregului text','Verifici tu faptele și cifrele'],
      explain:'Validarea structurii la început te scutește de rescrieri mari: dacă planul e greșit, tot textul iese greșit. Apoi lucrezi pe bucăți, unde greșelile se văd ușor. La final, revizuirea asigură coerența, iar verificarea faptelor rămâne mereu la tine.'},
    {t:'tf', q:'Dacă îi arăți AI-ului un exemplu de text, îl ajuți să înțeleagă stilul pe care îl vrei.', answer:true,
      explain:'Exemplele sunt una dintre cele mai eficiente tehnici: modelul preia tonul, lungimea frazelor, structura și chiar formulările tipice. Ai grijă doar ca exemplul să nu conțină date personale sau confidențiale și spune clar dacă vrei doar stilul, nu și conținutul.'},
    {t:'recap', points:['Greșelile tipice: prompt vag, fără public, fără lungime, prea multe deodată.','Un exemplu de stil valorează cât zece explicații.','Sarcinile mari se fac în pași: structură, secțiuni, revizuire, verificare.']}
  ]},
  { id: 'm3l4', title: 'Conversația, nu un singur mesaj', steps: [
    {t:'info', title:'Primul răspuns e o ciornă', guide:'Parcurge ciclul unei sesiuni de lucru.',
      body:'Cei care folosesc bine AI-ul nu se opresc la primul răspuns. Îl tratează ca pe o ciornă și continuă conversația cu cereri concrete.',
      visual:{type:'steps', cycle:true, items:[
        {icon:'✍️', label:'Ceri', text:'Scrii promptul cu context, sarcină și format.'},
        {icon:'📄', label:'Primești ciorna', text:'Citești critic: ce e bun, ce lipsește, ce e prea mult.'},
        {icon:'🔧', label:'Ajustezi', text:'Ceri modificări concrete: „mai scurt”, „mai formal”, „adaugă un exemplu”.'},
        {icon:'🔍', label:'Verifici', text:'Verifici faptele și finalizezi tu textul. Dacă e nevoie, reiei ciclul.'}
      ]}},
    {t:'info', title:'Replici care fac minuni', guide:'Atinge fiecare replică. Le poți folosi oricând.',
      body:'Câteva replici de continuare îmbunătățesc mult rezultatul. Le poți copia ca atare.',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'❓', label:'„Pune-mi întrebări”', text:'„Înainte să răspunzi, pune-mi întrebările de care ai nevoie ca să faci asta bine.” AI-ul îți arată ce informații lipsesc.'},
        {icon:'🔀', label:'„Dă-mi 3 variante”', text:'„Propune trei variante diferite ca ton.” Alegi ce îți place și ceri să combine ce e mai bun.'},
        {icon:'🧐', label:'„Critică-ți răspunsul”', text:'„Ce lipsește din acest text? Ce ar putea înțelege greșit un cetățean?” Primești o a doua privire.'},
        {icon:'✂️', label:'„Scurtează la jumătate”', text:'„Păstrează ideile, dar redu la jumătate și scoate termenii tehnici.” Cerere concretă, corectură concretă.'}
      ]}},
    {t:'info', title:'Păstrează prompturile care funcționează', guide:'Un obicei care economisește timp în fiecare săptămână.',
      body:'Când un prompt îți dă un rezultat foarte bun, salvează-l într-un document: e un <b>șablon</b> pe care îl refolosești, schimbând doar detaliile. Multe aplicații îți permit și să salvezi instrucțiuni permanente (de exemplu, „răspunde-mi mereu concis, în română”), ca să nu le repeți în fiecare conversație.'},
    {t:'mcq', q:'Răspunsul e bun, dar prea lung. Ce scrii?', options:['„Nu e bine.”','„Păstrează ideile, dar redu textul la jumătate și scoate termenii tehnici.”','Ștergi tot și o iei de la capăt','„Mai încearcă.”'], answer:1,
      feedback:['AI-ul nu știe ce anume nu e bine și va schimba la întâmplare.','Exact. O cerere concretă dă o corectură concretă.','Pierzi ce era bun în prima variantă.','Vei primi altă variantă, dar nu neapărat mai scurtă.'],
      explain:'Cu cât spui mai precis ce vrei să se schimbe (lungimea, tonul, termenii, structura), cu atât modelul păstrează ce era bun și modifică doar ce trebuie. Cererile vagi („mai încearcă”) produc variații la întâmplare.'},
    {t:'match', q:'Potrivește replica cu efectul ei', pairs:[['„Pune-mi întrebări înainte să răspunzi.”','Afli ce informații lipsesc'],['„Dă-mi 3 variante.”','Poți alege și combina'],['„Ce lipsește din text?”','Primești o autocritică'],['„Redu la jumătate.”','Obții un text mai concis']],
      explain:'Aceste patru replici acoperă majoritatea situațiilor. Folosite pe rând, transformă o ciornă medie într-un text bun în două-trei mesaje. Merită să le ai la îndemână, de exemplu într-o notiță lângă monitor.'},
    {t:'tf', q:'La o sarcină complexă, e util să-i ceri AI-ului să-ți pună întrebări înainte să lucreze.', answer:true,
      explain:'La sarcinile complexe e ușor să uiți o informație importantă. Când AI-ul îți pune întrebări, vezi imediat ce lipsește: publicul, termenul, constrângerile. Răspunzi o dată, iar prima variantă iese mult mai aproape de ce ai nevoie.'},
    {t:'recap', points:['Primul răspuns e o ciornă: citești critic și ceri ajustări concrete.','Replici utile: „pune-mi întrebări”, „dă-mi 3 variante”, „ce lipsește?”.','Salvezi prompturile care funcționează ca șabloane.']}
  ]}
  ]
},
{
  id: 'm4', title: 'AI la birou', zone: 'Satul de lucru', subtitle: 'E-mailuri, documente, tabele, idei', color: '#FF8A3D', icon: 'briefcase',
  lessons: [
  { id: 'm4l1', title: 'E-mailuri și texte', steps: [
    {t:'info', title:'Prima variantă, în câteva secunde', guide:'Comută și vezi cum schimbă AI-ul tonul unui e-mail.',
      body:'AI-ul e excelent la prima variantă a unui text: e-mailuri, adrese oficiale, anunțuri, răspunsuri la reclamații. <b>Tu aduci faptele și decizia, el aduce formularea.</b> La fel de util e când ai scris deja ceva și vrei să schimbi tonul sau să corectezi greșelile.',
      visual:{type:'toggle', options:[
        {label:'E-mailul tău', input:'Rescrie calm și colaborativ, păstrând cererea: „Iar n-ai trimis situația! Ți-am cerut-o de trei ori. Vreau datele azi.”', output:'Bună, revin cu rugămintea legată de situația cerută săptămâna trecută. Am nevoie de ea pentru raportul de mâine. Poți să mi-o trimiți azi, până la ora 16? Dacă întâmpini vreo dificultate, spune-mi și găsim împreună o soluție. Mulțumesc!'},
        {label:'Limbaj clar', input:'Rescrie pentru cetățeni, în limbaj simplu: „Solicitantul are obligația depunerii documentației în termenul legal prevăzut.”', output:'Vă rugăm să depuneți toate documentele până la data-limită stabilită de lege. Dacă nu sunteți sigur ce documente sunt necesare, ne puteți contacta.'}
      ]}},
    {t:'info', title:'Tu rămâi autorul', guide:'Atinge fiecare element de verificat.',
      body:'Citește textul întotdeauna înainte să-l trimiți. AI-ul poate adăuga din proprie inițiativă un termen, o sumă sau un angajament pe care nu l-ai făcut, pentru că „sună bine” într-un astfel de text.',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'🧑', label:'Nume', text:'Numele persoanelor și ale instituțiilor, scrise corect și complet.'},
        {icon:'📅', label:'Date și termene', text:'Datele, orele și termenele trebuie să fie exact cele reale, nu cele „plauzibile”.'},
        {icon:'💰', label:'Sume', text:'Orice cifră sau sumă o verifici în sursa ta.'},
        {icon:'🤝', label:'Promisiuni', text:'AI-ul poate promite „rambursare integrală” sau „rezolvare în 24 de ore”. Păstrezi doar ce poți respecta.'},
        {icon:'🎭', label:'Ton', text:'Tonul se potrivește relației? Un e-mail prea formal către un coleg sună rece.'},
        {icon:'📬', label:'Destinatar', text:'Textul e potrivit pentru cine îl primește? Verifică să nu trimiți din greșeală unui cetățean un răspuns intern.'}
      ]}},
    {t:'info', title:'Alte munci de text', guide:'Toate acestea se fac în câteva secunde.',
      body:'Pe lângă redactare, AI-ul te ajută la: <b>corectură</b> (gramatică, diacritice, punctuație), <b>traducere</b> (pe care o verifici dacă e oficială), <b>simplificare</b> pentru cetățeni, <b>adaptare</b> pe canale (același anunț pentru site, Facebook și SMS) și <b>rezumarea</b> unui fir lung de e-mailuri.'},
    {t:'spot', q:'E-mail generat de AI. Atinge ce trebuie verificat înainte de trimitere', segments:[{p:'Stimate domnule Ionescu', hit:true}, ', vă mulțumim pentru mesaj. ', {p:'Vă confirmăm rambursarea integrală a sumei', hit:true}, ' ', {p:'în termen de 5 zile lucrătoare', hit:true}, '. ', {p:'Vă mulțumim pentru răbdare', hit:false}, '. ', {p:'Cu stimă', hit:false}, '.'],
      explain:'Numele destinatarului poate fi greșit sau poate fi al altei persoane. „Rambursarea integrală” e o promisiune cu consecințe financiare, iar „5 zile lucrătoare” e un termen pe care AI-ul l-a putut inventa pentru că sună firesc. Formulele de politețe nu au nevoie de verificare.'},
    {t:'mcq', q:'Care cerere e mai utilă pentru răspunsul la o reclamație?', options:['„Răspunde la reclamație.”','„Scrie un răspuns empatic la reclamația de mai jos. Recunoaște întârzierea, explică pe scurt cauza (o defecțiune tehnică) și oferă livrare gratuită data viitoare. Maximum 150 de cuvinte. Nu promite alte compensații.”','„Scrie ceva frumos.”','„Scuză-te.”'], answer:1,
      feedback:['Prea vag. AI-ul poate promite lucruri pe care nu le oferi.','Exact. Conține faptele, soluția, tonul, lungimea și o limită clară.','Nu spune ce trebuie să conțină răspunsul.','Scuza singură nu rezolvă problema clientului.'],
      explain:'Observă ultima propoziție: „Nu promite alte compensații.” Restricțiile sunt la fel de importante ca instrucțiunile, pentru că AI-ul tinde să fie foarte amabil și poate oferi din proprie inițiativă reduceri sau despăgubiri pe care organizația nu și le asumă.'},
    {t:'tf', q:'Dacă promptul a fost bun, poți trimite e-mailul generat de AI fără să-l citești.', answer:false,
      explain:'Un prompt bun reduce greșelile, dar nu le elimină. Modelul poate schimba un nume, poate rotunji o cifră sau poate adăuga o promisiune. E-mailul pleacă în numele tău sau al organizației, așa că îl citești integral înainte de trimitere, mai ales când conține date, sume sau angajamente.'},
    {t:'recap', points:['AI-ul scrie prima variantă, schimbă tonul și simplifică limbajul.','Verifici mereu: nume, date, sume, promisiuni, ton, destinatar.','Restricțiile din prompt („nu promite…”) sunt la fel de importante ca instrucțiunile.']}
  ]},
  { id: 'm4l2', title: 'Rezumate și documente lungi', steps: [
    {t:'info', title:'Citește mai repede, fără să pierzi esențialul', guide:'Parcurge fluxul de lucru cu un document lung.',
      body:'Poți încărca un document (PDF, Word) sau lipi un text și cere un rezumat, ideile principale, termenele sau obligațiile. Economisești mult timp la rapoarte, regulamente, legislație sau procese-verbale, cu condiția să lucrezi metodic.',
      visual:{type:'steps', items:[
        {icon:'📤', label:'Încarci', text:'Încarci documentul, după ce te-ai asigurat că nu conține date care nu au voie să iasă din organizație.'},
        {icon:'🎯', label:'Ceri țintit', text:'Nu doar „rezumă”, ci „rezumă pentru angajații noi, cu termenele și obligațiile lor separat”.'},
        {icon:'📍', label:'Ceri trimiteri', text:'„Pentru fiecare idee, indică secțiunea sau pagina.” Așa verifici rapid.'},
        {icon:'🔍', label:'Verifici', text:'Deschizi documentul la punctele esențiale și confirmi că rezumatul spune același lucru.'}
      ]}},
    {t:'info', title:'Întrebări bune pentru un document', guide:'Atinge fiecare întrebare.',
      body:'În loc de un rezumat general, pune întrebări precise. Obții exact ce îți trebuie.',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'📅', label:'Termenele', text:'„Ce termene apar în document și cine trebuie să le respecte?”'},
        {icon:'📋', label:'Obligațiile', text:'„Ce obligații are un angajat obișnuit conform acestui regulament?”'},
        {icon:'🔄', label:'Schimbările', text:'„Ce s-a schimbat față de versiunea anterioară?” (le încarci pe amândouă)'},
        {icon:'❔', label:'Neclaritățile', text:'„Ce formulări sunt ambigue sau pot fi înțelese în mai multe feluri?”'},
        {icon:'🧒', label:'Pe înțeles', text:'„Explică secțiunea 3 pentru cineva fără pregătire juridică.”'},
        {icon:'📊', label:'Tabel', text:'„Pune principalele cerințe într-un tabel: cerință, responsabil, termen.”'}
      ]}},
    {t:'info', title:'Unde poate greși un rezumat', guide:'Știind asta, știi ce să verifici.',
      body:'Un rezumat poate omite o <b>excepție</b> importantă („cu excepția cazurilor în care…”), poate formula ceva <b>mai sigur</b> decât textul original sau poate <b>amesteca</b> informații din document cu ce „știa” modelul dinainte. La documentele foarte lungi, detaliile din mijloc sunt mai ușor de scăpat.',
      visual:{type:'compare',
        left:{icon:'✅', title:'Ce face bine', lines:['Structurează ideile','Scoate în evidență termenele','Explică pe înțeles','Economisește ore']},
        right:{icon:'⚠️', title:'Unde greșește', lines:['Omite excepții','Simplifică prea mult','Amestecă surse','Pierde detalii din mijloc']}}},
    {t:'mcq', q:'Care cerere de rezumat e cea mai utilă?', options:['„Rezumă.”','„Rezumă acest regulament în 5 puncte pentru angajații noi și listează separat termenele și obligațiile lor, cu pagina pentru fiecare.”','„Spune-mi dacă documentul e bun.”','„Citește și ține minte.”'], answer:1,
      feedback:['Prea general. Primești un rezumat care poate să nu conțină ce îți trebuie.','Exact. Public, lungime, ce să scoată în evidență și trimiteri pentru verificare.','Nu e o cerere de rezumat, iar „bun” nu are un criteriu.','Nu primești nimic util, iar modelul nu reține documentul pentru alte conversații.'],
      explain:'Cererea bună răspunde la patru întrebări: pentru cine e rezumatul, cât de lung, ce trebuie să iasă în evidență și cum verifici. Trimiterile la pagini transformă verificarea dintr-o recitire completă a documentului într-o verificare de câteva minute.'},
    {t:'sort', q:'Poți încărca documentul într-un chatbot public?', buckets:['👍 Da, e public sau fără date sensibile','⛔ Nu, conține date sensibile'], items:[
      {text:'Un regulament publicat pe site', b:0},{text:'Contractul unui client, cu datele lui', b:1},{text:'O lege din Monitorul Oficial', b:0},
      {text:'Dosarul medical al unui angajat', b:1},{text:'Raportul anual publicat al instituției', b:0},{text:'Evaluările de performanță ale colegilor', b:1}
    ], explain:'Documentele deja publice nu expun pe nimeni. Cele cu date personale, de sănătate sau despre evaluarea oamenilor nu ajung într-un chatbot public, chiar dacă vrei doar un rezumat. Pentru ele există două soluții: anonimizezi textul sau folosești instrumentul aprobat de organizație (modulul 6).'},
    {t:'tf', q:'Rezumatul făcut de AI conține mereu tot ce e important din document.', answer:false,
      explain:'Rezumatul e, prin definiție, o selecție, iar modelul poate alege greșit ce e important pentru tine. Cele mai des omise sunt excepțiile, condițiile și detaliile din mijlocul documentelor lungi. Pentru decizii, verifici întotdeauna în document punctele pe care te bazezi.'},
    {t:'recap', points:['Ceri rezumate țintite: pentru cine, cât de lungi, ce să scoată în evidență.','Ceri trimiteri la pagini, ca să verifici rapid.','Documentele cu date sensibile nu ajung în chatboturi publice.']}
  ]},
  { id: 'm4l3', title: 'Tabele, cifre și Excel', steps: [
    {t:'info', title:'Un ajutor răbdător pentru foi de calcul', guide:'Comută între cele două cereri.',
      body:'AI-ul te ajută să scrii formule, să înțelegi o formulă primită de la altcineva, să transformi un text dezordonat în tabel sau să găsești tendințe în date. Descrie-i unde sunt datele și ce rezultat vrei.',
      visual:{type:'toggle', options:[
        {label:'O formulă nouă', input:'În Excel, coloana B are data angajării. Vreau în coloana C vechimea în ani întregi, la data de azi.', output:'Poți folosi funcția DATEDIF, care calculează diferența dintre două date în ani întregi: =DATEDIF(B2;TODAY();"y"). Scrie formula în C2 și trage-o în jos. Dacă Excelul tău folosește virgula ca separator, înlocuiește „;” cu „,”. Dacă Excelul e în altă limbă, numele funcțiilor pot diferi, iar AI-ul ți le poate traduce.'},
        {label:'Explică o formulă', input:'Ce face formula =IF(C2>=5;"Da";"Nu")?', output:'Verifică dacă valoarea din C2 e cel puțin 5. Dacă da, afișează „Da”, altfel afișează „Nu”. De exemplu, dacă C2 e vechimea, formula îți spune cine are cel puțin 5 ani de vechime.'}
      ]}},
    {t:'info', title:'Cifrele se verifică mereu', guide:'Diferența asta e importantă.',
      body:'Un model de limbaj „scrie” cifrele ca pe orice alt text, deci poate greși calculele, mai ales pe cele lungi. Unele aplicații rulează în spate un mic program pentru calcule, ceea ce le face mult mai exacte, dar tot verifici câteva rânduri.<br><br><b>Regula:</b> AI-ul propune metoda, Excelul face calculul, tu verifici rezultatul.',
      visual:{type:'compare',
        left:{icon:'✍️', title:'Calcul „scris” în text', lines:['Arată corect','Poate greși la numere mari','Nu îți arată pașii','Îl verifici obligatoriu']},
        right:{icon:'🧮', title:'Calcul făcut în Excel', lines:['Formula e vizibilă','Se poate reverifica','Se actualizează singur','AI-ul doar ți-a scris formula']}}},
    {t:'info', title:'Ce altceva poți cere', guide:'Atinge fiecare idee.',
      body:'Câteva folosiri care economisesc mult timp:',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'🧹', label:'Curățare', text:'„Transformă lista asta, copiată dintr-un e-mail, într-un tabel cu coloanele Nume, Funcție, Telefon.”'},
        {icon:'🔎', label:'Tendințe', text:'„Ce observi în aceste vânzări lunare? Care sunt cele mai mari 3 variații și ce le-ar putea explica?”'},
        {icon:'🩹', label:'Erori', text:'„Formula mea dă #VALUE!. Iată formula și un exemplu de date. De ce?”'},
        {icon:'📈', label:'Grafice', text:'„Ce tip de grafic e potrivit ca să arăt evoluția bugetului pe 5 ani?”'}
      ]}},
    {t:'mcq', q:'Care cerere va produce cea mai utilă formulă?', options:['„Dă-mi o formulă.”','„În Excel, coloana B are data angajării. Vreau în coloana C vechimea în ani întregi, la data de azi.”','„Excel nu merge.”','„Fă-mi calculele.”'], answer:1,
      feedback:['AI-ul nu știe ce vrei să calculezi.','Exact. Spui unde sunt datele și ce rezultat vrei.','Nu descrie nici problema, nici datele.','Nu spune ce calcule și pe ce date.'],
      explain:'Pentru o formulă bună, AI-ul are nevoie de trei informații: unde sunt datele (coloana, rândul), cum arată ele (date calendaristice, numere, text) și ce rezultat vrei să obții. Cu un exemplu de două-trei rânduri, rezultatul e aproape întotdeauna corect din prima.'},
    {t:'mcq', q:'Un chatbot îți spune că totalul unei liste de 40 de facturi este 128.450 lei. Ce faci?', options:['Îl trec direct în raport','Pun lista în Excel, calculez cu SUM și compar','Îl întreb dacă e sigur','Rotunjesc la 128.000'], answer:1,
      feedback:['Riscant. Totalurile calculate în text pot fi greșite.','Exact. Excelul face calculul, tu compari.','Va spune probabil că e sigur, chiar dacă greșește.','Rotunjirea nu corectează o eventuală greșeală.'],
      explain:'La liste lungi de numere, un model de limbaj poate sări un rând sau poate greși o adunare, iar rezultatul arată la fel de convingător. Un calcul în Excel durează câteva secunde și îți dă certitudine. Dacă aplicația spune că a rulat cod pentru calcul, riscul e mai mic, dar un control rapid tot merită.'},
    {t:'match', q:'Potrivește situația cu cererea potrivită', pairs:[['Date scrise dezordonat','„Transformă lista într-un tabel cu coloanele…”'],['O formulă primită de la un coleg','„Explică-mi pas cu pas ce face formula…”'],['Un tabel mare de vânzări','„Ce tendințe observi în aceste date?”'],['O formulă care dă eroare','„Formula dă #VALUE!. De ce și cum o repar?”']],
      explain:'În toate cele patru cazuri, reușita depinde de cât de concret descrii situația. Lipește o mostră din date (fără informații personale), spune ce vrei să obții și, la erori, copiază exact mesajul de eroare.'},
    {t:'recap', points:['AI-ul scrie și explică formule, curăță date și găsește tendințe.','Calculele importante le face Excelul, nu textul chatbotului.','Descrii unde sunt datele, cum arată și ce rezultat vrei.']}
  ]},
  { id: 'm4l4', title: 'Idei, planuri și ședințe', steps: [
    {t:'info', title:'Partener de idei', guide:'Comută între cele două utilizări.',
      body:'AI-ul e un partener bun de brainstorming: îți dă rapid multe idei, dintre care alegi și dezvolți. E util și ca „sparring partner” înaintea unei discuții dificile.',
      visual:{type:'toggle', options:[
        {label:'Brainstorming', input:'Dă-mi 5 idei pentru a crește participarea la consultările publice din comuna noastră.', output:'1. Consultări scurte, de 30 de minute, după programul de lucru. 2. Formular online simplu, cu 3 întrebări. 3. Anunțuri la școală și la dispensar. 4. Un rezumat pe o pagină al proiectului discutat. 5. Răspuns public la propunerile primite, ca oamenii să vadă că sunt ascultați.'},
        {label:'Pregătire ședință', input:'Joacă rolul celui mai critic membru al consiliului. Ce întrebări grele mi-ai pune despre bugetul pentru parc?', output:'1. De ce acum și nu după reparația drumurilor? 2. Ce costuri de întreținere anuale ați estimat? 3. Cine a fost consultat? 4. Ce se întâmplă dacă licitația iese mai scumpă? 5. Cum măsurăm dacă parcul e folosit?'}
      ]}},
    {t:'info', title:'Transcrieri și note de ședință', guide:'Util, dar cu câteva reguli.',
      body:'Multe aplicații de videoconferință pot transcrie ședințele și pot genera rezumate sau liste de sarcini. Înainte să folosești o astfel de funcție: <b>informează participanții</b>, respectă regulile organizației și evită ședințele în care se discută date sensibile. Lista de sarcini generată o verifici: responsabilii și termenele pot fi atribuite greșit.',
      visual:{type:'compare',
        left:{icon:'✅', title:'Bine de știut', lines:['Economisește timpul notițelor','Ajută pe cine a lipsit','Creează rapid lista de sarcini']},
        right:{icon:'⚠️', title:'Atenție la', lines:['Acordul participanților','Discuțiile confidențiale','Responsabili atribuiți greșit']}}},
    {t:'info', title:'Profesor răbdător', guide:'Poate cea mai subestimată folosire.',
      body:'AI-ul îți poate explica orice subiect nou, la nivelul tău, fără să te judece: „explică-mi ca unui începător ce este o achiziție directă”, apoi „dă-mi un exemplu”, apoi „verifică-mă cu 3 întrebări”. Ce e important (o regulă, o procedură) confirmi apoi din sursa oficială sau cu un coleg specialist.'},
    {t:'sort', q:'Bine de delegat AI-ului sau păstrezi tu?', buckets:['🤖 Bine de delegat AI-ului','🧑 Păstrezi tu'], items:[
      {text:'Idei de titluri pentru newsletter', b:0},{text:'Prima schiță a unui plan de proiect', b:0},{text:'Decizia finală privind bugetul', b:1},
      {text:'Întrebări de pregătire pentru un interviu', b:0},{text:'Feedbackul final pentru un angajat', b:1},{text:'Un mesaj de condoleanțe către un coleg', b:1}
    ], explain:'AI-ul e excelent la munca pregătitoare: idei, schițe, întrebări. Deciziile, evaluarea oamenilor și mesajele profund personale rămân la tine: primele pentru că îți asumi consecințele, ultimele pentru că valoarea lor stă tocmai în faptul că vin de la tine.'},
    {t:'mcq', q:'Care folosire a AI-ului la birou e cea mai riscantă?', options:['Idei de titluri pentru newsletter','Corectarea gramaticală a unui anunț public','Lipirea contractelor clienților, cu nume și CNP-uri, într-un chatbot gratuit','Explicarea unui termen tehnic'], answer:2,
      feedback:['Risc foarte mic. În cel mai rău caz, ideile nu sunt bune.','Risc mic. Anunțul e oricum public, iar corectura o verifici.','Exact. Datele personale ale clienților ajung la un furnizor extern, fără temei și fără garanții.','Risc mic, mai ales dacă verifici explicația.'],
      explain:'Riscul nu vine din sarcina în sine, ci din datele implicate. Un chatbot gratuit, pentru uz personal, nu e un loc potrivit pentru datele clienților: pot fi stocate, pot fi folosite la antrenare în funcție de setări, iar organizația poate încălca GDPR. Modulul 6 îți arată cum anonimizezi textele.'},
    {t:'tf', q:'Participanții trebuie informați înainte ca o ședință să fie înregistrată și transcrisă cu AI.', answer:true,
      explain:'Înregistrarea și transcrierea înseamnă prelucrarea vocii și a opiniilor oamenilor, adică a unor date personale. Informarea participanților e o chestiune de respect și, de cele mai multe ori, o obligație legală. Multe aplicații afișează automat un anunț, dar e bine să o spui și tu la începutul ședinței.'},
    {t:'recap', points:['AI-ul e bun pentru idei, schițe, pregătirea ședințelor și învățare.','Transcrierile cer informarea participanților și verificarea sarcinilor.','Deciziile și mesajele personale rămân la tine.']}
  ]}
  ]
},
{
  id: 'm5', title: 'Când AI-ul greșește', zone: 'Mlaștina iluziilor', subtitle: 'Halucinații, verificare, prejudecăți', color: '#E0457B', icon: 'alert',
  lessons: [
  { id: 'm5l1', title: 'Halucinațiile', steps: [
    {t:'info', title:'Invenții spuse cu încredere', guide:'Atinge fiecare tip de halucinație.',
      body:'O <b>halucinație</b> este o informație inventată de AI și prezentată cu încredere, ca și cum ar fi adevărată. Nu e o minciună intenționată: modelul nu știe că a inventat. Apare cel mai des la detaliile precise.',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'⚖️', label:'Legi inventate', text:'Un număr de lege, un articol sau o hotărâre care nu există, ori există, dar spune altceva.'},
        {icon:'💬', label:'Citate false', text:'Fraze atribuite unor persoane reale, care nu le-au spus niciodată.'},
        {icon:'📚', label:'Surse inexistente', text:'Cărți, studii sau articole cu titluri și autori plauzibili, dar inventați.'},
        {icon:'🔢', label:'Cifre', text:'Procente și statistici „dintr-un studiu recent”, fără sursă reală.'},
        {icon:'🧑', label:'Nume și funcții', text:'Cine conduce o instituție, cine a scris un raport, cine a câștigat un premiu.'},
        {icon:'🔗', label:'Linkuri', text:'Adrese web care arată corect, dar duc la o pagină inexistentă sau la alt conținut.'}
      ]}},
    {t:'info', title:'De ce inventează', guide:'Legătura cu ce ai învățat în modulul 2.',
      body:'Modelul produce text <b>plauzibil</b>, nu text <b>verificat</b>. Când nu are informația, nu se oprește în mod natural. Continuă cu ce „sună” potrivit: un număr de lege are forma „Legea nr. X/an”, așa că produce un număr și un an.<br><br>Modelele noi greșesc mai rar decât cele vechi, iar unele recunosc mai des că nu știu, dar problema nu a dispărut.',
      visual:{type:'compare',
        left:{icon:'✍️', title:'Ce face modelul', lines:['Produce text care sună corect','Respectă forma unei legi, a unui citat','Scrie la fel de sigur și când nu știe']},
        right:{icon:'🚫', title:'Ce nu face', lines:['Nu verifică în realitate','Nu știe când inventează','Nu te avertizează mereu']}}},
    {t:'info', title:'Un caz real', guide:'Se întâmplă și profesioniștilor.',
      body:'În 2023, în Statele Unite, doi avocați au depus la instanță un document care cita hotărâri judecătorești inventate de ChatGPT. Hotărârile aveau nume de părți, numere de dosar și citate, toate plauzibile și toate false. Avocații au fost amendați de judecător.<br><br>Lecția nu e „nu folosi AI”, ci „<b>nu folosi ce nu ai verificat</b>”.'},
    {t:'spot', q:'Detectivul de halucinații: atinge afirmațiile care trebuie verificate', segments:['', {p:'Conform Legii nr. 482/2019', hit:true}, ', instituțiile publice trebuie să numească un responsabil AI. ', {p:'Un studiu Harvard din 2023 arată că 87% dintre angajați', hit:true}, ' folosesc zilnic AI. ', {p:'AI-ul poate ajuta la redactarea documentelor', hit:false}, ', dar ', {p:'textul trebuie verificat de un om', hit:false}, '.'],
      explain:'Numărul legii și studiul cu procent sunt exact tipurile de detalii precise la care apar halucinațiile: arată credibil, dar pot fi inventate. În acest exemplu, legea este inventată. Celelalte două afirmații sunt generale și adevărate, deci nu cer verificare specială.'},
    {t:'mcq', q:'AI-ul îți spune: „Conform Legii nr. 482/2019, instituțiile trebuie să numească un responsabil AI.” Ce faci?', options:['O copiez în raport','Caut legea pe portalul legislativ oficial înainte să o folosesc','O folosesc, pentru că are număr și an, deci pare exactă','O trimit colegilor ca noutate'], answer:1,
      feedback:['Riscant. Dacă legea e inventată, greșeala devine a ta.','Exact. Câteva minute de verificare te scapă de o greșeală publică.','Numărul și anul dau o aparență de exactitate, nu o garanție.','Ai răspândi o informație neverificată.'],
      explain:'Detaliile precise (număr, an, articol) par dovezi, dar pentru un model sunt doar forme plauzibile de text. Pe portalul legislativ oficial (legislatie.just.ro) verifici în câteva minute dacă legea există și ce spune. Legea din exemplu este inventată.'},
    {t:'tf', q:'Dacă AI-ul răspunde foarte sigur pe el, informația e cu siguranță corectă.', answer:false,
      explain:'Tonul e parte din stilul pe care modelul l-a învățat: textele bune „sună” sigur, așa că și răspunsurile lui sună sigur. Nu există o legătură între cât de sigur pare un răspuns și cât de corect este. Unele aplicații spun mai des „nu sunt sigur”, dar nu te poți baza pe asta.'},
    {t:'recap', points:['Halucinația e o informație inventată, spusă cu încredere.','Apare cel mai des la legi, citate, surse, cifre, nume și linkuri.','Modelul produce text plauzibil, nu verificat, deci verificarea e treaba ta.']}
  ]},
  { id: 'm5l2', title: 'Cum verifici', steps: [
    {t:'info', title:'Verificarea în patru pași', guide:'Parcurge pașii.',
      body:'Verificarea nu trebuie să fie complicată. Un flux simplu, repetat, devine obicei.',
      visual:{type:'steps', items:[
        {icon:'🔎', label:'Identifici', text:'Marchezi afirmațiile precise: cifre, date, legi, nume, citate.'},
        {icon:'📎', label:'Ceri sursa', text:'Întrebi AI-ul de unde provine fiecare afirmație. Dacă nu poate da o sursă concretă, e un semnal.'},
        {icon:'🌐', label:'Deschizi sursa', text:'Deschizi tu pagina și verifici că spune exact același lucru, nu doar ceva asemănător.'},
        {icon:'🧑‍⚖️', label:'Confirmi', text:'Pentru decizii importante, confirmi cu un specialist: jurist, contabil, medic.'}
      ]}},
    {t:'info', title:'Unde verifici în România', guide:'Atinge fiecare sursă.',
      body:'Pentru informațiile oficiale, mergi direct la sursă, nu la un rezumat de pe un site oarecare.',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'⚖️', label:'legislatie.just.ro', text:'Portalul legislativ al Ministerului Justiției: legi, ordonanțe, hotărâri, în forma lor actualizată.'},
        {icon:'🇪🇺', label:'eur-lex.europa.eu', text:'Legislația Uniunii Europene, inclusiv regulamentele care se aplică direct în România.'},
        {icon:'🧾', label:'anaf.ro', text:'Taxe, impozite, declarații, termene fiscale.'},
        {icon:'📊', label:'insse.ro', text:'Institutul Național de Statistică: date oficiale despre populație, economie, prețuri.'},
        {icon:'🏛️', label:'Site-urile instituțiilor', text:'Ministere, agenții, primării: proceduri, formulare, programe.'},
        {icon:'📰', label:'Presă de încredere', text:'Pentru evenimente recente, mai multe surse jurnalistice serioase, nu una singură.'}
      ]}},
    {t:'info', title:'Regula proporției', guide:'Mută glisorul.',
      body:'Nu verifici totul la fel. Cu cât consecințele unei greșeli sunt mai mari, cu atât verifici mai atent.',
      visual:{type:'slider', label:'Cât de grave sunt consecințele unei greșeli?', barLabel:'Verificare necesară', stops:[
        {label:'Mici', bar:10, caption:'Idei de titluri, sugestii de formulare. Alegi ce îți place, fără verificare specială.'},
        {label:'Medii', bar:45, caption:'Rezumatul unui document intern. Verifici punctele esențiale în document.'},
        {label:'Mari', bar:80, caption:'Un termen legal, o sumă într-un contract. Verifici în sursa oficială.'},
        {label:'Foarte mari', bar:100, caption:'Sănătate, drepturile oamenilor, bani importanți. Verifici în sursa oficială și confirmi cu un specialist.'}
      ]}},
    {t:'order', q:'Pune în ordine pașii de verificare a unei informații importante', items:['Identifici afirmațiile precise (cifre, legi, nume)','Ceri AI-ului sursa fiecăreia','Deschizi sursa și verifici că spune același lucru','Pentru decizii importante, confirmi cu un specialist'],
      explain:'Ordinea contează: întâi știi ce verifici, apoi găsești sursa, apoi o citești tu. Pasul trei e cel mai des sărit, pentru că un link „arată” ca o dovadă. Dar abia când deschizi pagina vezi dacă spune exact ce a afirmat AI-ul.'},
    {t:'mcq', q:'AI-ul îți dă un link ca sursă. Deschizi pagina, iar ea vorbește despre alt subiect. Ce concluzie tragi?', options:['Sursa e bună, doar pagina s-a schimbat','Afirmația nu e susținută de sursă, o tratez ca neverificată','Caut pe aceeași pagină până găsesc ceva asemănător','Linkul oricum nu contează'], answer:1,
      feedback:['Posibil, dar nu ai de unde ști. Până nu găsești confirmarea, afirmația rămâne neverificată.','Exact. O sursă care nu confirmă afirmația nu e o sursă.','Riscant. Ajungi să interpretezi forțat un text care nu spune asta.','Contează: e singura cale de verificare.'],
      explain:'Modelele pot genera linkuri plauzibile sau pot asocia greșit o afirmație cu o pagină reală. Regula e simplă: o afirmație e verificată doar când ai citit-o chiar tu, în sursă, formulată la fel. Altfel, o cauți într-o sursă oficială sau renunți la ea.'},
    {t:'match', q:'Cât verifici? Potrivește situația', pairs:[['Idei de titlu pentru un afiș','Nu e nevoie de verificare'],['Termenul de depunere al unei declarații','Verifici pe site-ul oficial'],['Rezumatul unui document intern','Verifici esențialul în document'],['Interpretarea unei clauze din contract','Confirmi cu un jurist']],
      explain:'Regula proporției face verificarea sustenabilă: nu pierzi timp cu lucrurile mărunte, dar nu riști în cele importante. Cu cât o greșeală ar costa mai mult (bani, drepturi, reputație), cu atât sursa trebuie să fie mai oficială.'},
    {t:'recap', points:['Fluxul: identifici, ceri sursa, deschizi sursa, confirmi.','Pentru informații oficiale mergi direct la sursele oficiale.','Cu cât consecințele sunt mai mari, cu atât verifici mai atent.']}
  ]},
  { id: 'm5l3', title: 'Prejudecăți (bias)', steps: [
    {t:'info', title:'AI-ul preia stereotipuri', guide:'Compară ce a văzut modelul cu ce presupune apoi.',
      body:'AI-ul învață din texte și date produse de oameni, cu tot cu stereotipurile lor. Dacă în datele de antrenare inginerii sunt mai des bărbați, modelul poate presupune că un inginer e bărbat. Se numește <b>prejudecată</b> sau, în engleză, <b>bias</b>.',
      visual:{type:'compare',
        left:{icon:'📚', title:'Ce a văzut în date', lines:['Mai mulți ingineri bărbați','Mai multe asistente femei','Anumite nume asociate cu anumite joburi']},
        right:{icon:'🤖', title:'Ce presupune apoi', lines:['„Inginerul… el”','„Asistenta… ea”','Evaluări diferite pentru CV-uri identice']}}},
    {t:'info', title:'Un caz cunoscut', guide:'De ce contează la recrutare.',
      body:'În 2018, agenția Reuters a relatat că o mare companie de tehnologie renunțase la un instrument AI de triere a CV-urilor. Fusese antrenat pe CV-urile primite în anii anteriori, venite mai ales de la bărbați, și ajunsese să dezavantajeze CV-urile care menționau activități „pentru femei”.<br><br>Nimeni nu îl programase să discrimineze. A învățat tiparul din date.'},
    {t:'info', title:'Ce poți face', guide:'Trei obiceiuri simple.',
      body:'<b>Observă</b> dezechilibrele: toate exemplele sunt despre același tip de om? <b>Cere explicit</b> diversitate: „dă-mi exemple variate ca gen, vârstă și regiune”. <b>Nu lăsa AI-ul să decidă singur</b> despre oameni: la angajare, evaluare sau beneficii, un om analizează și decide. De aceea AI Act tratează aceste utilizări ca fiind cu <b>risc ridicat</b> (modulul 7).'},
    {t:'sort', q:'Unde e nevoie de atenție specială la prejudecăți?', buckets:['⚠️ Atenție specială','🙂 Risc mic'], items:[
      {text:'Trierea CV-urilor', b:0},{text:'Evaluarea performanței angajaților', b:0},{text:'Idei de titluri pentru un articol', b:1},
      {text:'Corectura gramaticală a unui text', b:1},{text:'Aprobarea unui credit', b:0},{text:'Traducerea unui meniu', b:1}
    ], explain:'Atenția specială e necesară acolo unde rezultatul afectează direct o persoană: un loc de muncă, o evaluare, un credit. Acolo, o prejudecată din date devine o nedreptate reală. La sarcinile fără impact asupra unor oameni anume, riscul e mic.'},
    {t:'mcq', q:'Ceri 5 exemple de „manageri de succes” și primești doar bărbați de peste 50 de ani. Ce faci?', options:['Accepți, așa arată datele','Observi dezechilibrul și ceri explicit exemple diverse','Nu mai folosești AI','Ignori, e o problemă tehnică fără importanță'], answer:1,
      feedback:['Datele reflectă trecutul, nu realitatea completă și nici ce vrei să transmiți.','Exact. Să observi e primul pas, să ceri explicit e al doilea.','Nu e nevoie. Problema se corectează ușor dacă o observi.','Dacă materialul ajunge public, transmite un stereotip.'],
      explain:'Modelul a reprodus ce a întâlnit cel mai des în date. Dacă folosești aceste exemple într-o prezentare sau un curs, transmiți mai departe stereotipul. O cerere explicită („exemple variate ca gen, vârstă, domeniu și țară”) corectează rezultatul în câteva secunde.'},
    {t:'tf', q:'Pentru că e o mașină, AI-ul este automat neutru și obiectiv.', answer:false,
      explain:'AI-ul este atât de neutru cât sunt datele din care a învățat, iar datele reflectă istoria și obiceiurile oamenilor, cu dezechilibrele lor. În plus, pare obiectiv tocmai pentru că e o mașină, așa că prejudecățile lui sunt mai greu de observat decât ale unui om.'},
    {t:'recap', points:['AI-ul preia stereotipurile din datele de antrenare.','Riscul e mare când rezultatul afectează direct oameni: angajare, evaluare, credit.','Observi, ceri diversitate explicit și nu lași AI-ul să decidă singur despre oameni.']}
  ]},
  { id: 'm5l4', title: 'Omul rămâne responsabil', steps: [
    {t:'info', title:'Asistent, nu decident', guide:'Parcurge ciclul folosirii responsabile.',
      body:'Când semnezi un document, trimiți un e-mail sau iei o decizie, <b>responsabilitatea e a ta</b>, nu a instrumentului. „Așa a zis ChatGPT” nu este o justificare acceptată nici de șef, nici de un client, nici de o instanță.',
      visual:{type:'steps', items:[
        {icon:'🤖', label:'AI-ul propune', text:'Ciorne, idei, rezumate, variante.'},
        {icon:'🔍', label:'Omul verifică', text:'Faptele, cifrele, tonul, potrivirea cu situația reală.'},
        {icon:'🧑‍⚖️', label:'Omul decide', text:'Ce se păstrează, ce se schimbă, ce se trimite.'},
        {icon:'✍️', label:'Omul își asumă', text:'Semnează, trimite și răspunde pentru rezultat.'}
      ]}},
    {t:'info', title:'Capcana încrederii automate', guide:'Se întâmplă tuturor, mai ales când suntem grăbiți.',
      body:'Când un instrument are dreptate de multe ori la rând, începem să nu-l mai verificăm. Fenomenul se numește <b>încredere automată</b> (automation bias) și e cu atât mai puternic cu cât suntem mai obosiți sau mai grăbiți.<br><br>Antidotul: verificări scurte, dar <b>obligatorii</b>, la lucrurile importante, chiar și când „a mers bine de fiecare dată”.'},
    {t:'info', title:'Transparența', guide:'Atinge fiecare situație.',
      body:'În multe situații e corect să spui că ai folosit AI. Verifică și regulile organizației tale: unele cer explicit acest lucru.',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'🎓', label:'În educație', text:'Lucrări, teme, cercetare: regulile școlii sau ale universității spun ce e permis și cum declari folosirea AI.'},
        {icon:'📢', label:'Comunicare publică', text:'Texte publicate în numele unei instituții: cineva trebuie să-și asume conținutul.'},
        {icon:'🖼️', label:'Imagini și video', text:'Conținutul generat sau modificat cu AI care pare real trebuie semnalat. AI Act cere acest lucru.'},
        {icon:'🏢', label:'La serviciu', text:'Unele organizații cer să menționezi când un document a fost pregătit cu AI.'}
      ]}},
    {t:'mcq', q:'Un coleg a trimis un răspuns oficial cu o informație greșită generată de AI. Cine răspunde?', options:['Compania care a creat AI-ul','Colegul și instituția care au trimis răspunsul','Nimeni, a greșit o mașină','Cetățeanul, pentru că nu a verificat'], answer:1,
      feedback:['Furnizorul nu răspunde pentru felul în care folosești textele generate.','Exact. Cine folosește instrumentul răspunde pentru ce trimite.','Răspunsul a plecat în numele unor oameni și al unei instituții.','Cetățeanul are dreptul să se bazeze pe un răspuns oficial.'],
      explain:'Instrumentul nu are responsabilitate juridică sau profesională. Răspunsul oficial poartă semnătura unei instituții și a unui om, iar consecințele (corectare, reclamație, sancțiune) sunt ale lor. Tocmai de aceea verificarea înainte de trimitere nu e opțională.'},
    {t:'mcq', q:'AI-ul a verificat de 20 de ori corect contracte pentru tine. La al 21-lea spune „totul e în regulă”. Ce faci?', options:['Îl semnez, a avut dreptate de fiecare dată','Fac verificarea mea obișnuită a clauzelor esențiale','Nu mai folosesc AI pentru contracte','Îl rog să verifice de două ori'], answer:1,
      feedback:['Aceasta e exact capcana încrederii automate.','Exact. Verificarea scurtă, dar obligatorie, te protejează.','Nu e nevoie să renunți. E nevoie să păstrezi controlul.','A doua verificare a aceluiași instrument poate repeta aceeași greșeală.'],
      explain:'Faptul că un instrument a avut dreptate de multe ori nu garantează că are dreptate acum, mai ales dacă un contract are o clauză neobișnuită. Păstrează o listă scurtă de verificări (părți, sume, termene, penalități, reziliere) pe care o faci de fiecare dată, indiferent ce spune AI-ul.'},
    {t:'flip', q:'Mit sau realitate? Întoarce fiecare cartonaș', cards:[
      {front:'„Dacă AI-ul a greșit, e vina lui.”', tag:'Mit', back:'Responsabilitatea rămâne a omului și a organizației care folosesc textul.'},
      {front:'„Cu cât am mai multă încredere, cu atât verific mai puțin.”', tag:'Realitate', back:'E capcana încrederii automate. De aceea verificările importante rămân obligatorii.'},
      {front:'„Conținutul generat care pare real trebuie semnalat.”', tag:'Realitate', back:'AI Act cere semnalarea deepfake-urilor și a anumitor texte generate.'},
      {front:'„Dacă folosesc AI, nu mai trebuie să înțeleg subiectul.”', tag:'Mit', back:'Fără să înțelegi subiectul, nu poți observa greșelile.'}
    ]},
    {t:'recap', points:['AI-ul propune, omul verifică, decide și își asumă.','Încrederea automată e o capcană: verificările importante rămân obligatorii.','Transparența despre folosirea AI e adesea corectă și uneori obligatorie.']}
  ]}
  ]
},
{
  id: 'm6', title: 'Datele tale și siguranța', zone: 'Fortăreața datelor', subtitle: 'Ce scrii, ce nu scrii, cum te protejezi', color: '#7C4DDB', icon: 'shield',
  lessons: [
  { id: 'm6l1', title: 'Ce nu scrii într-un chatbot', steps: [
    {t:'info', title:'Drumul datelor tale', guide:'Parcurge drumul unui mesaj.',
      body:'Ce scrii într-un chatbot nu rămâne în calculatorul tău. Pleacă pe serverele furnizorului și, în funcție de setări și de tipul contului, poate fi păstrat o perioadă, analizat pentru verificări de siguranță sau folosit la antrenarea modelelor viitoare.',
      visual:{type:'steps', items:[
        {icon:'⌨️', label:'Scrii', text:'Mesajul și documentele încărcate pleacă de pe dispozitivul tău.'},
        {icon:'🏢', label:'Serverele furnizorului', text:'Sunt procesate pe serverele companiei care oferă serviciul, adesea în afara României.'},
        {icon:'🗄️', label:'Stocare', text:'Conversațiile pot fi păstrate o perioadă, chiar și după ce le ștergi din listă, conform politicii furnizorului.'},
        {icon:'🧪', label:'Posibilă folosire', text:'În funcție de setări, pot fi citite pentru verificări de siguranță sau folosite la antrenare.'}
      ]}},
    {t:'info', title:'Lista neagră', guide:'Atinge fiecare categorie.',
      body:'<b>Regula simplă:</b> nu scrie într-un chatbot nimic ce n-ai trimite pe e-mail unei firme externe. În special, nu pui în instrumente neaprobate:',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'🪪', label:'Date de identificare', text:'CNP, serie de buletin, adresă, telefon, e-mail personal, ale tale sau ale altora.'},
        {icon:'🩺', label:'Date despre sănătate', text:'Diagnostice, tratamente, concedii medicale. Sunt date cu protecție specială în GDPR.'},
        {icon:'💳', label:'Date financiare', text:'Numere de card, conturi bancare, salarii individuale, datorii.'},
        {icon:'🔑', label:'Parole și coduri', text:'Parole, coduri de acces, chei de API. Niciodată, sub nicio formă.'},
        {icon:'📁', label:'Documente confidențiale', text:'Contracte nesemnate, oferte, strategii, documente clasificate sau „uz intern”.'},
        {icon:'🧒', label:'Date despre copii', text:'Orice informație care identifică un copil: nume, școală, situație familială.'}
      ]}},
    {t:'info', title:'De ce contează și legal', guide:'Nu e doar o chestiune de prudență.',
      body:'Când introduci datele personale ale altor oameni (cetățeni, clienți, colegi) într-un instrument extern, organizația ta le <b>prelucrează</b> și le <b>transmite</b> unei terțe părți. Fără un temei legal și fără un contract potrivit cu furnizorul, asta poate încălca GDPR și regulile interne, chiar dacă intenția ta era bună.'},
    {t:'mcq', q:'Ce informație poți pune fără griji într-un chatbot public?', options:['CNP-ul și adresa unui cetățean','Parola contului de e-mail','Un text public de pe site-ul instituției, pentru rezumat','Diagnosticul medical al unui coleg'], answer:2,
      feedback:['Date de identificare ale unei persoane: nu.','Niciodată, în niciun instrument.','Exact. Informația deja publică nu expune pe nimeni.','Date de sănătate, cu protecție specială: nu.'],
      explain:'Testul simplu: informația e deja publică sau nu identifică pe nimeni? Atunci o poți folosi. Dacă identifică o persoană, e secretă sau aparține organizației, fie o anonimizezi, fie folosești instrumentul aprobat de organizație, fie nu o folosești deloc.'},
    {t:'tf', q:'Dacă ștergi conversația, datele dispar sigur și complet de pe serverele furnizorului.', answer:false,
      explain:'Ștergerea din listă nu înseamnă întotdeauna ștergere imediată de pe servere. Mulți furnizori păstrează datele o perioadă, de exemplu pentru verificări de siguranță sau obligații legale. Politica diferă de la un furnizor la altul, așa că regula sigură rămâne: nu introduci de la început ce nu trebuie să ajungă acolo.'},
    {t:'sort', q:'Poți scrie asta într-un chatbot public?', buckets:['👍 Da','⛔ Nu'], items:[
      {text:'„Explică-mi ce este o achiziție directă.”', b:0},{text:'„Rezumă contractul lui Ion Popescu, CNP…”', b:1},{text:'„Corectează acest anunț public.”', b:0},
      {text:'„Parola mea e… de ce nu merge?”', b:1},{text:'„Colega mea are depresie, cum îi scriu?”, cu numele ei', b:1},{text:'„Dă-mi idei de activități pentru o ședință.”', b:0}
    ], explain:'Întrebările generale, textele publice și cererile de idei nu expun pe nimeni. Datele de identificare, parolele și informațiile de sănătate despre o persoană numită nu își au locul acolo. La ultima situație delicată, poți cere sfaturi fără să numești persoana și fără detalii care o identifică.'},
    {t:'recap', points:['Ce scrii pleacă pe serverele furnizorului și poate fi păstrat.','Lista neagră: identificare, sănătate, finanțe, parole, documente confidențiale, copii.','Datele altor oameni introduse în instrumente externe pot încălca GDPR.']}
  ]},
  { id: 'm6l2', title: 'Anonimizarea', steps: [
    {t:'info', title:'Păstrezi problema, scoți persoana', guide:'Compară textul original cu cel anonimizat.',
      body:'Poți folosi AI-ul și pentru cazuri reale, dacă scoți tot ce identifică persoana. Înlocuiești numele cu un rol („Cetățeanul A”), scoți CNP-ul, adresa, numărul de dosar și schimbi detaliile care ar trăda despre cine e vorba. AI-ul are nevoie de problemă, nu de identitatea omului.',
      visual:{type:'compare',
        left:{icon:'📄', title:'Original', lines:['Maria Ionescu, 67 de ani','str. Teilor nr. 8, Pitești','CNP 2570314…','Dosar nr. 1245/2026','Cere amânarea plății taxei']},
        right:{icon:'🕶️', title:'Anonimizat', lines:['O pensionară','Din județ','(eliminat)','(eliminat)','Cere amânarea plății taxei']}}},
    {t:'info', title:'Identificatori direcți și indirecți', guide:'Atinge fiecare tip.',
      body:'Unele informații identifică direct o persoană. Altele o identifică doar puse împreună. Pe amândouă le verifici.',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'🪪', label:'Direcți', text:'Nume, CNP, telefon, e-mail, adresă, număr de dosar, număr de înmatriculare.'},
        {icon:'🧩', label:'Indirecți', text:'Funcție rară, vârstă exactă, localitate mică, dată precisă a unui eveniment.'},
        {icon:'➕', label:'Combinațiile', text:'„Singurul medic veterinar din comuna X, 45 de ani” identifică o persoană fără niciun nume.'},
        {icon:'🖼️', label:'Imaginile', text:'Fotografiile, capturile de ecran și documentele scanate pot conține nume, semnături sau fețe.'}
      ]}},
    {t:'info', title:'Tehnica, pe scurt', guide:'Patru mișcări care devin obicei.',
      body:'<b>Înlocuiești</b> numele cu roluri („clientul”, „angajatul A”). <b>Elimini</b> identificatorii direcți. <b>Generalizezi</b> detaliile: „67 de ani” devine „pensionară”, „Pitești” devine „un oraș”. <b>Păstrezi</b> doar ce e necesar pentru sarcină. Dacă sarcina nu se poate face fără datele reale, folosești instrumentul aprobat de organizație.'},
    {t:'spot', q:'Anonimizatorul: atinge toate datele care identifică persoana', segments:['', {p:'Doamna Maria Popescu', hit:true}, ', ', {p:'CNP 2750314…', hit:true}, ', ', {p:'din str. Teilor nr. 8, Pitești', hit:true}, ', ', {p:'a solicitat amânarea plății', hit:false}, ' deoarece ', {p:'este internată la Spitalul Județean', hit:true}, '. ', {p:'Solicitarea a fost primită luni', hit:false}, '.'],
      explain:'Numele, CNP-ul și adresa sunt identificatori direcți. Internarea în spital e o informație despre sănătate, cu protecție specială, și în plus ajută la identificare. Ce rămâne (cererea de amânare și ziua primirii) e suficient ca AI-ul să te ajute să formulezi un răspuns.'},
    {t:'mcq', q:'Care variantă e anonimizată corect?', options:['„Ion Popescu, CNP 1850101…, din str. Florilor 3, a depus o plângere.”','„Un locuitor din cartier a depus o plângere privind zgomotul.”','„Ion P., str. Florilor 3, a depus o plângere.”','„Domnul Popescu de la nr. 3 a depus o plângere.”'], answer:1,
      feedback:['Conține toți identificatorii direcți.','Exact. Păstrează problema, fără să se poată afla despre cine e vorba.','Inițiala plus adresa exactă identifică persoana.','Numele de familie plus numărul casei sunt suficiente pentru identificare.'],
      explain:'Anonimizarea înseamnă că nimeni care citește textul nu poate afla despre cine e vorba, nici măcar combinând detaliile. Inițialele și adresele parțiale nu sunt suficiente. Varianta corectă păstrează doar ce e necesar pentru sarcină: tipul plângerii.'},
    {t:'tf', q:'Contează doar numele. Restul detaliilor nu pot identifica o persoană.', answer:false,
      explain:'Vârsta, funcția, localitatea și data unui eveniment, puse împreună, pot identifica o persoană la fel de sigur ca un nume, mai ales în comunități mici. GDPR tratează drept date personale orice informație care permite identificarea, direct sau indirect.'},
    {t:'recap', points:['Păstrezi problema, scoți persoana.','Verifici atât identificatorii direcți, cât și combinațiile de detalii.','Tehnica: înlocuiești, elimini, generalizezi, păstrezi doar ce e necesar.']}
  ]},
  { id: 'm6l3', title: 'Conturi, setări și reguli', steps: [
    {t:'info', title:'Cont personal sau cont de organizație', guide:'Compară cele două tipuri.',
      body:'Același instrument poate avea reguli foarte diferite în funcție de tipul contului. Versiunile pentru organizații vin, de obicei, cu garanții contractuale suplimentare privind datele.',
      visual:{type:'compare',
        left:{icon:'🙋', title:'Cont personal (gratuit)', lines:['Conversațiile pot fi folosite la antrenare, în funcție de setări','Tu accepți termenii','Fără contract cu organizația ta','Potrivit pentru uz personal']},
        right:{icon:'🏢', title:'Cont de organizație', lines:['De regulă, datele nu sunt folosite la antrenare','Contract și garanții pentru date','Administrat de IT','Potrivit pentru munca de zi cu zi']}}},
    {t:'info', title:'Setările care contează', guide:'Atinge fiecare setare. Le găsești de obicei la Setări, secțiunea Date sau Confidențialitate.',
      body:'Merită să petreci cinci minute în setările aplicației pe care o folosești.',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'🧪', label:'Folosire la antrenare', text:'Multe aplicații îți permit să oprești folosirea conversațiilor pentru îmbunătățirea modelelor.'},
        {icon:'🕓', label:'Istoricul', text:'Poți alege dacă păstrezi conversațiile sau folosești un mod temporar.'},
        {icon:'🧠', label:'Memoria', text:'Funcția care reține informații despre tine între conversații. Verifică ce a reținut și șterge ce nu vrei.'},
        {icon:'🔗', label:'Linkuri partajate', text:'O conversație partajată prin link poate fi citită de oricine are linkul. Nu partaja conversații cu date interne.'},
        {icon:'🔌', label:'Conectori', text:'Accesul la e-mail, calendar sau documente. Acorzi doar ce ai nevoie și doar pe contul potrivit.'},
        {icon:'🧩', label:'Extensii de browser', text:'Extensiile cu AI pot citi paginile pe care le deschizi. Instalează doar ce e aprobat.'}
      ]}},
    {t:'info', title:'„Shadow AI”', guide:'Unul dintre cele mai mari riscuri, și unul dintre cele mai ușor de evitat.',
      body:'Folosirea pe ascuns, la serviciu, a unor aplicații AI neaprobate se numește <b>„shadow AI”</b>. Oamenii o fac cu intenții bune, ca să lucreze mai repede, dar datele organizației ajung în locuri pe care nimeni nu le controlează.<br><br>Dacă organizația ta are reguli despre AI, respectă-le. Dacă nu are, întreabă. De multe ori, o întrebare simplă declanșează reguli utile pentru toată echipa.'},
    {t:'sort', q:'Practică sigură sau riscantă?', buckets:['✅ Sigură','⚠️ Riscantă'], items:[
      {text:'Oprești folosirea conversațiilor la antrenare', b:0},{text:'Trimiți un link public către o conversație cu date interne', b:1},
      {text:'Folosești contul oferit de organizație', b:0},{text:'Instalezi o extensie AI necunoscută pe calculatorul de serviciu', b:1},
      {text:'Citești politica internă despre AI', b:0},{text:'Folosești pentru muncă un cont personal, fără să spui nimănui', b:1}
    ], explain:'Practicile sigure au ceva în comun: știi unde ajung datele și cine le controlează. Cele riscante mută datele organizației în locuri necontrolate: un link pe care îl poate deschide oricine, o extensie care citește tot ce vezi, un cont personal fără contract.'},
    {t:'mcq', q:'Organizația ta nu are nicio regulă despre AI. Ce faci?', options:['Folosești orice aplicație, oricum','Întrebi conducerea sau responsabilul IT/GDPR și, între timp, nu introduci date sensibile','Nu mai folosești niciodată nimic','Instalezi toate aplicațiile AI pe calculatorul de serviciu'], answer:1,
      feedback:['Riscant: datele organizației pot ajunge în locuri necontrolate.','Exact. Ceri reguli și, până atunci, aplici prudența de bază.','Nu e nevoie. Poți folosi AI pentru sarcini fără date sensibile.','Exact opusul prudenței.'],
      explain:'Lipsa regulilor nu înseamnă că orice e permis, ci că riscul rămâne neadministrat. Întrebarea ta ajută organizația, pentru că AI Act cere organizațiilor care folosesc AI să sprijine alfabetizarea personalului, iar regulile interne sunt primul pas. Până atunci, folosește AI doar pentru informații publice sau anonimizate.'},
    {t:'tf', q:'Extensiile de browser cu AI pot avea acces la conținutul paginilor pe care le deschizi.', answer:true,
      explain:'Multe extensii cer permisiunea de a „citi și modifica datele de pe toate site-urile”. Asta poate include e-mailul, aplicațiile interne sau documentele deschise în browser. Verifică permisiunile înainte de instalare și, pe calculatorul de serviciu, instalează doar ce aprobă departamentul IT.'},
    {t:'recap', points:['Contul de organizație vine de obicei cu garanții mai bune decât cel personal.','Verifici setările: antrenare, istoric, memorie, linkuri, conectori, extensii.','Evită „shadow AI”: folosește instrumentele aprobate sau cere reguli.']}
  ]},
  { id: 'm6l4', title: 'Deepfake și fraude', steps: [
    {t:'info', title:'Voci, fețe și mesaje false', guide:'Atinge fiecare tip de fraudă.',
      body:'AI-ul poate imita voci, fețe și stiluri de scriere. Escrocii îl folosesc pentru fraude tot mai convingătoare, iar greșelile de exprimare care trădau altădată o înșelătorie au dispărut.',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'📞', label:'Voce clonată', text:'Un apel cu vocea unei rude sau a șefului, care cere urgent bani. Câteva secunde de înregistrare pot fi suficiente pentru clonare.'},
        {icon:'🎬', label:'Video cu vedete', text:'Clipuri false în care persoane publice „recomandă” investiții sau produse.'},
        {icon:'📧', label:'Phishing perfect', text:'E-mailuri fără greșeli, personalizate, care imită banca, curierul sau o instituție.'},
        {icon:'👔', label:'„Mesaj de la șef”', text:'Cereri de plăți urgente sau de date, venite aparent de la conducere.'},
        {icon:'🖼️', label:'Imagini false', text:'Fotografii „dovadă” ale unor evenimente care nu au avut loc.'}
      ]}},
    {t:'info', title:'Ce faci când ceva pare suspect', guide:'Patru pași care opresc majoritatea fraudelor.',
      body:'Semnele de alarmă sunt aproape mereu aceleași: <b>urgență mare</b>, <b>cereri de bani sau de date</b>, <b>cerere de a păstra secretul</b> și <b>un canal neobișnuit</b>.',
      visual:{type:'steps', items:[
        {icon:'✋', label:'Oprește-te', text:'Urgența e unealta principală a escrocilor. Câteva minute de pauză nu strică nimic.'},
        {icon:'📱', label:'Verifică pe alt canal', text:'Suni persoana pe numărul pe care îl știi deja, nu pe cel din mesaj.'},
        {icon:'🗣️', label:'Întreabă', text:'Pune o întrebare la care doar persoana reală știe răspunsul sau folosește cuvântul-cod al familiei.'},
        {icon:'🚨', label:'Raportează', text:'Anunți banca, departamentul IT sau autoritățile. La serviciu, anunți imediat, chiar dacă ai greșit deja.'}
      ]}},
    {t:'info', title:'Cuvântul-cod', guide:'Un obicei simplu, extrem de eficient.',
      body:'Stabilește cu familia un <b>cuvânt-cod</b> pe care îl știți doar voi și pe care nu îl scrieți nicăieri online. Dacă cineva sună „de la” o rudă și cere bani urgent, întrebi cuvântul. La serviciu, echivalentul e o <b>regulă fermă</b>: nicio plată urgentă nu se face fără confirmare pe un al doilea canal.'},
    {t:'spot', q:'Atinge semnele de alarmă din acest mesaj', segments:['', {p:'Bună, sunt eu, mama', hit:false}, '. ', {p:'Mi s-a stricat telefonul și îți scriu de pe numărul ăsta', hit:true}, '. ', {p:'Am nevoie urgent de 2.000 de lei', hit:true}, ', ', {p:'nu-i spune lui tata', hit:true}, '. ', {p:'Trimite-i în contul de mai jos', hit:true}, '.'],
      explain:'Numărul nou, urgența, cererea de bani, secretul și contul necunoscut sunt semnele clasice ale unei fraude. Salutul în sine nu e un semn, pentru că oricine îl poate scrie. Reacția corectă: o suni pe mama pe numărul vechi sau pe altcineva din familie înainte de orice transfer.'},
    {t:'mcq', q:'Primești un apel cu vocea șefului tău, care îți cere urgent un transfer bancar. Ce faci?', options:['Fac transferul, e vocea lui','Închid și îl sun eu înapoi pe numărul cunoscut sau verific pe alt canal','Cer datele contului prin SMS','Aștept să mă mai sune'], answer:1,
      feedback:['Vocea poate fi clonată. Nu mai e o dovadă suficientă.','Exact. Verificarea pe un canal separat oprește majoritatea fraudelor.','Tot pe canalul escrocului rămâi.','Escrocul poate reveni cu și mai multă presiune.'],
      explain:'Clonarea vocii a devenit ieftină și accesibilă, așa că o voce cunoscută nu mai dovedește identitatea. Un apel înapoi, pe numărul pe care îl ai deja, durează un minut. Un șef real nu se va supăra că ai verificat, iar multe organizații au deja regula confirmării pe două canale.'},
    {t:'tf', q:'Un videoclip în care o persoană cunoscută recomandă o investiție dovedește că recomandarea e reală.', answer:false,
      explain:'Videoclipurile false cu persoane publice (prezentatori TV, oameni de afaceri, politicieni) sunt printre cele mai răspândite fraude online. Pot fi foarte convingătoare. Recomandările reale de investiții nu vin prin reclame virale care promit câștiguri garantate.'},
    {t:'recap', points:['AI-ul face fraudele mai convingătoare: voci clonate, video fals, phishing perfect.','Semnele de alarmă: urgență, bani sau date, secret, canal neobișnuit.','Oprește-te, verifică pe alt canal, întreabă, raportează.']}
  ]}
  ]
},
{
  id: 'm7', title: 'AI Act pe înțelesul tuturor', zone: 'Templul regulilor', subtitle: 'Regulile europene, pe scurt', color: '#0E6B4F', icon: 'scale',
  lessons: [
  { id: 'm7l1', title: 'Ce este AI Act', steps: [
    {t:'info', title:'Regulamentul european privind AI', guide:'Atinge fiecare element ca să afli esențialul.',
      body:'<b>AI Act</b> este Regulamentul (UE) 2024/1689 privind inteligența artificială, primul set cuprinzător de reguli pentru AI din lume. A intrat în vigoare în august 2024 și se aplică în etape. În iulie 2026 a fost modificat prin Regulamentul (UE) 2026/1744, cunoscut ca „Digital Omnibus”.',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'📜', label:'Ce este', text:'Un regulament al Uniunii Europene care stabilește reguli pentru dezvoltarea și folosirea sistemelor AI, în funcție de risc.'},
        {icon:'🇷🇴', label:'Se aplică direct', text:'Fiind regulament, se aplică direct în România, fără o lege națională de transpunere. Legislația națională stabilește doar aspecte de aplicare, precum autoritățile competente.'},
        {icon:'👥', label:'Pentru cine', text:'Pentru cei care creează sisteme AI (furnizori) și pentru organizațiile care le folosesc în activitatea lor (implementatori), inclusiv instituții publice.'},
        {icon:'🌍', label:'Și în afara UE', text:'Se aplică și firmelor din afara UE, dacă sistemele lor sunt folosite în Uniune.'},
        {icon:'🔄', label:'Modificat în 2026', text:'„Digital Omnibus” a amânat termenele pentru sistemele cu risc ridicat, a reformulat obligația de alfabetizare AI și a adăugat interdicții noi.'},
        {icon:'💶', label:'Amenzi', text:'Pentru practicile interzise, amenzile pot ajunge la 35 de milioane de euro sau 7% din cifra de afaceri anuală mondială.'}
      ]}},
    {t:'info', title:'Ideea centrală: riscul', guide:'Atinge fiecare treaptă a piramidei.',
      body:'Regulamentul nu tratează la fel toate aplicațiile AI. Cu cât riscul pentru siguranța și drepturile oamenilor e mai mare, cu atât regulile sunt mai stricte. Un filtru de spam și un sistem care selectează candidați la angajare nu au aceleași obligații. Vei vedea piramida în detaliu în lecția următoare.',
      visual:{type:'reveal', layout:'pyramid', items:[
        {label:'Risc inacceptabil', text:'Interzis. De exemplu, scorul social al cetățenilor.'},
        {label:'Risc ridicat', text:'Permis, cu obligații stricte. De exemplu, AI folosit la recrutare.'},
        {label:'Risc limitat', text:'Obligații de transparență. De exemplu, chatboturile.'},
        {label:'Risc minim', text:'Fără obligații noi. De exemplu, filtrele de spam.'}
      ]}},
    {t:'info', title:'Calendarul, pe scurt', guide:'Atinge fiecare etapă.',
      body:'Regulile intră în vigoare pe rând. Datele de mai jos includ modificările din 2026.',
      visual:{type:'reveal', layout:'timeline', items:[
        {icon:'🚫', label:'Februarie 2025', text:'Se aplică interdicțiile și obligația privind alfabetizarea AI.'},
        {icon:'🧠', label:'August 2025', text:'Se aplică regulile pentru modelele AI de uz general, cele din spatele chatboturilor.'},
        {icon:'🏷️', label:'August 2026', text:'Se aplică obligațiile de transparență: chatboturile se prezintă ca AI, deepfake-urile sunt semnalate.'},
        {icon:'⛔', label:'Decembrie 2026', text:'Se aplică interdicțiile noi adăugate în 2026, privind conținutul intim fals și materialele de abuz asupra copiilor.'},
        {icon:'⚠️', label:'Decembrie 2027', text:'Se aplică regulile pentru sistemele cu risc ridicat din domenii precum recrutarea, educația sau creditarea.'},
        {icon:'🏭', label:'August 2028', text:'Se aplică regulile pentru AI-ul inclus în produse reglementate, precum dispozitivele medicale sau utilajele.'}
      ]}},
    {t:'tf', q:'AI Act se aplică în România doar după ce Parlamentul adoptă o lege separată.', answer:false,
      explain:'Regulamentele UE se aplică direct în toate statele membre, din ziua stabilită în text, fără transpunere. Parlamentul și Guvernul pot stabili doar aspecte de aplicare, precum autoritățile care supraveghează și procedurile de sancționare. Obligațiile în sine vin direct din regulament.'},
    {t:'mcq', q:'Pe ce se bazează regulile din AI Act?', options:['Pe mărimea companiei care face AI-ul','Pe nivelul de risc al utilizării','Pe țara în care a fost creat sistemul','Pe prețul aplicației'], answer:1,
      feedback:['Mărimea contează doar la unele detalii, cum ar fi plafonul amenzilor.','Exact. Abordarea bazată pe risc e coloana vertebrală a regulamentului.','Se aplică și sistemelor create în afara UE, dacă sunt folosite aici.','Prețul nu are legătură.'],
      explain:'Aceeași tehnologie poate avea obligații diferite în funcție de cum e folosită. Un model de limbaj care scrie idei de titluri are risc minim, dar același tip de model folosit ca să evalueze candidați la angajare intră la risc ridicat. Contează utilizarea, nu tehnologia în sine.'},
    {t:'tf', q:'Regulile pentru sistemele AI cu risc ridicat folosite la recrutare se aplică din decembrie 2027.', answer:true,
      explain:'Termenul inițial era 2 august 2026. Prin modificarea din 2026, a fost mutat la 2 decembrie 2027 pentru sistemele cu risc ridicat din domenii precum ocuparea forței de muncă, educația, creditarea sau serviciile publice esențiale. Interdicțiile, în schimb, se aplică deja din februarie 2025.'},
    {t:'recap', points:['AI Act e Regulamentul (UE) 2024/1689 și se aplică direct în România.','Regulile depind de nivelul de risc al utilizării.','Se aplică în etape, între 2025 și 2028, cu termenele modificate în 2026.']}
  ]},
  { id: 'm7l2', title: 'Cele patru niveluri de risc', steps: [
    {t:'info', title:'Piramida riscurilor, în detaliu', guide:'Atinge fiecare treaptă.',
      body:'Fiecare nivel are alt regim. Majoritatea aplicațiilor pe care le folosești zilnic sunt la baza piramidei, dar cele de sus pot afecta direct viața oamenilor.',
      visual:{type:'reveal', layout:'pyramid', items:[
        {label:'Risc inacceptabil: interzis', text:'Practici considerate incompatibile cu valorile UE: scorul social, manipularea care exploatează vulnerabilitățile, recunoașterea emoțiilor la locul de muncă sau în școli, cu excepții restrânse.'},
        {label:'Risc ridicat: obligații stricte', text:'Sisteme care influențează decizii importante despre oameni: recrutare și evaluarea angajaților, evaluări în educație, acordarea de credite, acces la servicii publice esențiale.'},
        {label:'Risc limitat: transparență', text:'Oamenii trebuie să știe că interacționează cu un AI sau că un conținut e generat artificial: chatboturi, deepfake-uri.'},
        {label:'Risc minim: fără obligații noi', text:'Filtre de spam, recomandări de filme, jocuri, corectoare gramaticale. Marea majoritate a aplicațiilor.'}
      ]}},
    {t:'info', title:'Ce este interzis', guide:'Atinge fiecare practică interzisă.',
      body:'Practicile interzise se aplică din februarie 2025. Modificarea din 2026 a adăugat două interdicții noi, aplicabile din decembrie 2026.',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'🎭', label:'Manipularea', text:'Tehnici subliminale sau manipulatoare care distorsionează comportamentul oamenilor și le pot face rău.'},
        {icon:'🎯', label:'Exploatarea vulnerabilităților', text:'Sisteme care profită de vârsta, dizabilitatea sau situația socială și economică a cuiva.'},
        {icon:'📊', label:'Scorul social', text:'Evaluarea oamenilor după comportament sau trăsături personale, cu tratament nefavorabil nejustificat.'},
        {icon:'😐', label:'Emoțiile la muncă și la școală', text:'Recunoașterea emoțiilor angajaților sau elevilor, cu excepția motivelor medicale sau de siguranță.'},
        {icon:'📷', label:'Colectarea fețelor', text:'Construirea de baze de date de recunoaștere facială prin colectarea nediferențiată de imagini de pe internet sau camere.'},
        {icon:'⛔', label:'Noi din decembrie 2026', text:'Sisteme concepute să genereze imagini intime false ale unor persoane reale, fără consimțământ, sau materiale de abuz sexual asupra copiilor.'}
      ]}},
    {t:'info', title:'Cine are obligații la risc ridicat', guide:'Diferența dintre cine creează și cine folosește.',
      body:'Regulamentul împarte obligațiile între <b>furnizor</b> (cine creează sistemul) și <b>implementator</b> (organizația care îl folosește). O primărie sau o firmă care folosește un sistem cu risc ridicat are propriile obligații, chiar dacă nu l-a creat. Instituțiile publice trebuie, în plus, să evalueze impactul asupra drepturilor fundamentale înainte de folosire.',
      visual:{type:'compare',
        left:{icon:'🏗️', title:'Furnizorul', lines:['Date de calitate','Documentație tehnică','Evaluarea riscurilor','Permite supravegherea umană','Înregistrarea sistemului']},
        right:{icon:'🏢', title:'Implementatorul', lines:['Folosește conform instrucțiunilor','Supraveghere de oameni pregătiți','Monitorizează funcționarea','Informează angajații afectați','Păstrează jurnalele sistemului']}}},
    {t:'sort', q:'Joc: pune fiecare sistem pe treapta potrivită a piramidei', buckets:['🟥 Interzis','🟧 Risc ridicat','🟨 Transparență','🟩 Risc minim'], items:[
      {text:'Scor social al cetățenilor', b:0},{text:'AI care triază CV-uri', b:1},{text:'Chatbot pe site-ul unei primării', b:2},{text:'Filtru anti-spam', b:3},
      {text:'Recunoașterea emoțiilor elevilor la ore', b:0},{text:'AI care decide acordarea unui credit', b:1},{text:'Video generat cu AI, realist', b:2},{text:'Corector gramatical', b:3}
    ], explain:'Întrebarea-cheie e: ce se poate întâmpla cu un om din cauza acestui sistem? Dacă încalcă grav drepturile, e interzis. Dacă influențează o decizie importantă despre el (job, credit, notă), e risc ridicat. Dacă poate fi indus în eroare despre ce e real, e transparență. Altfel, risc minim.'},
    {t:'mcq', q:'Scorul de credit calculat de o bancă cu AI și „scorul social” al cetățenilor sunt:', options:['Același lucru, ambele interzise','Diferite: scorul social e interzis, scorul de credit e risc ridicat','Ambele permise fără reguli','Ambele risc minim'], answer:1,
      feedback:['Confuzia e frecventă, dar regulamentul le tratează diferit.','Exact. Scorul de credit e permis, dar cu obligații stricte.','Scorul social e interzis, iar creditarea are reguli stricte.','Ambele pot afecta serios viața oamenilor.'],
      explain:'Scorul social evaluează oamenii în general, după comportament sau trăsături, și îi tratează nefavorabil în alte contexte decât cel în care s-au adunat datele. De aceea e interzis. Evaluarea bonității pentru un credit are un scop precis și legitim, dar influențează accesul la bani, așa că e permisă ca risc ridicat, cu obligații stricte.'},
    {t:'tf', q:'Recunoașterea emoțiilor angajaților la locul de muncă este, ca regulă, interzisă de AI Act.', answer:true,
      explain:'Interdicția se aplică din februarie 2025 și acoperă locul de muncă și instituțiile de învățământ. Excepțiile sunt restrânse la motive medicale sau de siguranță, de exemplu detectarea oboselii la un șofer profesionist. Un sistem care „măsoară” cât de mulțumiți sau de atenți sunt angajații nu intră în excepții.'},
    {t:'recap', points:['Patru niveluri: interzis, risc ridicat, transparență, risc minim.','Practicile interzise se aplică din 2025, cu două interdicții noi din decembrie 2026.','La risc ridicat au obligații atât furnizorul, cât și organizația care folosește sistemul.']}
  ]},
  { id: 'm7l3', title: 'Transparență și alfabetizare AI', steps: [
    {t:'info', title:'Dreptul de a ști', guide:'Atinge fiecare obligație de transparență.',
      body:'Din <b>2 august 2026</b> se aplică obligațiile de transparență. Scopul lor: oamenii trebuie să știe când interacționează cu un AI și când un conținut e generat sau manipulat artificial.',
      visual:{type:'reveal', layout:'grid', items:[
        {icon:'💬', label:'Chatboturile', text:'Trebuie să le spună oamenilor că vorbesc cu un sistem AI, cu excepția cazului în care e evident din context.'},
        {icon:'🏷️', label:'Conținutul generat', text:'Furnizorii trebuie să marcheze textele, imaginile, sunetele și clipurile generate într-un format care poate fi detectat automat.'},
        {icon:'🎭', label:'Deepfake-urile', text:'Cine publică imagini, audio sau video generate ori manipulate care par reale trebuie să spună că sunt artificiale.'},
        {icon:'📰', label:'Texte de interes public', text:'Textele generate cu AI și publicate pentru a informa publicul trebuie semnalate, cu excepția celor revizuite de un om care își asumă responsabilitatea editorială.'}
      ]}},
    {t:'info', title:'Alfabetizarea AI (articolul 4)', guide:'Aceasta e obligația care te privește cel mai direct ca angajat.',
      body:'Din <b>februarie 2025</b>, organizațiile care furnizează sau folosesc sisteme AI trebuie să ia măsuri pentru alfabetizarea în domeniul AI a personalului.<br><br>Modificarea din 2026 a reformulat articolul: organizațiile trebuie să <b>ia măsuri care sprijină dezvoltarea</b> cunoștințelor despre AI, ținând cont de experiența, pregătirea și rolul fiecăruia, fără să garanteze un anumit nivel individual. Obligația rămâne, iar organizația trebuie să poată arăta ce a făcut.'},
    {t:'info', title:'Modelele din spatele chatboturilor', guide:'Obligațiile marilor companii de AI.',
      body:'Din <b>august 2025</b>, companiile care dezvoltă <b>modele AI de uz general</b> (modelele pe care sunt construiți ChatGPT, Claude, Gemini și alții) au obligații proprii. Aceste obligații nu cad în sarcina ta ca utilizator.',
      visual:{type:'compare',
        left:{icon:'🏗️', title:'Furnizorul modelului', lines:['Documentație tehnică','Politică privind drepturile de autor','Rezumat public al datelor de antrenare','Evaluări suplimentare pentru modelele foarte puternice']},
        right:{icon:'🏢', title:'Organizația care îl folosește', lines:['Alfabetizarea AI a personalului','Transparență față de public','Reguli interne de folosire','Obligații în plus la risc ridicat']}}},
    {t:'sort', q:'A cui este obligația?', buckets:['🏗️ Furnizorul modelului','🏢 Organizația care folosește AI'], items:[
      {text:'Rezumatul public al datelor de antrenare', b:0},{text:'Politica privind drepturile de autor', b:0},{text:'Documentația tehnică a modelului', b:0},
      {text:'Măsurile de alfabetizare AI pentru angajați', b:1},{text:'Anunțul că pe site răspunde un chatbot', b:1},{text:'Supravegherea umană a unui sistem de recrutare', b:1}
    ], explain:'Furnizorii răspund pentru cum e construit și documentat modelul. Organizațiile răspund pentru cum îl folosesc: își pregătesc oamenii, informează publicul și supraveghează sistemele cu risc ridicat. O primărie care pune un chatbot pe site nu trebuie să documenteze modelul, dar trebuie să se asigure că oamenii știu că vorbesc cu un AI.'},
    {t:'mcq', q:'Ce înseamnă „alfabetizare în domeniul AI”?', options:['Să știi să programezi un AI','Cunoștințe suficiente ca să folosești AI informat, înțelegând oportunitățile și riscurile','Să citești integral regulamentul','Să ai diplomă în informatică'], answer:1,
      feedback:['Nu e nevoie de programare.','Exact. E vorba de folosire informată și responsabilă.','Regulamentul nu cere asta de la angajați.','Nu e nevoie de o diplomă.'],
      explain:'Alfabetizarea AI înseamnă să știi ce face și ce nu face un instrument AI, unde greșește, cum verifici rezultatele, ce date nu ai voie să introduci și ce reguli se aplică. Nivelul necesar depinde de rol: cine folosește un chatbot pentru e-mailuri are nevoie de alte cunoștințe decât cine supraveghează un sistem de recrutare.'},
    {t:'tf', q:'AI Act interzice folosirea chatboturilor la locul de muncă.', answer:false,
      explain:'Regulamentul nu interzice chatboturile. Cere folosirea lor informată și transparentă: personalul să fie pregătit, iar publicul să știe când vorbește cu un AI. Obligațiile devin mai stricte doar dacă un chatbot e folosit pentru decizii cu risc ridicat, de exemplu pentru a evalua candidați.'},
    {t:'recap', points:['Din august 2026: chatboturile se prezintă ca AI, iar deepfake-urile sunt semnalate.','Articolul 4: organizațiile iau măsuri care sprijină alfabetizarea AI a personalului.','Furnizorii de modele au obligații proprii din august 2025.']}
  ]},
  { id: 'm7l4', title: 'Recapitulare finală', steps: [
    {t:'info', title:'Ai ajuns la capătul junglei', guide:'Încă puțin și certificatul e al tău.',
      body:'Urmează câteva exerciții din tot drumul parcurs: de la cum funcționează un chatbot până la regulile europene. După ele îți poți descărca <b>certificatul</b>.<br><br>Ce ai parcurs aici acoperă bazele alfabetizării AI: ce este AI-ul, cum lucrezi cu el, unde greșește, cum îți protejezi datele și ce spune legea.'},
    {t:'mcq', q:'Cum își construiește un chatbot răspunsul?', options:['Caută răspunsul într-o enciclopedie','Prezice, cuvânt cu cuvânt, continuarea cea mai probabilă','Întreabă un operator uman','Copiază primul rezultat de pe Google'], answer:1,
      feedback:['Nu consultă o enciclopedie, generează text.','Exact. Din acest mecanism vin și fluența, și halucinațiile.','Răspunsurile sunt generate automat.','Chiar și când caută pe internet, răspunsul final e generat.'],
      explain:'Acest mecanism explică aproape tot ce ai învățat: de ce e fluent, de ce poate inventa detalii, de ce nu știe noutățile, de ce răspunde diferit de la o încercare la alta și de ce trebuie verificat.'},
    {t:'order', q:'Pune în ordine o sesiune de lucru responsabilă cu AI', items:['Scrii un prompt cu context, sarcină și format','Scoți datele personale sau confidențiale','Citești critic răspunsul și ceri ajustări','Verifici faptele în surse oficiale','Îți asumi textul final'],
      explain:'Observă că protecția datelor vine înainte de trimiterea documentului, nu după. Verificarea faptelor și asumarea rezultatului rămân la final, la tine. E, pe scurt, tot cursul într-o singură listă.'},
    {t:'spot', q:'Atinge problemele din acest mod de lucru', segments:['Andrei ', {p:'a lipit în chatbotul gratuit lista cu numele și CNP-urile beneficiarilor', hit:true}, ', ', {p:'a cerut un tabel cu sumele totale', hit:false}, ', ', {p:'a copiat totalul direct în raport, fără să-l verifice', hit:true}, ' și ', {p:'a citat „Legea nr. 482/2019” propusă de AI, fără să o caute', hit:true}, '.'],
      explain:'Trei greșeli din trei module: date personale într-un instrument public (modulul 6), un total calculat în text și necontrolat (modulul 4) și o lege necăutată în sursa oficială (modulul 5). Cererea unui tabel, în schimb, e o folosire perfect rezonabilă a AI-ului.'},
    {t:'mcq', q:'Ce faci înainte să ceri ajutor pentru un caz real al unui client?', options:['Lipești tot documentul','Anonimizezi datele sau folosești instrumentul aprobat de organizație','Trimiți doar CNP-ul','Nimic special'], answer:1,
      feedback:['Datele clientului ar ajunge la un furnizor extern.','Exact. Protejezi persoana și organizația.','CNP-ul e exact ce nu trebuie trimis.','Riscul pentru date e real.'],
      explain:'Ai două căi sigure: scoți tot ce identifică persoana (numele, CNP-ul, adresa, detaliile unice) sau lucrezi în instrumentul pe care organizația l-a aprobat și pentru care are garanții contractuale. Problema clientului se poate rezolva aproape întotdeauna fără identitatea lui.'},
    {t:'match', q:'Potrivește termenul cu definiția', pairs:[['Halucinație','Informație inventată prezentată ca adevărată'],['Deepfake','Voce, imagine sau video fals creat cu AI'],['Bias','Prejudecată preluată din date'],['Prompt','Mesajul pe care i-l scrii AI-ului']],
      explain:'Acești patru termeni rezumă provocările principale: cum ceri (prompt), ce poate inventa AI-ul (halucinație), ce preia din date (bias) și cum poate fi folosit ca să înșele (deepfake). Cine îi înțelege folosește AI-ul mult mai sigur decât majoritatea utilizatorilor.'},
    {t:'tf', q:'Pentru o organizație, alfabetizarea AI a angajaților este o obligație legală, nu doar o recomandare.', answer:true,
      explain:'Articolul 4 din AI Act se aplică din februarie 2025 tuturor organizațiilor care furnizează sau folosesc sisteme AI. Din 2026 e formulat ca obligația de a lua măsuri care sprijină dezvoltarea cunoștințelor despre AI, adaptate rolului fiecăruia. Un program de instruire documentat e cel mai simplu mod de a o îndeplini.'},
    {t:'recap', points:['Un chatbot generează text plauzibil: îl ghidezi cu prompturi bune și îl verifici.','Protejezi datele înainte să trimiți ceva, nu după.','AI Act cere folosire informată, transparentă și, la risc ridicat, supravegheată de oameni.']}
  ]}
  ]
}

];
