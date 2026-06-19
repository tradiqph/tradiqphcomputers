import { NextResponse } from "next/server";
import { getProductById } from "@/lib/products";
import type { CartCheckoutPayload } from "@/lib/cart";
import { isXenditConfigured } from "@/lib/xendit/client";
import { createXenditInvoiceFromCart } from "@/lib/xendit/checkout";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CartCheckoutPayload;

    if (!body.items?.length) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const { givenNames, surname, email, mobileNumber } = body.customer ?? {};
    if (!givenNames || !surname || !email || !mobileNumber) {
      return NextResponse.json(
        { error: "Customer details are required" },
        { status: 400 }
      );
    }

    const lineItems = body.items
      .map((item) => {
        const product = getProductById(item.productId);
        if (!product || !product.inStock) return null;
        return {
          productId: item.productId,
          quantity: item.quantity,
          product,
          lineTotal: product.price * item.quantity,
        };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);

    if (lineItems.length === 0) {
      return NextResponse.json(
        { error: "No valid items in cart" },
        { status: 400 }
      );
    }

    if (!isXenditConfigured()) {
      return NextResponse.json(
        {
          error:
            "Xendit is not configured yet. Set XENDIT_SECRET_KEY in your environment variables.",
        },
        { status: 503 }
      );
    }

    const orderId = `trq-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    const invoice = await createXenditInvoiceFromCart(
      orderId,
      lineItems,
      {
        given_names: givenNames,
        surname,
        email,
        mobile_number: mobileNumber.startsWith("+")
          ? mobileNumber
          : `+63${mobileNumber.replace(/^0/, "")}`,
      }
    );

    return NextResponse.json({
      orderId,
      invoiceId: invoice.id,
      invoiceUrl: invoice.invoice_url,
      status: invoice.status,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
