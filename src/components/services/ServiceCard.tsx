import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group glow-gold-hover flex h-full flex-col overflow-hidden rounded-xl border border-border/50 bg-card",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-semibold transition-colors duration-200 group-hover:text-[#d4af37]">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">
          {service.description}
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-[#d4af37] transition-colors duration-200 hover:text-[#e8c96a]"
        >
          Inquire
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
