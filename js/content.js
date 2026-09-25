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
      {text:'Calculatorul de buzunar', b:0},{text:'Filtrul de spam din e-mail', b:1},{text:'Formula =SUMA() din Excel', b:0},
      {text:'Recunoașterea comenzilor vocale', b:1},{text:'Semaforul cu timp fix', b:0},{text:'Recomandările de produse ale unui magazin online', b:1}
    ], explain:'Calculatorul, formula =SUMA() și semaforul cu timp fix execută exact regulile scrise de un om, la fel de fiecare dată. Filtrul de spam, recunoașterea vocii și recomandările și-au format tiparele din foarte multe exemple, așa că se descurcă și cu situații pe care nu le-au mai întâlnit. Întrebarea-cheie e mereu aceeași: a învățat din exemple sau urmează o rețetă?'},
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
  id: 'm3', title: 'Primul tău prompt', zone: 'Podul prompturilor', subtitle: 'Cum ceri ca să primești ce vrei', color: '#1F8CC9', icon: 'pen',
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
  id: 'm4', title: 'AI la birou', zone: 'Satul de lucru', subtitle: 'E-mailuri, documente, tabele, idei', color: '#FF8A3D', icon: 'briefcase',
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
  id: 'm5', title: 'Când AI-ul greșește', zone: 'Mlaștina iluziilor', subtitle: 'Halucinații, verificare, prejudecăți', color: '#E0457B', icon: 'alert',
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
  id: 'm6', title: 'Datele tale și siguranța', zone: 'Fortăreața datelor', subtitle: 'Ce scrii, ce nu scrii, cum te protejezi', color: '#7C4DDB', icon: 'shield',
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
  id: 'm7', title: 'AI Act pe înțelesul tuturor', zone: 'Templul regulilor', subtitle: 'Regulile europene, pe scurt', color: '#0E6B4F', icon: 'scale',
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
