"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { CartButton } from "@/components/store/CartButton";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex cursor-pointer items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="TRADIQPH"
            width={160}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative cursor-pointer text-sm font-medium transition-colors duration-200 hover:text-[#d4af37]",
                isNavActive(pathname, link.href)
                  ? "text-[#d4af37]"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-[#d4af37] transition-all duration-200",
                  isNavActive(pathname, link.href) ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <CartButton />
          <Link href="/contact" className="cursor-pointer">
            <ShimmerButton type="button" className="px-4 py-2 text-xs">
              Get a Quote
            </ShimmerButton>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <CartButton />
          <button
            type="button"
            className="cursor-pointer rounded-md p-2 text-foreground transition-colors duration-200 hover:text-[#d4af37] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
                  isNavActive(pathname, link.href)
                    ? "bg-secondary text-[#d4af37]"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="cursor-pointer"
            >
              <ShimmerButton type="button" className="w-full">
                Get a Quote
              </ShimmerButton>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
