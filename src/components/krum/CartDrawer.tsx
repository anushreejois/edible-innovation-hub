/* eslint-disable prettier/prettier */
import { useCart } from "@/lib/cart-context";
import { X, Plus, Minus, Trash2 } from "lucide-react";

// ✅ INR formatter (same as other files)
const formatINR = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

export function CartDrawer() {
  const { items, open, setOpen, inc, dec, remove, total, clear, toast } = useCart();

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-forest-deep/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[440px] bg-card border-l border-border shadow-deep transform transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <header className="flex items-center justify-between px-6 py-5 border-b border-border">
            <div>
              <h3 className="font-display text-2xl text-cream tracking-wider">Your Cart</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mt-1">
                {items.length} {items.length === 1 ? "item" : "items"}
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-20">
                <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center">
                  <span className="font-display text-3xl text-gold">0</span>
                </div>
                <p className="text-muted-foreground text-sm">Your cart is empty</p>
                <button
                  onClick={() => setOpen(false)}
                  className="text-xs uppercase tracking-[0.2em] text-gold border-b border-gold/40 pb-1 hover:border-gold"
                >
                  Browse products
                </button>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4 p-3 rounded-lg bg-muted/40 border border-border">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                      loading="lazy"
                    />

                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-sans font-medium text-cream text-sm">{item.name}</h4>
                          {item.flavor && (
                            <p className="text-[10px] uppercase tracking-[0.2em] text-tan mt-0.5">
                              {item.flavor}
                            </p>
                          )}
                        </div>

                        <button
                          onClick={() => remove(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-2 border border-border rounded-full">
                          <button onClick={() => dec(item.id)} className="w-7 h-7 flex items-center justify-center hover:text-gold">
                            <Minus className="w-3 h-3" />
                          </button>

                          <span className="text-xs w-5 text-center font-medium">{item.qty}</span>

                          <button onClick={() => inc(item.id)} className="w-7 h-7 flex items-center justify-center hover:text-gold">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* ✅ FIXED PRICE */}
                        <span className="font-display text-lg text-gold">
                          {formatINR(item.price * item.qty)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <footer className="border-t border-border px-6 py-5 space-y-4 bg-forest/40">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Subtotal
                </span>

                {/* ✅ FIXED TOTAL */}
                <span className="font-display text-3xl text-gradient-gold">
                  {formatINR(total)}
                </span>
              </div>

              <button
                onClick={() => {
                  toast("Order placed — thank you!");
                  clear();
                  setOpen(false);
                }}
                className="w-full py-4 rounded-full bg-gradient-to-r from-gold to-tan-light text-forest-deep font-medium uppercase tracking-[0.2em] text-xs hover:shadow-gold transition-all"
              >
                Checkout
              </button>

              <button
                onClick={clear}
                className="w-full text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-cream"
              >
                Clear cart
              </button>
            </footer>
          )}
        </div>
      </aside>
    </>
  );
}