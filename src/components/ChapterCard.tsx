import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, PlayCircle, FileText, HelpCircle, PenTool } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Chapter } from '@/data/content';

interface ChapterCardProps {
  chapter: Chapter;
  classId: string;
  subjectId: string;
  index: number;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({ chapter, classId, subjectId, index }) => {
  const { t } = useLanguage();

  const hasVideo = !!chapter.videoUrl;
  const hasQuiz = chapter.quiz.length > 0;
  const hasPractice = chapter.practice.length > 0;

  return (
    <Link to={`/class/${classId}/${subjectId}/chapter/${chapter.id}`}>
      <Card className="group card-hover overflow-hidden cursor-pointer h-full">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-lg font-bold text-primary shrink-0">
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                {t(chapter.title)}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {t(chapter.description)}
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  {t({ en: 'Notes', te: 'నోట్స్' })}
                </Badge>
                {hasVideo && (
                  <Badge variant="outline" className="flex items-center gap-1 text-green-600 border-green-200">
                    <PlayCircle className="w-3 h-3" />
                    {t({ en: 'Video', te: 'వీడియో' })}
                  </Badge>
                )}
                {hasQuiz && (
                  <Badge variant="outline" className="flex items-center gap-1 text-blue-600 border-blue-200">
                    <HelpCircle className="w-3 h-3" />
                    {chapter.quiz.length} {t({ en: 'Quiz', te: 'క్విజ్' })}
                  </Badge>
                )}
                {hasPractice && (
                  <Badge variant="outline" className="flex items-center gap-1 text-purple-600 border-purple-200">
                    <PenTool className="w-3 h-3" />
                    {t({ en: 'Practice', te: 'సాధన' })}
                  </Badge>
                )}
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
