import type { QuizTopic } from '../../types';

export const vocabTopics: QuizTopic[] = [
  {
    topic: "Numbers",
    questions: [
      { question: "How do you say 21 in German?", options: ["zwanzig-eins", "einundzwanzig", "zwanzigein"], correct: "einundzwanzig", hint: "Remember: backwards!", mnemonic: "Numbers are BACKWARDS: one-and-twenty", explanation: "German says ones digit first: einundzwanzig (one and twenty)" },
      { question: "What does 'halb neun' mean?", options: ["9:30", "8:30", "4:30"], correct: "8:30", hint: "HALB = half TO the next hour!", mnemonic: "HALB = Half to NEXT hour!", explanation: "halb neun = half to nine = 8:30 (NOT 9:30!)" },
      { question: "How do you say 'zero'?", options: ["null", "nichts", "nein"], correct: "null", hint: "Like 'null' in English", mnemonic: "null = zero", explanation: "null (0)" },
      { question: "How do you say 100?", options: ["hundert", "einhundert", "cent"], correct: "hundert", hint: "Just 'hundert'", mnemonic: "hundert = 100", explanation: "hundert or einhundert (both correct)" },
      { question: "What is 'zwölf'?", options: ["11", "12", "20"], correct: "12", hint: "Twelve", mnemonic: "zwölf = 12 (twelve)", explanation: "zwölf (12)" },
      { question: "How do you say 99?", options: ["neunundneunzig", "neunzigneun", "neunneunzig"], correct: "neunundneunzig", hint: "Nine and ninety", mnemonic: "Backwards: neun-und-neunzig", explanation: "neununneunzig (nine and ninety)" },
      { question: "What is 'siebzehn'?", options: ["7", "17", "70"], correct: "17", hint: "Seventeen", mnemonic: "siebzehn = 17 (sieben + zehn)", explanation: "siebzehn (17)" },
      { question: "What is the word for 'first' (1st)?", options: ["eins", "erste", "erster"], correct: "erste", hint: "Ordinal number", mnemonic: "erste = first", explanation: "der/die/das erste (first)" },
      { question: "How do you say 1000?", options: ["tausend", "mille", "hundert"], correct: "tausend", hint: "Thousand", mnemonic: "tausend = 1000", explanation: "tausend (1000)" },
      { question: "What is 'Viertel nach drei'?", options: ["3:15", "3:45", "2:45"], correct: "3:15", hint: "Quarter past three", mnemonic: "Viertel nach = quarter past", explanation: "Viertel nach drei = 3:15 (quarter past three)" }
    ]
  },
  {
    topic: "Colors",
    questions: [
      { question: "What is 'rot'?", options: ["red", "yellow", "blue"], correct: "red", hint: "Think of 'rotten' tomatoes", mnemonic: "rot = red", explanation: "rot (red)" },
      { question: "What is 'blau'?", options: ["brown", "blue", "black"], correct: "blue", hint: "Sounds like 'blue'", mnemonic: "blau = blue", explanation: "blau (blue)" },
      { question: "What is 'gelb'?", options: ["yellow", "green", "gray"], correct: "yellow", hint: "Think of 'gelb' sounds soft", mnemonic: "gelb = yellow", explanation: "gelb (yellow)" },
      { question: "What is 'grün'?", options: ["green", "gray", "brown"], correct: "green", hint: "Sounds like 'green'", mnemonic: "grün = green", explanation: "grün (green)" },
      { question: "What is 'schwarz'?", options: ["white", "gray", "black"], correct: "black", hint: "Think of Schwarzenegger", mnemonic: "schwarz = black", explanation: "schwarz (black)" },
      { question: "What is 'weiß'?", options: ["white", "gray", "beige"], correct: "white", hint: "Think of 'white'", mnemonic: "weiß = white", explanation: "weiß (white)" },
      { question: "What is 'braun'?", options: ["brown", "blue", "black"], correct: "brown", hint: "Sounds like 'brown'", mnemonic: "braun = brown", explanation: "braun (brown)" },
      { question: "What is 'orange'?", options: ["orange", "yellow", "red"], correct: "orange", hint: "Same as English!", mnemonic: "orange = orange (same!)", explanation: "orange (orange) - same word!" },
      { question: "What is 'rosa'?", options: ["red", "pink", "purple"], correct: "pink", hint: "Like 'rosé' wine", mnemonic: "rosa = pink/rose", explanation: "rosa (pink)" },
      { question: "What is 'lila'?", options: ["purple", "blue", "pink"], correct: "purple", hint: "Like 'lilac'", mnemonic: "lila = purple/violet", explanation: "lila (purple/violet)" }
    ]
  },
  {
    topic: "Family & People",
    questions: [
      { question: "How do you say 'father'?", options: ["der Vater", "der Mutter", "der Bruder"], correct: "der Vater", hint: "Similar to English", mnemonic: "Vater = father", explanation: "der Vater (father)" },
      { question: "How do you say 'mother'?", options: ["die Mutter", "die Vater", "die Schwester"], correct: "die Mutter", hint: "Similar to 'mother'", mnemonic: "Mutter = mother", explanation: "die Mutter (mother)" },
      { question: "How do you say 'brother'?", options: ["der Bruder", "der Schwester", "der Onkel"], correct: "der Bruder", hint: "Sounds like 'brother'", mnemonic: "Bruder = brother", explanation: "der Bruder (brother)" },
      { question: "How do you say 'sister'?", options: ["die Schwester", "die Bruder", "die Tante"], correct: "die Schwester", hint: "Think of 'sister'", mnemonic: "Schwester = sister", explanation: "die Schwester (sister)" },
      { question: "How do you say 'parents'?", options: ["die Eltern", "die Kinder", "die Familie"], correct: "die Eltern", hint: "Plural form", mnemonic: "Eltern = parents", explanation: "die Eltern (parents)" },
      { question: "How do you say 'grandfather'?", options: ["der Großvater", "der Vater", "der Onkel"], correct: "der Großvater", hint: "groß = big/grand", mnemonic: "Großvater = grandfather (big father)", explanation: "der Großvater or der Opa (grandfather)" },
      { question: "How do you say 'children'?", options: ["die Kind", "die Kinder", "das Kinder"], correct: "die Kinder", hint: "Plural of Kind", mnemonic: "Kinder = children", explanation: "die Kinder (children, plural of das Kind)" },
      { question: "How do you say 'husband'?", options: ["der Mann", "der Frau", "der Ehemann"], correct: "der Ehemann", hint: "Ehe = marriage", mnemonic: "Ehemann = husband (marriage-man)", explanation: "der Ehemann or der Mann (husband)" },
      { question: "How do you say 'wife'?", options: ["die Frau", "die Mann", "die Ehefrau"], correct: "die Ehefrau", hint: "Ehe = marriage", mnemonic: "Ehefrau = wife (marriage-woman)", explanation: "die Ehefrau or die Frau (wife)" },
      { question: "How do you say 'son'?", options: ["der Sohn", "der Tochter", "der Kind"], correct: "der Sohn", hint: "Similar to 'son'", mnemonic: "Sohn = son", explanation: "der Sohn (son)" }
    ]
  },
  {
    topic: "Food & Drinks",
    questions: [
      { question: "How do you say 'bread'?", options: ["das Brot", "der Brot", "die Brot"], correct: "das Brot", hint: "Neuter noun", mnemonic: "das Brot = bread", explanation: "das Brot (bread)", genderColors: ["n", "m", "f"] },
      { question: "How do you say 'water'?", options: ["das Wasser", "der Wasser", "die Wasser"], correct: "das Wasser", hint: "Neuter noun", mnemonic: "das Wasser = water", explanation: "das Wasser (water)", genderColors: ["n", "m", "f"] },
      { question: "How do you say 'coffee'?", options: ["der Kaffee", "das Kaffee", "die Kaffee"], correct: "der Kaffee", hint: "Masculine", mnemonic: "der Kaffee = coffee", explanation: "der Kaffee (coffee)", genderColors: ["m", "n", "f"] },
      { question: "How do you say 'beer'?", options: ["das Bier", "der Bier", "die Bier"], correct: "das Bier", hint: "Neuter", mnemonic: "das Bier = beer", explanation: "das Bier (beer)", genderColors: ["n", "m", "f"] },
      { question: "How do you say 'apple'?", options: ["der Apfel", "die Apfel", "das Apfel"], correct: "der Apfel", hint: "Masculine", mnemonic: "der Apfel = apple", explanation: "der Apfel (apple), plural: die Äpfel", genderColors: ["m", "f", "n"] },
      { question: "How do you say 'milk'?", options: ["die Milch", "der Milch", "das Milch"], correct: "die Milch", hint: "Feminine", mnemonic: "die Milch = milk", explanation: "die Milch (milk)", genderColors: ["f", "m", "n"] },
      { question: "How do you say 'cheese'?", options: ["der Käse", "die Käse", "das Käse"], correct: "der Käse", hint: "Masculine", mnemonic: "der Käse = cheese", explanation: "der Käse (cheese)", genderColors: ["m", "f", "n"] },
      { question: "How do you say 'meat'?", options: ["das Fleisch", "der Fleisch", "die Fleisch"], correct: "das Fleisch", hint: "Neuter", mnemonic: "das Fleisch = meat", explanation: "das Fleisch (meat)", genderColors: ["n", "m", "f"] },
      { question: "How do you say 'egg'?", options: ["das Ei", "der Ei", "die Ei"], correct: "das Ei", hint: "Neuter", mnemonic: "das Ei = egg", explanation: "das Ei (egg), plural: die Eier", genderColors: ["n", "m", "f"] },
      { question: "How do you say 'wine'?", options: ["der Wein", "das Wein", "die Wein"], correct: "der Wein", hint: "Masculine", mnemonic: "der Wein = wine", explanation: "der Wein (wine)", genderColors: ["m", "n", "f"] }
    ]
  },
  {
    topic: "Body Parts",
    questions: [
      { question: "How do you say 'head'?", options: ["der Kopf", "das Kopf", "die Kopf"], correct: "der Kopf", hint: "Masculine", mnemonic: "der Kopf = head", explanation: "der Kopf (head)", genderColors: ["m", "n", "f"] },
      { question: "How do you say 'hand'?", options: ["die Hand", "der Hand", "das Hand"], correct: "die Hand", hint: "Feminine", mnemonic: "die Hand = hand", explanation: "die Hand (hand)", genderColors: ["f", "m", "n"] },
      { question: "How do you say 'foot'?", options: ["der Fuß", "die Fuß", "das Fuß"], correct: "der Fuß", hint: "Masculine", mnemonic: "der Fuß = foot", explanation: "der Fuß (foot), plural: die Füße", genderColors: ["m", "f", "n"] },
      { question: "How do you say 'eye'?", options: ["das Auge", "der Auge", "die Auge"], correct: "das Auge", hint: "Neuter", mnemonic: "das Auge = eye", explanation: "das Auge (eye), plural: die Augen", genderColors: ["n", "m", "f"] },
      { question: "How do you say 'ear'?", options: ["das Ohr", "der Ohr", "die Ohr"], correct: "das Ohr", hint: "Neuter", mnemonic: "das Ohr = ear", explanation: "das Ohr (ear), plural: die Ohren", genderColors: ["n", "m", "f"] },
      { question: "How do you say 'mouth'?", options: ["der Mund", "das Mund", "die Mund"], correct: "der Mund", hint: "Masculine", mnemonic: "der Mund = mouth", explanation: "der Mund (mouth)", genderColors: ["m", "n", "f"] },
      { question: "How do you say 'nose'?", options: ["die Nase", "der Nase", "das Nase"], correct: "die Nase", hint: "Feminine", mnemonic: "die Nase = nose", explanation: "die Nase (nose)", genderColors: ["f", "m", "n"] },
      { question: "How do you say 'arm'?", options: ["der Arm", "das Arm", "die Arm"], correct: "der Arm", hint: "Masculine", mnemonic: "der Arm = arm", explanation: "der Arm (arm)", genderColors: ["m", "n", "f"] },
      { question: "How do you say 'leg'?", options: ["das Bein", "der Bein", "die Bein"], correct: "das Bein", hint: "Neuter", mnemonic: "das Bein = leg", explanation: "das Bein (leg)", genderColors: ["n", "m", "f"] },
      { question: "How do you say 'heart'?", options: ["das Herz", "der Herz", "die Herz"], correct: "das Herz", hint: "Neuter", mnemonic: "das Herz = heart", explanation: "das Herz (heart)", genderColors: ["n", "m", "f"] }
    ]
  },
  {
    topic: "Common Phrases",
    questions: [
      { question: "How do you say 'Hello'?", options: ["Hallo", "Tschüss", "Danke"], correct: "Hallo", hint: "Universal greeting", mnemonic: "Hallo = Hello", explanation: "Hallo (hello, informal)" },
      { question: "How do you say 'Goodbye'?", options: ["Hallo", "Auf Wiedersehen", "Bitte"], correct: "Auf Wiedersehen", hint: "Formal goodbye", mnemonic: "Auf Wiedersehen = Goodbye (formal)", explanation: "Auf Wiedersehen (goodbye, formal) or Tschüss (informal)" },
      { question: "How do you say 'Please'?", options: ["Danke", "Bitte", "Entschuldigung"], correct: "Bitte", hint: "Also means 'you're welcome'", mnemonic: "Bitte = Please / You're welcome", explanation: "Bitte (please / you're welcome)" },
      { question: "How do you say 'Thank you'?", options: ["Bitte", "Danke", "Ja"], correct: "Danke", hint: "Thanks!", mnemonic: "Danke = Thank you", explanation: "Danke or Danke schön (thank you)" },
      { question: "How do you say 'Excuse me'?", options: ["Entschuldigung", "Bitte", "Danke"], correct: "Entschuldigung", hint: "To get attention or apologize", mnemonic: "Entschuldigung = Excuse me / Sorry", explanation: "Entschuldigung (excuse me / I'm sorry)" },
      { question: "How do you say 'Yes'?", options: ["Nein", "Ja", "Bitte"], correct: "Ja", hint: "Affirmative", mnemonic: "Ja = Yes", explanation: "Ja (yes)" },
      { question: "How do you say 'No'?", options: ["Ja", "Nein", "Nicht"], correct: "Nein", hint: "Negative", mnemonic: "Nein = No", explanation: "Nein (no)" },
      { question: "How do you ask 'How are you?'", options: ["Wie geht's?", "Was machst du?", "Wo bist du?"], correct: "Wie geht's?", hint: "Informal way", mnemonic: "Wie geht's? = How are you? (informal)", explanation: "Wie geht's? or Wie geht es dir? (How are you?)" },
      { question: "How do you say 'I don't understand'?", options: ["Ich verstehe", "Ich verstehe nicht", "Ich weiß nicht"], correct: "Ich verstehe nicht", hint: "verstehen = to understand", mnemonic: "Ich verstehe nicht = I don't understand", explanation: "Ich verstehe nicht. (I don't understand.)" },
      { question: "How do you say 'My name is...'?", options: ["Ich heiße...", "Ich bin...", "Mein Name..."], correct: "Ich heiße...", hint: "heißen = to be called", mnemonic: "Ich heiße... = My name is... / I'm called...", explanation: "Ich heiße... or Mein Name ist..." }
    ]
  },
  {
    topic: "B1 Health & Emergency",
    questions: [
      { question: "How do you say 'hospital'?", options: ["das Krankenhaus", "die Krankenhaus", "der Krankenhaus"], correct: "das Krankenhaus", hint: "Neuter noun", mnemonic: "das Krankenhaus = hospital", explanation: "das Krankenhaus (hospital)", genderColors: ["n", "f", "m"] },
      { question: "How do you say 'emergency department (ER)'?", options: ["die Notaufnahme", "der Notaufnahme", "das Notaufnahme"], correct: "die Notaufnahme", hint: "Feminine noun", mnemonic: "die Notaufnahme = ER", explanation: "die Notaufnahme (emergency department)", genderColors: ["f", "m", "n"] },
      { question: "How do you say 'ambulance'?", options: ["der Krankenwagen", "die Krankenwagen", "das Krankenwagen"], correct: "der Krankenwagen", hint: "Masculine noun", mnemonic: "der Krankenwagen = ambulance", explanation: "der Krankenwagen (ambulance)", genderColors: ["m", "f", "n"] },
      { question: "How do you say 'injury'?", options: ["die Verletzung", "der Verletzung", "das Verletzung"], correct: "die Verletzung", hint: "-ung words are usually feminine", mnemonic: "-ung => die", explanation: "die Verletzung (injury)", genderColors: ["f", "m", "n"] },
      { question: "How do you say 'painkiller'?", options: ["das Schmerzmittel", "der Schmerzmittel", "die Schmerzmittel"], correct: "das Schmerzmittel", hint: "Neuter noun", mnemonic: "das Schmerzmittel = pain medicine", explanation: "das Schmerzmittel (painkiller)", genderColors: ["n", "m", "f"] },
      { question: "How do you say 'to fill out (a form)'?", options: ["ausfüllen", "abholen", "anrufen"], correct: "ausfüllen", hint: "Think of forms", mnemonic: "Formular ausfüllen = fill out a form", explanation: "ausfüllen = to fill out" },
      { question: "What does 'Gute Besserung!' mean?", options: ["Get well soon!", "Good evening!", "Take care!"], correct: "Get well soon!", hint: "Common phrase for sick people", mnemonic: "Besser = better", explanation: "'Gute Besserung!' means 'Get well soon!'" },
      { question: "How do you say 'allergy'?", options: ["die Allergie", "der Allergie", "das Allergie"], correct: "die Allergie", hint: "Feminine noun", mnemonic: "die Allergie = allergy", explanation: "die Allergie (allergy)", genderColors: ["f", "m", "n"] },
      { question: "How do you say 'wound'?", options: ["die Wunde", "der Wunde", "das Wunde"], correct: "die Wunde", hint: "Feminine noun", mnemonic: "die Wunde = wound", explanation: "die Wunde (wound)", genderColors: ["f", "m", "n"] },
      { question: "How do you say 'to call 112'?", options: ["112 anrufen", "112 ausfüllen", "112 warten"], correct: "112 anrufen", hint: "Emergency call", mnemonic: "anrufen = call", explanation: "112 anrufen = to call 112" }
    ]
  },
  {
    topic: "B1 Environment & Climate",
    questions: [
      { question: "How do you say 'waste separation'?", options: ["die Mülltrennung", "der Mülltrennung", "das Mülltrennung"], correct: "die Mülltrennung", hint: "Feminine noun", mnemonic: "die Mülltrennung = waste separation", explanation: "die Mülltrennung (waste separation)", genderColors: ["f", "m", "n"] },
      { question: "How do you say 'plastic packaging'?", options: ["die Plastikverpackung", "das Plastikverpackung", "der Plastikverpackung"], correct: "die Plastikverpackung", hint: "-ung ending", mnemonic: "-ung nouns are feminine", explanation: "die Plastikverpackung (plastic packaging)", genderColors: ["f", "n", "m"] },
      { question: "How do you say 'to recycle'?", options: ["recyceln", "vermeiden", "heizen"], correct: "recyceln", hint: "Modern loanword", mnemonic: "recyceln = recycle", explanation: "recyceln = to recycle" },
      { question: "How do you say 'to save energy'?", options: ["Energie sparen", "Energie machen", "Energie trinken"], correct: "Energie sparen", hint: "sparen = save", mnemonic: "sparen = save", explanation: "Energie sparen = to save energy" },
      { question: "How do you say 'socket / outlet'?", options: ["die Steckdose", "der Steckdose", "das Steckdose"], correct: "die Steckdose", hint: "Feminine noun", mnemonic: "die Steckdose = wall socket", explanation: "die Steckdose (socket / outlet)", genderColors: ["f", "m", "n"] },
      { question: "How do you say 'plug'?", options: ["der Stecker", "die Stecker", "das Stecker"], correct: "der Stecker", hint: "Masculine noun", mnemonic: "der Stecker = plug", explanation: "der Stecker (plug)", genderColors: ["m", "f", "n"] },
      { question: "How do you say 'to switch off'?", options: ["ausschalten", "einschalten", "abholen"], correct: "ausschalten", hint: "Opposite of einschalten", mnemonic: "aus = off", explanation: "ausschalten = to switch off" },
      { question: "What is 'der Klimawandel'?", options: ["climate change", "air pollution", "weather forecast"], correct: "climate change", hint: "Important B1 topic", mnemonic: "Klima + Wandel", explanation: "der Klimawandel = climate change" },
      { question: "How do you say 'public transport'?", options: ["die öffentlichen Verkehrsmittel", "der öffentliche Verkehrsmittel", "das öffentlichen Verkehrsmittel"], correct: "die öffentlichen Verkehrsmittel", hint: "Always plural", mnemonic: "Verkehrsmittel = means of transport", explanation: "die öffentlichen Verkehrsmittel = public transport", genderColors: ["p", "m", "n"] },
      { question: "How do you say 'environmentally friendly'?", options: ["umweltfreundlich", "umweltschwer", "umweltklar"], correct: "umweltfreundlich", hint: "Adjective", mnemonic: "freundlich = friendly", explanation: "umweltfreundlich = environmentally friendly" }
    ]
  },
  {
    topic: "B1 Communication & Work",
    questions: [
      { question: "How do you say 'In my opinion ...'?", options: ["Meiner Meinung nach ...", "Meine Meinung ist ...", "Ich Meinung nach ..."], correct: "Meiner Meinung nach ...", hint: "Standard B1 phrase", mnemonic: "Meiner Meinung nach = in my opinion", explanation: "'Meiner Meinung nach ...' is used to give your opinion." },
      { question: "How do you say 'I agree with you.'?", options: ["Da stimme ich dir zu.", "Ich denke dir.", "Da bin ich dir."], correct: "Da stimme ich dir zu.", hint: "Discussion phrase", mnemonic: "zustimmen = agree", explanation: "'Da stimme ich dir zu.' means 'I agree with you.'" },
      { question: "How do you say 'I have to disagree.'?", options: ["Da muss ich dir widersprechen.", "Da stimme ich dir zu.", "Ich bin gleich."], correct: "Da muss ich dir widersprechen.", hint: "Opposite of agreement", mnemonic: "widersprechen = disagree", explanation: "'Da muss ich dir widersprechen.' is a polite disagreement phrase." },
      { question: "How do you say 'training / apprenticeship'?", options: ["die Ausbildung", "der Ausbildung", "das Ausbildung"], correct: "die Ausbildung", hint: "Feminine noun", mnemonic: "die Ausbildung = apprenticeship", explanation: "die Ausbildung (training / apprenticeship)", genderColors: ["f", "m", "n"] },
      { question: "How do you say 'shift' (work shift)?", options: ["die Schicht", "der Schicht", "das Schicht"], correct: "die Schicht", hint: "Feminine noun", mnemonic: "die Schicht = shift", explanation: "die Schicht (work shift)", genderColors: ["f", "m", "n"] },
      { question: "How do you say 'weekend duty'?", options: ["der Wochenenddienst", "die Wochenenddienst", "das Wochenenddienst"], correct: "der Wochenenddienst", hint: "Masculine noun", mnemonic: "der Dienst = duty", explanation: "der Wochenenddienst (weekend duty)", genderColors: ["m", "f", "n"] },
      { question: "How do you say 'to advise'?", options: ["beraten", "bestellen", "überweisen"], correct: "beraten", hint: "Used in work/service context", mnemonic: "beraten = advise", explanation: "beraten = to advise / counsel" },
      { question: "How do you say 'to transfer (money)'?", options: ["überweisen", "ausfüllen", "vermeiden"], correct: "überweisen", hint: "Banking term", mnemonic: "überweisen = transfer money", explanation: "überweisen = to transfer (money)" },
      { question: "How do you say 'solution'?", options: ["die Lösung", "der Lösung", "das Lösung"], correct: "die Lösung", hint: "-ung noun", mnemonic: "-ung -> die", explanation: "die Lösung (solution)", genderColors: ["f", "m", "n"] },
      { question: "How do you say 'discussion / conversation'?", options: ["die Unterhaltung", "das Unterhaltung", "der Unterhaltung"], correct: "die Unterhaltung", hint: "Feminine noun", mnemonic: "die Unterhaltung = conversation", explanation: "die Unterhaltung (conversation)", genderColors: ["f", "n", "m"] }
    ]
  }
];
