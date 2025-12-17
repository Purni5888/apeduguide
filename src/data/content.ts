export interface LocalizedString {
  en: string;
  te: string;
}

export interface QuizQuestion {
  question: LocalizedString;
  options: LocalizedString[];
  correctIndex: number;
  explanation?: LocalizedString;
}

export interface PracticeQuestion {
  question: LocalizedString;
  answer: LocalizedString;
  hint?: LocalizedString;
}

export interface Chapter {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  notes: LocalizedString;
  videoUrl?: string;
  quiz: QuizQuestion[];
  practice: PracticeQuestion[];
}

export interface Subject {
  id: string;
  title: LocalizedString;
  icon: string;
  color: string;
  chapters: Chapter[];
}

export interface ClassData {
  id: string;
  grade: number;
  title: LocalizedString;
  description: LocalizedString;
  subjects: Subject[];
}

export const classes: ClassData[] = [
  {
    id: "class-6",
    grade: 6,
    title: { en: "Class 6", te: "6వ తరగతి" },
    description: { en: "Foundation concepts for young learners", te: "యువ విద్యార్థుల కోసం పునాది భావనలు" },
    subjects: [
      {
        id: "mathematics-6",
        title: { en: "Mathematics", te: "గణితం" },
        icon: "Calculator",
        color: "game-blue",
        chapters: [
          {
            id: "numbers-6",
            title: { en: "Knowing Our Numbers", te: "మన సంఖ్యలను తెలుసుకోవడం" },
            description: { en: "Learn about large numbers and place values", te: "పెద్ద సంఖ్యలు మరియు స్థాన విలువల గురించి నేర్చుకోండి" },
            notes: {
              en: "## Knowing Our Numbers\n\n### Place Value System\nIn our number system, each digit has a place value. From right to left:\n- Ones (1)\n- Tens (10)\n- Hundreds (100)\n- Thousands (1,000)\n- Ten Thousands (10,000)\n- Lakhs (1,00,000)\n- Ten Lakhs (10,00,000)\n- Crores (1,00,00,000)\n\n### Indian vs International System\n**Indian System:** 1,00,00,000 = 1 Crore\n**International System:** 10,000,000 = 10 Million\n\n### Tips for Comparing Numbers\n1. Count the digits - more digits means larger number\n2. If same digits, compare from left to right\n3. Use estimation for quick comparison",
              te: "## మన సంఖ్యలను తెలుసుకోవడం\n\n### స్థాన విలువ వ్యవస్థ\nమన సంఖ్య వ్యవస్థలో, ప్రతి అంకెకు స్థాన విలువ ఉంటుంది:\n- ఒకట్లు (1)\n- పదులు (10)\n- వందలు (100)\n- వేలు (1,000)\n- పదివేలు (10,000)\n- లక్షలు (1,00,000)\n\n### భారతీయ vs అంతర్జాతీయ వ్యవస్థ\n**భారతీయ వ్యవస్థ:** 1,00,00,000 = 1 కోటి\n**అంతర్జాతీయ వ్యవస్థ:** 10,000,000 = 10 మిలియన్"
            },
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            quiz: [
              {
                question: { en: "What is the place value of 5 in 45,678?", te: "45,678 లో 5 యొక్క స్థాన విలువ ఎంత?" },
                options: [
                  { en: "5", te: "5" },
                  { en: "50", te: "50" },
                  { en: "500", te: "500" },
                  { en: "5,000", te: "5,000" }
                ],
                correctIndex: 3,
                explanation: { en: "5 is in the thousands place, so its value is 5,000", te: "5 వేల స్థానంలో ఉంది, కాబట్టి దాని విలువ 5,000" }
              },
              {
                question: { en: "Which is greater: 99,999 or 1,00,000?", te: "ఏది ఎక్కువ: 99,999 లేదా 1,00,000?" },
                options: [
                  { en: "99,999", te: "99,999" },
                  { en: "1,00,000", te: "1,00,000" },
                  { en: "Both are equal", te: "రెండూ సమానం" },
                  { en: "Cannot compare", te: "పోల్చలేము" }
                ],
                correctIndex: 1,
                explanation: { en: "1,00,000 has 6 digits while 99,999 has 5 digits", te: "1,00,000 కు 6 అంకెలు ఉన్నాయి, 99,999 కు 5 అంకెలు" }
              },
              {
                question: { en: "How many zeros are in 1 lakh?", te: "1 లక్షలో ఎన్ని సున్నాలు ఉన్నాయి?" },
                options: [
                  { en: "3", te: "3" },
                  { en: "4", te: "4" },
                  { en: "5", te: "5" },
                  { en: "6", te: "6" }
                ],
                correctIndex: 2,
                explanation: { en: "1 lakh = 1,00,000 which has 5 zeros", te: "1 లక్ష = 1,00,000 లో 5 సున్నాలు" }
              }
            ],
            practice: [
              {
                question: { en: "Write 45,23,789 in words (Indian System)", te: "45,23,789 ను భారతీయ వ్యవస్థలో అక్షరాలలో రాయండి" },
                answer: { en: "Forty-five lakh twenty-three thousand seven hundred eighty-nine", te: "నలభై ఐదు లక్షల ఇరవై మూడు వేల ఏడు వందల ఎనభై తొమ్మిది" },
                hint: { en: "Break the number into lakhs, thousands, hundreds, and ones", te: "సంఖ్యను లక్షలు, వేలు, వందలు, ఒకట్లుగా విభజించండి" }
              }
            ]
          },
          {
            id: "fractions-6",
            title: { en: "Fractions", te: "భిన్నాలు" },
            description: { en: "Understanding parts of a whole", te: "మొత్తం యొక్క భాగాలను అర్థం చేసుకోవడం" },
            notes: {
              en: "## Fractions\n\n### What is a Fraction?\nA fraction represents a part of a whole. It has two parts:\n- **Numerator** (top): Parts we have\n- **Denominator** (bottom): Total equal parts\n\n### Types of Fractions\n1. **Proper Fraction**: Numerator < Denominator (e.g., 3/4)\n2. **Improper Fraction**: Numerator ≥ Denominator (e.g., 5/3)\n3. **Mixed Number**: Whole number + Fraction (e.g., 2½)\n\n### Equivalent Fractions\nFractions that represent the same value:\n1/2 = 2/4 = 3/6 = 4/8",
              te: "## భిన్నాలు\n\n### భిన్నం అంటే ఏమిటి?\nభిన్నం మొత్తం యొక్క భాగాన్ని సూచిస్తుంది:\n- **లవం** (పై): మనకు ఉన్న భాగాలు\n- **హారం** (క్రింద): మొత్తం సమాన భాగాలు\n\n### భిన్నాల రకాలు\n1. **సరైన భిన్నం**: లవం < హారం\n2. **అసరైన భిన్నం**: లవం ≥ హారం\n3. **మిశ్రమ సంఖ్య**: పూర్ణ సంఖ్య + భిన్నం"
            },
            quiz: [
              {
                question: { en: "What type of fraction is 7/4?", te: "7/4 ఏ రకమైన భిన్నం?" },
                options: [
                  { en: "Proper fraction", te: "సరైన భిన్నం" },
                  { en: "Improper fraction", te: "అసరైన భిన్నం" },
                  { en: "Mixed number", te: "మిశ్రమ సంఖ్య" },
                  { en: "Unit fraction", te: "ఏకాంక భిన్నం" }
                ],
                correctIndex: 1
              }
            ],
            practice: [
              {
                question: { en: "Convert 11/4 to a mixed number", te: "11/4 ను మిశ్రమ సంఖ్యగా మార్చండి" },
                answer: { en: "2¾ (2 and 3/4)", te: "2¾ (2 మరియు 3/4)" }
              }
            ]
          }
        ]
      },
      {
        id: "science-6",
        title: { en: "Science", te: "సైన్స్" },
        icon: "FlaskConical",
        color: "game-green",
        chapters: [
          {
            id: "food-6",
            title: { en: "Food: Where Does It Come From?", te: "ఆహారం: ఎక్కడ నుండి వస్తుంది?" },
            description: { en: "Learn about sources of food", te: "ఆహార వనరుల గురించి తెలుసుకోండి" },
            notes: {
              en: "## Food: Where Does It Come From?\n\n### Sources of Food\nFood comes from two main sources:\n\n**1. Plants**\n- Fruits (mango, apple, banana)\n- Vegetables (carrot, spinach, potato)\n- Grains (rice, wheat, millets)\n- Pulses (dal, beans, lentils)\n\n**2. Animals**\n- Milk and dairy products\n- Eggs\n- Meat and fish\n- Honey (from bees)\n\n### Food Habits\n- **Herbivores**: Eat only plants (cow, deer, rabbit)\n- **Carnivores**: Eat only meat (lion, tiger, eagle)\n- **Omnivores**: Eat both plants and animals (humans, bear, crow)",
              te: "## ఆహారం: ఎక్కడ నుండి వస్తుంది?\n\n### ఆహార వనరులు\nఆహారం రెండు ప్రధాన వనరుల నుండి వస్తుంది:\n\n**1. మొక్కలు**\n- పండ్లు\n- కూరగాయలు\n- ధాన్యాలు\n- పప్పులు\n\n**2. జంతువులు**\n- పాలు మరియు పాల ఉత్పత్తులు\n- గుడ్లు\n- మాంసం మరియు చేపలు"
            },
            quiz: [
              {
                question: { en: "Which of these is a herbivore?", te: "వీటిలో శాకాహారి జంతువు ఏది?" },
                options: [
                  { en: "Lion", te: "సింహం" },
                  { en: "Cow", te: "ఆవు" },
                  { en: "Eagle", te: "గద్ద" },
                  { en: "Fox", te: "నక్క" }
                ],
                correctIndex: 1
              }
            ],
            practice: [
              {
                question: { en: "List 5 foods that come from plants", te: "మొక్కల నుండి వచ్చే 5 ఆహారాలను జాబితా చేయండి" },
                answer: { en: "Rice, wheat, mango, spinach, potato", te: "బియ్యం, గోధుమ, మామిడి, పాలకూర, బంగాళాదుంప" }
              }
            ]
          }
        ]
      },
      {
        id: "english-6",
        title: { en: "English", te: "ఆంగ్లం" },
        icon: "BookOpen",
        color: "game-purple",
        chapters: [
          {
            id: "who-did-patricks-homework",
            title: { en: "Who Did Patrick's Homework?", te: "పాట్రిక్ హోమ్‌వర్క్ ఎవరు చేశారు?" },
            description: { en: "A fun story about a lazy boy", te: "సోమరి బాలుడి గురించి ఆసక్తికరమైన కథ" },
            notes: {
              en: "## Who Did Patrick's Homework?\n\n### Story Summary\nPatrick was a lazy boy who hated doing homework. One day, he found a tiny elf who promised to do his homework in exchange for saving him from a cat.\n\n### Key Characters\n- **Patrick**: A schoolboy who didn't like homework\n- **The Elf**: A tiny man who helped Patrick\n\n### Moral of the Story\nThere are no shortcuts to success. Hard work is the only way to learn and grow.\n\n### New Vocabulary\n- **Ignoramus**: An ignorant person\n- **Nag**: To annoy by persistent fault-finding\n- **Shrieked**: Made a high-pitched sound",
              te: "## పాట్రిక్ హోమ్‌వర్క్ ఎవరు చేశారు?\n\n### కథ సారాంశం\nపాట్రిక్ హోమ్‌వర్క్ చేయడం ఇష్టపడని సోమరి బాలుడు. ఒకరోజు, అతనికి ఒక చిన్న ఎల్ఫ్ కనిపించింది.\n\n### కథ నీతి\nసఫలతకు షార్ట్‌కట్లు లేవు. కఠినమైన పని మాత్రమే నేర్చుకోవడానికి మార్గం."
            },
            quiz: [
              {
                question: { en: "What did Patrick find?", te: "పాట్రిక్ ఏమి కనుగొన్నాడు?" },
                options: [
                  { en: "A magic book", te: "మాయా పుస్తకం" },
                  { en: "A tiny elf", te: "ఒక చిన్న ఎల్ఫ్" },
                  { en: "A golden coin", te: "బంగారు నాణెం" },
                  { en: "A talking cat", te: "మాట్లాడే పిల్లి" }
                ],
                correctIndex: 1
              }
            ],
            practice: [
              {
                question: { en: "Write the moral of the story in your own words", te: "కథ నీతిని మీ స్వంత మాటల్లో రాయండి" },
                answer: { en: "Hard work has no substitute. We must do our own work to truly learn.", te: "కఠినమైన పనికి ప్రత్యామ్నాయం లేదు. నిజంగా నేర్చుకోవడానికి మన పని మనమే చేయాలి." }
              }
            ]
          }
        ]
      },
      {
        id: "social-6",
        title: { en: "Social Studies", te: "సామాజిక శాస్త్రం" },
        icon: "Globe",
        color: "game-orange",
        chapters: [
          {
            id: "history-when-where-how",
            title: { en: "What, Where, How and When?", te: "ఏమిటి, ఎక్కడ, ఎలా మరియు ఎప్పుడు?" },
            description: { en: "Introduction to History", te: "చరిత్ర పరిచయం" },
            notes: {
              en: "## What, Where, How and When?\n\n### What is History?\nHistory is the study of the past. It helps us understand how people lived, what they believed, and how societies changed over time.\n\n### Sources of History\n1. **Archaeological Sources**: Coins, inscriptions, monuments, pottery\n2. **Literary Sources**: Books, manuscripts, scriptures\n3. **Oral Sources**: Stories passed down through generations\n\n### Important Terms\n- **BCE (Before Common Era)**: Years before year 1\n- **CE (Common Era)**: Years after year 1\n- **Archaeology**: Study of ancient remains",
              te: "## ఏమిటి, ఎక్కడ, ఎలా మరియు ఎప్పుడు?\n\n### చరిత్ర అంటే ఏమిటి?\nచరిత్ర గత కాలం యొక్క అధ్యయనం. ప్రజలు ఎలా జీవించారో, వారు ఏమి నమ్మారో అర్థం చేసుకోవడానికి ఇది సహాయపడుతుంది.\n\n### చరిత్ర మూలాలు\n1. **పురావస్తు మూలాలు**: నాణేలు, శాసనాలు, కట్టడాలు\n2. **సాహిత్య మూలాలు**: పుస్తకాలు, రాతప్రతులు\n3. **మౌఖిక మూలాలు**: తరతరాలుగా వచ్చే కథలు"
            },
            quiz: [
              {
                question: { en: "What does BCE stand for?", te: "BCE అంటే ఏమిటి?" },
                options: [
                  { en: "Before Current Era", te: "ప్రస్తుత శకానికి ముందు" },
                  { en: "Before Common Era", te: "సామాన్య శకానికి ముందు" },
                  { en: "British Common Era", te: "బ్రిటిష్ సామాన్య శకం" },
                  { en: "Before Christ Era", te: "క్రీస్తు శకానికి ముందు" }
                ],
                correctIndex: 1
              }
            ],
            practice: [
              {
                question: { en: "Name three archaeological sources of history", te: "చరిత్ర యొక్క మూడు పురావస్తు మూలాలను పేర్కొనండి" },
                answer: { en: "Coins, inscriptions, and monuments", te: "నాణేలు, శాసనాలు, మరియు కట్టడాలు" }
              }
            ]
          }
        ]
      },
      {
        id: "telugu-6",
        title: { en: "Telugu", te: "తెలుగు" },
        icon: "Languages",
        color: "game-pink",
        chapters: [
          {
            id: "telugu-varnamala",
            title: { en: "Telugu Alphabet", te: "తెలుగు వర్ణమాల" },
            description: { en: "Learn Telugu letters and sounds", te: "తెలుగు అక్షరాలు మరియు ధ్వనులు నేర్చుకోండి" },
            notes: {
              en: "## Telugu Alphabet (Varnamala)\n\n### Vowels (అచ్చులు)\nఅ ఆ ఇ ఈ ఉ ఊ ఋ ౠ ఌ ౡ ఎ ఏ ఐ ఒ ఓ ఔ అం అః\n\n### Consonants (హల్లులు)\nక ఖ గ ఘ ఙ\nచ ఛ జ ఝ ఞ\nట ఠ డ ఢ ణ\nత థ ద ధ న\nప ఫ బ భ మ\nయ ర ల వ శ ష స హ ళ క్ష ఱ",
              te: "## తెలుగు వర్ణమాల\n\n### అచ్చులు\nఅ ఆ ఇ ఈ ఉ ఊ ఋ ఎ ఏ ఐ ఒ ఓ ఔ అం అః\n\n### హల్లులు\nక ఖ గ ఘ ఙ\nచ ఛ జ ఝ ఞ\nట ఠ డ ఢ ణ\nత థ ద ధ న\nప ఫ బ భ మ\nయ ర ల వ శ ష స హ ళ"
            },
            quiz: [
              {
                question: { en: "How many vowels are in Telugu?", te: "తెలుగులో ఎన్ని అచ్చులు ఉన్నాయి?" },
                options: [
                  { en: "12", te: "12" },
                  { en: "14", te: "14" },
                  { en: "16", te: "16" },
                  { en: "18", te: "18" }
                ],
                correctIndex: 2
              }
            ],
            practice: [
              {
                question: { en: "Write the first 5 vowels in Telugu", te: "మొదటి 5 అచ్చులను తెలుగులో రాయండి" },
                answer: { en: "అ ఆ ఇ ఈ ఉ", te: "అ ఆ ఇ ఈ ఉ" }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "class-7",
    grade: 7,
    title: { en: "Class 7", te: "7వ తరగతి" },
    description: { en: "Building on foundational knowledge", te: "పునాది జ్ఞానంపై నిర్మాణం" },
    subjects: [
      {
        id: "mathematics-7",
        title: { en: "Mathematics", te: "గణితం" },
        icon: "Calculator",
        color: "game-blue",
        chapters: [
          {
            id: "integers-7",
            title: { en: "Integers", te: "పూర్ణసంఖ్యలు" },
            description: { en: "Positive and negative numbers", te: "ధన మరియు ఋణ సంఖ్యలు" },
            notes: {
              en: "## Integers\n\n### What are Integers?\nIntegers include all positive numbers, negative numbers, and zero.\n... -3, -2, -1, 0, 1, 2, 3 ...\n\n### Rules for Operations\n**Addition:**\n- Same signs: Add and keep the sign\n- Different signs: Subtract and use sign of larger number\n\n**Multiplication/Division:**\n- Same signs: Positive result\n- Different signs: Negative result",
              te: "## పూర్ణసంఖ్యలు\n\n### పూర్ణసంఖ్యలు అంటే ఏమిటి?\nపూర్ణసంఖ్యలలో అన్ని ధన సంఖ్యలు, ఋణ సంఖ్యలు మరియు సున్నా ఉంటాయి.\n\n### కార్యకలాపాల నియమాలు\n**సంకలనం:**\n- ఒకే గుర్తులు: కలిపి గుర్తును ఉంచండి\n- వేర్వేరు గుర్తులు: తీసివేసి పెద్ద సంఖ్య గుర్తును వాడండి"
            },
            quiz: [
              {
                question: { en: "What is (-5) × (-3)?", te: "(-5) × (-3) ఎంత?" },
                options: [
                  { en: "-15", te: "-15" },
                  { en: "15", te: "15" },
                  { en: "-8", te: "-8" },
                  { en: "8", te: "8" }
                ],
                correctIndex: 1
              }
            ],
            practice: [
              {
                question: { en: "Calculate: (-12) + 7 - (-5)", te: "లెక్కించండి: (-12) + 7 - (-5)" },
                answer: { en: "0", te: "0" }
              }
            ]
          }
        ]
      },
      {
        id: "science-7",
        title: { en: "Science", te: "సైన్స్" },
        icon: "FlaskConical",
        color: "game-green",
        chapters: [
          {
            id: "nutrition-7",
            title: { en: "Nutrition in Plants", te: "మొక్కలలో పోషణ" },
            description: { en: "How plants make their food", te: "మొక్కలు ఆహారాన్ని ఎలా తయారు చేస్తాయి" },
            notes: {
              en: "## Nutrition in Plants\n\n### Photosynthesis\nPlants make their own food through photosynthesis.\n\n**Equation:**\n6CO₂ + 6H₂O + Sunlight → C₆H₁₂O₆ + 6O₂\n\n**Requirements:**\n- Carbon dioxide (from air)\n- Water (from soil)\n- Sunlight\n- Chlorophyll (green pigment)\n\n### Types of Nutrition\n1. **Autotrophic**: Make own food (plants)\n2. **Heterotrophic**: Depend on others (animals)",
              te: "## మొక్కలలో పోషణ\n\n### కిరణజన్య సంయోగక్రియ\nమొక్కలు కిరణజన్య సంయోగక్రియ ద్వారా తమ ఆహారాన్ని తయారు చేస్తాయి.\n\n**అవసరాలు:**\n- కార్బన్ డైయాక్సైడ్\n- నీరు\n- సూర్యకాంతి\n- క్లోరోఫిల్"
            },
            quiz: [
              {
                question: { en: "Which gas do plants release during photosynthesis?", te: "కిరణజన్య సంయోగక్రియలో మొక్కలు ఏ వాయువును విడుదల చేస్తాయి?" },
                options: [
                  { en: "Carbon dioxide", te: "కార్బన్ డైయాక్సైడ్" },
                  { en: "Nitrogen", te: "నత్రజని" },
                  { en: "Oxygen", te: "ఆక్సిజన్" },
                  { en: "Hydrogen", te: "హైడ్రోజన్" }
                ],
                correctIndex: 2
              }
            ],
            practice: []
          }
        ]
      }
    ]
  },
  {
    id: "class-8",
    grade: 8,
    title: { en: "Class 8", te: "8వ తరగతి" },
    description: { en: "Advanced concepts and applications", te: "ఆధునిక భావనలు మరియు అనువర్తనాలు" },
    subjects: [
      {
        id: "mathematics-8",
        title: { en: "Mathematics", te: "గణితం" },
        icon: "Calculator",
        color: "game-blue",
        chapters: [
          {
            id: "rational-numbers-8",
            title: { en: "Rational Numbers", te: "కరణీయ సంఖ్యలు" },
            description: { en: "Numbers that can be expressed as fractions", te: "భిన్నాలుగా వ్యక్తం చేయగల సంఖ్యలు" },
            notes: {
              en: "## Rational Numbers\n\n### Definition\nA rational number is any number that can be expressed as p/q, where p and q are integers and q ≠ 0.\n\n### Properties\n1. **Closure**: Rational numbers are closed under +, -, ×\n2. **Commutative**: a + b = b + a\n3. **Associative**: (a + b) + c = a + (b + c)\n4. **Distributive**: a × (b + c) = a×b + a×c",
              te: "## కరణీయ సంఖ్యలు\n\n### నిర్వచనం\nకరణీయ సంఖ్య p/q గా వ్యక్తం చేయగల ఏదైనా సంఖ్య, ఇక్కడ p మరియు q పూర్ణసంఖ్యలు మరియు q ≠ 0."
            },
            quiz: [
              {
                question: { en: "Which is NOT a rational number?", te: "ఏది కరణీయ సంఖ్య కాదు?" },
                options: [
                  { en: "3/4", te: "3/4" },
                  { en: "√2", te: "√2" },
                  { en: "-5", te: "-5" },
                  { en: "0", te: "0" }
                ],
                correctIndex: 1
              }
            ],
            practice: []
          }
        ]
      }
    ]
  },
  {
    id: "class-9",
    grade: 9,
    title: { en: "Class 9", te: "9వ తరగతి" },
    description: { en: "Pre-board preparation begins", te: "బోర్డ్ పరీక్ష తయారీ ప్రారంభం" },
    subjects: [
      {
        id: "mathematics-9",
        title: { en: "Mathematics", te: "గణితం" },
        icon: "Calculator",
        color: "game-blue",
        chapters: [
          {
            id: "polynomials-9",
            title: { en: "Polynomials", te: "బహుపదులు" },
            description: { en: "Algebraic expressions with variables", te: "చరరాశులతో బీజగణిత వ్యక్తీకరణలు" },
            notes: {
              en: "## Polynomials\n\n### Definition\nA polynomial is an expression with variables and coefficients.\n\n### Types by Degree\n- **Constant**: Degree 0 (e.g., 5)\n- **Linear**: Degree 1 (e.g., 2x + 3)\n- **Quadratic**: Degree 2 (e.g., x² + 2x + 1)\n- **Cubic**: Degree 3 (e.g., x³ - 1)\n\n### Remainder Theorem\nIf p(x) is divided by (x - a), remainder = p(a)",
              te: "## బహుపదులు\n\n### నిర్వచనం\nబహుపది అనేది చరరాశులు మరియు గుణకాలతో కూడిన వ్యక్తీకరణ.\n\n### డిగ్రీ ప్రకారం రకాలు\n- **స్థిరం**: డిగ్రీ 0\n- **రేఖీయ**: డిగ్రీ 1\n- **వర్గ**: డిగ్రీ 2\n- **ఘన**: డిగ్రీ 3"
            },
            quiz: [
              {
                question: { en: "What is the degree of 4x³ + 2x - 7?", te: "4x³ + 2x - 7 యొక్క డిగ్రీ ఎంత?" },
                options: [
                  { en: "1", te: "1" },
                  { en: "2", te: "2" },
                  { en: "3", te: "3" },
                  { en: "4", te: "4" }
                ],
                correctIndex: 2
              }
            ],
            practice: []
          }
        ]
      }
    ]
  },
  {
    id: "class-10",
    grade: 10,
    title: { en: "Class 10", te: "10వ తరగతి" },
    description: { en: "Board examination year", te: "బోర్డ్ పరీక్ష సంవత్సరం" },
    subjects: [
      {
        id: "mathematics-10",
        title: { en: "Mathematics", te: "గణితం" },
        icon: "Calculator",
        color: "game-blue",
        chapters: [
          {
            id: "real-numbers-10",
            title: { en: "Real Numbers", te: "వాస్తవ సంఖ్యలు" },
            description: { en: "Properties of real numbers", te: "వాస్తవ సంఖ్యల లక్షణాలు" },
            notes: {
              en: "## Real Numbers\n\n### Euclid's Division Lemma\nFor any two positive integers a and b, there exist unique integers q and r such that:\na = bq + r, where 0 ≤ r < b\n\n### Fundamental Theorem of Arithmetic\nEvery composite number can be expressed as a product of primes, and this factorization is unique.\n\n### HCF and LCM\n- HCF × LCM = Product of two numbers\n- HCF(a,b) = Product of common prime factors",
              te: "## వాస్తవ సంఖ్యలు\n\n### యూక్లిడ్ విభజన లెమ్మా\nఏవైనా రెండు ధన పూర్ణసంఖ్యలు a మరియు b కోసం, q మరియు r అనే ప్రత్యేక పూర్ణసంఖ్యలు ఉన్నాయి:\na = bq + r, ఇక్కడ 0 ≤ r < b"
            },
            quiz: [
              {
                question: { en: "Find HCF of 12 and 18 using Euclid's algorithm", te: "యూక్లిడ్ అల్గారిథమ్ ఉపయోగించి 12 మరియు 18 యొక్క గ.సా.భా కనుగొనండి" },
                options: [
                  { en: "2", te: "2" },
                  { en: "3", te: "3" },
                  { en: "6", te: "6" },
                  { en: "9", te: "9" }
                ],
                correctIndex: 2
              }
            ],
            practice: []
          }
        ]
      },
      {
        id: "science-10",
        title: { en: "Science", te: "సైన్స్" },
        icon: "FlaskConical",
        color: "game-green",
        chapters: [
          {
            id: "chemical-reactions-10",
            title: { en: "Chemical Reactions", te: "రసాయన చర్యలు" },
            description: { en: "Types and equations", te: "రకాలు మరియు సమీకరణాలు" },
            notes: {
              en: "## Chemical Reactions and Equations\n\n### Signs of Chemical Reaction\n- Change in color\n- Evolution of gas\n- Change in temperature\n- Formation of precipitate\n\n### Types of Reactions\n1. **Combination**: A + B → AB\n2. **Decomposition**: AB → A + B\n3. **Displacement**: A + BC → AC + B\n4. **Double Displacement**: AB + CD → AD + CB\n5. **Redox**: Oxidation + Reduction",
              te: "## రసాయన చర్యలు మరియు సమీకరణాలు\n\n### రసాయన చర్య యొక్క సంకేతాలు\n- రంగులో మార్పు\n- వాయువు విడుదల\n- ఉష్ణోగ్రతలో మార్పు\n- అవక్షేపం ఏర్పడటం"
            },
            quiz: [
              {
                question: { en: "CaCO₃ → CaO + CO₂ is an example of?", te: "CaCO₃ → CaO + CO₂ ఏ రకమైన చర్య?" },
                options: [
                  { en: "Combination", te: "సంయోగం" },
                  { en: "Decomposition", te: "వియోగం" },
                  { en: "Displacement", te: "స్థానభ్రంశం" },
                  { en: "Neutralization", te: "తటస్థీకరణం" }
                ],
                correctIndex: 1
              }
            ],
            practice: []
          }
        ]
      }
    ]
  }
];

export const games = [
  {
    id: "math-maze",
    title: { en: "Math Maze Challenge", te: "మాథ్ మేజ్ ఛాలెంజ్" },
    description: { en: "Race against time solving arithmetic puzzles!", te: "అంకగణిత పజిల్స్ పరిష్కరించడంలో సమయంతో పోటీ పడండి!" },
    icon: "Gamepad2",
    color: "game-blue",
    path: "/games/math-maze"
  },
  {
    id: "science-quest",
    title: { en: "Science Quest", te: "సైన్స్ క్వెస్ట్" },
    description: { en: "Solve element riddles with drag & drop!", te: "డ్రాగ్ & డ్రాప్‌తో మూలకాల చిక్కులను పరిష్కరించండి!" },
    icon: "Atom",
    color: "game-green",
    path: "/games/science-quest"
  },
  {
    id: "word-warrior",
    title: { en: "Word Warrior", te: "వర్డ్ వారియర్" },
    description: { en: "Battle monsters with vocabulary power!", te: "పదజాల శక్తితో రాక్షసులతో పోరాడండి!" },
    icon: "Swords",
    color: "game-pink",
    path: "/games/word-warrior"
  },
  {
    id: "logic-legends",
    title: { en: "Logic Legends", te: "లాజిక్ లెజెండ్స్" },
    description: { en: "Conquer multi-level logic puzzles!", te: "బహుళ-స్థాయి లాజిక్ పజిల్స్ జయించండి!" },
    icon: "Brain",
    color: "game-purple",
    path: "/games/logic-legends"
  }
];
