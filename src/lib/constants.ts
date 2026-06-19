export const SITE_NAME = "TRADIQPH Computer IT Services";
export const SITE_TAGLINE = "Professional IT Solutions in the Philippines";
export const SITE_EMAIL = "ceo@tradiqph.biz";
export const SITE_PHONE = "09301502423";
export const SITE_LOCATION = "Philippines";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/store", label: "Store" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    id: "repair",
    title: "Computer Repair & Maintenance",
    description:
      "Fast diagnostics, hardware repairs, and preventive maintenance to keep your systems running smoothly.",
    image: "/images/services/repair.png",
  },
  {
    id: "network",
    title: "Network Setup & Administration",
    description:
      "Professional LAN/WAN configuration, router setup, and ongoing network monitoring for businesses.",
    image: "/images/services/network.png",
  },
  {
    id: "consulting",
    title: "IT Consultation",
    description:
      "Strategic technology planning and expert advice to help your business grow with the right IT solutions.",
    image: "/images/services/consulting.png",
  },
  {
    id: "hardware",
    title: "Hardware Sales & Upgrades",
    description:
      "Quality computer components and full system upgrades tailored to your performance needs and budget.",
    image: "/images/services/hardware.png",
  },
  {
    id: "software",
    title: "Software Installation & Licensing",
    description:
      "Licensed software deployment, OS installation, and configuration for home and business environments.",
    image: "/images/services/software.png",
  },
  {
    id: "recovery",
    title: "Data Recovery & Backup",
    description:
      "Secure data recovery services and automated backup solutions to protect your critical business data.",
    image: "/images/services/recovery.png",
  },
];
