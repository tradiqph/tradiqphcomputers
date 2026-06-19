"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  calculateCartTotals,
  CART_STORAGE_KEY,
  type CartItem,
  type CartLineItem,
} from "@/lib/cart";
import { getProductById } from "@/lib/products";

type CartContextValue = {
  items: CartItem[];
  lineItems: CartLineItem[];
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function loadStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(loadStoredCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const lineItems = useMemo<CartLineItem[]>(() => {
    return items
      .map((item) => {
        const product = getProductById(item.productId);
        if (!product) return null;
        return {
          ...item,
          product,
          lineTotal: product.price * item.quantity,
        };
      })
      .filter((item): item is CartLineItem => item !== null);
  }, [items]);

  const { subtotal, itemCount } = useMemo(
    () => calculateCartTotals(lineItems),
    [lineItems]
  );

  const addItem = useCallback((productId: string, quantity = 1) => {
    const product = getProductById(productId);
    if (!product?.inStock) return;

    setItems((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (existing) {
        return current.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...current, { productId, quantity }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((current) =>
      current.filter((item) => item.productId !== productId)
    );
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((current) =>
        current.filter((item) => item.productId !== productId)
      );
      return;
    }
    setItems((current) =>
      current.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const value: CartContextValue = {
    items,
    lineItems,
    itemCount,
    subtotal,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    toggleCart: () => setIsOpen((open) => !open),
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
