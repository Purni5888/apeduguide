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
  videoUrls?: string[];
  quiz: QuizQuestion[];
  practice: PracticeQuestion[];
}

export interface Subject {
  id: string;
  title: LocalizedString;
  icon: string;
  color: string;
  chapters: Chapter[];
  forceLanguage?: 'te' | 'hi' | 'en'; // Force display in specific language regardless of app setting
}

export interface ClassData {
  id: string;
  grade: number;
  title: LocalizedString;
  description: LocalizedString;
  subjects: Subject[];
}

// Helper function to generate quiz questions for math
const generateMathQuiz = (topic: string, grade: number): QuizQuestion[] => {
  const quizzes: Record<string, QuizQuestion[]> = {
    'numbers': [
      { question: { en: "What is the place value of 5 in 45,678?", te: "45,678 లో 5 యొక్క స్థాన విలువ ఎంత?" }, options: [{ en: "5", te: "5" }, { en: "50", te: "50" }, { en: "500", te: "500" }, { en: "5,000", te: "5,000" }], correctIndex: 3 },
      { question: { en: "Which is greater: 99,999 or 1,00,000?", te: "ఏది ఎక్కువ: 99,999 లేదా 1,00,000?" }, options: [{ en: "99,999", te: "99,999" }, { en: "1,00,000", te: "1,00,000" }, { en: "Both equal", te: "రెండూ సమానం" }, { en: "Cannot compare", te: "పోల్చలేము" }], correctIndex: 1 },
      { question: { en: "How many zeros are in 1 lakh?", te: "1 లక్షలో ఎన్ని సున్నాలు?" }, options: [{ en: "3", te: "3" }, { en: "4", te: "4" }, { en: "5", te: "5" }, { en: "6", te: "6" }], correctIndex: 2 },
      { question: { en: "What comes after 99,99,999?", te: "99,99,999 తర్వాత ఏమి వస్తుంది?" }, options: [{ en: "1,00,00,000", te: "1,00,00,000" }, { en: "10,00,000", te: "10,00,000" }, { en: "1,00,000", te: "1,00,000" }, { en: "99,99,998", te: "99,99,998" }], correctIndex: 0 },
      { question: { en: "1 crore equals how many lakhs?", te: "1 కోటి ఎన్ని లక్షలకు సమానం?" }, options: [{ en: "10", te: "10" }, { en: "100", te: "100" }, { en: "1000", te: "1000" }, { en: "50", te: "50" }], correctIndex: 1 },
      { question: { en: "What is the successor of 2,99,999?", te: "2,99,999 యొక్క వారసుడు ఏమిటి?" }, options: [{ en: "3,00,000", te: "3,00,000" }, { en: "2,99,998", te: "2,99,998" }, { en: "3,00,001", te: "3,00,001" }, { en: "2,100,000", te: "2,100,000" }], correctIndex: 0 },
      { question: { en: "Which digit is in the ten thousands place in 5,67,890?", te: "5,67,890 లో పదివేల స్థానంలో ఏ అంకె ఉంది?" }, options: [{ en: "5", te: "5" }, { en: "6", te: "6" }, { en: "7", te: "7" }, { en: "8", te: "8" }], correctIndex: 1 },
      { question: { en: "Round 4,56,789 to nearest thousand", te: "4,56,789 ను సమీప వేయికి సవరించండి" }, options: [{ en: "4,56,000", te: "4,56,000" }, { en: "4,57,000", te: "4,57,000" }, { en: "4,60,000", te: "4,60,000" }, { en: "5,00,000", te: "5,00,000" }], correctIndex: 1 },
      { question: { en: "What is the difference between 1 lakh and 1 million?", te: "1 లక్ష మరియు 1 మిలియన్ మధ్య తేడా ఏమిటి?" }, options: [{ en: "9 lakhs", te: "9 లక్షలు" }, { en: "10 lakhs", te: "10 లక్షలు" }, { en: "99 lakhs", te: "99 లక్షలు" }, { en: "No difference", te: "తేడా లేదు" }], correctIndex: 0 },
      { question: { en: "Smallest 6-digit number is?", te: "అతి చిన్న 6 అంకెల సంఖ్య ఏమిటి?" }, options: [{ en: "999999", te: "999999" }, { en: "100000", te: "100000" }, { en: "100001", te: "100001" }, { en: "000001", te: "000001" }], correctIndex: 1 }
    ],
    'fractions': [
      { question: { en: "What type of fraction is 7/4?", te: "7/4 ఏ రకమైన భిన్నం?" }, options: [{ en: "Proper", te: "సరైన" }, { en: "Improper", te: "అసరైన" }, { en: "Mixed", te: "మిశ్రమ" }, { en: "Unit", te: "ఏకాంక" }], correctIndex: 1 },
      { question: { en: "Convert 3/2 to mixed number", te: "3/2 ను మిశ్రమ సంఖ్యగా మార్చండి" }, options: [{ en: "1½", te: "1½" }, { en: "2½", te: "2½" }, { en: "1¼", te: "1¼" }, { en: "2¼", te: "2¼" }], correctIndex: 0 },
      { question: { en: "Which fraction is equivalent to 1/2?", te: "1/2 కు సమానమైన భిన్నం ఏది?" }, options: [{ en: "2/3", te: "2/3" }, { en: "3/6", te: "3/6" }, { en: "2/5", te: "2/5" }, { en: "1/3", te: "1/3" }], correctIndex: 1 },
      { question: { en: "Add: 1/4 + 2/4 = ?", te: "కూడిక: 1/4 + 2/4 = ?" }, options: [{ en: "3/8", te: "3/8" }, { en: "3/4", te: "3/4" }, { en: "2/4", te: "2/4" }, { en: "1/2", te: "1/2" }], correctIndex: 1 },
      { question: { en: "Simplify 4/8", te: "4/8 ను సరళీకరించండి" }, options: [{ en: "1/2", te: "1/2" }, { en: "2/4", te: "2/4" }, { en: "1/4", te: "1/4" }, { en: "2/8", te: "2/8" }], correctIndex: 0 },
      { question: { en: "Which is larger: 2/3 or 3/4?", te: "ఏది పెద్దది: 2/3 లేదా 3/4?" }, options: [{ en: "2/3", te: "2/3" }, { en: "3/4", te: "3/4" }, { en: "Equal", te: "సమానం" }, { en: "Cannot compare", te: "పోల్చలేము" }], correctIndex: 1 },
      { question: { en: "What is numerator in 5/7?", te: "5/7 లో లవం ఏమిటి?" }, options: [{ en: "5", te: "5" }, { en: "7", te: "7" }, { en: "12", te: "12" }, { en: "35", te: "35" }], correctIndex: 0 },
      { question: { en: "Subtract: 5/6 - 2/6 = ?", te: "తీసివేత: 5/6 - 2/6 = ?" }, options: [{ en: "3/6", te: "3/6" }, { en: "7/6", te: "7/6" }, { en: "3/12", te: "3/12" }, { en: "2/6", te: "2/6" }], correctIndex: 0 },
      { question: { en: "Convert 2¼ to improper fraction", te: "2¼ ను అసరైన భిన్నంగా మార్చండి" }, options: [{ en: "9/4", te: "9/4" }, { en: "8/4", te: "8/4" }, { en: "7/4", te: "7/4" }, { en: "10/4", te: "10/4" }], correctIndex: 0 },
      { question: { en: "Like fractions have same?", te: "సజాతీయ భిన్నాలకు ఏమి ఒకటిగా ఉంటుంది?" }, options: [{ en: "Numerator", te: "లవం" }, { en: "Denominator", te: "హారం" }, { en: "Both", te: "రెండూ" }, { en: "Neither", te: "ఏదీ కాదు" }], correctIndex: 1 }
    ],
    'algebra': [
      { question: { en: "What is the value of x if x + 5 = 12?", te: "x + 5 = 12 అయితే x విలువ ఎంత?" }, options: [{ en: "5", te: "5" }, { en: "7", te: "7" }, { en: "17", te: "17" }, { en: "12", te: "12" }], correctIndex: 1 },
      { question: { en: "Simplify: 3x + 2x", te: "సరళీకరించండి: 3x + 2x" }, options: [{ en: "5x", te: "5x" }, { en: "6x", te: "6x" }, { en: "5x²", te: "5x²" }, { en: "32x", te: "32x" }], correctIndex: 0 },
      { question: { en: "If 2y = 10, what is y?", te: "2y = 10 అయితే y ఎంత?" }, options: [{ en: "2", te: "2" }, { en: "5", te: "5" }, { en: "10", te: "10" }, { en: "20", te: "20" }], correctIndex: 1 },
      { question: { en: "What is a variable?", te: "చరాశి అంటే ఏమిటి?" }, options: [{ en: "Fixed number", te: "స్థిర సంఖ్య" }, { en: "Unknown value", te: "తెలియని విలువ" }, { en: "Fraction", te: "భిన్నం" }, { en: "Decimal", te: "దశాంశం" }], correctIndex: 1 },
      { question: { en: "Solve: 3x - 6 = 9", te: "సాధించండి: 3x - 6 = 9" }, options: [{ en: "x = 3", te: "x = 3" }, { en: "x = 5", te: "x = 5" }, { en: "x = 1", te: "x = 1" }, { en: "x = 15", te: "x = 15" }], correctIndex: 1 },
      { question: { en: "Which is an algebraic expression?", te: "బీజగణిత వ్యక్తీకరణ ఏది?" }, options: [{ en: "5 + 3", te: "5 + 3" }, { en: "2x + 7", te: "2x + 7" }, { en: "8", te: "8" }, { en: "15 - 9", te: "15 - 9" }], correctIndex: 1 },
      { question: { en: "Coefficient of x in 5x is?", te: "5x లో x యొక్క గుణకం?" }, options: [{ en: "x", te: "x" }, { en: "5", te: "5" }, { en: "5x", te: "5x" }, { en: "1", te: "1" }], correctIndex: 1 },
      { question: { en: "Evaluate 2a + 3 when a = 4", te: "a = 4 అయినప్పుడు 2a + 3 విలువ" }, options: [{ en: "9", te: "9" }, { en: "11", te: "11" }, { en: "14", te: "14" }, { en: "7", te: "7" }], correctIndex: 1 },
      { question: { en: "Constant term in 4x + 7 is?", te: "4x + 7 లో స్థిరపదం ఏమిటి?" }, options: [{ en: "4", te: "4" }, { en: "x", te: "x" }, { en: "7", te: "7" }, { en: "4x", te: "4x" }], correctIndex: 2 },
      { question: { en: "x/2 = 6, find x", te: "x/2 = 6, x కనుగొనండి" }, options: [{ en: "3", te: "3" }, { en: "6", te: "6" }, { en: "12", te: "12" }, { en: "8", te: "8" }], correctIndex: 2 }
    ],
    'geometry': [
      { question: { en: "How many sides does a hexagon have?", te: "షట్కోణానికి ఎన్ని భుజాలు ఉన్నాయి?" }, options: [{ en: "4", te: "4" }, { en: "5", te: "5" }, { en: "6", te: "6" }, { en: "8", te: "8" }], correctIndex: 2 },
      { question: { en: "Sum of angles in a triangle is?", te: "త్రిభుజంలో కోణాల మొత్తం?" }, options: [{ en: "90°", te: "90°" }, { en: "180°", te: "180°" }, { en: "270°", te: "270°" }, { en: "360°", te: "360°" }], correctIndex: 1 },
      { question: { en: "A right angle measures?", te: "లంబ కోణం కొలత?" }, options: [{ en: "45°", te: "45°" }, { en: "60°", te: "60°" }, { en: "90°", te: "90°" }, { en: "180°", te: "180°" }], correctIndex: 2 },
      { question: { en: "How many vertices does a square have?", te: "చతురస్రానికి ఎన్ని శీర్షాలు ఉన్నాయి?" }, options: [{ en: "2", te: "2" }, { en: "3", te: "3" }, { en: "4", te: "4" }, { en: "5", te: "5" }], correctIndex: 2 },
      { question: { en: "Angle less than 90° is called?", te: "90° కంటే తక్కువ కోణాన్ని ఏమంటారు?" }, options: [{ en: "Right", te: "లంబ" }, { en: "Obtuse", te: "అధిక" }, { en: "Acute", te: "న్యూన" }, { en: "Straight", te: "సరళ" }], correctIndex: 2 },
      { question: { en: "Perimeter of rectangle with l=5, b=3?", te: "l=5, b=3 తో దీర్ఘచతురస్ర చుట్టుకొలత?" }, options: [{ en: "8", te: "8" }, { en: "15", te: "15" }, { en: "16", te: "16" }, { en: "30", te: "30" }], correctIndex: 2 },
      { question: { en: "Circle has how many sides?", te: "వృత్తానికి ఎన్ని భుజాలు?" }, options: [{ en: "0", te: "0" }, { en: "1", te: "1" }, { en: "Infinite", te: "అనంతం" }, { en: "4", te: "4" }], correctIndex: 0 },
      { question: { en: "Diameter = 2 × ?", te: "వ్యాసం = 2 × ?" }, options: [{ en: "Area", te: "వైశాల్యం" }, { en: "Radius", te: "వ్యాసార్ధం" }, { en: "Perimeter", te: "చుట్టుకొలత" }, { en: "Circumference", te: "పరిధి" }], correctIndex: 1 },
      { question: { en: "A scalene triangle has?", te: "విషమ త్రిభుజంలో?" }, options: [{ en: "All sides equal", te: "అన్ని భుజాలు సమానం" }, { en: "Two sides equal", te: "రెండు భుజాలు సమానం" }, { en: "No sides equal", te: "ఏ భుజాలూ సమానం కాదు" }, { en: "Right angle", te: "లంబ కోణం" }], correctIndex: 2 },
      { question: { en: "Area of square with side 4?", te: "భుజం 4 తో చతురస్ర వైశాల్యం?" }, options: [{ en: "8", te: "8" }, { en: "12", te: "12" }, { en: "16", te: "16" }, { en: "20", te: "20" }], correctIndex: 2 }
    ]
  };
  return quizzes[topic] || quizzes['numbers'];
};

// Helper function to generate practice questions for math
const generateMathPractice = (topic: string, grade: number): PracticeQuestion[] => {
  const practices: Record<string, PracticeQuestion[]> = {
    'numbers': [
      { question: { en: "Write 45,23,789 in words", te: "45,23,789 ను అక్షరాలలో రాయండి" }, answer: { en: "Forty-five lakh twenty-three thousand seven hundred eighty-nine", te: "నలభై ఐదు లక్షల ఇరవై మూడు వేల ఏడు వందల ఎనభై తొమ్మిది" }, hint: { en: "Break into lakhs, thousands, hundreds", te: "లక్షలు, వేలు, వందలుగా విభజించండి" } },
      { question: { en: "Find predecessor of 5,00,000", te: "5,00,000 యొక్క పూర్వసూరిని కనుగొనండి" }, answer: { en: "4,99,999", te: "4,99,999" } },
      { question: { en: "Write the largest 5-digit number", te: "అతి పెద్ద 5 అంకెల సంఖ్య రాయండి" }, answer: { en: "99,999", te: "99,999" } },
      { question: { en: "Round 78,456 to nearest hundred", te: "78,456 ను సమీప వందకు సవరించండి" }, answer: { en: "78,500", te: "78,500" } },
      { question: { en: "How many thousands in 3 lakhs?", te: "3 లక్షలలో ఎన్ని వేలు?" }, answer: { en: "300 thousands", te: "300 వేలు" } },
      { question: { en: "Compare: 9,87,654 ___ 9,78,654", te: "పోల్చండి: 9,87,654 ___ 9,78,654" }, answer: { en: "> (greater than)", te: "> (కంటే ఎక్కువ)" } },
      { question: { en: "Find sum: 45,678 + 32,456", te: "మొత్తం కనుగొనండి: 45,678 + 32,456" }, answer: { en: "78,134", te: "78,134" } },
      { question: { en: "Write 6,05,040 in expanded form", te: "6,05,040 ను విస్తరణ రూపంలో రాయండి" }, answer: { en: "6,00,000 + 5,000 + 40", te: "6,00,000 + 5,000 + 40" } },
      { question: { en: "Subtract: 1,00,000 - 1", te: "తీసివేయండి: 1,00,000 - 1" }, answer: { en: "99,999", te: "99,999" } },
      { question: { en: "Arrange ascending: 45,678; 45,876; 45,687", te: "ఆరోహణ క్రమంలో: 45,678; 45,876; 45,687" }, answer: { en: "45,678 < 45,687 < 45,876", te: "45,678 < 45,687 < 45,876" } }
    ],
    'fractions': [
      { question: { en: "Convert 11/4 to mixed number", te: "11/4 ను మిశ్రమ సంఖ్యగా మార్చండి" }, answer: { en: "2¾", te: "2¾" } },
      { question: { en: "Add: 2/5 + 1/5", te: "కూడండి: 2/5 + 1/5" }, answer: { en: "3/5", te: "3/5" } },
      { question: { en: "Simplify: 12/16", te: "సరళీకరించండి: 12/16" }, answer: { en: "3/4", te: "3/4" } },
      { question: { en: "Find equivalent fraction of 2/3 with denominator 12", te: "హారం 12 తో 2/3 కు సమాన భిన్నం కనుగొనండి" }, answer: { en: "8/12", te: "8/12" } },
      { question: { en: "Compare: 3/4 ___ 5/8", te: "పోల్చండి: 3/4 ___ 5/8" }, answer: { en: "> (3/4 = 6/8 > 5/8)", te: "> (3/4 = 6/8 > 5/8)" } },
      { question: { en: "Subtract: 7/9 - 4/9", te: "తీసివేయండి: 7/9 - 4/9" }, answer: { en: "3/9 = 1/3", te: "3/9 = 1/3" } },
      { question: { en: "Convert 3½ to improper fraction", te: "3½ ను అసరైన భిన్నంగా మార్చండి" }, answer: { en: "7/2", te: "7/2" } },
      { question: { en: "What fraction of 1 hour is 15 minutes?", te: "1 గంటలో 15 నిమిషాలు ఏ భిన్నం?" }, answer: { en: "1/4", te: "1/4" } },
      { question: { en: "Multiply: 1/2 × 2/3", te: "గుణించండి: 1/2 × 2/3" }, answer: { en: "2/6 = 1/3", te: "2/6 = 1/3" } },
      { question: { en: "Arrange: 1/2, 1/4, 3/4 in ascending order", te: "ఆరోహణ క్రమంలో: 1/2, 1/4, 3/4" }, answer: { en: "1/4 < 1/2 < 3/4", te: "1/4 < 1/2 < 3/4" } }
    ],
    'algebra': [
      { question: { en: "Solve: x + 7 = 15", te: "సాధించండి: x + 7 = 15" }, answer: { en: "x = 8", te: "x = 8" } },
      { question: { en: "Simplify: 5a + 3a - 2a", te: "సరళీకరించండి: 5a + 3a - 2a" }, answer: { en: "6a", te: "6a" } },
      { question: { en: "If x = 3, find 2x + 5", te: "x = 3 అయితే, 2x + 5 కనుగొనండి" }, answer: { en: "11", te: "11" } },
      { question: { en: "Solve: 3y = 21", te: "సాధించండి: 3y = 21" }, answer: { en: "y = 7", te: "y = 7" } },
      { question: { en: "Write expression: 5 more than twice a number", te: "వ్యక్తీకరణ రాయండి: ఒక సంఖ్య రెండింతల కంటే 5 ఎక్కువ" }, answer: { en: "2x + 5", te: "2x + 5" } },
      { question: { en: "Solve: x/4 = 8", te: "సాధించండి: x/4 = 8" }, answer: { en: "x = 32", te: "x = 32" } },
      { question: { en: "Find value: 3m - 2 when m = 5", te: "విలువ కనుగొనండి: m = 5 అయినప్పుడు 3m - 2" }, answer: { en: "13", te: "13" } },
      { question: { en: "Solve: 2x + 3 = 11", te: "సాధించండి: 2x + 3 = 11" }, answer: { en: "x = 4", te: "x = 4" } },
      { question: { en: "Identify coefficient in 7xy", te: "7xy లో గుణకం గుర్తించండి" }, answer: { en: "7", te: "7" } },
      { question: { en: "Solve: 5x - 10 = 0", te: "సాధించండి: 5x - 10 = 0" }, answer: { en: "x = 2", te: "x = 2" } }
    ],
    'geometry': [
      { question: { en: "Find perimeter of square with side 7 cm", te: "భుజం 7 సెం.మీ. తో చతురస్ర చుట్టుకొలత కనుగొనండి" }, answer: { en: "28 cm", te: "28 సెం.మీ." } },
      { question: { en: "Find area of rectangle: l=8cm, b=5cm", te: "దీర్ఘచతురస్ర వైశాల్యం: l=8సెం.మీ., b=5సెం.మీ." }, answer: { en: "40 sq.cm", te: "40 చ.సెం.మీ." } },
      { question: { en: "Find third angle if two angles are 50° and 70°", te: "రెండు కోణాలు 50° మరియు 70° అయితే మూడవ కోణం కనుగొనండి" }, answer: { en: "60°", te: "60°" } },
      { question: { en: "Find circumference of circle with radius 7cm (π=22/7)", te: "వ్యాసార్ధం 7సెం.మీ. తో వృత్త పరిధి (π=22/7)" }, answer: { en: "44 cm", te: "44 సెం.మీ." } },
      { question: { en: "Classify triangle with angles 60°, 60°, 60°", te: "కోణాలు 60°, 60°, 60° తో త్రిభుజాన్ని వర్గీకరించండి" }, answer: { en: "Equilateral triangle", te: "సమబాహు త్రిభుజం" } },
      { question: { en: "Find diameter if radius is 9 cm", te: "వ్యాసార్ధం 9 సెం.మీ. అయితే వ్యాసం కనుగొనండి" }, answer: { en: "18 cm", te: "18 సెం.మీ." } },
      { question: { en: "Name a quadrilateral with all sides equal", te: "అన్ని భుజాలు సమానమైన చతుర్భుజం పేరు చెప్పండి" }, answer: { en: "Square or Rhombus", te: "చతురస్రం లేదా రాంబస్" } },
      { question: { en: "Find area of square with side 9 cm", te: "భుజం 9 సెం.మీ. తో చతురస్ర వైశాల్యం" }, answer: { en: "81 sq.cm", te: "81 చ.సెం.మీ." } },
      { question: { en: "Sum of angles in a quadrilateral?", te: "చతుర్భుజంలో కోణాల మొత్తం?" }, answer: { en: "360°", te: "360°" } },
      { question: { en: "Find perimeter of rectangle: l=12cm, b=8cm", te: "దీర్ఘచతురస్ర చుట్టుకొలత: l=12సెం.మీ., b=8సెం.మీ." }, answer: { en: "40 cm", te: "40 సెం.మీ." } }
    ]
  };
  return practices[topic] || practices['numbers'];
};

// Helper function to generate science quiz questions
const generateScienceQuiz = (topic: string): QuizQuestion[] => {
  const quizzes: Record<string, QuizQuestion[]> = {
    'food': [
      { question: { en: "Which is a herbivore?", te: "శాకాహారి జంతువు ఏది?" }, options: [{ en: "Lion", te: "సింహం" }, { en: "Cow", te: "ఆవు" }, { en: "Eagle", te: "గద్ద" }, { en: "Fox", te: "నక్క" }], correctIndex: 1 },
      { question: { en: "Honey comes from?", te: "తేనె ఎక్కడ నుండి వస్తుంది?" }, options: [{ en: "Cows", te: "ఆవులు" }, { en: "Bees", te: "తేనెటీగలు" }, { en: "Hens", te: "కోళ్ళు" }, { en: "Fish", te: "చేపలు" }], correctIndex: 1 },
      { question: { en: "Rice is obtained from?", te: "బియ్యం దేని నుండి వస్తుంది?" }, options: [{ en: "Paddy plant", te: "వరి మొక్క" }, { en: "Wheat plant", te: "గోధుమ మొక్క" }, { en: "Corn plant", te: "మొక్కజొన్న మొక్క" }, { en: "Barley plant", te: "బార్లీ మొక్క" }], correctIndex: 0 },
      { question: { en: "Omnivores eat?", te: "సర్వాహారులు ఏమి తింటారు?" }, options: [{ en: "Only plants", te: "మొక్కలు మాత్రమే" }, { en: "Only meat", te: "మాంసం మాత్రమే" }, { en: "Both plants and animals", te: "మొక్కలు మరియు జంతువులు రెండూ" }, { en: "Nothing", te: "ఏమీ లేదు" }], correctIndex: 2 },
      { question: { en: "Which is NOT a cereal?", te: "ఏది ధాన్యం కాదు?" }, options: [{ en: "Rice", te: "బియ్యం" }, { en: "Wheat", te: "గోధుమ" }, { en: "Dal", te: "పప్పు" }, { en: "Corn", te: "మొక్కజొన్న" }], correctIndex: 2 },
      { question: { en: "Milk is obtained from?", te: "పాలు దేని నుండి వస్తాయి?" }, options: [{ en: "Plants", te: "మొక్కలు" }, { en: "Animals", te: "జంతువులు" }, { en: "Rocks", te: "రాళ్ళు" }, { en: "Water", te: "నీరు" }], correctIndex: 1 },
      { question: { en: "Which part of plant gives us potato?", te: "మొక్క యొక్క ఏ భాగం బంగాళాదుంప ఇస్తుంది?" }, options: [{ en: "Root", te: "వేరు" }, { en: "Stem", te: "కాండం" }, { en: "Leaf", te: "ఆకు" }, { en: "Flower", te: "పువ్వు" }], correctIndex: 1 },
      { question: { en: "Tiger is a?", te: "పులి ఒక?" }, options: [{ en: "Herbivore", te: "శాకాహారి" }, { en: "Carnivore", te: "మాంసాహారి" }, { en: "Omnivore", te: "సర్వాహారి" }, { en: "None", te: "ఏదీ కాదు" }], correctIndex: 1 },
      { question: { en: "Edible part of carrot is?", te: "క్యారెట్ యొక్క తినదగిన భాగం?" }, options: [{ en: "Root", te: "వేరు" }, { en: "Stem", te: "కాండం" }, { en: "Leaf", te: "ఆకు" }, { en: "Fruit", te: "పండు" }], correctIndex: 0 },
      { question: { en: "Which gives us oil?", te: "ఏది నూనె ఇస్తుంది?" }, options: [{ en: "Mustard seeds", te: "ఆవాలు" }, { en: "Rice", te: "బియ్యం" }, { en: "Potato", te: "బంగాళాదుంప" }, { en: "Carrot", te: "క్యారెట్" }], correctIndex: 0 }
    ],
    'living': [
      { question: { en: "Which is a living thing?", te: "సజీవం ఏది?" }, options: [{ en: "Stone", te: "రాయి" }, { en: "Plant", te: "మొక్క" }, { en: "Table", te: "టేబుల్" }, { en: "Chair", te: "కుర్చీ" }], correctIndex: 1 },
      { question: { en: "Living things need?", te: "సజీవులకు ఏమి అవసరం?" }, options: [{ en: "Food", te: "ఆహారం" }, { en: "Air", te: "గాలి" }, { en: "Water", te: "నీరు" }, { en: "All of these", te: "ఇవన్నీ" }], correctIndex: 3 },
      { question: { en: "Plants make food by?", te: "మొక్కలు ఆహారం ఎలా తయారు చేస్తాయి?" }, options: [{ en: "Respiration", te: "శ్వాసక్రియ" }, { en: "Photosynthesis", te: "కిరణజన్య సంయోగక్రియ" }, { en: "Digestion", te: "జీర్ణక్రియ" }, { en: "Excretion", te: "విసర్జన" }], correctIndex: 1 },
      { question: { en: "Locomotion means?", te: "చలనం అంటే?" }, options: [{ en: "Eating", te: "తినడం" }, { en: "Movement", te: "కదలిక" }, { en: "Sleeping", te: "నిద్రపోవడం" }, { en: "Growing", te: "పెరగడం" }], correctIndex: 1 },
      { question: { en: "Which is NOT a characteristic of living things?", te: "సజీవుల లక్షణం కానిది?" }, options: [{ en: "Growth", te: "పెరుగుదల" }, { en: "Reproduction", te: "ప్రత్యుత్పత్తి" }, { en: "Rusting", te: "తుప్పు పట్టడం" }, { en: "Respiration", te: "శ్వాసక్రియ" }], correctIndex: 2 },
      { question: { en: "Excretion is?", te: "విసర్జన అంటే?" }, options: [{ en: "Taking in food", te: "ఆహారం తీసుకోవడం" }, { en: "Removing waste", te: "వ్యర్థాలను తొలగించడం" }, { en: "Breathing", te: "శ్వాస తీసుకోవడం" }, { en: "Moving", te: "కదలడం" }], correctIndex: 1 },
      { question: { en: "Stimulus means?", te: "ఉద్దీపన అంటే?" }, options: [{ en: "Response to environment", te: "పర్యావరణానికి స్పందన" }, { en: "Sleeping", te: "నిద్రపోవడం" }, { en: "Eating", te: "తినడం" }, { en: "Growing", te: "పెరగడం" }], correctIndex: 0 },
      { question: { en: "Cell is?", te: "కణం అంటే?" }, options: [{ en: "Basic unit of life", te: "జీవ ప్రాథమిక యూనిట్" }, { en: "A type of food", te: "ఆహార రకం" }, { en: "A machine", te: "యంత్రం" }, { en: "A rock", te: "రాయి" }], correctIndex: 0 },
      { question: { en: "Reproduction means?", te: "ప్రత్యుత్పత్తి అంటే?" }, options: [{ en: "Producing young ones", te: "పిల్లలను కనడం" }, { en: "Eating", te: "తినడం" }, { en: "Running", te: "పరుగెత్తడం" }, { en: "Sleeping", te: "నిద్రపోవడం" }], correctIndex: 0 },
      { question: { en: "Which can grow?", te: "ఏది పెరుగుతుంది?" }, options: [{ en: "Car", te: "కారు" }, { en: "Puppy", te: "కుక్కపిల్ల" }, { en: "Book", te: "పుస్తకం" }, { en: "Pen", te: "పెన్ను" }], correctIndex: 1 }
    ],
    'matter': [
      { question: { en: "Solid has?", te: "ఘన పదార్థానికి ఉంటుంది?" }, options: [{ en: "Fixed shape", te: "స్థిర ఆకారం" }, { en: "No shape", te: "ఆకారం లేదు" }, { en: "Shape of container", te: "పాత్ర ఆకారం" }, { en: "None", te: "ఏదీ లేదు" }], correctIndex: 0 },
      { question: { en: "Water is a?", te: "నీరు ఒక?" }, options: [{ en: "Solid", te: "ఘనం" }, { en: "Liquid", te: "ద్రవం" }, { en: "Gas", te: "వాయువు" }, { en: "Plasma", te: "ప్లాస్మా" }], correctIndex: 1 },
      { question: { en: "Gas particles are?", te: "వాయువు కణాలు?" }, options: [{ en: "Tightly packed", te: "గట్టిగా ఉంటాయి" }, { en: "Loosely packed", te: "వదులుగా ఉంటాయి" }, { en: "Far apart", te: "దూరంగా ఉంటాయి" }, { en: "Fixed", te: "స్థిరంగా ఉంటాయి" }], correctIndex: 2 },
      { question: { en: "Ice is which state?", te: "మంచు ఏ స్థితి?" }, options: [{ en: "Solid", te: "ఘనం" }, { en: "Liquid", te: "ద్రవం" }, { en: "Gas", te: "వాయువు" }, { en: "All", te: "అన్నీ" }], correctIndex: 0 },
      { question: { en: "Evaporation converts liquid to?", te: "బాష్పీభవనం ద్రవాన్ని దేనికి మారుస్తుంది?" }, options: [{ en: "Solid", te: "ఘనం" }, { en: "Gas", te: "వాయువు" }, { en: "Liquid", te: "ద్రవం" }, { en: "Plasma", te: "ప్లాస్మా" }], correctIndex: 1 },
      { question: { en: "Condensation is?", te: "సంఘనీభవనం అంటే?" }, options: [{ en: "Gas to liquid", te: "వాయువు నుండి ద్రవం" }, { en: "Liquid to gas", te: "ద్రవం నుండి వాయువు" }, { en: "Solid to liquid", te: "ఘనం నుండి ద్రవం" }, { en: "Liquid to solid", te: "ద్రవం నుండి ఘనం" }], correctIndex: 0 },
      { question: { en: "Melting is?", te: "కరగడం అంటే?" }, options: [{ en: "Solid to liquid", te: "ఘనం నుండి ద్రవం" }, { en: "Liquid to solid", te: "ద్రవం నుండి ఘనం" }, { en: "Gas to liquid", te: "వాయువు నుండి ద్రవం" }, { en: "Liquid to gas", te: "ద్రవం నుండి వాయువు" }], correctIndex: 0 },
      { question: { en: "Steam is?", te: "ఆవిరి ఒక?" }, options: [{ en: "Solid", te: "ఘనం" }, { en: "Liquid", te: "ద్రవం" }, { en: "Gas", te: "వాయువు" }, { en: "Plasma", te: "ప్లాస్మా" }], correctIndex: 2 },
      { question: { en: "Which flows?", te: "ఏది ప్రవహిస్తుంది?" }, options: [{ en: "Stone", te: "రాయి" }, { en: "Water", te: "నీరు" }, { en: "Ice", te: "మంచు" }, { en: "Wood", te: "కలప" }], correctIndex: 1 },
      { question: { en: "Freezing is?", te: "గడ్డకట్టడం అంటే?" }, options: [{ en: "Liquid to solid", te: "ద్రవం నుండి ఘనం" }, { en: "Solid to liquid", te: "ఘనం నుండి ద్రవం" }, { en: "Gas to liquid", te: "వాయువు నుండి ద్రవం" }, { en: "Liquid to gas", te: "ద్రవం నుండి వాయువు" }], correctIndex: 0 }
    ],
    'physics': [
      { question: { en: "Light travels in?", te: "కాంతి ఎలా ప్రయాణిస్తుంది?" }, options: [{ en: "Curved lines", te: "వక్ర రేఖలలో" }, { en: "Straight lines", te: "సరళ రేఖలలో" }, { en: "Zigzag", te: "వంకరగా" }, { en: "Circles", te: "వృత్తాలలో" }], correctIndex: 1 },
      { question: { en: "Reflection happens on?", te: "ప్రతిబింబం ఎక్కడ జరుగుతుంది?" }, options: [{ en: "Rough surfaces", te: "కఠినమైన తలాలపై" }, { en: "Smooth surfaces", te: "నునుపైన తలాలపై" }, { en: "Both", te: "రెండూ" }, { en: "Neither", te: "ఏదీ కాదు" }], correctIndex: 2 },
      { question: { en: "Shadow is formed when?", te: "నీడ ఎప్పుడు ఏర్పడుతుంది?" }, options: [{ en: "Light passes through", te: "కాంతి దాటినప్పుడు" }, { en: "Light is blocked", te: "కాంతి అడ్డుకోబడినప్పుడు" }, { en: "In dark", te: "చీకట్లో" }, { en: "Never", te: "ఎప్పటికీ కాదు" }], correctIndex: 1 },
      { question: { en: "Mirror image is?", te: "అద్దం ప్రతిబింబం?" }, options: [{ en: "Same", te: "అదే" }, { en: "Laterally inverted", te: "పార్శ్వంగా విలోమం" }, { en: "Upside down", te: "తల కిందులు" }, { en: "Smaller", te: "చిన్నది" }], correctIndex: 1 },
      { question: { en: "Transparent objects?", te: "పారదర్శక వస్తువులు?" }, options: [{ en: "Block light", te: "కాంతిని అడ్డుకుంటాయి" }, { en: "Allow light to pass", te: "కాంతిని దాటనిస్తాయి" }, { en: "Absorb light", te: "కాంతిని గ్రహిస్తాయి" }, { en: "Reflect light", te: "కాంతిని ప్రతిబింబిస్తాయి" }], correctIndex: 1 },
      { question: { en: "Opaque objects?", te: "అపారదర్శక వస్తువులు?" }, options: [{ en: "Allow light", te: "కాంతిని అనుమతిస్తాయి" }, { en: "Block light", te: "కాంతిని అడ్డుకుంటాయి" }, { en: "Bend light", te: "కాంతిని వంచుతాయి" }, { en: "None", te: "ఏదీ కాదు" }], correctIndex: 1 },
      { question: { en: "Example of transparent?", te: "పారదర్శకానికి ఉదాహరణ?" }, options: [{ en: "Wood", te: "కలప" }, { en: "Glass", te: "గాజు" }, { en: "Stone", te: "రాయి" }, { en: "Metal", te: "లోహం" }], correctIndex: 1 },
      { question: { en: "Translucent allows?", te: "మసకపారదర్శకం అనుమతిస్తుంది?" }, options: [{ en: "All light", te: "మొత్తం కాంతి" }, { en: "Some light", te: "కొంత కాంతి" }, { en: "No light", te: "కాంతి లేదు" }, { en: "Sound", te: "శబ్దం" }], correctIndex: 1 },
      { question: { en: "Pinhole camera uses?", te: "పిన్‌హోల్ కెమెరా ఉపయోగిస్తుంది?" }, options: [{ en: "Lens", te: "కటకం" }, { en: "Small hole", te: "చిన్న రంధ్రం" }, { en: "Mirror", te: "అద్దం" }, { en: "Prism", te: "ప్రిజం" }], correctIndex: 1 },
      { question: { en: "Luminous objects?", te: "స్వయం ప్రకాశక వస్తువులు?" }, options: [{ en: "Emit light", te: "కాంతిని విడుదల చేస్తాయి" }, { en: "Reflect light", te: "కాంతిని ప్రతిబింబిస్తాయి" }, { en: "Absorb light", te: "కాంతిని గ్రహిస్తాయి" }, { en: "Block light", te: "కాంతిని అడ్డుకుంటాయి" }], correctIndex: 0 }
    ],
    'biology': [
      { question: { en: "Photosynthesis occurs in?", te: "కిరణజన్య సంయోగక్రియ ఎక్కడ జరుగుతుంది?" }, options: [{ en: "Roots", te: "వేర్లలో" }, { en: "Leaves", te: "ఆకులలో" }, { en: "Stem", te: "కాండంలో" }, { en: "Flowers", te: "పువ్వులలో" }], correctIndex: 1 },
      { question: { en: "Chlorophyll color is?", te: "హరితద్రవ్యం రంగు?" }, options: [{ en: "Red", te: "ఎరుపు" }, { en: "Green", te: "ఆకుపచ్చ" }, { en: "Blue", te: "నీలం" }, { en: "Yellow", te: "పసుపు" }], correctIndex: 1 },
      { question: { en: "Plants release which gas?", te: "మొక్కలు ఏ వాయువును విడుదల చేస్తాయి?" }, options: [{ en: "Carbon dioxide", te: "కార్బన్ డయాక్సైడ్" }, { en: "Oxygen", te: "ఆక్సిజన్" }, { en: "Nitrogen", te: "నైట్రోజన్" }, { en: "Hydrogen", te: "హైడ్రోజన్" }], correctIndex: 1 },
      { question: { en: "Stomata are present on?", te: "స్టోమాటా ఎక్కడ ఉంటాయి?" }, options: [{ en: "Roots", te: "వేర్లపై" }, { en: "Leaves", te: "ఆకులపై" }, { en: "Flowers", te: "పువ్వులపై" }, { en: "Fruits", te: "పండ్లపై" }], correctIndex: 1 },
      { question: { en: "Root absorbs?", te: "వేరు ఏమి గ్రహిస్తుంది?" }, options: [{ en: "Light", te: "కాంతి" }, { en: "Water and minerals", te: "నీరు మరియు ఖనిజాలు" }, { en: "Air", te: "గాలి" }, { en: "CO2", te: "CO2" }], correctIndex: 1 },
      { question: { en: "Xylem transports?", te: "జైలెం ఏమి రవాణా చేస్తుంది?" }, options: [{ en: "Food", te: "ఆహారం" }, { en: "Water", te: "నీరు" }, { en: "Air", te: "గాలి" }, { en: "Minerals only", te: "ఖనిజాలు మాత్రమే" }], correctIndex: 1 },
      { question: { en: "Phloem transports?", te: "ఫ్లోయెం ఏమి రవాణా చేస్తుంది?" }, options: [{ en: "Water", te: "నీరు" }, { en: "Food", te: "ఆహారం" }, { en: "Minerals", te: "ఖనిజాలు" }, { en: "Air", te: "గాలి" }], correctIndex: 1 },
      { question: { en: "Plants need for photosynthesis?", te: "కిరణజన్య సంయోగక్రియకు మొక్కలకు ఏమి కావాలి?" }, options: [{ en: "Sunlight, CO2, water", te: "సూర్యకాంతి, CO2, నీరు" }, { en: "Only water", te: "నీరు మాత్రమే" }, { en: "Only sunlight", te: "సూర్యకాంతి మాత్రమే" }, { en: "Only CO2", te: "CO2 మాత్రమే" }], correctIndex: 0 },
      { question: { en: "Transpiration is?", te: "బాష్పోత్సర్గం అంటే?" }, options: [{ en: "Water loss from leaves", te: "ఆకుల నుండి నీటి నష్టం" }, { en: "Food making", te: "ఆహారం తయారీ" }, { en: "Breathing", te: "శ్వాస" }, { en: "Growth", te: "పెరుగుదల" }], correctIndex: 0 },
      { question: { en: "Glucose is?", te: "గ్లూకోజ్ ఒక?" }, options: [{ en: "Fat", te: "కొవ్వు" }, { en: "Sugar", te: "చక్కెర" }, { en: "Protein", te: "ప్రోటీన్" }, { en: "Vitamin", te: "విటమిన్" }], correctIndex: 1 }
    ]
  };
  return quizzes[topic] || quizzes['food'];
};

// Helper function to generate science practice questions
const generateSciencePractice = (topic: string): PracticeQuestion[] => {
  const practices: Record<string, PracticeQuestion[]> = {
    'food': [
      { question: { en: "List 5 foods from plants", te: "మొక్కల నుండి 5 ఆహారాలు జాబితా చేయండి" }, answer: { en: "Rice, wheat, mango, spinach, potato", te: "బియ్యం, గోధుమ, మామిడి, పాలకూర, బంగాళాదుంప" } },
      { question: { en: "Name 3 herbivores", te: "3 శాకాహారి జంతువులను పేర్కొనండి" }, answer: { en: "Cow, deer, rabbit", te: "ఆవు, జింక, కుందేలు" } },
      { question: { en: "Name 3 carnivores", te: "3 మాంసాహారి జంతువులను పేర్కొనండి" }, answer: { en: "Lion, tiger, eagle", te: "సింహం, పులి, గద్ద" } },
      { question: { en: "What are omnivores? Give examples", te: "సర్వాహారులు అంటే ఏమిటి? ఉదాహరణలు ఇవ్వండి" }, answer: { en: "Animals that eat both plants and animals. Ex: Human, bear, crow", te: "మొక్కలు మరియు జంతువులు రెండూ తినే జంతువులు. ఉదా: మానవుడు, ఎలుగుబంటి, కాకి" } },
      { question: { en: "From which part do we get carrot?", te: "క్యారెట్ ఏ భాగం నుండి వస్తుంది?" }, answer: { en: "Root", te: "వేరు" } },
      { question: { en: "Name food products from animals", te: "జంతువుల నుండి ఆహార ఉత్పత్తులను పేర్కొనండి" }, answer: { en: "Milk, eggs, meat, honey", te: "పాలు, గుడ్లు, మాంసం, తేనె" } },
      { question: { en: "What are pulses? Give examples", te: "పప్పులు అంటే ఏమిటి? ఉదాహరణలు" }, answer: { en: "Seeds of legume plants. Ex: Dal, beans, lentils", te: "పచ్చి మొక్కల విత్తనాలు. ఉదా: పప్పు, బీన్స్, కందిపప్పు" } },
      { question: { en: "Name 5 cereals", te: "5 ధాన్యాలను పేర్కొనండి" }, answer: { en: "Rice, wheat, corn, millets, barley", te: "బియ్యం, గోధుమ, మొక్కజొన్న, రాగులు, బార్లీ" } },
      { question: { en: "What is nectar?", te: "మకరందం అంటే ఏమిటి?" }, answer: { en: "Sweet liquid from flowers used by bees to make honey", te: "తేనెటీగలు తేనె తయారు చేయడానికి ఉపయోగించే పువ్వుల నుండి తీపి ద్రవం" } },
      { question: { en: "Which plants give us oils?", te: "ఏ మొక్కలు మనకు నూనెలు ఇస్తాయి?" }, answer: { en: "Mustard, groundnut, coconut, sunflower", te: "ఆవాలు, వేరుశెనగ, కొబ్బరి, పొద్దుతిరుగుడు" } }
    ],
    'living': [
      { question: { en: "List 5 characteristics of living things", te: "సజీవుల 5 లక్షణాలను జాబితా చేయండి" }, answer: { en: "Growth, reproduction, respiration, movement, excretion", te: "పెరుగుదల, ప్రత్యుత్పత్తి, శ్వాసక్రియ, చలనం, విసర్జన" } },
      { question: { en: "What is respiration?", te: "శ్వాసక్రియ అంటే ఏమిటి?" }, answer: { en: "Process of taking in oxygen and releasing carbon dioxide", te: "ఆక్సిజన్ తీసుకోవడం మరియు కార్బన్ డయాక్సైడ్ విడుదల చేసే ప్రక్రియ" } },
      { question: { en: "Difference between living and non-living", te: "సజీవ మరియు నిర్జీవ మధ్య తేడా" }, answer: { en: "Living things grow, reproduce, breathe; non-living don't", te: "సజీవులు పెరుగుతారు, ప్రత్యుత్పత్తి చేస్తారు, శ్వాసిస్తారు; నిర్జీవులు చేయరు" } },
      { question: { en: "What is excretion?", te: "విసర్జన అంటే ఏమిటి?" }, answer: { en: "Removal of waste products from the body", te: "శరీరం నుండి వ్యర్థ పదార్థాలను తొలగించడం" } },
      { question: { en: "Give examples of stimuli", te: "ఉద్దీపనలకు ఉదాహరణలు ఇవ్వండి" }, answer: { en: "Light, heat, touch, sound, smell", te: "కాంతి, వేడి, స్పర్శ, శబ్దం, వాసన" } },
      { question: { en: "What is the basic unit of life?", te: "జీవ ప్రాథమిక యూనిట్ ఏమిటి?" }, answer: { en: "Cell", te: "కణం" } },
      { question: { en: "How do plants move?", te: "మొక్కలు ఎలా కదులుతాయి?" }, answer: { en: "Plants show movement towards light, water (tropism)", te: "మొక్కలు కాంతి, నీటి వైపు చలనం చూపుతాయి (ట్రోపిజం)" } },
      { question: { en: "Name unicellular organisms", te: "ఏకకణ జీవులను పేర్కొనండి" }, answer: { en: "Amoeba, bacteria, paramecium", te: "అమీబా, బాక్టీరియా, పారామీషియం" } },
      { question: { en: "What is growth?", te: "పెరుగుదల అంటే ఏమిటి?" }, answer: { en: "Increase in size and development of body", te: "పరిమాణం పెరుగుదల మరియు శరీర అభివృద్ధి" } },
      { question: { en: "Why do living things need food?", te: "సజీవులకు ఆహారం ఎందుకు అవసరం?" }, answer: { en: "For energy, growth, and repair of body", te: "శక్తి, పెరుగుదల మరియు శరీర మరమ్మత్తు కోసం" } }
    ],
    'matter': [
      { question: { en: "Define matter", te: "పదార్థాన్ని నిర్వచించండి" }, answer: { en: "Anything that has mass and occupies space", te: "ద్రవ్యరాశి కలిగి స్థలాన్ని ఆక్రమించేది" } },
      { question: { en: "Name the three states of matter", te: "పదార్థం యొక్క మూడు స్థితులను పేర్కొనండి" }, answer: { en: "Solid, liquid, gas", te: "ఘనం, ద్రవం, వాయువు" } },
      { question: { en: "Properties of solids", te: "ఘన పదార్థాల లక్షణాలు" }, answer: { en: "Fixed shape, fixed volume, particles tightly packed", te: "స్థిర ఆకారం, స్థిర పరిమాణం, కణాలు గట్టిగా ఉంటాయి" } },
      { question: { en: "Properties of liquids", te: "ద్రవాల లక్షణాలు" }, answer: { en: "No fixed shape, fixed volume, takes shape of container", te: "స్థిర ఆకారం లేదు, స్థిర పరిమాణం, పాత్ర ఆకారం తీసుకుంటుంది" } },
      { question: { en: "Properties of gases", te: "వాయువుల లక్షణాలు" }, answer: { en: "No fixed shape, no fixed volume, fills container completely", te: "స్థిర ఆకారం లేదు, స్థిర పరిమాణం లేదు, పాత్రను పూర్తిగా నింపుతుంది" } },
      { question: { en: "What happens during melting?", te: "కరగడంలో ఏమి జరుగుతుంది?" }, answer: { en: "Solid changes to liquid when heated", te: "వేడి చేసినప్పుడు ఘనం ద్రవంగా మారుతుంది" } },
      { question: { en: "What is boiling?", te: "మరిగించడం అంటే ఏమిటి?" }, answer: { en: "Liquid changes to gas at boiling point", te: "మరిగే బిందువు వద్ద ద్రవం వాయువుగా మారుతుంది" } },
      { question: { en: "What is sublimation?", te: "ఉత్పాతనం అంటే ఏమిటి?" }, answer: { en: "Solid directly changing to gas (e.g., camphor)", te: "ఘనం నేరుగా వాయువుగా మారడం (ఉదా: కర్పూరం)" } },
      { question: { en: "Give 5 examples of solids", te: "ఘన పదార్థాలకు 5 ఉదాహరణలు" }, answer: { en: "Ice, wood, stone, iron, book", te: "మంచు, కలప, రాయి, ఇనుము, పుస్తకం" } },
      { question: { en: "Give 5 examples of liquids", te: "ద్రవాలకు 5 ఉదాహరణలు" }, answer: { en: "Water, milk, oil, juice, petrol", te: "నీరు, పాలు, నూనె, రసం, పెట్రోల్" } }
    ],
    'physics': [
      { question: { en: "What is reflection?", te: "ప్రతిబింబం అంటే ఏమిటి?" }, answer: { en: "Bouncing back of light from a surface", te: "ఒక ఉపరితలం నుండి కాంతి వెనక్కి బౌన్స్ అవ్వడం" } },
      { question: { en: "What is refraction?", te: "వక్రీభవనం అంటే ఏమిటి?" }, answer: { en: "Bending of light when passing through different media", te: "వేర్వేరు మాధ్యమాల గుండా వెళ్ళేటప్పుడు కాంతి వంగడం" } },
      { question: { en: "Properties of light", te: "కాంతి లక్షణాలు" }, answer: { en: "Travels in straight lines, can be reflected, refracted", te: "సరళ రేఖలలో ప్రయాణిస్తుంది, ప్రతిబింబించవచ్చు, వక్రీభవనం చెందవచ్చు" } },
      { question: { en: "What are luminous objects?", te: "స్వయం ప్రకాశక వస్తువులు అంటే ఏమిటి?" }, answer: { en: "Objects that emit their own light (sun, bulb, fire)", te: "సొంత కాంతిని విడుదల చేసే వస్తువులు (సూర్యుడు, బల్బ్, అగ్ని)" } },
      { question: { en: "What are non-luminous objects?", te: "అప్రకాశక వస్తువులు అంటే ఏమిటి?" }, answer: { en: "Objects that don't emit light (moon, book, table)", te: "కాంతిని విడుదల చేయని వస్తువులు (చంద్రుడు, పుస్తకం, టేబుల్)" } },
      { question: { en: "How is shadow formed?", te: "నీడ ఎలా ఏర్పడుతుంది?" }, answer: { en: "When light is blocked by an opaque object", te: "అపారదర్శక వస్తువు కాంతిని అడ్డుకున్నప్పుడు" } },
      { question: { en: "Define transparent materials", te: "పారదర్శక పదార్థాలను నిర్వచించండి" }, answer: { en: "Materials that allow light to pass through completely (glass, water)", te: "కాంతిని పూర్తిగా దాటనిచ్చే పదార్థాలు (గాజు, నీరు)" } },
      { question: { en: "Define opaque materials", te: "అపారదర్శక పదార్థాలను నిర్వచించండి" }, answer: { en: "Materials that don't allow light to pass (wood, metal)", te: "కాంతిని దాటనివ్వని పదార్థాలు (కలప, లోహం)" } },
      { question: { en: "What is a pinhole camera?", te: "పిన్‌హోల్ కెమెరా అంటే ఏమిటి?" }, answer: { en: "Simple camera using a small hole to create inverted image", te: "విలోమ చిత్రాన్ని సృష్టించడానికి చిన్న రంధ్రం ఉపయోగించే సాధారణ కెమెరా" } },
      { question: { en: "Why do we see objects?", te: "మనం వస్తువులను ఎందుకు చూస్తాము?" }, answer: { en: "Light reflected from objects enters our eyes", te: "వస్తువుల నుండి ప్రతిబింబించిన కాంతి మన కళ్ళలోకి ప్రవేశిస్తుంది" } }
    ],
    'biology': [
      { question: { en: "Write the photosynthesis equation", te: "కిరణజన్య సంయోగక్రియ సమీకరణం రాయండి" }, answer: { en: "6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂", te: "6CO₂ + 6H₂O + కాంతి → C₆H₁₂O₆ + 6O₂" } },
      { question: { en: "What is chlorophyll?", te: "హరితద్రవ్యం అంటే ఏమిటి?" }, answer: { en: "Green pigment in leaves that captures sunlight", te: "సూర్యకాంతిని గ్రహించే ఆకులలో ఆకుపచ్చ వర్ణద్రవ్యం" } },
      { question: { en: "Function of stomata", te: "స్టోమాటా పని" }, answer: { en: "Gas exchange and transpiration in leaves", te: "ఆకులలో వాయువుల మార్పిడి మరియు బాష్పోత్సర్గం" } },
      { question: { en: "Function of roots", te: "వేర్ల పని" }, answer: { en: "Absorb water and minerals, anchor plant", te: "నీరు మరియు ఖనిజాలను గ్రహించడం, మొక్కను స్థిరపరచడం" } },
      { question: { en: "Difference between xylem and phloem", te: "జైలెం మరియు ఫ్లోయెం మధ్య తేడా" }, answer: { en: "Xylem: transports water; Phloem: transports food", te: "జైలెం: నీరు రవాణా; ఫ్లోయెం: ఆహారం రవాణా" } },
      { question: { en: "What is transpiration?", te: "బాష్పోత్సర్గం అంటే ఏమిటి?" }, answer: { en: "Loss of water from leaves through stomata", te: "స్టోమాటా ద్వారా ఆకుల నుండి నీటి నష్టం" } },
      { question: { en: "Parts of a flower", te: "పువ్వు భాగాలు" }, answer: { en: "Sepals, petals, stamen, pistil", te: "రక్షక పత్రాలు, దళాలు, కేసరాలు, అండకోశం" } },
      { question: { en: "What is pollination?", te: "పరాగ సంపర్కం అంటే ఏమిటి?" }, answer: { en: "Transfer of pollen from stamen to pistil", te: "కేసరం నుండి అండకోశానికి పరాగ బదిలీ" } },
      { question: { en: "Name types of roots", te: "వేర్ల రకాలను పేర్కొనండి" }, answer: { en: "Tap root (carrot), fibrous root (grass)", te: "ముఖ్య వేరు (క్యారెట్), పీచు వేరు (గడ్డి)" } },
      { question: { en: "Why are leaves green?", te: "ఆకులు ఆకుపచ్చగా ఎందుకు ఉంటాయి?" }, answer: { en: "Due to presence of chlorophyll", te: "హరితద్రవ్యం ఉనికి వల్ల" } }
    ]
  };
  return practices[topic] || practices['food'];
};

// Helper function to generate English quiz questions
const generateEnglishQuiz = (): QuizQuestion[] => [
  { question: { en: "What is a noun?", te: "నామవాచకం అంటే ఏమిటి?" }, options: [{ en: "Action word", te: "క్రియా పదం" }, { en: "Naming word", te: "నామకరణ పదం" }, { en: "Describing word", te: "వర్ణన పదం" }, { en: "Joining word", te: "సంయోజక పదం" }], correctIndex: 1 },
  { question: { en: "Which is a verb?", te: "ఏది క్రియ?" }, options: [{ en: "Beautiful", te: "అందమైన" }, { en: "Running", te: "పరుగెత్తడం" }, { en: "Quickly", te: "త్వరగా" }, { en: "Table", te: "టేబుల్" }], correctIndex: 1 },
  { question: { en: "Adjective describes?", te: "విశేషణం ఏమి వర్ణిస్తుంది?" }, options: [{ en: "Verb", te: "క్రియ" }, { en: "Noun", te: "నామవాచకం" }, { en: "Adverb", te: "క్రియా విశేషణం" }, { en: "Preposition", te: "విభక్తి" }], correctIndex: 1 },
  { question: { en: "Synonym of 'happy'?", te: "'happy' యొక్క పర్యాయపదం?" }, options: [{ en: "Sad", te: "విచారంగా" }, { en: "Joyful", te: "ఆనందకరమైన" }, { en: "Angry", te: "కోపంగా" }, { en: "Tired", te: "అలసిపోయిన" }], correctIndex: 1 },
  { question: { en: "Antonym of 'big'?", te: "'big' యొక్క వ్యతిరేక పదం?" }, options: [{ en: "Large", te: "పెద్ద" }, { en: "Huge", te: "భారీ" }, { en: "Small", te: "చిన్న" }, { en: "Giant", te: "దైత్యం" }], correctIndex: 2 },
  { question: { en: "Plural of 'child'?", te: "'child' యొక్క బహువచనం?" }, options: [{ en: "Childs", te: "Childs" }, { en: "Children", te: "Children" }, { en: "Childrens", te: "Childrens" }, { en: "Child", te: "Child" }], correctIndex: 1 },
  { question: { en: "Past tense of 'go'?", te: "'go' యొక్క భూతకాలం?" }, options: [{ en: "Goes", te: "Goes" }, { en: "Going", te: "Going" }, { en: "Went", te: "Went" }, { en: "Gone", te: "Gone" }], correctIndex: 2 },
  { question: { en: "Article used before 'apple'?", te: "'apple' ముందు ఉపయోగించే ఆర్టికల్?" }, options: [{ en: "A", te: "A" }, { en: "An", te: "An" }, { en: "The", te: "The" }, { en: "No article", te: "ఆర్టికల్ లేదు" }], correctIndex: 1 },
  { question: { en: "Pronoun for 'Rama and Krishna'?", te: "'రామ మరియు కృష్ణ' కు సర్వనామం?" }, options: [{ en: "He", te: "He" }, { en: "She", te: "She" }, { en: "They", te: "They" }, { en: "It", te: "It" }], correctIndex: 2 },
  { question: { en: "Which is a conjunction?", te: "ఏది సంయోజకం?" }, options: [{ en: "Quickly", te: "Quickly" }, { en: "And", te: "And" }, { en: "Beautiful", te: "Beautiful" }, { en: "Running", te: "Running" }], correctIndex: 1 }
];

// Helper function to generate English practice questions
const generateEnglishPractice = (): PracticeQuestion[] => [
  { question: { en: "Write plural of: mouse, tooth, leaf", te: "బహువచనం రాయండి: mouse, tooth, leaf" }, answer: { en: "mice, teeth, leaves", te: "mice, teeth, leaves" } },
  { question: { en: "Change to past tense: eat, write, sing", te: "భూతకాలంలోకి మార్చండి: eat, write, sing" }, answer: { en: "ate, wrote, sang", te: "ate, wrote, sang" } },
  { question: { en: "Give synonyms of: beautiful, fast, big", te: "పర్యాయపదాలు ఇవ్వండి: beautiful, fast, big" }, answer: { en: "pretty, quick, large", te: "pretty, quick, large" } },
  { question: { en: "Give antonyms of: hot, happy, early", te: "వ్యతిరేక పదాలు ఇవ్వండి: hot, happy, early" }, answer: { en: "cold, sad, late", te: "cold, sad, late" } },
  { question: { en: "Fill articles: ___ apple, ___ boy, ___ sun", te: "ఆర్టికల్స్ పూరించండి: ___ apple, ___ boy, ___ sun" }, answer: { en: "an apple, a boy, the sun", te: "an apple, a boy, the sun" } },
  { question: { en: "Identify nouns: The cat sat on the mat.", te: "నామవాచకాలను గుర్తించండి: The cat sat on the mat." }, answer: { en: "cat, mat", te: "cat, mat" } },
  { question: { en: "Identify verbs: She reads books daily.", te: "క్రియలను గుర్తించండి: She reads books daily." }, answer: { en: "reads", te: "reads" } },
  { question: { en: "Make sentences with: happy, quickly, beautiful", te: "వాక్యాలు తయారు చేయండి: happy, quickly, beautiful" }, answer: { en: "I am happy. She ran quickly. The flower is beautiful.", te: "I am happy. She ran quickly. The flower is beautiful." } },
  { question: { en: "Change to negative: He is a doctor.", te: "నిషేధాత్మకంగా మార్చండి: He is a doctor." }, answer: { en: "He is not a doctor.", te: "He is not a doctor." } },
  { question: { en: "Change to question: She likes mangoes.", te: "ప్రశ్నగా మార్చండి: She likes mangoes." }, answer: { en: "Does she like mangoes?", te: "Does she like mangoes?" } }
];

// Helper function to generate Hindi quiz questions
const generateHindiQuiz = (): QuizQuestion[] => [
  { question: { en: "Hindi is written in which script?", te: "హిందీ ఏ లిపిలో వ్రాయబడుతుంది?" }, options: [{ en: "Roman", te: "రోమన్" }, { en: "Devanagari", te: "దేవనాగరి" }, { en: "Telugu", te: "తెలుగు" }, { en: "Arabic", te: "అరబిక్" }], correctIndex: 1 },
  { question: { en: "How many vowels in Hindi?", te: "హిందీలో ఎన్ని అచ్చులు?" }, options: [{ en: "10", te: "10" }, { en: "11", te: "11" }, { en: "13", te: "13" }, { en: "14", te: "14" }], correctIndex: 2 },
  { question: { en: "'पानी' means?", te: "'पानी' అంటే?" }, options: [{ en: "Fire", te: "అగ్ని" }, { en: "Water", te: "నీరు" }, { en: "Air", te: "గాలి" }, { en: "Earth", te: "భూమి" }], correctIndex: 1 },
  { question: { en: "Gender of 'किताब'?", te: "'किताब' యొక్క లింగం?" }, options: [{ en: "Masculine", te: "పుంలింగం" }, { en: "Feminine", te: "స్త్రీలింగం" }, { en: "Neuter", te: "నపుంసకలింగం" }, { en: "Common", te: "ఉభయలింగం" }], correctIndex: 1 },
  { question: { en: "Plural of 'लड़का'?", te: "'लड़का' యొక్క బహువచనం?" }, options: [{ en: "लड़की", te: "లడ్కీ" }, { en: "लड़के", te: "లడ్కే" }, { en: "लड़कों", te: "లడ్కోం" }, { en: "लड़का", te: "లడ్కా" }], correctIndex: 1 },
  { question: { en: "'सूरज' means?", te: "'सूरज' అంటే?" }, options: [{ en: "Moon", te: "చంద్రుడు" }, { en: "Star", te: "నక్షత్రం" }, { en: "Sun", te: "సూర్యుడు" }, { en: "Earth", te: "భూమి" }], correctIndex: 2 },
  { question: { en: "Opposite of 'गर्म'?", te: "'गर्म' యొక్క వ్యతిరేకం?" }, options: [{ en: "ठंडा", te: "ठंडा" }, { en: "गरम", te: "गरम" }, { en: "सुंदर", te: "सुंदर" }, { en: "छोटा", te: "छोटा" }], correctIndex: 0 },
  { question: { en: "'हाथी' means?", te: "'हाथी' అంటే?" }, options: [{ en: "Horse", te: "గుర్రం" }, { en: "Elephant", te: "ఏనుగు" }, { en: "Lion", te: "సింహం" }, { en: "Dog", te: "కుక్క" }], correctIndex: 1 },
  { question: { en: "Which is a verb (क्रिया)?", te: "ఏది క్రియ?" }, options: [{ en: "सुंदर", te: "సుందర్" }, { en: "खाना", te: "ఖానా" }, { en: "पानी", te: "పానీ" }, { en: "घर", te: "ఘర్" }], correctIndex: 1 },
  { question: { en: "'एक' means?", te: "'एक' అంటే?" }, options: [{ en: "Two", te: "రెండు" }, { en: "One", te: "ఒకటి" }, { en: "Three", te: "మూడు" }, { en: "Four", te: "నాలుగు" }], correctIndex: 1 }
];

// Helper function to generate Hindi practice questions
const generateHindiPractice = (): PracticeQuestion[] => [
  { question: { en: "Write Hindi vowels (स्वर)", te: "హిందీ అచ్చులు (స్వర్) రాయండి" }, answer: { en: "अ आ इ ई उ ऊ ऋ ए ऐ ओ औ अं अः", te: "అ ఆ ఇ ఈ ఉ ఊ ఋ ఏ ఐ ఓ ఔ అం అః" } },
  { question: { en: "Write 5 Hindi words for fruits", te: "పండ్ల కోసం 5 హిందీ పదాలు రాయండి" }, answer: { en: "आम, सेब, केला, अंगूर, संतरा", te: "ఆమ్, సేబ్, కేలా, అంగూర్, సంతరా" } },
  { question: { en: "Translate: I eat food", te: "అనువదించండి: నేను ఆహారం తింటాను" }, answer: { en: "मैं खाना खाता हूँ", te: "మైం ఖానా ఖాతా హూం" } },
  { question: { en: "Write opposites: बड़ा, सुंदर, गर्म", te: "వ్యతిరేకాలు రాయండి: బడా, సుందర్, గర్మ్" }, answer: { en: "छोटा, बदसूरत, ठंडा", te: "ఛోటా, బద్సూరత్, ఠండా" } },
  { question: { en: "Write numbers 1-10 in Hindi", te: "1-10 హిందీలో రాయండి" }, answer: { en: "एक, दो, तीन, चार, पाँच, छः, सात, आठ, नौ, दस", te: "ఏక్, దో, తీన్, చార్, పాంచ్, ఛః, సాత్, ఆఠ్, నౌ, దస్" } },
  { question: { en: "Make sentence: मैं, स्कूल, जाता", te: "వాక్యం తయారు చేయండి: మైం, స్కూల్, జాతా" }, answer: { en: "मैं स्कूल जाता हूँ।", te: "మైం స్కూల్ జాతా హూం." } },
  { question: { en: "Write 5 body parts in Hindi", te: "5 శరీర భాగాలు హిందీలో రాయండి" }, answer: { en: "सिर, आँख, नाक, कान, हाथ", te: "సిర్, ఆంఖ్, నాక్, కాన్, హాథ్" } },
  { question: { en: "Write plural: किताब, कमरा, लड़की", te: "బహువచనం రాయండి: కితాబ్, కమరా, లడ్కీ" }, answer: { en: "किताबें, कमरे, लड़कियाँ", te: "కితాబేం, కమరే, లడ్కియాం" } },
  { question: { en: "Write 5 animals in Hindi", te: "5 జంతువులు హిందీలో రాయండి" }, answer: { en: "कुत्ता, बिल्ली, गाय, शेर, हाथी", te: "కుత్తా, బిల్లీ, గాయ్, షేర్, హాథీ" } },
  { question: { en: "Write days of week in Hindi", te: "వారంలోని రోజులు హిందీలో రాయండి" }, answer: { en: "सोमवार, मंगलवार, बुधवार, गुरुवार, शुक्रवार, शनिवार, रविवार", te: "సోమ్‌వార్, మంగల్‌వార్, బుధ్‌వార్, గురువార్, శుక్ర‌వార్, శని‌వార్, రవి‌వార్" } }
];

// Helper function to generate Telugu quiz questions
const generateTeluguQuiz = (): QuizQuestion[] => [
  { question: { en: "How many vowels in Telugu?", te: "తెలుగులో ఎన్ని అచ్చులు?" }, options: [{ en: "12", te: "12" }, { en: "14", te: "14" }, { en: "16", te: "16" }, { en: "18", te: "18" }], correctIndex: 2 },
  { question: { en: "First letter of Telugu alphabet?", te: "తెలుగు వర్ణమాల మొదటి అక్షరం?" }, options: [{ en: "క", te: "క" }, { en: "అ", te: "అ" }, { en: "ఆ", te: "ఆ" }, { en: "ఇ", te: "ఇ" }], correctIndex: 1 },
  { question: { en: "'నీరు' means?", te: "'నీరు' అంటే?" }, options: [{ en: "Fire", te: "అగ్ని" }, { en: "Water", te: "నీరు" }, { en: "Air", te: "గాలి" }, { en: "Earth", te: "భూమి" }], correctIndex: 1 },
  { question: { en: "Plural marker in Telugu?", te: "తెలుగులో బహువచన చిహ్నం?" }, options: [{ en: "లు", te: "లు" }, { en: "ము", te: "ము" }, { en: "డు", te: "డు" }, { en: "ని", te: "ని" }], correctIndex: 0 },
  { question: { en: "'సూర్యుడు' means?", te: "'సూర్యుడు' అంటే?" }, options: [{ en: "Moon", te: "చంద్రుడు" }, { en: "Star", te: "నక్షత్రం" }, { en: "Sun", te: "సూర్యుడు" }, { en: "Earth", te: "భూమి" }], correctIndex: 2 },
  { question: { en: "Opposite of 'పెద్ద'?", te: "'పెద్ద' యొక్క వ్యతిరేకం?" }, options: [{ en: "చిన్న", te: "చిన్న" }, { en: "మంచి", te: "మంచి" }, { en: "అందమైన", te: "అందమైన" }, { en: "పొడవైన", te: "పొడవైన" }], correctIndex: 0 },
  { question: { en: "'పుస్తకం' means?", te: "'పుస్తకం' అంటే?" }, options: [{ en: "Pen", te: "పెన్ను" }, { en: "Book", te: "పుస్తకం" }, { en: "Table", te: "టేబుల్" }, { en: "Chair", te: "కుర్చీ" }], correctIndex: 1 },
  { question: { en: "Which is a verb (క్రియ)?", te: "ఏది క్రియ?" }, options: [{ en: "అందమైన", te: "అందమైన" }, { en: "తినడం", te: "తినడం" }, { en: "పుస్తకం", te: "పుస్తకం" }, { en: "ఇల్లు", te: "ఇల్లు" }], correctIndex: 1 },
  { question: { en: "'ఒకటి' means?", te: "'ఒకటి' అంటే?" }, options: [{ en: "Two", te: "రెండు" }, { en: "One", te: "ఒకటి" }, { en: "Three", te: "మూడు" }, { en: "Four", te: "నాలుగు" }], correctIndex: 1 },
  { question: { en: "Gender of 'అమ్మ'?", te: "'అమ్మ' యొక్క లింగం?" }, options: [{ en: "Masculine", te: "పుంలింగం" }, { en: "Feminine", te: "స్త్రీలింగం" }, { en: "Neuter", te: "నపుంసకలింగం" }, { en: "Common", te: "ఉభయలింగం" }], correctIndex: 1 }
];

// Helper function to generate Telugu practice questions
const generateTeluguPractice = (): PracticeQuestion[] => [
  { question: { en: "Write Telugu vowels (అచ్చులు)", te: "తెలుగు అచ్చులు రాయండి" }, answer: { en: "అ ఆ ఇ ఈ ఉ ఊ ఋ ౠ ఎ ఏ ఐ ఒ ఓ ఔ అం అః", te: "అ ఆ ఇ ఈ ఉ ఊ ఋ ౠ ఎ ఏ ఐ ఒ ఓ ఔ అం అః" } },
  { question: { en: "Write 5 Telugu words for animals", te: "జంతువుల కోసం 5 తెలుగు పదాలు" }, answer: { en: "కుక్క, పిల్లి, ఆవు, సింహం, ఏనుగు", te: "కుక్క, పిల్లి, ఆవు, సింహం, ఏనుగు" } },
  { question: { en: "Translate: I go to school", te: "అనువదించండి: I go to school" }, answer: { en: "నేను బడికి వెళ్తాను", te: "నేను బడికి వెళ్తాను" } },
  { question: { en: "Write opposites: పెద్ద, మంచి, వేడి", te: "వ్యతిరేకాలు: పెద్ద, మంచి, వేడి" }, answer: { en: "చిన్న, చెడ్డ, చల్లని", te: "చిన్న, చెడ్డ, చల్లని" } },
  { question: { en: "Write numbers 1-10 in Telugu", te: "1-10 తెలుగులో రాయండి" }, answer: { en: "ఒకటి, రెండు, మూడు, నాలుగు, ఐదు, ఆరు, ఏడు, ఎనిమిది, తొమ్మిది, పది", te: "ఒకటి, రెండు, మూడు, నాలుగు, ఐదు, ఆరు, ఏడు, ఎనిమిది, తొమ్మిది, పది" } },
  { question: { en: "Make sentence: నేను, పుస్తకం, చదువుతాను", te: "వాక్యం తయారు చేయండి: నేను, పుస్తకం, చదువుతాను" }, answer: { en: "నేను పుస్తకం చదువుతాను.", te: "నేను పుస్తకం చదువుతాను." } },
  { question: { en: "Write 5 fruits in Telugu", te: "5 పండ్లు తెలుగులో" }, answer: { en: "మామిడి, అరటి, ఆపిల్, ద్రాక్ష, బత్తాయి", te: "మామిడి, అరటి, ఆపిల్, ద్రాక్ష, బత్తాయి" } },
  { question: { en: "Write plural: పుస్తకం, బల్ల, కుర్చీ", te: "బహువచనం: పుస్తకం, బల్ల, కుర్చీ" }, answer: { en: "పుస్తకాలు, బల్లలు, కుర్చీలు", te: "పుస్తకాలు, బల్లలు, కుర్చీలు" } },
  { question: { en: "Write 5 body parts in Telugu", te: "5 శరీర భాగాలు తెలుగులో" }, answer: { en: "తల, కన్ను, ముక్కు, చెవి, చేయి", te: "తల, కన్ను, ముక్కు, చెవి, చేయి" } },
  { question: { en: "Write days of week in Telugu", te: "వారంలోని రోజులు తెలుగులో" }, answer: { en: "ఆదివారం, సోమవారం, మంగళవారం, బుధవారం, గురువారం, శుక్రవారం, శనివారం", te: "ఆదివారం, సోమవారం, మంగళవారం, బుధవారం, గురువారం, శుక్రవారం, శనివారం" } }
];

// Helper function to generate Social Studies quiz questions
const generateSocialQuiz = (): QuizQuestion[] => [
  { question: { en: "What does BCE stand for?", te: "BCE అంటే ఏమిటి?" }, options: [{ en: "Before Current Era", te: "ప్రస్తుత శకానికి ముందు" }, { en: "Before Common Era", te: "సామాన్య శకానికి ముందు" }, { en: "British Common Era", te: "బ్రిటిష్ సామాన్య శకం" }, { en: "Before Christ Era", te: "క్రీస్తు శకానికి ముందు" }], correctIndex: 1 },
  { question: { en: "Capital of India?", te: "భారతదేశ రాజధాని?" }, options: [{ en: "Mumbai", te: "ముంబై" }, { en: "Delhi", te: "ఢిల్లీ" }, { en: "Kolkata", te: "కోల్‌కతా" }, { en: "Chennai", te: "చెన్నై" }], correctIndex: 1 },
  { question: { en: "Largest continent?", te: "అతిపెద్ద ఖండం?" }, options: [{ en: "Africa", te: "ఆఫ్రికా" }, { en: "Asia", te: "ఆసియా" }, { en: "Europe", te: "యూరప్" }, { en: "America", te: "అమెరికా" }], correctIndex: 1 },
  { question: { en: "India has how many states?", te: "భారతదేశంలో ఎన్ని రాష్ట్రాలు?" }, options: [{ en: "26", te: "26" }, { en: "28", te: "28" }, { en: "29", te: "29" }, { en: "30", te: "30" }], correctIndex: 1 },
  { question: { en: "National bird of India?", te: "భారతదేశ జాతీయ పక్షి?" }, options: [{ en: "Parrot", te: "చిలుక" }, { en: "Peacock", te: "నెమలి" }, { en: "Crow", te: "కాకి" }, { en: "Sparrow", te: "పిచ్చుక" }], correctIndex: 1 },
  { question: { en: "Independence Day of India?", te: "భారతదేశ స్వాతంత్ర్య దినోత్సవం?" }, options: [{ en: "26 January", te: "జనవరి 26" }, { en: "15 August", te: "ఆగస్టు 15" }, { en: "2 October", te: "అక్టోబర్ 2" }, { en: "14 November", te: "నవంబర్ 14" }], correctIndex: 1 },
  { question: { en: "Father of Nation?", te: "జాతి పిత?" }, options: [{ en: "Nehru", te: "నెహ్రూ" }, { en: "Gandhi", te: "గాంధీ" }, { en: "Patel", te: "పటేల్" }, { en: "Bose", te: "బోస్" }], correctIndex: 1 },
  { question: { en: "Longest river in India?", te: "భారతదేశంలో పొడవైన నది?" }, options: [{ en: "Yamuna", te: "యమునా" }, { en: "Ganga", te: "గంగా" }, { en: "Godavari", te: "గోదావరి" }, { en: "Brahmaputra", te: "బ్రహ్మపుత్ర" }], correctIndex: 1 },
  { question: { en: "Which ocean is south of India?", te: "భారతదేశానికి దక్షిణంలో ఏ మహాసముద్రం?" }, options: [{ en: "Pacific", te: "పసిఫిక్" }, { en: "Atlantic", te: "అట్లాంటిక్" }, { en: "Indian", te: "హిందూ మహాసముద్రం" }, { en: "Arctic", te: "ఆర్కిటిక్" }], correctIndex: 2 },
  { question: { en: "Currency of India?", te: "భారతదేశ కరెన్సీ?" }, options: [{ en: "Dollar", te: "డాలర్" }, { en: "Rupee", te: "రూపాయి" }, { en: "Euro", te: "యూరో" }, { en: "Pound", te: "పౌండ్" }], correctIndex: 1 }
];

// Helper function to generate Social Studies practice questions
const generateSocialPractice = (): PracticeQuestion[] => [
  { question: { en: "Name 5 neighboring countries of India", te: "భారతదేశ పొరుగు దేశాలు 5 పేర్కొనండి" }, answer: { en: "Pakistan, China, Nepal, Bhutan, Bangladesh", te: "పాకిస్తాన్, చైనా, నేపాల్, భూటాన్, బంగ్లాదేశ్" } },
  { question: { en: "Write 7 continents", te: "7 ఖండాలు రాయండి" }, answer: { en: "Asia, Africa, North America, South America, Europe, Australia, Antarctica", te: "ఆసియా, ఆఫ్రికా, ఉత్తర అమెరికా, దక్షిణ అమెరికా, యూరప్, ఆస్ట్రేలియా, అంటార్కిటికా" } },
  { question: { en: "Name 5 major rivers of India", te: "భారతదేశ ప్రధాన నదులు 5 పేర్కొనండి" }, answer: { en: "Ganga, Yamuna, Brahmaputra, Godavari, Krishna", te: "గంగా, యమునా, బ్రహ్మపుత్ర, గోదావరి, కృష్ణా" } },
  { question: { en: "What are national symbols of India?", te: "భారతదేశ జాతీయ చిహ్నాలు ఏమిటి?" }, answer: { en: "Flag: Tricolor, Bird: Peacock, Animal: Tiger, Flower: Lotus", te: "జెండా: త్రివర్ణ, పక్షి: నెమలి, జంతువు: పులి, పువ్వు: తామర" } },
  { question: { en: "What are 4 directions?", te: "4 దిక్కులు ఏవి?" }, answer: { en: "North, South, East, West", te: "ఉత్తరం, దక్షిణం, తూర్పు, పడమర" } },
  { question: { en: "Name freedom fighters of India", te: "భారత స్వాతంత్ర్య సమరయోధులను పేర్కొనండి" }, answer: { en: "Gandhi, Nehru, Bose, Bhagat Singh, Patel", te: "గాంధీ, నెహ్రూ, బోస్, భగత్ సింగ్, పటేల్" } },
  { question: { en: "What is a map?", te: "మ్యాప్ అంటే ఏమిటి?" }, answer: { en: "A drawing showing Earth's surface on flat paper", te: "చదునైన కాగితంపై భూమి ఉపరితలాన్ని చూపించే బొమ్మ" } },
  { question: { en: "Name AP neighboring states", te: "AP పొరుగు రాష్ట్రాలను పేర్కొనండి" }, answer: { en: "Telangana, Karnataka, Tamil Nadu, Odisha, Chhattisgarh", te: "తెలంగాణా, కర్ణాటక, తమిళనాడు, ఒడిశా, ఛత్తీస్‌గఢ్" } },
  { question: { en: "What is globe?", te: "గ్లోబ్ అంటే ఏమిటి?" }, answer: { en: "A model of Earth showing continents and oceans", te: "ఖండాలు మరియు మహాసముద్రాలను చూపించే భూమి నమూనా" } },
  { question: { en: "Important dates in Indian history", te: "భారత చరిత్రలో ముఖ్యమైన తేదీలు" }, answer: { en: "1947: Independence, 1950: Republic Day, 1857: First War of Independence", te: "1947: స్వాతంత్ర్యం, 1950: గణతంత్ర దినోత్సవం, 1857: మొదటి స్వాతంత్ర్య యుద్ధం" } }
];

// Generate Physical Science quiz for classes 8-10
const generatePhysicalScienceQuiz = (): QuizQuestion[] => [
  { question: { en: "Unit of force?", te: "బలం యొక్క యూనిట్?" }, options: [{ en: "Joule", te: "జౌల్" }, { en: "Newton", te: "న్యూటన్" }, { en: "Watt", te: "వాట్" }, { en: "Pascal", te: "పాస్కల్" }], correctIndex: 1 },
  { question: { en: "Speed = ?", te: "వేగం = ?" }, options: [{ en: "Distance × Time", te: "దూరం × సమయం" }, { en: "Distance / Time", te: "దూరం / సమయం" }, { en: "Mass × Velocity", te: "ద్రవ్యరాశి × వేగం" }, { en: "Force × Distance", te: "బలం × దూరం" }], correctIndex: 1 },
  { question: { en: "Newton's first law is about?", te: "న్యూటన్ మొదటి నియమం దేని గురించి?" }, options: [{ en: "Force", te: "బలం" }, { en: "Inertia", te: "జడత్వం" }, { en: "Action-Reaction", te: "చర్య-ప్రతిచర్య" }, { en: "Gravity", te: "గురుత్వాకర్షణ" }], correctIndex: 1 },
  { question: { en: "F = m × ?", te: "F = m × ?" }, options: [{ en: "v", te: "v" }, { en: "a", te: "a" }, { en: "s", te: "s" }, { en: "t", te: "t" }], correctIndex: 1 },
  { question: { en: "SI unit of work?", te: "పని యొక్క SI యూనిట్?" }, options: [{ en: "Newton", te: "న్యూటన్" }, { en: "Joule", te: "జౌల్" }, { en: "Watt", te: "వాట్" }, { en: "Ampere", te: "ఆంపియర్" }], correctIndex: 1 },
  { question: { en: "Ohm's law: V = ?", te: "ఓమ్ నియమం: V = ?" }, options: [{ en: "I × R", te: "I × R" }, { en: "I / R", te: "I / R" }, { en: "I + R", te: "I + R" }, { en: "I - R", te: "I - R" }], correctIndex: 0 },
  { question: { en: "Unit of electric current?", te: "విద్యుత్ ప్రవాహ యూనిట్?" }, options: [{ en: "Volt", te: "వోల్ట్" }, { en: "Ampere", te: "ఆంపియర్" }, { en: "Ohm", te: "ఓమ్" }, { en: "Watt", te: "వాట్" }], correctIndex: 1 },
  { question: { en: "Sound travels fastest in?", te: "శబ్దం ఎక్కడ వేగంగా ప్రయాణిస్తుంది?" }, options: [{ en: "Air", te: "గాలి" }, { en: "Water", te: "నీరు" }, { en: "Solid", te: "ఘనం" }, { en: "Vacuum", te: "శూన్యం" }], correctIndex: 2 },
  { question: { en: "Reflection occurs at angle?", te: "ప్రతిబింబం ఏ కోణంలో జరుగుతుంది?" }, options: [{ en: "Greater than incident", te: "పతన కంటే ఎక్కువ" }, { en: "Less than incident", te: "పతన కంటే తక్కువ" }, { en: "Equal to incident", te: "పతన కోణానికి సమానం" }, { en: "90°", te: "90°" }], correctIndex: 2 },
  { question: { en: "Convex lens produces?", te: "కుంభాకార కటకం ఏమి ఏర్పరుస్తుంది?" }, options: [{ en: "Only virtual image", te: "కేవలం మిథ్యా ప్రతిబింబం" }, { en: "Only real image", te: "కేవలం వాస్తవ ప్రతిబింబం" }, { en: "Both real and virtual", te: "వాస్తవ మరియు మిథ్యా రెండూ" }, { en: "No image", te: "ప్రతిబింబం లేదు" }], correctIndex: 2 }
];

// Generate Physical Science practice for classes 8-10
const generatePhysicalSciencePractice = (): PracticeQuestion[] => [
  { question: { en: "State Newton's three laws of motion", te: "న్యూటన్ మూడు చలన నియమాలను తెలపండి" }, answer: { en: "1. Inertia 2. F=ma 3. Action-Reaction", te: "1. జడత్వం 2. F=ma 3. చర్య-ప్రతిచర్య" } },
  { question: { en: "Calculate speed if distance=100m, time=10s", te: "దూరం=100మీ, సమయం=10సె అయితే వేగం లెక్కించండి" }, answer: { en: "Speed = 100/10 = 10 m/s", te: "వేగం = 100/10 = 10 మీ/సె" } },
  { question: { en: "Difference between mass and weight", te: "ద్రవ్యరాశి మరియు బరువు మధ్య తేడా" }, answer: { en: "Mass: amount of matter (kg); Weight: gravitational force (N)", te: "ద్రవ్యరాశి: పదార్థ పరిమాణం (kg); బరువు: గురుత్వాకర్షణ బలం (N)" } },
  { question: { en: "What is work? Give formula", te: "పని అంటే ఏమిటి? సూత్రం ఇవ్వండి" }, answer: { en: "Work = Force × Distance (W = F × d)", te: "పని = బలం × దూరం (W = F × d)" } },
  { question: { en: "Calculate resistance: V=12V, I=2A", te: "నిరోధకత లెక్కించండి: V=12V, I=2A" }, answer: { en: "R = V/I = 12/2 = 6 Ω", te: "R = V/I = 12/2 = 6 Ω" } },
  { question: { en: "What is electromagnetic induction?", te: "విద్యుదయస్కాంత ప్రేరణ అంటే ఏమిటి?" }, answer: { en: "Production of electricity by changing magnetic field", te: "అయస్కాంత క్షేత్రం మారడం ద్వారా విద్యుత్ ఉత్పత్తి" } },
  { question: { en: "Properties of sound waves", te: "శబ్ద తరంగాల లక్షణాలు" }, answer: { en: "Frequency, amplitude, wavelength, velocity", te: "ఫ్రీక్వెన్సీ, వ్యాప్తి, తరంగదైర్ఘ్యం, వేగం" } },
  { question: { en: "What is acceleration? Unit?", te: "త్వరణం అంటే ఏమిటి? యూనిట్?" }, answer: { en: "Rate of change of velocity; Unit: m/s²", te: "వేగం యొక్క మార్పు రేటు; యూనిట్: m/s²" } },
  { question: { en: "Laws of reflection", te: "ప్రతిబింబ నియమాలు" }, answer: { en: "1. Angle of incidence = Angle of reflection 2. Incident ray, reflected ray, normal lie in same plane", te: "1. పతన కోణం = ప్రతిబింబ కోణం 2. పతన కిరణం, ప్రతిబింబ కిరణం, అభిలంబం ఒకే తలంలో ఉంటాయి" } },
  { question: { en: "Power formula and unit", te: "శక్తి సూత్రం మరియు యూనిట్" }, answer: { en: "Power = Work/Time; Unit: Watt (W)", te: "శక్తి = పని/సమయం; యూనిట్: వాట్ (W)" } }
];

// Generate Biological Science quiz for classes 8-10
const generateBiologicalScienceQuiz = (): QuizQuestion[] => [
  { question: { en: "Cell was discovered by?", te: "కణాన్ని కనుగొన్నది?" }, options: [{ en: "Newton", te: "న్యూటన్" }, { en: "Robert Hooke", te: "రాబర్ట్ హుక్" }, { en: "Darwin", te: "డార్విన్" }, { en: "Mendel", te: "మెండల్" }], correctIndex: 1 },
  { question: { en: "Powerhouse of cell?", te: "కణం యొక్క శక్తి కేంద్రం?" }, options: [{ en: "Nucleus", te: "కేంద్రకం" }, { en: "Mitochondria", te: "మైటోకాండ్రియా" }, { en: "Ribosome", te: "రైబోజోమ్" }, { en: "Chloroplast", te: "హరితకణం" }], correctIndex: 1 },
  { question: { en: "DNA full form?", te: "DNA పూర్తి రూపం?" }, options: [{ en: "Deoxyribonucleic Acid", te: "డియాక్సీరైబోన్యూక్లియిక్ ఆసిడ్" }, { en: "Ribonucleic Acid", te: "రైబోన్యూక్లియిక్ ఆసిడ్" }, { en: "Amino Acid", te: "అమైనో ఆసిడ్" }, { en: "Nucleic Acid", te: "న్యూక్లియిక్ ఆసిడ్" }], correctIndex: 0 },
  { question: { en: "Human heart has chambers?", te: "మానవ హృదయంలో గదులు?" }, options: [{ en: "2", te: "2" }, { en: "3", te: "3" }, { en: "4", te: "4" }, { en: "5", te: "5" }], correctIndex: 2 },
  { question: { en: "Blood is purified in?", te: "రక్తం ఎక్కడ శుద్ధి అవుతుంది?" }, options: [{ en: "Heart", te: "హృదయం" }, { en: "Kidney", te: "మూత్రపిండం" }, { en: "Liver", te: "కాలేయం" }, { en: "Lungs", te: "ఊపిరితిత్తులు" }], correctIndex: 1 },
  { question: { en: "Largest organ?", te: "అతిపెద్ద అవయవం?" }, options: [{ en: "Heart", te: "హృదయం" }, { en: "Liver", te: "కాలేయం" }, { en: "Skin", te: "చర్మం" }, { en: "Brain", te: "మెదడు" }], correctIndex: 2 },
  { question: { en: "Photosynthesis produces?", te: "కిరణజన్య సంయోగక్రియ ఏమి ఉత్పత్తి చేస్తుంది?" }, options: [{ en: "CO2", te: "CO2" }, { en: "O2", te: "O2" }, { en: "N2", te: "N2" }, { en: "H2", te: "H2" }], correctIndex: 1 },
  { question: { en: "Father of genetics?", te: "జన్యుశాస్త్ర పితామహుడు?" }, options: [{ en: "Darwin", te: "డార్విన్" }, { en: "Mendel", te: "మెండల్" }, { en: "Lamarck", te: "లామార్క్" }, { en: "Hooke", te: "హుక్" }], correctIndex: 1 },
  { question: { en: "Digestion starts in?", te: "జీర్ణక్రియ ఎక్కడ మొదలవుతుంది?" }, options: [{ en: "Stomach", te: "కడుపు" }, { en: "Mouth", te: "నోరు" }, { en: "Intestine", te: "ప్రేగు" }, { en: "Liver", te: "కాలేయం" }], correctIndex: 1 },
  { question: { en: "Red color of blood due to?", te: "రక్తం ఎరుపు రంగు దేని వల్ల?" }, options: [{ en: "WBC", te: "WBC" }, { en: "Hemoglobin", te: "హిమోగ్లోబిన్" }, { en: "Platelets", te: "ప్లేట్‌లెట్స్" }, { en: "Plasma", te: "ప్లాస్మా" }], correctIndex: 1 }
];

// Generate Biological Science practice for classes 8-10
const generateBiologicalSciencePractice = (): PracticeQuestion[] => [
  { question: { en: "Draw and label plant cell", te: "మొక్క కణాన్ని గీసి లేబుల్ చేయండి" }, answer: { en: "Parts: Cell wall, cell membrane, nucleus, chloroplast, vacuole, cytoplasm", te: "భాగాలు: కణ గోడ, కణ పొర, కేంద్రకం, హరితకణం, రిక్తిక, సైటోప్లాజం" } },
  { question: { en: "Difference between mitosis and meiosis", te: "మైటోసిస్ మరియు మియోసిస్ మధ్య తేడా" }, answer: { en: "Mitosis: 2 identical cells; Meiosis: 4 different cells (reproductive)", te: "మైటోసిస్: 2 ఒకే రకమైన కణాలు; మియోసిస్: 4 భిన్న కణాలు (ప్రత్యుత్పత్తి)" } },
  { question: { en: "Name parts of digestive system", te: "జీర్ణ వ్యవస్థ భాగాలను పేర్కొనండి" }, answer: { en: "Mouth, esophagus, stomach, small intestine, large intestine, rectum", te: "నోరు, అన్నవాహిక, జఠరం, చిన్న ప్రేగు, పెద్ద ప్రేగు, మలాశయం" } },
  { question: { en: "What are hormones? Give examples", te: "హార్మోన్లు అంటే ఏమిటి? ఉదాహరణలు" }, answer: { en: "Chemical messengers. Ex: Insulin, Adrenaline, Thyroxine", te: "రసాయన వాహకాలు. ఉదా: ఇన్సులిన్, అడ్రినలిన్, థైరాక్సిన్" } },
  { question: { en: "Functions of blood", te: "రక్తం పనులు" }, answer: { en: "Transport O2, nutrients; Remove CO2, waste; Fight infections; Regulate temperature", te: "O2, పోషకాలను రవాణా; CO2, వ్యర్థాలను తొలగించు; ఇన్ఫెక్షన్లతో పోరాడు; ఉష్ణోగ్రతను నియంత్రించు" } },
  { question: { en: "Explain breathing mechanism", te: "శ్వాస యంత్రాంగాన్ని వివరించండి" }, answer: { en: "Inhalation: Diaphragm contracts, ribs rise, air enters. Exhalation: Opposite", te: "ఊపిరి పీల్చడం: డయాఫ్రాం సంకోచిస్తుంది, పక్కటెముకలు పెరుగుతాయి. విడుదల: వ్యతిరేకం" } },
  { question: { en: "What is excretion? Name excretory organs", te: "విసర్జన అంటే ఏమిటి? విసర్జన అవయవాలు" }, answer: { en: "Removal of waste. Organs: Kidney, skin, lungs, liver", te: "వ్యర్థాల తొలగింపు. అవయవాలు: మూత్రపిండం, చర్మం, ఊపిరితిత్తులు, కాలేయం" } },
  { question: { en: "What is heredity?", te: "వారసత్వం అంటే ఏమిటి?" }, answer: { en: "Passing of traits from parents to offspring through genes", te: "జన్యువుల ద్వారా తల్లిదండ్రుల నుండి సంతానానికి లక్షణాల బదిలీ" } },
  { question: { en: "Types of blood groups", te: "రక్త సమూహాల రకాలు" }, answer: { en: "A, B, AB, O (each can be Rh+ or Rh-)", te: "A, B, AB, O (ప్రతిదీ Rh+ లేదా Rh- కావచ్చు)" } },
  { question: { en: "What is ecosystem?", te: "పర్యావరణ వ్యవస్థ అంటే ఏమిటి?" }, answer: { en: "Community of living organisms interacting with non-living environment", te: "నిర్జీవ పర్యావరణంతో సంభాషించే సజీవుల సమూహం" } }
];

// Create subject arrays for classes 6-7
const createSubjects6_7 = (grade: number): Subject[] => [
  {
    id: `telugu-${grade}`,
    title: { en: "తెలుగు", te: "తెలుగు" },
    icon: "Languages",
    color: "game-pink",
    forceLanguage: 'te',
    chapters: grade === 6 ? [
      {
        id: `telugu-ammavadi-${grade}`,
        title: { en: "అమ్మవడి", te: "అమ్మవడి" },
        description: { en: "అమ్మ ప్రేమ గురించి పాఠం", te: "అమ్మ ప్రేమ గురించి పాఠం" },
        notes: { en: "## అమ్మవడి\n\n### పాఠ్య సారాంశం\nఈ పాఠంలో అమ్మ ప్రేమ, త్యాగం మరియు పిల్లల పట్ల ఆమె అనురాగం గురించి వివరించబడింది.\n\n### ముఖ్య అంశాలు\n- అమ్మ ప్రేమ అమూల్యమైనది\n- పిల్లల కోసం అమ్మ చేసే త్యాగాలు\n- కుటుంబ బంధాల ప్రాముఖ్యత\n- అమ్మ పట్ల గౌరవం మరియు కృతజ్ఞత\n\n### పదజాలం\n- అమ్మవడి: తల్లి యొక్క ఒడి\n- ప్రేమ: అనురాగం\n- త్యాగం: ఇతరుల కోసం తన సుఖాలను వదులుకోవడం", te: "## అమ్మవడి\n\n### పాఠ్య సారాంశం\nఈ పాఠంలో అమ్మ ప్రేమ, త్యాగం మరియు పిల్లల పట్ల ఆమె అనురాగం గురించి వివరించబడింది.\n\n### ముఖ్య అంశాలు\n- అమ్మ ప్రేమ అమూల్యమైనది\n- పిల్లల కోసం అమ్మ చేసే త్యాగాలు\n- కుటుంబ బంధాల ప్రాముఖ్యత\n- అమ్మ పట్ల గౌరవం మరియు కృతజ్ఞత\n\n### పదజాలం\n- అమ్మవడి: తల్లి యొక్క ఒడి\n- ప్రేమ: అనురాగం\n- త్యాగం: ఇతరుల కోసం తన సుఖాలను వదులుకోవడం" },
        videoUrls: ["https://www.youtube.com/embed/Wq9Wd0gZbrU"],
        quiz: [
          { question: { en: "అమ్మవడి పాఠంలో ఏమి వివరించబడింది?", te: "అమ్మవడి పాఠంలో ఏమి వివరించబడింది?" }, options: [{ en: "అమ్మ ప్రేమ", te: "అమ్మ ప్రేమ" }, { en: "నాన్న ప్రేమ", te: "నాన్న ప్రేమ" }, { en: "స్నేహం", te: "స్నేహం" }, { en: "పాఠశాల", te: "పాఠశాల" }], correctIndex: 0 },
          { question: { en: "అమ్మవడి అంటే అర్థం ఏమిటి?", te: "అమ్మవడి అంటే అర్థం ఏమిటి?" }, options: [{ en: "తల్లి ఒడి", te: "తల్లి ఒడి" }, { en: "తండ్రి ఒడి", te: "తండ్రి ఒడి" }, { en: "అక్క ఒడి", te: "అక్క ఒడి" }, { en: "నానమ్మ ఒడి", te: "నానమ్మ ఒడి" }], correctIndex: 0 },
          { question: { en: "అమ్మ పిల్లల కోసం ఏమి చేస్తుంది?", te: "అమ్మ పిల్లల కోసం ఏమి చేస్తుంది?" }, options: [{ en: "త్యాగం చేస్తుంది", te: "త్యాగం చేస్తుంది" }, { en: "నిద్రపోతుంది", te: "నిద్రపోతుంది" }, { en: "ఆడుతుంది", te: "ఆడుతుంది" }, { en: "పాడుతుంది", te: "పాడుతుంది" }], correctIndex: 0 },
          { question: { en: "పాఠంలో ఏ బంధం ప్రాముఖ్యం?", te: "పాఠంలో ఏ బంధం ప్రాముఖ్యం?" }, options: [{ en: "కుటుంబ బంధం", te: "కుటుంబ బంధం" }, { en: "స్నేహ బంధం", te: "స్నేహ బంధం" }, { en: "వ్యాపార బంధం", te: "వ్యాపార బంధం" }, { en: "రాజకీయ బంధం", te: "రాజకీయ బంధం" }], correctIndex: 0 },
          { question: { en: "అమ్మ ప్రేమ ఎలాంటిది?", te: "అమ్మ ప్రేమ ఎలాంటిది?" }, options: [{ en: "అమూల్యమైనది", te: "అమూల్యమైనది" }, { en: "చిన్నది", te: "చిన్నది" }, { en: "సాధారణమైనది", te: "సాధారణమైనది" }, { en: "తాత్కాలికమైనది", te: "తాత్కాలికమైనది" }], correctIndex: 0 },
          { question: { en: "త్యాగం అంటే ఏమిటి?", te: "త్యాగం అంటే ఏమిటి?" }, options: [{ en: "ఇతరుల కోసం సుఖాలు వదులుకోవడం", te: "ఇతరుల కోసం సుఖాలు వదులుకోవడం" }, { en: "తినడం", te: "తినడం" }, { en: "నిద్రపోవడం", te: "నిద్రపోవడం" }, { en: "ఆడటం", te: "ఆడటం" }], correctIndex: 0 },
          { question: { en: "అమ్మ పట్ల మనం ఏమి చూపించాలి?", te: "అమ్మ పట్ల మనం ఏమి చూపించాలి?" }, options: [{ en: "గౌరవం మరియు కృతజ్ఞత", te: "గౌరవం మరియు కృతజ్ఞత" }, { en: "కోపం", te: "కోపం" }, { en: "అసూయ", te: "అసూయ" }, { en: "నిర్లక్ష్యం", te: "నిర్లక్ష్యం" }], correctIndex: 0 },
          { question: { en: "పాఠంలో అమ్మ ఎవరి పట్ల అనురాగం చూపిస్తుంది?", te: "పాఠంలో అమ్మ ఎవరి పట్ల అనురాగం చూపిస్తుంది?" }, options: [{ en: "పిల్లల పట్ల", te: "పిల్లల పట్ల" }, { en: "ఇరుగుపొరుగు పట్ల", te: "ఇరుగుపొరుగు పట్ల" }, { en: "జంతువుల పట్ల", te: "జంతువుల పట్ల" }, { en: "పువ్వుల పట్ల", te: "పువ్వుల పట్ల" }], correctIndex: 0 },
          { question: { en: "అనురాగం అంటే ఏమిటి?", te: "అనురాగం అంటే ఏమిటి?" }, options: [{ en: "ప్రేమ", te: "ప్రేమ" }, { en: "కోపం", te: "కోపం" }, { en: "భయం", te: "భయం" }, { en: "దుఃఖం", te: "దుఃఖం" }], correctIndex: 0 },
          { question: { en: "ఈ పాఠం ఏ తరగతికి సంబంధించినది?", te: "ఈ పాఠం ఏ తరగతికి సంబంధించినది?" }, options: [{ en: "6వ తరగతి", te: "6వ తరగతి" }, { en: "10వ తరగతి", te: "10వ తరగతి" }, { en: "1వ తరగతి", te: "1వ తరగతి" }, { en: "12వ తరగతి", te: "12వ తరగతి" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "అమ్మవడి పాఠం సారాంశం రాయండి", te: "అమ్మవడి పాఠం సారాంశం రాయండి" }, answer: { en: "ఈ పాఠంలో అమ్మ ప్రేమ, త్యాగం మరియు పిల్లల పట్ల ఆమె అనురాగం గురించి వివరించబడింది.", te: "ఈ పాఠంలో అమ్మ ప్రేమ, త్యాగం మరియు పిల్లల పట్ల ఆమె అనురాగం గురించి వివరించబడింది." } },
          { question: { en: "అమ్మ ప్రేమను వర్ణించండి", te: "అమ్మ ప్రేమను వర్ణించండి" }, answer: { en: "అమ్మ ప్రేమ అమూల్యమైనది, నిస్వార్థమైనది మరియు అనంతమైనది.", te: "అమ్మ ప్రేమ అమూల్యమైనది, నిస్వార్థమైనది మరియు అనంతమైనది." } },
          { question: { en: "త్యాగం అంటే ఏమిటో వివరించండి", te: "త్యాగం అంటే ఏమిటో వివరించండి" }, answer: { en: "త్యాగం అంటే ఇతరుల కోసం తన సుఖాలను, ఆనందాలను వదులుకోవడం.", te: "త్యాగం అంటే ఇతరుల కోసం తన సుఖాలను, ఆనందాలను వదులుకోవడం." } },
          { question: { en: "కుటుంబ బంధాల ప్రాముఖ్యత గురించి రాయండి", te: "కుటుంబ బంధాల ప్రాముఖ్యత గురించి రాయండి" }, answer: { en: "కుటుంబ బంధాలు మనకు ప్రేమ, ఆదరణ మరియు భద్రత అందిస్తాయి.", te: "కుటుంబ బంధాలు మనకు ప్రేమ, ఆదరణ మరియు భద్రత అందిస్తాయి." } },
          { question: { en: "అమ్మ పట్ల గౌరవం ఎందుకు చూపించాలి?", te: "అమ్మ పట్ల గౌరవం ఎందుకు చూపించాలి?" }, answer: { en: "అమ్మ మన కోసం అనేక త్యాగాలు చేస్తుంది కాబట్టి ఆమె పట్ల గౌరవం చూపించాలి.", te: "అమ్మ మన కోసం అనేక త్యాగాలు చేస్తుంది కాబట్టి ఆమె పట్ల గౌరవం చూపించాలి." } },
          { question: { en: "'అమ్మవడి' పదానికి అర్థం రాయండి", te: "'అమ్మవడి' పదానికి అర్థం రాయండి" }, answer: { en: "అమ్మవడి అంటే తల్లి యొక్క ఒడి.", te: "అమ్మవడి అంటే తల్లి యొక్క ఒడి." } },
          { question: { en: "పాఠంలోని ముఖ్య పదాలు రాయండి", te: "పాఠంలోని ముఖ్య పదాలు రాయండి" }, answer: { en: "అమ్మవడి, ప్రేమ, త్యాగం, అనురాగం, కృతజ్ఞత", te: "అమ్మవడి, ప్రేమ, త్యాగం, అనురాగం, కృతజ్ఞత" } },
          { question: { en: "అమ్మ గురించి ఐదు వాక్యాలు రాయండి", te: "అమ్మ గురించి ఐదు వాక్యాలు రాయండి" }, answer: { en: "1. అమ్మ మన మొదటి గురువు. 2. ఆమె ప్రేమ అమూల్యం. 3. అమ్మ మన కోసం త్యాగాలు చేస్తుంది. 4. ఆమె మనకు మంచి విలువలు నేర్పిస్తుంది. 5. అమ్మ పట్ల ఎప్పుడూ గౌరవం చూపించాలి.", te: "1. అమ్మ మన మొదటి గురువు. 2. ఆమె ప్రేమ అమూల్యం. 3. అమ్మ మన కోసం త్యాగాలు చేస్తుంది. 4. ఆమె మనకు మంచి విలువలు నేర్పిస్తుంది. 5. అమ్మ పట్ల ఎప్పుడూ గౌరవం చూపించాలి." } },
          { question: { en: "పాఠం నుండి నేర్చుకున్న విషయాలు రాయండి", te: "పాఠం నుండి నేర్చుకున్న విషయాలు రాయండి" }, answer: { en: "అమ్మ ప్రేమ విలువ, కుటుంబ బంధాల ప్రాముఖ్యత, పెద్దల పట్ల గౌరవం.", te: "అమ్మ ప్రేమ విలువ, కుటుంబ బంధాల ప్రాముఖ్యత, పెద్దల పట్ల గౌరవం." } },
          { question: { en: "మీ అమ్మ గురించి ఒక చిన్న వ్యాసం రాయండి", te: "మీ అమ్మ గురించి ఒక చిన్న వ్యాసం రాయండి" }, answer: { en: "నా అమ్మ నాకు అత్యంత ప్రియమైనది. ఆమె నన్ను చాలా ప్రేమిస్తుంది. నా కోసం అన్ని త్యాగాలు చేస్తుంది. నేను అమ్మను చాలా గౌరవిస్తాను.", te: "నా అమ్మ నాకు అత్యంత ప్రియమైనది. ఆమె నన్ను చాలా ప్రేమిస్తుంది. నా కోసం అన్ని త్యాగాలు చేస్తుంది. నేను అమ్మను చాలా గౌరవిస్తాను." } }
        ]
      },
      {
        id: `telugu-trupthi-${grade}`,
        title: { en: "తృప్తి", te: "తృప్తి" },
        description: { en: "తృప్తి యొక్క విలువ గురించి పాఠం", te: "తృప్తి యొక్క విలువ గురించి పాఠం" },
        notes: { en: "## తృప్తి\n\n### పాఠ్య సారాంశం\nఈ పాఠంలో జీవితంలో తృప్తి యొక్క ప్రాముఖ్యత గురించి వివరించబడింది.\n\n### ముఖ్య అంశాలు\n- తృప్తి అంటే సంతోషంగా ఉండటం\n- ఉన్నదానితో సంతృప్తి చెందడం\n- అత్యాశ వల్ల కలిగే నష్టాలు\n- నిజమైన సంతోషం తృప్తిలో ఉంటుంది\n\n### పదజాలం\n- తృప్తి: సంతోషం, తనిమ\n- అత్యాశ: ఎక్కువ కోరిక\n- సంతృప్తి: సంతోషంగా ఉండటం", te: "## తృప్తి\n\n### పాఠ్య సారాంశం\nఈ పాఠంలో జీవితంలో తృప్తి యొక్క ప్రాముఖ్యత గురించి వివరించబడింది.\n\n### ముఖ్య అంశాలు\n- తృప్తి అంటే సంతోషంగా ఉండటం\n- ఉన్నదానితో సంతృప్తి చెందడం\n- అత్యాశ వల్ల కలిగే నష్టాలు\n- నిజమైన సంతోషం తృప్తిలో ఉంటుంది\n\n### పదజాలం\n- తృప్తి: సంతోషం, తనిమ\n- అత్యాశ: ఎక్కువ కోరిక\n- సంతృప్తి: సంతోషంగా ఉండటం" },
        videoUrls: ["https://www.youtube.com/embed/P_i-AKwE7bI"],
        quiz: [
          { question: { en: "తృప్తి అంటే ఏమిటి?", te: "తృప్తి అంటే ఏమిటి?" }, options: [{ en: "సంతోషం", te: "సంతోషం" }, { en: "దుఃఖం", te: "దుఃఖం" }, { en: "కోపం", te: "కోపం" }, { en: "భయం", te: "భయం" }], correctIndex: 0 },
          { question: { en: "అత్యాశ వల్ల ఏమి జరుగుతుంది?", te: "అత్యాశ వల్ల ఏమి జరుగుతుంది?" }, options: [{ en: "నష్టాలు", te: "నష్టాలు" }, { en: "లాభాలు", te: "లాభాలు" }, { en: "సంతోషం", te: "సంతోషం" }, { en: "శాంతి", te: "శాంతి" }], correctIndex: 0 },
          { question: { en: "నిజమైన సంతోషం ఎక్కడ ఉంటుంది?", te: "నిజమైన సంతోషం ఎక్కడ ఉంటుంది?" }, options: [{ en: "తృప్తిలో", te: "తృప్తిలో" }, { en: "డబ్బులో", te: "డబ్బులో" }, { en: "అధికారంలో", te: "అధికారంలో" }, { en: "పేరులో", te: "పేరులో" }], correctIndex: 0 },
          { question: { en: "ఉన్నదానితో ఏమి చెందాలి?", te: "ఉన్నదానితో ఏమి చెందాలి?" }, options: [{ en: "సంతృప్తి", te: "సంతృప్తి" }, { en: "అసంతృప్తి", te: "అసంతృప్తి" }, { en: "కోపం", te: "కోపం" }, { en: "అసూయ", te: "అసూయ" }], correctIndex: 0 },
          { question: { en: "తృప్తి పాఠం ఏమి నేర్పిస్తుంది?", te: "తృప్తి పాఠం ఏమి నేర్పిస్తుంది?" }, options: [{ en: "సంతోషంగా ఉండటం", te: "సంతోషంగా ఉండటం" }, { en: "అత్యాశగా ఉండటం", te: "అత్యాశగా ఉండటం" }, { en: "కోపంగా ఉండటం", te: "కోపంగా ఉండటం" }, { en: "దుఃఖంగా ఉండటం", te: "దుఃఖంగా ఉండటం" }], correctIndex: 0 },
          { question: { en: "అత్యాశ అంటే ఏమిటి?", te: "అత్యాశ అంటే ఏమిటి?" }, options: [{ en: "ఎక్కువ కోరిక", te: "ఎక్కువ కోరిక" }, { en: "తక్కువ కోరిక", te: "తక్కువ కోరిక" }, { en: "సంతోషం", te: "సంతోషం" }, { en: "శాంతి", te: "శాంతి" }], correctIndex: 0 },
          { question: { en: "సంతృప్తి అంటే ఏమిటి?", te: "సంతృప్తి అంటే ఏమిటి?" }, options: [{ en: "సంతోషంగా ఉండటం", te: "సంతోషంగా ఉండటం" }, { en: "దుఃఖంగా ఉండటం", te: "దుఃఖంగా ఉండటం" }, { en: "కోపంగా ఉండటం", te: "కోపంగా ఉండటం" }, { en: "భయంగా ఉండటం", te: "భయంగా ఉండటం" }], correctIndex: 0 },
          { question: { en: "తృప్తి ఉన్న వ్యక్తి ఎలా ఉంటాడు?", te: "తృప్తి ఉన్న వ్యక్తి ఎలా ఉంటాడు?" }, options: [{ en: "సంతోషంగా", te: "సంతోషంగా" }, { en: "దుఃఖంగా", te: "దుఃఖంగా" }, { en: "కోపంగా", te: "కోపంగా" }, { en: "భయంగా", te: "భయంగా" }], correctIndex: 0 },
          { question: { en: "తృప్తి లేకపోతే ఏమి జరుగుతుంది?", te: "తృప్తి లేకపోతే ఏమి జరుగుతుంది?" }, options: [{ en: "అశాంతి", te: "అశాంతి" }, { en: "శాంతి", te: "శాంతి" }, { en: "సంతోషం", te: "సంతోషం" }, { en: "ఆనందం", te: "ఆనందం" }], correctIndex: 0 },
          { question: { en: "పాఠం ఏ విలువను నేర్పిస్తుంది?", te: "పాఠం ఏ విలువను నేర్పిస్తుంది?" }, options: [{ en: "తృప్తి విలువ", te: "తృప్తి విలువ" }, { en: "అత్యాశ విలువ", te: "అత్యాశ విలువ" }, { en: "కోపం విలువ", te: "కోపం విలువ" }, { en: "భయం విలువ", te: "భయం విలువ" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "తృప్తి అంటే ఏమిటో వివరించండి", te: "తృప్తి అంటే ఏమిటో వివరించండి" }, answer: { en: "తృప్తి అంటే ఉన్నదానితో సంతోషంగా ఉండటం.", te: "తృప్తి అంటే ఉన్నదానితో సంతోషంగా ఉండటం." } },
          { question: { en: "అత్యాశ వల్ల కలిగే నష్టాలు రాయండి", te: "అత్యాశ వల్ల కలిగే నష్టాలు రాయండి" }, answer: { en: "అత్యాశ వల్ల మానసిక అశాంతి, సంబంధాలు చెడిపోవడం జరుగుతుంది.", te: "అత్యాశ వల్ల మానసిక అశాంతి, సంబంధాలు చెడిపోవడం జరుగుతుంది." } },
          { question: { en: "తృప్తిగా ఉండటం ఎందుకు ముఖ్యం?", te: "తృప్తిగా ఉండటం ఎందుకు ముఖ్యం?" }, answer: { en: "తృప్తిగా ఉంటే మానసిక శాంతి, సంతోషం లభిస్తాయి.", te: "తృప్తిగా ఉంటే మానసిక శాంతి, సంతోషం లభిస్తాయి." } },
          { question: { en: "పాఠం సారాంశం రాయండి", te: "పాఠం సారాంశం రాయండి" }, answer: { en: "ఈ పాఠం తృప్తి విలువను నేర్పిస్తుంది. ఉన్నదానితో సంతోషపడటం నేర్చుకోవాలి.", te: "ఈ పాఠం తృప్తి విలువను నేర్పిస్తుంది. ఉన్నదానితో సంతోషపడటం నేర్చుకోవాలి." } },
          { question: { en: "తృప్తి మరియు అత్యాశ మధ్య తేడా రాయండి", te: "తృప్తి మరియు అత్యాశ మధ్య తేడా రాయండి" }, answer: { en: "తృప్తి: ఉన్నదానితో సంతోషం. అత్యాశ: ఎప్పుడూ ఎక్కువ కావాలనే కోరిక.", te: "తృప్తి: ఉన్నదానితో సంతోషం. అత్యాశ: ఎప్పుడూ ఎక్కువ కావాలనే కోరిక." } },
          { question: { en: "నిజమైన సంతోషం ఎక్కడ దొరుకుతుంది?", te: "నిజమైన సంతోషం ఎక్కడ దొరుకుతుంది?" }, answer: { en: "నిజమైన సంతోషం తృప్తిలో దొరుకుతుంది.", te: "నిజమైన సంతోషం తృప్తిలో దొరుకుతుంది." } },
          { question: { en: "పాఠంలోని ముఖ్య పదాలు రాయండి", te: "పాఠంలోని ముఖ్య పదాలు రాయండి" }, answer: { en: "తృప్తి, సంతోషం, అత్యాశ, సంతృప్తి, శాంతి", te: "తృప్తి, సంతోషం, అత్యాశ, సంతృప్తి, శాంతి" } },
          { question: { en: "తృప్తి గురించి ఐదు వాక్యాలు రాయండి", te: "తృప్తి గురించి ఐదు వాక్యాలు రాయండి" }, answer: { en: "1. తృప్తి మంచి విలువ. 2. ఇది సంతోషాన్ని ఇస్తుంది. 3. అత్యాశ తప్పు. 4. ఉన్నదానితో సంతోషపడాలి. 5. తృప్తే నిజమైన సంపద.", te: "1. తృప్తి మంచి విలువ. 2. ఇది సంతోషాన్ని ఇస్తుంది. 3. అత్యాశ తప్పు. 4. ఉన్నదానితో సంతోషపడాలి. 5. తృప్తే నిజమైన సంపద." } },
          { question: { en: "పాఠం నుండి నేర్చుకున్న విషయాలు రాయండి", te: "పాఠం నుండి నేర్చుకున్న విషయాలు రాయండి" }, answer: { en: "తృప్తి విలువ, అత్యాశ చెడు, సంతోషంగా ఉండటం నేర్చుకున్నాను.", te: "తృప్తి విలువ, అత్యాశ చెడు, సంతోషంగా ఉండటం నేర్చుకున్నాను." } },
          { question: { en: "తృప్తి గురించి చిన్న వ్యాసం రాయండి", te: "తృప్తి గురించి చిన్న వ్యాసం రాయండి" }, answer: { en: "తృప్తి అనేది మంచి విలువ. ఉన్నదానితో సంతోషపడటం తృప్తి. అత్యాశ వల్ల అశాంతి వస్తుంది. తృప్తిగా ఉంటే జీవితం సంతోషంగా ఉంటుంది.", te: "తృప్తి అనేది మంచి విలువ. ఉన్నదానితో సంతోషపడటం తృప్తి. అత్యాశ వల్ల అశాంతి వస్తుంది. తృప్తిగా ఉంటే జీవితం సంతోషంగా ఉంటుంది." } }
        ]
      },
      {
        id: `telugu-maa-koddi-${grade}`,
        title: { en: "మా కొద్ది తెల్లదొరతనం", te: "మా కొద్ది తెల్లదొరతనం" },
        description: { en: "సమాజంలో మార్పు గురించి పాఠం", te: "సమాజంలో మార్పు గురించి పాఠం" },
        notes: { en: "## మా కొద్ది తెల్లదొరతనం\n\n### పాఠ్య సారాంశం\nఈ పాఠంలో సమాజంలో జరిగే మార్పులు మరియు వాటి ప్రభావం గురించి వివరించబడింది.\n\n### ముఖ్య అంశాలు\n- సామాజిక మార్పులు\n- సంప్రదాయాలు మరియు ఆధునికత\n- జీవన విధానంలో మార్పులు\n- విలువల పరిరక్షణ\n\n### పదజాలం\n- తెల్లదొరతనం: పాశ్చాత్య ప్రభావం\n- సంప్రదాయం: పాత పద్ధతులు\n- ఆధునికత: కొత్త పద్ధతులు", te: "## మా కొద్ది తెల్లదొరతనం\n\n### పాఠ్య సారాంశం\nఈ పాఠంలో సమాజంలో జరిగే మార్పులు మరియు వాటి ప్రభావం గురించి వివరించబడింది.\n\n### ముఖ్య అంశాలు\n- సామాజిక మార్పులు\n- సంప్రదాయాలు మరియు ఆధునికత\n- జీవన విధానంలో మార్పులు\n- విలువల పరిరక్షణ\n\n### పదజాలం\n- తెల్లదొరతనం: పాశ్చాత్య ప్రభావం\n- సంప్రదాయం: పాత పద్ధతులు\n- ఆధునికత: కొత్త పద్ధతులు" },
        videoUrls: ["https://www.youtube.com/embed/5cuSe6egD4o"],
        quiz: [
          { question: { en: "తెల్లదొరతనం అంటే ఏమిటి?", te: "తెల్లదొరతనం అంటే ఏమిటి?" }, options: [{ en: "పాశ్చాత్య ప్రభావం", te: "పాశ్చాత్య ప్రభావం" }, { en: "భారతీయ సంస్కృతి", te: "భారతీయ సంస్కృతి" }, { en: "గ్రామీణ జీవనం", te: "గ్రామీణ జీవనం" }, { en: "పురాతన పద్ధతులు", te: "పురాతన పద్ధతులు" }], correctIndex: 0 },
          { question: { en: "సంప్రదాయం అంటే ఏమిటి?", te: "సంప్రదాయం అంటే ఏమిటి?" }, options: [{ en: "పాత పద్ధతులు", te: "పాత పద్ధతులు" }, { en: "కొత్త పద్ధతులు", te: "కొత్త పద్ధతులు" }, { en: "విదేశీ పద్ధతులు", te: "విదేశీ పద్ధతులు" }, { en: "ఆధునిక పద్ధతులు", te: "ఆధునిక పద్ధతులు" }], correctIndex: 0 },
          { question: { en: "ఆధునికత అంటే ఏమిటి?", te: "ఆధునికత అంటే ఏమిటి?" }, options: [{ en: "కొత్త పద్ధతులు", te: "కొత్త పద్ధతులు" }, { en: "పాత పద్ధతులు", te: "పాత పద్ధతులు" }, { en: "పురాతన సంస్కృతి", te: "పురాతన సంస్కృతి" }, { en: "గ్రామీణ జీవనం", te: "గ్రామీణ జీవనం" }], correctIndex: 0 },
          { question: { en: "పాఠంలో ఏమి వివరించబడింది?", te: "పాఠంలో ఏమి వివరించబడింది?" }, options: [{ en: "సామాజిక మార్పులు", te: "సామాజిక మార్పులు" }, { en: "గణిత సూత్రాలు", te: "గణిత సూత్రాలు" }, { en: "శాస్త్ర ప్రయోగాలు", te: "శాస్త్ర ప్రయోగాలు" }, { en: "భూగోళశాస్త్రం", te: "భూగోళశాస్త్రం" }], correctIndex: 0 },
          { question: { en: "విలువల పరిరక్షణ అంటే ఏమిటి?", te: "విలువల పరిరక్షణ అంటే ఏమిటి?" }, options: [{ en: "విలువలను కాపాడటం", te: "విలువలను కాపాడటం" }, { en: "విలువలను మరచిపోవడం", te: "విలువలను మరచిపోవడం" }, { en: "విలువలను మార్చడం", te: "విలువలను మార్చడం" }, { en: "విలువలను అమ్మడం", te: "విలువలను అమ్మడం" }], correctIndex: 0 },
          { question: { en: "జీవన విధానంలో మార్పులు ఎందుకు వస్తాయి?", te: "జీవన విధానంలో మార్పులు ఎందుకు వస్తాయి?" }, options: [{ en: "కాలానుగుణంగా", te: "కాలానుగుణంగా" }, { en: "అకస్మాత్తుగా", te: "అకస్మాత్తుగా" }, { en: "ఎప్పుడూ రావు", te: "ఎప్పుడూ రావు" }, { en: "రాత్రిపూట మాత్రమే", te: "రాత్రిపూట మాత్రమే" }], correctIndex: 0 },
          { question: { en: "పాశ్చాత్య అంటే ఏమిటి?", te: "పాశ్చాత్య అంటే ఏమిటి?" }, options: [{ en: "పశ్చిమ దేశాలకు సంబంధించిన", te: "పశ్చిమ దేశాలకు సంబంధించిన" }, { en: "తూర్పు దేశాలకు సంబంధించిన", te: "తూర్పు దేశాలకు సంబంధించిన" }, { en: "ఉత్తర దేశాలకు సంబంధించిన", te: "ఉత్తర దేశాలకు సంబంధించిన" }, { en: "దక్షిణ దేశాలకు సంబంధించిన", te: "దక్షిణ దేశాలకు సంబంధించిన" }], correctIndex: 0 },
          { question: { en: "సంస్కృతి అంటే ఏమిటి?", te: "సంస్కృతి అంటే ఏమిటి?" }, options: [{ en: "జీవన విధానం", te: "జీవన విధానం" }, { en: "ఆహారం", te: "ఆహారం" }, { en: "దుస్తులు", te: "దుస్తులు" }, { en: "ఇల్లు", te: "ఇల్లు" }], correctIndex: 0 },
          { question: { en: "మార్పు అంటే ఏమిటి?", te: "మార్పు అంటే ఏమిటి?" }, options: [{ en: "ఒక స్థితి నుండి మరో స్థితికి వెళ్ళడం", te: "ఒక స్థితి నుండి మరో స్థితికి వెళ్ళడం" }, { en: "అదే స్థితిలో ఉండటం", te: "అదే స్థితిలో ఉండటం" }, { en: "నిద్రపోవడం", te: "నిద్రపోవడం" }, { en: "తినడం", te: "తినడం" }], correctIndex: 0 },
          { question: { en: "ఈ పాఠం ఏమి నేర్పిస్తుంది?", te: "ఈ పాఠం ఏమి నేర్పిస్తుంది?" }, options: [{ en: "మార్పును అర్థం చేసుకోవడం", te: "మార్పును అర్థం చేసుకోవడం" }, { en: "గణితం", te: "గణితం" }, { en: "శాస్త్రం", te: "శాస్త్రం" }, { en: "భూగోళశాస్త్రం", te: "భూగోళశాస్త్రం" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "తెల్లదొరతనం అంటే ఏమిటో వివరించండి", te: "తెల్లదొరతనం అంటే ఏమిటో వివరించండి" }, answer: { en: "తెల్లదొరతనం అంటే పాశ్చాత్య దేశాల ప్రభావం మరియు వారి జీవన విధానాన్ని అనుసరించడం.", te: "తెల్లదొరతనం అంటే పాశ్చాత్య దేశాల ప్రభావం మరియు వారి జీవన విధానాన్ని అనుసరించడం." } },
          { question: { en: "సంప్రదాయం మరియు ఆధునికత మధ్య తేడా రాయండి", te: "సంప్రదాయం మరియు ఆధునికత మధ్య తేడా రాయండి" }, answer: { en: "సంప్రదాయం: పాత పద్ధతులు, పూర్వీకుల ఆచారాలు. ఆధునికత: కొత్త పద్ధతులు, నేటి కాలపు విధానాలు.", te: "సంప్రదాయం: పాత పద్ధతులు, పూర్వీకుల ఆచారాలు. ఆధునికత: కొత్త పద్ధతులు, నేటి కాలపు విధానాలు." } },
          { question: { en: "సామాజిక మార్పులు అంటే ఏమిటి?", te: "సామాజిక మార్పులు అంటే ఏమిటి?" }, answer: { en: "సమాజంలో జరిగే మార్పులు - జీవన విధానం, ఆచారాలు, అలవాట్లలో మార్పులు.", te: "సమాజంలో జరిగే మార్పులు - జీవన విధానం, ఆచారాలు, అలవాట్లలో మార్పులు." } },
          { question: { en: "విలువలను ఎందుకు పరిరక్షించాలి?", te: "విలువలను ఎందుకు పరిరక్షించాలి?" }, answer: { en: "మన సంస్కృతి, గుర్తింపు మరియు సమాజ ఐక్యత కోసం విలువలను పరిరక్షించాలి.", te: "మన సంస్కృతి, గుర్తింపు మరియు సమాజ ఐక్యత కోసం విలువలను పరిరక్షించాలి." } },
          { question: { en: "పాఠం సారాంశం రాయండి", te: "పాఠం సారాంశం రాయండి" }, answer: { en: "ఈ పాఠంలో సమాజంలో జరిగే మార్పులు, పాశ్చాత్య ప్రభావం మరియు విలువల పరిరక్షణ గురించి వివరించబడింది.", te: "ఈ పాఠంలో సమాజంలో జరిగే మార్పులు, పాశ్చాత్య ప్రభావం మరియు విలువల పరిరక్షణ గురించి వివరించబడింది." } },
          { question: { en: "పాఠంలోని ముఖ్య పదాలు రాయండి", te: "పాఠంలోని ముఖ్య పదాలు రాయండి" }, answer: { en: "తెల్లదొరతనం, సంప్రదాయం, ఆధునికత, మార్పు, విలువలు, సంస్కృతి", te: "తెల్లదొరతనం, సంప్రదాయం, ఆధునికత, మార్పు, విలువలు, సంస్కృతి" } },
          { question: { en: "మార్పు మంచిదా చెడ్డదా? వివరించండి", te: "మార్పు మంచిదా చెడ్డదా? వివరించండి" }, answer: { en: "మార్పు మంచిది కూడా చెడ్డది కూడా కావచ్చు. మంచి విలువలను కాపాడుకుంటూ మార్పును స్వీకరించాలి.", te: "మార్పు మంచిది కూడా చెడ్డది కూడా కావచ్చు. మంచి విలువలను కాపాడుకుంటూ మార్పును స్వీకరించాలి." } },
          { question: { en: "సంస్కృతి గురించి రాయండి", te: "సంస్కృతి గురించి రాయండి" }, answer: { en: "సంస్కృతి అంటే ఒక సమాజం యొక్క జీవన విధానం, ఆచారాలు, సంప్రదాయాలు మరియు విలువలు.", te: "సంస్కృతి అంటే ఒక సమాజం యొక్క జీవన విధానం, ఆచారాలు, సంప్రదాయాలు మరియు విలువలు." } },
          { question: { en: "పాఠం నుండి నేర్చుకున్న విషయాలు రాయండి", te: "పాఠం నుండి నేర్చుకున్న విషయాలు రాయండి" }, answer: { en: "సమాజంలో మార్పులు, విలువల ప్రాముఖ్యత, సంప్రదాయం మరియు ఆధునికత మధ్య సమతుల్యత.", te: "సమాజంలో మార్పులు, విలువల ప్రాముఖ్యత, సంప్రదాయం మరియు ఆధునికత మధ్య సమతుల్యత." } },
          { question: { en: "మన సంస్కృతి గురించి వ్యాసం రాయండి", te: "మన సంస్కృతి గురించి వ్యాసం రాయండి" }, answer: { en: "భారతీయ సంస్కృతి గొప్పది. మన సంప్రదాయాలు, పండుగలు, కుటుంబ విలువలు అద్భుతమైనవి. ఈ విలువలను కాపాడుకోవాలి.", te: "భారతీయ సంస్కృతి గొప్పది. మన సంప్రదాయాలు, పండుగలు, కుటుంబ విలువలు అద్భుతమైనవి. ఈ విలువలను కాపాడుకోవాలి." } }
        ]
      },
      {
        id: `telugu-samayaspoorthi-${grade}`,
        title: { en: "సమయస్ఫూర్తి", te: "సమయస్ఫూర్తి" },
        description: { en: "సమయస్ఫూర్తి యొక్క ప్రాముఖ్యత", te: "సమయస్ఫూర్తి యొక్క ప్రాముఖ్యత" },
        notes: { en: "## సమయస్ఫూర్తి\n\n### పాఠ్య సారాంశం\nఈ పాఠంలో సమయస్ఫూర్తి అంటే ఏమిటో, దాని ప్రాముఖ్యత గురించి వివరించబడింది.\n\n### ముఖ్య అంశాలు\n- సమయస్ఫూర్తి అంటే త్వరగా ఆలోచించి పని చేయడం\n- కష్టమైన సమయాలలో సరైన నిర్ణయాలు తీసుకోవడం\n- ఇతరులకు సహాయం చేయడం\n- ధైర్యం మరియు తెలివి\n\n### పదజాలం\n- సమయస్ఫూర్తి: తక్షణ నిర్ణయం తీసుకునే సామర్థ్యం\n- ధైర్యం: భయం లేకుండా ఉండటం\n- తెలివి: బుద్ధిమత్తం", te: "## సమయస్ఫూర్తి\n\n### పాఠ్య సారాంశం\nఈ పాఠంలో సమయస్ఫూర్తి అంటే ఏమిటో, దాని ప్రాముఖ్యత గురించి వివరించబడింది.\n\n### ముఖ్య అంశాలు\n- సమయస్ఫూర్తి అంటే త్వరగా ఆలోచించి పని చేయడం\n- కష్టమైన సమయాలలో సరైన నిర్ణయాలు తీసుకోవడం\n- ఇతరులకు సహాయం చేయడం\n- ధైర్యం మరియు తెలివి\n\n### పదజాలం\n- సమయస్ఫూర్తి: తక్షణ నిర్ణయం తీసుకునే సామర్థ్యం\n- ధైర్యం: భయం లేకుండా ఉండటం\n- తెలివి: బుద్ధిమత్తం" },
        videoUrls: ["https://www.youtube.com/embed/Pk9bwR0lR_s"],
        quiz: [
          { question: { en: "సమయస్ఫూర్తి అంటే ఏమిటి?", te: "సమయస్ఫూర్తి అంటే ఏమిటి?" }, options: [{ en: "త్వరగా ఆలోచించి పని చేయడం", te: "త్వరగా ఆలోచించి పని చేయడం" }, { en: "నిదానంగా పని చేయడం", te: "నిదానంగా పని చేయడం" }, { en: "పని చేయకపోవడం", te: "పని చేయకపోవడం" }, { en: "నిద్రపోవడం", te: "నిద్రపోవడం" }], correctIndex: 0 },
          { question: { en: "సమయస్ఫూర్తికి ఏమి అవసరం?", te: "సమయస్ఫూర్తికి ఏమి అవసరం?" }, options: [{ en: "ధైర్యం మరియు తెలివి", te: "ధైర్యం మరియు తెలివి" }, { en: "భయం", te: "భయం" }, { en: "సోమరితనం", te: "సోమరితనం" }, { en: "నిద్ర", te: "నిద్ర" }], correctIndex: 0 },
          { question: { en: "కష్టమైన సమయాలలో ఏమి చేయాలి?", te: "కష్టమైన సమయాలలో ఏమి చేయాలి?" }, options: [{ en: "సరైన నిర్ణయాలు తీసుకోవాలి", te: "సరైన నిర్ణయాలు తీసుకోవాలి" }, { en: "భయపడాలి", te: "భయపడాలి" }, { en: "పారిపోవాలి", te: "పారిపోవాలి" }, { en: "నిద్రపోవాలి", te: "నిద్రపోవాలి" }], correctIndex: 0 },
          { question: { en: "ధైర్యం అంటే ఏమిటి?", te: "ధైర్యం అంటే ఏమిటి?" }, options: [{ en: "భయం లేకుండా ఉండటం", te: "భయం లేకుండా ఉండటం" }, { en: "భయపడటం", te: "భయపడటం" }, { en: "పారిపోవడం", te: "పారిపోవడం" }, { en: "దాక్కోవడం", te: "దాక్కోవడం" }], correctIndex: 0 },
          { question: { en: "తెలివి అంటే ఏమిటి?", te: "తెలివి అంటే ఏమిటి?" }, options: [{ en: "బుద్ధిమత్తం", te: "బుద్ధిమత్తం" }, { en: "మూర్ఖత్వం", te: "మూర్ఖత్వం" }, { en: "సోమరితనం", te: "సోమరితనం" }, { en: "నిద్ర", te: "నిద్ర" }], correctIndex: 0 },
          { question: { en: "సమయస్ఫూర్తి ఉన్న వ్యక్తి ఏమి చేస్తాడు?", te: "సమయస్ఫూర్తి ఉన్న వ్యక్తి ఏమి చేస్తాడు?" }, options: [{ en: "ఇతరులకు సహాయం చేస్తాడు", te: "ఇతరులకు సహాయం చేస్తాడు" }, { en: "పారిపోతాడు", te: "పారిపోతాడు" }, { en: "దాక్కుంటాడు", te: "దాక్కుంటాడు" }, { en: "నిద్రపోతాడు", te: "నిద్రపోతాడు" }], correctIndex: 0 },
          { question: { en: "సమయస్ఫూర్తి ఎప్పుడు అవసరం?", te: "సమయస్ఫూర్తి ఎప్పుడు అవసరం?" }, options: [{ en: "అత్యవసర సమయాలలో", te: "అత్యవసర సమయాలలో" }, { en: "నిద్రలో", te: "నిద్రలో" }, { en: "ఎప్పుడూ అవసరం లేదు", te: "ఎప్పుడూ అవసరం లేదు" }, { en: "ఆటలో మాత్రమే", te: "ఆటలో మాత్రమే" }], correctIndex: 0 },
          { question: { en: "సమయస్ఫూర్తి వల్ల ఏమి జరుగుతుంది?", te: "సమయస్ఫూర్తి వల్ల ఏమి జరుగుతుంది?" }, options: [{ en: "ప్రమాదాలను నివారించవచ్చు", te: "ప్రమాదాలను నివారించవచ్చు" }, { en: "ప్రమాదాలు పెరుగుతాయి", te: "ప్రమాదాలు పెరుగుతాయి" }, { en: "ఏమీ జరగదు", te: "ఏమీ జరగదు" }, { en: "నష్టం జరుగుతుంది", te: "నష్టం జరుగుతుంది" }], correctIndex: 0 },
          { question: { en: "తక్షణ నిర్ణయం అంటే ఏమిటి?", te: "తక్షణ నిర్ణయం అంటే ఏమిటి?" }, options: [{ en: "వెంటనే నిర్ణయం తీసుకోవడం", te: "వెంటనే నిర్ణయం తీసుకోవడం" }, { en: "ఆలస్యంగా నిర్ణయించడం", te: "ఆలస్యంగా నిర్ణయించడం" }, { en: "నిర్ణయించకపోవడం", te: "నిర్ణయించకపోవడం" }, { en: "ఇతరులను అడగడం", te: "ఇతరులను అడగడం" }], correctIndex: 0 },
          { question: { en: "ఈ పాఠం ఏమి నేర్పిస్తుంది?", te: "ఈ పాఠం ఏమి నేర్పిస్తుంది?" }, options: [{ en: "సమయస్ఫూర్తి ప్రాముఖ్యత", te: "సమయస్ఫూర్తి ప్రాముఖ్యత" }, { en: "గణితం", te: "గణితం" }, { en: "శాస్త్రం", te: "శాస్త్రం" }, { en: "చరిత్ర", te: "చరిత్ర" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "సమయస్ఫూర్తి అంటే ఏమిటో వివరించండి", te: "సమయస్ఫూర్తి అంటే ఏమిటో వివరించండి" }, answer: { en: "సమయస్ఫూర్తి అంటే కష్టమైన సమయాలలో త్వరగా ఆలోచించి సరైన నిర్ణయాలు తీసుకునే సామర్థ్యం.", te: "సమయస్ఫూర్తి అంటే కష్టమైన సమయాలలో త్వరగా ఆలోచించి సరైన నిర్ణయాలు తీసుకునే సామర్థ్యం." } },
          { question: { en: "సమయస్ఫూర్తికి ఏమి అవసరం?", te: "సమయస్ఫూర్తికి ఏమి అవసరం?" }, answer: { en: "సమయస్ఫూర్తికి ధైర్యం, తెలివి మరియు శాంతంగా ఆలోచించే సామర్థ్యం అవసరం.", te: "సమయస్ఫూర్తికి ధైర్యం, తెలివి మరియు శాంతంగా ఆలోచించే సామర్థ్యం అవసరం." } },
          { question: { en: "సమయస్ఫూర్తి చూపించిన ఒక సందర్భం రాయండి", te: "సమయస్ఫూర్తి చూపించిన ఒక సందర్భం రాయండి" }, answer: { en: "అగ్నిప్రమాదం సమయంలో అందరినీ బయటకు తీసుకెళ్ళడం సమయస్ఫూర్తి.", te: "అగ్నిప్రమాదం సమయంలో అందరినీ బయటకు తీసుకెళ్ళడం సమయస్ఫూర్తి." } },
          { question: { en: "ధైర్యం ఎందుకు అవసరం?", te: "ధైర్యం ఎందుకు అవసరం?" }, answer: { en: "కష్టమైన సమయాలలో భయపడకుండా సరైన నిర్ణయాలు తీసుకోవడానికి ధైర్యం అవసరం.", te: "కష్టమైన సమయాలలో భయపడకుండా సరైన నిర్ణయాలు తీసుకోవడానికి ధైర్యం అవసరం." } },
          { question: { en: "పాఠం సారాంశం రాయండి", te: "పాఠం సారాంశం రాయండి" }, answer: { en: "ఈ పాఠంలో సమయస్ఫూర్తి అంటే ఏమిటో, దాని ప్రాముఖ్యత గురించి వివరించబడింది.", te: "ఈ పాఠంలో సమయస్ఫూర్తి అంటే ఏమిటో, దాని ప్రాముఖ్యత గురించి వివరించబడింది." } },
          { question: { en: "పాఠంలోని ముఖ్య పదాలు రాయండి", te: "పాఠంలోని ముఖ్య పదాలు రాయండి" }, answer: { en: "సమయస్ఫూర్తి, ధైర్యం, తెలివి, నిర్ణయం, సహాయం", te: "సమయస్ఫూర్తి, ధైర్యం, తెలివి, నిర్ణయం, సహాయం" } },
          { question: { en: "సమయస్ఫూర్తి లేకపోతే ఏమి జరుగుతుంది?", te: "సమయస్ఫూర్తి లేకపోతే ఏమి జరుగుతుంది?" }, answer: { en: "అత్యవసర సమయాలలో సరైన నిర్ణయాలు తీసుకోలేము, నష్టాలు జరగవచ్చు.", te: "అత్యవసర సమయాలలో సరైన నిర్ణయాలు తీసుకోలేము, నష్టాలు జరగవచ్చు." } },
          { question: { en: "సమయస్ఫూర్తి గురించి ఐదు వాక్యాలు రాయండి", te: "సమయస్ఫూర్తి గురించి ఐదు వాక్యాలు రాయండి" }, answer: { en: "1. సమయస్ఫూర్తి ముఖ్యమైన నైపుణ్యం. 2. ఇది అత్యవసర సమయాలలో సహాయపడుతుంది. 3. ధైర్యం మరియు తెలివి అవసరం. 4. ఇతరులకు సహాయం చేయవచ్చు. 5. ప్రమాదాలను నివారించవచ్చు.", te: "1. సమయస్ఫూర్తి ముఖ్యమైన నైపుణ్యం. 2. ఇది అత్యవసర సమయాలలో సహాయపడుతుంది. 3. ధైర్యం మరియు తెలివి అవసరం. 4. ఇతరులకు సహాయం చేయవచ్చు. 5. ప్రమాదాలను నివారించవచ్చు." } },
          { question: { en: "పాఠం నుండి నేర్చుకున్న విషయాలు రాయండి", te: "పాఠం నుండి నేర్చుకున్న విషయాలు రాయండి" }, answer: { en: "సమయస్ఫూర్తి ప్రాముఖ్యత, ధైర్యం అవసరం, ఇతరులకు సహాయం చేయడం నేర్చుకున్నాను.", te: "సమయస్ఫూర్తి ప్రాముఖ్యత, ధైర్యం అవసరం, ఇతరులకు సహాయం చేయడం నేర్చుకున్నాను." } },
          { question: { en: "సమయస్ఫూర్తి గురించి చిన్న వ్యాసం రాయండి", te: "సమయస్ఫూర్తి గురించి చిన్న వ్యాసం రాయండి" }, answer: { en: "సమయస్ఫూర్తి అంటే కష్ట సమయాలలో త్వరగా ఆలోచించి పని చేయడం. ఇది చాలా ముఖ్యమైన నైపుణ్యం. దీనికి ధైర్యం మరియు తెలివి అవసరం. సమయస్ఫూర్తి వల్ల ప్రమాదాలను నివారించవచ్చు.", te: "సమయస్ఫూర్తి అంటే కష్ట సమయాలలో త్వరగా ఆలోచించి పని చేయడం. ఇది చాలా ముఖ్యమైన నైపుణ్యం. దీనికి ధైర్యం మరియు తెలివి అవసరం. సమయస్ఫూర్తి వల్ల ప్రమాదాలను నివారించవచ్చు." } }
        ]
      }
    ] : [
      {
        id: `telugu-aksharam-${grade}`,
        title: { en: "అక్షరం", te: "అక్షరం" },
        description: { en: "అక్షరం యొక్క ప్రాముఖ్యత గురించి పాఠం", te: "అక్షరం యొక్క ప్రాముఖ్యత గురించి పాఠం" },
        notes: { en: "## అక్షరం\n\n### పాఠ్య సారాంశం\nఈ పాఠం అక్షరం యొక్క ప్రాముఖ్యత, విద్య యొక్క విలువ గురించి వివరిస్తుంది.\n\n### ముఖ్య అంశాలు\n- అక్షరం జ్ఞానానికి మూలం\n- విద్య మానవుడికి చక్షువులు వంటిది\n- అక్షరాలు నేర్చుకోవడం జీవితంలో ముఖ్యం\n- చదువు వల్ల మనిషి అభివృద్ధి చెందుతాడు\n\n### పదజాలం\n- అక్షరం: వర్ణం, అక్షరమాల యొక్క అంశం\n- జ్ఞానం: తెలివి, విద్య\n- చదువు: విద్య\n- అభివృద్ధి: ముందుకు వెళ్ళడం", te: "## అక్షరం\n\n### పాఠ్య సారాంశం\nఈ పాఠం అక్షరం యొక్క ప్రాముఖ్యత, విద్య యొక్క విలువ గురించి వివరిస్తుంది.\n\n### ముఖ్య అంశాలు\n- అక్షరం జ్ఞానానికి మూలం\n- విద్య మానవుడికి చక్షువులు వంటిది\n- అక్షరాలు నేర్చుకోవడం జీవితంలో ముఖ్యం\n- చదువు వల్ల మనిషి అభివృద్ధి చెందుతాడు\n\n### పదజాలం\n- అక్షరం: వర్ణం, అక్షరమాల యొక్క అంశం\n- జ్ఞానం: తెలివి, విద్య\n- చదువు: విద్య\n- అభివృద్ధి: ముందుకు వెళ్ళడం" },
        videoUrls: ["https://www.youtube.com/embed/nQBVzjznch0"],
        quiz: [
          { question: { en: "అక్షరం దేనికి మూలం?", te: "అక్షరం దేనికి మూలం?" }, options: [{ en: "జ్ఞానానికి", te: "జ్ఞానానికి" }, { en: "డబ్బుకు", te: "డబ్బుకు" }, { en: "ఆహారానికి", te: "ఆహారానికి" }, { en: "నిద్రకు", te: "నిద్రకు" }], correctIndex: 0 },
          { question: { en: "విద్య మానవుడికి ఏమి వంటిది?", te: "విద్య మానవుడికి ఏమి వంటిది?" }, options: [{ en: "చక్షువులు", te: "చక్షువులు" }, { en: "చేతులు", te: "చేతులు" }, { en: "కాళ్ళు", te: "కాళ్ళు" }, { en: "చెవులు", te: "చెవులు" }], correctIndex: 0 },
          { question: { en: "చదువు వల్ల మనిషి ఏమి చెందుతాడు?", te: "చదువు వల్ల మనిషి ఏమి చెందుతాడు?" }, options: [{ en: "అభివృద్ధి", te: "అభివృద్ధి" }, { en: "నష్టం", te: "నష్టం" }, { en: "బాధ", te: "బాధ" }, { en: "నిద్ర", te: "నిద్ర" }], correctIndex: 0 },
          { question: { en: "జ్ఞానం అంటే ఏమిటి?", te: "జ్ఞానం అంటే ఏమిటి?" }, options: [{ en: "తెలివి, విద్య", te: "తెలివి, విద్య" }, { en: "డబ్బు", te: "డబ్బు" }, { en: "ఆహారం", te: "ఆహారం" }, { en: "నిద్ర", te: "నిద్ర" }], correctIndex: 0 },
          { question: { en: "అక్షరాలు నేర్చుకోవడం ఎందుకు ముఖ్యం?", te: "అక్షరాలు నేర్చుకోవడం ఎందుకు ముఖ్యం?" }, options: [{ en: "జీవితంలో అభివృద్ధికి", te: "జీవితంలో అభివృద్ధికి" }, { en: "ఆడటానికి", te: "ఆడటానికి" }, { en: "నిద్రపోవడానికి", te: "నిద్రపోవడానికి" }, { en: "తినడానికి", te: "తినడానికి" }], correctIndex: 0 },
          { question: { en: "ఈ పాఠం దేని గురించి?", te: "ఈ పాఠం దేని గురించి?" }, options: [{ en: "అక్షరం ప్రాముఖ్యత", te: "అక్షరం ప్రాముఖ్యత" }, { en: "ఆటలు", te: "ఆటలు" }, { en: "పండ్లు", te: "పండ్లు" }, { en: "జంతువులు", te: "జంతువులు" }], correctIndex: 0 },
          { question: { en: "విద్య లేకపోతే మనిషి ఎలా ఉంటాడు?", te: "విద్య లేకపోతే మనిషి ఎలా ఉంటాడు?" }, options: [{ en: "అంధుడిలా", te: "అంధుడిలా" }, { en: "ధనవంతుడిలా", te: "ధనవంతుడిలా" }, { en: "బలవంతుడిలా", te: "బలవంతుడిలా" }, { en: "సంతోషంగా", te: "సంతోషంగా" }], correctIndex: 0 },
          { question: { en: "అభివృద్ధి అంటే ఏమిటి?", te: "అభివృద్ధి అంటే ఏమిటి?" }, options: [{ en: "ముందుకు వెళ్ళడం", te: "ముందుకు వెళ్ళడం" }, { en: "వెనక్కి వెళ్ళడం", te: "వెనక్కి వెళ్ళడం" }, { en: "నిలబడటం", te: "నిలబడటం" }, { en: "కూర్చోవడం", te: "కూర్చోవడం" }], correctIndex: 0 },
          { question: { en: "చక్షువులు అంటే ఏమిటి?", te: "చక్షువులు అంటే ఏమిటి?" }, options: [{ en: "కళ్ళు", te: "కళ్ళు" }, { en: "చెవులు", te: "చెవులు" }, { en: "చేతులు", te: "చేతులు" }, { en: "కాళ్ళు", te: "కాళ్ళు" }], correctIndex: 0 },
          { question: { en: "అక్షరం ఏ తరగతికి సంబంధించినది?", te: "అక్షరం ఏ తరగతికి సంబంధించినది?" }, options: [{ en: "7వ తరగతి", te: "7వ తరగతి" }, { en: "6వ తరగతి", te: "6వ తరగతి" }, { en: "10వ తరగతి", te: "10వ తరగతి" }, { en: "1వ తరగతి", te: "1వ తరగతి" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "అక్షరం పాఠం సారాంశం రాయండి", te: "అక్షరం పాఠం సారాంశం రాయండి" }, answer: { en: "ఈ పాఠంలో అక్షరం యొక్క ప్రాముఖ్యత, విద్య యొక్క విలువ గురించి వివరించబడింది.", te: "ఈ పాఠంలో అక్షరం యొక్క ప్రాముఖ్యత, విద్య యొక్క విలువ గురించి వివరించబడింది." } },
          { question: { en: "అక్షరం ఎందుకు ముఖ్యం?", te: "అక్షరం ఎందుకు ముఖ్యం?" }, answer: { en: "అక్షరం జ్ఞానానికి మూలం. అక్షరాలు నేర్చుకోవడం వల్ల చదవగలం, రాయగలం, జ్ఞానం పొందగలం.", te: "అక్షరం జ్ఞానానికి మూలం. అక్షరాలు నేర్చుకోవడం వల్ల చదవగలం, రాయగలం, జ్ఞానం పొందగలం." } },
          { question: { en: "విద్య గురించి ఐదు వాక్యాలు రాయండి", te: "విద్య గురించి ఐదు వాక్యాలు రాయండి" }, answer: { en: "1. విద్య మానవుడికి చక్షువులు వంటిది. 2. విద్య వల్ల జ్ఞానం వస్తుంది. 3. చదువు మనిషిని అభివృద్ధి చేస్తుంది. 4. విద్య ధనం కంటే విలువైనది. 5. విద్యావంతుడు అందరికీ గౌరవం పొందుతాడు.", te: "1. విద్య మానవుడికి చక్షువులు వంటిది. 2. విద్య వల్ల జ్ఞానం వస్తుంది. 3. చదువు మనిషిని అభివృద్ధి చేస్తుంది. 4. విద్య ధనం కంటే విలువైనది. 5. విద్యావంతుడు అందరికీ గౌరవం పొందుతాడు." } },
          { question: { en: "జ్ఞానం అంటే ఏమిటో వివరించండి", te: "జ్ఞానం అంటే ఏమిటో వివరించండి" }, answer: { en: "జ్ఞానం అంటే తెలివి, విద్య, అవగాహన. అక్షరాలు నేర్చుకోవడం వల్ల జ్ఞానం పెరుగుతుంది.", te: "జ్ఞానం అంటే తెలివి, విద్య, అవగాహన. అక్షరాలు నేర్చుకోవడం వల్ల జ్ఞానం పెరుగుతుంది." } },
          { question: { en: "చదువు యొక్క ప్రయోజనాలు రాయండి", te: "చదువు యొక్క ప్రయోజనాలు రాయండి" }, answer: { en: "చదువు వల్ల జ్ఞానం పెరుగుతుంది, మంచి ఉద్యోగం వస్తుంది, సమాజంలో గౌరవం పొందుతాం.", te: "చదువు వల్ల జ్ఞానం పెరుగుతుంది, మంచి ఉద్యోగం వస్తుంది, సమాజంలో గౌరవం పొందుతాం." } },
          { question: { en: "పాఠంలోని ముఖ్య పదాలు రాయండి", te: "పాఠంలోని ముఖ్య పదాలు రాయండి" }, answer: { en: "అక్షరం, జ్ఞానం, విద్య, చదువు, అభివృద్ధి, చక్షువులు", te: "అక్షరం, జ్ఞానం, విద్య, చదువు, అభివృద్ధి, చక్షువులు" } },
          { question: { en: "విద్యావంతుడు అంటే ఎవరు?", te: "విద్యావంతుడు అంటే ఎవరు?" }, answer: { en: "విద్యావంతుడు అంటే చదువుకున్న వ్యక్తి, జ్ఞానం కలిగిన వ్యక్తి.", te: "విద్యావంతుడు అంటే చదువుకున్న వ్యక్తి, జ్ఞానం కలిగిన వ్యక్తి." } },
          { question: { en: "అక్షరం పాఠం నుండి నేర్చుకున్న విషయాలు రాయండి", te: "అక్షరం పాఠం నుండి నేర్చుకున్న విషయాలు రాయండి" }, answer: { en: "అక్షరం ప్రాముఖ్యత, విద్య యొక్క విలువ, చదువు వల్ల అభివృద్ధి గురించి నేర్చుకున్నాను.", te: "అక్షరం ప్రాముఖ్యత, విద్య యొక్క విలువ, చదువు వల్ల అభివృద్ధి గురించి నేర్చుకున్నాను." } },
          { question: { en: "అక్షరం మీద వ్యాసం రాయండి", te: "అక్షరం మీద వ్యాసం రాయండి" }, answer: { en: "అక్షరం జ్ఞానానికి మూలం. విద్య మానవుడికి చక్షువులు వంటిది. అక్షరాలు నేర్చుకోవడం వల్ల మనిషి అభివృద్ధి చెందుతాడు. చదువు లేని మనిషి అంధుడితో సమానం. అందుకే అందరూ అక్షరాలు నేర్చుకోవాలి.", te: "అక్షరం జ్ఞానానికి మూలం. విద్య మానవుడికి చక్షువులు వంటిది. అక్షరాలు నేర్చుకోవడం వల్ల మనిషి అభివృద్ధి చెందుతాడు. చదువు లేని మనిషి అంధుడితో సమానం. అందుకే అందరూ అక్షరాలు నేర్చుకోవాలి." } },
          { question: { en: "తెలుగు భాష గురించి రాయండి", te: "తెలుగు భాష గురించి రాయండి" }, answer: { en: "తెలుగు మన మాతృభాష. ఇది మధురమైన భాష. తెలుగులో అనేక గొప్ప సాహిత్యం ఉంది.", te: "తెలుగు మన మాతృభాష. ఇది మధురమైన భాష. తెలుగులో అనేక గొప్ప సాహిత్యం ఉంది." } }
        ]
      },
      {
        id: `telugu-grammar-${grade}`,
        title: { en: "తెలుగు వ్యాకరణం", te: "తెలుగు వ్యాకరణం" },
        description: { en: "తెలుగు వ్యాకరణ నియమాలు నేర్చుకోండి", te: "తెలుగు వ్యాకరణ నియమాలు నేర్చుకోండి" },
        notes: { en: "## తెలుగు వ్యాకరణం\n\n### వాక్భాగాలు\n- నామవాచకం\n- క్రియ\n- విశేషణం\n- క్రియా విశేషణం\n\n### వాక్య నిర్మాణం\nకర్త + కర్మ + క్రియ", te: "## తెలుగు వ్యాకరణం\n\n### వాక్భాగాలు\n- నామవాచకం\n- క్రియ\n- విశేషణం\n- క్రియా విశేషణం\n\n### వాక్య నిర్మాణం\nకర్త + కర్మ + క్రియ" },
        quiz: generateTeluguQuiz(),
        practice: generateTeluguPractice()
      }
    ]
  },
  {
    id: `hindi-${grade}`,
    title: { en: "हिंदी", te: "हिंदी" },
    icon: "BookText",
    color: "game-orange",
    forceLanguage: 'hi',
    chapters: grade === 6 ? [
      {
        id: `hindi-barishh-${grade}`,
        title: { en: "बारिश", te: "बारिश" },
        description: { en: "बारिश के बारे में कविता", te: "బారిష్ గురించి కవిత" },
        notes: { en: "## बारिश\n\n### पाठ सारांश\nयह पाठ बारिश की सुंदरता और प्रकृति पर उसके प्रभाव के बारे में है।\n\n### मुख्य बिंदु\n- बारिश प्रकृति का उपहार है\n- बारिश से पेड़-पौधे हरे-भरे होते हैं\n- बारिश में खेलना बच्चों को पसंद है\n- बारिश से किसानों को खुशी मिलती है\n\n### शब्दावली\n- बारिश: वर्षा\n- बादल: मेघ\n- बूंदें: जल की छोटी बूंदें", te: "## बारिश\n\n### పాఠ సారాంశం\nఈ పాఠం వర్షం అందం మరియు ప్రకృతిపై దాని ప్రభావం గురించి.\n\n### ముఖ్య అంశాలు\n- వర్షం ప్రకృతి బహుమతి\n- వర్షం వల్ల చెట్లు పచ్చగా ఉంటాయి\n- వర్షంలో ఆడటం పిల్లలకు ఇష్టం" },
        videoUrls: ["https://www.youtube.com/embed/4Ri-G5rNcLc"],
        quiz: [
          { question: { en: "बारिश किसका उपहार है?", te: "వర్షం ఎవరి బహుమతి?" }, options: [{ en: "प्रकृति का", te: "ప్రకృతి యొక్క" }, { en: "इंसान का", te: "మానవుడి యొక్క" }, { en: "पशुओं का", te: "జంతువుల యొక్క" }, { en: "पक्षियों का", te: "పక్షుల యొక్క" }], correctIndex: 0 },
          { question: { en: "बारिश से पेड़-पौधे कैसे होते हैं?", te: "వర్షం వల్ల చెట్లు ఎలా అవుతాయి?" }, options: [{ en: "हरे-भरे", te: "పచ్చగా" }, { en: "सूखे", te: "ఎండిపోయి" }, { en: "पीले", te: "పసుపు రంగులో" }, { en: "काले", te: "నల్లగా" }], correctIndex: 0 },
          { question: { en: "बच्चों को क्या पसंद है?", te: "పిల్లలకు ఏమి ఇష్టం?" }, options: [{ en: "बारिश में खेलना", te: "వర్షంలో ఆడటం" }, { en: "पढ़ाई करना", te: "చదవడం" }, { en: "सोना", te: "నిద్రపోవడం" }, { en: "खाना", te: "తినడం" }], correctIndex: 0 },
          { question: { en: "किसानों को बारिश से क्या मिलती है?", te: "రైతులకు వర్షం వల్ల ఏమి లభిస్తుంది?" }, options: [{ en: "खुशी", te: "సంతోషం" }, { en: "दुख", te: "దుఃఖం" }, { en: "गुस्सा", te: "కోపం" }, { en: "डर", te: "భయం" }], correctIndex: 0 },
          { question: { en: "बादल का दूसरा नाम क्या है?", te: "మేఘం యొక్క మరో పేరు ఏమిటి?" }, options: [{ en: "मेघ", te: "మేఘ్" }, { en: "पानी", te: "నీరు" }, { en: "हवा", te: "గాలి" }, { en: "आग", te: "అగ్ని" }], correctIndex: 0 },
          { question: { en: "बारिश का दूसरा नाम क्या है?", te: "వర్షం యొక్క మరో పేరు ఏమిటి?" }, options: [{ en: "वर्षा", te: "వర్ష" }, { en: "गर्मी", te: "వేసవి" }, { en: "सर्दी", te: "చలి" }, { en: "बसंत", te: "వసంతం" }], correctIndex: 0 },
          { question: { en: "बूंदें किसकी होती हैं?", te: "బిందువులు దేనివి?" }, options: [{ en: "जल की", te: "నీటివి" }, { en: "आग की", te: "అగ్నివి" }, { en: "हवा की", te: "గాలివి" }, { en: "मिट्टी की", te: "మట్టివి" }], correctIndex: 0 },
          { question: { en: "बारिश कब आती है?", te: "వర్షం ఎప్పుడు వస్తుంది?" }, options: [{ en: "मानसून में", te: "వర్షాకాలంలో" }, { en: "गर्मियों में", te: "వేసవిలో" }, { en: "सर्दियों में", te: "చలిలో" }, { en: "वसंत में", te: "వసంతంలో" }], correctIndex: 0 },
          { question: { en: "पेड़-पौधों को क्या चाहिए?", te: "చెట్లకు ఏమి కావాలి?" }, options: [{ en: "पानी", te: "నీరు" }, { en: "आग", te: "అగ్ని" }, { en: "हवा ही", te: "గాలి మాత్రమే" }, { en: "कुछ नहीं", te: "ఏమీ వద్దు" }], correctIndex: 0 },
          { question: { en: "यह पाठ किस बारे में है?", te: "ఈ పాఠం దేని గురించి?" }, options: [{ en: "बारिश", te: "వర్షం" }, { en: "गर्मी", te: "వేసవి" }, { en: "सर्दी", te: "చలి" }, { en: "वसंत", te: "వసంతం" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "बारिश के बारे में पांच वाक्य लिखिए", te: "వర్షం గురించి ఐదు వాక్యాలు రాయండి" }, answer: { en: "1. बारिश प्रकृति का उपहार है। 2. बारिश से पेड़ हरे होते हैं। 3. बच्चे बारिश में खेलते हैं। 4. किसान बारिश से खुश होते हैं। 5. बारिश जीवन देती है।", te: "1. వర్షం ప్రకృతి బహుమతి. 2. వర్షం వల్ల చెట్లు పచ్చగా అవుతాయి. 3. పిల్లలు వర్షంలో ఆడతారు. 4. రైతులు వర్షంతో సంతోషిస్తారు. 5. వర్షం జీవాన్ని ఇస్తుంది." } },
          { question: { en: "बारिश का महत्व क्या है?", te: "వర్షం ప్రాముఖ్యత ఏమిటి?" }, answer: { en: "बारिश से पेड़-पौधे बढ़ते हैं, फसलें उगती हैं, पानी मिलता है।", te: "వర్షం వల్ల చెట్లు పెరుగుతాయి, పంటలు పండుతాయి, నీరు లభిస్తుంది." } },
          { question: { en: "किसान बारिश से खुश क्यों होते हैं?", te: "రైతులు వర్షంతో ఎందుకు సంతోషిస్తారు?" }, answer: { en: "बारिश से फसलें अच्छी होती हैं, खेतों में पानी मिलता है।", te: "వర్షం వల్ల పంటలు బాగా పండుతాయి, పొలాలకు నీరు లభిస్తుంది." } },
          { question: { en: "बादल कैसे बनते हैं?", te: "మేఘాలు ఎలా ఏర్పడతాయి?" }, answer: { en: "सूर्य की गर्मी से पानी भाप बनकर ऊपर जाता है और बादल बनते हैं।", te: "సూర్యుని వేడి వల్ల నీరు ఆవిరిగా మారి పైకి వెళ్ళి మేఘాలు ఏర్పడతాయి." } },
          { question: { en: "बारिश में खेलने के फायदे और नुकसान लिखिए", te: "వర్షంలో ఆడటం వల్ల లాభాలు మరియు నష్టాలు రాయండి" }, answer: { en: "फायदे: मजा आता है, ठंडक मिलती है। नुकसान: बीमार हो सकते हैं।", te: "లాభాలు: సరదా, చల్లదనం. నష్టాలు: అనారోగ్యం రావచ్చు." } },
          { question: { en: "पाठ का सारांश लिखिए", te: "పాఠం సారాంశం రాయండి" }, answer: { en: "यह पाठ बारिश की सुंदरता और उसके महत्व के बारे में है।", te: "ఈ పాఠం వర్షం అందం మరియు దాని ప్రాముఖ్యత గురించి." } },
          { question: { en: "वर्षा ऋतु के बारे में लिखिए", te: "వర్షాకాలం గురించి రాయండి" }, answer: { en: "वर्षा ऋतु जुलाई से सितंबर तक होती है। इस समय बारिश होती है।", te: "వర్షాకాలం జూలై నుండి సెప్టెంబర్ వరకు ఉంటుంది." } },
          { question: { en: "बारिश न हो तो क्या होगा?", te: "వర్షం రాకపోతే ఏమి జరుగుతుంది?" }, answer: { en: "सूखा पड़ेगा, फसलें नहीं होंगी, पानी की कमी होगी।", te: "కరువు వస్తుంది, పంటలు పండవు, నీటి కొరత ఉంటుంది." } },
          { question: { en: "पाठ से क्या सीखा?", te: "పాఠం నుండి ఏమి నేర్చుకున్నారు?" }, answer: { en: "बारिश का महत्व, प्रकृति की देखभाल करना सीखा।", te: "వర్షం ప్రాముఖ్యత, ప్రకృతిని రక్షించడం నేర్చుకున్నాను." } },
          { question: { en: "बारिश पर एक छोटा निबंध लिखिए", te: "వర్షం మీద చిన్న వ్యాసం రాయండి" }, answer: { en: "बारिश प्रकृति का उपहार है। यह पेड़-पौधों को जीवन देती है। किसान बारिश का इंतजार करते हैं। बच्चे बारिश में खेलना पसंद करते हैं। बारिश से धरती हरी-भरी हो जाती है।", te: "వర్షం ప్రకృతి బహుమతి. ఇది చెట్లకు జీవాన్ని ఇస్తుంది. రైతులు వర్షం కోసం ఎదురు చూస్తారు. పిల్లలు వర్షంలో ఆడటం ఇష్టపడతారు." } }
        ]
      },
      {
        id: `hindi-titilli-${grade}`,
        title: { en: "तितली", te: "तितली" },
        description: { en: "तितली के बारे में कविता", te: "సీతాకోకచిలుక గురించి కవిత" },
        notes: { en: "## तितली\n\n### पाठ सारांश\nयह पाठ तितली की सुंदरता और उसके जीवन के बारे में है।\n\n### मुख्य बिंदु\n- तितली रंग-बिरंगी होती है\n- तितली फूलों पर बैठती है\n- तितली उड़ती रहती है\n- तितली प्रकृति की सुंदरता है\n\n### शब्दावली\n- तितली: एक सुंदर कीट\n- रंग-बिरंगी: अनेक रंगों वाली\n- फूल: पुष्प", te: "## తితిలీ\n\n### పాఠ సారాంశం\nఈ పాఠం సీతాకోకచిలుక అందం మరియు దాని జీవితం గురించి.\n\n### ముఖ్య అంశాలు\n- సీతాకోకచిలుక రంగురంగులది\n- సీతాకోకచిలుక పువ్వులపై వాలుతుంది\n- సీతాకోకచిలుక ఎగురుతూ ఉంటుంది" },
        videoUrls: ["https://www.youtube.com/embed/Af7rfjsqBdI"],
        quiz: [
          { question: { en: "तितली कैसी होती है?", te: "సీతాకోకచిలుక ఎలా ఉంటుంది?" }, options: [{ en: "रंग-बिरंगी", te: "రంగురంగులది" }, { en: "काली", te: "నల్లగా" }, { en: "सफेद", te: "తెల్లగా" }, { en: "भूरी", te: "గోధుమ రంగులో" }], correctIndex: 0 },
          { question: { en: "तितली कहाँ बैठती है?", te: "సీతాకోకచిలుక ఎక్కడ వాలుతుంది?" }, options: [{ en: "फूलों पर", te: "పువ్వులపై" }, { en: "पत्थर पर", te: "రాళ్ళపై" }, { en: "जमीन पर", te: "నేలపై" }, { en: "पानी पर", te: "నీటిపై" }], correctIndex: 0 },
          { question: { en: "तितली क्या करती रहती है?", te: "సీతాకోకచిలుక ఏమి చేస్తూ ఉంటుంది?" }, options: [{ en: "उड़ती रहती है", te: "ఎగురుతూ ఉంటుంది" }, { en: "सोती रहती है", te: "నిద్రపోతూ ఉంటుంది" }, { en: "खाती रहती है", te: "తింటూ ఉంటుంది" }, { en: "रोती रहती है", te: "ఏడుస్తూ ఉంటుంది" }], correctIndex: 0 },
          { question: { en: "तितली प्रकृति की क्या है?", te: "సీతాకోకచిలుక ప్రకృతి యొక్క ఏమిటి?" }, options: [{ en: "सुंदरता", te: "అందం" }, { en: "कमजोरी", te: "బలహీనత" }, { en: "समस्या", te: "సమస్య" }, { en: "कुछ नहीं", te: "ఏమీ కాదు" }], correctIndex: 0 },
          { question: { en: "रंग-बिरंगी का अर्थ क्या है?", te: "రంగ్-బిరంగీ అర్థం ఏమిటి?" }, options: [{ en: "अनेक रंगों वाली", te: "అనేక రంగులు కలది" }, { en: "एक रंग वाली", te: "ఒకే రంగు కలది" }, { en: "बिना रंग की", te: "రంగు లేనిది" }, { en: "काली", te: "నల్లగా" }], correctIndex: 0 },
          { question: { en: "फूल का दूसरा नाम क्या है?", te: "పువ్వు యొక్క మరో పేరు ఏమిటి?" }, options: [{ en: "पुष्प", te: "పుష్పం" }, { en: "पत्ता", te: "ఆకు" }, { en: "तना", te: "కాండం" }, { en: "जड़", te: "వేరు" }], correctIndex: 0 },
          { question: { en: "तितली एक क्या है?", te: "సీతాకోకచిలుక ఒక ఏమిటి?" }, options: [{ en: "कीट", te: "కీటకం" }, { en: "पक्षी", te: "పక్షి" }, { en: "जानवर", te: "జంతువు" }, { en: "मछली", te: "చేప" }], correctIndex: 0 },
          { question: { en: "तितली के कितने पंख होते हैं?", te: "సీతాకోకచిలుకకు ఎన్ని రెక్కలు ఉంటాయి?" }, options: [{ en: "चार", te: "నాలుగు" }, { en: "दो", te: "రెండు" }, { en: "छह", te: "ఆరు" }, { en: "आठ", te: "ఎనిమిది" }], correctIndex: 0 },
          { question: { en: "तितली फूलों से क्या लेती है?", te: "సీతాకోకచిలుక పువ్వుల నుండి ఏమి తీసుకుంటుంది?" }, options: [{ en: "रस", te: "మకరందం" }, { en: "पानी", te: "నీరు" }, { en: "हवा", te: "గాలి" }, { en: "मिट्टी", te: "మట్టి" }], correctIndex: 0 },
          { question: { en: "यह पाठ किस बारे में है?", te: "ఈ పాఠం దేని గురించి?" }, options: [{ en: "तितली", te: "సీతాకోకచిలుక" }, { en: "चिड़िया", te: "పిట్ట" }, { en: "मछली", te: "చేప" }, { en: "हाथी", te: "ఏనుగు" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "तितली के बारे में पांच वाक्य लिखिए", te: "సీతాకోకచిలుక గురించి ఐదు వాక్యాలు రాయండి" }, answer: { en: "1. तितली रंग-बिरंगी होती है। 2. वह फूलों पर बैठती है। 3. तितली उड़ती रहती है। 4. उसके चार पंख होते हैं। 5. वह बहुत सुंदर होती है।", te: "1. సీతాకోకచిలుక రంగురంగులది. 2. అది పువ్వులపై వాలుతుంది. 3. అది ఎగురుతూ ఉంటుంది. 4. దానికి నాలుగు రెక్కలు ఉంటాయి. 5. అది చాలా అందమైనది." } },
          { question: { en: "तितली फूलों पर क्यों बैठती है?", te: "సీతాకోకచిలుక పువ్వులపై ఎందుకు వాలుతుంది?" }, answer: { en: "तितली फूलों से रस (मकरंद) लेती है।", te: "సీతాకోకచిలుక పువ్వుల నుండి మకరందం తీసుకుంటుంది." } },
          { question: { en: "तितली का जीवन चक्र बताइए", te: "సీతాకోకచిలుక జీవిత చక్రం చెప్పండి" }, answer: { en: "अंडा → इल्ली → प्यूपा → तितली", te: "గుడ్డు → లార్వా → ప్యూపా → సీతాకోకచిలుక" } },
          { question: { en: "पाठ का सारांश लिखिए", te: "పాఠం సారాంశం రాయండి" }, answer: { en: "यह पाठ तितली की सुंदरता और उसके जीवन के बारे में है।", te: "ఈ పాఠం సీతాకోకచిలుక అందం మరియు దాని జీవితం గురించి." } },
          { question: { en: "तितली क्यों सुंदर होती है?", te: "సీతాకోకచిలుక ఎందుకు అందంగా ఉంటుంది?" }, answer: { en: "तितली के पंखों पर अनेक रंग होते हैं जो उसे सुंदर बनाते हैं।", te: "సీతాకోకచిలుక రెక్కలపై అనేక రంగులు ఉంటాయి." } },
          { question: { en: "तितली और मधुमक्खी में क्या अंतर है?", te: "సీతాకోకచిలుక మరియు తేనెటీగ మధ్య తేడా ఏమిటి?" }, answer: { en: "तितली बड़ी और रंगीन होती है, मधुमक्खी छोटी और शहद बनाती है।", te: "సీతాకోకచిలుక పెద్దది మరియు రంగురంగులది, తేనెటీగ చిన్నది మరియు తేనె తయారు చేస్తుంది." } },
          { question: { en: "पाठ से क्या सीखा?", te: "పాఠం నుండి ఏమి నేర్చుకున్నారు?" }, answer: { en: "प्रकृति की सुंदरता और छोटे जीवों का महत्व सीखा।", te: "ప్రకృతి అందం మరియు చిన్న జీవుల ప్రాముఖ్యత నేర్చుకున్నాను." } },
          { question: { en: "तितली के पंखों के बारे में लिखिए", te: "సీతాకోకచిలుక రెక్కల గురించి రాయండి" }, answer: { en: "तितली के चार पंख होते हैं। पंख रंग-बिरंगे और नाजुक होते हैं।", te: "సీతాకోకచిలుకకు నాలుగు రెక్కలు ఉంటాయి. రెక్కలు రంగురంగులు మరియు సున్నితంగా ఉంటాయి." } },
          { question: { en: "बगीचे में तितलियाँ क्यों आती हैं?", te: "తోటలో సీతాకోకచిలుకలు ఎందుకు వస్తాయి?" }, answer: { en: "बगीचे में फूल होते हैं जिनसे तितलियाँ रस लेती हैं।", te: "తోటలో పువ్వులు ఉంటాయి వాటి నుండి సీతాకోకచిలుకలు మకరందం తీసుకుంటాయి." } },
          { question: { en: "तितली पर एक छोटा निबंध लिखिए", te: "సీతాకోకచిలుక మీద చిన్న వ్యాసం రాయండి" }, answer: { en: "तितली एक सुंदर कीट है। इसके पंख रंग-बिरंगे होते हैं। यह फूलों पर बैठकर रस पीती है। तितली प्रकृति की सुंदरता है। हमें तितलियों को नुकसान नहीं पहुँचाना चाहिए।", te: "సీతాకోకచిలుక అందమైన కీటకం. దాని రెక్కలు రంగురంగులుగా ఉంటాయి. ఇది పువ్వులపై వాలి మకరందం తాగుతుంది. సీతాకోకచిలుక ప్రకృతి అందం." } }
        ]
      },
      {
        id: `hindi-voont-chala-${grade}`,
        title: { en: "ऊंट चला", te: "ऊंट चला" },
        description: { en: "ऊंट के बारे में कहानी", te: "ఒంటె గురించి కథ" },
        notes: { en: "## ऊंट चला\n\n### पाठ सारांश\nयह पाठ ऊंट के बारे में है जो रेगिस्तान का जहाज कहलाता है।\n\n### मुख्य बिंदु\n- ऊंट रेगिस्तान में रहता है\n- ऊंट बिना पानी के दिनों तक रह सकता है\n- ऊंट का कूबड़ होता है\n- ऊंट भारी बोझ ढो सकता है\n\n### शब्दावली\n- ऊंट: रेगिस्तान का जानवर\n- रेगिस्तान: बालू का मैदान\n- कूबड़: ऊंट की पीठ पर उभार", te: "## ఊంట్ చలా\n\n### పాఠ సారాంశం\nఈ పాఠం ఎడారి ఓడ అని పిలవబడే ఒంటె గురించి.\n\n### ముఖ్య అంశాలు\n- ఒంటె ఎడారిలో నివసిస్తుంది\n- ఒంటె నీరు లేకుండా రోజుల తరబడి ఉండగలదు\n- ఒంటెకు మూపు ఉంటుంది" },
        videoUrls: ["https://www.youtube.com/embed/jdvUtWacON4"],
        quiz: [
          { question: { en: "ऊंट कहाँ रहता है?", te: "ఒంటె ఎక్కడ నివసిస్తుంది?" }, options: [{ en: "रेगिस्तान में", te: "ఎడారిలో" }, { en: "जंगल में", te: "అడవిలో" }, { en: "पानी में", te: "నీటిలో" }, { en: "पहाड़ पर", te: "కొండపై" }], correctIndex: 0 },
          { question: { en: "ऊंट को क्या कहते हैं?", te: "ఒంటెను ఏమని పిలుస్తారు?" }, options: [{ en: "रेगिस्तान का जहाज", te: "ఎడారి ఓడ" }, { en: "जंगल का राजा", te: "అడవి రాజు" }, { en: "पानी का जानवर", te: "నీటి జంతువు" }, { en: "आकाश का पक्षी", te: "ఆకాశ పక్షి" }], correctIndex: 0 },
          { question: { en: "ऊंट की पीठ पर क्या होता है?", te: "ఒంటె వీపుపై ఏమి ఉంటుంది?" }, options: [{ en: "कूबड़", te: "మూపు" }, { en: "पंख", te: "రెక్కలు" }, { en: "कुछ नहीं", te: "ఏమీ లేదు" }, { en: "फूल", te: "పువ్వులు" }], correctIndex: 0 },
          { question: { en: "ऊंट बिना पानी के कितने दिन रह सकता है?", te: "ఒంటె నీరు లేకుండా ఎన్ని రోజులు ఉండగలదు?" }, options: [{ en: "कई दिन", te: "చాలా రోజులు" }, { en: "एक घंटा", te: "ఒక గంట" }, { en: "एक मिनट", te: "ఒక నిమిషం" }, { en: "रह नहीं सकता", te: "ఉండలేదు" }], correctIndex: 0 },
          { question: { en: "रेगिस्तान क्या है?", te: "ఎడారి అంటే ఏమిటి?" }, options: [{ en: "बालू का मैदान", te: "ఇసుక మైదానం" }, { en: "पानी का तालाब", te: "నీటి చెరువు" }, { en: "हरा जंगल", te: "పచ్చని అడవి" }, { en: "बर्फ का पहाड़", te: "మంచు కొండ" }], correctIndex: 0 },
          { question: { en: "ऊंट क्या ढो सकता है?", te: "ఒంటె ఏమి మోయగలదు?" }, options: [{ en: "भारी बोझ", te: "భారీ బరువు" }, { en: "कुछ नहीं", te: "ఏమీ కాదు" }, { en: "केवल पानी", te: "నీరు మాత్రమే" }, { en: "केवल घास", te: "గడ్డి మాత్రమే" }], correctIndex: 0 },
          { question: { en: "ऊंट के पैर कैसे होते हैं?", te: "ఒంటె కాళ్ళు ఎలా ఉంటాయి?" }, options: [{ en: "चौड़े और मजबूत", te: "వెడల్పుగా మరియు బలంగా" }, { en: "छोटे और कमजोर", te: "చిన్నగా మరియు బలహీనంగా" }, { en: "गोल", te: "గుండ్రంగా" }, { en: "नुकीले", te: "మొనగా" }], correctIndex: 0 },
          { question: { en: "ऊंट क्या खाता है?", te: "ఒంటె ఏమి తింటుంది?" }, options: [{ en: "कंटीली झाड़ियाँ", te: "ముళ్ళ పొదలు" }, { en: "मांस", te: "మాంసం" }, { en: "मछली", te: "చేపలు" }, { en: "मिठाई", te: "మిఠాయిలు" }], correctIndex: 0 },
          { question: { en: "कूबड़ में क्या होता है?", te: "మూపులో ఏమి ఉంటుంది?" }, options: [{ en: "चर्बी", te: "కొవ్వు" }, { en: "पानी", te: "నీరు" }, { en: "हवा", te: "గాలి" }, { en: "खून", te: "రక్తం" }], correctIndex: 0 },
          { question: { en: "यह पाठ किस बारे में है?", te: "ఈ పాఠం దేని గురించి?" }, options: [{ en: "ऊंट", te: "ఒంటె" }, { en: "हाथी", te: "ఏనుగు" }, { en: "शेर", te: "సింహం" }, { en: "घोड़ा", te: "గుర్రం" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "ऊंट के बारे में पांच वाक्य लिखिए", te: "ఒంటె గురించి ఐదు వాక్యాలు రాయండి" }, answer: { en: "1. ऊंट रेगिस्तान में रहता है। 2. इसे रेगिस्तान का जहाज कहते हैं। 3. इसके पीठ पर कूबड़ होता है। 4. यह भारी बोझ ढो सकता है। 5. यह बिना पानी के रह सकता है।", te: "1. ఒంటె ఎడారిలో నివసిస్తుంది. 2. దీన్ని ఎడారి ఓడ అంటారు. 3. దాని వీపుపై మూపు ఉంటుంది. 4. ఇది భారీ బరువు మోయగలదు. 5. ఇది నీరు లేకుండా ఉండగలదు." } },
          { question: { en: "ऊंट को रेगिस्तान का जहाज क्यों कहते हैं?", te: "ఒంటెను ఎడారి ఓడ అని ఎందుకు అంటారు?" }, answer: { en: "ऊंट रेगिस्तान में आसानी से चल सकता है और सामान ढो सकता है।", te: "ఒంటె ఎడారిలో సులభంగా నడవగలదు మరియు సామాన్లు మోయగలదు." } },
          { question: { en: "कूबड़ का क्या उपयोग है?", te: "మూపు ఉపయోగం ఏమిటి?" }, answer: { en: "कूबड़ में चर्बी जमा होती है जो भोजन के रूप में काम आती है।", te: "మూపులో కొవ్వు నిల్వ ఉంటుంది అది ఆహారంగా పనికి వస్తుంది." } },
          { question: { en: "ऊंट बिना पानी के कैसे रहता है?", te: "ఒంటె నీరు లేకుండా ఎలా ఉంటుంది?" }, answer: { en: "ऊंट अपने शरीर में पानी को बचाकर रखता है और कूबड़ की चर्बी से ऊर्जा लेता है।", te: "ఒంటె తన శరీరంలో నీటిని ఆదా చేస్తుంది మరియు మూపు కొవ్వు నుండి శక్తి తీసుకుంటుంది." } },
          { question: { en: "रेगिस्तान के बारे में लिखिए", te: "ఎడారి గురించి రాయండి" }, answer: { en: "रेगिस्तान बालू का मैदान है। यहाँ पानी कम होता है। गर्मी बहुत होती है।", te: "ఎడారి ఇసుక మైదానం. ఇక్కడ నీరు తక్కువ. వేడి ఎక్కువ." } },
          { question: { en: "पाठ का सारांश लिखिए", te: "పాఠం సారాంశం రాయండి" }, answer: { en: "यह पाठ ऊंट के बारे में है जो रेगिस्तान में रहता है और बोझ ढोता है।", te: "ఈ పాఠం ఒంటె గురించి, ఇది ఎడారిలో నివసిస్తుంది మరియు బరువు మోస్తుంది." } },
          { question: { en: "ऊंट के पैर चौड़े क्यों होते हैं?", te: "ఒంటె కాళ్ళు వెడల్పుగా ఎందుకు ఉంటాయి?" }, answer: { en: "बालू में धँसने से बचने के लिए ऊंट के पैर चौड़े होते हैं।", te: "ఇసుకలో కూరుకుపోకుండా ఉండటానికి ఒంటె కాళ్ళు వెడల్పుగా ఉంటాయి." } },
          { question: { en: "ऊंट कैसे उपयोगी है?", te: "ఒంటె ఎలా ఉపయోగకరంగా ఉంటుంది?" }, answer: { en: "ऊंट बोझ ढोने, सवारी करने और रेगिस्तान में यात्रा करने के काम आता है।", te: "ఒంటె బరువు మోయడానికి, ప్రయాణానికి మరియు ఎడారిలో యాత్రకు ఉపయోగపడుతుంది." } },
          { question: { en: "पाठ से क्या सीखा?", te: "పాఠం నుండి ఏమి నేర్చుకున్నారు?" }, answer: { en: "ऊंट की विशेषताएँ और उसका महत्व सीखा।", te: "ఒంటె ప్రత్యేకతలు మరియు దాని ప్రాముఖ్యత నేర్చుకున్నాను." } },
          { question: { en: "ऊंट पर एक छोटा निबंध लिखिए", te: "ఒంటె మీద చిన్న వ్యాసం రాయండి" }, answer: { en: "ऊंट रेगिस्तान का जानवर है। इसे रेगिस्तान का जहाज कहते हैं। इसके पीठ पर कूबड़ होता है। यह बिना पानी के रह सकता है। ऊंट बहुत उपयोगी जानवर है।", te: "ఒంటె ఎడారి జంతువు. దీన్ని ఎడారి ఓడ అంటారు. దాని వీపుపై మూపు ఉంటుంది. ఇది నీరు లేకుండా ఉండగలదు. ఒంటె చాలా ఉపయోగకరమైన జంతువు." } }
        ]
      },
      {
        id: `hindi-mera-desh-${grade}`,
        title: { en: "मेरा देश महान है", te: "मेरा देश महान है" },
        description: { en: "भारत देश के बारे में", te: "భారతదేశం గురించి" },
        notes: { en: "## मेरा देश महान है\n\n### पाठ सारांश\nयह पाठ भारत देश की महानता और विशेषताओं के बारे में है।\n\n### मुख्य बिंदु\n- भारत एक महान देश है\n- भारत में अनेक भाषाएँ बोली जाती हैं\n- भारत में विविधता में एकता है\n- भारत की संस्कृति अद्भुत है\n\n### शब्दावली\n- महान: बड़ा, श्रेष्ठ\n- विविधता: अनेक प्रकार\n- एकता: मिलकर रहना", te: "## మేరా దేశ్ మహాన్ హై\n\n### పాఠ సారాంశం\nఈ పాఠం భారతదేశ గొప్పతనం మరియు ప్రత్యేకతల గురించి.\n\n### ముఖ్య అంశాలు\n- భారతదేశం గొప్ప దేశం\n- భారతదేశంలో అనేక భాషలు మాట్లాడతారు\n- భారతదేశంలో వైవిధ్యంలో ఏకత్వం ఉంది" },
        videoUrls: ["https://www.youtube.com/embed/mpopL3b9TfU"],
        quiz: [
          { question: { en: "भारत कैसा देश है?", te: "భారతదేశం ఎలాంటి దేశం?" }, options: [{ en: "महान", te: "గొప్ప" }, { en: "छोटा", te: "చిన్న" }, { en: "कमजोर", te: "బలహీన" }, { en: "साधारण", te: "సాధారణ" }], correctIndex: 0 },
          { question: { en: "भारत में कितनी भाषाएँ बोली जाती हैं?", te: "భారతదేశంలో ఎన్ని భాషలు మాట్లాడతారు?" }, options: [{ en: "अनेक", te: "అనేకం" }, { en: "एक", te: "ఒకటి" }, { en: "दो", te: "రెండు" }, { en: "कोई नहीं", te: "ఏదీ లేదు" }], correctIndex: 0 },
          { question: { en: "भारत में क्या है?", te: "భారతదేశంలో ఏమి ఉంది?" }, options: [{ en: "विविधता में एकता", te: "వైవిధ్యంలో ఏకత్వం" }, { en: "झगड़े", te: "గొడవలు" }, { en: "कुछ नहीं", te: "ఏమీ లేదు" }, { en: "अशांति", te: "అశాంతి" }], correctIndex: 0 },
          { question: { en: "भारत की संस्कृति कैसी है?", te: "భారత సంస్కృతి ఎలాంటిది?" }, options: [{ en: "अद्भुत", te: "అద్భుతం" }, { en: "साधारण", te: "సాధారణ" }, { en: "बुरी", te: "చెడ్డది" }, { en: "कमजोर", te: "బలహీన" }], correctIndex: 0 },
          { question: { en: "महान का अर्थ क्या है?", te: "మహాన్ అర్థం ఏమిటి?" }, options: [{ en: "बड़ा, श्रेष्ठ", te: "పెద్ద, గొప్ప" }, { en: "छोटा", te: "చిన్న" }, { en: "कमजोर", te: "బలహీన" }, { en: "बुरा", te: "చెడ్డ" }], correctIndex: 0 },
          { question: { en: "एकता का अर्थ क्या है?", te: "ఏకతా అర్థం ఏమిటి?" }, options: [{ en: "मिलकर रहना", te: "కలిసి ఉండటం" }, { en: "लड़ना", te: "పోట్లాడటం" }, { en: "अलग रहना", te: "విడిగా ఉండటం" }, { en: "भागना", te: "పారిపోవడం" }], correctIndex: 0 },
          { question: { en: "विविधता का अर्थ क्या है?", te: "వైవిధ్యం అర్థం ఏమిటి?" }, options: [{ en: "अनेक प्रकार", te: "అనేక రకాలు" }, { en: "एक प्रकार", te: "ఒక రకం" }, { en: "कोई प्रकार नहीं", te: "ఏ రకం లేదు" }, { en: "बुरा प्रकार", te: "చెడ్డ రకం" }], correctIndex: 0 },
          { question: { en: "भारत की राजधानी क्या है?", te: "భారతదేశ రాజధాని ఏమిటి?" }, options: [{ en: "नई दिल्ली", te: "న్యూ ఢిల్లీ" }, { en: "मुंबई", te: "ముంబై" }, { en: "कोलकाता", te: "కోలకతా" }, { en: "चेन्नई", te: "చెన్నై" }], correctIndex: 0 },
          { question: { en: "भारत का राष्ट्रीय पक्षी क्या है?", te: "భారత జాతీయ పక్షి ఏమిటి?" }, options: [{ en: "मोर", te: "నెమలి" }, { en: "कौआ", te: "కాకి" }, { en: "तोता", te: "చిలుక" }, { en: "गौरैया", te: "పిచ్చుక" }], correctIndex: 0 },
          { question: { en: "यह पाठ किस बारे में है?", te: "ఈ పాఠం దేని గురించి?" }, options: [{ en: "भारत देश", te: "భారతదేశం" }, { en: "अमेरिका", te: "అమెరికా" }, { en: "चीन", te: "చైనా" }, { en: "जापान", te: "జపాన్" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "भारत के बारे में पांच वाक्य लिखिए", te: "భారతదేశం గురించి ఐదు వాక్యాలు రాయండి" }, answer: { en: "1. भारत एक महान देश है। 2. यहाँ अनेक भाषाएँ बोली जाती हैं। 3. भारत में विविधता में एकता है। 4. भारत की संस्कृति अद्भुत है। 5. भारत मेरा देश है।", te: "1. భారతదేశం గొప్ప దేశం. 2. ఇక్కడ అనేక భాషలు మాట్లాడతారు. 3. భారతదేశంలో వైవిధ్యంలో ఏకత్వం ఉంది. 4. భారత సంస్కృతి అద్భుతం. 5. భారతదేశం నా దేశం." } },
          { question: { en: "विविधता में एकता का अर्थ क्या है?", te: "వైవిధ్యంలో ఏకత్వం అర్థం ఏమిటి?" }, answer: { en: "अलग-अलग धर्म, भाषा, संस्कृति होने पर भी मिलकर रहना।", te: "వేర్వేరు మతాలు, భాషలు, సంస్కృతులు ఉన్నా కలిసి ఉండటం." } },
          { question: { en: "भारत के राष्ट्रीय प्रतीक लिखिए", te: "భారత జాతీయ చిహ్నాలు రాయండి" }, answer: { en: "राष्ट्रीय पक्षी: मोर, राष्ट्रीय पशु: बाघ, राष्ट्रीय फूल: कमल, राष्ट्रगान: जन गण मन", te: "జాతీయ పక్షి: నెమలి, జాతీయ జంతువు: పులి, జాతీయ పువ్వు: కమలం, జాతీయ గీతం: జన గణ మన" } },
          { question: { en: "भारत महान क्यों है?", te: "భారతదేశం ఎందుకు గొప్పది?" }, answer: { en: "भारत में विविधता में एकता है, समृद्ध संस्कृति है, महान इतिहास है।", te: "భారతదేశంలో వైవిధ్యంలో ఏకత్వం ఉంది, సంపన్న సంస్కృతి ఉంది, గొప్ప చరిత్ర ఉంది." } },
          { question: { en: "पाठ का सारांश लिखिए", te: "పాఠం సారాంశం రాయండి" }, answer: { en: "यह पाठ भारत की महानता, विविधता और एकता के बारे में है।", te: "ఈ పాఠం భారతదేశ గొప్పతనం, వైవిధ్యం మరియు ఏకత్వం గురించి." } },
          { question: { en: "भारत में कौन-कौन सी भाषाएँ बोली जाती हैं?", te: "భారతదేశంలో ఏ భాషలు మాట్లాడతారు?" }, answer: { en: "हिंदी, तेलुगु, तमिल, बंगाली, मराठी आदि अनेक भाषाएँ बोली जाती हैं।", te: "హిందీ, తెలుగు, తమిళం, బెంగాలీ, మరాఠీ మొదలైన అనేక భాషలు మాట్లాడతారు." } },
          { question: { en: "भारतीय संस्कृति के बारे में लिखिए", te: "భారతీయ సంస్కృతి గురించి రాయండి" }, answer: { en: "भारतीय संस्कृति बहुत पुरानी और समृद्ध है। यहाँ अनेक त्योहार मनाए जाते हैं।", te: "భారతీయ సంస్కృతి చాలా పురాతనమైనది మరియు సంపన్నమైనది. ఇక్కడ అనేక పండుగలు జరుపుకుంటారు." } },
          { question: { en: "पाठ से क्या सीखा?", te: "పాఠం నుండి ఏమి నేర్చుకున్నారు?" }, answer: { en: "भारत की महानता, एकता और विविधता के बारे में सीखा।", te: "భారతదేశ గొప్పతనం, ఏకత్వం మరియు వైవిధ్యం గురించి నేర్చుకున్నాను." } },
          { question: { en: "भारत के त्योहारों के नाम लिखिए", te: "భారత పండుగల పేర్లు రాయండి" }, answer: { en: "दीपावली, होली, ईद, क्रिसमस, पोंगल, ओणम, दुर्गा पूजा", te: "దీపావళి, హోలీ, ఈద్, క్రిస్మస్, పొంగల్, ఓనం, దుర్గా పూజ" } },
          { question: { en: "भारत पर एक छोटा निबंध लिखिए", te: "భారతదేశం మీద చిన్న వ్యాసం రాయండి" }, answer: { en: "भारत एक महान देश है। यह हमारी मातृभूमि है। यहाँ अनेक भाषाएँ बोली जाती हैं। भारत में विविधता में एकता है। भारत की संस्कृति अद्भुत है। मुझे अपने देश पर गर्व है।", te: "భారతదేశం గొప్ప దేశం. ఇది మన మాతృభూమి. ఇక్కడ అనేక భాషలు మాట్లాడతారు. భారతదేశంలో వైవిధ్యంలో ఏకత్వం ఉంది. భారత సంస్కృతి అద్భుతం. నాకు నా దేశం మీద గర్వం." } }
        ]
      }
    ] : [
      {
        id: `hindi-gnan-hum-ko-dijiye-${grade}`,
        title: { en: "ज्ञान हम को दीजिये", te: "ज्ञान हम को दीजिये" },
        description: { en: "ज्ञान और शिक्षा के बारे में प्रार्थना", te: "జ్ఞానం మరియు విద్య గురించి ప్రార్థన" },
        notes: { en: "## ज्ञान हम को दीजिये\n\n### पाठ सारांश\nयह एक प्रार्थना है जिसमें ईश्वर से ज्ञान और सद्बुद्धि माँगी गई है।\n\n### मुख्य बिंदु\n- ज्ञान जीवन की रोशनी है\n- सद्बुद्धि से सही निर्णय लेते हैं\n- शिक्षा मनुष्य को महान बनाती है\n- विनम्रता से ज्ञान प्राप्त होता है\n\n### शब्दावली\n- ज्ञान: जानकारी, विद्या\n- सद्बुद्धि: अच्छी बुद्धि\n- विनम्रता: विनयशीलता\n- प्रार्थना: भगवान से निवेदन", te: "## జ్ఞాన్ హమ్ కో దీజియే\n\n### పాఠ సారాంశం\nఇది భగవంతుని నుండి జ్ఞానం మరియు సద్బుద్ధి కోరే ప్రార్థన.\n\n### ముఖ్య అంశాలు\n- జ్ఞానం జీవితానికి వెలుగు\n- సద్బుద్ధితో సరైన నిర్ణయాలు తీసుకుంటాం\n- విద్య మనిషిని గొప్పవాడిగా చేస్తుంది\n- వినయంతో జ్ఞానం లభిస్తుంది" },
        videoUrls: ["https://www.youtube.com/embed/FbhTT1oXt8A"],
        quiz: [
          { question: { en: "इस पाठ में किससे प्रार्थना की गई है?", te: "ఈ పాఠంలో ఎవరిని ప్రార్థించారు?" }, options: [{ en: "ईश्वर से", te: "భగవంతుని" }, { en: "मित्र से", te: "స్నేహితుడిని" }, { en: "शिक्षक से", te: "ఉపాధ్యాయుడిని" }, { en: "माता से", te: "తల్లిని" }], correctIndex: 0 },
          { question: { en: "ज्ञान क्या है?", te: "జ్ఞానం ఏమిటి?" }, options: [{ en: "जीवन की रोशनी", te: "జీవితానికి వెలుగు" }, { en: "अंधेरा", te: "చీకటి" }, { en: "पानी", te: "నీరు" }, { en: "हवा", te: "గాలి" }], correctIndex: 0 },
          { question: { en: "सद्बुद्धि का अर्थ क्या है?", te: "సద్బుద్ధి అర్థం ఏమిటి?" }, options: [{ en: "अच्छी बुद्धि", te: "మంచి బుద్ధి" }, { en: "बुरी बुद्धि", te: "చెడు బుద్ధి" }, { en: "कोई बुद्धि नहीं", te: "బుద్ధి లేదు" }, { en: "पागलपन", te: "పిచ్చితనం" }], correctIndex: 0 },
          { question: { en: "ज्ञान से क्या होता है?", te: "జ్ఞానం వల్ల ఏమి జరుగుతుంది?" }, options: [{ en: "सही निर्णय लेते हैं", te: "సరైన నిర్ణయాలు తీసుకుంటాం" }, { en: "गलत काम करते हैं", te: "తప్పు పని చేస్తాం" }, { en: "सोते रहते हैं", te: "నిద్రపోతాం" }, { en: "लड़ते हैं", te: "పోట్లాడతాం" }], correctIndex: 0 },
          { question: { en: "विनम्रता का अर्थ क्या है?", te: "వినయం అర్థం ఏమిటి?" }, options: [{ en: "विनयशीलता", te: "వినయశీలత" }, { en: "घमंड", te: "గర్వం" }, { en: "गुस्सा", te: "కోపం" }, { en: "डर", te: "భయం" }], correctIndex: 0 },
          { question: { en: "शिक्षा मनुष्य को क्या बनाती है?", te: "విద్య మనిషిని ఏమి చేస్తుంది?" }, options: [{ en: "महान", te: "గొప్పవాడిగా" }, { en: "कमजोर", te: "బలహీనంగా" }, { en: "बुरा", te: "చెడ్డవాడిగా" }, { en: "आलसी", te: "సోమరిగా" }], correctIndex: 0 },
          { question: { en: "प्रार्थना किसे कहते हैं?", te: "ప్రార్థన అంటే ఏమిటి?" }, options: [{ en: "भगवान से निवेदन", te: "భగవంతునికి విన్నపం" }, { en: "खेलना", te: "ఆడటం" }, { en: "सोना", te: "నిద్రపోవడం" }, { en: "खाना", te: "తినడం" }], correctIndex: 0 },
          { question: { en: "ज्ञान कैसे प्राप्त होता है?", te: "జ్ఞానం ఎలా లభిస్తుంది?" }, options: [{ en: "विनम्रता से", te: "వినయంతో" }, { en: "घमंड से", te: "గర్వంతో" }, { en: "गुस्से से", te: "కోపంతో" }, { en: "नींद से", te: "నిద్రతో" }], correctIndex: 0 },
          { question: { en: "यह पाठ किस कक्षा के लिए है?", te: "ఈ పాఠం ఏ తరగతికి?" }, options: [{ en: "7वीं कक्षा", te: "7వ తరగతి" }, { en: "6वीं कक्षा", te: "6వ తరగతి" }, { en: "10वीं कक्षा", te: "10వ తరగతి" }, { en: "1वीं कक्षा", te: "1వ తరగతి" }], correctIndex: 0 },
          { question: { en: "इस पाठ में क्या माँगा गया है?", te: "ఈ పాఠంలో ఏమి కోరారు?" }, options: [{ en: "ज्ञान और सद्बुद्धि", te: "జ్ఞానం మరియు సద్బుద్ధి" }, { en: "धन", te: "ధనం" }, { en: "खेल", te: "ఆటలు" }, { en: "मिठाई", te: "మిఠాయిలు" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "ज्ञान हम को दीजिये पाठ का सारांश लिखिए", te: "జ్ఞాన్ హమ్ కో దీజియే పాఠం సారాంశం రాయండి" }, answer: { en: "यह एक प्रार्थना है जिसमें ईश्वर से ज्ञान और सद्बुद्धि माँगी गई है।", te: "ఇది భగవంతుని నుండి జ్ఞానం మరియు సద్బుద్ధి కోరే ప్రార్థన." } },
          { question: { en: "ज्ञान क्यों जरूरी है?", te: "జ్ఞానం ఎందుకు అవసరం?" }, answer: { en: "ज्ञान जीवन की रोशनी है। इससे सही निर्णय लेने में मदद मिलती है।", te: "జ్ఞానం జీవితానికి వెలుగు. ఇది సరైన నిర్ణయాలు తీసుకోవడంలో సహాయపడుతుంది." } },
          { question: { en: "सद्बुद्धि के बारे में लिखिए", te: "సద్బుద్ధి గురించి రాయండి" }, answer: { en: "सद्बुद्धि का अर्थ है अच्छी बुद्धि। इससे सही और गलत की पहचान होती है।", te: "సద్బుద్ధి అంటే మంచి బుద్ధి. దీని వల్ల సరైనది మరియు తప్పు గుర్తించగలం." } },
          { question: { en: "विनम्रता क्यों जरूरी है?", te: "వినయం ఎందుకు అవసరం?" }, answer: { en: "विनम्रता से ज्ञान प्राप्त होता है। घमंडी व्यक्ति कुछ नहीं सीख पाता।", te: "వినయంతో జ్ఞానం లభిస్తుంది. గర్విష్ఠి ఏమీ నేర్చుకోలేడు." } },
          { question: { en: "पाठ की मुख्य शिक्षा क्या है?", te: "పాఠం యొక్క ముఖ్య సందేశం ఏమిటి?" }, answer: { en: "ज्ञान और सद्बुद्धि जीवन में सबसे महत्वपूर्ण हैं।", te: "జ్ఞానం మరియు సద్బుద్ధి జీవితంలో అత్యంత ముఖ్యమైనవి." } },
          { question: { en: "प्रार्थना का महत्व लिखिए", te: "ప్రార్థన ప్రాముఖ్యత రాయండి" }, answer: { en: "प्रार्थना से मन शांत होता है और ईश्वर की कृपा मिलती है।", te: "ప్రార్థన వల్ల మనసు శాంతిస్తుంది మరియు భగవంతుని కృప లభిస్తుంది." } },
          { question: { en: "ज्ञान के बारे में पाँच वाक्य लिखिए", te: "జ్ఞానం గురించి ఐదు వాక్యాలు రాయండి" }, answer: { en: "1. ज्ञान जीवन की रोशनी है। 2. ज्ञान से सही निर्णय लेते हैं। 3. ज्ञान मनुष्य को महान बनाता है। 4. विनम्रता से ज्ञान मिलता है। 5. ज्ञान सबसे बड़ा धन है।", te: "1. జ్ఞానం జీవితానికి వెలుగు. 2. జ్ఞానంతో సరైన నిర్ణయాలు తీసుకుంటాం. 3. జ్ఞానం మనిషిని గొప్పవాడిగా చేస్తుంది. 4. వినయంతో జ్ఞానం లభిస్తుంది. 5. జ్ఞానం గొప్ప సంపద." } },
          { question: { en: "पाठ के मुख्य शब्द लिखिए", te: "పాఠంలోని ముఖ్య పదాలు రాయండి" }, answer: { en: "ज्ञान, सद्बुद्धि, विनम्रता, प्रार्थना, शिक्षा", te: "జ్ఞానం, సద్బుద్ధి, వినయం, ప్రార్థన, విద్య" } },
          { question: { en: "ईश्वर से हमें क्या माँगना चाहिए?", te: "భగవంతుని నుండి మనం ఏమి కోరాలి?" }, answer: { en: "ईश्वर से ज्ञान, सद्बुद्धि और सही राह दिखाने की प्रार्थना करनी चाहिए।", te: "భగవంతుని నుండి జ్ఞానం, సద్బుద్ధి మరియు సరైన మార్గం చూపించమని ప్రార్థించాలి." } },
          { question: { en: "ज्ञान पर एक छोटा निबंध लिखिए", te: "జ్ఞానం మీద చిన్న వ్యాసం రాయండి" }, answer: { en: "ज्ञान मनुष्य का सबसे बड़ा धन है। ज्ञान से हम सही-गलत की पहचान करते हैं। ज्ञान जीवन में रोशनी की तरह है। विनम्रता से ज्ञान प्राप्त होता है। ज्ञानी व्यक्ति सबका सम्मान करता है।", te: "జ్ఞానం మనిషికి గొప్ప సంపద. జ్ఞానంతో మంచి చెడు గుర్తిస్తాం. జ్ఞానం జీవితంలో వెలుగు లాంటిది. వినయంతో జ్ఞానం లభిస్తుంది. జ్ఞాని అందరినీ గౌరవిస్తాడు." } }
        ]
      },
      {
        id: `hindi-grammar-${grade}`,
        title: { en: "हिंदी व्याकरण", te: "हिंदी व्याकरण" },
        description: { en: "हिंदी व्याकरण सीखें", te: "హిందీ వ్యాకరణం నేర్చుకోండి" },
        notes: { en: "## हिंदी व्याकरण\n\n### लिंग\n- पुल्लिंग: लड़का, घर\n- स्त्रीलिंग: लड़की, किताब\n\n### वचन\n- एकवचन: लड़का\n- बहुवचन: लड़के", te: "## హిందీ వ్యాకరణం\n\n### లింగ్\n- పుల్లింగ్: లడ్కా, ఘర్\n- స్త్రీలింగ్: లడ్కీ, కితాబ్\n\n### వచన్\n- ఏక్‌వచన్: లడ్కా\n- బహువచన్: లడ్కే" },
        quiz: generateHindiQuiz(),
        practice: generateHindiPractice()
      }
    ]
  },
  {
    id: `english-${grade}`,
    title: { en: "English", te: "ఆంగ్లం" },
    icon: "BookOpen",
    color: "game-purple",
    chapters: grade === 6 ? [
      {
        id: `english-clever-tenali-${grade}`,
        title: { en: "Clever Tenali Ramakrishna", te: "తెలివైన తెనాలి రామకృష్ణ" },
        description: { en: "A story about the wit and wisdom of Tenali Ramakrishna", te: "తెనాలి రామకృష్ణ తెలివి మరియు జ్ఞానం గురించి కథ" },
        notes: { en: "## Clever Tenali Ramakrishna\n\n### Story Summary\nTenali Ramakrishna was a brilliant poet and jester in the court of King Krishnadevaraya of Vijayanagara. He was known for his sharp wit, clever solutions, and humorous wisdom.\n\n### Key Points\n- Tenali Ramakrishna was a poet in King Krishnadevaraya's court\n- He solved problems with intelligence and humor\n- His stories teach us to think creatively\n- Wisdom is more powerful than strength\n\n### Vocabulary\n- Clever: Intelligent, quick-thinking\n- Wit: Ability to think quickly and make smart decisions\n- Jester: A person who entertains with jokes\n- Court: The king's assembly", te: "## తెలివైన తెనాలి రామకృష్ణ\n\n### కథ సారాంశం\nతెనాలి రామకృష్ణ విజయనగర రాజు కృష్ణదేవరాయల ఆస్థానంలో అద్భుతమైన కవి మరియు విదూషకుడు.\n\n### ముఖ్య అంశాలు\n- తెనాలి రామకృష్ణ రాజు ఆస్థానంలో కవి\n- ఆయన సమస్యలను తెలివితో పరిష్కరించారు\n- ఆయన కథలు సృజనాత్మకంగా ఆలోచించమని నేర్పిస్తాయి" },
        videoUrls: ["https://www.youtube.com/embed/_f8TZY_-tZE"],
        quiz: [
          { question: { en: "Who was Tenali Ramakrishna?", te: "తెనాలి రామకృష్ణ ఎవరు?" }, options: [{ en: "A poet in Krishnadevaraya's court", te: "కృష్ణదేవరాయల ఆస్థానంలో కవి" }, { en: "A king", te: "రాజు" }, { en: "A soldier", te: "సైనికుడు" }, { en: "A merchant", te: "వ్యాపారి" }], correctIndex: 0 },
          { question: { en: "What was Tenali Ramakrishna famous for?", te: "తెనాలి రామకృష్ణ దేనికి ప్రసిద్ధి?" }, options: [{ en: "His wit and cleverness", te: "ఆయన తెలివి మరియు చమత్కారం" }, { en: "His strength", te: "ఆయన బలం" }, { en: "His wealth", te: "ఆయన సంపద" }, { en: "His beauty", te: "ఆయన అందం" }], correctIndex: 0 },
          { question: { en: "Who was the king in the story?", te: "కథలో రాజు ఎవరు?" }, options: [{ en: "Krishnadevaraya", te: "కృష్ణదేవరాయలు" }, { en: "Akbar", te: "అక్బర్" }, { en: "Ashoka", te: "అశోకుడు" }, { en: "Shivaji", te: "శివాజీ" }], correctIndex: 0 },
          { question: { en: "What does 'clever' mean?", te: "'క్లెవర్' అంటే అర్థం ఏమిటి?" }, options: [{ en: "Intelligent", te: "తెలివైన" }, { en: "Strong", te: "బలమైన" }, { en: "Weak", te: "బలహీన" }, { en: "Tall", te: "పొడవైన" }], correctIndex: 0 },
          { question: { en: "What lesson do we learn from the story?", te: "కథ నుండి మనం ఏ పాఠం నేర్చుకుంటాం?" }, options: [{ en: "Think creatively to solve problems", te: "సమస్యలను సృజనాత్మకంగా పరిష్కరించు" }, { en: "Use force always", te: "ఎల్లప్పుడూ బలాన్ని ఉపయోగించు" }, { en: "Never help others", te: "ఇతరులకు ఎప్పుడూ సహాయం చేయకు" }, { en: "Money is everything", te: "డబ్బు అన్నీ" }], correctIndex: 0 },
          { question: { en: "What is a jester?", te: "విదూషకుడు అంటే ఏమిటి?" }, options: [{ en: "A person who entertains with jokes", te: "జోకులతో వినోదించే వ్యక్తి" }, { en: "A soldier", te: "సైనికుడు" }, { en: "A cook", te: "వంటవాడు" }, { en: "A teacher", te: "ఉపాధ్యాయుడు" }], correctIndex: 0 },
          { question: { en: "Which kingdom did Tenali Ramakrishna belong to?", te: "తెనాలి రామకృష్ణ ఏ రాజ్యానికి చెందినవారు?" }, options: [{ en: "Vijayanagara", te: "విజయనగరం" }, { en: "Mughal", te: "మొఘల్" }, { en: "Maurya", te: "మౌర్య" }, { en: "Chola", te: "చోళ" }], correctIndex: 0 },
          { question: { en: "What is more powerful according to the story?", te: "కథ ప్రకారం ఏది శక్తివంతమైనది?" }, options: [{ en: "Wisdom", te: "జ్ఞానం" }, { en: "Strength", te: "బలం" }, { en: "Wealth", te: "సంపద" }, { en: "Beauty", te: "అందం" }], correctIndex: 0 },
          { question: { en: "What does 'wit' mean?", te: "'విట్' అంటే అర్థం ఏమిటి?" }, options: [{ en: "Quick thinking ability", te: "త్వరగా ఆలోచించే సామర్థ్యం" }, { en: "Physical power", te: "శారీరక శక్తి" }, { en: "Money", te: "డబ్బు" }, { en: "Height", te: "ఎత్తు" }], correctIndex: 0 },
          { question: { en: "What is this lesson about?", te: "ఈ పాఠం దేని గురించి?" }, options: [{ en: "Tenali Ramakrishna's cleverness", te: "తెనాలి రామకృష్ణ తెలివి" }, { en: "War stories", te: "యుద్ధ కథలు" }, { en: "Animal stories", te: "జంతువుల కథలు" }, { en: "Nature", te: "ప్రకృతి" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "Who was Tenali Ramakrishna? Write a short note.", te: "తెనాలి రామకృష్ణ ఎవరు? చిన్న వ్యాఖ్య రాయండి." }, answer: { en: "Tenali Ramakrishna was a famous poet and jester in King Krishnadevaraya's court. He was known for solving problems with wit and humor.", te: "తెనాలి రామకృష్ణ కృష్ణదేవరాయల ఆస్థానంలో ప్రసిద్ధ కవి మరియు విదూషకుడు. ఆయన తెలివి మరియు హాస్యంతో సమస్యలను పరిష్కరించడంలో ప్రసిద్ధి." } },
          { question: { en: "What lesson do we learn from Tenali Ramakrishna's stories?", te: "తెనాలి రామకృష్ణ కథల నుండి మనం ఏ పాఠం నేర్చుకుంటాం?" }, answer: { en: "We learn that wisdom and cleverness are more powerful than physical strength. Creative thinking can solve any problem.", te: "జ్ఞానం మరియు తెలివి శారీరక బలం కంటే శక్తివంతమని నేర్చుకుంటాం. సృజనాత్మక ఆలోచన ఏ సమస్యనైనా పరిష్కరించగలదు." } },
          { question: { en: "Write the meaning of: clever, wit, jester", te: "అర్థం రాయండి: clever, wit, jester" }, answer: { en: "Clever: intelligent, quick-thinking. Wit: ability to think quickly. Jester: a person who entertains with jokes.", te: "Clever: తెలివైన. Wit: త్వరగా ఆలోచించే సామర్థ్యం. Jester: జోకులతో వినోదించే వ్యక్తి." } },
          { question: { en: "Who was King Krishnadevaraya?", te: "కృష్ణదేవరాయలు ఎవరు?" }, answer: { en: "Krishnadevaraya was a famous king of the Vijayanagara Empire. He was known for his patronage of arts and literature.", te: "కృష్ణదేవరాయలు విజయనగర సామ్రాజ్యపు ప్రసిద్ధ రాజు. ఆయన కళలు మరియు సాహిత్యానికి ఆశ్రయం ఇచ్చినందుకు ప్రసిద్ధి." } },
          { question: { en: "Write a sentence using the word 'clever'", te: "'clever' పదం ఉపయోగించి వాక్యం రాయండి" }, answer: { en: "Tenali Ramakrishna was a very clever poet.", te: "తెనాలి రామకృష్ణ చాలా తెలివైన కవి." } },
          { question: { en: "What is the opposite of 'clever'?", te: "'clever' యొక్క వ్యతిరేక పదం ఏమిటి?" }, answer: { en: "The opposite of clever is foolish or stupid.", te: "Clever యొక్క వ్యతిరేక పదం foolish లేదా stupid." } },
          { question: { en: "Make a sentence: Tenali, solved, problem, cleverly", te: "వాక్యం తయారు చేయండి: Tenali, solved, problem, cleverly" }, answer: { en: "Tenali solved the problem cleverly.", te: "తెనాలి సమస్యను తెలివిగా పరిష్కరించాడు." } },
          { question: { en: "Why is wisdom important?", te: "జ్ఞానం ఎందుకు ముఖ్యం?" }, answer: { en: "Wisdom helps us make good decisions and solve problems. It is more powerful than physical strength.", te: "జ్ఞానం మంచి నిర్ణయాలు తీసుకోవడంలో మరియు సమస్యలను పరిష్కరించడంలో సహాయపడుతుంది." } },
          { question: { en: "Write 5 words from the story", te: "కథ నుండి 5 పదాలు రాయండి" }, answer: { en: "Clever, wit, jester, court, wisdom", te: "Clever, wit, jester, court, wisdom" } },
          { question: { en: "Write a short summary of the story", te: "కథ యొక్క చిన్న సారాంశం రాయండి" }, answer: { en: "This story is about Tenali Ramakrishna, a clever poet in King Krishnadevaraya's court. He used his wit to solve problems and entertain everyone.", te: "ఈ కథ కృష్ణదేవరాయల ఆస్థానంలో తెలివైన కవి తెనాలి రామకృష్ణ గురించి. ఆయన తన తెలివిని ఉపయోగించి సమస్యలను పరిష్కరించి అందరినీ వినోదింపజేశారు." } }
        ]
      },
      {
        id: `english-snake-catcher-${grade}`,
        title: { en: "The Snake Catcher", te: "పాము పట్టేవాడు" },
        description: { en: "A story about bravery and skill", te: "ధైర్యం మరియు నైపుణ్యం గురించి కథ" },
        notes: { en: "## The Snake Catcher\n\n### Story Summary\nThis story is about a brave snake catcher who catches dangerous snakes with skill and courage. It teaches us about respecting all creatures and the importance of skill in dangerous work.\n\n### Key Points\n- The snake catcher is skilled and brave\n- He catches snakes without harming them\n- We should respect all living creatures\n- Skills and practice make us better at our work\n\n### Vocabulary\n- Snake catcher: A person who catches snakes\n- Brave: Having courage\n- Skill: Ability to do something well\n- Dangerous: Causing harm or injury", te: "## పాము పట్టేవాడు\n\n### కథ సారాంశం\nఈ కథ ప్రమాదకరమైన పాములను నైపుణ్యం మరియు ధైర్యంతో పట్టుకునే ధైర్యవంతుడైన పాము పట్టేవాడి గురించి.\n\n### ముఖ్య అంశాలు\n- పాము పట్టేవాడు నిపుణుడు మరియు ధైర్యవంతుడు\n- అతను పాములను హాని చేయకుండా పట్టుకుంటాడు\n- మనం అన్ని జీవులను గౌరవించాలి" },
        videoUrls: ["https://www.youtube.com/embed/DXQtvgX2ZfY"],
        quiz: [
          { question: { en: "What does a snake catcher do?", te: "పాము పట్టేవాడు ఏమి చేస్తాడు?" }, options: [{ en: "Catches snakes", te: "పాములను పట్టుకుంటాడు" }, { en: "Catches fish", te: "చేపలను పట్టుకుంటాడు" }, { en: "Catches birds", te: "పక్షులను పట్టుకుంటాడు" }, { en: "Catches butterflies", te: "సీతాకోకచిలుకలను పట్టుకుంటాడు" }], correctIndex: 0 },
          { question: { en: "What quality does the snake catcher have?", te: "పాము పట్టేవాడికి ఏ లక్షణం ఉంది?" }, options: [{ en: "Bravery and skill", te: "ధైర్యం మరియు నైపుణ్యం" }, { en: "Laziness", te: "సోమరితనం" }, { en: "Fear", te: "భయం" }, { en: "Anger", te: "కోపం" }], correctIndex: 0 },
          { question: { en: "What does 'brave' mean?", te: "'బ్రేవ్' అంటే అర్థం ఏమిటి?" }, options: [{ en: "Having courage", te: "ధైర్యం కలిగి ఉండటం" }, { en: "Being scared", te: "భయపడటం" }, { en: "Being lazy", te: "సోమరిగా ఉండటం" }, { en: "Being sad", te: "దుఃఖంగా ఉండటం" }], correctIndex: 0 },
          { question: { en: "How should we treat all creatures?", te: "మనం అన్ని జీవులను ఎలా చూడాలి?" }, options: [{ en: "With respect", te: "గౌరవంతో" }, { en: "With anger", te: "కోపంతో" }, { en: "With fear", te: "భయంతో" }, { en: "With hatred", te: "ద్వేషంతో" }], correctIndex: 0 },
          { question: { en: "What makes us better at work?", te: "మనల్ని పనిలో మెరుగుపరిచేది ఏమిటి?" }, options: [{ en: "Skills and practice", te: "నైపుణ్యాలు మరియు అభ్యాసం" }, { en: "Sleep", te: "నిద్ర" }, { en: "Eating", te: "తినడం" }, { en: "Playing", te: "ఆడటం" }], correctIndex: 0 },
          { question: { en: "What does 'dangerous' mean?", te: "'డేంజరస్' అంటే అర్థం ఏమిటి?" }, options: [{ en: "Causing harm", te: "హాని కలిగించే" }, { en: "Safe", te: "సురక్షితమైన" }, { en: "Happy", te: "సంతోషమైన" }, { en: "Beautiful", te: "అందమైన" }], correctIndex: 0 },
          { question: { en: "Does the snake catcher harm the snakes?", te: "పాము పట్టేవాడు పాములకు హాని చేస్తాడా?" }, options: [{ en: "No", te: "లేదు" }, { en: "Yes", te: "అవును" }, { en: "Sometimes", te: "కొన్నిసార్లు" }, { en: "Always", te: "ఎల్లప్పుడూ" }], correctIndex: 0 },
          { question: { en: "What is 'skill'?", te: "'స్కిల్' అంటే ఏమిటి?" }, options: [{ en: "Ability to do something well", te: "ఏదైనా బాగా చేయగల సామర్థ్యం" }, { en: "Laziness", te: "సోమరితనం" }, { en: "Fear", te: "భయం" }, { en: "Anger", te: "కోపం" }], correctIndex: 0 },
          { question: { en: "Why is the snake catcher's job important?", te: "పాము పట్టేవాడి పని ఎందుకు ముఖ్యం?" }, options: [{ en: "He removes dangerous snakes safely", te: "అతను ప్రమాదకరమైన పాములను సురక్షితంగా తొలగిస్తాడు" }, { en: "He plays games", te: "అతను ఆటలు ఆడతాడు" }, { en: "He sings songs", te: "అతను పాటలు పాడతాడు" }, { en: "He sleeps", te: "అతను నిద్రపోతాడు" }], correctIndex: 0 },
          { question: { en: "What is this lesson about?", te: "ఈ పాఠం దేని గురించి?" }, options: [{ en: "A brave snake catcher", te: "ధైర్యవంతుడైన పాము పట్టేవాడు" }, { en: "A lazy boy", te: "సోమరి అబ్బాయి" }, { en: "A flying bird", te: "ఎగిరే పక్షి" }, { en: "A swimming fish", te: "ఈదే చేప" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "What does a snake catcher do?", te: "పాము పట్టేవాడు ఏమి చేస్తాడు?" }, answer: { en: "A snake catcher catches snakes safely without harming them. He is skilled and brave.", te: "పాము పట్టేవాడు పాములను హాని చేయకుండా సురక్షితంగా పట్టుకుంటాడు. అతను నిపుణుడు మరియు ధైర్యవంతుడు." } },
          { question: { en: "Why is bravery important in this job?", te: "ఈ పనిలో ధైర్యం ఎందుకు ముఖ్యం?" }, answer: { en: "Bravery is important because snakes can be dangerous. The snake catcher needs courage to handle them.", te: "పాములు ప్రమాదకరమైనవి కాబట్టి ధైర్యం ముఖ్యం. వాటిని నిర్వహించడానికి పాము పట్టేవాడికి ధైర్యం అవసరం." } },
          { question: { en: "Write the meaning of: brave, skill, dangerous", te: "అర్థం రాయండి: brave, skill, dangerous" }, answer: { en: "Brave: having courage. Skill: ability to do something well. Dangerous: causing harm.", te: "Brave: ధైర్యం కలిగి ఉండటం. Skill: ఏదైనా బాగా చేయగల సామర్థ్యం. Dangerous: హాని కలిగించే." } },
          { question: { en: "How should we treat animals?", te: "మనం జంతువులను ఎలా చూడాలి?" }, answer: { en: "We should treat all animals with respect and kindness. We should not harm them.", te: "మనం అన్ని జంతువులను గౌరవం మరియు దయతో చూడాలి. వాటికి హాని చేయకూడదు." } },
          { question: { en: "Write a sentence using the word 'brave'", te: "'brave' పదం ఉపయోగించి వాక్యం రాయండి" }, answer: { en: "The snake catcher is very brave.", te: "పాము పట్టేవాడు చాలా ధైర్యవంతుడు." } },
          { question: { en: "What is the opposite of 'dangerous'?", te: "'dangerous' యొక్క వ్యతిరేక పదం ఏమిటి?" }, answer: { en: "The opposite of dangerous is safe.", te: "Dangerous యొక్క వ్యతిరేక పదం safe." } },
          { question: { en: "Why is practice important?", te: "అభ్యాసం ఎందుకు ముఖ్యం?" }, answer: { en: "Practice makes us better at our work. It helps us develop skills.", te: "అభ్యాసం మనల్ని పనిలో మెరుగుపరుస్తుంది. ఇది నైపుణ్యాలను అభివృద్ధి చేయడంలో సహాయపడుతుంది." } },
          { question: { en: "What can we learn from the snake catcher?", te: "పాము పట్టేవాడి నుండి మనం ఏమి నేర్చుకోవచ్చు?" }, answer: { en: "We can learn bravery, skill, and respect for all living creatures.", te: "మనం ధైర్యం, నైపుణ్యం మరియు అన్ని జీవుల పట్ల గౌరవం నేర్చుకోవచ్చు." } },
          { question: { en: "Write 5 new words from the lesson", te: "పాఠం నుండి 5 కొత్త పదాలు రాయండి" }, answer: { en: "Snake, catcher, brave, skill, dangerous", te: "Snake, catcher, brave, skill, dangerous" } },
          { question: { en: "Write a short summary of the story", te: "కథ యొక్క చిన్న సారాంశం రాయండి" }, answer: { en: "This story is about a brave snake catcher who catches snakes with skill. He teaches us to respect all creatures and develop our skills.", te: "ఈ కథ నైపుణ్యంతో పాములను పట్టుకునే ధైర్యవంతుడైన పాము పట్టేవాడి గురించి. అతను అన్ని జీవులను గౌరవించమని మరియు మన నైపుణ్యాలను అభివృద్ధి చేసుకోమని నేర్పిస్తాడు." } }
        ]
      },
      {
        id: `english-little-hearts-${grade}`,
        title: { en: "Little Hearts", te: "చిన్న హృదయాలు" },
        description: { en: "A story about kindness and love", te: "దయ మరియు ప్రేమ గురించి కథ" },
        notes: { en: "## Little Hearts\n\n### Story Summary\nThis beautiful story is about children with pure and kind hearts. It teaches us the importance of love, kindness, and helping others.\n\n### Key Points\n- Children have innocent and pure hearts\n- Kindness makes the world a better place\n- Helping others brings happiness\n- Love is the most powerful force\n\n### Vocabulary\n- Little: Small in size\n- Hearts: Symbol of love and feelings\n- Kindness: Being good and helpful to others\n- Innocent: Pure and without bad intentions", te: "## చిన్న హృదయాలు\n\n### కథ సారాంశం\nఈ అందమైన కథ స్వచ్ఛమైన మరియు దయగల హృదయాలు గల పిల్లల గురించి.\n\n### ముఖ్య అంశాలు\n- పిల్లలకు అమాయకమైన మరియు స్వచ్ఛమైన హృదయాలు ఉంటాయి\n- దయ ప్రపంచాన్ని మెరుగైన ప్రదేశంగా చేస్తుంది\n- ఇతరులకు సహాయం చేయడం ఆనందాన్ని తెస్తుంది" },
        videoUrls: ["https://www.youtube.com/embed/SfeEEmMjzeA"],
        quiz: [
          { question: { en: "What is this story about?", te: "ఈ కథ దేని గురించి?" }, options: [{ en: "Children with kind hearts", te: "దయగల హృదయాలు గల పిల్లలు" }, { en: "Angry children", te: "కోపంగా ఉన్న పిల్లలు" }, { en: "Lazy children", te: "సోమరి పిల్లలు" }, { en: "Sad children", te: "దుఃఖంగా ఉన్న పిల్లలు" }], correctIndex: 0 },
          { question: { en: "What do children have?", te: "పిల్లలకు ఏమి ఉంటుంది?" }, options: [{ en: "Pure hearts", te: "స్వచ్ఛమైన హృదయాలు" }, { en: "Bad hearts", te: "చెడు హృదయాలు" }, { en: "Stone hearts", te: "రాతి హృదయాలు" }, { en: "Cold hearts", te: "చల్లని హృదయాలు" }], correctIndex: 0 },
          { question: { en: "What does kindness do?", te: "దయ ఏమి చేస్తుంది?" }, options: [{ en: "Makes the world better", te: "ప్రపంచాన్ని మెరుగుపరుస్తుంది" }, { en: "Makes the world worse", te: "ప్రపంచాన్ని అధ్వాన్నం చేస్తుంది" }, { en: "Does nothing", te: "ఏమీ చేయదు" }, { en: "Creates problems", te: "సమస్యలను సృష్టిస్తుంది" }], correctIndex: 0 },
          { question: { en: "What brings happiness?", te: "ఆనందాన్ని తెచ్చేది ఏమిటి?" }, options: [{ en: "Helping others", te: "ఇతరులకు సహాయం చేయడం" }, { en: "Being selfish", te: "స్వార్థంగా ఉండటం" }, { en: "Being angry", te: "కోపంగా ఉండటం" }, { en: "Being lazy", te: "సోమరిగా ఉండటం" }], correctIndex: 0 },
          { question: { en: "What does 'innocent' mean?", te: "'ఇన్నోసెంట్' అంటే అర్థం ఏమిటి?" }, options: [{ en: "Pure and without bad intentions", te: "స్వచ్ఛమైన మరియు చెడు ఉద్దేశాలు లేని" }, { en: "Evil", te: "దుష్టమైన" }, { en: "Angry", te: "కోపంగా ఉన్న" }, { en: "Lazy", te: "సోమరి" }], correctIndex: 0 },
          { question: { en: "What is the most powerful force?", te: "అత్యంత శక్తివంతమైన శక్తి ఏది?" }, options: [{ en: "Love", te: "ప్రేమ" }, { en: "Anger", te: "కోపం" }, { en: "Fear", te: "భయం" }, { en: "Hatred", te: "ద్వేషం" }], correctIndex: 0 },
          { question: { en: "What does 'kindness' mean?", te: "'కైండ్‌నెస్' అంటే అర్థం ఏమిటి?" }, options: [{ en: "Being good and helpful", te: "మంచిగా మరియు సహాయకరంగా ఉండటం" }, { en: "Being angry", te: "కోపంగా ఉండటం" }, { en: "Being lazy", te: "సోమరిగా ఉండటం" }, { en: "Being sad", te: "దుఃఖంగా ఉండటం" }], correctIndex: 0 },
          { question: { en: "What is the symbol of love?", te: "ప్రేమ చిహ్నం ఏమిటి?" }, options: [{ en: "Heart", te: "హృదయం" }, { en: "Star", te: "నక్షత్రం" }, { en: "Moon", te: "చంద్రుడు" }, { en: "Sun", te: "సూర్యుడు" }], correctIndex: 0 },
          { question: { en: "How are children's hearts described?", te: "పిల్లల హృదయాలు ఎలా వర్ణించబడ్డాయి?" }, options: [{ en: "Little and pure", te: "చిన్నవి మరియు స్వచ్ఛమైనవి" }, { en: "Big and angry", te: "పెద్దవి మరియు కోపంగా ఉన్నవి" }, { en: "Cold and hard", te: "చల్లని మరియు కఠినమైనవి" }, { en: "Dark and sad", te: "చీకటి మరియు దుఃఖంగా ఉన్నవి" }], correctIndex: 0 },
          { question: { en: "What is the main message of this story?", te: "ఈ కథ యొక్క ప్రధాన సందేశం ఏమిటి?" }, options: [{ en: "Be kind and loving", te: "దయగా మరియు ప్రేమగా ఉండు" }, { en: "Be angry", te: "కోపంగా ఉండు" }, { en: "Be selfish", te: "స్వార్థంగా ఉండు" }, { en: "Be lazy", te: "సోమరిగా ఉండు" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "What is the story 'Little Hearts' about?", te: "'లిటిల్ హార్ట్స్' కథ దేని గురించి?" }, answer: { en: "The story is about children with pure and kind hearts. It teaches us about love, kindness, and helping others.", te: "ఈ కథ స్వచ్ఛమైన మరియు దయగల హృదయాలు గల పిల్లల గురించి. ఇది మనకు ప్రేమ, దయ మరియు ఇతరులకు సహాయం చేయడం గురించి నేర్పిస్తుంది." } },
          { question: { en: "Why is kindness important?", te: "దయ ఎందుకు ముఖ్యం?" }, answer: { en: "Kindness makes the world a better place. It brings happiness to others and ourselves.", te: "దయ ప్రపంచాన్ని మెరుగైన ప్రదేశంగా చేస్తుంది. ఇది ఇతరులకు మరియు మనకు ఆనందాన్ని తెస్తుంది." } },
          { question: { en: "Write the meaning of: little, kindness, innocent", te: "అర్థం రాయండి: little, kindness, innocent" }, answer: { en: "Little: small. Kindness: being good and helpful. Innocent: pure without bad intentions.", te: "Little: చిన్న. Kindness: మంచిగా మరియు సహాయకరంగా ఉండటం. Innocent: చెడు ఉద్దేశాలు లేకుండా స్వచ్ఛమైన." } },
          { question: { en: "How can we help others?", te: "మనం ఇతరులకు ఎలా సహాయం చేయవచ్చు?" }, answer: { en: "We can help others by being kind, sharing, and caring for them when they need us.", te: "మనం దయగా ఉండటం, పంచుకోవడం మరియు వారికి అవసరమైనప్పుడు శ్రద్ధ వహించడం ద్వారా ఇతరులకు సహాయం చేయవచ్చు." } },
          { question: { en: "Write a sentence using the word 'kindness'", te: "'kindness' పదం ఉపయోగించి వాక్యం రాయండి" }, answer: { en: "Kindness makes everyone happy.", te: "దయ అందరినీ సంతోషపరుస్తుంది." } },
          { question: { en: "What is the opposite of 'kind'?", te: "'kind' యొక్క వ్యతిరేక పదం ఏమిటి?" }, answer: { en: "The opposite of kind is cruel or unkind.", te: "Kind యొక్క వ్యతిరేక పదం cruel లేదా unkind." } },
          { question: { en: "Why do children have pure hearts?", te: "పిల్లలకు స్వచ్ఛమైన హృదయాలు ఎందుకు ఉంటాయి?" }, answer: { en: "Children have pure hearts because they are innocent and have not learned bad habits.", te: "పిల్లలకు స్వచ్ఛమైన హృదయాలు ఉంటాయి ఎందుకంటే వారు అమాయకులు మరియు చెడు అలవాట్లు నేర్చుకోలేదు." } },
          { question: { en: "What is the message of this story?", te: "ఈ కథ యొక్క సందేశం ఏమిటి?" }, answer: { en: "The message is to be kind, loving, and helpful to others.", te: "సందేశం ఏమిటంటే ఇతరులకు దయగా, ప్రేమగా మరియు సహాయకరంగా ఉండాలి." } },
          { question: { en: "Write 5 new words from the lesson", te: "పాఠం నుండి 5 కొత్త పదాలు రాయండి" }, answer: { en: "Little, hearts, kindness, innocent, love", te: "Little, hearts, kindness, innocent, love" } },
          { question: { en: "Write a short note on kindness", te: "దయ మీద చిన్న వ్యాఖ్య రాయండి" }, answer: { en: "Kindness means being good and helpful to others. It makes the world a better place and brings happiness.", te: "దయ అంటే ఇతరులకు మంచిగా మరియు సహాయకరంగా ఉండటం. ఇది ప్రపంచాన్ని మెరుగైన ప్రదేశంగా చేస్తుంది మరియు ఆనందాన్ని తెస్తుంది." } }
        ]
      },
      {
        id: `english-dollar-eleven-cents-${grade}`,
        title: { en: "What Can a Dollar and Eleven Cents Do?", te: "ఒక డాలర్ మరియు పదకొండు సెంట్లు ఏమి చేయగలవు?" },
        description: { en: "A story about faith and miracles", te: "విశ్వాసం మరియు అద్భుతాల గురించి కథ" },
        notes: { en: "## What Can a Dollar and Eleven Cents Do?\n\n### Story Summary\nThis inspiring story shows how a small amount of money and strong faith can create miracles. It teaches us that determination and belief can achieve the impossible.\n\n### Key Points\n- Small things can make big changes\n- Faith and determination are powerful\n- Never give up on your dreams\n- Miracles happen when we believe\n\n### Vocabulary\n- Dollar: American currency\n- Cents: Small units of currency\n- Faith: Strong belief\n- Miracle: Something wonderful that seems impossible", te: "## ఒక డాలర్ మరియు పదకొండు సెంట్లు ఏమి చేయగలవు?\n\n### కథ సారాంశం\nఈ స్ఫూర్తిదాయక కథ చిన్న మొత్తం డబ్బు మరియు బలమైన విశ్వాసం అద్భుతాలను ఎలా సృష్టించగలదో చూపిస్తుంది.\n\n### ముఖ్య అంశాలు\n- చిన్న విషయాలు పెద్ద మార్పులు తీసుకురాగలవు\n- విశ్వాసం మరియు పట్టుదల శక్తివంతమైనవి\n- మీ కలల్ని ఎప్పుడూ వదిలివేయవద్దు" },
        videoUrls: ["https://www.youtube.com/embed/MoM5NFh68FE"],
        quiz: [
          { question: { en: "What is this story about?", te: "ఈ కథ దేని గురించి?" }, options: [{ en: "Faith and miracles", te: "విశ్వాసం మరియు అద్భుతాలు" }, { en: "War", te: "యుద్ధం" }, { en: "Animals", te: "జంతువులు" }, { en: "Sports", te: "క్రీడలు" }], correctIndex: 0 },
          { question: { en: "What amount is mentioned in the title?", te: "శీర్షికలో ఏ మొత్తం పేర్కొనబడింది?" }, options: [{ en: "A dollar and eleven cents", te: "ఒక డాలర్ మరియు పదకొండు సెంట్లు" }, { en: "Ten dollars", te: "పది డాలర్లు" }, { en: "One cent", te: "ఒక సెంట్" }, { en: "Hundred dollars", te: "వంద డాలర్లు" }], correctIndex: 0 },
          { question: { en: "What does 'faith' mean?", te: "'ఫెయిత్' అంటే అర్థం ఏమిటి?" }, options: [{ en: "Strong belief", te: "బలమైన నమ్మకం" }, { en: "Money", te: "డబ్బు" }, { en: "Fear", te: "భయం" }, { en: "Anger", te: "కోపం" }], correctIndex: 0 },
          { question: { en: "What are powerful according to the story?", te: "కథ ప్రకారం శక్తివంతమైనవి ఏవి?" }, options: [{ en: "Faith and determination", te: "విశ్వాసం మరియు పట్టుదల" }, { en: "Money only", te: "డబ్బు మాత్రమే" }, { en: "Anger", te: "కోపం" }, { en: "Fear", te: "భయం" }], correctIndex: 0 },
          { question: { en: "What does 'miracle' mean?", te: "'మిరాకిల్' అంటే అర్థం ఏమిటి?" }, options: [{ en: "Something wonderful that seems impossible", te: "అసాధ్యంగా అనిపించే అద్భుతమైనది" }, { en: "Something ordinary", te: "సాధారణమైనది" }, { en: "Something bad", te: "చెడ్డది" }, { en: "Something boring", te: "విసుగు కలిగించేది" }], correctIndex: 0 },
          { question: { en: "Should we give up on our dreams?", te: "మనం మన కలలను వదిలివేయాలా?" }, options: [{ en: "No, never", te: "లేదు, ఎప్పుడూ వద్దు" }, { en: "Yes, always", te: "అవును, ఎల్లప్పుడూ" }, { en: "Sometimes", te: "కొన్నిసార్లు" }, { en: "Maybe", te: "బహుశా" }], correctIndex: 0 },
          { question: { en: "What can small things do?", te: "చిన్న విషయాలు ఏమి చేయగలవు?" }, options: [{ en: "Make big changes", te: "పెద్ద మార్పులు తీసుకురావచ్చు" }, { en: "Do nothing", te: "ఏమీ చేయలేవు" }, { en: "Create problems", te: "సమస్యలు సృష్టించవచ్చు" }, { en: "Make us sad", te: "మనల్ని దుఃఖపరచవచ్చు" }], correctIndex: 0 },
          { question: { en: "When do miracles happen?", te: "అద్భుతాలు ఎప్పుడు జరుగుతాయి?" }, options: [{ en: "When we believe", te: "మనం నమ్మినప్పుడు" }, { en: "When we give up", te: "మనం వదిలివేసినప్పుడు" }, { en: "When we are angry", te: "మనం కోపంగా ఉన్నప్పుడు" }, { en: "When we are sad", te: "మనం దుఃఖంగా ఉన్నప్పుడు" }], correctIndex: 0 },
          { question: { en: "What is a dollar?", te: "డాలర్ అంటే ఏమిటి?" }, options: [{ en: "American currency", te: "అమెరికన్ కరెన్సీ" }, { en: "Indian currency", te: "భారతీయ కరెన్సీ" }, { en: "A fruit", te: "ఒక పండు" }, { en: "An animal", te: "ఒక జంతువు" }], correctIndex: 0 },
          { question: { en: "What is the main message of this story?", te: "ఈ కథ యొక్క ప్రధాన సందేశం ఏమిటి?" }, options: [{ en: "Believe and never give up", te: "నమ్మండి మరియు ఎప్పుడూ వదిలివేయవద్దు" }, { en: "Money is everything", te: "డబ్బు అంతా" }, { en: "Be lazy", te: "సోమరిగా ఉండండి" }, { en: "Give up easily", te: "సులభంగా వదిలివేయండి" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" }, answer: { en: "The story is about how faith and determination can create miracles, even with a small amount of money.", te: "ఈ కథ చిన్న మొత్తం డబ్బుతో కూడా విశ్వాసం మరియు పట్టుదల అద్భుతాలను ఎలా సృష్టించగలదో చూపిస్తుంది." } },
          { question: { en: "What is the meaning of 'faith'?", te: "'ఫెయిత్' అర్థం ఏమిటి?" }, answer: { en: "Faith means having strong belief in something, even when it seems impossible.", te: "ఫెయిత్ అంటే అసాధ్యంగా కనిపించినప్పుడు కూడా ఏదైనా మీద బలమైన నమ్మకం కలిగి ఉండటం." } },
          { question: { en: "Write the meaning of: dollar, cents, miracle", te: "అర్థం రాయండి: dollar, cents, miracle" }, answer: { en: "Dollar: American currency. Cents: small units of currency. Miracle: something wonderful that seems impossible.", te: "Dollar: అమెరికన్ కరెన్సీ. Cents: కరెన్సీ యొక్క చిన్న యూనిట్లు. Miracle: అసాధ్యంగా అనిపించే అద్భుతమైనది." } },
          { question: { en: "Why should we never give up?", te: "మనం ఎందుకు ఎప్పుడూ వదిలివేయకూడదు?" }, answer: { en: "We should never give up because determination and faith can achieve the impossible.", te: "మనం ఎప్పుడూ వదిలివేయకూడదు ఎందుకంటే పట్టుదల మరియు విశ్వాసం అసాధ్యాన్ని సాధించగలవు." } },
          { question: { en: "Write a sentence using the word 'faith'", te: "'faith' పదం ఉపయోగించి వాక్యం రాయండి" }, answer: { en: "Faith can move mountains.", te: "విశ్వాసం పర్వతాలను కదిలించగలదు." } },
          { question: { en: "What is the opposite of 'believe'?", te: "'believe' యొక్క వ్యతిరేక పదం ఏమిటి?" }, answer: { en: "The opposite of believe is doubt or disbelieve.", te: "Believe యొక్క వ్యతిరేక పదం doubt లేదా disbelieve." } },
          { question: { en: "Can small things make big changes?", te: "చిన్న విషయాలు పెద్ద మార్పులు తీసుకురాగలవా?" }, answer: { en: "Yes, small things can make big changes when we have faith and determination.", te: "అవును, మనకు విశ్వాసం మరియు పట్టుదల ఉన్నప్పుడు చిన్న విషయాలు పెద్ద మార్పులు తీసుకురాగలవు." } },
          { question: { en: "What is the power of determination?", te: "పట్టుదల యొక్క శక్తి ఏమిటి?" }, answer: { en: "Determination helps us achieve our goals and overcome obstacles.", te: "పట్టుదల మన లక్ష్యాలను సాధించడంలో మరియు అడ్డంకులను అధిగమించడంలో సహాయపడుతుంది." } },
          { question: { en: "Write 5 new words from the lesson", te: "పాఠం నుండి 5 కొత్త పదాలు రాయండి" }, answer: { en: "Dollar, cents, faith, miracle, determination", te: "Dollar, cents, faith, miracle, determination" } },
          { question: { en: "Write the moral of the story", te: "కథ యొక్క నీతి రాయండి" }, answer: { en: "The moral is that faith and determination can achieve anything, even with very little resources.", te: "నీతి ఏమిటంటే విశ్వాసం మరియు పట్టుదల చాలా తక్కువ వనరులతో కూడా ఏదైనా సాధించగలవు." } }
        ]
      }
    ] : [
      {
        id: `english-three-questions-${grade}`,
        title: { en: "Three Questions", te: "మూడు ప్రశ్నలు" },
        description: { en: "A story by Leo Tolstoy about wisdom", te: "లియో టాల్‌స్టాయ్ రాసిన జ్ఞానం గురించి కథ" },
        notes: { en: "## Three Questions\n\n### Story Summary\nThis famous story by Leo Tolstoy is about a king who wanted answers to three questions: What is the right time to do something? Who are the most important people? What is the most important thing to do?\n\n### Key Points\n- The present moment is the most important time\n- The person you are with is the most important person\n- Doing good to that person is the most important thing\n\n### Vocabulary\n- Hermit: A person who lives alone in a simple way\n- Wisdom: Deep understanding and knowledge\n- Compassion: Feeling of caring for others\n- Present: The current time, now", te: "## మూడు ప్రశ్నలు\n\n### కథ సారాంశం\nలియో టాల్‌స్టాయ్ రాసిన ఈ ప్రసిద్ధ కథ ఒక రాజు గురించి, అతను మూడు ప్రశ్నలకు సమాధానాలు కోరుకున్నాడు.\n\n### ముఖ్య అంశాలు\n- ప్రస్తుత క్షణం అత్యంత ముఖ్యమైన సమయం\n- మీతో ఉన్న వ్యక్తి అత్యంత ముఖ్యమైన వ్యక్తి\n- ఆ వ్యక్తికి మంచి చేయడం అత్యంత ముఖ్యమైన పని" },
        videoUrls: ["https://www.youtube.com/embed/IBsEStHX2E4"],
        quiz: [
          { question: { en: "Who wrote 'Three Questions'?", te: "'మూడు ప్రశ్నలు' ఎవరు రాశారు?" }, options: [{ en: "Leo Tolstoy", te: "లియో టాల్‌స్టాయ్" }, { en: "Shakespeare", te: "షేక్స్పియర్" }, { en: "Rabindranath Tagore", te: "రవీంద్రనాథ్ ఠాగూర్" }, { en: "R.K. Narayan", te: "ఆర్.కె. నారాయణ్" }], correctIndex: 0 },
          { question: { en: "How many questions did the king have?", te: "రాజుకు ఎన్ని ప్రశ్నలు ఉన్నాయి?" }, options: [{ en: "Three", te: "మూడు" }, { en: "Two", te: "రెండు" }, { en: "Four", te: "నాలుగు" }, { en: "Five", te: "ఐదు" }], correctIndex: 0 },
          { question: { en: "What is the most important time?", te: "అత్యంత ముఖ్యమైన సమయం ఏది?" }, options: [{ en: "The present moment", te: "ప్రస్తుత క్షణం" }, { en: "The past", te: "గతం" }, { en: "The future", te: "భవిష్యత్తు" }, { en: "Yesterday", te: "నిన్న" }], correctIndex: 0 },
          { question: { en: "Who is the most important person?", te: "అత్యంత ముఖ్యమైన వ్యక్తి ఎవరు?" }, options: [{ en: "The person you are with now", te: "ఇప్పుడు మీతో ఉన్న వ్యక్తి" }, { en: "The king", te: "రాజు" }, { en: "The rich person", te: "ధనవంతుడు" }, { en: "The famous person", te: "ప్రసిద్ధ వ్యక్తి" }], correctIndex: 0 },
          { question: { en: "What is the most important thing to do?", te: "చేయవలసిన అత్యంత ముఖ్యమైన పని ఏమిటి?" }, options: [{ en: "Doing good to the person with you", te: "మీతో ఉన్న వ్యక్తికి మంచి చేయడం" }, { en: "Making money", te: "డబ్బు సంపాదించడం" }, { en: "Sleeping", te: "నిద్రపోవడం" }, { en: "Playing games", te: "ఆటలు ఆడటం" }], correctIndex: 0 },
          { question: { en: "What is a hermit?", te: "సన్యాసి అంటే ఏమిటి?" }, options: [{ en: "A person who lives alone simply", te: "ఒంటరిగా సింపుల్‌గా జీవించే వ్యక్తి" }, { en: "A king", te: "రాజు" }, { en: "A soldier", te: "సైనికుడు" }, { en: "A merchant", te: "వ్యాపారి" }], correctIndex: 0 },
          { question: { en: "What does 'wisdom' mean?", te: "'విజ్డమ్' అంటే అర్థం ఏమిటి?" }, options: [{ en: "Deep understanding", te: "లోతైన అవగాహన" }, { en: "Strength", te: "బలం" }, { en: "Wealth", te: "సంపద" }, { en: "Speed", te: "వేగం" }], correctIndex: 0 },
          { question: { en: "Who helped the king find answers?", te: "సమాధానాలు కనుగొనడంలో రాజుకు ఎవరు సహాయం చేశారు?" }, options: [{ en: "A hermit", te: "ఒక సన్యాసి" }, { en: "A soldier", te: "ఒక సైనికుడు" }, { en: "A teacher", te: "ఒక ఉపాధ్యాయుడు" }, { en: "A minister", te: "ఒక మంత్రి" }], correctIndex: 0 },
          { question: { en: "What is 'compassion'?", te: "'కంపాషన్' అంటే ఏమిటి?" }, options: [{ en: "Caring for others", te: "ఇతరుల పట్ల శ్రద్ధ" }, { en: "Anger", te: "కోపం" }, { en: "Fear", te: "భయం" }, { en: "Jealousy", te: "అసూయ" }], correctIndex: 0 },
          { question: { en: "What is the main message of the story?", te: "కథ యొక్క ప్రధాన సందేశం ఏమిటి?" }, options: [{ en: "Live in the present and be kind", te: "వర్తమానంలో జీవించండి మరియు దయగా ఉండండి" }, { en: "Be rich", te: "ధనవంతులు కండి" }, { en: "Be powerful", te: "శక్తివంతులు కండి" }, { en: "Be famous", te: "ప్రసిద్ధులు కండి" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "What were the three questions of the king?", te: "రాజు యొక్క మూడు ప్రశ్నలు ఏమిటి?" }, answer: { en: "1. What is the right time to do something? 2. Who are the most important people? 3. What is the most important thing to do?", te: "1. ఏదైనా చేయడానికి సరైన సమయం ఏది? 2. అత్యంత ముఖ్యమైన వ్యక్తులు ఎవరు? 3. చేయవలసిన అత్యంత ముఖ్యమైన పని ఏమిటి?" } },
          { question: { en: "What answers did the hermit give?", te: "సన్యాసి ఏ సమాధానాలు ఇచ్చారు?" }, answer: { en: "The present moment is the most important time. The person with you is the most important. Doing good to that person is the most important thing.", te: "ప్రస్తుత క్షణం అత్యంత ముఖ్యమైన సమయం. మీతో ఉన్న వ్యక్తి అత్యంత ముఖ్యమైన వారు. ఆ వ్యక్తికి మంచి చేయడం అత్యంత ముఖ్యమైన పని." } },
          { question: { en: "Write the meaning of: hermit, wisdom, compassion", te: "అర్థం రాయండి: hermit, wisdom, compassion" }, answer: { en: "Hermit: A person who lives alone simply. Wisdom: Deep understanding. Compassion: Caring for others.", te: "Hermit: ఒంటరిగా నిరాడంబరంగా జీవించే వ్యక్తి. Wisdom: లోతైన అవగాహన. Compassion: ఇతరుల పట్ల శ్రద్ధ." } },
          { question: { en: "Why is the present moment important?", te: "ప్రస్తుత క్షణం ఎందుకు ముఖ్యం?" }, answer: { en: "The present moment is important because the past is gone and the future is uncertain. We can only act now.", te: "ప్రస్తుత క్షణం ముఖ్యం ఎందుకంటే గతం గడిచిపోయింది మరియు భవిష్యత్తు అనిశ్చితం. మనం ఇప్పుడు మాత్రమే చర్య తీసుకోగలం." } },
          { question: { en: "Write the moral of the story", te: "కథ యొక్క నీతి రాయండి" }, answer: { en: "Live in the present, care for the person with you, and do good deeds.", te: "వర్తమానంలో జీవించండి, మీతో ఉన్న వ్యక్తిని శ్రద్ధగా చూడండి, మంచి పనులు చేయండి." } },
          { question: { en: "Who was Leo Tolstoy?", te: "లియో టాల్‌స్టాయ్ ఎవరు?" }, answer: { en: "Leo Tolstoy was a famous Russian writer. He wrote many great stories and novels.", te: "లియో టాల్‌స్టాయ్ ప్రసిద్ధ రష్యన్ రచయిత. ఆయన అనేక గొప్ప కథలు మరియు నవలలు రాశారు." } },
          { question: { en: "Write 5 new words from this lesson", te: "ఈ పాఠం నుండి 5 కొత్త పదాలు రాయండి" }, answer: { en: "Hermit, wisdom, compassion, present, important", te: "Hermit, wisdom, compassion, present, important" } },
          { question: { en: "Write a sentence using 'wisdom'", te: "'wisdom' పదం ఉపయోగించి వాక్యం రాయండి" }, answer: { en: "The hermit shared his wisdom with the king.", te: "సన్యాసి తన జ్ఞానాన్ని రాజుతో పంచుకున్నారు." } },
          { question: { en: "Why did the king go to the hermit?", te: "రాజు సన్యాసి వద్దకు ఎందుకు వెళ్ళారు?" }, answer: { en: "The king went to the hermit because he wanted answers to his three questions about life.", te: "రాజు సన్యాసి వద్దకు వెళ్ళారు ఎందుకంటే అతనికి జీవితం గురించి తన మూడు ప్రశ్నలకు సమాధానాలు కావాలి." } },
          { question: { en: "Write a short summary of the story", te: "కథ యొక్క చిన్న సారాంశం రాయండి" }, answer: { en: "A king wanted answers to three questions. He went to a wise hermit who taught him that the present moment, the person with you, and doing good are the most important things in life.", te: "ఒక రాజుకు మూడు ప్రశ్నలకు సమాధానాలు కావాలి. అతను జ్ఞాని సన్యాసి వద్దకు వెళ్ళారు, అతను ప్రస్తుత క్షణం, మీతో ఉన్న వ్యక్తి మరియు మంచి చేయడం జీవితంలో అత్యంత ముఖ్యమైనవి అని నేర్పించారు." } }
        ]
      },
      {
        id: `english-vocabulary-${grade}`,
        title: { en: "Vocabulary Building", te: "పదజాలం నిర్మాణం" },
        description: { en: "Learn new words and meanings", te: "కొత్త పదాలు మరియు అర్థాలు నేర్చుకోండి" },
        notes: { en: "## Vocabulary Building\n\n### Synonyms (Same Meaning)\n- Happy = Joyful, Glad\n- Big = Large, Huge\n- Fast = Quick, Rapid\n\n### Antonyms (Opposite Meaning)\n- Happy × Sad\n- Big × Small\n- Fast × Slow", te: "## పదజాలం నిర్మాణం\n\n### పర్యాయపదాలు\n- Happy = ఆనందం\n- Big = పెద్ద\n\n### వ్యతిరేక పదాలు\n- Happy × Sad\n- Big × Small" },
        quiz: generateEnglishQuiz(),
        practice: generateEnglishPractice()
      }
    ]
  },
  {
    id: `maths-${grade}`,
    title: { en: "Mathematics", te: "గణితం" },
    icon: "Calculator",
    color: "game-blue",
    chapters: grade === 6 ? [
      {
        id: `numbers-all-around-${grade}`,
        title: { en: "Numbers All Around Us", te: "మన చుట్టూ సంఖ్యలు" },
        description: { en: "Learn about numbers in daily life", te: "దైనందిన జీవితంలో సంఖ్యల గురించి తెలుసుకోండి" },
        notes: { en: "## Numbers All Around Us\n\n### Introduction\nNumbers are everywhere! We use them every day in counting, measuring, and calculating.\n\n### Types of Numbers\n- **Natural Numbers**: 1, 2, 3, 4... (counting numbers)\n- **Whole Numbers**: 0, 1, 2, 3... (natural numbers + zero)\n\n### Place Value\nFrom right to left:\n- Ones (1)\n- Tens (10)\n- Hundreds (100)\n- Thousands (1,000)\n- Ten Thousands (10,000)\n- Lakhs (1,00,000)\n\n### Uses of Numbers\n- Counting objects\n- Measuring distance, weight, time\n- Phone numbers, house numbers\n- Currency and prices", te: "## మన చుట్టూ సంఖ్యలు\n\n### పరిచయం\nసంఖ్యలు ప్రతిచోటా ఉన్నాయి! మనం ప్రతిరోజూ లెక్కించడం, కొలవడం మరియు లెక్కల్లో వాటిని ఉపయోగిస్తాం.\n\n### సంఖ్యల రకాలు\n- **సహజ సంఖ్యలు**: 1, 2, 3, 4...\n- **పూర్ణ సంఖ్యలు**: 0, 1, 2, 3...\n\n### స్థాన విలువ\nకుడి నుండి ఎడమకు:\n- ఒకట్లు, పదులు, వందలు, వేలు, పదివేలు, లక్షలు" },
        videoUrls: ["https://www.youtube.com/embed/videoseries?list=PLErI5R6nze_SM9glb3MvvXn-yUotfs_ed"],
        quiz: [
          { question: { en: "Which are counting numbers?", te: "లెక్కింపు సంఖ్యలు ఏవి?" }, options: [{ en: "Natural numbers", te: "సహజ సంఖ్యలు" }, { en: "Negative numbers", te: "రుణ సంఖ్యలు" }, { en: "Fractions", te: "భిన్నాలు" }, { en: "Decimals", te: "దశాంశాలు" }], correctIndex: 0 },
          { question: { en: "What is the smallest whole number?", te: "అతి చిన్న పూర్ణ సంఖ్య ఏది?" }, options: [{ en: "0", te: "0" }, { en: "1", te: "1" }, { en: "-1", te: "-1" }, { en: "10", te: "10" }], correctIndex: 0 },
          { question: { en: "Place value of 5 in 35,678?", te: "35,678 లో 5 యొక్క స్థాన విలువ?" }, options: [{ en: "5,000", te: "5,000" }, { en: "500", te: "500" }, { en: "50", te: "50" }, { en: "5", te: "5" }], correctIndex: 0 },
          { question: { en: "How many zeros in 1 lakh?", te: "1 లక్షలో ఎన్ని సున్నాలు?" }, options: [{ en: "5", te: "5" }, { en: "4", te: "4" }, { en: "6", te: "6" }, { en: "3", te: "3" }], correctIndex: 0 },
          { question: { en: "What comes after 99,999?", te: "99,999 తర్వాత ఏమి వస్తుంది?" }, options: [{ en: "1,00,000", te: "1,00,000" }, { en: "100,000", te: "100,000" }, { en: "99,998", te: "99,998" }, { en: "10,000", te: "10,000" }], correctIndex: 0 },
          { question: { en: "Successor of 2,999 is?", te: "2,999 యొక్క వారసుడు?" }, options: [{ en: "3,000", te: "3,000" }, { en: "2,998", te: "2,998" }, { en: "3,001", te: "3,001" }, { en: "2,900", te: "2,900" }], correctIndex: 0 },
          { question: { en: "Which is greater: 45,678 or 45,687?", te: "ఏది ఎక్కువ: 45,678 లేదా 45,687?" }, options: [{ en: "45,687", te: "45,687" }, { en: "45,678", te: "45,678" }, { en: "Both equal", te: "రెండూ సమానం" }, { en: "Cannot compare", te: "పోల్చలేము" }], correctIndex: 0 },
          { question: { en: "1 crore = how many lakhs?", te: "1 కోటి = ఎన్ని లక్షలు?" }, options: [{ en: "100", te: "100" }, { en: "10", te: "10" }, { en: "1000", te: "1000" }, { en: "50", te: "50" }], correctIndex: 0 },
          { question: { en: "Predecessor of 5,000 is?", te: "5,000 యొక్క పూర్వసూరి?" }, options: [{ en: "4,999", te: "4,999" }, { en: "5,001", te: "5,001" }, { en: "4,000", te: "4,000" }, { en: "4,900", te: "4,900" }], correctIndex: 0 },
          { question: { en: "Where do we see numbers daily?", te: "మనం ప్రతిరోజూ సంఖ్యలను ఎక్కడ చూస్తాం?" }, options: [{ en: "Everywhere - clocks, prices, phones", te: "ప్రతిచోటా - గడియారాలు, ధరలు, ఫోన్లు" }, { en: "Only in math class", te: "గణిత తరగతిలో మాత్రమే" }, { en: "Only in books", te: "పుస్తకాలలో మాత్రమే" }, { en: "Nowhere", te: "ఎక్కడా లేదు" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "Write 5 examples of where we use numbers daily", te: "మనం ప్రతిరోజూ సంఖ్యలను ఎక్కడ ఉపయోగిస్తామో 5 ఉదాహరణలు రాయండి" }, answer: { en: "Clock for time, prices in shops, phone numbers, house addresses, age", te: "సమయం కోసం గడియారం, దుకాణాల్లో ధరలు, ఫోన్ నంబర్లు, ఇంటి చిరునామాలు, వయస్సు" } },
          { question: { en: "Write the place value of each digit in 45,678", te: "45,678 లో ప్రతి అంకె యొక్క స్థాన విలువ రాయండి" }, answer: { en: "4=40,000; 5=5,000; 6=600; 7=70; 8=8", te: "4=40,000; 5=5,000; 6=600; 7=70; 8=8" } },
          { question: { en: "What is the difference between natural and whole numbers?", te: "సహజ మరియు పూర్ణ సంఖ్యల మధ్య తేడా ఏమిటి?" }, answer: { en: "Natural numbers start from 1, while whole numbers include 0", te: "సహజ సంఖ్యలు 1 నుండి ప్రారంభమవుతాయి, పూర్ణ సంఖ్యలు 0 ని కలిగి ఉంటాయి" } },
          { question: { en: "Write successor and predecessor of 10,000", te: "10,000 యొక్క వారసుడు మరియు పూర్వసూరిని రాయండి" }, answer: { en: "Successor: 10,001; Predecessor: 9,999", te: "వారసుడు: 10,001; పూర్వసూరి: 9,999" } },
          { question: { en: "Arrange in ascending order: 45,678; 45,876; 45,687", te: "ఆరోహణ క్రమంలో: 45,678; 45,876; 45,687" }, answer: { en: "45,678 < 45,687 < 45,876", te: "45,678 < 45,687 < 45,876" } },
          { question: { en: "Write the largest 5-digit number", te: "అతి పెద్ద 5 అంకెల సంఖ్య రాయండి" }, answer: { en: "99,999", te: "99,999" } },
          { question: { en: "Write the smallest 6-digit number", te: "అతి చిన్న 6 అంకెల సంఖ్య రాయండి" }, answer: { en: "1,00,000", te: "1,00,000" } },
          { question: { en: "How many lakhs in 1 crore?", te: "1 కోటిలో ఎన్ని లక్షలు?" }, answer: { en: "100 lakhs = 1 crore", te: "100 లక్షలు = 1 కోటి" } },
          { question: { en: "Write 56,789 in expanded form", te: "56,789 ను విస్తరణ రూపంలో రాయండి" }, answer: { en: "50,000 + 6,000 + 700 + 80 + 9", te: "50,000 + 6,000 + 700 + 80 + 9" } },
          { question: { en: "Round 78,456 to nearest thousand", te: "78,456 ను సమీప వేయికి సవరించండి" }, answer: { en: "78,000", te: "78,000" } }
        ]
      },
      {
        id: `whole-numbers-${grade}`,
        title: { en: "Whole Numbers", te: "పూర్ణ సంఖ్యలు" },
        description: { en: "Learn about whole numbers and their properties", te: "పూర్ణ సంఖ్యలు మరియు వాటి లక్షణాల గురించి తెలుసుకోండి" },
        notes: { en: "## Whole Numbers\n\n### Definition\nWhole numbers are 0, 1, 2, 3, 4, 5... They include zero and all natural numbers.\n\n### Properties\n1. **Closure Property**: Sum and product of whole numbers is always a whole number\n2. **Commutative Property**: a + b = b + a; a × b = b × a\n3. **Associative Property**: (a + b) + c = a + (b + c)\n4. **Distributive Property**: a × (b + c) = (a × b) + (a × c)\n\n### Number Line\nWhole numbers can be represented on a number line starting from 0", te: "## పూర్ణ సంఖ్యలు\n\n### నిర్వచనం\nపూర్ణ సంఖ్యలు 0, 1, 2, 3, 4, 5... అవి సున్నా మరియు అన్ని సహజ సంఖ్యలను కలిగి ఉంటాయి.\n\n### లక్షణాలు\n1. **మూసివేత లక్షణం**: పూర్ణ సంఖ్యల మొత్తం మరియు గుణకం ఎల్లప్పుడూ పూర్ణ సంఖ్య\n2. **మార్పిడి లక్షణం**: a + b = b + a\n3. **సంఘటిత లక్షణం**: (a + b) + c = a + (b + c)" },
        videoUrls: ["https://www.youtube.com/embed/videoseries?list=PLErI5R6nze_Rnj-oizXDuNDjBSmHZgbNy"],
        quiz: [
          { question: { en: "Which is the smallest whole number?", te: "అతి చిన్న పూర్ణ సంఖ్య ఏది?" }, options: [{ en: "0", te: "0" }, { en: "1", te: "1" }, { en: "-1", te: "-1" }, { en: "2", te: "2" }], correctIndex: 0 },
          { question: { en: "Whole numbers include?", te: "పూర్ణ సంఖ్యలు ఏమి కలిగి ఉంటాయి?" }, options: [{ en: "0 and all natural numbers", te: "0 మరియు అన్ని సహజ సంఖ్యలు" }, { en: "Only negative numbers", te: "రుణ సంఖ్యలు మాత్రమే" }, { en: "Only fractions", te: "భిన్నాలు మాత్రమే" }, { en: "Only decimals", te: "దశాంశాలు మాత్రమే" }], correctIndex: 0 },
          { question: { en: "5 + 3 = 3 + 5 shows which property?", te: "5 + 3 = 3 + 5 ఏ లక్షణాన్ని చూపిస్తుంది?" }, options: [{ en: "Commutative", te: "మార్పిడి" }, { en: "Associative", te: "సంఘటిత" }, { en: "Distributive", te: "పంపిణీ" }, { en: "Closure", te: "మూసివేత" }], correctIndex: 0 },
          { question: { en: "Is 0 a whole number?", te: "0 ఒక పూర్ణ సంఖ్యా?" }, options: [{ en: "Yes", te: "అవును" }, { en: "No", te: "లేదు" }, { en: "Sometimes", te: "కొన్నిసార్లు" }, { en: "Never", te: "ఎప్పుడూ కాదు" }], correctIndex: 0 },
          { question: { en: "What is 0 × 5?", te: "0 × 5 ఎంత?" }, options: [{ en: "0", te: "0" }, { en: "5", te: "5" }, { en: "50", te: "50" }, { en: "1", te: "1" }], correctIndex: 0 },
          { question: { en: "(2 + 3) + 4 = 2 + (3 + 4) shows?", te: "(2 + 3) + 4 = 2 + (3 + 4) ఏమి చూపిస్తుంది?" }, options: [{ en: "Associative property", te: "సంఘటిత లక్షణం" }, { en: "Commutative property", te: "మార్పిడి లక్షణం" }, { en: "Distributive property", te: "పంపిణీ లక్షణం" }, { en: "Closure property", te: "మూసివేత లక్షణం" }], correctIndex: 0 },
          { question: { en: "3 × (4 + 2) = (3 × 4) + (3 × 2) shows?", te: "3 × (4 + 2) = (3 × 4) + (3 × 2) ఏమి చూపిస్తుంది?" }, options: [{ en: "Distributive property", te: "పంపిణీ లక్షణం" }, { en: "Commutative property", te: "మార్పిడి లక్షణం" }, { en: "Associative property", te: "సంఘటిత లక్షణం" }, { en: "Closure property", te: "మూసివేత లక్షణం" }], correctIndex: 0 },
          { question: { en: "Sum of two whole numbers is always a?", te: "రెండు పూర్ణ సంఖ్యల మొత్తం ఎల్లప్పుడూ ఒక?" }, options: [{ en: "Whole number", te: "పూర్ణ సంఖ్య" }, { en: "Fraction", te: "భిన్నం" }, { en: "Decimal", te: "దశాంశం" }, { en: "Negative number", te: "రుణ సంఖ్య" }], correctIndex: 0 },
          { question: { en: "What is the successor of 99?", te: "99 యొక్క వారసుడు ఎంత?" }, options: [{ en: "100", te: "100" }, { en: "98", te: "98" }, { en: "999", te: "999" }, { en: "90", te: "90" }], correctIndex: 0 },
          { question: { en: "On a number line, which number is to the right of 5?", te: "సంఖ్య రేఖపై 5 కు కుడివైపు ఏ సంఖ్య ఉంది?" }, options: [{ en: "6", te: "6" }, { en: "4", te: "4" }, { en: "3", te: "3" }, { en: "0", te: "0" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "Define whole numbers with examples", te: "పూర్ణ సంఖ్యలను ఉదాహరణలతో నిర్వచించండి" }, answer: { en: "Whole numbers are 0, 1, 2, 3, 4, 5... They include zero and all natural numbers.", te: "పూర్ణ సంఖ్యలు 0, 1, 2, 3, 4, 5... అవి సున్నా మరియు అన్ని సహజ సంఖ్యలను కలిగి ఉంటాయి." } },
          { question: { en: "Explain commutative property with example", te: "మార్పిడి లక్షణాన్ని ఉదాహరణతో వివరించండి" }, answer: { en: "a + b = b + a. Example: 3 + 5 = 5 + 3 = 8", te: "a + b = b + a. ఉదాహరణ: 3 + 5 = 5 + 3 = 8" } },
          { question: { en: "Explain distributive property with example", te: "పంపిణీ లక్షణాన్ని ఉదాహరణతో వివరించండి" }, answer: { en: "a × (b + c) = (a × b) + (a × c). Example: 2 × (3 + 4) = (2 × 3) + (2 × 4) = 14", te: "a × (b + c) = (a × b) + (a × c). ఉదాహరణ: 2 × (3 + 4) = (2 × 3) + (2 × 4) = 14" } },
          { question: { en: "Find: 25 × 36 using distributive property", te: "పంపిణీ లక్షణం ఉపయోగించి కనుగొనండి: 25 × 36" }, answer: { en: "25 × 36 = 25 × (30 + 6) = (25 × 30) + (25 × 6) = 750 + 150 = 900", te: "25 × 36 = 25 × (30 + 6) = (25 × 30) + (25 × 6) = 750 + 150 = 900" } },
          { question: { en: "What is the difference between natural and whole numbers?", te: "సహజ మరియు పూర్ణ సంఖ్యల మధ్య తేడా ఏమిటి?" }, answer: { en: "Natural numbers: 1, 2, 3... (no zero). Whole numbers: 0, 1, 2, 3... (includes zero)", te: "సహజ సంఖ్యలు: 1, 2, 3... (సున్నా లేదు). పూర్ణ సంఖ్యలు: 0, 1, 2, 3... (సున్నా కలిగి ఉంటుంది)" } },
          { question: { en: "Verify: 8 × (5 + 3) = (8 × 5) + (8 × 3)", te: "నిరూపించండి: 8 × (5 + 3) = (8 × 5) + (8 × 3)" }, answer: { en: "LHS: 8 × 8 = 64. RHS: 40 + 24 = 64. LHS = RHS. Verified.", te: "ఎడమ వైపు: 8 × 8 = 64. కుడి వైపు: 40 + 24 = 64. ఎడమ = కుడి. నిరూపించబడింది." } },
          { question: { en: "Draw a number line showing whole numbers 0 to 10", te: "0 నుండి 10 వరకు పూర్ణ సంఖ్యలను చూపించే సంఖ్య రేఖ గీయండి" }, answer: { en: "Draw a line with points marked at 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10", te: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 వద్ద బిందువులతో రేఖ గీయండి" } },
          { question: { en: "Is subtraction commutative for whole numbers? Give example.", te: "పూర్ణ సంఖ్యలకు తీసివేత మార్పిడి లక్షణం కలిగి ఉందా? ఉదాహరణ ఇవ్వండి." }, answer: { en: "No. 5 - 3 = 2 but 3 - 5 = -2 (not a whole number)", te: "లేదు. 5 - 3 = 2 కానీ 3 - 5 = -2 (పూర్ణ సంఖ్య కాదు)" } },
          { question: { en: "Find the sum: 1 + 2 + 3 + ... + 10", te: "మొత్తం కనుగొనండి: 1 + 2 + 3 + ... + 10" }, answer: { en: "Using formula: n(n+1)/2 = 10 × 11/2 = 55", te: "సూత్రం ఉపయోగించి: n(n+1)/2 = 10 × 11/2 = 55" } },
          { question: { en: "Write 5 whole numbers between 10 and 20", te: "10 మరియు 20 మధ్య 5 పూర్ణ సంఖ్యలు రాయండి" }, answer: { en: "11, 12, 13, 14, 15", te: "11, 12, 13, 14, 15" } }
        ]
      },
      {
        id: `hcf-lcm-${grade}`,
        title: { en: "HCF and LCM", te: "గ.సా.భా మరియు క.సా.గు" },
        description: { en: "Learn about factors, multiples, HCF and LCM", te: "కారకాలు, గుణిజాలు, గ.సా.భా మరియు క.సా.గు గురించి తెలుసుకోండి" },
        notes: { en: "## HCF and LCM\n\n### Factors\nNumbers that divide a given number exactly. Factors of 12: 1, 2, 3, 4, 6, 12\n\n### Multiples\nProducts of a number with natural numbers. Multiples of 3: 3, 6, 9, 12, 15...\n\n### HCF (Highest Common Factor)\nThe largest factor common to two or more numbers.\n\n### LCM (Least Common Multiple)\nThe smallest multiple common to two or more numbers.\n\n### Methods\n1. **Prime Factorization Method**\n2. **Division Method**\n\n### Relationship\nHCF × LCM = Product of two numbers", te: "## గ.సా.భా మరియు క.సా.గు\n\n### కారకాలు\nఇచ్చిన సంఖ్యను ఖచ్చితంగా భాగించే సంఖ్యలు. 12 కారకాలు: 1, 2, 3, 4, 6, 12\n\n### గుణిజాలు\nసహజ సంఖ్యలతో సంఖ్య గుణకాలు. 3 గుణిజాలు: 3, 6, 9, 12, 15...\n\n### గ.సా.భా\nరెండు లేదా అంతకంటే ఎక్కువ సంఖ్యలకు సాధారణమైన అతిపెద్ద కారకం.\n\n### సంబంధం\nగ.సా.భా × క.సా.గు = రెండు సంఖ్యల లబ్ధం" },
        videoUrls: ["https://www.youtube.com/embed/videoseries?list=PLErI5R6nze_RJRZJQBYNup6wYZxAiDVJa"],
        quiz: [
          { question: { en: "HCF of 12 and 18 is?", te: "12 మరియు 18 యొక్క గ.సా.భా?" }, options: [{ en: "6", te: "6" }, { en: "3", te: "3" }, { en: "36", te: "36" }, { en: "12", te: "12" }], correctIndex: 0 },
          { question: { en: "LCM of 4 and 6 is?", te: "4 మరియు 6 యొక్క క.సా.గు?" }, options: [{ en: "12", te: "12" }, { en: "24", te: "24" }, { en: "2", te: "2" }, { en: "6", te: "6" }], correctIndex: 0 },
          { question: { en: "Factors of 15 are?", te: "15 యొక్క కారకాలు?" }, options: [{ en: "1, 3, 5, 15", te: "1, 3, 5, 15" }, { en: "1, 2, 3, 5", te: "1, 2, 3, 5" }, { en: "3, 5, 15", te: "3, 5, 15" }, { en: "1, 15", te: "1, 15" }], correctIndex: 0 },
          { question: { en: "First 3 multiples of 5 are?", te: "5 యొక్క మొదటి 3 గుణిజాలు?" }, options: [{ en: "5, 10, 15", te: "5, 10, 15" }, { en: "1, 2, 3", te: "1, 2, 3" }, { en: "5, 25, 125", te: "5, 25, 125" }, { en: "10, 15, 20", te: "10, 15, 20" }], correctIndex: 0 },
          { question: { en: "HCF × LCM = ?", te: "గ.సా.భా × క.సా.గు = ?" }, options: [{ en: "Product of two numbers", te: "రెండు సంఖ్యల లబ్ధం" }, { en: "Sum of two numbers", te: "రెండు సంఖ్యల మొత్తం" }, { en: "Difference", te: "తేడా" }, { en: "Quotient", te: "భాగఫలం" }], correctIndex: 0 },
          { question: { en: "Which number is prime?", te: "ఏ సంఖ్య ప్రధాన సంఖ్య?" }, options: [{ en: "7", te: "7" }, { en: "9", te: "9" }, { en: "15", te: "15" }, { en: "21", te: "21" }], correctIndex: 0 },
          { question: { en: "HCF of co-prime numbers is?", te: "పరస్పర ప్రధాన సంఖ్యల గ.సా.భా?" }, options: [{ en: "1", te: "1" }, { en: "0", te: "0" }, { en: "Product", te: "లబ్ధం" }, { en: "Sum", te: "మొత్తం" }], correctIndex: 0 },
          { question: { en: "LCM of 3 and 5 is?", te: "3 మరియు 5 యొక్క క.సా.గు?" }, options: [{ en: "15", te: "15" }, { en: "8", te: "8" }, { en: "1", te: "1" }, { en: "30", te: "30" }], correctIndex: 0 },
          { question: { en: "Which is a composite number?", te: "ఏది సంయుక్త సంఖ్య?" }, options: [{ en: "12", te: "12" }, { en: "7", te: "7" }, { en: "11", te: "11" }, { en: "13", te: "13" }], correctIndex: 0 },
          { question: { en: "The smallest prime number is?", te: "అతి చిన్న ప్రధాన సంఖ్య?" }, options: [{ en: "2", te: "2" }, { en: "1", te: "1" }, { en: "3", te: "3" }, { en: "0", te: "0" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "Find HCF of 24 and 36 by prime factorization", te: "ప్రధాన కారకాల పద్ధతిలో 24 మరియు 36 యొక్క గ.సా.భా కనుగొనండి" }, answer: { en: "24 = 2³ × 3; 36 = 2² × 3². HCF = 2² × 3 = 12", te: "24 = 2³ × 3; 36 = 2² × 3². గ.సా.భా = 2² × 3 = 12" } },
          { question: { en: "Find LCM of 12 and 18", te: "12 మరియు 18 యొక్క క.సా.గు కనుగొనండి" }, answer: { en: "12 = 2² × 3; 18 = 2 × 3². LCM = 2² × 3² = 36", te: "12 = 2² × 3; 18 = 2 × 3². క.సా.గు = 2² × 3² = 36" } },
          { question: { en: "List all factors of 36", te: "36 యొక్క అన్ని కారకాలను జాబితా చేయండి" }, answer: { en: "1, 2, 3, 4, 6, 9, 12, 18, 36", te: "1, 2, 3, 4, 6, 9, 12, 18, 36" } },
          { question: { en: "Write first 5 multiples of 7", te: "7 యొక్క మొదటి 5 గుణిజాలు రాయండి" }, answer: { en: "7, 14, 21, 28, 35", te: "7, 14, 21, 28, 35" } },
          { question: { en: "If HCF of two numbers is 4 and LCM is 48, find the product", te: "రెండు సంఖ్యల గ.సా.భా 4 మరియు క.సా.గు 48 అయితే, లబ్ధం కనుగొనండి" }, answer: { en: "Product = HCF × LCM = 4 × 48 = 192", te: "లబ్ధం = గ.సా.భా × క.సా.గు = 4 × 48 = 192" } },
          { question: { en: "Are 8 and 15 co-prime? Why?", te: "8 మరియు 15 పరస్పర ప్రధాన సంఖ్యలా? ఎందుకు?" }, answer: { en: "Yes, because their HCF is 1. They have no common factor other than 1.", te: "అవును, వాటి గ.సా.భా 1 కాబట్టి. వాటికి 1 తప్ప సాధారణ కారకం లేదు." } },
          { question: { en: "Find the least number divisible by both 12 and 15", te: "12 మరియు 15 రెండింటిచేత భాగించబడే అతి చిన్న సంఖ్య కనుగొనండి" }, answer: { en: "LCM of 12 and 15 = 60", te: "12 మరియు 15 యొక్క క.సా.గు = 60" } },
          { question: { en: "Write all prime numbers between 10 and 30", te: "10 మరియు 30 మధ్య అన్ని ప్రధాన సంఖ్యలు రాయండి" }, answer: { en: "11, 13, 17, 19, 23, 29", te: "11, 13, 17, 19, 23, 29" } },
          { question: { en: "Find HCF and LCM of 15 and 25", te: "15 మరియు 25 యొక్క గ.సా.భా మరియు క.సా.గు కనుగొనండి" }, answer: { en: "HCF = 5; LCM = 75", te: "గ.సా.భా = 5; క.సా.గు = 75" } },
          { question: { en: "Verify: HCF × LCM = Product for 6 and 8", te: "నిరూపించండి: 6 మరియు 8 కోసం గ.సా.భా × క.సా.గు = లబ్ధం" }, answer: { en: "HCF = 2, LCM = 24. HCF × LCM = 2 × 24 = 48 = 6 × 8. Verified.", te: "గ.సా.భా = 2, క.సా.గు = 24. గ.సా.భా × క.సా.గు = 2 × 24 = 48 = 6 × 8. నిరూపించబడింది." } }
        ]
      },
      {
        id: `integers-${grade}`,
        title: { en: "Integers", te: "పూర్ణాంకాలు" },
        description: { en: "Learn about positive and negative numbers", te: "ధన మరియు రుణ సంఖ్యల గురించి తెలుసుకోండి" },
        notes: { en: "## Integers\n\n### Definition\nIntegers include all whole numbers and their negatives: ...-3, -2, -1, 0, 1, 2, 3...\n\n### Types\n- **Positive Integers**: 1, 2, 3, 4...\n- **Negative Integers**: -1, -2, -3, -4...\n- **Zero**: Neither positive nor negative\n\n### Number Line\nNegative numbers are to the left of zero, positive to the right.\n\n### Rules for Operations\n- Adding a negative = Subtracting\n- Subtracting a negative = Adding\n- Negative × Negative = Positive\n- Negative × Positive = Negative", te: "## పూర్ణాంకాలు\n\n### నిర్వచనం\nపూర్ణాంకాలు అన్ని పూర్ణ సంఖ్యలు మరియు వాటి రుణాలను కలిగి ఉంటాయి: ...-3, -2, -1, 0, 1, 2, 3...\n\n### రకాలు\n- **ధన పూర్ణాంకాలు**: 1, 2, 3, 4...\n- **రుణ పూర్ణాంకాలు**: -1, -2, -3, -4...\n- **సున్నా**: ధన లేదా రుణ కాదు\n\n### కార్యకలాపాల నియమాలు\n- రుణాన్ని కూడటం = తీసివేయడం\n- రుణ × రుణ = ధన\n- రుణ × ధన = రుణ" },
        videoUrls: ["https://www.youtube.com/embed/videoseries?list=PLErI5R6nze_SC4b2ThfNxgGl3siVzFgu3"],
        quiz: [
          { question: { en: "Which is a negative integer?", te: "ఏది రుణ పూర్ణాంకం?" }, options: [{ en: "-5", te: "-5" }, { en: "5", te: "5" }, { en: "0", te: "0" }, { en: "1/2", te: "1/2" }], correctIndex: 0 },
          { question: { en: "Zero is?", te: "సున్నా ఏమిటి?" }, options: [{ en: "Neither positive nor negative", te: "ధన లేదా రుణ కాదు" }, { en: "Positive", te: "ధన" }, { en: "Negative", te: "రుణ" }, { en: "Not an integer", te: "పూర్ణాంకం కాదు" }], correctIndex: 0 },
          { question: { en: "(-3) + (-2) = ?", te: "(-3) + (-2) = ?" }, options: [{ en: "-5", te: "-5" }, { en: "5", te: "5" }, { en: "-1", te: "-1" }, { en: "1", te: "1" }], correctIndex: 0 },
          { question: { en: "(-4) × (-3) = ?", te: "(-4) × (-3) = ?" }, options: [{ en: "12", te: "12" }, { en: "-12", te: "-12" }, { en: "-7", te: "-7" }, { en: "7", te: "7" }], correctIndex: 0 },
          { question: { en: "5 - (-3) = ?", te: "5 - (-3) = ?" }, options: [{ en: "8", te: "8" }, { en: "2", te: "2" }, { en: "-8", te: "-8" }, { en: "-2", te: "-2" }], correctIndex: 0 },
          { question: { en: "On number line, -3 is on which side of 0?", te: "సంఖ్య రేఖపై, -3 సున్నాకు ఏ వైపు ఉంది?" }, options: [{ en: "Left", te: "ఎడమ" }, { en: "Right", te: "కుడి" }, { en: "Above", te: "పైన" }, { en: "Below", te: "క్రింద" }], correctIndex: 0 },
          { question: { en: "Which is greater: -2 or -5?", te: "ఏది ఎక్కువ: -2 లేదా -5?" }, options: [{ en: "-2", te: "-2" }, { en: "-5", te: "-5" }, { en: "Equal", te: "సమానం" }, { en: "Cannot compare", te: "పోల్చలేము" }], correctIndex: 0 },
          { question: { en: "(-6) ÷ (-2) = ?", te: "(-6) ÷ (-2) = ?" }, options: [{ en: "3", te: "3" }, { en: "-3", te: "-3" }, { en: "4", te: "4" }, { en: "-4", te: "-4" }], correctIndex: 0 },
          { question: { en: "Additive inverse of 7 is?", te: "7 యొక్క కూడిక విలోమం?" }, options: [{ en: "-7", te: "-7" }, { en: "7", te: "7" }, { en: "0", te: "0" }, { en: "1/7", te: "1/7" }], correctIndex: 0 },
          { question: { en: "(-8) × 2 = ?", te: "(-8) × 2 = ?" }, options: [{ en: "-16", te: "-16" }, { en: "16", te: "16" }, { en: "-10", te: "-10" }, { en: "10", te: "10" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "Define integers with examples", te: "పూర్ణాంకాలను ఉదాహరణలతో నిర్వచించండి" }, answer: { en: "Integers are whole numbers and their negatives: ...-3, -2, -1, 0, 1, 2, 3...", te: "పూర్ణాంకాలు పూర్ణ సంఖ్యలు మరియు వాటి రుణాలు: ...-3, -2, -1, 0, 1, 2, 3..." } },
          { question: { en: "Calculate: (-5) + 8", te: "లెక్కించండి: (-5) + 8" }, answer: { en: "(-5) + 8 = 3", te: "(-5) + 8 = 3" } },
          { question: { en: "Calculate: (-7) - (-3)", te: "లెక్కించండి: (-7) - (-3)" }, answer: { en: "(-7) - (-3) = (-7) + 3 = -4", te: "(-7) - (-3) = (-7) + 3 = -4" } },
          { question: { en: "Calculate: (-4) × 5", te: "లెక్కించండి: (-4) × 5" }, answer: { en: "(-4) × 5 = -20", te: "(-4) × 5 = -20" } },
          { question: { en: "Arrange in ascending order: 3, -5, 0, -2, 7", te: "ఆరోహణ క్రమంలో: 3, -5, 0, -2, 7" }, answer: { en: "-5 < -2 < 0 < 3 < 7", te: "-5 < -2 < 0 < 3 < 7" } },
          { question: { en: "Find the additive inverse of -15", te: "-15 యొక్క కూడిక విలోమం కనుగొనండి" }, answer: { en: "Additive inverse of -15 is 15 (because -15 + 15 = 0)", te: "-15 యొక్క కూడిక విలోమం 15 (ఎందుకంటే -15 + 15 = 0)" } },
          { question: { en: "A submarine was at -200m, it rose by 50m. Where is it now?", te: "ఒక జలాంతర్గామి -200మీ లో ఉంది, అది 50మీ పెరిగింది. ఇప్పుడు ఎక్కడ ఉంది?" }, answer: { en: "-200 + 50 = -150m. It is at 150m below sea level.", te: "-200 + 50 = -150మీ. ఇది సముద్ర మట్టానికి 150మీ క్రింద ఉంది." } },
          { question: { en: "The temperature dropped from 5°C to -8°C. Find the change.", te: "ఉష్ణోగ్రత 5°C నుండి -8°C కు పడిపోయింది. మార్పు కనుగొనండి." }, answer: { en: "Change = -8 - 5 = -13°C (dropped by 13 degrees)", te: "మార్పు = -8 - 5 = -13°C (13 డిగ్రీలు పడిపోయింది)" } },
          { question: { en: "Calculate: (-12) ÷ 4", te: "లెక్కించండి: (-12) ÷ 4" }, answer: { en: "(-12) ÷ 4 = -3", te: "(-12) ÷ 4 = -3" } },
          { question: { en: "Why is (-3) × (-3) = 9 (positive)?", te: "(-3) × (-3) = 9 (ధన) ఎందుకు?" }, answer: { en: "Because negative × negative = positive. The product of two negative numbers is always positive.", te: "ఎందుకంటే రుణ × రుణ = ధన. రెండు రుణ సంఖ్యల లబ్ధం ఎల్లప్పుడూ ధనాత్మకం." } }
        ]
      }
    ] : [
      {
        id: `integers-${grade}`,
        title: { en: "Integers", te: "పూర్ణాంకాలు" },
        description: { en: "Learn about positive and negative integers", te: "ధన మరియు రుణ పూర్ణాంకాల గురించి తెలుసుకోండి" },
        notes: { en: "## Integers\n\n### Definition\nIntegers are whole numbers including positive, negative, and zero: ...-3, -2, -1, 0, 1, 2, 3...\n\n### Types of Integers\n- **Positive Integers**: 1, 2, 3, 4... (to the right of 0 on number line)\n- **Negative Integers**: -1, -2, -3, -4... (to the left of 0)\n- **Zero**: Neither positive nor negative\n\n### Operations with Integers\n- Adding two positive integers gives positive\n- Adding two negative integers gives negative\n- Multiplying two negatives gives positive\n- Multiplying positive and negative gives negative\n\n### Number Line\nIntegers can be represented on a number line with 0 in the center.", te: "## పూర్ణాంకాలు\n\n### నిర్వచనం\nపూర్ణాంకాలు ధన, రుణ మరియు సున్నా సహా పూర్ణ సంఖ్యలు: ...-3, -2, -1, 0, 1, 2, 3...\n\n### పూర్ణాంకాల రకాలు\n- **ధన పూర్ణాంకాలు**: 1, 2, 3, 4...\n- **రుణ పూర్ణాంకాలు**: -1, -2, -3, -4...\n- **సున్నా**: ధన లేదా రుణ కాదు\n\n### పూర్ణాంకాలతో కార్యకలాపాలు\n- రెండు ధన పూర్ణాంకాల మొత్తం ధన\n- రెండు రుణ పూర్ణాంకాల మొత్తం రుణ\n- రెండు రుణాల గుణకం ధన" },
        videoUrls: ["https://www.youtube.com/embed/videoseries?list=PLzI2dBioyh2jQYJDwExv43-ChouayAw_f"],
        quiz: [
          { question: { en: "What are integers?", te: "పూర్ణాంకాలు అంటే ఏమిటి?" }, options: [{ en: "Whole numbers including negatives", te: "రుణాలతో సహా పూర్ణ సంఖ్యలు" }, { en: "Only positive numbers", te: "ధన సంఖ్యలు మాత్రమే" }, { en: "Only fractions", te: "భిన్నాలు మాత్రమే" }, { en: "Only decimals", te: "దశాంశాలు మాత్రమే" }], correctIndex: 0 },
          { question: { en: "Which is a negative integer?", te: "ఏది రుణ పూర్ణాంకం?" }, options: [{ en: "-7", te: "-7" }, { en: "7", te: "7" }, { en: "0", te: "0" }, { en: "1/2", te: "1/2" }], correctIndex: 0 },
          { question: { en: "Zero is?", te: "సున్నా ఏమిటి?" }, options: [{ en: "Neither positive nor negative", te: "ధన లేదా రుణ కాదు" }, { en: "Positive", te: "ధన" }, { en: "Negative", te: "రుణ" }, { en: "Not a number", te: "సంఖ్య కాదు" }], correctIndex: 0 },
          { question: { en: "(-5) + (-3) = ?", te: "(-5) + (-3) = ?" }, options: [{ en: "-8", te: "-8" }, { en: "8", te: "8" }, { en: "-2", te: "-2" }, { en: "2", te: "2" }], correctIndex: 0 },
          { question: { en: "(-4) × (-2) = ?", te: "(-4) × (-2) = ?" }, options: [{ en: "8", te: "8" }, { en: "-8", te: "-8" }, { en: "-6", te: "-6" }, { en: "6", te: "6" }], correctIndex: 0 },
          { question: { en: "7 + (-3) = ?", te: "7 + (-3) = ?" }, options: [{ en: "4", te: "4" }, { en: "-4", te: "-4" }, { en: "10", te: "10" }, { en: "-10", te: "-10" }], correctIndex: 0 },
          { question: { en: "On a number line, -5 is to the ___ of 0", te: "సంఖ్య రేఖపై, -5 సున్నాకు ___ ఉంది" }, options: [{ en: "Left", te: "ఎడమ" }, { en: "Right", te: "కుడి" }, { en: "Above", te: "పైన" }, { en: "Below", te: "క్రింద" }], correctIndex: 0 },
          { question: { en: "Which is greater: -3 or -7?", te: "ఏది ఎక్కువ: -3 లేదా -7?" }, options: [{ en: "-3", te: "-3" }, { en: "-7", te: "-7" }, { en: "Both equal", te: "రెండూ సమానం" }, { en: "Cannot compare", te: "పోల్చలేము" }], correctIndex: 0 },
          { question: { en: "Additive inverse of 5 is?", te: "5 యొక్క కూడిక విలోమం?" }, options: [{ en: "-5", te: "-5" }, { en: "5", te: "5" }, { en: "0", te: "0" }, { en: "1", te: "1" }], correctIndex: 0 },
          { question: { en: "(-10) ÷ 2 = ?", te: "(-10) ÷ 2 = ?" }, options: [{ en: "-5", te: "-5" }, { en: "5", te: "5" }, { en: "-8", te: "-8" }, { en: "8", te: "8" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "Define integers with examples", te: "పూర్ణాంకాలను ఉదాహరణలతో నిర్వచించండి" }, answer: { en: "Integers are whole numbers including positive, negative, and zero. Examples: -3, -2, -1, 0, 1, 2, 3", te: "పూర్ణాంకాలు ధన, రుణ మరియు సున్నా సహా పూర్ణ సంఖ్యలు. ఉదాహరణలు: -3, -2, -1, 0, 1, 2, 3" } },
          { question: { en: "Calculate: (-6) + 9", te: "లెక్కించండి: (-6) + 9" }, answer: { en: "(-6) + 9 = 3", te: "(-6) + 9 = 3" } },
          { question: { en: "Calculate: (-8) - (-4)", te: "లెక్కించండి: (-8) - (-4)" }, answer: { en: "(-8) - (-4) = (-8) + 4 = -4", te: "(-8) - (-4) = (-8) + 4 = -4" } },
          { question: { en: "Calculate: (-5) × 3", te: "లెక్కించండి: (-5) × 3" }, answer: { en: "(-5) × 3 = -15", te: "(-5) × 3 = -15" } },
          { question: { en: "Arrange in ascending order: 2, -4, 0, -1, 5", te: "ఆరోహణ క్రమంలో: 2, -4, 0, -1, 5" }, answer: { en: "-4 < -1 < 0 < 2 < 5", te: "-4 < -1 < 0 < 2 < 5" } },
          { question: { en: "Find the additive inverse of -12", te: "-12 యొక్క కూడిక విలోమం కనుగొనండి" }, answer: { en: "Additive inverse of -12 is 12 (because -12 + 12 = 0)", te: "-12 యొక్క కూడిక విలోమం 12 (ఎందుకంటే -12 + 12 = 0)" } },
          { question: { en: "The temperature was -5°C, it increased by 8°C. What is it now?", te: "ఉష్ణోగ్రత -5°C ఉంది, అది 8°C పెరిగింది. ఇప్పుడు ఏమిటి?" }, answer: { en: "-5 + 8 = 3°C", te: "-5 + 8 = 3°C" } },
          { question: { en: "Calculate: (-15) ÷ (-5)", te: "లెక్కించండి: (-15) ÷ (-5)" }, answer: { en: "(-15) ÷ (-5) = 3", te: "(-15) ÷ (-5) = 3" } },
          { question: { en: "Why is (-2) × (-4) = 8 (positive)?", te: "(-2) × (-4) = 8 (ధన) ఎందుకు?" }, answer: { en: "Because negative × negative = positive. The product of two negative numbers is always positive.", te: "ఎందుకంటే రుణ × రుణ = ధన. రెండు రుణ సంఖ్యల లబ్ధం ఎల్లప్పుడూ ధనాత్మకం." } },
          { question: { en: "Draw a number line and mark: -3, 0, 2, -1, 4", te: "సంఖ్య రేఖ గీసి గుర్తించండి: -3, 0, 2, -1, 4" }, answer: { en: "Draw a horizontal line, mark 0 in center, negative numbers to left (-3, -1), positive to right (2, 4)", te: "క్షితిజ సమాంతర రేఖ గీయండి, మధ్యలో 0 గుర్తించండి, ఎడమకు రుణ సంఖ్యలు (-3, -1), కుడికి ధన (2, 4)" } }
        ]
      },
      {
        id: `fractions-${grade}`,
        title: { en: "Fractions", te: "భిన్నాలు" },
        description: { en: "Understanding parts of a whole", te: "మొత్తం యొక్క భాగాలను అర్థం చేసుకోవడం" },
        notes: { en: "## Fractions\n\n### What is a Fraction?\nA fraction represents a part of a whole:\n- **Numerator** (top): Parts we have\n- **Denominator** (bottom): Total equal parts\n\n### Types of Fractions\n1. **Proper Fraction**: Numerator < Denominator (3/4)\n2. **Improper Fraction**: Numerator ≥ Denominator (5/3)\n3. **Mixed Number**: Whole number + Fraction (2½)", te: "## భిన్నాలు\n\n### భిన్నం అంటే ఏమిటి?\nభిన్నం మొత్తం యొక్క భాగాన్ని సూచిస్తుంది:\n- **లవం** (పై): మనకు ఉన్న భాగాలు\n- **హారం** (క్రింద): మొత్తం సమాన భాగాలు" },
        quiz: generateMathQuiz('fractions', grade),
        practice: generateMathPractice('fractions', grade)
      },
      {
        id: `geometry-${grade}`,
        title: { en: "Basic Geometry", te: "ప్రాథమిక రేఖాగణితం" },
        description: { en: "Learn shapes and their properties", te: "ఆకారాలు మరియు వాటి లక్షణాలు నేర్చుకోండి" },
        notes: { en: "## Basic Geometry\n\n### Basic Shapes\n- Triangle: 3 sides\n- Square: 4 equal sides\n- Rectangle: 4 sides (opposite equal)\n- Circle: No sides, curved\n\n### Angles\n- Acute: Less than 90°\n- Right: Exactly 90°\n- Obtuse: More than 90°", te: "## ప్రాథమిక రేఖాగణితం\n\n### ప్రాథమిక ఆకారాలు\n- త్రిభుజం: 3 భుజాలు\n- చతురస్రం: 4 సమాన భుజాలు\n- దీర్ఘచతురస్రం: 4 భుజాలు" },
        quiz: generateMathQuiz('geometry', grade),
        practice: generateMathPractice('geometry', grade)
      }
    ]
  },
  {
    id: `science-${grade}`,
    title: { en: "Science", te: "సైన్స్" },
    icon: "FlaskConical",
    color: "game-green",
    chapters: [
      {
        id: `food-${grade}`,
        title: { en: "Food: Where Does It Come From?", te: "ఆహారం: ఎక్కడ నుండి వస్తుంది?" },
        description: { en: "Learn about sources of food", te: "ఆహార వనరుల గురించి తెలుసుకోండి" },
        notes: { en: "## Food: Where Does It Come From?\n\n### Sources of Food\n**Plants:** Fruits, Vegetables, Grains, Pulses\n**Animals:** Milk, Eggs, Meat, Honey\n\n### Food Habits\n- **Herbivores**: Eat plants (cow, deer)\n- **Carnivores**: Eat meat (lion, tiger)\n- **Omnivores**: Eat both (humans, bear)", te: "## ఆహారం: ఎక్కడ నుండి వస్తుంది?\n\n### ఆహార వనరులు\n**మొక్కలు:** పండ్లు, కూరగాయలు, ధాన్యాలు\n**జంతువులు:** పాలు, గుడ్లు, మాంసం, తేనె" },
        videoUrls: grade === 6 ? ["https://www.youtube.com/embed/gvytBpZbcZs"] : ["https://www.youtube.com/embed/oP2sbq9G5PI"],
        quiz: generateScienceQuiz('food'),
        practice: generateSciencePractice('food')
      },
      {
        id: `living-${grade}`,
        title: { en: "Living and Non-Living", te: "సజీవ మరియు నిర్జీవ" },
        description: { en: "Characteristics of living things", te: "సజీవుల లక్షణాలు" },
        notes: { en: "## Living and Non-Living\n\n### Characteristics of Living Things\n1. Growth\n2. Reproduction\n3. Respiration\n4. Movement\n5. Response to stimuli\n6. Excretion\n7. Need for food\n\n### Examples\n**Living:** Plants, Animals, Humans\n**Non-Living:** Rocks, Water, Air", te: "## సజీవ మరియు నిర్జీవ\n\n### సజీవుల లక్షణాలు\n1. పెరుగుదల\n2. ప్రత్యుత్పత్తి\n3. శ్వాసక్రియ\n4. చలనం\n5. ఉద్దీపనలకు స్పందన" },
        quiz: generateScienceQuiz('living'),
        practice: generateSciencePractice('living')
      },
      {
        id: `matter-${grade}`,
        title: { en: "States of Matter", te: "పదార్థ స్థితులు" },
        description: { en: "Solid, liquid, and gas", te: "ఘనం, ద్రవం మరియు వాయువు" },
        notes: { en: "## States of Matter\n\n### Three States\n1. **Solid**: Fixed shape, fixed volume\n2. **Liquid**: No fixed shape, fixed volume\n3. **Gas**: No fixed shape, no fixed volume\n\n### Changes of State\n- Melting: Solid → Liquid\n- Boiling: Liquid → Gas\n- Condensation: Gas → Liquid\n- Freezing: Liquid → Solid", te: "## పదార్థ స్థితులు\n\n### మూడు స్థితులు\n1. **ఘనం**: స్థిర ఆకారం, స్థిర పరిమాణం\n2. **ద్రవం**: స్థిర ఆకారం లేదు, స్థిర పరిమాణం\n3. **వాయువు**: స్థిర ఆకారం లేదు, స్థిర పరిమాణం లేదు" },
        quiz: generateScienceQuiz('matter'),
        practice: generateSciencePractice('matter')
      }
    ]
  },
  {
    id: `social-${grade}`,
    title: { en: "Social Studies", te: "సామాజిక శాస్త్రం" },
    icon: "Globe",
    color: "game-yellow",
    chapters: grade === 6 ? [
      {
        id: `earth-solar-system-${grade}`,
        title: { en: "Our Earth in the Solar System", te: "సౌర వ్యవస్థలో మన భూమి" },
        description: { en: "Learn about Earth's place in the solar system", te: "సౌర వ్యవస్థలో భూమి స్థానం గురించి తెలుసుకోండి" },
        notes: { en: "## Our Earth in the Solar System\n\n### The Solar System\nOur solar system consists of the Sun and all objects that orbit around it.\n\n### Components\n- **Sun**: The star at the center\n- **Planets**: 8 planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)\n- **Moon**: Earth's natural satellite\n- **Asteroids, Comets, Meteors**\n\n### Earth's Position\n- 3rd planet from the Sun\n- Only planet with life\n- Has one moon\n- 365.25 days to orbit the Sun\n\n### Day and Night\nCaused by Earth's rotation on its axis (24 hours)", te: "## సౌర వ్యవస్థలో మన భూమి\n\n### సౌర వ్యవస్థ\nమన సౌర వ్యవస్థ సూర్యుడు మరియు దాని చుట్టూ తిరిగే అన్ని వస్తువులను కలిగి ఉంటుంది.\n\n### భాగాలు\n- **సూర్యుడు**: కేంద్రంలో ఉన్న నక్షత్రం\n- **గ్రహాలు**: 8 గ్రహాలు\n- **చంద్రుడు**: భూమి యొక్క సహజ ఉపగ్రహం\n\n### భూమి స్థానం\n- సూర్యుడి నుండి 3వ గ్రహం\n- జీవం ఉన్న ఏకైక గ్రహం" },
        videoUrls: ["https://www.youtube.com/embed/4swXeNKl8B8"],
        quiz: [
          { question: { en: "How many planets are in our solar system?", te: "మన సౌర వ్యవస్థలో ఎన్ని గ్రహాలు ఉన్నాయి?" }, options: [{ en: "8", te: "8" }, { en: "9", te: "9" }, { en: "7", te: "7" }, { en: "10", te: "10" }], correctIndex: 0 },
          { question: { en: "Which planet is closest to the Sun?", te: "సూర్యునికి సమీపంలో ఉన్న గ్రహం ఏది?" }, options: [{ en: "Mercury", te: "బుధుడు" }, { en: "Venus", te: "శుక్రుడు" }, { en: "Earth", te: "భూమి" }, { en: "Mars", te: "కుజుడు" }], correctIndex: 0 },
          { question: { en: "Earth is the ___ planet from the Sun", te: "భూమి సూర్యుడి నుండి ___ గ్రహం" }, options: [{ en: "3rd", te: "3వ" }, { en: "1st", te: "1వ" }, { en: "4th", te: "4వ" }, { en: "2nd", te: "2వ" }], correctIndex: 0 },
          { question: { en: "What causes day and night?", te: "పగలు మరియు రాత్రికి కారణం ఏమిటి?" }, options: [{ en: "Earth's rotation", te: "భూమి భ్రమణం" }, { en: "Earth's revolution", te: "భూమి పరిభ్రమణం" }, { en: "Moon's movement", te: "చంద్రుడి చలనం" }, { en: "Sun's movement", te: "సూర్యుడి చలనం" }], correctIndex: 0 },
          { question: { en: "How long does Earth take to rotate once?", te: "భూమి ఒకసారి తిరగడానికి ఎంత సమయం పడుతుంది?" }, options: [{ en: "24 hours", te: "24 గంటలు" }, { en: "12 hours", te: "12 గంటలు" }, { en: "365 days", te: "365 రోజులు" }, { en: "30 days", te: "30 రోజులు" }], correctIndex: 0 },
          { question: { en: "What is the star at the center of our solar system?", te: "మన సౌర వ్యవస్థ కేంద్రంలో ఉన్న నక్షత్రం ఏది?" }, options: [{ en: "Sun", te: "సూర్యుడు" }, { en: "Moon", te: "చంద్రుడు" }, { en: "Earth", te: "భూమి" }, { en: "Mars", te: "కుజుడు" }], correctIndex: 0 },
          { question: { en: "Which is the largest planet?", te: "అతిపెద్ద గ్రహం ఏది?" }, options: [{ en: "Jupiter", te: "బృహస్పతి" }, { en: "Saturn", te: "శని" }, { en: "Earth", te: "భూమి" }, { en: "Neptune", te: "నెప్ట్యూన్" }], correctIndex: 0 },
          { question: { en: "Earth has how many natural satellites?", te: "భూమికి ఎన్ని సహజ ఉపగ్రహాలు ఉన్నాయి?" }, options: [{ en: "1", te: "1" }, { en: "2", te: "2" }, { en: "0", te: "0" }, { en: "3", te: "3" }], correctIndex: 0 },
          { question: { en: "How many days does Earth take to orbit the Sun?", te: "భూమి సూర్యుడి చుట్టూ తిరగడానికి ఎన్ని రోజులు పడతాయి?" }, options: [{ en: "365", te: "365" }, { en: "30", te: "30" }, { en: "24", te: "24" }, { en: "12", te: "12" }], correctIndex: 0 },
          { question: { en: "Which planet is known for its rings?", te: "ఏ గ్రహం దాని వలయాలకు ప్రసిద్ధి?" }, options: [{ en: "Saturn", te: "శని" }, { en: "Jupiter", te: "బృహస్పతి" }, { en: "Mars", te: "కుజుడు" }, { en: "Earth", te: "భూమి" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "Name all 8 planets in order from the Sun", te: "సూర్యుడి నుండి క్రమంలో అన్ని 8 గ్రహాలను పేర్కొనండి" }, answer: { en: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune", te: "బుధుడు, శుక్రుడు, భూమి, కుజుడు, బృహస్పతి, శని, యురేనస్, నెప్ట్యూన్" } },
          { question: { en: "What is the difference between rotation and revolution?", te: "భ్రమణం మరియు పరిభ్రమణం మధ్య తేడా ఏమిటి?" }, answer: { en: "Rotation: Earth spinning on its axis (causes day/night). Revolution: Earth orbiting around the Sun (causes seasons).", te: "భ్రమణం: భూమి తన అక్షం మీద తిరగడం (పగలు/రాత్రికి కారణం). పరిభ్రమణం: భూమి సూర్యుడి చుట్టూ తిరగడం (సీజన్లకు కారణం)." } },
          { question: { en: "Why is Earth called the 'Blue Planet'?", te: "భూమిని 'నీలి గ్రహం' అని ఎందుకు పిలుస్తారు?" }, answer: { en: "Because about 71% of Earth's surface is covered with water, making it appear blue from space.", te: "భూమి ఉపరితలంలో దాదాపు 71% నీటితో కప్పబడి ఉంది, కాబట్టి అంతరిక్షం నుండి నీలంగా కనిపిస్తుంది." } },
          { question: { en: "What is a satellite?", te: "ఉపగ్రహం అంటే ఏమిటి?" }, answer: { en: "A satellite is an object that orbits around a planet. Moon is Earth's natural satellite.", te: "ఉపగ్రహం అనేది గ్రహం చుట్టూ తిరిగే వస్తువు. చంద్రుడు భూమి యొక్క సహజ ఉపగ్రహం." } },
          { question: { en: "Why is there life on Earth but not on other planets?", te: "భూమిపై జీవం ఎందుకు ఉంది, ఇతర గ్రహాలపై ఎందుకు లేదు?" }, answer: { en: "Earth has water, suitable temperature, oxygen, and atmosphere that support life.", te: "భూమికి నీరు, అనుకూలమైన ఉష్ణోగ్రత, ఆక్సిజన్ మరియు జీవాన్ని పోషించే వాతావరణం ఉంది." } },
          { question: { en: "What are the inner and outer planets?", te: "లోపలి మరియు బయటి గ్రహాలు ఏవి?" }, answer: { en: "Inner planets: Mercury, Venus, Earth, Mars. Outer planets: Jupiter, Saturn, Uranus, Neptune.", te: "లోపలి గ్రహాలు: బుధుడు, శుక్రుడు, భూమి, కుజుడు. బయటి గ్రహాలు: బృహస్పతి, శని, యురేనస్, నెప్ట్యూన్." } },
          { question: { en: "What is the Sun made of?", te: "సూర్యుడు దేనితో తయారైనది?" }, answer: { en: "The Sun is a huge ball of hot gases, mainly hydrogen and helium.", te: "సూర్యుడు వేడి వాయువుల భారీ బంతి, ప్రధానంగా హైడ్రోజన్ మరియు హీలియం." } },
          { question: { en: "What are comets?", te: "తోకచుక్కలు అంటే ఏమిటి?" }, answer: { en: "Comets are icy bodies that develop a tail when they come close to the Sun.", te: "తోకచుక్కలు మంచు శరీరాలు, అవి సూర్యునికి దగ్గరగా వచ్చినప్పుడు తోకను అభివృద్ధి చేస్తాయి." } },
          { question: { en: "Why do we see the Moon at night?", te: "మనం రాత్రి చంద్రుడిని ఎందుకు చూస్తాం?" }, answer: { en: "The Moon reflects sunlight. It does not produce its own light.", te: "చంద్రుడు సూర్యకాంతిని ప్రతిబింబిస్తాడు. అది సొంత కాంతిని ఉత్పత్తి చేయదు." } },
          { question: { en: "Draw and label the solar system", te: "సౌర వ్యవస్థను గీసి లేబుల్ చేయండి" }, answer: { en: "Draw Sun at center, then 8 planets in order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune", te: "కేంద్రంలో సూర్యుడిని గీయండి, తర్వాత క్రమంలో 8 గ్రహాలు: బుధుడు, శుక్రుడు, భూమి, కుజుడు, బృహస్పతి, శని, యురేనస్, నెప్ట్యూన్" } }
        ]
      },
      {
        id: `globe-model-${grade}`,
        title: { en: "Globe - Model of the Earth", te: "గ్లోబ్ - భూమి నమూనా" },
        description: { en: "Learn about globe and its features", te: "గ్లోబ్ మరియు దాని లక్షణాల గురించి తెలుసుకోండి" },
        notes: { en: "## Globe - Model of the Earth\n\n### What is a Globe?\nA globe is a spherical model of the Earth that shows continents, oceans, and countries.\n\n### Important Lines\n- **Equator**: Divides Earth into Northern and Southern hemispheres\n- **Prime Meridian**: Divides Earth into Eastern and Western hemispheres\n- **Latitudes**: Horizontal lines (0° to 90°)\n- **Longitudes**: Vertical lines (0° to 180°)\n\n### Axis\nThe imaginary line through the center of Earth on which it rotates.\n\n### Important Latitudes\n- Tropic of Cancer (23.5°N)\n- Tropic of Capricorn (23.5°S)\n- Arctic Circle (66.5°N)\n- Antarctic Circle (66.5°S)", te: "## గ్లోబ్ - భూమి నమూనా\n\n### గ్లోబ్ అంటే ఏమిటి?\nగ్లోబ్ అనేది భూమి యొక్క గోళాకార నమూనా.\n\n### ముఖ్యమైన రేఖలు\n- **భూమధ్యరేఖ**: భూమిని ఉత్తర మరియు దక్షిణ అర్ధగోళాలుగా విభజిస్తుంది\n- **ప్రధాన మధ్యాహ్న రేఖ**: భూమిని తూర్పు మరియు పశ్చిమ అర్ధగోళాలుగా విభజిస్తుంది" },
        videoUrls: ["https://www.youtube.com/embed/mZ82WiZlmDA"],
        quiz: [
          { question: { en: "What is a globe?", te: "గ్లోబ్ అంటే ఏమిటి?" }, options: [{ en: "A model of Earth", te: "భూమి నమూనా" }, { en: "A flat map", te: "చదునైన పటం" }, { en: "A picture", te: "చిత్రం" }, { en: "A book", te: "పుస్తకం" }], correctIndex: 0 },
          { question: { en: "The Equator divides Earth into?", te: "భూమధ్యరేఖ భూమిని ఏవిగా విభజిస్తుంది?" }, options: [{ en: "Northern and Southern hemispheres", te: "ఉత్తర మరియు దక్షిణ అర్ధగోళాలు" }, { en: "Eastern and Western hemispheres", te: "తూర్పు మరియు పశ్చిమ అర్ధగోళాలు" }, { en: "Four parts", te: "నాలుగు భాగాలు" }, { en: "Two continents", te: "రెండు ఖండాలు" }], correctIndex: 0 },
          { question: { en: "Latitudes are ___ lines", te: "అక్షాంశాలు ___ రేఖలు" }, options: [{ en: "Horizontal", te: "క్షితిజ సమాంతర" }, { en: "Vertical", te: "నిలువు" }, { en: "Diagonal", te: "వికర్ణ" }, { en: "Curved", te: "వంపు" }], correctIndex: 0 },
          { question: { en: "Longitudes are ___ lines", te: "రేఖాంశాలు ___ రేఖలు" }, options: [{ en: "Vertical", te: "నిలువు" }, { en: "Horizontal", te: "క్షితిజ సమాంతర" }, { en: "Diagonal", te: "వికర్ణ" }, { en: "Curved", te: "వంపు" }], correctIndex: 0 },
          { question: { en: "The Equator is at ___ latitude", te: "భూమధ్యరేఖ ___ అక్షాంశంలో ఉంది" }, options: [{ en: "0°", te: "0°" }, { en: "23.5°", te: "23.5°" }, { en: "90°", te: "90°" }, { en: "66.5°", te: "66.5°" }], correctIndex: 0 },
          { question: { en: "Prime Meridian divides Earth into?", te: "ప్రధాన మధ్యాహ్న రేఖ భూమిని ఏవిగా విభజిస్తుంది?" }, options: [{ en: "Eastern and Western hemispheres", te: "తూర్పు మరియు పశ్చిమ అర్ధగోళాలు" }, { en: "Northern and Southern hemispheres", te: "ఉత్తర మరియు దక్షిణ అర్ధగోళాలు" }, { en: "Four parts", te: "నాలుగు భాగాలు" }, { en: "Two continents", te: "రెండు ఖండాలు" }], correctIndex: 0 },
          { question: { en: "Tropic of Cancer is at?", te: "కర్కాటక రేఖ ఎక్కడ ఉంది?" }, options: [{ en: "23.5°N", te: "23.5°ఉ" }, { en: "23.5°S", te: "23.5°ద" }, { en: "66.5°N", te: "66.5°ఉ" }, { en: "0°", te: "0°" }], correctIndex: 0 },
          { question: { en: "What is Earth's axis?", te: "భూమి అక్షం అంటే ఏమిటి?" }, options: [{ en: "Imaginary line through center", te: "కేంద్రం గుండా ఊహాత్మక రేఖ" }, { en: "Equator", te: "భూమధ్యరేఖ" }, { en: "A real line", te: "వాస్తవ రేఖ" }, { en: "Prime Meridian", te: "ప్రధాన మధ్యాహ్న రేఖ" }], correctIndex: 0 },
          { question: { en: "The shape of Earth is?", te: "భూమి ఆకారం ఏమిటి?" }, options: [{ en: "Spherical (geoid)", te: "గోళాకారం (జియోయిడ్)" }, { en: "Flat", te: "చదునైన" }, { en: "Square", te: "చతురస్రం" }, { en: "Triangular", te: "త్రిభుజాకారం" }], correctIndex: 0 },
          { question: { en: "How many hemispheres does Earth have?", te: "భూమికి ఎన్ని అర్ధగోళాలు ఉన్నాయి?" }, options: [{ en: "4", te: "4" }, { en: "2", te: "2" }, { en: "6", te: "6" }, { en: "8", te: "8" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "What is a globe and how is it useful?", te: "గ్లోబ్ అంటే ఏమిటి మరియు అది ఎలా ఉపయోగకరం?" }, answer: { en: "A globe is a spherical model of Earth. It shows the true shape, continents, oceans, and countries of our planet.", te: "గ్లోబ్ అనేది భూమి యొక్క గోళాకార నమూనా. ఇది నిజమైన ఆకారం, ఖండాలు, మహాసముద్రాలు మరియు దేశాలను చూపిస్తుంది." } },
          { question: { en: "What is the difference between latitude and longitude?", te: "అక్షాంశం మరియు రేఖాంశం మధ్య తేడా ఏమిటి?" }, answer: { en: "Latitude: Horizontal lines (0° to 90°N/S). Longitude: Vertical lines (0° to 180°E/W).", te: "అక్షాంశం: క్షితిజ సమాంతర రేఖలు (0° నుండి 90°ఉ/ద). రేఖాంశం: నిలువు రేఖలు (0° నుండి 180°తూ/ప)." } },
          { question: { en: "What is the Equator?", te: "భూమధ్యరేఖ అంటే ఏమిటి?" }, answer: { en: "The Equator is an imaginary line at 0° latitude that divides Earth into Northern and Southern hemispheres.", te: "భూమధ్యరేఖ 0° అక్షాంశంలో ఉన్న ఊహాత్మక రేఖ, ఇది భూమిని ఉత్తర మరియు దక్షిణ అర్ధగోళాలుగా విభజిస్తుంది." } },
          { question: { en: "Name the four hemispheres", te: "నాలుగు అర్ధగోళాలను పేర్కొనండి" }, answer: { en: "Northern Hemisphere, Southern Hemisphere, Eastern Hemisphere, Western Hemisphere", te: "ఉత్తర అర్ధగోళం, దక్షిణ అర్ధగోళం, తూర్పు అర్ధగోళం, పశ్చిమ అర్ధగోళం" } },
          { question: { en: "What is the Prime Meridian?", te: "ప్రధాన మధ్యాహ్న రేఖ అంటే ఏమిటి?" }, answer: { en: "The Prime Meridian is at 0° longitude, passing through Greenwich, England. It divides Earth into Eastern and Western hemispheres.", te: "ప్రధాన మధ్యాహ్న రేఖ 0° రేఖాంశంలో ఉంది, గ్రీన్‌విచ్, ఇంగ్లాండ్ గుండా వెళ్తుంది. ఇది భూమిని తూర్పు మరియు పశ్చిమ అర్ధగోళాలుగా విభజిస్తుంది." } },
          { question: { en: "What are the important latitudes?", te: "ముఖ్యమైన అక్షాంశాలు ఏవి?" }, answer: { en: "Equator (0°), Tropic of Cancer (23.5°N), Tropic of Capricorn (23.5°S), Arctic Circle (66.5°N), Antarctic Circle (66.5°S)", te: "భూమధ్యరేఖ (0°), కర్కాటక రేఖ (23.5°ఉ), మకర రేఖ (23.5°ద), ఆర్కిటిక్ వృత్తం (66.5°ఉ), అంటార్కిటిక్ వృత్తం (66.5°ద)" } },
          { question: { en: "Why is a globe better than a flat map?", te: "చదునైన పటం కంటే గ్లోబ్ ఎందుకు మెరుగైనది?" }, answer: { en: "A globe shows the true shape of Earth without distortion, while flat maps distort shapes and sizes.", te: "గ్లోబ్ వక్రీకరణ లేకుండా భూమి యొక్క నిజమైన ఆకారాన్ని చూపిస్తుంది, అయితే చదునైన పటాలు ఆకారాలు మరియు పరిమాణాలను వక్రీకరిస్తాయి." } },
          { question: { en: "What is Earth's axis?", te: "భూమి అక్షం అంటే ఏమిటి?" }, answer: { en: "Earth's axis is an imaginary line passing through the North and South poles, around which Earth rotates.", te: "భూమి అక్షం ఉత్తర మరియు దక్షిణ ధ్రువాల గుండా వెళ్ళే ఊహాత్మక రేఖ, దాని చుట్టూ భూమి తిరుగుతుంది." } },
          { question: { en: "In which hemisphere is India located?", te: "భారతదేశం ఏ అర్ధగోళంలో ఉంది?" }, answer: { en: "India is in the Northern Hemisphere (above Equator) and Eastern Hemisphere (east of Prime Meridian).", te: "భారతదేశం ఉత్తర అర్ధగోళంలో (భూమధ్యరేఖకు పైన) మరియు తూర్పు అర్ధగోళంలో (ప్రధాన మధ్యాహ్న రేఖకు తూర్పున) ఉంది." } },
          { question: { en: "Draw a globe and label the Equator, Prime Meridian, and poles", te: "గ్లోబ్ గీసి భూమధ్యరేఖ, ప్రధాన మధ్యాహ్న రేఖ మరియు ధ్రువాలను లేబుల్ చేయండి" }, answer: { en: "Draw a circle, mark horizontal line as Equator, vertical line as Prime Meridian, top point as North Pole, bottom as South Pole.", te: "వృత్తం గీయండి, క్షితిజ సమాంతర రేఖను భూమధ్యరేఖగా, నిలువు రేఖను ప్రధాన మధ్యాహ్న రేఖగా, పై బిందువును ఉత్తర ధ్రువంగా, క్రింది భాగాన్ని దక్షిణ ధ్రువంగా గుర్తించండి." } }
        ]
      },
      {
        id: `maps-${grade}`,
        title: { en: "Maps", te: "పటాలు" },
        description: { en: "Learn about different types of maps", te: "వివిధ రకాల పటాల గురించి తెలుసుకోండి" },
        notes: { en: "## Maps\n\n### What is a Map?\nA map is a representation of Earth's surface on a flat surface.\n\n### Types of Maps\n1. **Physical Maps**: Show natural features (mountains, rivers)\n2. **Political Maps**: Show boundaries, cities, capitals\n3. **Thematic Maps**: Show specific information (rainfall, temperature)\n\n### Components of a Map\n- **Title**: Name of the map\n- **Scale**: Ratio between map and actual distance\n- **Direction**: North arrow (compass)\n- **Legend/Key**: Symbols and their meanings\n- **Grid**: Lines for locating places\n\n### Symbols\nMaps use symbols to represent features like roads, rivers, buildings.", te: "## పటాలు\n\n### పటం అంటే ఏమిటి?\nపటం అనేది చదునైన ఉపరితలంపై భూమి ఉపరితలం యొక్క ప్రాతినిధ్యం.\n\n### పటాల రకాలు\n1. **భౌతిక పటాలు**: సహజ లక్షణాలను చూపుతాయి\n2. **రాజకీయ పటాలు**: సరిహద్దులు, నగరాలను చూపుతాయి\n3. **థీమాటిక్ పటాలు**: నిర్దిష్ట సమాచారం చూపుతాయి" },
        videoUrls: ["https://www.youtube.com/embed/Lhgr7QrtTwk"],
        quiz: [
          { question: { en: "What is a map?", te: "పటం అంటే ఏమిటి?" }, options: [{ en: "Representation of Earth on flat surface", te: "చదునైన ఉపరితలంపై భూమి ప్రాతినిధ్యం" }, { en: "A photo of Earth", te: "భూమి ఫోటో" }, { en: "A 3D model", te: "3D నమూనా" }, { en: "A globe", te: "గ్లోబ్" }], correctIndex: 0 },
          { question: { en: "Physical maps show?", te: "భౌతిక పటాలు ఏమి చూపిస్తాయి?" }, options: [{ en: "Natural features", te: "సహజ లక్షణాలు" }, { en: "Political boundaries", te: "రాజకీయ సరిహద్దులు" }, { en: "Rainfall", te: "వర్షపాతం" }, { en: "Population", te: "జనాభా" }], correctIndex: 0 },
          { question: { en: "Political maps show?", te: "రాజకీయ పటాలు ఏమి చూపిస్తాయి?" }, options: [{ en: "Boundaries and cities", te: "సరిహద్దులు మరియు నగరాలు" }, { en: "Mountains", te: "పర్వతాలు" }, { en: "Rivers only", te: "నదులు మాత్రమే" }, { en: "Forests", te: "అడవులు" }], correctIndex: 0 },
          { question: { en: "Scale in a map tells us?", te: "పటంలో స్కేల్ మనకు ఏమి చెప్తుంది?" }, options: [{ en: "Ratio of map to actual distance", te: "పటం మరియు వాస్తవ దూరం నిష్పత్తి" }, { en: "Direction", te: "దిశ" }, { en: "Title", te: "శీర్షిక" }, { en: "Color", te: "రంగు" }], correctIndex: 0 },
          { question: { en: "The key/legend shows?", te: "కీ/లెజెండ్ ఏమి చూపిస్తుంది?" }, options: [{ en: "Symbols and meanings", te: "చిహ్నాలు మరియు అర్థాలు" }, { en: "Scale", te: "స్కేల్" }, { en: "Direction", te: "దిశ" }, { en: "Title", te: "శీర్షిక" }], correctIndex: 0 },
          { question: { en: "North direction is shown by?", te: "ఉత్తర దిశ దేని ద్వారా చూపబడుతుంది?" }, options: [{ en: "Arrow/Compass", te: "బాణం/దిక్సూచి" }, { en: "Scale", te: "స్కేల్" }, { en: "Legend", te: "లెజెండ్" }, { en: "Title", te: "శీర్షిక" }], correctIndex: 0 },
          { question: { en: "Which map shows rainfall?", te: "ఏ పటం వర్షపాతం చూపిస్తుంది?" }, options: [{ en: "Thematic map", te: "థీమాటిక్ పటం" }, { en: "Physical map", te: "భౌతిక పటం" }, { en: "Political map", te: "రాజకీయ పటం" }, { en: "Road map", te: "రోడ్ పటం" }], correctIndex: 0 },
          { question: { en: "Grid lines help in?", te: "గ్రిడ్ రేఖలు దేనిలో సహాయపడతాయి?" }, options: [{ en: "Locating places", te: "ప్రదేశాలను గుర్తించడం" }, { en: "Showing colors", te: "రంగులు చూపించడం" }, { en: "Drawing pictures", te: "చిత్రాలు గీయడం" }, { en: "Writing names", te: "పేర్లు రాయడం" }], correctIndex: 0 },
          { question: { en: "Maps use ___ to represent features", te: "పటాలు లక్షణాలను ప్రాతినిధ్యం వహించడానికి ___ ఉపయోగిస్తాయి" }, options: [{ en: "Symbols", te: "చిహ్నాలు" }, { en: "Words only", te: "పదాలు మాత్రమే" }, { en: "Numbers only", te: "సంఖ్యలు మాత్రమే" }, { en: "Photos", te: "ఫోటోలు" }], correctIndex: 0 },
          { question: { en: "The title of a map tells us?", te: "పటం శీర్షిక మనకు ఏమి చెప్తుంది?" }, options: [{ en: "What the map shows", te: "పటం ఏమి చూపిస్తుందో" }, { en: "Scale", te: "స్కేల్" }, { en: "Direction", te: "దిశ" }, { en: "Symbols", te: "చిహ్నాలు" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "What is a map? How is it different from a globe?", te: "పటం అంటే ఏమిటి? గ్లోబ్ నుండి అది ఎలా భిన్నమైనది?" }, answer: { en: "A map is a flat representation of Earth. A globe is spherical. Maps can show more details but have distortion, while globes show true shape.", te: "పటం భూమి యొక్క చదునైన ప్రాతినిధ్యం. గ్లోబ్ గోళాకారమైనది. పటాలు ఎక్కువ వివరాలను చూపించగలవు కానీ వక్రీకరణ ఉంటుంది." } },
          { question: { en: "Name the three main types of maps", te: "మూడు ప్రధాన రకాల పటాలను పేర్కొనండి" }, answer: { en: "1. Physical maps (natural features) 2. Political maps (boundaries, cities) 3. Thematic maps (specific information)", te: "1. భౌతిక పటాలు (సహజ లక్షణాలు) 2. రాజకీయ పటాలు (సరిహద్దులు, నగరాలు) 3. థీమాటిక్ పటాలు (నిర్దిష్ట సమాచారం)" } },
          { question: { en: "What are the main components of a map?", te: "పటం యొక్క ప్రధాన భాగాలు ఏమిటి?" }, answer: { en: "Title, Scale, Direction (North arrow), Legend/Key, Grid", te: "శీర్షిక, స్కేల్, దిశ (ఉత్తర బాణం), లెజెండ్/కీ, గ్రిడ్" } },
          { question: { en: "What is scale in a map?", te: "పటంలో స్కేల్ అంటే ఏమిటి?" }, answer: { en: "Scale is the ratio between distance on the map and actual distance on the ground. For example, 1 cm = 100 km.", te: "స్కేల్ అనేది పటంలో దూరం మరియు నేలపై వాస్తవ దూరం మధ్య నిష్పత్తి. ఉదాహరణకు, 1 సెం.మీ = 100 కి.మీ." } },
          { question: { en: "What is a legend/key in a map?", te: "పటంలో లెజెండ్/కీ అంటే ఏమిటి?" }, answer: { en: "A legend or key explains the symbols used in the map and their meanings.", te: "లెజెండ్ లేదా కీ పటంలో ఉపయోగించిన చిహ్నాలు మరియు వాటి అర్థాలను వివరిస్తుంది." } },
          { question: { en: "Give 5 examples of map symbols", te: "పటం చిహ్నాలకు 5 ఉదాహరణలు ఇవ్వండి" }, answer: { en: "Blue lines for rivers, green for forests, brown for mountains, black lines for roads, dots for cities", te: "నదులకు నీలి రేఖలు, అడవులకు ఆకుపచ్చ, పర్వతాలకు గోధుమ, రోడ్లకు నలుపు రేఖలు, నగరాలకు చుక్కలు" } },
          { question: { en: "Why do we need maps?", te: "మనకు పటాలు ఎందుకు అవసరం?" }, answer: { en: "Maps help us find locations, plan travel, understand geography, and study various features of an area.", te: "పటాలు మనకు స్థానాలను కనుగొనడంలో, ప్రయాణాన్ని ప్లాన్ చేయడంలో, భూగోళశాస్త్రాన్ని అర్థం చేసుకోవడంలో సహాయపడతాయి." } },
          { question: { en: "What is a thematic map? Give example.", te: "థీమాటిక్ పటం అంటే ఏమిటి? ఉదాహరణ ఇవ్వండి." }, answer: { en: "A thematic map shows specific information like rainfall, temperature, population, or crops. Example: Rainfall map of India.", te: "థీమాటిక్ పటం వర్షపాతం, ఉష్ణోగ్రత, జనాభా లేదా పంటలు వంటి నిర్దిష్ట సమాచారాన్ని చూపిస్తుంది. ఉదాహరణ: భారతదేశం వర్షపాతం పటం." } },
          { question: { en: "How do you find directions on a map?", te: "పటంలో దిశలను ఎలా కనుగొంటారు?" }, answer: { en: "Maps have a north arrow or compass symbol. North is at the top, South at the bottom, East on right, West on left.", te: "పటాలకు ఉత్తర బాణం లేదా దిక్సూచి చిహ్నం ఉంటుంది. ఉత్తరం పైన, దక్షిణం క్రింద, తూర్పు కుడివైపు, పశ్చిమం ఎడమవైపు." } },
          { question: { en: "Draw a simple map of your classroom with legend", te: "లెజెండ్‌తో మీ తరగతి గది యొక్క సాధారణ పటం గీయండి" }, answer: { en: "Draw rectangle for room, show door, windows, teacher's desk, student desks, blackboard. Add legend explaining each symbol.", te: "గదికి దీర్ఘచతురస్రం గీయండి, తలుపు, కిటికీలు, టీచర్ డెస్క్, విద్యార్థి డెస్కులు, బ్లాక్‌బోర్డ్ చూపించండి. ప్రతి చిహ్నాన్ని వివరించే లెజెండ్ జోడించండి." } }
        ]
      },
      {
        id: `landforms-ap-${grade}`,
        title: { en: "Landforms - Andhra Pradesh", te: "భూస్వరూపాలు - ఆంధ్రప్రదేశ్" },
        description: { en: "Learn about landforms of Andhra Pradesh", te: "ఆంధ్రప్రదేశ్ భూస్వరూపాల గురించి తెలుసుకోండి" },
        notes: { en: "## Landforms - Andhra Pradesh\n\n### Location\nAndhra Pradesh is on the southeastern coast of India, bordered by the Bay of Bengal.\n\n### Major Landforms\n1. **Coastal Plains**: Along the Bay of Bengal\n2. **Eastern Ghats**: Mountain ranges\n3. **Deccan Plateau**: In the interior\n4. **River Valleys**: Godavari, Krishna rivers\n\n### Rivers\n- **Godavari**: Largest river in AP\n- **Krishna**: Second largest\n- **Pennar, Tungabhadra**: Other important rivers\n\n### Climate\n- Tropical climate\n- Hot summers, moderate winters\n- Monsoon brings most rainfall\n\n### Natural Resources\n- Rich in minerals\n- Fertile agricultural land\n- Long coastline with ports", te: "## భూస్వరూపాలు - ఆంధ్రప్రదేశ్\n\n### స్థానం\nఆంధ్రప్రదేశ్ భారతదేశం యొక్క ఆగ్నేయ తీరంలో ఉంది, బంగాళాఖాతం సరిహద్దుగా ఉంది.\n\n### ప్రధాన భూస్వరూపాలు\n1. **తీర మైదానాలు**: బంగాళాఖాతం వెంట\n2. **తూర్పు కనుమలు**: పర్వత శ్రేణులు\n3. **దక్కన్ పీఠభూమి**: లోపలి భాగంలో\n4. **నది లోయలు**: గోదావరి, కృష్ణా నదులు" },
        videoUrls: ["https://www.youtube.com/embed/GTIpEjRj0z8"],
        quiz: [
          { question: { en: "Andhra Pradesh is on which coast?", te: "ఆంధ్రప్రదేశ్ ఏ తీరంలో ఉంది?" }, options: [{ en: "Eastern (Bay of Bengal)", te: "తూర్పు (బంగాళాఖాతం)" }, { en: "Western (Arabian Sea)", te: "పశ్చిమ (అరేబియా సముద్రం)" }, { en: "Northern", te: "ఉత్తర" }, { en: "Southern", te: "దక్షిణ" }], correctIndex: 0 },
          { question: { en: "Largest river in Andhra Pradesh?", te: "ఆంధ్రప్రదేశ్‌లో అతిపెద్ద నది?" }, options: [{ en: "Godavari", te: "గోదావరి" }, { en: "Krishna", te: "కృష్ణా" }, { en: "Pennar", te: "పెన్నా" }, { en: "Tungabhadra", te: "తుంగభద్ర" }], correctIndex: 0 },
          { question: { en: "Mountain ranges in AP are called?", te: "ఆంధ్రప్రదేశ్‌లో పర్వత శ్రేణులను ఏమంటారు?" }, options: [{ en: "Eastern Ghats", te: "తూర్పు కనుమలు" }, { en: "Western Ghats", te: "పశ్చిమ కనుమలు" }, { en: "Himalayas", te: "హిమాలయాలు" }, { en: "Vindhyas", te: "వింధ్యాలు" }], correctIndex: 0 },
          { question: { en: "The interior region of AP has?", te: "ఆంధ్రప్రదేశ్ లోపలి ప్రాంతంలో ఏమి ఉంది?" }, options: [{ en: "Deccan Plateau", te: "దక్కన్ పీఠభూమి" }, { en: "Coastal plains", te: "తీర మైదానాలు" }, { en: "Desert", te: "ఎడారి" }, { en: "Islands", te: "ద్వీపాలు" }], correctIndex: 0 },
          { question: { en: "Climate of Andhra Pradesh is?", te: "ఆంధ్రప్రదేశ్ వాతావరణం?" }, options: [{ en: "Tropical", te: "ఉష్ణమండల" }, { en: "Cold", te: "చల్లని" }, { en: "Desert", te: "ఎడారి" }, { en: "Polar", te: "ధ్రువ" }], correctIndex: 0 },
          { question: { en: "Second largest river in AP?", te: "ఆంధ్రప్రదేశ్‌లో రెండవ అతిపెద్ద నది?" }, options: [{ en: "Krishna", te: "కృష్ణా" }, { en: "Godavari", te: "గోదావరి" }, { en: "Pennar", te: "పెన్నా" }, { en: "Cauvery", te: "కావేరి" }], correctIndex: 0 },
          { question: { en: "Coastal plains are along which water body?", te: "తీర మైదానాలు ఏ జలాశయం వెంట ఉన్నాయి?" }, options: [{ en: "Bay of Bengal", te: "బంగాళాఖాతం" }, { en: "Arabian Sea", te: "అరేబియా సముద్రం" }, { en: "Indian Ocean", te: "హిందూ మహాసముద్రం" }, { en: "Pacific Ocean", te: "పసిఫిక్ మహాసముద్రం" }], correctIndex: 0 },
          { question: { en: "Most rainfall in AP comes from?", te: "ఆంధ్రప్రదేశ్‌లో ఎక్కువ వర్షపాతం దేని నుండి వస్తుంది?" }, options: [{ en: "Monsoon", te: "మాన్సూన్" }, { en: "Winter", te: "శీతాకాలం" }, { en: "Summer", te: "వేసవి" }, { en: "Spring", te: "వసంతం" }], correctIndex: 0 },
          { question: { en: "AP is rich in?", te: "ఆంధ్రప్రదేశ్ దేనిలో సంపన్నంగా ఉంది?" }, options: [{ en: "Minerals and agriculture", te: "ఖనిజాలు మరియు వ్యవసాయం" }, { en: "Snow", te: "మంచు" }, { en: "Deserts", te: "ఎడారులు" }, { en: "Forests only", te: "అడవులు మాత్రమే" }], correctIndex: 0 },
          { question: { en: "Which landform is formed by rivers?", te: "నదుల వల్ల ఏ భూస్వరూపం ఏర్పడుతుంది?" }, options: [{ en: "River valleys and deltas", te: "నది లోయలు మరియు డెల్టాలు" }, { en: "Mountains", te: "పర్వతాలు" }, { en: "Plateaus only", te: "పీఠభూములు మాత్రమే" }, { en: "Islands", te: "ద్వీపాలు" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "Where is Andhra Pradesh located in India?", te: "భారతదేశంలో ఆంధ్రప్రదేశ్ ఎక్కడ ఉంది?" }, answer: { en: "Andhra Pradesh is on the southeastern coast of India, bordered by the Bay of Bengal to the east.", te: "ఆంధ్రప్రదేశ్ భారతదేశం యొక్క ఆగ్నేయ తీరంలో ఉంది, తూర్పున బంగాళాఖాతం సరిహద్దుగా ఉంది." } },
          { question: { en: "Name the major landforms of Andhra Pradesh", te: "ఆంధ్రప్రదేశ్ యొక్క ప్రధాన భూస్వరూపాలను పేర్కొనండి" }, answer: { en: "Coastal Plains (along Bay of Bengal), Eastern Ghats (mountains), Deccan Plateau (interior), River Valleys (Godavari, Krishna)", te: "తీర మైదానాలు (బంగాళాఖాతం వెంట), తూర్పు కనుమలు (పర్వతాలు), దక్కన్ పీఠభూమి (లోపల), నది లోయలు (గోదావరి, కృష్ణా)" } },
          { question: { en: "Name the major rivers of Andhra Pradesh", te: "ఆంధ్రప్రదేశ్ యొక్క ప్రధాన నదులను పేర్కొనండి" }, answer: { en: "Godavari (largest), Krishna (second largest), Pennar, Tungabhadra", te: "గోదావరి (అతిపెద్దది), కృష్ణా (రెండవ అతిపెద్దది), పెన్నా, తుంగభద్ర" } },
          { question: { en: "What are the Eastern Ghats?", te: "తూర్పు కనుమలు అంటే ఏమిటి?" }, answer: { en: "Eastern Ghats are mountain ranges running along the eastern coast of India, including Andhra Pradesh.", te: "తూర్పు కనుమలు భారతదేశం తూర్పు తీరం వెంట నడుస్తున్న పర్వత శ్రేణులు, ఆంధ్రప్రదేశ్ కూడా వీటిలో ఉంది." } },
          { question: { en: "Describe the climate of Andhra Pradesh", te: "ఆంధ్రప్రదేశ్ వాతావరణాన్ని వర్ణించండి" }, answer: { en: "AP has tropical climate with hot summers, moderate winters. Most rainfall comes from monsoons (June-September).", te: "ఆంధ్రప్రదేశ్‌కు వేడి వేసవి, మితమైన శీతాకాలాలతో ఉష్ణమండల వాతావరణం ఉంది. ఎక్కువ వర్షపాతం మాన్సూన్ (జూన్-సెప్టెంబర్) నుండి వస్తుంది." } },
          { question: { en: "What is the importance of Godavari and Krishna rivers?", te: "గోదావరి మరియు కృష్ణా నదుల ప్రాముఖ్యత ఏమిటి?" }, answer: { en: "They provide water for irrigation, drinking, and support agriculture. Their deltas are very fertile.", te: "అవి నీటిపారుదల, తాగు నీరు అందిస్తాయి మరియు వ్యవసాయానికి మద్దతు ఇస్తాయి. వాటి డెల్టాలు చాలా సారవంతమైనవి." } },
          { question: { en: "What are coastal plains?", te: "తీర మైదానాలు అంటే ఏమిటి?" }, answer: { en: "Coastal plains are flat, low-lying areas along the seacoast. They are formed by deposits from rivers and sea.", te: "తీర మైదానాలు సముద్ర తీరం వెంట ఉన్న చదునైన, తక్కువ ఎత్తులో ఉన్న ప్రాంతాలు. అవి నదులు మరియు సముద్రం నుండి నిక్షేపాల వల్ల ఏర్పడతాయి." } },
          { question: { en: "What natural resources does AP have?", te: "ఆంధ్రప్రదేశ్‌లో ఏ సహజ వనరులు ఉన్నాయి?" }, answer: { en: "AP has minerals, fertile land for agriculture, long coastline with ports, and forest resources.", te: "ఆంధ్రప్రదేశ్‌లో ఖనిజాలు, వ్యవసాయానికి సారవంతమైన భూమి, ఓడరేవులతో పొడవైన తీరం మరియు అటవీ వనరులు ఉన్నాయి." } },
          { question: { en: "What is the Deccan Plateau?", te: "దక్కన్ పీఠభూమి అంటే ఏమిటి?" }, answer: { en: "The Deccan Plateau is a large triangular plateau in central-southern India, including interior regions of AP.", te: "దక్కన్ పీఠభూమి మధ్య-దక్షిణ భారతదేశంలో పెద్ద త్రిభుజాకార పీఠభూమి, ఆంధ్రప్రదేశ్ లోపలి ప్రాంతాలతో సహా." } },
          { question: { en: "Draw a simple map of AP showing major rivers and landforms", te: "ప్రధాన నదులు మరియు భూస్వరూపాలను చూపించే ఆంధ్రప్రదేశ్ యొక్క సాధారణ పటం గీయండి" }, answer: { en: "Draw outline of AP, show Bay of Bengal on east, mark Godavari and Krishna rivers, Eastern Ghats, and coastal plains.", te: "ఆంధ్రప్రదేశ్ రూపురేఖలు గీయండి, తూర్పున బంగాళాఖాతం చూపించండి, గోదావరి మరియు కృష్ణా నదులు, తూర్పు కనుమలు, తీర మైదానాలను గుర్తించండి." } }
        ]
      }
    ] : [
      {
        id: `universe-earth-${grade}`,
        title: { en: "The Universe and the Earth", te: "విశ్వం మరియు భూమి" },
        description: { en: "Learn about the universe and our planet Earth", te: "విశ్వం మరియు మన గ్రహం భూమి గురించి తెలుసుకోండి" },
        notes: { en: "## The Universe and the Earth\n\n### What is the Universe?\nThe universe includes all matter, energy, space, and time that exist. It contains billions of galaxies.\n\n### Our Galaxy\n- **Milky Way**: Our galaxy containing the solar system\n- Contains billions of stars\n\n### Solar System\n- **Sun**: The star at the center\n- **8 Planets**: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune\n- **Moons, Asteroids, Comets**\n\n### Earth\n- 3rd planet from the Sun\n- Only planet with life\n- Has atmosphere, water\n- Rotates (day/night) and revolves (seasons)\n\n### Important Facts\n- Earth takes 24 hours to rotate once\n- Earth takes 365.25 days to revolve around Sun\n- Moon is Earth's natural satellite", te: "## విశ్వం మరియు భూమి\n\n### విశ్వం అంటే ఏమిటి?\nవిశ్వం అనేది ఉన్న అన్ని పదార్థం, శక్తి, స్థలం మరియు సమయాన్ని కలిగి ఉంటుంది. ఇది బిలియన్ల గెలాక్సీలను కలిగి ఉంది.\n\n### మన గెలాక్సీ\n- **పాలపుంత**: సౌర వ్యవస్థను కలిగి ఉన్న మన గెలాక్సీ\n\n### సౌర వ్యవస్థ\n- **సూర్యుడు**: కేంద్రంలో ఉన్న నక్షత్రం\n- **8 గ్రహాలు**: బుధుడు, శుక్రుడు, భూమి, కుజుడు, బృహస్పతి, శని, యురేనస్, నెప్ట్యూన్\n\n### భూమి\n- సూర్యుడి నుండి 3వ గ్రహం\n- జీవం ఉన్న ఏకైక గ్రహం" },
        videoUrls: ["https://www.youtube.com/embed/Om4GgE9a1bM"],
        quiz: [
          { question: { en: "What is the universe?", te: "విశ్వం అంటే ఏమిటి?" }, options: [{ en: "All matter, energy, space, and time", te: "అన్ని పదార్థం, శక్తి, స్థలం మరియు సమయం" }, { en: "Just our solar system", te: "మన సౌర వ్యవస్థ మాత్రమే" }, { en: "Only Earth", te: "భూమి మాత్రమే" }, { en: "Only the Sun", te: "సూర్యుడు మాత్రమే" }], correctIndex: 0 },
          { question: { en: "What is our galaxy called?", te: "మన గెలాక్సీని ఏమంటారు?" }, options: [{ en: "Milky Way", te: "పాలపుంత" }, { en: "Andromeda", te: "ఆండ్రోమెడా" }, { en: "Solar Galaxy", te: "సోలార్ గెలాక్సీ" }, { en: "Moon Galaxy", te: "మూన్ గెలాక్సీ" }], correctIndex: 0 },
          { question: { en: "How many planets are in our solar system?", te: "మన సౌర వ్యవస్థలో ఎన్ని గ్రహాలు ఉన్నాయి?" }, options: [{ en: "8", te: "8" }, { en: "9", te: "9" }, { en: "7", te: "7" }, { en: "10", te: "10" }], correctIndex: 0 },
          { question: { en: "Which is the only planet with life?", te: "జీవం ఉన్న ఏకైక గ్రహం ఏది?" }, options: [{ en: "Earth", te: "భూమి" }, { en: "Mars", te: "కుజుడు" }, { en: "Venus", te: "శుక్రుడు" }, { en: "Jupiter", te: "బృహస్పతి" }], correctIndex: 0 },
          { question: { en: "How long does Earth take to rotate once?", te: "భూమి ఒకసారి తిరగడానికి ఎంత సమయం పడుతుంది?" }, options: [{ en: "24 hours", te: "24 గంటలు" }, { en: "12 hours", te: "12 గంటలు" }, { en: "365 days", te: "365 రోజులు" }, { en: "30 days", te: "30 రోజులు" }], correctIndex: 0 },
          { question: { en: "What is at the center of our solar system?", te: "మన సౌర వ్యవస్థ కేంద్రంలో ఏమి ఉంది?" }, options: [{ en: "Sun", te: "సూర్యుడు" }, { en: "Earth", te: "భూమి" }, { en: "Moon", te: "చంద్రుడు" }, { en: "Jupiter", te: "బృహస్పతి" }], correctIndex: 0 },
          { question: { en: "How long does Earth take to revolve around the Sun?", te: "భూమి సూర్యుడి చుట్టూ తిరగడానికి ఎంత సమయం పడుతుంది?" }, options: [{ en: "365.25 days", te: "365.25 రోజులు" }, { en: "24 hours", te: "24 గంటలు" }, { en: "30 days", te: "30 రోజులు" }, { en: "7 days", te: "7 రోజులు" }], correctIndex: 0 },
          { question: { en: "What is Earth's natural satellite?", te: "భూమి యొక్క సహజ ఉపగ్రహం ఏది?" }, options: [{ en: "Moon", te: "చంద్రుడు" }, { en: "Sun", te: "సూర్యుడు" }, { en: "Mars", te: "కుజుడు" }, { en: "Venus", te: "శుక్రుడు" }], correctIndex: 0 },
          { question: { en: "Earth is which planet from the Sun?", te: "భూమి సూర్యుడి నుండి ఏ గ్రహం?" }, options: [{ en: "3rd", te: "3వ" }, { en: "1st", te: "1వ" }, { en: "4th", te: "4వ" }, { en: "5th", te: "5వ" }], correctIndex: 0 },
          { question: { en: "What causes day and night?", te: "పగలు మరియు రాత్రికి కారణం ఏమిటి?" }, options: [{ en: "Earth's rotation", te: "భూమి భ్రమణం" }, { en: "Earth's revolution", te: "భూమి పరిభ్రమణం" }, { en: "Moon's movement", te: "చంద్రుడి చలనం" }, { en: "Sun's movement", te: "సూర్యుడి చలనం" }], correctIndex: 0 }
        ],
        practice: [
          { question: { en: "What is the universe? Explain.", te: "విశ్వం అంటే ఏమిటి? వివరించండి." }, answer: { en: "The universe includes all matter, energy, space, and time that exist. It contains billions of galaxies, each with billions of stars.", te: "విశ్వం అనేది ఉన్న అన్ని పదార్థం, శక్తి, స్థలం మరియు సమయాన్ని కలిగి ఉంటుంది. ఇది బిలియన్ల గెలాక్సీలను కలిగి ఉంది, ప్రతి ఒక్కటి బిలియన్ల నక్షత్రాలతో." } },
          { question: { en: "What is the Milky Way?", te: "పాలపుంత అంటే ఏమిటి?" }, answer: { en: "Milky Way is our galaxy. It contains our solar system and billions of stars.", te: "పాలపుంత మన గెలాక్సీ. ఇది మన సౌర వ్యవస్థను మరియు బిలియన్ల నక్షత్రాలను కలిగి ఉంది." } },
          { question: { en: "Name all 8 planets in order from the Sun", te: "సూర్యుడి నుండి క్రమంలో అన్ని 8 గ్రహాలను పేర్కొనండి" }, answer: { en: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune", te: "బుధుడు, శుక్రుడు, భూమి, కుజుడు, బృహస్పతి, శని, యురేనస్, నెప్ట్యూన్" } },
          { question: { en: "What is the difference between rotation and revolution?", te: "భ్రమణం మరియు పరిభ్రమణం మధ్య తేడా ఏమిటి?" }, answer: { en: "Rotation: Earth spinning on its axis (24 hrs, causes day/night). Revolution: Earth orbiting around the Sun (365.25 days, causes seasons).", te: "భ్రమణం: భూమి తన అక్షం మీద తిరగడం (24 గం, పగలు/రాత్రికి కారణం). పరిభ్రమణం: భూమి సూర్యుడి చుట్టూ తిరగడం (365.25 రోజులు, సీజన్లకు కారణం)." } },
          { question: { en: "Why is Earth called the unique planet?", te: "భూమిని ఎందుకు ప్రత్యేక గ్రహం అంటారు?" }, answer: { en: "Earth is unique because it is the only planet with life. It has water, suitable temperature, oxygen, and atmosphere.", te: "భూమి ప్రత్యేకమైనది ఎందుకంటే ఇది జీవం ఉన్న ఏకైక గ్రహం. దీనికి నీరు, అనుకూల ఉష్ణోగ్రత, ఆక్సిజన్ మరియు వాతావరణం ఉంది." } },
          { question: { en: "What is the Sun?", te: "సూర్యుడు అంటే ఏమిటి?" }, answer: { en: "The Sun is a star at the center of our solar system. It is a huge ball of hot gases (hydrogen and helium) that provides light and heat.", te: "సూర్యుడు మన సౌర వ్యవస్థ కేంద్రంలో ఉన్న నక్షత్రం. ఇది వేడి వాయువుల (హైడ్రోజన్ మరియు హీలియం) భారీ బంతి, కాంతి మరియు వేడిని అందిస్తుంది." } },
          { question: { en: "What is a galaxy?", te: "గెలాక్సీ అంటే ఏమిటి?" }, answer: { en: "A galaxy is a huge collection of billions of stars, planets, gas, and dust held together by gravity.", te: "గెలాక్సీ అనేది గురుత్వాకర్షణ ద్వారా కలిసి ఉన్న బిలియన్ల నక్షత్రాలు, గ్రహాలు, వాయువు మరియు ధూళి యొక్క భారీ సమూహం." } },
          { question: { en: "Why do we have seasons on Earth?", te: "భూమిపై మనకు ఋతువులు ఎందుకు ఉన్నాయి?" }, answer: { en: "Seasons occur because Earth's axis is tilted and as it revolves around the Sun, different parts receive different amounts of sunlight.", te: "భూమి అక్షం వంపుగా ఉన్నందున మరియు సూర్యుడి చుట్టూ తిరిగేటప్పుడు వివిధ భాగాలు వివిధ మొత్తాల సూర్యకాంతిని పొందుతాయి కాబట్టి ఋతువులు ఏర్పడతాయి." } },
          { question: { en: "What is the Moon and why do we see it at night?", te: "చంద్రుడు అంటే ఏమిటి మరియు మనం రాత్రి ఎందుకు చూస్తాం?" }, answer: { en: "Moon is Earth's natural satellite. We see it because it reflects sunlight. It doesn't produce its own light.", te: "చంద్రుడు భూమి యొక్క సహజ ఉపగ్రహం. మనం దాన్ని చూస్తాం ఎందుకంటే అది సూర్యకాంతిని ప్రతిబింబిస్తుంది. అది సొంత కాంతిని ఉత్పత్తి చేయదు." } },
          { question: { en: "Draw and label the solar system", te: "సౌర వ్యవస్థను గీసి లేబుల్ చేయండి" }, answer: { en: "Draw Sun at center, then 8 planets in order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Show asteroid belt between Mars and Jupiter.", te: "కేంద్రంలో సూర్యుడిని గీయండి, తర్వాత క్రమంలో 8 గ్రహాలు: బుధుడు, శుక్రుడు, భూమి, కుజుడు, బృహస్పతి, శని, యురేనస్, నెప్ట్యూన్. కుజుడు మరియు బృహస్పతి మధ్య గ్రహశకల వలయం చూపించండి." } }
        ]
      },
      {
        id: `geography-${grade}`,
        title: { en: "Our Earth", te: "మన భూమి" },
        description: { en: "Learn about our planet", te: "మన గ్రహం గురించి తెలుసుకోండి" },
        notes: { en: "## Our Earth\n\n### Continents (7)\nAsia, Africa, North America, South America, Europe, Australia, Antarctica\n\n### Oceans (5)\nPacific, Atlantic, Indian, Southern, Arctic\n\n### Directions\nNorth, South, East, West", te: "## మన భూమి\n\n### ఖండాలు (7)\nఆసియా, ఆఫ్రికా, ఉత్తర అమెరికా, దక్షిణ అమెరికా, యూరప్, ఆస్ట్రేలియా, అంటార్కిటికా\n\n### మహాసముద్రాలు (5)\nపసిఫిక్, అట్లాంటిక్, హిందూ, దక్షిణ, ఆర్కిటిక్" },
        quiz: generateSocialQuiz(),
        practice: generateSocialPractice()
      },
      {
        id: `civics-${grade}`,
        title: { en: "Our Country India", te: "మన దేశం భారతదేశం" },
        description: { en: "Learn about India", te: "భారతదేశం గురించి తెలుసుకోండి" },
        notes: { en: "## Our Country India\n\n### National Symbols\n- Flag: Tricolor (Tiranga)\n- Bird: Peacock\n- Animal: Tiger\n- Flower: Lotus\n- Anthem: Jana Gana Mana\n\n### Important Dates\n- Independence Day: 15 August\n- Republic Day: 26 January\n- Gandhi Jayanti: 2 October", te: "## మన దేశం భారతదేశం\n\n### జాతీయ చిహ్నాలు\n- జెండా: త్రివర్ణ\n- పక్షి: నెమలి\n- జంతువు: పులి\n- పువ్వు: తామర" },
        quiz: generateSocialQuiz(),
        practice: generateSocialPractice()
      }
    ]
  }
];

// Create subject arrays for classes 8-10
const createSubjects8_10 = (grade: number): Subject[] => [
  {
    id: `telugu-${grade}`,
    title: { en: "Telugu", te: "తెలుగు" },
    icon: "Languages",
    color: "game-pink",
    chapters: [
      {
        id: `telugu-literature-${grade}`,
        title: { en: "Telugu Literature", te: "తెలుగు సాహిత్యం" },
        description: { en: "Prose and poetry", te: "గద్యం మరియు పద్యం" },
        notes: { en: "## Telugu Literature\n\n### Forms of Literature\n- **Gadyam (Prose)**: Stories, essays, novels\n- **Padyam (Poetry)**: Poems with rhythm and rhyme\n- **Natakam (Drama)**: Plays\n\n### Famous Telugu Poets\n- Nannaya\n- Tikkana\n- Errapragada\n- Vemana\n- Sri Sri", te: "## తెలుగు సాహిత్యం\n\n### సాహిత్య రూపాలు\n- **గద్యం**: కథలు, వ్యాసాలు\n- **పద్యం**: లయ మరియు ప్రాసతో కవితలు\n- **నాటకం**: నాటకాలు" },
        quiz: generateTeluguQuiz(),
        practice: generateTeluguPractice()
      },
      {
        id: `telugu-advanced-grammar-${grade}`,
        title: { en: "Advanced Grammar", te: "ఉన్నత వ్యాకరణం" },
        description: { en: "Complex grammar rules", te: "సంక్లిష్ట వ్యాకరణ నియమాలు" },
        notes: { en: "## Advanced Telugu Grammar\n\n### Sandhi (సంధి)\nJoining of words\n- Savarna Sandhi\n- Guna Sandhi\n- Vriddhi Sandhi\n\n### Samasa (సమాసం)\nCompound words\n- Dvandva\n- Tatpurusha\n- Bahuvrihi", te: "## ఉన్నత తెలుగు వ్యాకరణం\n\n### సంధి\nపదాల కలయిక\n\n### సమాసం\nసమ్మేళన పదాలు" },
        quiz: generateTeluguQuiz(),
        practice: generateTeluguPractice()
      }
    ]
  },
  {
    id: `hindi-${grade}`,
    title: { en: "Hindi", te: "హిందీ" },
    icon: "BookText",
    color: "game-orange",
    chapters: [
      {
        id: `hindi-literature-${grade}`,
        title: { en: "Hindi Literature", te: "హిందీ సాహిత్యం" },
        description: { en: "Stories and poems", te: "కథలు మరియు కవితలు" },
        notes: { en: "## Hindi Literature\n\n### Famous Hindi Writers\n- Premchand\n- Mahadevi Verma\n- Harivansh Rai Bachchan\n- Kabir Das\n- Tulsidas\n\n### Literary Forms\n- कहानी (Story)\n- कविता (Poetry)\n- निबंध (Essay)", te: "## హిందీ సాహిత్యం\n\n### ప్రసిద్ధ హిందీ రచయితలు\n- ప్రేమ్‌చంద్\n- మహాదేవి వర్మ\n- హరివంశ్ రాయ్ బచ్చన్" },
        quiz: generateHindiQuiz(),
        practice: generateHindiPractice()
      },
      {
        id: `hindi-grammar-advanced-${grade}`,
        title: { en: "Hindi Grammar", te: "హిందీ వ్యాకరణం" },
        description: { en: "Advanced grammar concepts", te: "ఉన్నత వ్యాకరణ భావనలు" },
        notes: { en: "## Hindi Grammar\n\n### Kaal (Tense)\n- भूतकाल (Past)\n- वर्तमान काल (Present)\n- भविष्यत् काल (Future)\n\n### Vachan (Number)\n- एकवचन (Singular)\n- बहुवचन (Plural)", te: "## హిందీ వ్యాకరణం\n\n### కాల్ (కాలం)\n- భూత్‌కాల్ (భూతం)\n- వర్తమాన్ కాల్ (వర్తమానం)\n- భవిష్యత్ కాల్ (భవిష్యత్తు)" },
        quiz: generateHindiQuiz(),
        practice: generateHindiPractice()
      }
    ]
  },
  {
    id: `english-${grade}`,
    title: { en: "English", te: "ఆంగ్లం" },
    icon: "BookOpen",
    color: "game-purple",
    chapters: [
      {
        id: `english-literature-${grade}`,
        title: { en: "English Literature", te: "ఆంగ్ల సాహిత్యం" },
        description: { en: "Stories, poems, and drama", te: "కథలు, కవితలు మరియు నాటకం" },
        notes: { en: "## English Literature\n\n### Literary Forms\n- **Prose**: Stories, novels, essays\n- **Poetry**: Sonnets, ballads, free verse\n- **Drama**: Plays, one-act plays\n\n### Elements of Story\n- Setting\n- Characters\n- Plot\n- Theme\n- Conflict", te: "## ఆంగ్ల సాహిత్యం\n\n### సాహిత్య రూపాలు\n- **గద్యం**: కథలు, నవలలు\n- **పద్యం**: సొనెట్లు, బల్లాడ్లు\n- **నాటకం**: నాటకాలు" },
        quiz: generateEnglishQuiz(),
        practice: generateEnglishPractice()
      },
      {
        id: `english-grammar-advanced-${grade}`,
        title: { en: "Advanced Grammar", te: "ఉన్నత వ్యాకరణం" },
        description: { en: "Complex sentence structures", te: "సంక్లిష్ట వాక్య నిర్మాణాలు" },
        notes: { en: "## Advanced English Grammar\n\n### Tenses\n- Present (Simple, Continuous, Perfect)\n- Past (Simple, Continuous, Perfect)\n- Future (Simple, Continuous, Perfect)\n\n### Voice\n- Active Voice\n- Passive Voice\n\n### Speech\n- Direct Speech\n- Indirect Speech", te: "## ఉన్నత ఆంగ్ల వ్యాకరణం\n\n### కాలాలు\n- వర్తమాన కాలం\n- భూత కాలం\n- భవిష్యత్ కాలం" },
        quiz: generateEnglishQuiz(),
        practice: generateEnglishPractice()
      }
    ]
  },
  {
    id: `maths-${grade}`,
    title: { en: "Mathematics", te: "గణితం" },
    icon: "Calculator",
    color: "game-blue",
    chapters: [
      {
        id: `algebra-${grade}`,
        title: { en: "Algebra", te: "బీజగణితం" },
        description: { en: "Algebraic expressions and equations", te: "బీజగణిత వ్యక్తీకరణలు మరియు సమీకరణాలు" },
        notes: { en: "## Algebra\n\n### Algebraic Expressions\n- Variable: Unknown value (x, y)\n- Constant: Fixed value (5, -3)\n- Coefficient: Number with variable\n\n### Equations\n- Linear Equations: ax + b = 0\n- Quadratic Equations: ax² + bx + c = 0", te: "## బీజగణితం\n\n### బీజగణిత వ్యక్తీకరణలు\n- చరాశి: తెలియని విలువ\n- స్థిరాంకం: స్థిర విలువ\n- గుణకం: చరాశితో సంఖ్య" },
        quiz: generateMathQuiz('algebra', grade),
        practice: generateMathPractice('algebra', grade)
      },
      {
        id: `geometry-advanced-${grade}`,
        title: { en: "Geometry", te: "రేఖాగణితం" },
        description: { en: "Triangles, circles, and theorems", te: "త్రిభుజాలు, వృత్తాలు మరియు సిద్ధాంతాలు" },
        notes: { en: "## Geometry\n\n### Triangles\n- Sum of angles = 180°\n- Types: Equilateral, Isosceles, Scalene\n- Pythagoras Theorem: a² + b² = c²\n\n### Circles\n- Radius, Diameter, Circumference\n- Area = πr²\n- Circumference = 2πr", te: "## రేఖాగణితం\n\n### త్రిభుజాలు\n- కోణాల మొత్తం = 180°\n- రకాలు: సమబాహు, సమద్విబాహు, విషమ\n\n### వృత్తాలు\n- వ్యాసార్ధం, వ్యాసం, పరిధి" },
        quiz: generateMathQuiz('geometry', grade),
        practice: generateMathPractice('geometry', grade)
      },
      {
        id: `numbers-advanced-${grade}`,
        title: { en: "Number Systems", te: "సంఖ్యా వ్యవస్థలు" },
        description: { en: "Real numbers and operations", te: "వాస్తవ సంఖ్యలు మరియు కార్యకలాపాలు" },
        notes: { en: "## Number Systems\n\n### Types of Numbers\n- Natural Numbers: 1, 2, 3...\n- Whole Numbers: 0, 1, 2, 3...\n- Integers: ...-2, -1, 0, 1, 2...\n- Rational Numbers: p/q form\n- Irrational Numbers: √2, π\n- Real Numbers: All above", te: "## సంఖ్యా వ్యవస్థలు\n\n### సంఖ్యల రకాలు\n- సహజ సంఖ్యలు\n- పూర్ణ సంఖ్యలు\n- పూర్ణాంకాలు\n- అకరణీయ సంఖ్యలు\n- కరణీయ సంఖ్యలు" },
        quiz: generateMathQuiz('numbers', grade),
        practice: generateMathPractice('numbers', grade)
      }
    ]
  },
  {
    id: `physical-science-${grade}`,
    title: { en: "Physical Science", te: "భౌతిక శాస్త్రం" },
    icon: "Atom",
    color: "game-cyan",
    chapters: [
      {
        id: `motion-${grade}`,
        title: { en: "Motion and Force", te: "చలనం మరియు బలం" },
        description: { en: "Newton's laws and mechanics", te: "న్యూటన్ నియమాలు మరియు యాంత్రికశాస్త్రం" },
        notes: { en: "## Motion and Force\n\n### Newton's Laws\n1. **First Law (Inertia)**: Object at rest stays at rest\n2. **Second Law**: F = ma\n3. **Third Law**: Action = Reaction\n\n### Formulas\n- Speed = Distance/Time\n- Acceleration = (v-u)/t\n- Force = Mass × Acceleration", te: "## చలనం మరియు బలం\n\n### న్యూటన్ నియమాలు\n1. **మొదటి నియమం**: విశ్రాంతిలో ఉన్న వస్తువు విశ్రాంతిలో ఉంటుంది\n2. **రెండవ నియమం**: F = ma\n3. **మూడవ నియమం**: చర్య = ప్రతిచర్య" },
        quiz: generatePhysicalScienceQuiz(),
        practice: generatePhysicalSciencePractice()
      },
      {
        id: `electricity-${grade}`,
        title: { en: "Electricity", te: "విద్యుత్" },
        description: { en: "Current, voltage, and circuits", te: "ప్రవాహం, వోల్టేజ్ మరియు సర్క్యూట్లు" },
        notes: { en: "## Electricity\n\n### Basic Concepts\n- Current (I): Flow of electrons (Ampere)\n- Voltage (V): Electric potential (Volt)\n- Resistance (R): Opposition to flow (Ohm)\n\n### Ohm's Law\nV = I × R\n\n### Power\nP = V × I = I²R = V²/R", te: "## విద్యుత్\n\n### ప్రాథమిక భావనలు\n- ప్రవాహం (I): ఎలక్ట్రాన్ల ప్రవాహం\n- వోల్టేజ్ (V): విద్యుత్ పొటెన్షియల్\n- నిరోధకత (R): ప్రవాహానికి వ్యతిరేకత" },
        quiz: generatePhysicalScienceQuiz(),
        practice: generatePhysicalSciencePractice()
      },
      {
        id: `light-${grade}`,
        title: { en: "Light and Optics", te: "కాంతి మరియు కాంతిశాస్త్రం" },
        description: { en: "Reflection, refraction, and lenses", te: "ప్రతిబింబం, వక్రీభవనం మరియు కటకాలు" },
        notes: { en: "## Light and Optics\n\n### Reflection\n- Angle of incidence = Angle of reflection\n- Types: Regular, Diffused\n\n### Refraction\n- Bending of light\n- Snell's Law: n₁sinθ₁ = n₂sinθ₂\n\n### Lenses\n- Convex: Converging\n- Concave: Diverging", te: "## కాంతి మరియు కాంతిశాస్త్రం\n\n### ప్రతిబింబం\n- పతన కోణం = ప్రతిబింబ కోణం\n\n### వక్రీభవనం\n- కాంతి వంగడం" },
        quiz: generateScienceQuiz('physics'),
        practice: generateSciencePractice('physics')
      }
    ]
  },
  {
    id: `biological-science-${grade}`,
    title: { en: "Biological Science", te: "జీవ శాస్త్రం" },
    icon: "Dna",
    color: "game-green",
    chapters: [
      {
        id: `cell-${grade}`,
        title: { en: "Cell: The Unit of Life", te: "కణం: జీవ యూనిట్" },
        description: { en: "Cell structure and functions", te: "కణ నిర్మాణం మరియు విధులు" },
        notes: { en: "## Cell: The Unit of Life\n\n### Cell Theory\n- All living things are made of cells\n- Cell is the basic unit of life\n- New cells come from existing cells\n\n### Cell Organelles\n- Nucleus: Control center, DNA\n- Mitochondria: Powerhouse\n- Chloroplast: Photosynthesis (plants)\n- Ribosome: Protein synthesis", te: "## కణం: జీవ యూనిట్\n\n### కణ సిద్ధాంతం\n- అన్ని సజీవులు కణాలతో తయారవుతాయి\n- కణం జీవ ప్రాథమిక యూనిట్\n\n### కణ అవయవికలు\n- కేంద్రకం: నియంత్రణ కేంద్రం\n- మైటోకాండ్రియా: శక్తి కేంద్రం" },
        quiz: generateBiologicalScienceQuiz(),
        practice: generateBiologicalSciencePractice()
      },
      {
        id: `human-body-${grade}`,
        title: { en: "Human Body Systems", te: "మానవ శరీర వ్యవస్థలు" },
        description: { en: "Digestive, respiratory, circulatory systems", te: "జీర్ణ, శ్వాసకోశ, రక్త ప్రసరణ వ్యవస్థలు" },
        notes: { en: "## Human Body Systems\n\n### Digestive System\nMouth → Esophagus → Stomach → Small Intestine → Large Intestine\n\n### Respiratory System\nNose → Trachea → Bronchi → Lungs\n\n### Circulatory System\nHeart → Arteries → Capillaries → Veins → Heart", te: "## మానవ శరీర వ్యవస్థలు\n\n### జీర్ణ వ్యవస్థ\nనోరు → అన్నవాహిక → జఠరం → చిన్న ప్రేగు → పెద్ద ప్రేగు" },
        quiz: generateBiologicalScienceQuiz(),
        practice: generateBiologicalSciencePractice()
      },
      {
        id: `reproduction-${grade}`,
        title: { en: "Reproduction", te: "ప్రత్యుత్పత్తి" },
        description: { en: "Asexual and sexual reproduction", te: "అలైంగిక మరియు లైంగిక ప్రత్యుత్పత్తి" },
        notes: { en: "## Reproduction\n\n### Asexual Reproduction\n- Binary Fission: Amoeba\n- Budding: Yeast, Hydra\n- Vegetative Propagation: Plants\n\n### Sexual Reproduction\n- Involves two parents\n- Fusion of gametes\n- Genetic variation", te: "## ప్రత్యుత్పత్తి\n\n### అలైంగిక ప్రత్యుత్పత్తి\n- ద్వి విభజన: అమీబా\n- మొగ్గతొడగడం: ఈస్ట్, హైడ్రా" },
        quiz: generateBiologicalScienceQuiz(),
        practice: generateBiologicalSciencePractice()
      }
    ]
  },
  {
    id: `social-${grade}`,
    title: { en: "Social Studies", te: "సామాజిక శాస్త్రం" },
    icon: "Globe",
    color: "game-yellow",
    chapters: [
      {
        id: `indian-history-${grade}`,
        title: { en: "Indian History", te: "భారత చరిత్ర" },
        description: { en: "Freedom struggle and modern India", te: "స్వాతంత్ర్య పోరాటం మరియు ఆధునిక భారతదేశం" },
        notes: { en: "## Indian History\n\n### Freedom Struggle\n- 1857: First War of Independence\n- 1885: Indian National Congress founded\n- 1947: Independence\n\n### Freedom Fighters\n- Mahatma Gandhi\n- Jawaharlal Nehru\n- Subhash Chandra Bose\n- Bhagat Singh\n- Sardar Patel", te: "## భారత చరిత్ర\n\n### స్వాతంత్ర్య పోరాటం\n- 1857: మొదటి స్వాతంత్ర్య యుద్ధం\n- 1885: భారత జాతీయ కాంగ్రెస్ స్థాపన\n- 1947: స్వాతంత్ర్యం" },
        quiz: generateSocialQuiz(),
        practice: generateSocialPractice()
      },
      {
        id: `geography-advanced-${grade}`,
        title: { en: "Geography of India", te: "భారతదేశ భూగోళశాస్త్రం" },
        description: { en: "Physical features and climate", te: "భౌతిక లక్షణాలు మరియు వాతావరణం" },
        notes: { en: "## Geography of India\n\n### Physical Features\n- Himalayas: Northern mountains\n- Indo-Gangetic Plain: Fertile plains\n- Deccan Plateau: Southern India\n- Coastal Plains: East and West\n\n### Rivers\n- Ganga, Yamuna, Brahmaputra\n- Godavari, Krishna, Kaveri", te: "## భారతదేశ భూగోళశాస్త్రం\n\n### భౌతిక లక్షణాలు\n- హిమాలయాలు: ఉత్తర పర్వతాలు\n- ఇండో-గంగా మైదానం\n- దక్కన్ పీఠభూమి" },
        quiz: generateSocialQuiz(),
        practice: generateSocialPractice()
      },
      {
        id: `civics-advanced-${grade}`,
        title: { en: "Indian Constitution", te: "భారత రాజ్యాంగం" },
        description: { en: "Democracy and governance", te: "ప్రజాస్వామ్యం మరియు పరిపాలన" },
        notes: { en: "## Indian Constitution\n\n### Key Features\n- Longest written constitution\n- Federal structure\n- Parliamentary democracy\n- Fundamental Rights\n- Directive Principles\n\n### Government Structure\n- Executive: President, PM\n- Legislature: Parliament\n- Judiciary: Supreme Court", te: "## భారత రాజ్యాంగం\n\n### ముఖ్య లక్షణాలు\n- అత్యంత పొడవైన వ్రాతపూర్వక రాజ్యాంగం\n- సమాఖ్య నిర్మాణం\n- పార్లమెంటరీ ప్రజాస్వామ్యం" },
        quiz: generateSocialQuiz(),
        practice: generateSocialPractice()
      }
    ]
  }
];

// Main classes array
export const classes: ClassData[] = [
  {
    id: "class-6",
    grade: 6,
    title: { en: "Class 6", te: "6వ తరగతి" },
    description: { en: "Foundation concepts for young learners", te: "యువ విద్యార్థుల కోసం పునాది భావనలు" },
    subjects: createSubjects6_7(6)
  },
  {
    id: "class-7",
    grade: 7,
    title: { en: "Class 7", te: "7వ తరగతి" },
    description: { en: "Building on fundamentals", te: "ప్రాథమికాల మీద నిర్మాణం" },
    subjects: createSubjects6_7(7)
  },
  {
    id: "class-8",
    grade: 8,
    title: { en: "Class 8", te: "8వ తరగతి" },
    description: { en: "Advanced concepts introduction", te: "ఉన్నత భావనల పరిచయం" },
    subjects: createSubjects8_10(8)
  },
  {
    id: "class-9",
    grade: 9,
    title: { en: "Class 9", te: "9వ తరగతి" },
    description: { en: "Pre-board preparation begins", te: "బోర్డ్ పూర్వ ప్రిపరేషన్ ప్రారంభం" },
    subjects: createSubjects8_10(9)
  },
  {
    id: "class-10",
    grade: 10,
    title: { en: "Class 10", te: "10వ తరగతి" },
    description: { en: "Board exam preparation", te: "బోర్డ్ పరీక్షల తయారీ" },
    subjects: createSubjects8_10(10)
  }
];
