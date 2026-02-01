import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay showing banner for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-up">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-lg p-4 md:p-6 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-8">
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
              <a href="/legal/privacy" className="text-primary hover:underline">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button variant="ghost" size="sm" onClick={handleDecline}>
              Decline
            </Button>
            <Button size="sm" onClick={handleAccept}>
              Accept
            </Button>
          </div>
          <button
            onClick={handleDecline}
            className="absolute top-2 right-2 md:hidden p-1 text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
