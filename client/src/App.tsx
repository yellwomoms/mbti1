import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SelectionPage from "@/pages/selection";
import ResultsPage from "@/pages/results";
import NotFound from "@/pages/not-found";

// 구글 사이트 인증 컴포넌트
function GoogleVerification() {
  return (
    <div style={{ 
      fontFamily: 'monospace', 
      margin: 0, 
      padding: 0,
      backgroundColor: 'white',
      color: 'black'
    }}>
      google-site-verification: google8334862f75f6dc65.html
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/google8334862f75f6dc65.html" component={GoogleVerification} />
      <Route path="/" component={SelectionPage} />
      <Route path="/results/:type1/:type2" component={ResultsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
