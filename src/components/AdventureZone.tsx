import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Atom, Swords, Brain, ChevronRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { games } from '@/data/content';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Gamepad2,
  Atom,
  Swords,
  Brain
};

const colorMap: Record<string, string> = {
  'game-blue': 'from-blue-500 to-blue-600',
  'game-green': 'from-green-500 to-green-600',
  'game-pink': 'from-pink-500 to-pink-600',
  'game-purple': 'from-purple-500 to-purple-600',
};

export const AdventureZone: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{t({ en: 'Adventure Zone', te: 'సాహస ప్రాంతం' })}</h2>
          <p className="text-muted-foreground text-sm">{t({ en: 'Learn through fun games!', te: 'ఆటల ద్వారా నేర్చుకోండి!' })}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {games.map((game) => {
          const Icon = iconMap[game.icon] || Gamepad2;
          const gradientClass = colorMap[game.color] || colorMap['game-blue'];

          return (
            <Link key={game.id} to={game.path}>
              <Card className="group card-hover overflow-hidden cursor-pointer h-full">
                <div className={`h-1.5 bg-gradient-to-r ${gradientClass}`} />
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                        {t(game.title)}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {t(game.description)}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
