import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { SubjectCard } from '@/components/ClassCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { classes } from '@/data/content';

const ClassPage: React.FC = () => {
  const { classId } = useParams<{ classId: string }>();
  const { t } = useLanguage();

  const classData = classes.find(c => c.id === classId);

  if (!classData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold">{t({ en: 'Class not found', te: 'తరగతి కనుగొనబడలేదు' })}</h1>
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
        <Link to="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ChevronLeft className="w-4 h-4" />
            {t({ en: 'Back to Home', te: 'హోమ్‌కు తిరిగి వెళ్ళండి' })}
          </Button>
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-primary-foreground shadow-xl">
            {classData.grade}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{t(classData.title)}</h1>
            <p className="text-muted-foreground">{t(classData.description)}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-primary" />
            {t({ en: 'Subjects', te: 'విషయాలు' })}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {classData.subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} classId={classData.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassPage;
