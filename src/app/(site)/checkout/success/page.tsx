import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const metadata = {
  title: "Payment Successful",
};

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const { order } = await searchParams;

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-24 text-center">
      <FadeIn>
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]/10">
          <CheckCircle className="h-8 w-8 text-[#d4af37]" />
        </div>
        <h1 className="mt-6 font-heading text-3xl font-bold">
          Payment Successful
        </h1>
        <p className="mt-3 text-muted-foreground">
          Thank you for your purchase! Your payment has been received.
        </p>
        {order && (
          <p className="mt-2 text-sm text-muted-foreground">
            Order reference:{" "}
            <span className="font-mono text-foreground">{order}</span>
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/store" className="cursor-pointer">
            <ShimmerButton type="button">Back to Store</ShimmerButton>
          </Link>
          <Link
            href="/"
            className="inline-flex cursor-pointer items-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors duration-200 hover:border-[#d4af37] hover:text-[#d4af37]"
          >
            Go Home
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
