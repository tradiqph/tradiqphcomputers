"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, CreditCard, Loader2 } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FadeIn } from "@/components/ui/fade-in";

export default function CheckoutPage() {
  const { lineItems, subtotal, itemCount, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const customer = {
      givenNames: String(form.get("givenNames") ?? "").trim(),
      surname: String(form.get("surname") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      mobileNumber: String(form.get("mobileNumber") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/checkout/xendit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: lineItems.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
          customer,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Checkout failed. Please try again.");
        return;
      }

      if (data.invoiceUrl) {
        clearCart();
        window.location.href = data.invoiceUrl;
        return;
      }

      setError("No payment URL received from Xendit.");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (itemCount === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 className="font-heading text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">
          Add products from the store before checking out.
        </p>
        <Link
          href="/store"
          className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-[#d4af37] transition-colors duration-200 hover:text-[#e8c96a]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Store
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <Link
          href="/store"
          className="mb-8 inline-flex cursor-pointer items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-[#d4af37]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Store
        </Link>
        <h1 className="font-heading text-3xl font-bold sm:text-4xl">
          Checkout
        </h1>
        <p className="mt-2 text-muted-foreground">
          Complete your details and pay securely with Xendit.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Card className="border-border/50 bg-card">
            <CardHeader>
              <CardTitle className="font-heading">Customer Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCheckout} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="givenNames">First Name</Label>
                    <Input
                      id="givenNames"
                      name="givenNames"
                      required
                      placeholder="Juan"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="surname">Last Name</Label>
                    <Input
                      id="surname"
                      name="surname"
                      required
                      placeholder="Dela Cruz"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobileNumber">Mobile Number</Label>
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="tel"
                    required
                    placeholder="09XXXXXXXXX"
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}

                <ShimmerButton
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Creating payment...
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-4 w-4" />
                      Pay with Xendit
                    </>
                  )}
                </ShimmerButton>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="border-border/50 bg-card">
            <CardHeader>
              <CardTitle className="font-heading">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {lineItems.map((item) => (
                  <li
                    key={item.productId}
                    className="flex justify-between gap-3 text-sm"
                  >
                    <span className="text-muted-foreground">
                      {item.product.name} × {item.quantity}
                    </span>
                    <span className="shrink-0 font-medium">
                      {formatPrice(item.lineTotal)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-between border-t border-border/50 pt-4">
                <span className="font-medium">Total</span>
                <span className="font-heading text-xl font-bold text-[#d4af37]">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Payments are processed by Xendit. Supported methods include GCash,
                Maya, cards, bank transfer, and more (based on your Xendit
                account configuration).
              </p>
              <Link
                href="/store"
                className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors duration-200 hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                Continue Shopping
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
