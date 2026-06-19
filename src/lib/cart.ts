import type { Product } from "@/lib/products";

export type CartItem = {
  productId: string;
  quantity: number;
};

export type CartLineItem = CartItem & {
  product: Product;
  lineTotal: number;
};

export type CartCustomer = {
  givenNames: string;
  surname: string;
  email: string;
  mobileNumber: string;
};

export type CartCheckoutPayload = {
  items: CartItem[];
  customer: CartCustomer;
};

export const CART_STORAGE_KEY = "tradiqph_cart";

export function calculateCartTotals(items: CartLineItem[]) {
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { subtotal, itemCount };
}

export function cartItemsToXenditLineItems(items: CartLineItem[]) {
  return items.map((item) => ({
    name: item.product.name,
    quantity: item.quantity,
    price: item.product.price,
    category: item.product.category,
    url: `/store#${item.product.id}`,
  }));
}
