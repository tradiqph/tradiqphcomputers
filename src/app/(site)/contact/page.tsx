"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/ui/fade-in";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  SITE_EMAIL,
  SITE_LOCATION,
  SITE_PHONE,
} from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn className="text-center">
        <h1 className="font-heading text-4xl font-bold sm:text-5xl">
          Contact <span className="text-gradient-gold">Us</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Have a question or need IT support? Reach out and we&apos;ll get back
          to you as soon as possible.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <FadeIn direction="left">
          <div className="space-y-6">
            <Card className="border-border/50 bg-card transition-colors duration-200 hover:border-[#d4af37]/30">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d4af37]/10">
                  <Mail className="h-5 w-5 text-[#d4af37]" />
                </div>
                <div>
                  <CardTitle className="text-base">Email</CardTitle>
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="cursor-pointer text-sm text-muted-foreground transition-colors duration-200 hover:text-[#d4af37]"
                  >
                    {SITE_EMAIL}
                  </a>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card transition-colors duration-200 hover:border-[#d4af37]/30">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d4af37]/10">
                  <Phone className="h-5 w-5 text-[#d4af37]" />
                </div>
                <div>
                  <CardTitle className="text-base">Phone</CardTitle>
                  <a
                    href={`tel:${SITE_PHONE}`}
                    className="cursor-pointer text-sm text-muted-foreground transition-colors duration-200 hover:text-[#d4af37]"
                  >
                    {SITE_PHONE}
                  </a>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card transition-colors duration-200 hover:border-[#d4af37]/30">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d4af37]/10">
                  <MapPin className="h-5 w-5 text-[#d4af37]" />
                </div>
                <div>
                  <CardTitle className="text-base">Location</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {SITE_LOCATION}
                  </p>
                </div>
              </CardHeader>
            </Card>

            <div className="rounded-xl border border-border/50 bg-card p-6">
              <div className="flex h-48 items-center justify-center rounded-lg bg-secondary/50">
                <div className="text-center">
                  <MapPin className="mx-auto h-8 w-8 text-[#d4af37]" />
                  <p className="mt-2 text-sm font-medium">{SITE_LOCATION}</p>
                  <p className="text-xs text-muted-foreground">
                    Serving the Philippines and nearby areas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.2}>
          <Card className="border-border/50 bg-card">
            <CardHeader>
              <CardTitle className="font-heading text-xl">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="rounded-lg border border-[#d4af37]/30 bg-[#d4af37]/10 p-6 text-center">
                  <Send className="mx-auto h-8 w-8 text-[#d4af37]" />
                  <p className="mt-3 font-medium">Message sent!</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Thank you for reaching out. We&apos;ll contact you soon.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 cursor-pointer"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="How can we help you?"
                      className="flex w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm transition-colors duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <ShimmerButton type="submit" className="w-full">
                    Send Message
                  </ShimmerButton>
                </form>
              )}
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
