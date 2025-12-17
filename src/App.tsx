import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import ClassPage from "./pages/ClassPage";
import SubjectPage from "./pages/SubjectPage";
import ChapterPage from "./pages/ChapterPage";
import MathMaze from "./pages/games/MathMaze";
import ScienceQuest from "./pages/games/ScienceQuest";
import WordWarrior from "./pages/games/WordWarrior";
import LogicLegends from "./pages/games/LogicLegends";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/class/:classId" element={<ClassPage />} />
                <Route path="/class/:classId/:subjectId" element={<SubjectPage />} />
                <Route path="/class/:classId/:subjectId/chapter/:chapterId" element={<ChapterPage />} />
                <Route path="/games/math-maze" element={<MathMaze />} />
                <Route path="/games/science-quest" element={<ScienceQuest />} />
                <Route path="/games/word-warrior" element={<WordWarrior />} />
                <Route path="/games/logic-legends" element={<LogicLegends />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
