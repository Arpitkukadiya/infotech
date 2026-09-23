import { TESTIMONIALS, BUSINESS } from "@/lib/data";
import TestimonialCard from "@/components/TestimonialCard";
import ReviewForm from "@/components/ReviewForm";

export const metadata = { title: "Reviews & Testimonials" };

export default function TestimonialsPage() {
  return (
    <div className="container-x py-20">
      <div className="text-center mb-12">
        <h1 className="section-title">Customer Reviews</h1>
        <p className="section-sub">See what our clients say about us.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {TESTIMONIALS.map((t, i) => <TestimonialCard key={i} t={t} />)}
      </div>

      <div className="max-w-2xl mx-auto">
        <ReviewForm />
      </div>

      <div className="text-center mt-10">
        <a
          href={`https://search.google.com/local/writereview?placeid=${BUSINESS.placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          Write Review on Google Maps
        </a>
      </div>
    </div>
  );
}