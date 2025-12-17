import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Swords, Heart, Zap, Shield, RotateCcw, Sparkles, Skull } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';

interface VocabQuestion {
  word: string;
  type: 'synonym' | 'antonym' | 'meaning';
  question: { en: string; te: string };
  options: { en: string; te: string }[];
  correctIndex: number;
}

const questions: VocabQuestion[] = [
  {
    word: "Happy",
    type: "synonym",
    question: { en: "Which word means the same as 'Happy'?", te: "'Happy' కు సమానార్థకం ఏమిటి?" },
    options: [
      { en: "Sad", te: "దుఃఖం" },
      { en: "Joyful", te: "ఆనందకరమైన" },
      { en: "Angry", te: "కోపం" },
      { en: "Tired", te: "అలసిన" }
    ],
    correctIndex: 1
  },
  {
    word: "Large",
    type: "antonym",
    question: { en: "Which word is the OPPOSITE of 'Large'?", te: "'Large' కు వ్యతిరేకపదం ఏమిటి?" },
    options: [
      { en: "Big", te: "పెద్ద" },
      { en: "Huge", te: "భారీ" },
      { en: "Small", te: "చిన్న" },
      { en: "Tall", te: "పొడవైన" }
    ],
    correctIndex: 2
  },
  {
    word: "Benevolent",
    type: "meaning",
    question: { en: "What does 'Benevolent' mean?", te: "'Benevolent' అంటే ఏమిటి?" },
    options: [
      { en: "Kind and generous", te: "దయగల మరియు ఉదారమైన" },
      { en: "Mean and cruel", te: "కఠినమైన మరియు క్రూరమైన" },
      { en: "Fast and quick", te: "వేగవంతమైన" },
      { en: "Slow and lazy", te: "నెమ్మదిగా మరియు సోమరి" }
    ],
    correctIndex: 0
  },
  {
    word: "Brave",
    type: "synonym",
    question: { en: "Which word means the same as 'Brave'?", te: "'Brave' కు సమానార్థకం ఏమిటి?" },
    options: [
      { en: "Cowardly", te: "భయస్థుడు" },
      { en: "Courageous", te: "ధైర్యవంతుడు" },
      { en: "Fearful", te: "భయపడే" },
      { en: "Weak", te: "బలహీనమైన" }
    ],
    correctIndex: 1
  },
  {
    word: "Ancient",
    type: "antonym",
    question: { en: "Which word is the OPPOSITE of 'Ancient'?", te: "'Ancient' కు వ్యతిరేకపదం ఏమిటి?" },
    options: [
      { en: "Old", te: "పాత" },
      { en: "Historic", te: "చారిత్రక" },
      { en: "Modern", te: "ఆధునిక" },
      { en: "Aged", te: "వృద్ధుడు" }
    ],
    correctIndex: 2
  },
  {
    word: "Diligent",
    type: "meaning",
    question: { en: "What does 'Diligent' mean?", te: "'Diligent' అంటే ఏమిటి?" },
    options: [
      { en: "Lazy", te: "సోమరి" },
      { en: "Hardworking", te: "కష్టపడి పని చేసే" },
      { en: "Careless", te: "నిర్లక్ష్యమైన" },
      { en: "Sleepy", te: "నిద్రమత్తు" }
    ],
    correctIndex: 1
  }
];

const WordWarrior: React.FC = () => {
  const { t } = useLanguage();
  const { addXP } = useAuth();
  
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'victory' | 'defeat'>('menu');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [attackPower, setAttackPower] = useState(20);
  const [combo, setCombo] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [totalDamageDealt, setTotalDamageDealt] = useState(0);

  const currentQ = questions[currentQuestion % questions.length];

  useEffect(() => {
    if (monsterHealth <= 0) {
      setGameState('victory');
      addXP(totalDamageDealt);
    } else if (playerHealth <= 0) {
      setGameState('defeat');
      addXP(Math.floor(totalDamageDealt / 2));
    }
  }, [monsterHealth, playerHealth, totalDamageDealt, addXP]);

  const startGame = () => {
    setGameState('playing');
    setPlayerHealth(100);
    setMonsterHealth(100);
    setAttackPower(20);
    setCombo(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setTotalDamageDealt(0);
  };

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);

    const isCorrect = index === currentQ.correctIndex;

    setTimeout(() => {
      if (isCorrect) {
        const damage = attackPower * (1 + combo * 0.2);
        setMonsterHealth(prev => Math.max(0, prev - damage));
        setTotalDamageDealt(prev => prev + damage);
        setCombo(prev => prev + 1);
        setAttackPower(prev => Math.min(50, prev + 5));
      } else {
        const monsterDamage = 25;
        setPlayerHealth(prev => Math.max(0, prev - monsterDamage));
        setCombo(0);
        setAttackPower(20);
      }

      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }, 1500);
  };

  if (gameState === 'menu') {
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

          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-2xl animate-float">
              <Swords className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-4xl font-bold text-gradient mb-4">
              {t({ en: 'Word Warrior', te: 'వర్డ్ వారియర్' })}
            </h1>
            <p className="text-muted-foreground mb-8">
              {t({ en: 'Battle monsters with the power of vocabulary! Answer correctly to attack, wrong answers hurt you!', te: 'పదజాల శక్తితో రాక్షసులతో పోరాడండి! సరిగ్గా సమాధానం ఇస్తే దాడి, తప్పు సమాధానాలు మిమ్మల్ని బాధిస్తాయి!' })}
            </p>

            <Button onClick={startGame} size="lg" className="w-full text-lg py-6 gap-2">
              <Swords className="w-5 h-5" />
              {t({ en: 'Start Battle', te: 'యుద్ధం ప్రారంభించండి' })}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'victory' || gameState === 'defeat') {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto text-center">
            <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center shadow-2xl ${
              gameState === 'victory' 
                ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 animate-celebrate' 
                : 'bg-gradient-to-br from-gray-500 to-gray-600'
            }`}>
              {gameState === 'victory' ? <Swords className="w-12 h-12 text-white" /> : <Skull className="w-12 h-12 text-white" />}
            </div>
            
            <h1 className="text-4xl font-bold mb-4">
              {gameState === 'victory' 
                ? t({ en: 'Victory! 🎉', te: 'విజయం! 🎉' })
                : t({ en: 'Defeated...', te: 'ఓడిపోయారు...' })
              }
            </h1>

            <div className="flex items-center justify-center gap-2 text-accent font-bold mb-8 animate-celebrate">
              <Sparkles className="w-5 h-5" />
              +{gameState === 'victory' ? totalDamageDealt : Math.floor(totalDamageDealt / 2)} XP
            </div>

            <div className="flex gap-4">
              <Button onClick={startGame} size="lg" className="flex-1 gap-2">
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
        <div className="max-w-lg mx-auto">
          {/* Battle Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Player */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span className="font-bold">{t({ en: 'You', te: 'మీరు' })}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  <Progress value={playerHealth} className="h-3 flex-1" />
                  <span className="text-sm">{playerHealth}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span>{t({ en: 'ATK', te: 'దాడి' })}: {attackPower}</span>
                  {combo > 0 && (
                    <span className="text-accent">x{combo}</span>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Monster */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Skull className="w-5 h-5 text-purple-500" />
                  <span className="font-bold">{t({ en: 'Vocab Beast', te: 'పదజాల రాక్షసుడు' })}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  <Progress value={monsterHealth} className="h-3 flex-1 [&>div]:bg-purple-500" />
                  <span className="text-sm">{Math.round(monsterHealth)}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Monster Visual */}
          <div className="text-center mb-6">
            <div className={`text-8xl ${showResult && selectedAnswer === currentQ.correctIndex ? 'animate-shake' : ''}`}>
              👹
            </div>
          </div>

          {/* Question */}
          <Card className="overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-pink-500 to-pink-600" />
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-2 uppercase">
                {currentQ.type === 'synonym' && t({ en: 'Synonym', te: 'సమానార్థకం' })}
                {currentQ.type === 'antonym' && t({ en: 'Antonym', te: 'వ్యతిరేకపదం' })}
                {currentQ.type === 'meaning' && t({ en: 'Meaning', te: 'అర్థం' })}
              </div>
              
              <h3 className="text-xl font-bold mb-6">{t(currentQ.question)}</h3>

              <div className="grid grid-cols-2 gap-3">
                {currentQ.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === currentQ.correctIndex;
                  const showCorrectHighlight = showResult && isCorrect;
                  const showWrongHighlight = showResult && isSelected && !isCorrect;

                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className={`py-6 text-lg transition-all ${
                        showCorrectHighlight
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                          : showWrongHighlight
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20 animate-shake'
                            : isSelected
                              ? 'border-primary bg-primary/5'
                              : ''
                      }`}
                      onClick={() => handleAnswer(index)}
                      disabled={showResult}
                    >
                      {t(option)}
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WordWarrior;
