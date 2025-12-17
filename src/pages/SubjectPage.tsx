import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calculator, FlaskConical, BookOpen, Globe, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { ChapterCard } from '@/components/ChapterCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { classes } from '@/data/content';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Calculator,
  FlaskConical,
  BookOpen,
  Globe,
  Languages
};

const colorMap: Record<string, string> = {
  'game-blue': 'from-blue-500 to-blue-600',
  'game-green': 'from-green-500 to-green-600',
  'game-purple': 'from-purple-500 to-purple-600',
  'game-orange': 'from-orange-500 to-orange-600',
  'game-pink': 'from-pink-500 to-pink-600'
};

const SubjectPage: React.FC = () => {
  const { classId, subjectId } = useParams<{ classId: string; subjectId: string }>();
  const { t } = useLanguage();

  const classData = classes.find(c => c.id === classId);
  const subject = classData?.subjects.find(s => s.id === subjectId);

  if (!classData || !subject) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold">{t({ en: 'Subject not found', te: 'విషయం కనుగొనబడలేదు' })}</h1>
          <Link to="/">
            <Button className="mt-4">{t({ en: 'Go Home', te: 'హోమ్‌కు వెళ్ళండి' })}</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[subject.icon] || BookOpen;
  const gradientClass = colorMap[subject.color] || colorMap['game-blue'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to={`/class/${classId}`}>
          <Button variant="ghost" className="mb-6 gap-2">
            <ChevronLeft className="w-4 h-4" />
            {t({ en: 'Back to', te: 'తిరిగి వెళ్ళండి' })} {t(classData.title)}
          </Button>
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-xl`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">{t(classData.title)}</p>
            <h1 className="text-3xl font-bold">{t(subject.title)}</h1>
            <p className="text-muted-foreground">
              {subject.chapters.length} {t({ en: 'chapters', te: 'అధ్యాయాలు' })}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {subject.chapters.map((chapter, index) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              classId={classData.id}
              subjectId={subject.id}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;
