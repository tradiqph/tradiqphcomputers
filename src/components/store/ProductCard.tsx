"use client";

import Image from "next/image";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article
      id={product.id}
      className={cn(
        "group glow-gold-hover flex h-full flex-col overflow-hidden rounded-xl border border-border/50 bg-card",
        !product.inStock && "opacity-75"
      )}
    >
      <div className="relative h-48 overflow-hidden bg-secondary/30">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {!product.inStock && (
          <span className="absolute right-3 top-3 rounded-full bg-[#b91c1c] px-3 py-1 text-xs font-medium text-white">
            Out of Stock
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-wider text-[#d4af37]">
          {product.sku}
        </p>
        <h3 className="mt-1 font-heading text-lg font-semibold transition-colors duration-200 group-hover:text-[#d4af37]">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-heading text-xl font-bold text-[#d4af37]">
            {formatPrice(product.price)}
          </span>
          <button
            type="button"
            disabled={!product.inStock}
            onClick={() => addItem(product.id)}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-sm font-medium text-[#d4af37] transition-all duration-200 hover:border-[#d4af37] hover:bg-[#d4af37]/20 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
