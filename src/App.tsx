import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "@/components/TopNav";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Posts from "./pages/Posts";
import Blogs from "./pages/Blogs";
import Courses from "./pages/Courses";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Top navigation is now handled in each page */}
        <SidebarProvider>
          <div className="flex w-full min-h-screen bg-background">
            {/* Removed AppSidebar */}
            <div className="flex-1 relative bg-background overflow-x-hidden">
              {/* Removed SidebarTrigger */}
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
