import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, FileText, PlayCircle, HelpCircle, PenTool, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Header } from '@/components/Header';
import { QuizComponent } from '@/components/QuizComponent';
import { useLanguage } from '@/contexts/LanguageContext';
import { classes, PracticeQuestion } from '@/data/content';

const PracticeCard: React.FC<{ question: PracticeQuestion; index: number }> = ({ question, index }) => {
  const { t } = useLanguage();
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">
            {index + 1}
          </div>
          <div className="flex-1">
            <p className="text-lg font-medium">{t(question.question)}</p>
          </div>
        </div>

        {question.hint && (
          <div className="mb-4">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground"
              onClick={() => setShowHint(!showHint)}
            >
              {showHint ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showHint ? t({ en: 'Hide Hint', te: 'సూచనను దాచండి' }) : t({ en: 'Show Hint', te: 'సూచన చూపించు' })}
            </Button>
            {showHint && (
              <div className="mt-2 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-sm">
                💡 {t(question.hint)}
              </div>
            )}
          </div>
        )}

        <div>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {showAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showAnswer ? t({ en: 'Hide Answer', te: 'సమాధానం దాచండి' }) : t({ en: 'Show Answer', te: 'సమాధానం చూపించు' })}
          </Button>
          {showAnswer && (
            <div className="mt-3 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <strong className="text-green-700 dark:text-green-400">{t({ en: 'Answer:', te: 'సమాధానం:' })}</strong>
              <p className="mt-1">{t(question.answer)}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const ChapterPage: React.FC = () => {
  const { classId, subjectId, chapterId } = useParams<{ classId: string; subjectId: string; chapterId: string }>();
  const { t } = useLanguage();

  const classData = classes.find(c => c.id === classId);
  const subject = classData?.subjects.find(s => s.id === subjectId);
  const chapter = subject?.chapters.find(ch => ch.id === chapterId);

  if (!classData || !subject || !chapter) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold">{t({ en: 'Chapter not found', te: 'అధ్యాయం కనుగొనబడలేదు' })}</h1>
          <Link to="/">
            <Button className="mt-4">{t({ en: 'Go Home', te: 'హోమ్‌కు వెళ్ళండి' })}</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to={`/class/${classId}/${subjectId}`}>
          <Button variant="ghost" className="mb-6 gap-2">
            <ChevronLeft className="w-4 h-4" />
            {t({ en: 'Back to', te: 'తిరిగి వెళ్ళండి' })} {t(subject.title)}
          </Button>
        </Link>

        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-1">
            {t(classData.title)} • {t(subject.title)}
          </p>
          <h1 className="text-3xl font-bold">{t(chapter.title)}</h1>
          <p className="text-muted-foreground mt-1">{t(chapter.description)}</p>
        </div>

        <Tabs defaultValue="notes" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="notes" className="gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">{t({ en: 'Notes', te: 'నోట్స్' })}</span>
            </TabsTrigger>
            <TabsTrigger value="videos" className="gap-2">
              <PlayCircle className="w-4 h-4" />
              <span className="hidden sm:inline">{t({ en: 'Videos', te: 'వీడియోలు' })}</span>
            </TabsTrigger>
            <TabsTrigger value="quiz" className="gap-2">
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">{t({ en: 'Quiz', te: 'క్విజ్' })}</span>
            </TabsTrigger>
            <TabsTrigger value="practice" className="gap-2">
              <PenTool className="w-4 h-4" />
              <span className="hidden sm:inline">{t({ en: 'Practice', te: 'సాధన' })}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="notes">
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="prose dark:prose-invert max-w-none">
                  <div className="whitespace-pre-wrap font-sans leading-relaxed">
                    {t(chapter.notes)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="videos">
            {chapter.videoUrl ? (
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                    <iframe
                      src={chapter.videoUrl}
                      title={t(chapter.title)}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <PlayCircle className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t({ en: 'No videos yet', te: 'ఇంకా వీడియోలు లేవు' })}</h3>
                  <p className="text-muted-foreground">
                    {t({ en: 'Video content for this chapter is coming soon!', te: 'ఈ అధ్యాయానికి వీడియో కంటెంట్ త్వరలో వస్తుంది!' })}
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="quiz">
            {chapter.quiz.length > 0 ? (
              <QuizComponent questions={chapter.quiz} />
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <HelpCircle className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t({ en: 'No quiz yet', te: 'ఇంకా క్విజ్ లేదు' })}</h3>
                  <p className="text-muted-foreground">
                    {t({ en: 'Quiz questions for this chapter are coming soon!', te: 'ఈ అధ్యాయానికి క్విజ్ ప్రశ్నలు త్వరలో వస్తాయి!' })}
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="practice">
            {chapter.practice.length > 0 ? (
              <div className="space-y-4">
                {chapter.practice.map((question, index) => (
                  <PracticeCard key={index} question={question} index={index} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <PenTool className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t({ en: 'No practice questions yet', te: 'ఇంకా సాధన ప్రశ్నలు లేవు' })}</h3>
                  <p className="text-muted-foreground">
                    {t({ en: 'Practice questions for this chapter are coming soon!', te: 'ఈ అధ్యాయానికి సాధన ప్రశ్నలు త్వరలో వస్తాయి!' })}
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ChapterPage;
