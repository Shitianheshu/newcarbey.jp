interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ label, title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {label && (
        <div className="text-sm font-semibold text-primary mb-2">{label}</div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl">{subtitle}</p>
      )}
    </div>
  );
}
