import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CoachingPage from "./pages/CoachingPage";
import CoursesPage from "./pages/CoursesPage";
import MastermindPage from "./pages/MastermindPage";
import MasterclassesPage from "./pages/MasterclassesPage";
import WealthBuildingPage from "./pages/WealthBuildingPage";
import TransformationPage from "./pages/TransformationPage";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import ApplyPage from "./pages/ApplyPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/coaching" element={<CoachingPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/mastermind" element={<MastermindPage />} />
            <Route path="/masterclasses" element={<MasterclassesPage />} />
            <Route path="/wealth-building" element={<WealthBuildingPage />} />
            <Route path="/transformation" element={<TransformationPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
