import type { B1Lesson } from '../../types';

export const lesson1: B1Lesson = {
  id: 'lesson1',
  title: 'Neue Nachbarn',
  subtitle: 'Kapitel 1',
  vocabulary: [
    {
      category: 'Nomen (Haus & Wohnung)',
      entries: [
        { word: 'der Nachbar, -n', translation: 'the neighbor (m)', category: 'Nomen', gender: 'm', example: 'Mein Nachbar wohnt im ersten Stock.' },
        { word: 'die Nachbarin, -nen', translation: 'the neighbor (f)', category: 'Nomen', gender: 'f', example: 'Die Nachbarin ist sehr freundlich.' },
        { word: 'das Erdgeschoss', translation: 'the ground floor', category: 'Nomen', gender: 'n', example: 'Frau Kandel wohnt im Erdgeschoss.' },
        { word: 'der Stock, Stockwerke', translation: 'the floor/story', category: 'Nomen', gender: 'm', example: 'Wir wohnen im zweiten Stock.' },
        { word: 'der Keller, -', translation: 'the basement/cellar', category: 'Nomen', gender: 'm', example: 'Die Fahrräder stehen im Keller.' },
        { word: 'der Balkon, -e', translation: 'the balcony', category: 'Nomen', gender: 'm', example: 'Im Sommer sitze ich gern auf dem Balkon.' },
        { word: 'der Flur, -e', translation: 'the hallway', category: 'Nomen', gender: 'm', example: 'Bitte lassen Sie nichts im Flur stehen.' },
        { word: 'das Treppenhaus, -häuser', translation: 'the stairwell', category: 'Nomen', gender: 'n', example: 'Im Treppenhaus darf man keine Fahrräder abstellen.' },
        { word: 'der Parkplatz, -plätze', translation: 'the parking space', category: 'Nomen', gender: 'm', example: 'Jeder Mieter hat einen Parkplatz.' },
        { word: 'die Mülltonne, -n', translation: 'the trash can/bin', category: 'Nomen', gender: 'f', example: 'Die Mülltonnen stehen hinter dem Haus.' },
        { word: 'die Garage, -n', translation: 'the garage', category: 'Nomen', gender: 'f', example: 'Das Auto steht in der Garage.' },
        { word: 'der Rasen', translation: 'the lawn', category: 'Nomen', gender: 'm', example: 'Bitte den Rasen nicht betreten!' },
        { word: 'der Sandkasten, -kästen', translation: 'the sandbox', category: 'Nomen', gender: 'm', example: 'Die Kinder spielen im Sandkasten.' },
        { word: 'die Hausordnung, -en', translation: 'the house rules', category: 'Nomen', gender: 'f', example: 'In der Hausordnung steht, dass man leise sein muss.' },
        { word: 'die Ruhezeit, -en', translation: 'the quiet hours', category: 'Nomen', gender: 'f', example: 'Die Ruhezeit ist von 22 bis 7 Uhr.' },
        { word: 'die Aussicht, -en', translation: 'the view', category: 'Nomen', gender: 'f', example: 'Die Aussicht vom Balkon ist wunderbar!' },
        { word: 'das Mehrfamilienhaus, -häuser', translation: 'the apartment building', category: 'Nomen', gender: 'n', example: 'In unserem Mehrfamilienhaus wohnen acht Familien.' },
      ],
    },
    {
      category: 'Nomen (Stadtteil & Umgebung)',
      entries: [
        { word: 'der Stadtteil, -e', translation: 'the district/neighborhood', category: 'Nomen', gender: 'm', example: 'Unser Stadtteil ist sehr ruhig.' },
        { word: 'die Gegend, -en', translation: 'the area/neighborhood', category: 'Nomen', gender: 'f', example: 'Die Gegend ist grün und ruhig.' },
        { word: 'die Fußgängerzone, -n', translation: 'the pedestrian zone', category: 'Nomen', gender: 'f', example: 'In der Fußgängerzone kann man gut einkaufen.' },
        { word: 'die Verkehrsanbindung, -en', translation: 'the public transport connection', category: 'Nomen', gender: 'f', example: 'Die Verkehrsanbindung ist super, die U-Bahn ist ganz nah.' },
        { word: 'die Einkaufsmöglichkeit, -en', translation: 'the shopping option', category: 'Nomen', gender: 'f', example: 'Es gibt viele Einkaufsmöglichkeiten in der Nähe.' },
        { word: 'das Fitnessstudio, -s', translation: 'the gym', category: 'Nomen', gender: 'n', example: 'Das Fitnessstudio ist nur fünf Minuten zu Fuß.' },
        { word: 'der Spielplatz, -plätze', translation: 'the playground', category: 'Nomen', gender: 'm', example: 'Für die Kinder gibt es einen großen Spielplatz.' },
      ],
    },
    {
      category: 'Verben',
      entries: [
        { word: 'einziehen', translation: 'to move in', category: 'Verb', example: 'Wir sind letzte Woche eingezogen.' },
        { word: 'umziehen', translation: 'to relocate/move', category: 'Verb', example: 'Wir mussten aus beruflichen Gründen umziehen.' },
        { word: 'bohren', translation: 'to drill', category: 'Verb', example: 'Am Sonntag darf man nicht bohren.' },
        { word: 'mähen', translation: 'to mow', category: 'Verb', example: 'Im Sommer muss man regelmäßig den Rasen mähen.' },
        { word: 'aufhängen', translation: 'to hang up', category: 'Verb', example: 'Darf man Wäsche auf dem Balkon aufhängen?' },
        { word: 'beruhigen', translation: 'to calm down', category: 'Verb', example: 'Sie versucht, das Baby zu beruhigen.' },
        { word: 'kaputtmachen', translation: 'to break/damage', category: 'Verb', example: 'Die Kinder haben den Sandkasten kaputtgemacht.' },
        { word: 'entsorgen', translation: 'to dispose of', category: 'Verb', example: 'Sperrmüll muss man richtig entsorgen.' },
        { word: 'abstellen', translation: 'to park/put down', category: 'Verb', example: 'Man darf Fahrräder nicht im Treppenhaus abstellen.' },
        { word: 'abschließen', translation: 'to lock', category: 'Verb', example: 'Vergessen Sie nicht, die Haustür abzuschließen.' },
        { word: 'sich wohlfühlen', translation: 'to feel comfortable', category: 'Verb', example: 'Ich fühle mich in meinem Stadtteil sehr wohl.' },
        { word: 'sich entschuldigen', translation: 'to apologize', category: 'Verb', example: 'Er möchte sich bei seiner Nachbarin entschuldigen.' },
      ],
    },
    {
      category: 'Adjektive & Adverbien',
      entries: [
        { word: 'ruhig', translation: 'quiet/calm', category: 'Adjektiv', example: 'Die Gegend ist sehr ruhig.' },
        { word: 'laut', translation: 'loud/noisy', category: 'Adjektiv', example: 'Nach 22 Uhr darf man nicht laut sein.' },
        { word: 'hell', translation: 'bright/light', category: 'Adjektiv', example: 'Die Wohnung ist sowohl groß als auch hell.' },
        { word: 'erlaubt', translation: 'allowed/permitted', category: 'Adjektiv', example: 'Grillen auf dem Balkon ist nicht erlaubt.' },
        { word: 'verboten', translation: 'forbidden/prohibited', category: 'Adjektiv', example: 'Es ist verboten, im Treppenhaus zu rauchen.' },
        { word: 'sympathisch', translation: 'likeable/nice', category: 'Adjektiv', example: 'Die neuen Nachbarn sind sehr sympathisch.' },
        { word: 'freundlich', translation: 'friendly', category: 'Adjektiv', example: 'Alle Nachbarn sind freundlich und hilfsbereit.' },
        { word: 'höflich', translation: 'polite', category: 'Adjektiv', example: 'Könnten Sie bitte höflich sein?' },
        { word: 'ärgerlich', translation: 'annoying/irritating', category: 'Adjektiv', example: 'Das ist wirklich ärgerlich!' },
      ],
    },
    {
      category: 'Ausdrücke & Redewendungen',
      entries: [
        { word: 'Rücksicht nehmen (auf)', translation: 'to be considerate (of)', category: 'Ausdruck', example: 'Man muss Rücksicht auf die Nachbarn nehmen.' },
        { word: 'in der Nähe', translation: 'nearby', category: 'Ausdruck', example: 'Es gibt einen Supermarkt in der Nähe.' },
        { word: 'einen Gefallen tun', translation: 'to do a favor', category: 'Ausdruck', example: 'Könnten Sie mir einen Gefallen tun?' },
        { word: 'Es tut mir leid.', translation: "I'm sorry.", category: 'Ausdruck', example: 'Es tut mir sehr leid. Das war keine Absicht.' },
        { word: 'Kein Problem!', translation: 'No problem!', category: 'Ausdruck', example: '– Entschuldigung! – Kein Problem!' },
        { word: 'Das kann ja mal vorkommen.', translation: 'These things happen.', category: 'Ausdruck', example: 'Machen Sie sich keine Sorgen. Das kann ja mal vorkommen.' },
      ],
    },
  ],

  grammar: [
    {
      title: 'Infinitiv mit zu',
      explanation: `<h4>Wann benutzt man "Infinitiv mit zu"?</h4>
<table><thead><tr><th>Trigger</th><th>Beispiel</th></tr></thead><tbody>
<tr><td><strong>Nach bestimmten Verben:</strong><br/>anfangen, aufhören, beginnen, bitten, helfen, vergessen, versuchen, versprechen...</td><td>Ich versuche, pünktlich <strong>zu</strong> sein.<br/>Vergiss nicht, die Tür <strong>abzuschließen</strong>.</td></tr>
<tr><td><strong>Nach sein/finden + Adjektiv:</strong><br/>Es ist (nicht) erlaubt / möglich / wichtig / verboten / notwendig...</td><td>Es ist wichtig, die Nachbarn <strong>zu</strong> grüßen.<br/>Es ist verboten, hier <strong>zu</strong> rauchen.</td></tr>
<tr><td><strong>Nach Verb + Nomen:</strong><br/>Ich habe (keine) Zeit / Lust...<br/>Es macht (keinen) Spaß...</td><td>Ich habe keine Zeit, <strong>einzukaufen</strong>.<br/>Es macht Spaß, Deutsch <strong>zu</strong> lernen.</td></tr>
</tbody></table>
<p><strong>Trennbare Verben:</strong> "zu" steht ZWISCHEN Vorsilbe und Verb:</p>
<p><strong>auf</strong>zu<strong>räumen</strong>, <strong>ein</strong>zu<strong>kaufen</strong>, <strong>ab</strong>zu<strong>schließen</strong></p>
<p><strong>KEIN "zu" nach Modalverben!</strong> Ich kann schwimmen. (NICHT: Ich kann zu schwimmen.)</p>`,
      exercises: [
        {
          question: 'Ergänze: Es macht Spaß, mit den Kindern im Garten ___ spielen.',
          options: ['zu', 'um', 'für', '— (nichts)'],
          correct: 'zu',
          hint: 'Nach "Es macht Spaß" kommt Infinitiv mit zu',
          mnemonic: 'Es macht Spaß / Es ist wichtig / Ich habe Lust → + zu + Infinitiv',
          explanation: '"zu" comes before the infinitive: "Es macht Spaß, zu spielen."',
        },
        {
          question: 'Welcher Satz ist richtig?',
          options: [
            'Ich finde es wichtig, die Nachbarn zu grüßen.',
            'Ich finde es wichtig, zu die Nachbarn grüßen.',
            'Ich finde es wichtig, die Nachbarn grüßen zu.',
            'Ich finde es wichtig, grüßen zu die Nachbarn.',
          ],
          correct: 'Ich finde es wichtig, die Nachbarn zu grüßen.',
          hint: '"zu" steht direkt vor dem Infinitiv am Ende',
          mnemonic: 'Objekt + zu + Infinitiv (am Satzende)',
          explanation: '"zu" stands directly before the infinitive at the end of the clause.',
        },
        {
          question: 'Ergänze: Vergessen Sie nicht, die Haustür ___ (abschließen).',
          options: ['abzuschließen', 'zu abschließen', 'abschließen zu', 'ab zu schließen'],
          correct: 'abzuschließen',
          hint: 'Trennbares Verb: ab|schließen',
          mnemonic: 'ab + zu + schließen = abzuschließen (ein Wort!)',
          explanation: 'For separable verbs, "zu" goes between prefix and stem: abzuschließen.',
        },
        {
          question: 'Nach welchem Ausdruck kommt KEIN "zu"?',
          options: ['Modalverben (können, müssen...)', 'Es ist wichtig...', 'Ich habe Lust...', 'Es macht Spaß...'],
          correct: 'Modalverben (können, müssen...)',
          hint: 'Ich kann schwimmen. (nicht: zu schwimmen)',
          mnemonic: 'Modalverben (können, müssen, wollen...) = KEIN zu!',
          explanation: 'Modal verbs don\'t use "zu": "Ich kann schwimmen." NOT "Ich kann zu schwimmen."',
        },
        {
          question: 'Ergänze: Linda hat heute Zeit, für ihre Nachbarin ___.',
          options: ['einzukaufen', 'zu einkaufen', 'einkaufen zu', 'ein zu kaufen'],
          correct: 'einzukaufen',
          hint: 'ein|kaufen ist trennbar',
          mnemonic: 'ein + zu + kaufen = einzukaufen',
          explanation: '"einkaufen" is separable: ein-zu-kaufen → "einzukaufen".',
        },
      ],
    },
    {
      title: 'sowohl...als auch / weder...noch',
      explanation: `<h4>Doppelkonnektoren</h4>
<table><thead><tr><th>Konnektor</th><th>Bedeutung</th><th>Beispiel</th></tr></thead><tbody>
<tr><td><strong>sowohl ... als auch</strong></td><td>both ... and<br/>(Beides zusammen!)</td><td>Er mag <strong>sowohl</strong> Hunde <strong>als auch</strong> Katzen.<br/>Die Wohnung ist <strong>sowohl</strong> groß <strong>als auch</strong> hell.</td></tr>
<tr><td><strong>weder ... noch</strong></td><td>neither ... nor<br/>(Keins von beiden!)</td><td>Sie spielt <strong>weder</strong> Klavier <strong>noch</strong> Gitarre.<br/>Er hat <strong>weder</strong> Zeit <strong>noch</strong> Geld.</td></tr>
</tbody></table>
<p><strong>Achtung:</strong> sowohl...als auch (NICHT: sowohl...und auch!)<br/>weder...noch (NICHT: weder...als auch!)</p>`,
      exercises: [
        {
          question: 'Ergänze: Theo mag ___ Hunde ___ Katzen. (Er mag beides!)',
          options: ['sowohl...als auch', 'weder...noch', 'entweder...oder', 'nicht...sondern'],
          correct: 'sowohl...als auch',
          hint: 'Er mag beides',
          mnemonic: 'Positive (beides) = sowohl...als auch',
          explanation: '"Theo mag sowohl Hunde als auch Katzen." = Theo likes both dogs and cats.',
        },
        {
          question: 'Ergänze: Sie spielt ___ Klavier ___ Gitarre. (Sie kann kein Instrument!)',
          options: ['weder...noch', 'sowohl...als auch', 'entweder...oder', 'nicht nur...sondern auch'],
          correct: 'weder...noch',
          hint: 'Sie kann gar kein Instrument',
          mnemonic: 'Negativ (keins von beiden) = weder...noch',
          explanation: '"Sie spielt weder Klavier noch Gitarre." = She plays neither piano nor guitar.',
        },
        {
          question: '"Die neue Wohnung ist sowohl groß ___ auch hell." – Ergänze.',
          options: ['als', 'und', 'wie', 'noch'],
          correct: 'als',
          hint: 'sowohl...ALS auch',
          mnemonic: 'Die Formel: sowohl + A + als auch + B',
          explanation: 'The fixed pattern is "sowohl...als auch" (not "und" or "wie").',
        },
        {
          question: '"Das Baby ist weder müde ___ hungrig." – Ergänze.',
          options: ['noch', 'als', 'oder', 'und'],
          correct: 'noch',
          hint: 'weder...NOCH',
          mnemonic: 'Die Formel: weder + A + noch + B',
          explanation: 'The fixed pattern is "weder...noch". The baby is neither tired nor hungry.',
        },
        {
          question: 'Übersetze: "I have neither time nor money."',
          options: [
            'Ich habe weder Zeit noch Geld.',
            'Ich habe sowohl Zeit als auch Geld.',
            'Ich habe keine Zeit und kein Geld.',
            'Ich habe weder Zeit als auch Geld.',
          ],
          correct: 'Ich habe weder Zeit noch Geld.',
          hint: 'neither...nor = weder...noch',
          mnemonic: 'neither...nor = weder...noch (NICHT: weder...als auch!)',
          explanation: '"Ich habe weder Zeit noch Geld." = I have neither time nor money.',
        },
      ],
    },
    {
      title: 'Höfliche Bitten (Konjunktiv II)',
      explanation: `<h4>Höflich bitten und reagieren</h4>
<table><thead><tr><th>Situation</th><th>Ausdruck</th><th>Beispiel</th></tr></thead><tbody>
<tr><td><strong>Höflich bitten</strong></td><td>Könnten Sie...?<br/>Würden Sie bitte...?</td><td>Könnten Sie mir bitte helfen?<br/>Würden Sie bitte die Musik leiser machen?</td></tr>
<tr><td><strong>Positiv reagieren</strong></td><td>Ja, gern! / Klar!<br/>Kein Problem!</td><td>Ja, das mache ich gern.<br/>Klar, kein Problem!</td></tr>
<tr><td><strong>Negativ reagieren</strong></td><td>Tut mir leid...<br/>Leider nicht...</td><td>Tut mir leid, ich habe leider keine Zeit.<br/>Leider nicht, ich bin gerade beschäftigt.</td></tr>
<tr><td><strong>Sich entschuldigen</strong></td><td>Es tut mir leid.<br/>Entschuldigung!</td><td>Es tut mir sehr leid. Das kann ja mal vorkommen.</td></tr>
<tr><td><strong>Auf Entschuldigung reagieren</strong></td><td>Kein Problem!<br/>Macht nichts!</td><td>Keine Sorge, schon vergessen.<br/>Das ist sehr nett von Ihnen.</td></tr>
</tbody></table>
<p><strong>Bildung:</strong> können → könnten, werden → würden (+ Umlaut = höflicher!)</p>`,
      exercises: [
        {
          question: '"Könnten Sie mir bitte helfen?" – Was ist das?',
          options: ['Eine höfliche Bitte', 'Ein Befehl', 'Eine Beschwerde', 'Eine Frage'],
          correct: 'Eine höfliche Bitte',
          hint: 'Könnten = polite form of können',
          mnemonic: 'Könnten/Würden Sie... = polite request (Konjunktiv II)',
          explanation: '"Könnten Sie..." is a polite request using Konjunktiv II of "können".',
        },
        {
          question: 'Ergänze: "___ Sie mir bitte die Tür aufhalten?"',
          options: ['Könnten', 'Können', 'Konnten', 'Gekonnt'],
          correct: 'Könnten',
          hint: 'Höfliche Bitte = Konjunktiv II',
          mnemonic: 'Höflich bitten = Könnten Sie... / Würden Sie...',
          explanation: '"Könnten Sie mir bitte die Tür aufhalten?" = Could you please hold the door?',
        },
        {
          question: 'Welche Reaktion ist positiv auf eine Bitte?',
          options: ['Ja, gern! / Ja, klar!', 'Tut mir leid.', 'Leider nicht.', 'Das geht nicht.'],
          correct: 'Ja, gern! / Ja, klar!',
          hint: 'Positive Antwort',
          mnemonic: 'Positiv: Ja gern / klar / kein Problem',
          explanation: 'Positive responses: "Ja, gern!", "Ja, klar!", "Kein Problem!"',
        },
        {
          question: 'Wie reagiert man höflich auf eine Entschuldigung?',
          options: ['Kein Problem! / Macht nichts!', 'Danke!', 'Bitte!', 'Gern geschehen!'],
          correct: 'Kein Problem! / Macht nichts!',
          hint: 'Jemand entschuldigt sich bei dir',
          mnemonic: 'Entschuldigung → Kein Problem / Macht nichts / Schon vergessen',
          explanation: 'Accepting apologies: "Kein Problem!", "Macht nichts!", "Schon vergessen!"',
        },
        {
          question: '"Würden Sie bitte Ihr Auto woanders parken?" – Wie ist der Ton?',
          options: ['Höflich', 'Unhöflich', 'Ärgerlich', 'Neutral'],
          correct: 'Höflich',
          hint: 'Würden Sie bitte...',
          mnemonic: 'Würden Sie bitte... = very polite (Konjunktiv II)',
          explanation: '"Würden Sie bitte..." is a polite request using Konjunktiv II of "werden".',
        },
      ],
    },
  ],

  imageDescriptions: [
    {
      title: 'Ein Mehrfamilienhaus – Viele Menschen',
      description:
        'Auf dem Bild sieht man ein großes Mehrfamilienhaus mit vielen Wohnungen. Im Erdgeschoss gibt es einen Eingang mit einer Haustür. Auf den Balkonen hängt Wäsche zum Trocknen. Ein Mann mäht den Rasen vor dem Haus. Kinder spielen im Sandkasten neben dem Spielplatz. Eine Frau steht am Fenster und schaut nach draußen. Im Treppenhaus stehen Fahrräder und Kinderwagen. Die Mülltonnen stehen ordentlich neben der Garage. Es ist ein sonniger Tag und die Nachbarn unterhalten sich im Garten.',
      examSentences: [
        'Auf dem Bild sieht man ein Mehrfamilienhaus.',
        'Im Vordergrund spielen Kinder im Sandkasten.',
        'Ein Mann mäht den Rasen vor dem Haus.',
        'Auf den Balkonen hängt Wäsche zum Trocknen.',
        'Die Nachbarn unterhalten sich freundlich im Garten.',
        'Im Hintergrund sieht man die Garage und die Mülltonnen.',
      ],
    },
    {
      title: 'Nachbarn im Gespräch',
      description:
        'Auf dem Bild sieht man zwei Nachbarn, die sich im Treppenhaus treffen. Ein Mann hält ein Paket in der Hand und spricht mit einer Frau. Die Frau lächelt freundlich. Sie scheinen sich gut zu verstehen. Der Mann bittet wahrscheinlich um einen Gefallen – vielleicht soll die Nachbarin ein Paket annehmen. Das Treppenhaus ist sauber und hell. An der Wand hängt eine Hausordnung.',
      examSentences: [
        'Auf dem Bild sieht man zwei Personen im Treppenhaus.',
        'Ein Mann spricht mit seiner Nachbarin.',
        'Er hält ein Paket in der Hand.',
        'Die Nachbarin lächelt freundlich.',
        'Sie scheinen sich gut zu verstehen.',
        'An der Wand hängt die Hausordnung des Hauses.',
      ],
    },
    {
      title: 'Mein Stadtteil',
      description:
        'Auf dem Bild sieht man einen ruhigen Stadtteil mit Wohnhäusern und Bäumen. Es gibt eine Fußgängerzone mit kleinen Geschäften und Cafés. Eine Bushaltestelle zeigt, dass die Verkehrsanbindung gut ist. Auf einem Spielplatz spielen Kinder. Die Gegend wirkt grün und familienfreundlich. Es gibt sowohl Einkaufsmöglichkeiten als auch Parks in der Nähe. Die Straßen sind sauber und die Häuser gut gepflegt.',
      examSentences: [
        'Auf dem Bild sieht man einen ruhigen Stadtteil.',
        'Es gibt eine Fußgängerzone mit Geschäften und Cafés.',
        'Die Verkehrsanbindung ist gut – man sieht eine Bushaltestelle.',
        'Auf dem Spielplatz spielen Kinder.',
        'Die Gegend ist grün und familienfreundlich.',
        'Es gibt sowohl Einkaufsmöglichkeiten als auch Parks in der Nähe.',
      ],
    },
  ],

  quiz: [
    // Wortschatz
    {
      question: "Was bedeutet 'die Hausordnung'?",
      options: ['the house rules', 'the house order', 'the homework', 'the household'],
      correct: 'the house rules',
      hint: 'Regeln für alle Bewohner im Haus',
      mnemonic: 'Haus (house) + Ordnung (order/rules) = house rules',
      explanation: "'die Hausordnung' = the house rules that all residents must follow.",
    },
    {
      question: "Welches Wort beschreibt das unterste Stockwerk?",
      options: ['das Erdgeschoss', 'der Keller', 'der Stock', 'der Flur'],
      correct: 'das Erdgeschoss',
      hint: 'Erd = Erde (earth), Geschoss = floor',
      mnemonic: 'Erdgeschoss = ground floor (Erde = earth/ground)',
      explanation: "'das Erdgeschoss' is the ground floor. 'der Keller' is the basement (below ground).",
    },
    {
      question: "'sich wohlfühlen' bedeutet...",
      options: ['to feel comfortable', 'to feel well', 'to feel wealthy', 'to feel strong'],
      correct: 'to feel comfortable',
      hint: 'wohl = comfortable, fühlen = to feel',
      mnemonic: 'sich wohl-fühlen = to feel comfortable/at home somewhere',
      explanation: "'Ich fühle mich in meinem Stadtteil sehr wohl.' = I feel very comfortable in my neighborhood.",
    },
    {
      question: "Was ist 'die Verkehrsanbindung'?",
      options: ['public transport connection', 'traffic jam', 'road construction', 'parking permit'],
      correct: 'public transport connection',
      hint: 'Verkehr = transport, Anbindung = connection',
      mnemonic: 'Verkehr (traffic/transport) + Anbindung (connection) = how well connected the area is',
      explanation: "'die Verkehrsanbindung' describes how well an area is connected by public transport.",
    },
    {
      question: "Was bedeutet 'Rücksicht nehmen auf'?",
      options: ['to be considerate of', 'to look back at', 'to give back to', 'to take revenge on'],
      correct: 'to be considerate of',
      hint: 'An andere Menschen denken',
      mnemonic: 'Rücksicht nehmen = to take consideration = be considerate',
      explanation: "'Man muss Rücksicht auf die Nachbarn nehmen.' = You must be considerate of the neighbors.",
    },
    // Grammatik
    {
      question: "Ergänze: 'Es ist wichtig, den Müll richtig ___ trennen.'",
      options: ['zu', 'um', 'für', '— (nichts)'],
      correct: 'zu',
      hint: 'Es ist wichtig → Infinitiv mit zu',
      mnemonic: 'Es ist wichtig/verboten/erlaubt → zu + Infinitiv',
      explanation: "'Es ist wichtig, den Müll richtig zu trennen.' – Infinitiv mit zu after adjective constructions.",
    },
    {
      question: "Wie lautet der richtige Satz mit einem trennbaren Verb?",
      options: [
        'Vergiss nicht, die Tür abzuschließen.',
        'Vergiss nicht, die Tür zu abschließen.',
        'Vergiss nicht, abschließen zu die Tür.',
        'Vergiss nicht, zu die Tür abschließen.',
      ],
      correct: 'Vergiss nicht, die Tür abzuschließen.',
      hint: 'ab|schließen ist trennbar → zu steht zwischen Vorsilbe und Verb',
      mnemonic: 'Trennbare Verben: Vorsilbe + zu + Verbstamm = abzuschließen (ein Wort!)',
      explanation: "For separable verbs, 'zu' goes between the prefix and the verb stem: ab-zu-schließen.",
    },
    {
      question: "'Die Wohnung ist ___ groß ___ hell.' (beides!) – Ergänze.",
      options: ['sowohl...als auch', 'weder...noch', 'entweder...oder', 'nicht...sondern'],
      correct: 'sowohl...als auch',
      hint: 'Sie ist beides: groß UND hell',
      mnemonic: 'both...and = sowohl...als auch',
      explanation: "'Die Wohnung ist sowohl groß als auch hell.' = The apartment is both big and bright.",
    },
    {
      question: "'Er hat ___ Zeit ___ Geld.' (keins von beiden!) – Ergänze.",
      options: ['weder...noch', 'sowohl...als auch', 'entweder...oder', 'nicht nur...sondern auch'],
      correct: 'weder...noch',
      hint: 'Er hat NICHTS davon',
      mnemonic: 'neither...nor = weder...noch',
      explanation: "'Er hat weder Zeit noch Geld.' = He has neither time nor money.",
    },
    {
      question: "Welche Form ist höflicher: '___ Sie bitte leiser sein?'",
      options: ['Könnten', 'Können', 'Müssen', 'Wollen'],
      correct: 'Könnten',
      hint: 'Konjunktiv II = höflicher',
      mnemonic: 'können → könnten (Konjunktiv II = polite form)',
      explanation: "'Könnten Sie...' (Konjunktiv II) is more polite than 'Können Sie...' (Indikativ).",
    },
    // Hausordnung & Modalverben
    {
      question: "'Es ist verboten, im Treppenhaus zu rauchen.' – Was bedeutet das?",
      options: ['Man darf nicht rauchen.', 'Man muss rauchen.', 'Man soll rauchen.', 'Man kann rauchen.'],
      correct: 'Man darf nicht rauchen.',
      hint: 'verboten = nicht erlaubt',
      mnemonic: 'verboten = darf nicht, erlaubt = darf',
      explanation: "'verboten' = forbidden = man darf nicht. Smoking is not allowed in the stairwell.",
    },
    {
      question: "Welcher Müll kommt in die gelbe Tonne?",
      options: ['Verpackung & Plastik', 'Papier & Zeitungen', 'Essensreste', 'Restmüll'],
      correct: 'Verpackung & Plastik',
      hint: 'Gelb = Verpackungsmüll',
      mnemonic: 'Blau = Papier, Gelb = Plastik/Verpackung, Braun = Bio, Grau = Rest',
      explanation: "German waste separation: gelbe Tonne = packaging, plastic, Kunststoff.",
    },
    // Bildbeschreibung
    {
      question: "Wie beginnt man eine Bildbeschreibung auf Deutsch?",
      options: ['Auf dem Bild sieht man...', 'Das Bild hat...', 'Ich sehe das Bild...', 'Es gibt ein Bild...'],
      correct: 'Auf dem Bild sieht man...',
      hint: 'Standardformulierung für die Prüfung',
      mnemonic: 'Auf dem Bild sieht man... = On the picture one can see...',
      explanation: "'Auf dem Bild sieht man...' is the standard way to start an image description in the B1 exam.",
    },
    {
      question: "Welches Wort benutzt man für den vorderen Teil eines Bildes?",
      options: ['Im Vordergrund', 'Im Hintergrund', 'In der Mitte', 'Auf der Seite'],
      correct: 'Im Vordergrund',
      hint: 'vorne = Vordergrund',
      mnemonic: 'Vordergrund = foreground, Hintergrund = background, In der Mitte = in the center',
      explanation: "'Im Vordergrund' = in the foreground. 'Im Hintergrund' = in the background.",
    },
    {
      question: "'Die Nachbarn ___ sich freundlich im Garten.' – Ergänze.",
      options: ['unterhalten', 'verstehen', 'entschuldigen', 'wohlfühlen'],
      correct: 'unterhalten',
      hint: 'miteinander sprechen',
      mnemonic: 'sich unterhalten = to chat/have a conversation',
      explanation: "'Die Nachbarn unterhalten sich.' = The neighbors are chatting. Useful for describing scenes.",
    },
  ],
};
