import { useState } from "react";
import { useCart, type Product } from "@/lib/cart-context";
import spoons from "@/assets/product-spoons.jpg";
import set from "@/assets/product-cutlery-set.jpg";
import cups from "@/assets/product-cups.jpg";
import { Check } from "lucide-react";

type Tier = {
  id: string;
  name: string;
  price: number;
  unit: string;
  features: string[];
  image: string;
  badge?: string;
};

const TABS: Record<string, Tier[]> = {
  Retail: [
    { id: "r1", name: "Starter Pack", price: 12, unit: "/ 24 pcs", image: spoons, features: ["24 spoons", "Vanilla flavor", "Home-friendly box", "Ships in 2 days"] },
    { id: "r2", name: "Family Box", price: 28, unit: "/ 60 pcs", image: set, badge: "Most Popular", features: ["Mixed cutlery set", "3 flavors included", "Compostable wrap", "Free shipping"] },
    { id: "r3", name: "Subscriber", price: 42, unit: "/ month", image: cups, features: ["100 pcs monthly", "Rotating flavors", "Cancel anytime", "10% off forever"] },
  ],
  Bulk: [
    { id: "b1", name: "Cafe Crate", price: 89, unit: "/ 500 pcs", image: spoons, features: ["500 spoons", "Bulk packaging", "Café branding insert", "Net 30 terms"] },
    { id: "b2", name: "Restaurant", price: 240, unit: "/ 1500 pcs", image: set, badge: "Best Value", features: ["1500 mixed cutlery", "Volume discount", "Dedicated account rep", "Free reorders"] },
    { id: "b3", name: "Enterprise", price: 1200, unit: "/ 10k pcs", image: cups, features: ["10,000+ pieces", "Custom flavor blends", "Quarterly delivery", "On-site training"] },
  ],
  Custom: [
    { id: "c1", name: "Branded Run", price: 320, unit: "/ 1k pcs", image: set, features: ["Logo embossed", "Custom flavor", "1000 pcs minimum", "4-week lead time"] },
    { id: "c2", name: "Event Edition", price: 580, unit: "/ 2.5k pcs", image: spoons, badge: "Most Loved", features: ["Wedding/corporate kits", "Branded box & wrap", "Concierge support", "Rush available"] },
    { id: "c3", name: "Co-creation", price: 0, unit: "let's talk", image: cups, features: ["Build your own SKU", "Recipe development", "Exclusive distribution", "Long-term partnership"] },
  ],
};

export function Shop() {
  const [tab, setTab] = useState<keyof typeof TABS>("Retail");
  const { add } = useCart();

  return (
    <section id="shop" className="relative py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <header className="text-center mb-12">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">11 — Shop</p>
        <h2 className="font-display text-6xl md:text-8xl text-cream leading-[0.9]">
          Pick your <span className="font-serif-i text-gradient-gold">scale.</span>
        </h2>
      </header>

      <div className="flex justify-center mb-16">
        <div className="inline-flex glass rounded-full p-1.5 border border-border">
          {(Object.keys(TABS) as (keyof typeof TABS)[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 md:px-10 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] transition-all ${
                tab === t
                  ? "bg-gradient-to-r from-gold to-tan-light text-forest-deep shadow-gold"
                  : "text-cream/70 hover:text-cream"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TABS[tab].map((tier, idx) => {
          const featured = idx === 1;
          return (
            <article
              key={tier.id}
              className={`relative rounded-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                featured
                  ? "border-gold/60 bg-gradient-to-b from-forest-mid to-card shadow-gold scale-[1.02]"
                  : "border-border bg-card hover:border-gold/40"
              }`}
            >
              {tier.badge && (
                <div className="absolute top-5 right-5 z-10 px-3 py-1 rounded-full bg-gold text-forest-deep text-[9px] uppercase tracking-[0.2em] font-bold">
                  {tier.badge}
                </div>
              )}
              <div className="aspect-[4/3] overflow-hidden">
                <img src={tier.image} alt={tier.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-7 space-y-5">
                <div>
                  <h3 className="font-display text-3xl text-cream tracking-wide">{tier.name}</h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-display text-5xl text-gradient-gold">
                      {tier.price === 0 ? "—" : `$${tier.price}`}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-[0.15em]">
                      {tier.unit}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs text-cream/75">
                      <Check className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    const product: Product = {
                      id: `${tab}-${tier.id}`,
                      name: `${tier.name} (${tab})`,
                      price: tier.price || 0,
                      image: tier.image,
                      flavor: tier.unit,
                    };
                    add(product);
                  }}
                  className={`w-full py-3.5 rounded-full text-[11px] uppercase tracking-[0.2em] transition-all ${
                    featured
                      ? "bg-gradient-to-r from-gold to-tan-light text-forest-deep hover:shadow-gold"
                      : "border border-gold/40 text-cream hover:bg-gold hover:text-forest-deep"
                  }`}
                >
                  {tier.price === 0 ? "Contact us" : "Add to cart"}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
