import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Areas from "./pages/Areas";
import CityPage from "./pages/CityPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/om-oss" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/omraden" element={<Areas />} />
            <Route path="/omraden/:city" element={<CityPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;