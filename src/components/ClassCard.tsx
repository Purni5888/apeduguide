import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calculator, FlaskConical, BookOpen, Globe, Languages } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ClassData, Subject } from '@/data/content';

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

interface ClassCardProps {
  classData: ClassData;
}

export const ClassCard: React.FC<ClassCardProps> = ({ classData }) => {
  const { t } = useLanguage();

  return (
    <Link to={`/class/${classData.id}`}>
      <Card className="group card-hover overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary/30">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-lg group-hover:shadow-xl transition-shadow">
                {classData.grade}
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {t(classData.title)}
                </h3>
                <p className="text-muted-foreground text-sm">{t(classData.description)}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {classData.subjects.length} {t({ en: 'subjects', te: 'విషయాలు' })}
                </p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

interface SubjectCardProps {
  subject: Subject;
  classId: string;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject, classId }) => {
  const { t } = useLanguage();
  const Icon = iconMap[subject.icon] || BookOpen;
  const gradientClass = colorMap[subject.color] || colorMap['game-blue'];

  return (
    <Link to={`/class/${classId}/${subject.id}`}>
      <Card className="group card-hover overflow-hidden cursor-pointer h-full">
        <div className={`h-2 bg-gradient-to-r ${gradientClass}`} />
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
              {t(subject.title)}
            </h3>
            <p className="text-sm text-muted-foreground">
              {subject.chapters.length} {t({ en: 'chapters', te: 'అధ్యాయాలు' })}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
