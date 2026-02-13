import type { QuizTopic } from '../../types';

export const a2Topics: QuizTopic[] = [
  {
    topic: "Perfekt Tense",
    questions: [
      { question: "What two parts form the Perfekt tense?", options: ["haben/sein + Partizip II", "werden + infinitive", "Modal + infinitive"], correct: "haben/sein + Partizip II", hint: "Ich habe gemacht / Ich bin gegangen", mnemonic: "Perfekt = haben/sein + past participle", explanation: "Perfekt: auxiliary verb (haben/sein) + Partizip II" },
      { question: "Which verbs use 'sein' in Perfekt?", options: ["All verbs", "Movement & change verbs", "Action verbs"], correct: "Movement & change verbs", hint: "gehen, fahren, werden, sterben", mnemonic: "Movement & Change = sein", explanation: "Verbs of movement and change of state use 'sein'" },
      { question: "What is the Partizip II of 'machen'?", options: ["gemacht", "gemachen", "macht"], correct: "gemacht", hint: "Regular verb: ge- + stem + -t", mnemonic: "GE-SANDWICH: ge + stem + t", explanation: "Regular verbs: ge- + stem + -t" },
      { question: "What is the Partizip II of 'gehen'?", options: ["gegeht", "gegangen", "gegehen"], correct: "gegangen", hint: "Irregular verb with -en", mnemonic: "Strong verbs: ge + stem change + en", explanation: "Irregular: ge- + gang + -en" },
      { question: "Complete: Ich ___ nach Hause gegangen. (I went home)", options: ["habe", "bin", "werde"], correct: "bin", hint: "'gehen' is a movement verb", mnemonic: "gehen (movement) → sein", explanation: "Movement verbs use 'sein': ich bin gegangen" },
      { question: "What happens to separable verbs in Partizip II?", options: ["Nothing special", "ge- goes between prefix and stem", "Drop the prefix"], correct: "ge- goes between prefix and stem", hint: "aufstehen → aufgestanden", mnemonic: "Separable: prefix + ge + stem + t/en", explanation: "aufstehen → aufgestanden, einkaufen → eingekauft" },
      { question: "Verbs starting with be-, er-, ver- have no...", options: ["Ending", "ge- prefix", "Meaning change"], correct: "ge- prefix", hint: "besuchen → besucht (not *gebesucht)", mnemonic: "be-, er-, ver-, ent-, emp-, zer- = NO ge-", explanation: "These prefixes replace ge-: besucht, erklärt, verstanden" },
      { question: "Complete: Ich habe ein Buch ___. (I read a book)", options: ["gelest", "gelesen", "lesen"], correct: "gelesen", hint: "lesen is irregular", mnemonic: "lesen → gelesen (irregular)", explanation: "Irregular past participle: gelesen" },
      { question: "Where does the Partizip II go?", options: ["Beginning", "After subject", "End of sentence"], correct: "End of sentence", hint: "Ich habe gestern ein Buch gelesen.", mnemonic: "Partizip II → END!", explanation: "Past participle always goes at the end" },
      { question: "Complete: Wir ___ nach Berlin gefahren. (We drove to Berlin)", options: ["haben", "sind", "werden"], correct: "sind", hint: "'fahren' indicates movement", mnemonic: "fahren (movement) → sein", explanation: "Movement verb 'fahren' uses 'sein'" }
    ]
  },
  {
    topic: "Modal Verbs",
    questions: [
      { question: "What does 'können' mean?", options: ["can/to be able to", "must/have to", "want to"], correct: "can/to be able to", hint: "Ability or possibility", mnemonic: "können = CAN", explanation: "Ich kann Deutsch sprechen. (I can speak German.)" },
      { question: "What does 'müssen' mean?", options: ["can", "must/have to", "may"], correct: "must/have to", hint: "Necessity or obligation", mnemonic: "müssen = MUST", explanation: "Ich muss gehen. (I must go.)" },
      { question: "Where does the infinitive go with modals?", options: ["Before modal", "After modal", "End of sentence"], correct: "End of sentence", hint: "Ich kann Deutsch sprechen.", mnemonic: "Modal verb + infinitive at END", explanation: "The infinitive always goes to the end" },
      { question: "What is 'ich' form of 'können'?", options: ["könne", "kann", "kannst"], correct: "kann", hint: "Modal verbs are irregular", mnemonic: "ich kann (NO -e ending!)", explanation: "Modal verbs: ich/er/sie/es have same form, no -e" },
      { question: "What does 'dürfen' mean?", options: ["can", "must", "may/to be allowed to"], correct: "may/to be allowed to", hint: "Permission", mnemonic: "dürfen = MAY (permission)", explanation: "Ich darf nicht rauchen. (I'm not allowed to smoke.)" },
      { question: "What does 'mögen' mean?", options: ["must", "to like", "can"], correct: "to like", hint: "Often used as möchten (would like)", mnemonic: "mögen = LIKE", explanation: "Ich mag Pizza. / Ich möchte Pizza. (I like/would like pizza.)" },
      { question: "Complete: Du ___ hier nicht rauchen. (You may not smoke here)", options: ["kannst", "darfst", "musst"], correct: "darfst", hint: "Permission/not allowed", mnemonic: "dürfen nicht = not allowed", explanation: "darfst nicht = you're not allowed to" },
      { question: "What does 'sollen' mean?", options: ["can", "should/supposed to", "want"], correct: "should/supposed to", hint: "Advice or what someone else wants you to do", mnemonic: "sollen = SHOULD", explanation: "Ich soll lernen. (I should study / I'm supposed to study)" },
      { question: "Complete: Ich ___ nach Hause gehen. (I want to go home)", options: ["will", "soll", "muss"], correct: "will", hint: "Expressing desire", mnemonic: "wollen = WANT", explanation: "will = want to (wollen)" },
      { question: "Modal verbs in ich/er/sie/es form...", options: ["Have -e/-t endings", "Are the same", "Have -st ending"], correct: "Are the same", hint: "ich kann, er kann", mnemonic: "Modals: ich/er = identical", explanation: "ich kann, er kann (same form!)" }
    ]
  },
  {
    topic: "Adjective Declension",
    questions: [
      { question: "After 'der', what ending does the adjective get?", options: ["-e", "-en", "-er"], correct: "-e", hint: "der gute Mann", mnemonic: "After der/die/das: mostly -e or -en", explanation: "der gute Mann, die schöne Frau, das kleine Kind" },
      { question: "After 'ein', adjective for masculine nominative?", options: ["-e", "-en", "-er"], correct: "-er", hint: "ein guter Mann", mnemonic: "After ein (masc nom): -er", explanation: "ein guter Mann (strong ending)" },
      { question: "With no article, adjective for feminine nominative?", options: ["-e", "-en", "-er"], correct: "-e", hint: "gute Musik", mnemonic: "No article (fem nom): -e", explanation: "gute Musik (strong ending)" },
      { question: "After 'den', adjective ending?", options: ["-e", "-en", "-er"], correct: "-en", hint: "den guten Mann", mnemonic: "After den/dem/des: always -en", explanation: "den guten Mann (accusative masculine)" },
      { question: "How do you say 'the good man'?", options: ["der gute Mann", "der guter Mann", "der guten Mann"], correct: "der gute Mann", hint: "After der, use -e", mnemonic: "der + adjective = -e", explanation: "der gute Mann (nominative)" },
      { question: "How do you say 'a good man'?", options: ["ein gute Mann", "ein guter Mann", "ein guten Mann"], correct: "ein guter Mann", hint: "After ein (masc nom), use -er", mnemonic: "ein Mann: adjective shows gender with -er", explanation: "ein guter Mann (nominative)" },
      { question: "Adjectives after diese, jede, alle get which ending?", options: ["Same as der", "Same as ein", "No ending"], correct: "Same as der", hint: "diese gute Frau", mnemonic: "diese/jede/alle = der-words", explanation: "diese gute Frau (weak declension)" },
      { question: "In dative plural, adjective ending is always?", options: ["-e", "-en", "-er"], correct: "-en", hint: "mit guten Freunden", mnemonic: "Dative plural: -en (always!)", explanation: "mit den guten Kindern" },
      { question: "Multiple adjectives before a noun?", options: ["Only first declines", "All get same ending", "Each different"], correct: "All get same ending", hint: "der große, schöne Baum", mnemonic: "All adjectives match!", explanation: "der große, schöne Baum (both -e)" },
      { question: "Adjective without article (masc nom)?", options: ["-e", "-en", "-er"], correct: "-er", hint: "guter Wein", mnemonic: "No article: adjective shows full gender", explanation: "guter Wein (strong ending -er)" }
    ]
  },
  {
    topic: "Comparative & Superlative",
    questions: [
      { question: "How do you form the comparative?", options: ["Add -er", "Add -est", "Add mehr"], correct: "Add -er", hint: "schnell → schneller", mnemonic: "Comparative: adjective + er", explanation: "klein → kleiner, groß → größer" },
      { question: "How do you form the superlative?", options: ["Add -er", "Add -est/-st", "Add meist"], correct: "Add -est/-st", hint: "schnell → am schnellsten", mnemonic: "Superlative: am + adjective + sten", explanation: "klein → am kleinsten, groß → am größten" },
      { question: "What is 'bigger'?", options: ["größ", "größer", "größten"], correct: "größer", hint: "groß + -er", mnemonic: "größer = bigger (umlaut!)", explanation: "groß → größer (add umlaut + er)" },
      { question: "What is 'the biggest'?", options: ["der größer", "der größte", "der groß"], correct: "der größte", hint: "Superlative with article", mnemonic: "der/die/das + adjective + ste", explanation: "der größte Mann (the biggest man)" },
      { question: "How do you say 'more beautiful'?", options: ["mehr schön", "schöner", "am schönsten"], correct: "schöner", hint: "Add -er, don't use 'mehr'", mnemonic: "No 'mehr'! Just add -er", explanation: "schön → schöner (more beautiful)" },
      { question: "What is 'better'?", options: ["guter", "besser", "am besten"], correct: "besser", hint: "Irregular form", mnemonic: "gut → besser (irregular!)", explanation: "gut → besser → am besten (best)" },
      { question: "How do you say 'than' in comparisons?", options: ["dann", "als", "wie"], correct: "als", hint: "größer als", mnemonic: "als = than (in comparisons)", explanation: "Ich bin größer als du. (I'm taller than you.)" },
      { question: "How do you say 'as... as'?", options: ["als... als", "so... wie", "wie... als"], correct: "so... wie", hint: "so groß wie", mnemonic: "so... wie = as... as", explanation: "Ich bin so groß wie du. (I'm as tall as you.)" },
      { question: "What is 'older'?", options: ["alter", "älter", "ältesten"], correct: "älter", hint: "alt + umlaut + er", mnemonic: "alt → älter (umlaut!)", explanation: "alt → älter → am ältesten" },
      { question: "Short adjectives in superlative use?", options: ["-est", "-st", "Both possible"], correct: "-st", hint: "am kleinsten", mnemonic: "Short adjectives: -st (not -est)", explanation: "klein → am kleinsten (just -st)" }
    ]
  },
  {
    topic: "Reflexive Verbs",
    questions: [
      { question: "What is a reflexive verb?", options: ["Verb with object", "Verb with sich", "Irregular verb"], correct: "Verb with sich", hint: "sich waschen (to wash oneself)", mnemonic: "Reflexive = sich (oneself)", explanation: "Action done to oneself: sich waschen" },
      { question: "Complete: Ich wasche ___. (I wash myself)", options: ["sich", "mich", "mir"], correct: "mich", hint: "Accusative case", mnemonic: "ich → mich (accusative reflexive)", explanation: "Ich wasche mich. (accusative reflexive)" },
      { question: "Complete: Du wäschst ___. (You wash yourself)", options: ["sich", "mich", "dich"], correct: "dich", hint: "du → dich", mnemonic: "du → dich (accusative reflexive)", explanation: "Du wäschst dich." },
      { question: "Complete: Er wäscht ___. (He washes himself)", options: ["sich", "ihn", "ihm"], correct: "sich", hint: "Third person uses sich", mnemonic: "er/sie/es → sich", explanation: "Er/sie/es wäscht sich. (always sich)" },
      { question: "What does 'sich freuen' mean?", options: ["to be happy", "to free oneself", "to freeze"], correct: "to be happy", hint: "Ich freue mich!", mnemonic: "sich freuen = to be happy/look forward to", explanation: "Ich freue mich! (I'm happy!)" },
      { question: "What does 'sich erinnern' mean?", options: ["to remember", "to remind", "to return"], correct: "to remember", hint: "Takes dative!", mnemonic: "sich erinnern an = to remember", explanation: "Ich erinnere mich an dich. (I remember you.)" },
      { question: "Complete: Wir waschen ___. (We wash ourselves)", options: ["sich", "uns", "euch"], correct: "uns", hint: "wir → uns", mnemonic: "wir → uns (reflexive)", explanation: "Wir waschen uns." },
      { question: "Some reflexive verbs take which case?", options: ["Only accusative", "Only dative", "Both possible"], correct: "Both possible", hint: "sich waschen (acc), sich vorstellen (dat)", mnemonic: "Most = acc, some = dat", explanation: "Ich wasche mich (acc) vs. Ich stelle mir vor (dat)" },
      { question: "What does 'sich beeilen' mean?", options: ["to hurry", "to bore", "to heal"], correct: "to hurry", hint: "Beil dich!", mnemonic: "sich beeilen = to hurry", explanation: "Ich beeile mich. (I'm hurrying.)" },
      { question: "Complete: Ihr wascht ___. (You all wash yourselves)", options: ["sich", "uns", "euch"], correct: "euch", hint: "ihr → euch", mnemonic: "ihr → euch (reflexive)", explanation: "Ihr wascht euch." }
    ]
  }
];
