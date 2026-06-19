export type ProductCategory =
  | "desktops"
  | "components"
  | "peripherals"
  | "networking"
  | "accessories";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: "PHP";
  category: ProductCategory;
  image: string;
  inStock: boolean;
  sku: string;
};

export const PRODUCT_CATEGORIES: Record<
  ProductCategory,
  { label: string; description: string }
> = {
  desktops: {
    label: "Desktops & Laptops",
    description: "Ready-to-use systems for home and office.",
  },
  components: {
    label: "Components",
    description: "RAM, storage, and upgrade parts.",
  },
  peripherals: {
    label: "Peripherals",
    description: "Keyboards, mice, and input devices.",
  },
  networking: {
    label: "Networking",
    description: "Routers, switches, and connectivity gear.",
  },
  accessories: {
    label: "Accessories",
    description: "Cables, hubs, UPS, and essentials.",
  },
};

export const PRODUCTS: Product[] = [
  {
    id: "dell-optiplex-7090",
    name: "Dell OptiPlex 7090 Desktop",
    description:
      "Refurbished business desktop with Intel Core i5, 8GB RAM, and 256GB SSD. Ideal for office workloads.",
    price: 24999,
    currency: "PHP",
    category: "desktops",
    image: "/images/services/hardware.png",
    inStock: true,
    sku: "TRQ-DT-001",
  },
  {
    id: "lenovo-thinkpad-e14",
    name: "Lenovo ThinkPad E14 Laptop",
    description:
      "14-inch business laptop with Ryzen 5, 16GB RAM, and 512GB SSD. Built for productivity on the go.",
    price: 38999,
    currency: "PHP",
    category: "desktops",
    image: "/images/services/repair.png",
    inStock: true,
    sku: "TRQ-LT-002",
  },
  {
    id: "kingston-16gb-ddr4",
    name: "Kingston 16GB DDR4 RAM",
    description:
      "Desktop memory module, 3200MHz. Compatible with most modern Intel and AMD systems.",
    price: 3499,
    currency: "PHP",
    category: "components",
    image: "/images/services/hardware.png",
    inStock: true,
    sku: "TRQ-RAM-003",
  },
  {
    id: "samsung-500gb-ssd",
    name: "Samsung 500GB SATA SSD",
    description:
      "Fast solid-state drive for boot drives and storage upgrades. Dramatic speed improvement over HDDs.",
    price: 4299,
    currency: "PHP",
    category: "components",
    image: "/images/services/hardware.png",
    inStock: true,
    sku: "TRQ-SSD-004",
  },
  {
    id: "logitech-m185-mouse",
    name: "Logitech M185 Wireless Mouse",
    description:
      "Compact wireless mouse with long battery life. Plug-and-play USB receiver included.",
    price: 899,
    currency: "PHP",
    category: "peripherals",
    image: "/images/services/software.png",
    inStock: true,
    sku: "TRQ-MSE-005",
  },
  {
    id: "redragon-k552-keyboard",
    name: "Redragon K552 Mechanical Keyboard",
    description:
      "Tenkeyless RGB mechanical keyboard with tactile switches. Great for gaming and typing.",
    price: 2199,
    currency: "PHP",
    category: "peripherals",
    image: "/images/services/software.png",
    inStock: true,
    sku: "TRQ-KBD-006",
  },
  {
    id: "tplink-archer-ax12",
    name: "TP-Link Archer AX12 WiFi 6 Router",
    description:
      "Dual-band WiFi 6 router for homes and small offices. Stable coverage and easy setup.",
    price: 3299,
    currency: "PHP",
    category: "networking",
    image: "/images/services/network.png",
    inStock: true,
    sku: "TRQ-NET-007",
  },
  {
    id: "apc-600va-ups",
    name: "APC 600VA UPS",
    description:
      "Uninterruptible power supply protects PCs and routers from outages and power surges.",
    price: 2799,
    currency: "PHP",
    category: "accessories",
    image: "/images/services/recovery.png",
    inStock: true,
    sku: "TRQ-UPS-008",
  },
  {
    id: "usbc-hub-7in1",
    name: "USB-C Hub 7-in-1",
    description:
      "Expand laptop ports with HDMI, USB-A, SD card reader, and PD charging pass-through.",
    price: 1299,
    currency: "PHP",
    category: "accessories",
    image: "/images/services/consulting.png",
    inStock: false,
    sku: "TRQ-HUB-009",
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function formatPrice(amount: number, currency: "PHP" = "PHP"): string {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}
