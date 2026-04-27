import { useCart } from "@/lib/cart-context";
import { X } from "lucide-react";

export function AboutModal() {
  const { aboutOpen, setAboutOpen } = useCart();

  if (!aboutOpen) return null;

  return (
    <div
      onClick={() => setAboutOpen(false)}
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-forest-deep/80 backdrop-blur-md animate-fade-up"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-strong rounded-2xl max-w-2xl w-full p-8 md:p-12 relative shadow-deep"
      >
        <button
          onClick={() => setAboutOpen(false)}
          className="absolute top-5 right-5 w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Our Story</p>
        <h2 className="font-display text-5xl md:text-6xl text-cream mb-6 leading-none">
          We're rewriting <br />
          <span className="font-serif-i text-gradient-gold normal-case">the rules</span> of disposable.
        </h2>
        <div className="space-y-4 text-cream/80 text-sm leading-relaxed">
          <p>
            Krum was born in a small kitchen in Bengaluru in 2021, when our founder watched 800 plastic
            spoons get tossed at a wedding in under three hours. There had to be a better way — one that
            tasted good too.
          </p>
          <p>
            Today we craft cutlery from sorghum, rice and wheat flour. Stable in hot soup for 25 minutes,
            ice cream for 45, and if you don't eat them, they decompose in 3-5 days. No plastic.
            No paper. No compromise.
          </p>
          <p className="font-serif-i text-tan-light text-base">
            "The spoon you eat. Or the spoon the earth eats."
          </p>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>Est. 2021 — Bengaluru</span>
          <span className="text-gold">FSSAI Certified</span>
        </div>
      </div>
    </div>
  );
}
