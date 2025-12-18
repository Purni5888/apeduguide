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
    title: { en: "Telugu", te: "తెలుగు" },
    icon: "Languages",
    color: "game-pink",
    chapters: [
      {
        id: `telugu-varnamala-${grade}`,
        title: { en: "Telugu Alphabet", te: "తెలుగు వర్ణమాల" },
        description: { en: "Learn Telugu letters and sounds", te: "తెలుగు అక్షరాలు మరియు ధ్వనులు నేర్చుకోండి" },
        notes: { en: "## Telugu Alphabet (Varnamala)\n\n### Vowels (అచ్చులు)\nఅ ఆ ఇ ఈ ఉ ఊ ఋ ౠ ఎ ఏ ఐ ఒ ఓ ఔ అం అః\n\n### Consonants (హల్లులు)\nక ఖ గ ఘ ఙ చ ఛ జ ఝ ఞ ట ఠ డ ఢ ణ త థ ద ధ న ప ఫ బ భ మ య ర ల వ శ ష స హ ళ", te: "## తెలుగు వర్ణమాల\n\n### అచ్చులు\nఅ ఆ ఇ ఈ ఉ ఊ ఋ ఎ ఏ ఐ ఒ ఓ ఔ అం అః\n\n### హల్లులు\nక ఖ గ ఘ ఙ చ ఛ జ ఝ ఞ ట ఠ డ ఢ ణ త థ ద ధ న ప ఫ బ భ మ య ర ల వ శ ష స హ ళ" },
        quiz: generateTeluguQuiz(),
        practice: generateTeluguPractice()
      },
      {
        id: `telugu-grammar-${grade}`,
        title: { en: "Telugu Grammar", te: "తెలుగు వ్యాకరణం" },
        description: { en: "Learn Telugu grammar rules", te: "తెలుగు వ్యాకరణ నియమాలు నేర్చుకోండి" },
        notes: { en: "## Telugu Grammar\n\n### Parts of Speech\n- Noun (నామవాచకం)\n- Verb (క్రియ)\n- Adjective (విశేషణం)\n- Adverb (క్రియా విశేషణం)\n\n### Sentence Structure\nSubject + Object + Verb (SOV order in Telugu)", te: "## తెలుగు వ్యాకరణం\n\n### వాక్భాగాలు\n- నామవాచకం\n- క్రియ\n- విశేషణం\n- క్రియా విశేషణం\n\n### వాక్య నిర్మాణం\nకర్త + కర్మ + క్రియ" },
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
        id: `hindi-varnamala-${grade}`,
        title: { en: "Hindi Alphabet", te: "హిందీ వర్ణమాల" },
        description: { en: "Learn Devanagari script", te: "దేవనాగరి లిపి నేర్చుకోండి" },
        notes: { en: "## Hindi Varnamala\n\n### Swar (स्वर)\nअ आ इ ई उ ऊ ऋ ए ऐ ओ औ अं अः\n\n### Vyanjan (व्यंजन)\nक ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न प फ ब भ म य र ल व श ष स ह", te: "## హిందీ వర్ణమాల\n\n### స్వర్\nअ आ इ ई उ ऊ ऋ ए ऐ ओ औ अं अः\n\n### వ్యంజన్\nక ఖ గ ఘ ఙ చ ఛ జ ఝ ఞ ట ఠ డ ఢ ణ త థ ద ధ న ప ఫ బ భ మ య ర ల వ శ ష స హ" },
        quiz: generateHindiQuiz(),
        practice: generateHindiPractice()
      },
      {
        id: `hindi-grammar-${grade}`,
        title: { en: "Hindi Grammar", te: "హిందీ వ్యాకరణం" },
        description: { en: "Learn Hindi grammar", te: "హిందీ వ్యాకరణం నేర్చుకోండి" },
        notes: { en: "## Hindi Grammar\n\n### Ling (Gender)\n- Pullling (Masculine): लड़का, घर\n- Striling (Feminine): लड़की, किताब\n\n### Vachan (Number)\n- Ekvachan (Singular): लड़का\n- Bahuvachan (Plural): लड़के", te: "## హిందీ వ్యాకరణం\n\n### లింగ్\n- పుల్లింగ్: లడ్కా, ఘర్\n- స్త్రీలింగ్: లడ్కీ, కితాబ్\n\n### వచన్\n- ఏక్‌వచన్: లడ్కా\n- బహువచన్: లడ్కే" },
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
        id: `english-grammar-${grade}`,
        title: { en: "English Grammar", te: "ఆంగ్ల వ్యాకరణం" },
        description: { en: "Parts of speech and sentence structure", te: "వాక్భాగాలు మరియు వాక్య నిర్మాణం" },
        notes: { en: "## English Grammar\n\n### Parts of Speech\n1. **Noun**: Naming words (book, Delhi)\n2. **Pronoun**: Replace nouns (he, she, it)\n3. **Verb**: Action words (run, eat, sleep)\n4. **Adjective**: Describe nouns (big, beautiful)\n5. **Adverb**: Describe verbs (quickly, slowly)\n6. **Preposition**: Show position (in, on, at)\n7. **Conjunction**: Join words (and, but, or)\n8. **Interjection**: Express emotions (Wow!, Oh!)", te: "## ఆంగ్ల వ్యాకరణం\n\n### వాక్భాగాలు\n1. **నామవాచకం**: పేరు పదాలు\n2. **సర్వనామం**: నామవాచకాలను భర్తీ చేస్తుంది\n3. **క్రియ**: చర్య పదాలు\n4. **విశేషణం**: నామవాచకాలను వర్ణిస్తుంది\n5. **క్రియా విశేషణం**: క్రియలను వర్ణిస్తుంది" },
        quiz: generateEnglishQuiz(),
        practice: generateEnglishPractice()
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
    chapters: [
      {
        id: `numbers-${grade}`,
        title: { en: "Knowing Our Numbers", te: "మన సంఖ్యలను తెలుసుకోవడం" },
        description: { en: "Learn about large numbers and place values", te: "పెద్ద సంఖ్యలు మరియు స్థాన విలువల గురించి" },
        notes: { en: "## Knowing Our Numbers\n\n### Place Value System\nFrom right to left:\n- Ones (1)\n- Tens (10)\n- Hundreds (100)\n- Thousands (1,000)\n- Ten Thousands (10,000)\n- Lakhs (1,00,000)\n- Ten Lakhs (10,00,000)\n- Crores (1,00,00,000)\n\n### Indian vs International System\n**Indian System:** 1,00,00,000 = 1 Crore\n**International System:** 10,000,000 = 10 Million", te: "## మన సంఖ్యలను తెలుసుకోవడం\n\n### స్థాన విలువ వ్యవస్థ\nకుడి నుండి ఎడమకు:\n- ఒకట్లు (1)\n- పదులు (10)\n- వందలు (100)\n- వేలు (1,000)\n- పదివేలు (10,000)\n- లక్షలు (1,00,000)" },
        quiz: generateMathQuiz('numbers', grade),
        practice: generateMathPractice('numbers', grade)
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
    chapters: [
      {
        id: `history-intro-${grade}`,
        title: { en: "Introduction to History", te: "చరిత్ర పరిచయం" },
        description: { en: "Understanding our past", te: "మన గత కాలాన్ని అర్థం చేసుకోవడం" },
        notes: { en: "## Introduction to History\n\n### What is History?\nStudy of the past - how people lived, what they believed.\n\n### Sources of History\n1. **Archaeological**: Coins, monuments, pottery\n2. **Literary**: Books, manuscripts\n3. **Oral**: Stories passed through generations\n\n### Important Terms\n- BCE: Before Common Era\n- CE: Common Era", te: "## చరిత్ర పరిచయం\n\n### చరిత్ర అంటే ఏమిటి?\nగత కాలం యొక్క అధ్యయనం\n\n### చరిత్ర మూలాలు\n1. **పురావస్తు**: నాణేలు, కట్టడాలు\n2. **సాహిత్య**: పుస్తకాలు, రాతప్రతులు" },
        quiz: generateSocialQuiz(),
        practice: generateSocialPractice()
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
