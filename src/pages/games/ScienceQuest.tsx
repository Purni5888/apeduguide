import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Atom, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';

interface ElementRiddle {
  riddle: { en: string; te: string };
  element: string;
  symbol: string;
  hint: { en: string; te: string };
}

const riddles: ElementRiddle[] = [
  {
    riddle: { en: "I'm number one on the periodic table, lightest of all, in water I'm stable.", te: "నేను పీరియాడిక్ టేబుల్‌లో మొదటి వాడిని, అన్నింటిలో తేలికైనవాడిని, నీటిలో స్థిరంగా ఉంటాను." },
    element: "Hydrogen",
    symbol: "H",
    hint: { en: "Makes up most of the universe", te: "విశ్వంలో ఎక్కువ భాగం ఇదే" }
  },
  {
    riddle: { en: "I help you breathe, I'm in the air, without me life wouldn't be fair.", te: "నేను మీకు శ్వాసించడంలో సహాయం చేస్తాను, నేను గాలిలో ఉన్నాను, నేను లేకుండా జీవితం న్యాయంగా ఉండదు." },
    element: "Oxygen",
    symbol: "O",
    hint: { en: "About 21% of Earth's atmosphere", te: "భూమి వాతావరణంలో దాదాపు 21%" }
  },
  {
    riddle: { en: "In your bones and teeth I stay, calcium's my name, hip hooray!", te: "మీ ఎముకలు మరియు దంతాలలో నేను ఉంటాను, కాల్షియం నా పేరు!" },
    element: "Calcium",
    symbol: "Ca",
    hint: { en: "Drink milk to get me", te: "నన్ను పొందడానికి పాలు తాగండి" }
  },
  {
    riddle: { en: "I make things rust, I'm red-brown dust, in blood I am a must.", te: "నేను వస్తువులను తుప్పు పట్టిస్తాను, నేను ఎర్ర-గోధుమ ధూళి, రక్తంలో నేను తప్పనిసరి." },
    element: "Iron",
    symbol: "Fe",
    hint: { en: "Steel is made from me", te: "స్టీల్ నా నుండి తయారవుతుంది" }
  },
  {
    riddle: { en: "I'm precious and yellow, kings wear me with pride, in jewelry I forever reside.", te: "నేను విలువైన మరియు పసుపు రంగులో ఉంటాను, రాజులు గర్వంగా నన్ను ధరిస్తారు, ఆభరణాలలో నేను శాశ్వతంగా ఉంటాను." },
    element: "Gold",
    symbol: "Au",
    hint: { en: "Olympic medals are made of me", te: "ఒలింపిక్ పతకాలు నా నుండి తయారవుతాయి" }
  }
];

const ScienceQuest: React.FC = () => {
  const { t } = useLanguage();
  const { addXP } = useAuth();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [gameComplete, setGameComplete] = useState(false);
  const [draggedElement, setDraggedElement] = useState<string | null>(null);

  const currentRiddle = riddles[currentIndex];
  const allSymbols = riddles.map(r => r.symbol).sort(() => Math.random() - 0.5);

  const handleDragStart = (symbol: string) => {
    setDraggedElement(symbol);
  };

  const handleDrop = () => {
    if (draggedElement) {
      checkAnswer(draggedElement);
      setDraggedElement(null);
    }
  };

  const checkAnswer = (symbol: string) => {
    setSelectedAnswer(symbol);
    
    if (symbol === currentRiddle.symbol) {
      setScore(prev => prev + (showHint ? 5 : 10));
    }

    setTimeout(() => {
      if (currentIndex < riddles.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowHint(false);
      } else {
        setGameComplete(true);
        const xpEarned = score + (symbol === currentRiddle.symbol ? (showHint ? 5 : 10) : 0);
        addXP(xpEarned);
      }
    }, 1500);
  };

  const restartGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowHint(false);
    setSelectedAnswer(null);
    setGameComplete(false);
  };

  if (gameComplete) {
    const percentage = Math.round((score / (riddles.length * 10)) * 100);

    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-2xl animate-celebrate">
              <Atom className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-4xl font-bold mb-4">
              {percentage >= 70 
                ? t({ en: 'Element Master! 🎉', te: 'మూలక మాస్టర్! 🎉' })
                : t({ en: 'Quest Complete!', te: 'క్వెస్ట్ పూర్తయింది!' })
              }
            </h1>

            <div className="text-6xl font-bold text-primary my-6">{score}/{riddles.length * 10}</div>

            <div className="flex items-center justify-center gap-2 text-accent font-bold mb-8 animate-celebrate">
              <Sparkles className="w-5 h-5" />
              +{score} XP {t({ en: 'earned!', te: 'సంపాదించారు!' })}
            </div>

            <div className="flex gap-4">
              <Button onClick={restartGame} size="lg" className="flex-1 gap-2">
                <RotateCcw className="w-5 h-5" />
                {t({ en: 'Play Again', te: 'మళ్ళీ ఆడండి' })}
              </Button>
              <Link to="/" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  {t({ en: 'Home', te: 'హోమ్' })}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Atom className="w-6 h-6 text-green-500" />
              {t({ en: 'Science Quest', te: 'సైన్స్ క్వెస్ట్' })}
            </h1>
            <div className="text-lg font-bold text-primary">
              {t({ en: 'Score', te: 'స్కోర్' })}: {score}
            </div>
          </div>

          <div className="text-sm text-muted-foreground mb-4">
            {t({ en: 'Riddle', te: 'చిక్కు' })} {currentIndex + 1} / {riddles.length}
          </div>

          <Card className="mb-6 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-green-500 to-green-600" />
            <CardContent className="p-8">
              <p className="text-xl text-center mb-6 leading-relaxed">
                "{t(currentRiddle.riddle)}"
              </p>

              {showHint && (
                <div className="text-center text-sm text-muted-foreground mb-4 p-3 bg-muted rounded-lg">
                  💡 {t({ en: 'Hint', te: 'సూచన' })}: {t(currentRiddle.hint)}
                </div>
              )}

              {!showHint && !selectedAnswer && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowHint(true)}
                  className="w-full"
                >
                  {t({ en: 'Need a hint? (-5 points)', te: 'సూచన కావాలా? (-5 పాయింట్లు)' })}
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Drop Zone */}
          <div
            className={`p-8 rounded-xl border-2 border-dashed mb-6 text-center transition-all ${
              selectedAnswer 
                ? selectedAnswer === currentRiddle.symbol 
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                  : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                : 'border-muted-foreground/30 hover:border-primary'
            }`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            {selectedAnswer ? (
              <div className="flex flex-col items-center gap-2">
                {selectedAnswer === currentRiddle.symbol ? (
                  <>
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                    <span className="text-xl font-bold">{currentRiddle.element} ({currentRiddle.symbol})</span>
                    <span className="text-green-600">{t({ en: 'Correct!', te: 'సరైనది!' })}</span>
                  </>
                ) : (
                  <>
                    <span className="text-4xl">❌</span>
                    <span className="text-red-600">{t({ en: 'Try again!', te: 'మళ్ళీ ప్రయత్నించండి!' })}</span>
                    <span className="text-sm text-muted-foreground">
                      {t({ en: 'Answer:', te: 'సమాధానం:' })} {currentRiddle.element} ({currentRiddle.symbol})
                    </span>
                  </>
                )}
              </div>
            ) : (
              <p className="text-muted-foreground">
                {t({ en: 'Drag the correct element here', te: 'సరైన మూలకాన్ని ఇక్కడ లాగండి' })}
              </p>
            )}
          </div>

          {/* Element Cards */}
          <div className="grid grid-cols-5 gap-3">
            {allSymbols.map((symbol) => {
              const element = riddles.find(r => r.symbol === symbol)!;
              const isDisabled = !!selectedAnswer;
              
              return (
                <div
                  key={symbol}
                  draggable={!isDisabled}
                  onDragStart={() => handleDragStart(symbol)}
                  onClick={() => !isDisabled && checkAnswer(symbol)}
                  className={`p-4 rounded-xl border-2 text-center cursor-pointer transition-all ${
                    isDisabled 
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:border-primary hover:shadow-lg hover:-translate-y-1 active:scale-95'
                  }`}
                >
                  <div className="text-2xl font-bold text-primary">{symbol}</div>
                  <div className="text-xs text-muted-foreground">{element.element}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceQuest;
