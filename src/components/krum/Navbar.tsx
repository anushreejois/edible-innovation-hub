import { useCart } from "@/lib/cart-context";
import { ShoppingBag } from "lucide-react";

export function Navbar() {
  const { count, setOpen, setAboutOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-1 select-none">
          <span className="font-display text-3xl md:text-4xl text-cream tracking-wider">Kr</span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-gold mt-3" />
          <span className="font-display text-3xl md:text-4xl text-cream tracking-wider">m.</span>
        </a>

        <div className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.2em] text-cream/70">
          <a href="#problem" className="hover:text-gold transition-colors">Problem</a>
          <a href="#products" className="hover:text-gold transition-colors">Products</a>
          <a href="#science" className="hover:text-gold transition-colors">Science</a>
          <a href="#shop" className="hover:text-gold transition-colors">Shop</a>
          <button onClick={() => setAboutOpen(true)} className="hover:text-gold transition-colors uppercase tracking-[0.2em]">
            About
          </button>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="relative flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/40 text-cream hover:bg-gold hover:text-forest-deep transition-all duration-300 group"
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="text-xs uppercase tracking-[0.2em] hidden sm:inline">Cart</span>
          {count > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-gold text-forest-deep text-[10px] font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5">
              {count}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
