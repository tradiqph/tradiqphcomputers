import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Clock, Shield, Users } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES, SITE_TAGLINE } from "@/lib/constants";

const TRUST_ITEMS = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "Certified IT professionals with years of hands-on experience.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Quick turnaround times to minimize your downtime.",
  },
  {
    icon: Users,
    title: "Local Support",
    description: "Proudly serving communities across the Philippines.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Reliable solutions backed by our commitment to excellence.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "TRADIQPH fixed our office network in record time. Highly professional and affordable.",
    author: "Local Business Owner",
  },
  {
    quote:
      "Excellent computer repair service. They explained everything clearly and saved my data.",
    author: "Satisfied Customer",
  },
];

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
          <FadeIn>
            <span className="mb-4 inline-block rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1 text-xs font-medium text-[#d4af37]">
              IT Services in the Philippines
            </span>
          </FadeIn>
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <TextAnimate
              text="TRADIQPH Computer IT Services"
              type="slideUp"
              className="text-gradient-gold"
            />
          </h1>
          <FadeIn delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              {SITE_TAGLINE}. From repairs to enterprise networking, we deliver
              reliable technology solutions for your home and business.
            </p>
          </FadeIn>
          <FadeIn delay={0.5} className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="cursor-pointer">
              <ShimmerButton type="button" className="flex items-center gap-2">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </ShimmerButton>
            </Link>
            <Link
              href="/services"
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-all duration-200 hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              View Services
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Comprehensive IT solutions tailored to your needs.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.1}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-[#d4af37] transition-colors duration-200 hover:text-[#e8c96a]"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </section>

      <section className="bg-surface/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Why Choose <span className="text-gradient-gold">TRADIQPH</span>
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_ITEMS.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="glow-gold-hover rounded-xl border border-border/50 bg-card p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#d4af37]/10">
                    <item.icon className="h-6 w-6 text-[#d4af37]" />
                  </div>
                  <h3 className="font-heading font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.author} delay={i * 0.15}>
              <blockquote className="glow-gold-hover rounded-xl border border-border/50 bg-card p-8">
                <p className="text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-medium text-[#d4af37]">
                  — {t.author}
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-gradient-brand py-20">
        <FadeIn className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Contact us today for a free consultation and let us handle your IT
            needs.
          </p>
          <Link href="/contact" className="mt-8 inline-block cursor-pointer">
            <ShimmerButton type="button">Contact Us Now</ShimmerButton>
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
