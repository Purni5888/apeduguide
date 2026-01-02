import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Atom, Swords, Brain, ChevronRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const games = [
  { id: 'math-maze', title: { en: 'Math Maze Challenge', te: 'గణిత చక్రవ్యూహం' }, description: { en: 'Race against time solving math puzzles!', te: 'గణిత పజిల్స్ సాధించి సమయంతో పోటీ పడండి!' }, icon: 'Gamepad2', color: 'game-blue', path: '/games/math-maze' },
  { id: 'science-quest', title: { en: 'Science Quest', te: 'సైన్స్ క్వెస్ట్' }, description: { en: 'Explore elements and solve riddles!', te: 'మూలకాలను అన్వేషించి చిక్కులు సాధించండి!' }, icon: 'Atom', color: 'game-green', path: '/games/science-quest' },
  { id: 'word-warrior', title: { en: 'Word Warrior', te: 'పద యోధుడు' }, description: { en: 'Battle with vocabulary power!', te: 'పదజాల శక్తితో పోరాడండి!' }, icon: 'Swords', color: 'game-pink', path: '/games/word-warrior' },
  { id: 'logic-legends', title: { en: 'Logic Legends', te: 'తర్క పురాణాలు' }, description: { en: 'Solve puzzles, become a legend!', te: 'పజిల్స్ సాధించి పురాణం అవ్వండి!' }, icon: 'Brain', color: 'game-purple', path: '/games/logic-legends' }
];

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
    <section className="py-10 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/20 rounded-3xl -z-10" />
      <div className="absolute top-4 right-8 w-24 h-24 bg-game-pink/20 rounded-full blur-2xl animate-pulse-soft" />
      <div className="absolute bottom-4 left-8 w-32 h-32 bg-game-blue/20 rounded-full blur-2xl animate-float" />
      
      <div className="relative p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-game-pink via-primary to-game-purple flex items-center justify-center shadow-lg shadow-primary/30 animate-bounce-soft">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold text-gradient">{t({ en: 'Adventure Zone', te: 'సాహస ప్రాంతం' })}</h2>
              <p className="text-muted-foreground text-sm">{t({ en: '🎮 Learn through fun games!', te: '🎮 ఆటల ద్వారా నేర్చుకోండి!' })}</p>
            </div>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Game Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {games.map((game, index) => {
            const Icon = iconMap[game.icon] || Gamepad2;
            const gradientClass = colorMap[game.color] || colorMap['game-blue'];

            return (
              <Link key={game.id} to={game.path} style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in">
                <Card className="group card-hover overflow-hidden cursor-pointer h-full border-2 border-transparent hover:border-primary/30 bg-card/80 backdrop-blur-sm">
                  <div className={`h-2 bg-gradient-to-r ${gradientClass}`} />
                  <CardContent className="p-5">
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base mb-1 group-hover:text-primary transition-colors">
                          {t(game.title)}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {t(game.description)}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>{t({ en: 'Play Now', te: 'ఆడండి' })}</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
