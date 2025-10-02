import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StrengthCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
}

export default function StrengthCard({ icon: Icon, title, description, number }: StrengthCardProps) {
  return (
    <Card 
      data-testid={`card-strength-${number}`}
      className="p-8 hover-elevate transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-primary mb-2">{number}</div>
          <h3 className="text-xl font-bold font-heading mb-3">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
}
