import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Timer, Zap, Trophy, RotateCcw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';

interface Question {
  question: string;
  answer: number;
  options: number[];
}

const generateQuestion = (difficulty: number): Question => {
  const operations = ['+', '-', '×'];
  const op = operations[Math.floor(Math.random() * (difficulty > 5 ? 3 : 2))];
  
  let a: number, b: number, answer: number;
  const maxNum = 10 + difficulty * 5;
  
  switch (op) {
    case '+':
      a = Math.floor(Math.random() * maxNum) + 1;
      b = Math.floor(Math.random() * maxNum) + 1;
      answer = a + b;
      break;
    case '-':
      a = Math.floor(Math.random() * maxNum) + 10;
      b = Math.floor(Math.random() * Math.min(a, maxNum)) + 1;
      answer = a - b;
      break;
    case '×':
      a = Math.floor(Math.random() * 12) + 1;
      b = Math.floor(Math.random() * 12) + 1;
      answer = a * b;
      break;
    default:
      a = b = answer = 0;
  }

  const options = [answer];
  while (options.length < 4) {
    const wrongAnswer = answer + (Math.floor(Math.random() * 20) - 10);
    if (wrongAnswer > 0 && !options.includes(wrongAnswer)) {
      options.push(wrongAnswer);
    }
  }
  
  return {
    question: `${a} ${op} ${b} = ?`,
    answer,
    options: options.sort(() => Math.random() - 0.5)
  };
};

const MathMaze: React.FC = () => {
  const { t } = useLanguage();
  const { addXP } = useAuth();
  
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameOver'>('menu');
  const [selectedClass, setSelectedClass] = useState('6');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('mathMazeHighScore');
    return saved ? parseInt(saved) : 0;
  });

  const difficulty = parseInt(selectedClass) - 5;

  const startGame = useCallback(() => {
    setGameState('playing');
    setScore(0);
    setCombo(0);
    setTimeLeft(60);
    setQuestionsAnswered(0);
    setCurrentQuestion(generateQuestion(difficulty));
  }, [difficulty]);

  useEffect(() => {
    if (gameState !== 'playing') return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameState('gameOver');
          if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('mathMazeHighScore', score.toString());
          }
          addXP(Math.floor(score / 10));
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, score, highScore, addXP]);

  const handleAnswer = (answer: number) => {
    if (!currentQuestion) return;

    if (answer === currentQuestion.answer) {
      const points = 10 * (1 + combo * 0.1);
      setScore(prev => prev + Math.floor(points));
      setCombo(prev => prev + 1);
    } else {
      setCombo(0);
    }
    
    setQuestionsAnswered(prev => prev + 1);
    setCurrentQuestion(generateQuestion(difficulty));
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
            <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl animate-float">
              <span className="text-4xl">🧮</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gradient mb-4">
              {t({ en: 'Math Maze Challenge', te: 'మాథ్ మేజ్ ఛాలెంజ్' })}
            </h1>
            <p className="text-muted-foreground mb-8">
              {t({ en: 'Race against time! Solve arithmetic puzzles to earn points and build combos!', te: 'సమయంతో పోటీ పడండి! పాయింట్లు సంపాదించడానికి అంకగణిత పజిల్స్ పరిష్కరించండి!' })}
            </p>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium">{t({ en: 'Select Difficulty', te: 'కఠినత్వం ఎంచుకోండి' })}</span>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">Class 6</SelectItem>
                      <SelectItem value="7">Class 7</SelectItem>
                      <SelectItem value="8">Class 8</SelectItem>
                      <SelectItem value="9">Class 9</SelectItem>
                      <SelectItem value="10">Class 10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{t({ en: 'High Score', te: 'అత్యధిక స్కోర్' })}</span>
                  <span className="font-bold text-primary">{highScore}</span>
                </div>
              </CardContent>
            </Card>

            <Button onClick={startGame} size="lg" className="w-full text-lg py-6 gap-2">
              <Zap className="w-5 h-5" />
              {t({ en: 'Start Game', te: 'ఆట ప్రారంభించండి' })}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'gameOver') {
    const xpEarned = Math.floor(score / 10);
    const isNewHighScore = score >= highScore;

    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto text-center">
            <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center shadow-2xl ${isNewHighScore ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 animate-celebrate' : 'bg-gradient-to-br from-blue-500 to-blue-600'}`}>
              <Trophy className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-4xl font-bold mb-2">
              {isNewHighScore 
                ? t({ en: 'New High Score! 🎉', te: 'కొత్త అత్యధిక స్కోర్! 🎉' })
                : t({ en: 'Game Over!', te: 'ఆట ముగిసింది!' })
              }
            </h1>
            
            <div className="text-6xl font-bold text-primary my-6">{score}</div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold">{questionsAnswered}</div>
                  <div className="text-sm text-muted-foreground">{t({ en: 'Questions', te: 'ప్రశ్నలు' })}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold flex items-center justify-center gap-1">
                    <Sparkles className="w-5 h-5 text-accent" />
                    +{xpEarned}
                  </div>
                  <div className="text-sm text-muted-foreground">XP {t({ en: 'Earned', te: 'సంపాదించారు' })}</div>
                </CardContent>
              </Card>
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
          {/* Stats Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-lg font-bold">
                <Trophy className="w-5 h-5 text-yellow-500" />
                {score}
              </div>
              {combo > 1 && (
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-accent/20 text-accent font-bold animate-pulse">
                  <Zap className="w-4 h-4" />
                  x{combo} Combo!
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-muted-foreground" />
              <span className={`text-lg font-bold ${timeLeft <= 10 ? 'text-destructive animate-pulse' : ''}`}>
                {timeLeft}s
              </span>
            </div>
          </div>

          <Progress value={(timeLeft / 60) * 100} className="h-2 mb-8" />

          {/* Question Card */}
          {currentQuestion && (
            <Card className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-center mb-8">
                  {currentQuestion.question}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {currentQuestion.options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="text-2xl py-8 hover:bg-primary hover:text-primary-foreground transition-all"
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default MathMaze;
