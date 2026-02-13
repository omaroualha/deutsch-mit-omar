import type { QuizTopic } from '../../types';

export const a1Topics: QuizTopic[] = [
  {
    topic: "Articles (der/die/das)",
    questions: [
      { question: "What is the correct article for 'Mann' (man)?", options: ["der Mann", "die Mann", "das Mann"], correct: "der Mann", hint: "Male persons are usually masculine", mnemonic: "Men are Masculine = der Mann", explanation: "Masculine nouns (especially male persons) use 'der'", genderColors: ["m", "f", "n"] },
      { question: "What is the correct article for 'Frau' (woman)?", options: ["der Frau", "die Frau", "das Frau"], correct: "die Frau", hint: "Female persons are always feminine", mnemonic: "Women are Feminine = die Frau", explanation: "Feminine nouns (especially female persons) use 'die'", genderColors: ["m", "f", "n"] },
      { question: "What is the correct article for 'Kind' (child)?", options: ["der Kind", "die Kind", "das Kind"], correct: "das Kind", hint: "Young people/animals are often neuter", mnemonic: "Children = das Kind (neuter, like 'Mädchen')", explanation: "Neuter nouns use 'das'. Many diminutives and young beings are neuter", genderColors: ["m", "f", "n"] },
      { question: "Complete: Ich sehe ___ Mann. (I see the man)", options: ["der", "den", "dem"], correct: "den", hint: "This is accusative case - what changes?", mnemonic: "Only MASCULINE changes in accusative: der → den", explanation: "In accusative, masculine 'der' becomes 'den'", genderColors: ["m", "m", "m"] },
      { question: "Complete: Ich gebe ___ Frau ein Buch. (I give the woman a book)", options: ["die", "den", "der"], correct: "der", hint: "TO/FOR WHOM? Use dative case", mnemonic: "Everything gets an M in dative! die → der", explanation: "Dative feminine 'die' becomes 'der'", genderColors: ["f", "m", "f"] },
      { question: "What ending makes nouns ALWAYS neuter?", options: ["-ung", "-chen", "-heit"], correct: "-chen", hint: "Think of diminutives (little things)", mnemonic: "-chen and -lein = ALWAYS das (neuter)", explanation: "Diminutive endings like -chen (Mädchen, Häuschen) are always neuter" },
      { question: "What ending makes nouns ALWAYS feminine?", options: ["-er", "-ung", "-chen"], correct: "-ung", hint: "Think of abstract nouns", mnemonic: "-ung, -heit, -keit = ALWAYS die (feminine)", explanation: "Abstract noun endings like -ung (Zeitung, Wohnung) are always feminine" },
      { question: "Which article goes with 'Buch' (book)?", options: ["der", "die", "das"], correct: "das", hint: "Many objects and concepts are neuter", mnemonic: "Learn each noun with its article!", explanation: "'das Buch' - you must memorize article with each noun", genderColors: ["m", "f", "n"] },
      { question: "Complete: ___ ist ein Auto. (That is a car)", options: ["Der", "Die", "Das"], correct: "Das", hint: "Use nominative case for subject", mnemonic: "das Auto (neuter)", explanation: "Nominative case, 'Auto' is neuter", genderColors: ["m", "f", "n"] },
      { question: "When do you use NO article in German?", options: ["With professions after 'sein'", "With all nouns", "With names only"], correct: "With professions after 'sein'", hint: "Sie ist Lehrerin. (She's a teacher.)", mnemonic: "Professions & nationalities after sein = NO article", explanation: "Er ist Arzt. (He's a doctor.) - no article needed" }
    ]
  },
  {
    topic: "Nouns & Gender",
    questions: [
      { question: "What gender are most nouns ending in -er?", options: ["Masculine", "Feminine", "Neuter"], correct: "Masculine", hint: "Think of male professions: Lehrer, Bäcker", mnemonic: "-er endings = usually der (masculine)", explanation: "Most -er nouns are masculine: der Lehrer, der Computer", genderColors: ["m", "f", "n"] },
      { question: "What is the gender of 'Mädchen' (girl)?", options: ["Masculine", "Feminine", "Neuter"], correct: "Neuter", hint: "Look at the ending!", mnemonic: "-chen = ALWAYS das (even for girls!)", explanation: "'das Mädchen' - diminutive endings override logical gender", genderColors: ["m", "f", "n"] },
      { question: "Which are typically masculine?", options: ["Days, months, seasons", "Flowers", "Abstract concepts"], correct: "Days, months, seasons", hint: "der Montag, der Januar, der Sommer", mnemonic: "Time periods (days/months/seasons) = masculine", explanation: "der Montag, der Mai, der Winter - all masculine" },
      { question: "What gender is 'Sonne' (sun)?", options: ["Masculine", "Feminine", "Neuter"], correct: "Feminine", hint: "Opposite of what you might expect!", mnemonic: "die Sonne (fem), der Mond (masc) - backwards from Romance languages!", explanation: "In German, sun is feminine: die Sonne", genderColors: ["m", "f", "n"] },
      { question: "Nouns ending in -keit are always...", options: ["Masculine", "Feminine", "Neuter"], correct: "Feminine", hint: "Abstract quality nouns", mnemonic: "-keit, -heit, -ung, -schaft = ALWAYS die", explanation: "die Fähigkeit, die Möglichkeit - always feminine", genderColors: ["m", "f", "n"] },
      { question: "What is the gender of most German rivers?", options: ["Masculine", "Feminine", "Neuter"], correct: "Feminine", hint: "die Elbe, die Donau, die Spree", mnemonic: "Rivers = feminine (except der Rhein, der Main)", explanation: "Most rivers are feminine in German", genderColors: ["m", "f", "n"] },
      { question: "Foreign words ending in -ment are usually...", options: ["Masculine", "Feminine", "Neuter"], correct: "Neuter", hint: "das Dokument, das Experiment", mnemonic: "-ment = das (neuter)", explanation: "das Argument, das Instrument - neuter", genderColors: ["m", "f", "n"] },
      { question: "What gender are most German trees?", options: ["Masculine", "Feminine", "Neuter"], correct: "Feminine", hint: "die Eiche (oak), die Tanne (fir)", mnemonic: "Trees = feminine", explanation: "die Eiche, die Birke, die Tanne - all feminine", genderColors: ["m", "f", "n"] },
      { question: "Nouns from verb infinitives are always...", options: ["Masculine", "Feminine", "Neuter"], correct: "Neuter", hint: "das Essen (eating/food), das Leben (living/life)", mnemonic: "Infinitive → noun = das", explanation: "das Schreiben, das Lesen - always neuter", genderColors: ["m", "f", "n"] },
      { question: "What gender is 'Auto' (car)?", options: ["Masculine", "Feminine", "Neuter"], correct: "Neuter", hint: "das Auto", mnemonic: "Many vehicles are neuter: das Auto, das Fahrrad", explanation: "das Auto - most vehicles are neuter", genderColors: ["m", "f", "n"] }
    ]
  },
  {
    topic: "Cases (Nominative/Accusative/Dative)",
    questions: [
      { question: "Which case answers 'WHO does it?'", options: ["Nominative", "Accusative", "Dative"], correct: "Nominative", hint: "The subject of the sentence", mnemonic: "WHO does it? → Nominativ (subject)", explanation: "Nominative is always the subject doing the action" },
      { question: "Which case answers 'TO/FOR WHOM?'", options: ["Nominative", "Accusative", "Dative"], correct: "Dative", hint: "The indirect object", mnemonic: "TO/FOR WHOM? → Dativ", explanation: "Dative is the indirect object (recipient)" },
      { question: "In 'Ich sehe den Mann', what case is 'den Mann'?", options: ["Nominative", "Accusative", "Dative"], correct: "Accusative", hint: "WHAT do I see?", mnemonic: "WHAT is affected? → Akkusativ", explanation: "Direct object uses accusative case" },
      { question: "Complete: Ich helfe ___ Kind. (I help the child)", options: ["das", "den", "dem"], correct: "dem", hint: "'helfen' always takes dative", mnemonic: "helfen, danken, gefallen = dative verbs", explanation: "'helfen' requires dative object: dem Kind", genderColors: ["n", "m", "n"] },
      { question: "What changes in accusative case?", options: ["Everything", "Only masculine", "Only feminine"], correct: "Only masculine", hint: "der → den, ein → einen", mnemonic: "Akkusativ: Only MASCULINE changes!", explanation: "Only masculine articles change: der→den, ein→einen" },
      { question: "What happens in dative case?", options: ["Nothing changes", "Everything gets an M", "Only plural changes"], correct: "Everything gets an M", hint: "dem, dem, der (looks like M!)", mnemonic: "Dativ: Everything gets an M!", explanation: "der→dem, das→dem, die→der, plural→den (+n on noun)" },
      { question: "After 'sein' (to be), which case do you use?", options: ["Nominative", "Accusative", "Dative"], correct: "Nominative", hint: "Das ist ein Buch. (That is a book.)", mnemonic: "sein, werden, bleiben → Nominativ", explanation: "After 'sein', use nominative: Er ist ein Lehrer" },
      { question: "Complete: Ich gebe ___ Mann ___ Buch.", options: ["dem...das", "den...das", "der...den"], correct: "dem...das", hint: "TO whom (dative)? WHAT (accusative)?", mnemonic: "Give TO whom (DAT) what (AKK)", explanation: "dem Mann (dative) das Buch (accusative)" },
      { question: "Which verb takes dative?", options: ["sehen (to see)", "danken (to thank)", "haben (to have)"], correct: "danken (to thank)", hint: "You thank TO someone", mnemonic: "helfen, danken, gefallen, gehören = dative", explanation: "Ich danke dir. (I thank you.) - dative" },
      { question: "In dative plural, what happens to the noun?", options: ["Nothing", "Add -n", "Add -en"], correct: "Add -n", hint: "den Kindern, den Häusern", mnemonic: "Dative plural: den + noun adds -n", explanation: "Dative plural: den Kindern, den Frauen (add -n)" }
    ]
  },
  {
    topic: "Personal Pronouns",
    questions: [
      { question: "What is 'I' in accusative case?", options: ["ich", "mich", "mir"], correct: "mich", hint: "Who do you see? You see ME", mnemonic: "ICH-MICH-MIR", explanation: "Nominative: ich, Accusative: mich, Dative: mir" },
      { question: "What is 'you' (informal) in dative?", options: ["du", "dich", "dir"], correct: "dir", hint: "TO whom do I give it? TO you", mnemonic: "DU-DICH-DIR", explanation: "Nominative: du, Accusative: dich, Dative: dir" },
      { question: "Complete: Ich sehe ___. (I see you - informal)", options: ["du", "dich", "dir"], correct: "dich", hint: "Accusative case", mnemonic: "See WHOM? → accusative", explanation: "Direct object, so accusative: dich" },
      { question: "Complete: Ich helfe ___. (I help you - informal)", options: ["du", "dich", "dir"], correct: "dir", hint: "'helfen' takes dative", mnemonic: "helfen → dative", explanation: "helfen requires dative object: dir" },
      { question: "What is 'he' in accusative?", options: ["er", "ihn", "ihm"], correct: "ihn", hint: "Masculine pronoun in accusative", mnemonic: "er → ihn (like der → den)", explanation: "Nominative: er, Accusative: ihn, Dative: ihm" },
      { question: "Complete: Das gehört ___. (That belongs to me)", options: ["ich", "mich", "mir"], correct: "mir", hint: "'gehören' takes dative", mnemonic: "gehören (belong) → dative", explanation: "gehören requires dative: mir" },
      { question: "What is 'we' in accusative?", options: ["wir", "uns", "ihnen"], correct: "uns", hint: "Same as dative", mnemonic: "wir → uns (both AKK and DAT)", explanation: "Nominative: wir, Accusative/Dative: uns" },
      { question: "Complete: Ich glaube ___. (I believe you - formal)", options: ["Sie", "Ihnen", "Ihr"], correct: "Ihnen", hint: "'glauben' takes dative", mnemonic: "glauben → dative", explanation: "glauben requires dative: Ihnen (formal)" },
      { question: "What is 'she' in dative?", options: ["sie", "ihren", "ihr"], correct: "ihr", hint: "TO/FOR her", mnemonic: "sie → ihr (dative feminine)", explanation: "Nominative/Accusative: sie, Dative: ihr" },
      { question: "Complete: Gibst du ___ das Buch? (Will you give me the book?)", options: ["ich", "mich", "mir"], correct: "mir", hint: "Give TO whom?", mnemonic: "geben → TO whom = dative", explanation: "Indirect object of geben: mir (dative)" }
    ]
  },
  {
    topic: "Prepositions",
    questions: [
      { question: "Which prepositions ALWAYS take accusative?", options: ["DOGFU", "AUS-BEI-MIT", "AN-AUF-IN"], correct: "DOGFU", hint: "durch, ohne, gegen, für, um", mnemonic: "DOGFU = Akkusativ!", explanation: "Durch, Ohne, Gegen, Für, Um always take accusative" },
      { question: "Which prepositions ALWAYS take dative?", options: ["DOGFU", "AUS-BEI-MIT-NACH-SEIT-VON-ZU", "IN-AN-AUF"], correct: "AUS-BEI-MIT-NACH-SEIT-VON-ZU", hint: "Sing it!", mnemonic: "Sing: AUS-BEI-MIT-NACH-SEIT-VON-ZU", explanation: "These 7 prepositions always take dative" },
      { question: "Complete: Das ist für ___. (That's for you - informal)", options: ["du", "dich", "dir"], correct: "dich", hint: "'für' takes accusative", mnemonic: "für = part of DOGFU (accusative)", explanation: "für always takes accusative: dich" },
      { question: "Complete: Ich komme mit ___. (I'm coming with you - informal)", options: ["du", "dich", "dir"], correct: "dir", hint: "'mit' takes dative", mnemonic: "mit = part of AUS-BEI-MIT (dative)", explanation: "mit always takes dative: dir" },
      { question: "When does 'in' take accusative?", options: ["Always", "For movement (where to?)", "For location (where at?)"], correct: "For movement (where to?)", hint: "Ich gehe in die Schule. (I go into school)", mnemonic: "MOVEMENT = Akkusativ, LOCATION = Dativ", explanation: "Two-way prepositions: movement → accusative" },
      { question: "When does 'in' take dative?", options: ["Never", "For movement", "For location (where at?)"], correct: "For location (where at?)", hint: "Ich bin in der Schule. (I am in school)", mnemonic: "LOCATION (being there) = Dativ", explanation: "Two-way prepositions: location → dative" },
      { question: "Complete: Ich gehe durch ___ Park. (I walk through the park)", options: ["der", "den", "dem"], correct: "den", hint: "'durch' takes accusative", mnemonic: "durch = DOGFU (accusative)", explanation: "durch + accusative: den Park (masculine)", genderColors: ["m", "m", "m"] },
      { question: "Complete: nach ___ Schule (after school)", options: ["die", "den", "der"], correct: "der", hint: "'nach' takes dative", mnemonic: "nach = part of dative prepositions", explanation: "nach + dative: der Schule (feminine)", genderColors: ["f", "m", "f"] },
      { question: "Complete: Ich lege es auf ___ Tisch. (I put it on the table)", options: ["der", "den", "dem"], correct: "den", hint: "Movement - putting it onto", mnemonic: "MOVEMENT (laying onto) = Akkusativ", explanation: "auf + movement + accusative: den Tisch", genderColors: ["m", "m", "m"] },
      { question: "Complete: Es liegt auf ___ Tisch. (It lies on the table)", options: ["der", "den", "dem"], correct: "dem", hint: "Location - already there", mnemonic: "LOCATION (lying there) = Dativ", explanation: "auf + location + dative: dem Tisch", genderColors: ["m", "m", "m"] }
    ]
  },
  {
    topic: "Present Tense Verbs",
    questions: [
      { question: "What is the 'ich' form of 'spielen'?", options: ["spiele", "spielst", "spielt"], correct: "spiele", hint: "ich → -e ending", mnemonic: "ich = -e", explanation: "ich spiele (I play)" },
      { question: "What is the 'du' form of 'lernen'?", options: ["lerne", "lernst", "lernt"], correct: "lernst", hint: "du → -st ending", mnemonic: "du = -st", explanation: "du lernst (you learn)" },
      { question: "What is the 'er/sie/es' form of 'machen'?", options: ["mache", "machst", "macht"], correct: "macht", hint: "er/sie/es → -t ending", mnemonic: "er/sie/es = -t", explanation: "er macht (he makes/does)" },
      { question: "What is the 'wir' form of 'gehen'?", options: ["gehe", "gehst", "gehen"], correct: "gehen", hint: "Same as infinitive", mnemonic: "wir/sie/Sie = infinitive form (-en)", explanation: "wir gehen (we go)" },
      { question: "What is the 'ihr' form of 'kommen'?", options: ["komme", "kommst", "kommt"], correct: "kommt", hint: "ihr → -t ending", mnemonic: "ihr = -t (like er/sie/es)", explanation: "ihr kommt (you all come)" },
      { question: "Conjugate 'sein' for 'ich'", options: ["bin", "bist", "ist"], correct: "bin", hint: "Irregular verb", mnemonic: "ich bin (I am) - totally irregular!", explanation: "sein is completely irregular: ich bin" },
      { question: "Conjugate 'haben' for 'du'", options: ["habe", "hast", "hat"], correct: "hast", hint: "Irregular verb", mnemonic: "du hast (you have) - irregular", explanation: "haben is irregular: du hast (not *habst)" },
      { question: "Conjugate 'werden' for 'er'", options: ["werde", "wirst", "wird"], correct: "wird", hint: "Irregular verb", mnemonic: "er wird (he becomes) - irregular", explanation: "werden is irregular: er wird" },
      { question: "What happens to verbs ending in -t or -d?", options: ["Nothing special", "Add extra -e- before ending", "Drop the ending"], correct: "Add extra -e- before ending", hint: "arbeiten → du arbeitest", mnemonic: "-t/-d verbs: add -e- for pronunciation", explanation: "du arbeitest, er arbeitet (add -e- to make it pronounceable)" },
      { question: "Where does the verb go in a statement?", options: ["First position", "Second position", "End position"], correct: "Second position", hint: "Ich gehe. / Heute gehe ich.", mnemonic: "V2 = Verb Second (always!)", explanation: "German verb is ALWAYS in second position in statements" }
    ]
  }
];
