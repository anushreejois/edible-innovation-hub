import { useCart, type Product } from "@/lib/cart-context";
import spoons from "@/assets/product-spoons.jpg";
import set from "@/assets/product-cutlery-set.jpg";
import cups from "@/assets/product-cups.jpg";
import straws from "@/assets/product-straws.jpg";
import { Plus } from "lucide-react";

const PRODUCTS: (Product & { tags: string[]; description: string })[] = [
  {
    id: "spoons",
    name: "Edible Spoons",
    price: 8.0,
    image: spoons,
    flavor: "Vanilla · Plain · Cumin",
    description: "Our flagship. Stir, sip, scoop — then snack. Pack of 24.",
    tags: ["Vanilla", "Plain", "Cumin"],
  },
  {
    id: "set",
    name: "Cutlery Set",
    price: 14.0,
    image: set,
    flavor: "Plain · Black Pepper",
    description: "Fork, knife, spoon. The full meal, eaten and uneaten.",
    tags: ["Fork", "Knife", "Spoon"],
  },
  {
    id: "cups",
    name: "Edible Cups",
    price: 12.0,
    image: cups,
    flavor: "Chocolate · Plain",
    description: "Holds hot coffee 25+ minutes. Then becomes dessert.",
    tags: ["Hot", "Cold", "Crunchy"],
  },
  {
    id: "straws",
    name: "Straws & Chopsticks",
    price: 9.0,
    image: straws,
    flavor: "Plain · Mint",
    description: "Sip without guilt. Crisp without cracking.",
    tags: ["Mint", "Plain", "Bundle"],
  },
];

export function Products() {
  const { add } = useCart();
  return (
    <section id="products" className="relative py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">04 — Products</p>
          <h2 className="font-display text-6xl md:text-8xl text-cream leading-[0.9]">
            Eat your <span className="font-serif-i text-gradient-gold">utensils.</span>
          </h2>
        </div>
        <p className="text-cream/60 text-sm max-w-sm">
          Four formats, one mission. Every piece is hand-shaped, oven-baked, and
          crunchy enough to outlast your meal.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((p) => (
          <article
            key={p.id}
            className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-gold/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold"
          >
            <div className="aspect-square overflow-hidden bg-forest">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-2xl text-cream tracking-wide">{p.name}</h3>
                <span className="font-display text-2xl text-gold">${p.price.toFixed(0)}</span>
              </div>
              <p className="text-xs text-cream/60 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] uppercase tracking-[0.15em] px-2 py-1 rounded-full border border-border text-tan-light"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => add(p)}
                className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-full border border-gold/40 text-cream text-[11px] uppercase tracking-[0.2em] hover:bg-gold hover:text-forest-deep transition-all"
              >
                <Plus className="w-3.5 h-3.5" /> Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
