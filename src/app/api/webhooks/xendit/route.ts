import { NextResponse } from "next/server";
import { getXenditWebhookToken } from "@/lib/xendit/client";
import type { XenditWebhookPayload } from "@/lib/xendit/types";

export async function POST(request: Request) {
  const webhookToken = getXenditWebhookToken();
  const callbackToken = request.headers.get("x-callback-token");

  if (webhookToken && callbackToken !== webhookToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let payload: XenditWebhookPayload;

  try {
    payload = (await request.json()) as XenditWebhookPayload;
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  // TODO: Persist order status to database when ready.
  // For now, log payment events for verification during integration.
  console.info("[Xendit Webhook]", {
    id: payload.id,
    external_id: payload.external_id,
    status: payload.status,
    amount: payload.amount,
    currency: payload.currency,
    paid_at: payload.paid_at,
    payment_method: payload.payment_method,
  });

  if (payload.status === "PAID" || payload.status === "SETTLED") {
    // TODO: Mark order as paid, send confirmation email, update inventory.
  }

  return NextResponse.json({ received: true });
}
