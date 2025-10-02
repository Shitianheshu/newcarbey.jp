import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}

export default function Hero({ title, subtitle, backgroundImage, primaryAction, secondaryAction }: HeroProps) {
  return (
    <div className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={backgroundImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          data-testid="text-hero-title"
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
        >
          {title}
        </h1>
        {subtitle && (
          <p 
            data-testid="text-hero-subtitle"
            className="text-lg md:text-xl text-white/90 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150"
          >
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          {primaryAction && (
            <Button 
              size="lg"
              onClick={primaryAction.onClick}
              data-testid="button-hero-primary"
              className="bg-primary hover:bg-primary/90 text-primary-foreground border border-primary-border"
            >
              {primaryAction.label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          )}
          {secondaryAction && (
            <Button 
              size="lg"
              variant="outline"
              onClick={secondaryAction.onClick}
              data-testid="button-hero-secondary"
              className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
