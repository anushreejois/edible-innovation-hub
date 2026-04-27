import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CartProvider, useCart } from "@/lib/cart-context";
import { CustomCursor } from "@/components/krum/CustomCursor";
import { Navbar } from "@/components/krum/Navbar";
import { CartDrawer } from "@/components/krum/CartDrawer";
import { AboutModal } from "@/components/krum/AboutModal";
import { Toaster } from "@/components/krum/Toaster";
import { Products } from "@/components/krum/Products";
import { Shop } from "@/components/krum/Shop";
import heroSpoon from "@/assets/hero-spoon.jpg";
import dividerMeal from "@/assets/divider-meal.jpg";
import dividerCafe from "@/assets/divider-cafe.jpg";
import packagingRetail from "@/assets/packaging-retail.jpg";
import packagingNatural from "@/assets/packaging-natural.jpg";
import packagingBulk from "@/assets/packaging-bulk.jpg";
import { ArrowDown, ArrowUpRight, Phone, Mail, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krum — The Spoon You Eat" },
      {
        name: "description",
        content:
          "Krum makes premium edible cutlery from sorghum and rice flour. Hot-stable, vegan, zero waste. The spoon that ends the meal.",
      },
      { property: "og:title", content: "Krum — The Spoon You Eat" },
      {
        property: "og:description",
        content: "Premium edible cutlery. 25+ minutes hot-stable. 0 plastic. Eat your spoon.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <CustomCursor />
      <Navbar />
      <CartDrawer />
      <AboutModal />
      <Toaster />
      <main id="top" className="overflow-x-hidden">
        <Hero />
        <Marquee />
        <Problem />
        <DividerMeal />
        <Products />
        <Packaging />
        <Nutrition />
        <DividerCafe />
        <Audience />
        <Science />
        <Comparison />
        <Shop />
        <Mission />
        <Contact />
        <Footer />
      </main>
    </CartProvider>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto grain">
      {/* Background SVG cutlery pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cutleryp" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="60" cy="60" r="2" fill="currentColor" className="text-tan" />
            <line x1="20" y1="60" x2="100" y2="60" stroke="currentColor" strokeWidth="0.3" className="text-tan" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cutleryp)" />
      </svg>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 w-full items-end">
        <div className="lg:col-span-7 space-y-8">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold animate-fade-up">
            01 — Sustainable cutlery · est. 2021
          </p>
          <h1 className="font-display text-7xl sm:text-8xl md:text-[10rem] text-cream leading-[0.85] animate-fade-up">
            The Spoon
            <br />
            You{" "}
            <span className="font-serif-i text-gradient-gold normal-case">Eat.</span>
          </h1>
          <p className="text-cream/70 text-base max-w-md leading-relaxed animate-fade-up">
            Cutlery made of sorghum, rice, and pure conviction. Stir your soup, sip
            your latte, then snack on the proof.
          </p>
          <div className="flex flex-wrap items-center gap-4 animate-fade-up">
            <a
              href="#products"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-gold to-tan-light text-forest-deep text-xs uppercase tracking-[0.2em] font-medium hover:shadow-gold transition-all"
            >
              Shop the spoon
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href="#problem"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-cream/20 text-cream text-xs uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-all"
            >
              Why edible <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="float-y">
            <img
              src={heroSpoon}
              alt="Edible spoon floating with crumbs"
              width={1024}
              height={1280}
              className="w-full max-w-md mx-auto rounded-3xl shadow-deep"
            />
          </div>
        </div>
      </div>

      {/* Quick stats bottom right */}
      <div className="absolute bottom-8 right-6 md:right-10 hidden md:flex flex-col items-end gap-1 text-right">
        <p className="font-display text-5xl text-gradient-gold leading-none">25+ Min</p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-cream/60">Hot-stable in soup</p>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Stir it", "Sip it", "Snack it", "Vegan", "Zero Waste", "FSSAI Certified", "Sorghum + Rice", "0 Plastic"];
  const items = [...words, ...words, ...words];
  return (
    <section className="relative py-10 border-y border-border bg-forest/40 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap will-change-transform" style={{ width: "max-content" }}>
        {items.map((w, i) => (
          <span key={i} className="font-display text-5xl md:text-7xl text-cream/30 px-8 flex items-center gap-8">
            {w}
            <span className="w-2 h-2 rounded-full bg-gold inline-block" />
          </span>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  const cards = [
    { title: "Paper", body: "Lined with PFAS forever-chemicals. Sogs in 4 min. Tastes like wet napkin.", num: "01" },
    { title: "Wood", body: "Splinters. Bitter aftertaste. Logged from forests we should be saving.", num: "02" },
    { title: "Bioplastic", body: "Needs a 60°C industrial composter. Yours doesn't have one. Lands in landfill.", num: "03" },
    { title: "Bamboo", body: "Imported, treated with formaldehyde, single-use. Greenwashing's favorite.", num: "04" },
  ];
  return (
    <section id="problem" className="relative py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">02 — The Problem</p>
          <h2 className="font-display text-6xl md:text-8xl text-cream leading-[0.9]">
            Every alternative <span className="font-serif-i text-gradient-gold">lies.</span>
          </h2>
        </div>
        <div className="space-y-6">
          <div className="text-[7rem] md:text-[10rem] font-display text-gradient-gold leading-none">120B</div>
          <p className="text-cream/70 text-base leading-relaxed max-w-md">
            Single-use plastic utensils discarded each year worldwide. The "biodegradable"
            replacements? Almost as bad. We did the math so you can taste the difference.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c) => (
          <article
            key={c.title}
            className="relative p-7 rounded-2xl bg-card border border-border hover:border-destructive/40 hover:bg-card/80 transition-all group min-h-[260px] flex flex-col"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-destructive/80">{c.num}</span>
            <h3 className="font-display text-4xl text-cream mt-2 mb-4 line-through decoration-destructive/60 decoration-1">
              {c.title}
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed mt-auto">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DividerMeal() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <img
        src={dividerMeal}
        alt="Empty plate after meal with edible spoon"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />
      <div className="relative z-10 h-full flex items-end p-6 md:p-16 max-w-7xl mx-auto">
        <h2 className="font-display text-6xl md:text-9xl text-cream leading-[0.85] max-w-3xl">
          The Spoon That <span className="font-serif-i text-gradient-gold">Ends</span> The Meal.
        </h2>
      </div>
    </section>
  );
}

function Packaging() {
  const items = [
    { img: packagingRetail, name: "Retail Box", caption: "Kraft + gold foil. Made for shelves." },
    { img: packagingNatural, name: "Natural Bundle", caption: "Twine-tied. Zero waste, fully loose." },
    { img: packagingBulk, name: "Bulk Carton", caption: "Industrial scale. Café-ready stacking." },
  ];
  return (
    <section className="relative py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">05 — Packaging</p>
          <h2 className="font-display text-6xl md:text-8xl text-cream leading-[0.9]">
            Packed with <span className="font-serif-i text-gradient-gold">care.</span>
          </h2>
        </div>
        <p className="text-cream/60 text-sm max-w-sm">
          Every wrapper is compostable. Every label is soy-ink printed. Every box ships flat.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <article
            key={it.name}
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-border hover:border-gold/40 transition-all"
          >
            <img src={it.img} alt={it.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <h3 className="font-display text-3xl text-cream tracking-wide">{it.name}</h3>
              <p className="text-xs text-cream/70 mt-1">{it.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Nutrition() {
  return (
    <section className="relative py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold">06 — Ingredients</p>
          <h2 className="font-display text-5xl md:text-7xl text-cream leading-[0.9]">
            Just <span className="font-serif-i text-gradient-gold">food.</span>
            <br />
            Nothing else.
          </h2>
          <p className="text-cream/70 text-base leading-relaxed max-w-md">
            Sorghum flour, rice flour, a whisper of salt, and natural flavor.
            That's it. No preservatives, no plasticizers, no surprise fine print.
            Vegan, gluten-conscious blends available.
          </p>
          <ul className="space-y-3 pt-4">
            {[
              ["Sorghum Flour", "55%"],
              ["Rice Flour", "30%"],
              ["Wheat Flour", "10%"],
              ["Salt + Natural Flavor", "5%"],
            ].map(([k, v]) => (
              <li key={k} className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm text-cream/80">{k}</span>
                <span className="font-display text-xl text-gold">{v}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CSS Nutrition label */}
        <div className="bg-cream text-forest-deep rounded-lg p-6 max-w-sm mx-auto w-full font-sans border-4 border-forest-deep shadow-deep">
          <h3 className="text-3xl font-bold border-b-8 border-forest-deep pb-1">Nutrition Facts</h3>
          <p className="text-xs mt-1">Serving size 1 spoon (4g)</p>
          <div className="border-b-4 border-forest-deep py-2">
            <p className="text-xs">Amount Per Serving</p>
            <div className="flex justify-between items-end">
              <span className="font-bold text-xl">Calories</span>
              <span className="font-bold text-2xl">15</span>
            </div>
          </div>
          <p className="text-[10px] text-right pt-1">% Daily Value*</p>
          {[
            ["Total Fat 0.1g", "0%"],
            ["Sodium 12mg", "1%"],
            ["Total Carbohydrate 3g", "1%"],
            ["  Dietary Fiber 0.5g", "2%"],
            ["  Total Sugars 0g", ""],
            ["Protein 0.4g", ""],
          ].map(([l, v]) => (
            <div key={l} className="flex justify-between border-b border-forest-deep/40 py-1 text-xs">
              <span className={l.startsWith("  ") ? "pl-4" : "font-semibold"}>{l.trim()}</span>
              <span className="font-bold">{v}</span>
            </div>
          ))}
          <p className="text-[9px] mt-2 leading-snug">
            *Percent Daily Values based on a 2,000 calorie diet. Yes — your spoon is part of the meal.
          </p>
        </div>
      </div>
    </section>
  );
}

function DividerCafe() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <img src={dividerCafe} alt="Cafe interior with edible spoons" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/60 to-transparent" />
      <div className="relative z-10 h-full flex items-center p-6 md:p-16 max-w-7xl mx-auto">
        <div className="max-w-xl space-y-5">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold">07 — For Cafes</p>
          <h2 className="font-display text-5xl md:text-7xl text-cream leading-[0.9]">
            Why cafés pay
            <br />
            <span className="font-serif-i text-gradient-gold">a premium.</span>
          </h2>
          <p className="text-cream/80 text-base leading-relaxed">
            Customers Instagram the spoon. Reviews mention it by name. Repeat visits jump
            14% in stores that switched. Sustainability that actually sells coffee.
          </p>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const items = [
    { num: "01", name: "Cafés", body: "From third-wave to chains. Espresso, tea, gelato — every format covered." },
    { num: "02", name: "Corporate", body: "Replace the pantry plastic. ESG reports get a real story to tell." },
    { num: "03", name: "Events", body: "Weddings, conferences, festivals. Premium feel, photo-ready." },
    { num: "04", name: "Retailers", body: "Premium D2C boxes for grocers, specialty stores, and gift baskets." },
  ];
  return (
    <section className="relative py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <header className="text-center mb-16">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">08 — Who We Serve</p>
        <h2 className="font-display text-6xl md:text-8xl text-cream leading-[0.9]">
          Built for <span className="font-serif-i text-gradient-gold">everyone</span> who serves.
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it) => (
          <article
            key={it.num}
            className="relative overflow-hidden p-8 rounded-2xl bg-card border border-border hover:border-gold/40 hover:-translate-y-1 transition-all group min-h-[260px]"
          >
            <span className="absolute -bottom-8 -right-4 font-display text-[12rem] text-gold/5 leading-none group-hover:text-gold/10 transition-colors">
              {it.num}
            </span>
            <div className="relative">
              <h3 className="font-display text-4xl text-cream tracking-wide">{it.name}</h3>
              <p className="text-sm text-cream/60 mt-4 leading-relaxed">{it.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Science() {
  const stats = [
    { v: "25+", l: "Min hot soup stable", s: "without softening" },
    { v: "45+", l: "Min ice cream stable", s: "no melting through" },
    { v: "3-5", l: "Days to decompose", s: "in open soil" },
    { v: "6", l: "Months shelf life", s: "sealed pouch" },
    { v: "0", l: "BPA / plastic", s: "ever, period" },
    { v: "100%", l: "Edible & vegan", s: "kosher available" },
  ];
  return (
    <section id="science" className="relative py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">09 — The Hard Science</p>
          <h2 className="font-display text-6xl md:text-8xl text-cream leading-[0.9]">
            Engineered to <span className="font-serif-i text-gradient-gold">last.</span>
            <br />Then disappear.
          </h2>
        </div>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {stats.map((s) => (
          <div key={s.l} className="bg-card p-8 md:p-10 hover:bg-forest-mid transition-colors group">
            <p className="font-display text-6xl md:text-7xl text-gradient-gold leading-none">{s.v}</p>
            <p className="text-cream text-sm mt-4 uppercase tracking-[0.15em] font-medium">{s.l}</p>
            <p className="text-muted-foreground text-xs mt-1">{s.s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Comparison() {
  const rows = [
    ["Taste", "Neutral / Flavored", "—", "Bitter", "Sour"],
    ["Healthy", "Yes — food", "Yes (chemicals?)", "Splinters", "PFAS lining"],
    ["Hot Stable", "25+ min", "1-2 min", "Soggy fast", "4 min"],
    ["Compost Time", "3-5 days", "100+ years", "6+ months", "2-6 weeks"],
    ["Cost / Use", "$$", "$", "$$", "$$"],
    ["You can eat it", "✓", "✗", "✗", "✗"],
  ];
  return (
    <section className="relative py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <header className="text-center mb-12">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">10 — Comparison</p>
        <h2 className="font-display text-6xl md:text-8xl text-cream leading-[0.9]">
          Krum vs. <span className="font-serif-i text-gradient-gold">everyone.</span>
        </h2>
      </header>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-left min-w-[640px]">
          <thead>
            <tr className="border-b border-border bg-forest/40">
              <th className="px-6 py-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Metric</th>
              <th className="px-6 py-5 text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Krum</th>
              <th className="px-6 py-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Plastic</th>
              <th className="px-6 py-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Wood</th>
              <th className="px-6 py-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Paper</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-border last:border-0 hover:bg-forest/20 transition-colors">
                <td className="px-6 py-5 text-cream text-sm font-medium">{r[0]}</td>
                <td className="px-6 py-5 text-gold text-sm font-medium bg-gold/5">{r[1]}</td>
                <td className="px-6 py-5 text-cream/60 text-sm">{r[2]}</td>
                <td className="px-6 py-5 text-cream/60 text-sm">{r[3]}</td>
                <td className="px-6 py-5 text-cream/60 text-sm">{r[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="relative py-40 px-6 md:px-10 max-w-7xl mx-auto overflow-hidden">
      <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-display text-[20rem] md:text-[32rem] text-gold/[0.04] leading-none">2030</span>
      </span>
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold">12 — Mission</p>
        <h2 className="font-display text-5xl md:text-8xl text-cream leading-[0.9]">
          Remove <span className="font-serif-i text-gradient-gold">100 million</span> plastic utensils from circulation by 2030.
        </h2>
        <p className="text-cream/70 text-base leading-relaxed max-w-xl mx-auto">
          We're at 4.2 million and counting. Every spoon you eat, every café that
          switches, every event that swaps — counts toward the number that matters.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  const { toast } = useCart();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">13 — Contact</p>
          <h2 className="font-display text-6xl md:text-8xl text-cream leading-[0.9] mb-10">
            Let's <span className="font-serif-i text-gradient-gold">talk.</span>
          </h2>

          <div className="space-y-5 mb-10">
            {[
              { i: Phone, l: "Phone", v: "+91 80 4567 8901" },
              { i: Mail, l: "Email", v: "hello@krum.eco" },
              { i: MapPin, l: "Address", v: "Indiranagar, Bengaluru 560038" },
            ].map((c) => (
              <div key={c.l} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                  <c.i className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{c.l}</p>
                  <p className="text-cream text-base mt-0.5">{c.v}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            {[Instagram, Twitter, Linkedin].map((I, i) => (
              <a
                key={i}
                href="#"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all"
              >
                <I className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast("Message sent — we'll reply in 24h");
            setSubmitted(true);
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setSubmitted(false), 3000);
          }}
          className="glass rounded-2xl p-8 space-y-5"
        >
          <div className="grid grid-cols-2 gap-4">
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
          </div>
          <Select label="I am a..." name="role" options={["Café owner", "Restaurant", "Event planner", "Retailer", "Distributor", "Curious individual"]} />
          <Select label="Units required" name="units" options={["Under 100", "100 - 1,000", "1,000 - 10,000", "10,000+", "Just exploring"]} />
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Message</label>
            <textarea
              name="message"
              rows={4}
              className="w-full bg-input/30 border border-border rounded-lg px-4 py-3 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
              placeholder="Tell us about your use case..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-gradient-to-r from-gold to-tan-light text-forest-deep text-xs uppercase tracking-[0.2em] font-medium hover:shadow-gold transition-all"
          >
            {submitted ? "Sent ✓" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full bg-input/30 border border-border rounded-lg px-4 py-3 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <select
        name={name}
        className="w-full bg-input/30 border border-border rounded-lg px-4 py-3 text-sm text-cream focus:outline-none focus:border-gold transition-colors appearance-none"
      >
        <option value="">Select...</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-card">{o}</option>
        ))}
      </select>
    </div>
  );
}

function Footer() {
  const cols = [
    { h: "Shop", links: ["Spoons", "Cutlery Set", "Cups", "Straws", "Bulk"] },
    { h: "Company", links: ["About", "Mission", "Press", "Careers", "Sustainability"] },
    { h: "Support", links: ["FAQ", "Shipping", "Returns", "Contact", "Wholesale"] },
    { h: "Legal", links: ["Privacy", "Terms", "FSSAI Lic.", "Refund Policy"] },
  ];
  return (
    <footer className="relative border-t border-border bg-forest/30 px-6 md:px-10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 pb-12">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-1">
              <span className="font-display text-3xl text-cream tracking-wider">Kr</span>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-gold mt-3" />
              <span className="font-display text-3xl text-cream tracking-wider">m.</span>
            </div>
            <p className="text-cream/60 text-sm max-w-xs leading-relaxed">
              The spoon you eat. Edible cutlery handcrafted from sorghum and rice.
              Premium, sustainable, certified.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/40 text-[10px] uppercase tracking-[0.2em] text-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> FSSAI Certified · Lic. 10821999
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">{c.h}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-cream/70 text-sm hover:text-gold transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-muted-foreground">© 2026 Krum Foods Pvt Ltd. All rights reserved.</p>
          <p className="text-[11px] text-muted-foreground font-serif-i">Made with grain in Bengaluru.</p>
        </div>
      </div>
    </footer>
  );
}
