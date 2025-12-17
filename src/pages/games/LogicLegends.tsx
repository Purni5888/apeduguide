import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Brain, Lock, Unlock, CheckCircle2, XCircle, RotateCcw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';

interface Level {
  id: number;
  title: { en: string; te: string };
  description: { en: string; te: string };
  type: 'sequence' | 'equation' | 'grid' | 'truth' | 'prime' | 'code';
  puzzle: any;
  answer: string;
  hint: { en: string; te: string };
}

const levels: Level[] = [
  {
    id: 1,
    title: { en: "Sequence Pattern", te: "క్రమం నమూనా" },
    description: { en: "Find the next number in the sequence", te: "క్రమంలో తదుపరి సంఖ్యను కనుగొనండి" },
    type: "sequence",
    puzzle: { sequence: [2, 4, 8, 16, 32, "?"] },
    answer: "64",
    hint: { en: "Each number is doubled", te: "ప్రతి సంఖ్య రెట్టింపు అవుతుంది" }
  },
  {
    id: 2,
    title: { en: "Missing Number", te: "మిస్సింగ్ నంబర్" },
    description: { en: "Solve: 3x + 7 = 22. Find x.", te: "పరిష్కరించండి: 3x + 7 = 22. x కనుగొనండి." },
    type: "equation",
    puzzle: { equation: "3x + 7 = 22" },
    answer: "5",
    hint: { en: "Subtract 7 first, then divide by 3", te: "మొదట 7 తీసివేయండి, తర్వాత 3తో భాగించండి" }
  },
  {
    id: 3,
    title: { en: "Logic Grid", te: "లాజిక్ గ్రిడ్" },
    description: { en: "In a 3x3 grid, each row and column must have 1, 2, 3. What goes in the center?", te: "3x3 గ్రిడ్‌లో, ప్రతి వరుస మరియు నిలువు వరుసలో 1, 2, 3 ఉండాలి. మధ్యలో ఏమి ఉంటుంది?" },
    type: "grid",
    puzzle: { grid: [[1, 2, 3], [3, "?", 1], [2, 1, "?"]] },
    answer: "2",
    hint: { en: "Look at what's missing in the middle row", te: "మధ్య వరుసలో ఏమి మిస్ అవుతుందో చూడండి" }
  },
  {
    id: 4,
    title: { en: "Truth-Teller", te: "నిజం చెప్పేవాడు" },
    description: { en: "A says 'I am lying'. Is this possible? Answer YES or NO.", te: "A చెప్పాడు 'నేను అబద్ధం చెప్తున్నాను'. ఇది సాధ్యమా? అవును లేదా కాదు అని సమాధానం ఇవ్వండి." },
    type: "truth",
    puzzle: { statement: "I am lying" },
    answer: "NO",
    hint: { en: "If he's lying about lying, he's telling the truth...", te: "అతను అబద్ధం గురించి అబద్ధం చెప్తే, అతను నిజం చెప్తున్నాడు..." }
  },
  {
    id: 5,
    title: { en: "Prime Number", te: "ప్రధాన సంఖ్య" },
    description: { en: "What is the 10th prime number?", te: "10వ ప్రధాన సంఖ్య ఏమిటి?" },
    type: "prime",
    puzzle: { question: "10th prime" },
    answer: "29",
    hint: { en: "Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, ...", te: "ప్రధాన సంఖ్యలు: 2, 3, 5, 7, 11, 13, 17, 19, 23, ..." }
  },
  {
    id: 6,
    title: { en: "Code Breaking", te: "కోడ్ బ్రేకింగ్" },
    description: { en: "If A=1, B=2, C=3... What number is CAB?", te: "A=1, B=2, C=3... అయితే CAB అంటే ఏ సంఖ్య?" },
    type: "code",
    puzzle: { code: "CAB" },
    answer: "312",
    hint: { en: "C=3, A=1, B=2. Put them together.", te: "C=3, A=1, B=2. వాటిని కలపండి." }
  }
];

const LogicLegends: React.FC = () => {
  const { t } = useLanguage();
  const { addXP } = useAuth();
  
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [currentAnswers, setCurrentAnswers] = useState<Record<number, string>>({});
  const [showHints, setShowHints] = useState<number[]>([]);
  const [results, setResults] = useState<Record<number, boolean>>({});

  const checkAnswer = (level: Level) => {
    const userAnswer = currentAnswers[level.id]?.trim().toUpperCase();
    const isCorrect = userAnswer === level.answer.toUpperCase();
    
    setResults(prev => ({ ...prev, [level.id]: isCorrect }));
    
    if (isCorrect && !completedLevels.includes(level.id)) {
      setCompletedLevels(prev => [...prev, level.id]);
      const xp = showHints.includes(level.id) ? 10 : 20;
      addXP(xp);
    }
  };

  const toggleHint = (levelId: number) => {
    setShowHints(prev => 
      prev.includes(levelId) 
        ? prev.filter(id => id !== levelId)
        : [...prev, levelId]
    );
  };

  const resetGame = () => {
    setCompletedLevels([]);
    setCurrentAnswers({});
    setShowHints([]);
    setResults({});
  };

  const totalXP = completedLevels.reduce((sum, levelId) => {
    return sum + (showHints.includes(levelId) ? 10 : 20);
  }, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ChevronLeft className="w-4 h-4" />
            {t({ en: 'Back to Home', te: 'హోమ్‌కు తిరిగి వెళ్ళండి' })}
          </Button>
        </Link>

        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{t({ en: 'Logic Legends', te: 'లాజిక్ లెజెండ్స్' })}</h1>
                <p className="text-muted-foreground">
                  {completedLevels.length}/{levels.length} {t({ en: 'levels completed', te: 'స్థాయిలు పూర్తయ్యాయి' })}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-accent font-bold">
                <Sparkles className="w-5 h-5" />
                {totalXP} XP
              </div>
              <Button variant="ghost" size="sm" onClick={resetGame} className="gap-1">
                <RotateCcw className="w-4 h-4" />
                {t({ en: 'Reset', te: 'రీసెట్' })}
              </Button>
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {levels.map((level, index) => {
              const isCompleted = completedLevels.includes(level.id);
              const isLocked = index > 0 && !completedLevels.includes(levels[index - 1].id);
              const showResult = results[level.id] !== undefined;

              return (
                <AccordionItem 
                  key={level.id} 
                  value={`level-${level.id}`}
                  disabled={isLocked}
                  className="border rounded-xl overflow-hidden"
                >
                  <AccordionTrigger className={`px-6 py-4 hover:no-underline ${isLocked ? 'opacity-50' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isCompleted 
                          ? 'bg-green-500 text-white' 
                          : isLocked 
                            ? 'bg-muted text-muted-foreground'
                            : 'bg-gradient-to-br from-purple-500 to-purple-600 text-white'
                      }`}>
                        {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : isLocked ? <Lock className="w-5 h-5" /> : level.id}
                      </div>
                      <div className="text-left">
                        <div className="font-bold">{t(level.title)}</div>
                        <div className="text-sm text-muted-foreground">{t(level.description)}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-6">
                    <Card>
                      <CardContent className="p-6">
                        {/* Puzzle Display */}
                        {level.type === 'sequence' && (
                          <div className="flex items-center justify-center gap-3 mb-6 text-2xl font-mono">
                            {level.puzzle.sequence.map((num: any, i: number) => (
                              <span key={i} className={num === '?' ? 'text-primary font-bold' : ''}>
                                {num}
                                {i < level.puzzle.sequence.length - 1 && <span className="text-muted-foreground mx-1">,</span>}
                              </span>
                            ))}
                          </div>
                        )}

                        {level.type === 'equation' && (
                          <div className="text-center text-3xl font-mono mb-6">
                            {level.puzzle.equation}
                          </div>
                        )}

                        {level.type === 'grid' && (
                          <div className="flex justify-center mb-6">
                            <div className="grid grid-cols-3 gap-2">
                              {level.puzzle.grid.flat().map((cell: any, i: number) => (
                                <div 
                                  key={i} 
                                  className={`w-12 h-12 flex items-center justify-center border-2 rounded-lg text-xl font-bold ${
                                    cell === '?' ? 'border-primary bg-primary/10 text-primary' : 'border-border'
                                  }`}
                                >
                                  {cell}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {(level.type === 'truth' || level.type === 'prime' || level.type === 'code') && (
                          <div className="text-center text-xl mb-6 p-4 bg-muted rounded-lg">
                            {level.type === 'truth' && `"${level.puzzle.statement}"`}
                            {level.type === 'code' && <span className="font-mono text-2xl">{level.puzzle.code}</span>}
                          </div>
                        )}

                        {/* Hint */}
                        {showHints.includes(level.id) && (
                          <div className="mb-4 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-sm">
                            💡 {t(level.hint)}
                          </div>
                        )}

                        {!showHints.includes(level.id) && !isCompleted && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => toggleHint(level.id)}
                            className="mb-4"
                          >
                            {t({ en: 'Show hint (-10 XP)', te: 'సూచన చూపించు (-10 XP)' })}
                          </Button>
                        )}

                        {/* Answer Input */}
                        <div className="flex gap-3">
                          <Input
                            placeholder={t({ en: 'Your answer...', te: 'మీ సమాధానం...' })}
                            value={currentAnswers[level.id] || ''}
                            onChange={(e) => setCurrentAnswers(prev => ({ ...prev, [level.id]: e.target.value }))}
                            disabled={isCompleted}
                            className={showResult && !results[level.id] ? 'border-red-500' : ''}
                          />
                          <Button 
                            onClick={() => checkAnswer(level)}
                            disabled={isCompleted || !currentAnswers[level.id]}
                          >
                            {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : t({ en: 'Check', te: 'తనిఖీ' })}
                          </Button>
                        </div>

                        {showResult && !results[level.id] && (
                          <div className="mt-3 flex items-center gap-2 text-red-500">
                            <XCircle className="w-4 h-4" />
                            {t({ en: 'Incorrect! Try again.', te: 'తప్పు! మళ్ళీ ప్రయత్నించండి.' })}
                          </div>
                        )}

                        {isCompleted && (
                          <div className="mt-3 flex items-center gap-2 text-green-500">
                            <CheckCircle2 className="w-4 h-4" />
                            {t({ en: 'Correct!', te: 'సరైనది!' })} +{showHints.includes(level.id) ? 10 : 20} XP
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          {completedLevels.length === levels.length && (
            <Card className="mt-8 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h2 className="text-2xl font-bold mb-2">
                  {t({ en: 'Logic Legend!', te: 'లాజిక్ లెజెండ్!' })}
                </h2>
                <p className="text-muted-foreground">
                  {t({ en: 'You completed all puzzles!', te: 'మీరు అన్ని పజిల్స్ పూర్తి చేశారు!' })}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogicLegends;
