import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Page components
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import Research from "@/pages/Research";

// Navigation component
import Navigation from "@/components/Navigation";

/**
 * Main router component that handles all application routes
 */
function Router() {
  return (
    <Switch>
      {/* Main pages */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
      <Route path="/research" component={Research} />
      
      {/* 404 Not Found fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Root application component
 * 
 * Sets up global providers and renders main layout with navigation
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Toast notifications */}
        <Toaster />
        
        {/* Navigation menu */}
        <Navigation />
        
        {/* Router - page content */}
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
