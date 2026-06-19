"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/products";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    lineItems,
    subtotal,
    itemCount,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-50 cursor-pointer bg-black/60 backdrop-blur-sm"
        onClick={closeCart}
        aria-label="Close cart"
      />
      <aside
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border/50 bg-background shadow-2xl"
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-border/50 px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[#d4af37]" />
            <h2 className="font-heading text-lg font-semibold">
              Cart ({itemCount})
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="cursor-pointer rounded-md p-1 transition-colors duration-200 hover:text-[#d4af37]"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lineItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground/50" />
              <p className="mt-4 font-medium">Your cart is empty</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Browse the store and add products to get started.
              </p>
              <Link
                href="/store"
                onClick={closeCart}
                className="mt-6 cursor-pointer text-sm font-medium text-[#d4af37] transition-colors duration-200 hover:text-[#e8c96a]"
              >
                Go to Store
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {lineItems.map((item) => (
                <li
                  key={item.productId}
                  className="flex gap-3 rounded-lg border border-border/50 bg-card p-3"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-secondary/30">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium leading-tight">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatPrice(item.product.price)} each
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId)}
                        className="cursor-pointer text-muted-foreground transition-colors duration-200 hover:text-destructive"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.quantity - 1
                            )
                          }
                          className="cursor-pointer rounded border border-border p-1 transition-colors duration-200 hover:border-[#d4af37]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.quantity + 1
                            )
                          }
                          className="cursor-pointer rounded border border-border p-1 transition-colors duration-200 hover:border-[#d4af37]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-[#d4af37]">
                        {formatPrice(item.lineTotal)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lineItems.length > 0 && (
          <div className="border-t border-border/50 p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-heading text-xl font-bold text-[#d4af37]">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mb-4 text-xs text-muted-foreground">
              Checkout powered by Xendit. You will be redirected to a secure
              payment page.
            </p>
            <Link href="/checkout" onClick={closeCart} className="block">
              <ShimmerButton type="button" className="w-full">
                Proceed to Checkout
              </ShimmerButton>
            </Link>
            <button
              type="button"
              onClick={clearCart}
              className="mt-3 w-full cursor-pointer text-center text-xs text-muted-foreground transition-colors duration-200 hover:text-destructive"
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
