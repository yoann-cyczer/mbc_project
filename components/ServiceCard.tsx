interface ServiceCardProps {
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ title, description, index }: ServiceCardProps) {
  return (
    <div className="group relative bg-light p-8 md:p-10 transition-colors duration-500 hover:bg-secondary hover:text-light cursor-pointer overflow-hidden">
      {/* Numéro */}
      {index !== undefined && (
        <span className="font-mono text-[11px] tracking-[0.2em] text-muted group-hover:text-primary transition-colors">
          {String(index).padStart(2, "0")}
        </span>
      )}

      <h3 className="font-display text-2xl md:text-3xl font-light leading-tight mt-6 mb-4 tracking-tightest">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-secondary/70 group-hover:text-light/70 transition-colors mb-10">
        {description}
      </p>

      <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-secondary group-hover:text-primary transition-colors">
        <span>En savoir plus</span>
        <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
      </div>

      {/* Trait doré au hover */}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-700 group-hover:w-full" />
    </div>
  );
}
