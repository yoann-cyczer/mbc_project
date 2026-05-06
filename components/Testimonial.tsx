interface TestimonialProps {
  name: string;
  message: string;
}

export default function Testimonial({ name, message }: TestimonialProps) {
  return (
    <figure className="relative bg-white border border-line p-8 md:p-10 rounded-sm hover:shadow-soft transition-shadow duration-500 group">
      <span
        aria-hidden
        className="font-display text-7xl text-primary leading-none absolute top-3 left-6 select-none"
      >
        “
      </span>

      <blockquote className="relative mt-6 font-display text-xl md:text-2xl leading-snug text-secondary tracking-tightest font-light">
        {message}
      </blockquote>

      <figcaption className="mt-8 pt-6 border-t border-line flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-secondary text-light flex items-center justify-center font-display text-sm">
          {name.charAt(0)}
        </span>
        <div className="flex flex-col">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Client</span>
          <span className="text-sm font-medium text-secondary">{name}</span>
        </div>
      </figcaption>
    </figure>
  );
}
