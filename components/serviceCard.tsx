interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-80 mb-4">{description}</p>
      <button className="text-primary font-semibold hover:underline">
        En savoir plus
      </button>
    </div>
  );
}
