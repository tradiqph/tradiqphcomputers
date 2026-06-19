import type { CartLineItem } from "@/lib/cart";
import { cartItemsToXenditLineItems } from "@/lib/cart";
import { getSiteUrl, xenditFetch } from "@/lib/xendit/client";
import type {
  CreateXenditInvoiceInput,
  XenditInvoiceResponse,
} from "@/lib/xendit/types";

export async function createXenditInvoiceFromCart(
  orderId: string,
  items: CartLineItem[],
  customer: CreateXenditInvoiceInput["customer"]
): Promise<XenditInvoiceResponse> {
  const amount = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const siteUrl = getSiteUrl();

  const payload = {
    external_id: orderId,
    amount,
    description: `TRADIQPH Store Order ${orderId}`,
    currency: "PHP",
    invoice_duration: 86400,
    customer,
    items: cartItemsToXenditLineItems(items),
    success_redirect_url: `${siteUrl}/checkout/success?order=${orderId}`,
    failure_redirect_url: `${siteUrl}/checkout/failed?order=${orderId}`,
    metadata: {
      source: "tradiqph-store",
      item_count: String(items.length),
    },
  };

  return xenditFetch<XenditInvoiceResponse>("/v2/invoices", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
