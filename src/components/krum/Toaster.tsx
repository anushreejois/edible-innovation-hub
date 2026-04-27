import { useCart } from "@/lib/cart-context";
import { Check } from "lucide-react";

export function Toaster() {
  const { toasts } = useCart();

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-3 pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="glass-strong rounded-full pl-3 pr-6 py-2.5 flex items-center gap-3 shadow-gold animate-fade-up pointer-events-auto"
        >
          <span className="w-7 h-7 rounded-full bg-gold flex items-center justify-center">
            <Check className="w-3.5 h-3.5 text-forest-deep" strokeWidth={3} />
          </span>
          <span className="text-xs uppercase tracking-[0.15em] text-cream">{t.message}</span>
        </div>
      ))}
    </div>
  );
}
