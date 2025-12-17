import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, GraduationCap } from 'lucide-react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useLanguage } from '@/contexts/LanguageContext';
import { classes } from '@/data/content';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({ open, onOpenChange }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<{
    subjects: { path: string; title: string; className: string }[];
    chapters: { path: string; title: string; subjectName: string; className: string }[];
  }>({ subjects: [], chapters: [] });

  useEffect(() => {
    const subjects: typeof searchResults.subjects = [];
    const chapters: typeof searchResults.chapters = [];

    classes.forEach(cls => {
      cls.subjects.forEach(subject => {
        subjects.push({
          path: `/class/${cls.id}/${subject.id}`,
          title: t(subject.title),
          className: t(cls.title)
        });

        subject.chapters.forEach(chapter => {
          chapters.push({
            path: `/class/${cls.id}/${subject.id}/chapter/${chapter.id}`,
            title: t(chapter.title),
            subjectName: t(subject.title),
            className: t(cls.title)
          });
        });
      });
    });

    setSearchResults({ subjects, chapters });
  }, [t]);

  const handleSelect = (path: string) => {
    navigate(path);
    onOpenChange(false);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder={t({ en: 'Search subjects and chapters...', te: 'విషయాలు మరియు అధ్యాయాలను శోధించండి...' })} />
      <CommandList>
        <CommandEmpty>{t({ en: 'No results found.', te: 'ఫలితాలు కనుగొనబడలేదు.' })}</CommandEmpty>
        
        <CommandGroup heading={t({ en: 'Subjects', te: 'విషయాలు' })}>
          {searchResults.subjects.slice(0, 5).map((item) => (
            <CommandItem
              key={item.path}
              onSelect={() => handleSelect(item.path)}
              className="cursor-pointer"
            >
              <GraduationCap className="mr-2 h-4 w-4 text-primary" />
              <div>
                <span className="font-medium">{item.title}</span>
                <span className="text-muted-foreground text-sm ml-2">{item.className}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading={t({ en: 'Chapters', te: 'అధ్యాయాలు' })}>
          {searchResults.chapters.slice(0, 10).map((item) => (
            <CommandItem
              key={item.path}
              onSelect={() => handleSelect(item.path)}
              className="cursor-pointer"
            >
              <BookOpen className="mr-2 h-4 w-4 text-accent" />
              <div className="flex flex-col">
                <span className="font-medium">{item.title}</span>
                <span className="text-muted-foreground text-xs">{item.subjectName} • {item.className}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
