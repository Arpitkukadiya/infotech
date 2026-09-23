import { SERVICES } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="container-x py-20">
      <div className="text-center mb-16">
        <h1 className="section-title">Our Services</h1>
        <p className="section-sub">Complete tech solutions — installation, repair, and annual maintenance.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => <ServiceCard key={s.title} service={s} />)}
      </div>
    </div>
  );
}