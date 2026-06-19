import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SITE_LOCATION, SITE_NAME } from "@/lib/constants";

const VALUES = [
  "Reliable, honest IT service you can count on",
  "Deep local expertise in the Philippines",
  "Fast response times for urgent issues",
  "Affordable pricing for homes and small businesses",
  "Personalized solutions, not one-size-fits-all",
];

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-brand opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl">
              About <span className="text-gradient-gold">TRADIQPH</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Your trusted technology partner in {SITE_LOCATION}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border/50 glow-gold">
              <Image
                src="/images/hero-bg.jpg"
                alt="TRADIQPH IT workspace"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Our Mission
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At {SITE_NAME}, we believe every home and business deserves access
              to professional, affordable IT support. Founded with a passion for
              technology and community service, we bring enterprise-quality
              solutions throughout the Philippines and surrounding areas.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you need a quick computer fix, a complete network overhaul,
              or strategic IT consulting, our team is dedicated to keeping your
              technology running smoothly so you can focus on what matters most.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
          </FadeIn>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-4">
            {VALUES.map((value, i) => (
              <FadeIn key={value} delay={i * 0.08}>
                <li className="flex items-start gap-3 rounded-lg border border-border/50 bg-card p-4 transition-colors duration-200 hover:border-[#d4af37]/30">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#d4af37]" />
                  <span className="text-muted-foreground">{value}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-xl border border-border/50 bg-card p-8 text-center glow-gold sm:p-12">
            <h2 className="font-heading text-2xl font-bold">
              Meet Our <span className="text-gradient-gold">Leadership</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Led by our CEO, TRADIQPH combines technical expertise with a
              commitment to exceptional customer service. We treat every client
              like family and every project with the utmost care.
            </p>
            <div className="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#d4af37]/30 bg-[#d4af37]/10">
              <span className="font-heading text-2xl font-bold text-[#d4af37]">
                CEO
              </span>
            </div>
            <p className="mt-4 font-medium">Chief Executive Officer</p>
            <p className="text-sm text-muted-foreground">TRADIQPH Computer IT Services</p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
