import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';

export const GamificationWidget: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  if (!user) return null;

  const xpForNextLevel = user.level * 100;
  const currentLevelXP = user.xp % 100;
  const progressPercent = (currentLevelXP / 100) * 100;

  return (
    <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border-primary/20 card-hover">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-soft">
              <Trophy className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{t({ en: 'Level', te: 'స్థాయి' })} {user.level}</h3>
              <p className="text-sm text-muted-foreground">{user.name}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-accent font-bold">
              <Sparkles className="w-4 h-4" />
              {user.xp} XP
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t({ en: 'Progress to Level', te: 'స్థాయి పురోగతి' })} {user.level + 1}</span>
            <span className="font-medium">{currentLevelXP}/100 XP</span>
          </div>
          <Progress value={progressPercent} className="h-3" />
        </div>

        <div className="mt-4 pt-4 border-t border-border/50">
          <Link 
            to="/games/math-maze" 
            className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            {t({ en: 'Play games to earn more XP!', te: 'మరిన్ని XP సంపాదించడానికి గేమ్‌లు ఆడండి!' })}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
