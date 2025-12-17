import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, BookOpen, Trophy, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { ClassCard } from '@/components/ClassCard';
import { GamificationWidget } from '@/components/GamificationWidget';
import { AdventureZone } from '@/components/AdventureZone';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { classes } from '@/data/content';

const LandingHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6 animate-bounce-soft">
          <Sparkles className="w-4 h-4" />
          {t({ en: 'AP State Syllabus | Classes 6-10', te: 'AP రాష్ట్ర సిలబస్ | 6-10 తరగతులు' })}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient">{t({ en: 'Learn Smarter,', te: 'తెలివిగా నేర్చుకో,' })}</span>
          <br />
          <span>{t({ en: 'Achieve More', te: 'ఎక్కువ సాధించు' })}</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          {t({ 
            en: 'Interactive lessons, engaging quizzes, and fun educational games. Master your AP state syllabus in English or Telugu.', 
            te: 'ఇంటరాక్టివ్ పాఠాలు, ఆసక్తికరమైన క్విజ్‌లు మరియు వినోదాత్మక విద్యా ఆటలు. ఇంగ్లీష్ లేదా తెలుగులో మీ AP రాష్ట్ర సిలబస్‌ను మాస్టర్ చేయండి.' 
          })}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link to="/login">
            <Button size="lg" className="text-lg px-8 py-6 gap-2 shadow-lg hover:shadow-xl transition-shadow">
              {t({ en: 'Start Learning Free', te: 'ఉచితంగా నేర్చుకోవడం ప్రారంభించండి' })}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/class/class-6">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              {t({ en: 'Explore Content', te: 'కంటెంట్ అన్వేషించండి' })}
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <span>{t({ en: '5 Classes', te: '5 తరగతులు' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            <span>{t({ en: '100+ Chapters', te: '100+ అధ్యాయాలు' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span>{t({ en: '4 Fun Games', te: '4 ఆసక్తికరమైన ఆటలు' })}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">{t({ en: 'Continue Learning', te: 'నేర్చుకోవడం కొనసాగించండి' })}</h2>
          <div className="space-y-4">
            {classes.map((classData) => (
              <ClassCard key={classData.id} classData={classData} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">{t({ en: 'Your Progress', te: 'మీ పురోగతి' })}</h2>
          <GamificationWidget />
        </div>
      </div>

      <AdventureZone />
    </div>
  );
};

const Index: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {isAuthenticated ? <Dashboard /> : <LandingHero />}
    </div>
  );
};

export default Index;
