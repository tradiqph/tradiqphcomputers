import { FadeIn } from "@/components/ui/fade-in";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES } from "@/lib/constants";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn className="text-center">
        <h1 className="font-heading text-4xl font-bold sm:text-5xl">
          Our <span className="text-gradient-gold">Services</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          From everyday computer repairs to enterprise-grade networking, TRADIQPH
          provides end-to-end IT solutions for homes and businesses across the
          Philippines and
          beyond.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.id} delay={i * 0.08}>
            <ServiceCard service={service} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
