import Link from "next/link";
import { XCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const metadata = {
  title: "Payment Failed",
};

export default async function CheckoutFailedPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const { order } = await searchParams;

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-24 text-center">
      <FadeIn>
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
          <XCircle className="h-8 w-8 text-destructive" />
        </div>
        <h1 className="mt-6 font-heading text-3xl font-bold">
          Payment Not Completed
        </h1>
        <p className="mt-3 text-muted-foreground">
          Your payment was not completed. You can try again from your cart or
          contact us for assistance.
        </p>
        {order && (
          <p className="mt-2 text-sm text-muted-foreground">
            Order reference:{" "}
            <span className="font-mono text-foreground">{order}</span>
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/checkout" className="cursor-pointer">
            <ShimmerButton type="button">Try Again</ShimmerButton>
          </Link>
          <Link
            href="/contact"
            className="inline-flex cursor-pointer items-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors duration-200 hover:border-[#d4af37] hover:text-[#d4af37]"
          >
            Contact Support
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
