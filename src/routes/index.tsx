import { createFileRoute } from "@tanstack/react-router";
import heroOutlet from "@/assets/hero-outlet.jpg";
import burger from "@/assets/burger.jpg";
import fries from "@/assets/fries.jpg";
import shake from "@/assets/shake.jpg";
import combo from "@/assets/combo.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";
import { MoodPicker } from "@/components/MoodPicker";
import { HungryButton } from "@/components/HungryButton";

export const Route = createFileRoute("/")({
  component: Index,
});

const ZOMATO = "https://www.zomato.com/";

const menu = [
  { name: "Chicken Burger", img: burger, price: "₹149", tag: "Best Seller" },
  { name: "Loaded Fries", img: fries, price: "₹129", tag: "Cheesy" },
  { name: "Oreo Shake", img: shake, price: "₹119", tag: "Cold AF" },
  { name: "Combo Meal", img: combo, price: "₹249", tag: "Value" },
];

const reactions = [
  { quote: "Best burger in Malviya Nagar. Period.", who: "@aakanksha_eats", role: "Foodie" },
  { quote: "Came at 1AM. They were still serving hot.", who: "@dilli_belly", role: "Regular" },
  { quote: "₹149 for THIS chicken burger? Insane.", who: "@thatdudewhoeats", role: "Reviewer" },
  { quote: "Oreo shake hits different at midnight.", who: "@karan_munches", role: "Student" },
  { quote: "Order kiya, 20 min mein doorbell.", who: "@south_delhi_eats", role: "Saket" },
  { quote: "My weekly therapy session.", who: "@niharika.k", role: "Hauz Khas" },
];

const areas = [
  "Malviya Nagar",
  "Saket",
  "Hauz Khas",
  "GK I & II",
  "Khirki",
  "Panchsheel",
  "Shivalik",
  "Soami Nagar",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <MarqueeStrip />
      <MoodSection />
      <Reactions />
      <WhyComeBack />
      <Menu />
      <Inside />
      <Coverage />
      <Instagram />
      <FinalCTA />
      <Footer />
      <HungryButton />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-5 py-3">
        <a href="#top" className="font-display text-2xl tracking-tight">
          PIX <span className="text-yellow">EAT</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <a href="#menu" className="hover:text-foreground transition">
            Menu
          </a>
          <a href="#mood" className="hover:text-foreground transition">
            Mood
          </a>
          <a href="#inside" className="hover:text-foreground transition">
            Inside
          </a>
          <a href="#coverage" className="hover:text-foreground transition">
            Delivery
          </a>
        </nav>
        <a
          href={ZOMATO}
          target="_blank"
          rel="noreferrer"
          className="bg-yellow text-ink font-semibold text-sm px-4 py-2 rounded-full hover:scale-105 transition"
        >
          Order
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={heroOutlet}
        alt="PIX EAT outlet at night in Malviya Nagar"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
      />
      {/* glow + smoke vignettes */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40vw] h-[40vw] rounded-full bg-yellow/20 blur-[120px] animate-flicker" />

      <div className="relative z-10 h-full flex flex-col justify-end px-4 md:px-10 pb-20 md:pb-28 max-w-7xl mx-auto">
        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-yellow mb-4 md:mb-6">
          Malviya Nagar · Open till 2AM
        </p>
        <h1 className="text-display text-[14vw] md:text-[8vw] leading-[0.85] max-w-5xl">
          Delhi's late <br />
          night <span className="text-yellow">craving</span> spot
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-muted-foreground font-mono">
          Burgers · Wraps · Fries · Shakes
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={ZOMATO}
            target="_blank"
            rel="noreferrer"
            className="bg-yellow text-ink font-display uppercase text-lg md:text-xl px-7 py-4 rounded-full hover:scale-[1.03] transition yellow-glow"
          >
            Order on Zomato →
          </a>
          <a
            href="#menu"
            className="border border-white/20 text-foreground font-display uppercase text-lg md:text-xl px-7 py-4 rounded-full hover:bg-white/5 transition"
          >
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
}

function MarqueeStrip() {
  const items = ["FRESH", "FAST", "AFFORDABLE", "OPEN LATE", "MADE TO ORDER", "DELHI'S OWN"];
  return (
    <div className="border-y border-border bg-yellow text-ink py-4 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-marquee font-display uppercase text-2xl md:text-4xl">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t} <span className="text-2xl">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function MoodSection() {
  return (
    <section id="mood" className="py-24 md:py-32 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="mb-12 md:mb-16 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-yellow mb-3">
            Section 02 · Pick a vibe
          </p>
          <h2 className="text-display text-5xl md:text-7xl max-w-2xl">
            What's your <span className="text-yellow">mood?</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm">
          Skip the menu scroll. Tell us how hungry you are, we'll show you what hits.
        </p>
      </div>
      <MoodPicker />
    </section>
  );
}

function Reactions() {
  return (
    <section className="py-24 md:py-32 border-y border-border bg-secondary/30">
      <div className="px-4 md:px-10 max-w-7xl mx-auto mb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-yellow mb-3">
          Section 03 · The crowd
        </p>
        <h2 className="text-display text-5xl md:text-7xl">
          Real people. <br /> Real <span className="text-yellow">cravings.</span>
        </h2>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-5 px-4 md:px-10 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {reactions.map((r, i) => (
            <article
              key={i}
              className="snap-start shrink-0 w-[85vw] md:w-[420px] aspect-[3/4] rounded-2xl bg-card border border-border p-7 flex flex-col justify-between hover:border-yellow/50 transition"
            >
              <span className="text-yellow text-6xl font-display leading-none">"</span>
              <p className="text-2xl md:text-3xl font-display uppercase leading-tight">{r.quote}</p>
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div>
                  <p className="font-semibold">{r.who}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
                <span className="text-yellow font-mono text-xs">
                  0{i + 1} / 0{reactions.length}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyComeBack() {
  const rows = [
    {
      big: "Made Fresh",
      sub: "Not reheated. Every order goes on the grill the moment it comes in.",
    },
    { big: "Served Hot", sub: "No heat lamps. No sitting around. From pan to packet to you." },
    { big: "Open Late", sub: "Till 2AM, every night. When the cravings actually hit." },
  ];
  return (
    <section className="py-24 md:py-32 px-4 md:px-10 max-w-7xl mx-auto">
      <p className="font-mono text-xs uppercase tracking-widest text-yellow mb-3">
        Section 04 · Why they're back
      </p>
      <h2 className="text-display text-5xl md:text-7xl mb-16">
        Why people <br /> keep coming back.
      </h2>
      <div className="divide-y divide-border border-y border-border">
        {rows.map((r, i) => (
          <div
            key={r.big}
            className="grid md:grid-cols-[1fr_1fr] gap-6 py-10 md:py-16 items-center group"
          >
            <div className="flex items-baseline gap-6">
              <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
              <h3 className="text-display text-6xl md:text-[8rem] leading-[0.85] group-hover:text-yellow transition-colors">
                {r.big}
              </h3>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md md:justify-self-end">
              {r.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-yellow mb-3">
            Section 05 · The hits
          </p>
          <h2 className="text-display text-5xl md:text-7xl">
            Signature <span className="text-yellow">menu.</span>
          </h2>
        </div>
        <a
          href={ZOMATO}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-sm uppercase tracking-widest hover:text-yellow"
        >
          Full menu on Zomato →
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {menu.map((item) => (
          <article
            key={item.name}
            className="group rounded-2xl bg-card border border-border overflow-hidden flex flex-col hover:border-yellow transition"
          >
            <div className="aspect-square overflow-hidden bg-black">
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-yellow">
                {item.tag}
              </span>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-display text-2xl">{item.name}</h3>
                <span className="font-mono text-lg">{item.price}</span>
              </div>
              <a
                href={ZOMATO}
                target="_blank"
                rel="noreferrer"
                className="mt-2 text-center bg-yellow text-ink font-semibold py-2.5 rounded-full hover:scale-[1.02] transition"
              >
                Add to order
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Inside() {
  return (
    <section id="inside" className="py-24 md:py-32 border-t border-border">
      <div className="px-4 md:px-10 max-w-7xl mx-auto mb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-yellow mb-3">
          Section 06 · The spot
        </p>
        <h2 className="text-display text-5xl md:text-7xl">
          Inside <span className="text-yellow">PIX EAT.</span>
        </h2>
      </div>
      <div className="px-4 md:px-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-4">
        {[interior1, interior2, interior3].map((src, i) => (
          <div
            key={i}
            className={`relative rounded-2xl overflow-hidden ${i === 1 ? "md:translate-y-10" : ""}`}
          >
            <img
              src={src}
              alt={`PIX EAT outlet ${i + 1}`}
              loading="lazy"
              width={1280}
              height={960}
              className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-widest bg-ink/70 backdrop-blur px-3 py-1.5 rounded-full">
              {["The counter", "On the grill", "Outside, 12AM"][i]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section id="coverage" className="py-24 md:py-32 px-4 md:px-10 max-w-7xl mx-auto">
      <p className="font-mono text-xs uppercase tracking-widest text-yellow mb-3">
        Section 07 · Delivery
      </p>
      <h2 className="text-display text-5xl md:text-7xl mb-12">
        Hot food <br /> delivered <span className="text-yellow">fast.</span>
      </h2>
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
        <div className="relative rounded-2xl bg-card border border-border aspect-[4/3] overflow-hidden">
          {/* stylised map */}
          <svg
            viewBox="0 0 600 450"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0V40" fill="none" stroke="oklch(1 0 0 / 0.06)" strokeWidth="1" />
              </pattern>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.82 0.18 85 / 0.6)" />
                <stop offset="100%" stopColor="oklch(0.82 0.18 85 / 0)" />
              </radialGradient>
            </defs>
            <rect width="600" height="450" fill="url(#grid)" />
            {/* roads */}
            <path d="M0 230 L600 200" stroke="oklch(1 0 0 / 0.12)" strokeWidth="2" />
            <path d="M280 0 L320 450" stroke="oklch(1 0 0 / 0.12)" strokeWidth="2" />
            <path
              d="M0 100 Q300 180 600 80"
              stroke="oklch(1 0 0 / 0.08)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M0 350 Q300 280 600 380"
              stroke="oklch(1 0 0 / 0.08)"
              strokeWidth="1.5"
              fill="none"
            />
            {/* coverage halo */}
            <circle cx="300" cy="225" r="200" fill="url(#glow)" />
            <circle
              cx="300"
              cy="225"
              r="200"
              fill="none"
              stroke="oklch(0.82 0.18 85 / 0.5)"
              strokeDasharray="6 6"
            />
            {/* outlet pin */}
            <g>
              <circle cx="300" cy="225" r="14" fill="oklch(0.82 0.18 85)" />
              <circle
                cx="300"
                cy="225"
                r="14"
                fill="none"
                stroke="oklch(0.82 0.18 85)"
                strokeWidth="2"
              >
                <animate attributeName="r" from="14" to="60" dur="2.5s" repeatCount="indefinite" />
                <animate
                  attributeName="opacity"
                  from="0.8"
                  to="0"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <text
                x="320"
                y="222"
                fill="white"
                fontFamily="ui-monospace, monospace"
                fontSize="11"
                fontWeight="700"
              >
                PIX EAT · Malviya Nagar
              </text>
            </g>
          </svg>
        </div>

        <div className="rounded-2xl border border-border p-8 flex flex-col">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            We deliver to
          </p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 flex-1">
            {areas.map((a) => (
              <li key={a} className="flex items-center gap-2 text-lg font-display uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow" /> {a}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Average delivery: <span className="text-foreground font-semibold">22 min</span> within 4
            km.
          </p>
        </div>
      </div>
    </section>
  );
}

function Instagram() {
  const tiles = [interior3, burger, interior1, fries, shake, interior2, combo, heroOutlet];
  return (
    <section className="py-24 md:py-32 border-y border-border bg-secondary/30">
      <div className="px-4 md:px-10 max-w-7xl mx-auto mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-yellow mb-3">
            Section 08 · The feed
          </p>
          <h2 className="text-display text-5xl md:text-7xl">@pixeat</h2>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-sm uppercase tracking-widest hover:text-yellow"
        >
          Follow on Instagram →
        </a>
      </div>
      <div className="px-4 md:px-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
        {tiles.map((src, i) => (
          <a
            key={i}
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="aspect-square overflow-hidden rounded-lg group relative"
          >
            <img
              src={src}
              alt="PIX EAT instagram"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition flex items-center justify-center text-yellow opacity-0 group-hover:opacity-100">
              ❤
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative min-h-[90svh] flex flex-col items-center justify-center text-center px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.82_0.18_85/0.25),transparent_60%)]" />
      <p className="relative font-mono text-xs uppercase tracking-[0.4em] text-yellow mb-8">
        Section 09 · No more scrolling
      </p>
      <h2 className="relative text-display text-yellow leading-[0.85] text-[18vw] md:text-[14vw]">
        PIX <br /> EAT
      </h2>
      <p className="relative mt-8 text-display uppercase text-3xl md:text-5xl max-w-3xl">
        Hunger won't wait.
      </p>
      <a
        href={ZOMATO}
        target="_blank"
        rel="noreferrer"
        className="relative mt-10 bg-yellow text-ink font-display uppercase text-xl md:text-2xl px-10 py-5 rounded-full hover:scale-[1.03] transition yellow-glow"
      >
        Order on Zomato
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-4 md:px-10 py-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-6 items-center text-sm text-muted-foreground">
      <p className="font-display text-xl text-foreground">
        PIX <span className="text-yellow">EAT</span>
      </p>
      <p className="md:text-center">Malviya Nagar, New Delhi · Open till 2AM</p>
      <p className="md:text-right font-mono text-xs uppercase tracking-widest">
        © 2026 · Delhi after dark
      </p>
    </footer>
  );
}
