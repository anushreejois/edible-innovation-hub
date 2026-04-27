import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  flavor?: string;
};

export type CartItem = Product & { qty: number };

type Toast = { id: number; message: string };

type CartContextType = {
  items: CartItem[];
  add: (p: Product) => void;
  remove: (id: string) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  clear: () => void;
  total: number;
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  toasts: Toast[];
  toast: (msg: string) => void;
  aboutOpen: boolean;
  setAboutOpen: (v: boolean) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((message: string) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, message }]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 2800);
  }, []);

  const add = useCallback(
    (p: Product) => {
      setItems((curr) => {
        const found = curr.find((c) => c.id === p.id);
        if (found) return curr.map((c) => (c.id === p.id ? { ...c, qty: c.qty + 1 } : c));
        return [...curr, { ...p, qty: 1 }];
      });
      toast(`Added ${p.name} to cart`);
    },
    [toast]
  );

  const remove = useCallback((id: string) => {
    setItems((c) => c.filter((x) => x.id !== id));
  }, []);

  const inc = useCallback((id: string) => {
    setItems((c) => c.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x)));
  }, []);

  const dec = useCallback((id: string) => {
    setItems((c) =>
      c
        .map((x) => (x.id === id ? { ...x, qty: x.qty - 1 } : x))
        .filter((x) => x.qty > 0)
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, add, remove, inc, dec, clear, total, count, open, setOpen, toasts, toast, aboutOpen, setAboutOpen }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
