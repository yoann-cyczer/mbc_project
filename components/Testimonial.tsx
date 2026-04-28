interface TestimonialProps {
  name: string;
  message: string;
}

export default function Testimonial({ name, message }: TestimonialProps) {
  return (
    <div className="bg-light shadow-md p-6 rounded-lg text-center hover:shadow-xl transition">
      <p className="text-secondary opacity-80 italic mb-4">"{message}"</p>
      <p className="font-semibold text-primary">— {name}</p>
    </div>
  );
}
