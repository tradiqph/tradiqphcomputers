"use client";

import Image from "next/image";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { SITE_TAGLINE } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";

export function ComingSoon() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4">
      <BackgroundBeams />
      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/logo.png"
            alt="TRADIQPH logo"
            width={280}
            height={120}
            className="mb-8 h-auto w-56 sm:w-72"
            priority
          />
        </motion.div>

        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          <TextAnimate text="Coming Soon" type="blurIn" className="text-gradient-gold" />
        </h1>

        <motion.p
          className="mt-4 text-lg text-muted-foreground sm:text-xl"
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          {SITE_TAGLINE}
        </motion.p>

        <motion.p
          className="mt-2 text-sm text-muted-foreground"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          Professional IT Services — Launching Soon
        </motion.p>

        <motion.div
          className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-secondary"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#b91c1c] to-[#d4af37]"
            initial={{ width: "0%" }}
            animate={{ width: "75%" }}
            transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>

        <motion.div
          className="mt-10"
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.4 }}
        >
          <Link href="/admin/login" className="cursor-pointer">
            <ShimmerButton type="button">Admin Access</ShimmerButton>
          </Link>
        </motion.div>

        <Link
          href="/admin/login"
          className="mt-6 cursor-pointer text-xs text-muted-foreground transition-colors duration-200 hover:text-[#d4af37]"
        >
          Admin
        </Link>
      </div>
    </div>
  );
}
