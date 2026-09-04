/* Atlas Evolutivo — router mínimo para soportar tanto la raíz Manus como la subruta de GitHub Pages. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isHome = currentPath === "/" || currentPath === "/atlas-evolutivo";
  return isHome ? <Home /> : <NotFound />;
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
