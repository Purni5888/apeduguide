import React, { useState } from 'react';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { QuizQuestion } from '@/data/content';

interface QuizComponentProps {
  questions: QuizQuestion[];
}

export const QuizComponent: React.FC<QuizComponentProps> = ({ questions }) => {
  const { t } = useLanguage();
  const { addXP } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleSelectAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
    if (selectedAnswer === currentQuestion.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
      // Award XP based on score
      const xpEarned = score * 10;
      addXP(xpEarned);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    const xpEarned = score * 10;

    return (
      <Card className="overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-primary to-accent" />
        <CardContent className="p-8 text-center">
          <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
            percentage >= 70 ? 'bg-green-100 text-green-600' : percentage >= 50 ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'
          }`}>
            <span className="text-3xl font-bold">{percentage}%</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-2">
            {percentage >= 70 
              ? t({ en: 'Excellent! 🎉', te: 'అద్భుతం! 🎉' })
              : percentage >= 50 
                ? t({ en: 'Good effort! 👍', te: 'మంచి ప్రయత్నం! 👍' })
                : t({ en: 'Keep practicing! 💪', te: 'సాధన కొనసాగించండి! 💪' })
            }
          </h3>
          
          <p className="text-muted-foreground mb-4">
            {t({ en: 'You scored', te: 'మీరు సాధించారు' })} {score}/{questions.length}
          </p>

          <div className="flex items-center justify-center gap-2 text-accent font-bold mb-6 animate-celebrate">
            <Sparkles className="w-5 h-5" />
            +{xpEarned} XP {t({ en: 'earned!', te: 'సంపాదించారు!' })}
          </div>

          <Button onClick={handleRestart} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            {t({ en: 'Try Again', te: 'మళ్ళీ ప్రయత్నించండి' })}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <div className="p-4 border-b border-border/50">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            {t({ en: 'Question', te: 'ప్రశ్న' })} {currentIndex + 1}/{questions.length}
          </span>
          <span className="text-sm font-medium text-primary">
            {t({ en: 'Score', te: 'స్కోర్' })}: {score}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-6">{t(currentQuestion.question)}</h3>

        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctIndex;
            const showCorrectHighlight = showResult && isCorrect;
            const showWrongHighlight = showResult && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                disabled={showResult}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                  showCorrectHighlight
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : showWrongHighlight
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20 animate-shake'
                      : isSelected
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50 hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{t(option)}</span>
                  {showCorrectHighlight && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                  {showWrongHighlight && <XCircle className="w-5 h-5 text-red-500" />}
                </div>
              </button>
            );
          })}
        </div>

        {showResult && currentQuestion.explanation && (
          <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-6">
            <p className="text-sm">
              <strong>{t({ en: 'Explanation:', te: 'వివరణ:' })}</strong> {t(currentQuestion.explanation)}
            </p>
          </div>
        )}

        <div className="flex justify-end gap-3">
          {!showResult ? (
            <Button 
              onClick={handleCheckAnswer} 
              disabled={selectedAnswer === null}
              className="gap-2"
            >
              {t({ en: 'Check Answer', te: 'సమాధానం తనిఖీ చేయండి' })}
            </Button>
          ) : (
            <Button onClick={handleNext} className="gap-2">
              {currentIndex < questions.length - 1 
                ? t({ en: 'Next Question', te: 'తదుపరి ప్రశ్న' })
                : t({ en: 'See Results', te: 'ఫలితాలు చూడండి' })
              }
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
