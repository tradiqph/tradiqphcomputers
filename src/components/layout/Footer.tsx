import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  NAV_LINKS,
  SITE_EMAIL,
  SITE_LOCATION,
  SITE_NAME,
  SITE_PHONE,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="font-heading text-lg font-semibold text-gradient-gold">
            {SITE_NAME}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Your trusted local IT partner in the Philippines. Reliable
            computer services for homes and businesses.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="cursor-pointer text-sm text-muted-foreground transition-colors duration-200 hover:text-[#d4af37]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
            Contact
          </h4>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-[#d4af37]"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#d4af37]" />
                {SITE_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={`tel:${SITE_PHONE}`}
                className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-[#d4af37]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#d4af37]" />
                {SITE_PHONE}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-[#d4af37]" />
              {SITE_LOCATION}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
