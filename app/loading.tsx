export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-light gap-6">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border border-line" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin" />
      </div>
      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
        Chargement…
      </span>
    </div>
  );
}
