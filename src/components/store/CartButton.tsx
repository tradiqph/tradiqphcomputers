"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";

interface CartButtonProps {
  className?: string;
}

export function CartButton({ className }: CartButtonProps) {
  const { itemCount, toggleCart } = useCart();

  return (
    <button
      type="button"
      onClick={toggleCart}
      className={cn(
        "relative cursor-pointer rounded-lg border border-border p-2 transition-all duration-200 hover:border-[#d4af37] hover:text-[#d4af37]",
        className
      )}
      aria-label={`Open cart with ${itemCount} items`}
    >
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b91c1c] px-1 text-[10px] font-bold text-white">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </button>
  );
}
