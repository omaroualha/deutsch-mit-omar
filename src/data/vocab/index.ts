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
  }
];
