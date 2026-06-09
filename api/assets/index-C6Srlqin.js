import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { h as heroOutlet } from "./router-BU1Ldd6u.js";
import { useState } from "react";
import "@tanstack/react-query";
import "@tanstack/react-router";
const burger = "/assets/burger-DRuMVW9a.jpg";
const fries = "/assets/fries-Cg4th-He.jpg";
const shake = "/assets/shake-jOYB4zWL.jpg";
const combo = "/assets/combo-jd0YQLA_.jpg";
const interior1 = "/assets/interior-1-D2Nv3Df6.jpg";
const interior2 = "/assets/interior-2-CI2XCzAA.jpg";
const interior3 = "/assets/interior-3-CMTd8Nz4.jpg";
const moods = [
  {
    emoji: "🍔",
    title: "Hungry",
    tag: "Mains",
    items: [
      "Classic Chicken Burger",
      "Crispy Veg Burger",
      "Double Patty Special",
      "Spicy Tandoori Wrap"
    ]
  },
  {
    emoji: "🍟",
    title: "Snack Attack",
    tag: "Sides",
    items: ["Loaded Cheese Fries", "Peri-Peri Fries", "Chicken Nuggets", "Onion Rings"]
  },
  {
    emoji: "🥤",
    title: "Something Sweet",
    tag: "Shakes",
    items: ["Oreo Thickshake", "KitKat Crush", "Strawberry Cream", "Cold Coffee"]
  },
  {
    emoji: "🌯",
    title: "Full Meal",
    tag: "Combos",
    items: ["Burger + Fries + Coke", "Wrap Combo", "Chicken Feast", "Late Night Box"]
  }
];
function MoodPicker() {
  const [active, setActive] = useState(0);
  const m = moods[active];
  return /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_1.3fr] gap-6", children: [
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: moods.map((mood, i) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setActive(i),
        className: `group relative aspect-square p-5 rounded-2xl border text-left transition-all ${active === i ? "bg-yellow text-ink border-yellow" : "bg-card border-border hover:border-yellow/50"}`,
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-5xl md:text-6xl block", children: mood.emoji }),
          /* @__PURE__ */ jsx("span", { className: "absolute bottom-4 left-4 right-4 font-display uppercase text-2xl md:text-3xl", children: mood.title })
        ]
      },
      mood.title
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-card border border-border p-8 md:p-10 flex flex-col", children: [
      /* @__PURE__ */ jsxs("p", { className: "font-mono text-xs uppercase tracking-widest text-yellow", children: [
        m.tag,
        " / ",
        m.title
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-display text-3xl md:text-5xl mt-2 mb-6", children: "You'd vibe with these." }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8 flex-1", children: m.items.map((item, i) => /* @__PURE__ */ jsxs(
        "li",
        {
          className: "flex items-baseline gap-4 text-lg md:text-xl border-b border-border pb-3",
          children: [
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs text-muted-foreground", children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ jsx("span", { className: "flex-1", children: item }),
            /* @__PURE__ */ jsx("span", { className: "text-yellow font-mono text-sm", children: "→" })
          ]
        },
        item
      )) }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.zomato.com/",
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex items-center justify-center bg-yellow text-ink font-display uppercase text-lg px-6 py-3 rounded-full hover:scale-[1.02] transition-transform self-start",
          children: "Order this mood →"
        }
      )
    ] })
  ] });
}
const cravings = [
  { emoji: "🍔", label: "Burger", url: "https://www.zomato.com/" },
  { emoji: "🍟", label: "Fries", url: "https://www.zomato.com/" },
  { emoji: "🥤", label: "Shake", url: "https://www.zomato.com/" },
  { emoji: "🌯", label: "Wrap", url: "https://www.zomato.com/" }
];
function HungryButton() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setOpen(true),
        className: "fixed bottom-5 right-5 z-50 group bg-yellow text-ink font-display uppercase tracking-tight text-lg md:text-xl px-5 py-4 rounded-full yellow-glow hover:scale-105 active:scale-95 transition-transform animate-flicker",
        "aria-label": "I'm hungry",
        children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "🔥" }),
          " I'm Hungry"
        ] })
      }
    ),
    open && /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => setOpen(false),
        className: "fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in",
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            onClick: (e) => e.stopPropagation(),
            className: "w-full max-w-lg bg-card border border-border rounded-2xl p-8 md:p-10",
            children: [
              /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-yellow mb-3", children: "Quick order" }),
              /* @__PURE__ */ jsxs("h3", { className: "text-display text-4xl md:text-5xl mb-8", children: [
                "What are you ",
                /* @__PURE__ */ jsx("span", { className: "text-yellow", children: "craving?" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: cravings.map((c) => /* @__PURE__ */ jsxs(
                "a",
                {
                  href: c.url,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "group flex flex-col items-center gap-2 p-6 rounded-xl bg-secondary hover:bg-yellow hover:text-ink transition-colors",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-5xl group-hover:scale-110 transition-transform", children: c.emoji }),
                    /* @__PURE__ */ jsx("span", { className: "font-display text-xl uppercase", children: c.label })
                  ]
                },
                c.label
              )) }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setOpen(false),
                  className: "mt-6 w-full text-muted-foreground text-sm hover:text-foreground",
                  children: "Close"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
const ZOMATO = "https://www.zomato.com/";
const menu = [{
  name: "Chicken Burger",
  img: burger,
  price: "₹149",
  tag: "Best Seller"
}, {
  name: "Loaded Fries",
  img: fries,
  price: "₹129",
  tag: "Cheesy"
}, {
  name: "Oreo Shake",
  img: shake,
  price: "₹119",
  tag: "Cold AF"
}, {
  name: "Combo Meal",
  img: combo,
  price: "₹249",
  tag: "Value"
}];
const reactions = [{
  quote: "Best burger in Malviya Nagar. Period.",
  who: "@aakanksha_eats",
  role: "Foodie"
}, {
  quote: "Came at 1AM. They were still serving hot.",
  who: "@dilli_belly",
  role: "Regular"
}, {
  quote: "₹149 for THIS chicken burger? Insane.",
  who: "@thatdudewhoeats",
  role: "Reviewer"
}, {
  quote: "Oreo shake hits different at midnight.",
  who: "@karan_munches",
  role: "Student"
}, {
  quote: "Order kiya, 20 min mein doorbell.",
  who: "@south_delhi_eats",
  role: "Saket"
}, {
  quote: "My weekly therapy session.",
  who: "@niharika.k",
  role: "Hauz Khas"
}];
const areas = ["Malviya Nagar", "Saket", "Hauz Khas", "GK I & II", "Khirki", "Panchsheel", "Shivalik", "Soami Nagar"];
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(MarqueeStrip, {}),
    /* @__PURE__ */ jsx(MoodSection, {}),
    /* @__PURE__ */ jsx(Reactions, {}),
    /* @__PURE__ */ jsx(WhyComeBack, {}),
    /* @__PURE__ */ jsx(Menu, {}),
    /* @__PURE__ */ jsx(Inside, {}),
    /* @__PURE__ */ jsx(Coverage, {}),
    /* @__PURE__ */ jsx(Instagram, {}),
    /* @__PURE__ */ jsx(FinalCTA, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(HungryButton, {})
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsx("header", { className: "fixed top-0 inset-x-0 z-40 px-4 md:px-8 py-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-5 py-3", children: [
    /* @__PURE__ */ jsxs("a", { href: "#top", className: "font-display text-2xl tracking-tight", children: [
      "PIX ",
      /* @__PURE__ */ jsx("span", { className: "text-yellow", children: "EAT" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground", children: [
      /* @__PURE__ */ jsx("a", { href: "#menu", className: "hover:text-foreground transition", children: "Menu" }),
      /* @__PURE__ */ jsx("a", { href: "#mood", className: "hover:text-foreground transition", children: "Mood" }),
      /* @__PURE__ */ jsx("a", { href: "#inside", className: "hover:text-foreground transition", children: "Inside" }),
      /* @__PURE__ */ jsx("a", { href: "#coverage", className: "hover:text-foreground transition", children: "Delivery" })
    ] }),
    /* @__PURE__ */ jsx("a", { href: ZOMATO, target: "_blank", rel: "noreferrer", className: "bg-yellow text-ink font-semibold text-sm px-4 py-2 rounded-full hover:scale-105 transition", children: "Order" })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative h-[100svh] min-h-[640px] w-full overflow-hidden", children: [
    /* @__PURE__ */ jsx("img", { src: heroOutlet, alt: "PIX EAT outlet at night in Malviya Nagar", width: 1920, height: 1080, className: "absolute inset-0 w-full h-full object-cover animate-slow-zoom" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 left-1/2 -translate-x-1/2 w-[40vw] h-[40vw] rounded-full bg-yellow/20 blur-[120px] animate-flicker" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 h-full flex flex-col justify-end px-4 md:px-10 pb-20 md:pb-28 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-yellow mb-4 md:mb-6", children: "Malviya Nagar · Open till 2AM" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-display text-[14vw] md:text-[8vw] leading-[0.85] max-w-5xl", children: [
        "Delhi's late ",
        /* @__PURE__ */ jsx("br", {}),
        "night ",
        /* @__PURE__ */ jsx("span", { className: "text-yellow", children: "craving" }),
        " spot"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg md:text-2xl text-muted-foreground font-mono", children: "Burgers · Wraps · Fries · Shakes" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsx("a", { href: ZOMATO, target: "_blank", rel: "noreferrer", className: "bg-yellow text-ink font-display uppercase text-lg md:text-xl px-7 py-4 rounded-full hover:scale-[1.03] transition yellow-glow", children: "Order on Zomato →" }),
        /* @__PURE__ */ jsx("a", { href: "#menu", className: "border border-white/20 text-foreground font-display uppercase text-lg md:text-xl px-7 py-4 rounded-full hover:bg-white/5 transition", children: "View Menu" })
      ] })
    ] })
  ] });
}
function MarqueeStrip() {
  const items = ["FRESH", "FAST", "AFFORDABLE", "OPEN LATE", "MADE TO ORDER", "DELHI'S OWN"];
  return /* @__PURE__ */ jsx("div", { className: "border-y border-border bg-yellow text-ink py-4 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex gap-12 whitespace-nowrap animate-marquee font-display uppercase text-2xl md:text-4xl", children: [...items, ...items, ...items].map((t, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-12", children: [
    t,
    " ",
    /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "★" })
  ] }, i)) }) });
}
function MoodSection() {
  return /* @__PURE__ */ jsxs("section", { id: "mood", className: "py-24 md:py-32 px-4 md:px-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 md:mb-16 flex flex-wrap items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-yellow mb-3", children: "Section 02 · Pick a vibe" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-display text-5xl md:text-7xl max-w-2xl", children: [
          "What's your ",
          /* @__PURE__ */ jsx("span", { className: "text-yellow", children: "mood?" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-sm", children: "Skip the menu scroll. Tell us how hungry you are, we'll show you what hits." })
    ] }),
    /* @__PURE__ */ jsx(MoodPicker, {})
  ] });
}
function Reactions() {
  return /* @__PURE__ */ jsxs("section", { className: "py-24 md:py-32 border-y border-border bg-secondary/30", children: [
    /* @__PURE__ */ jsxs("div", { className: "px-4 md:px-10 max-w-7xl mx-auto mb-12", children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-yellow mb-3", children: "Section 03 · The crowd" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-display text-5xl md:text-7xl", children: [
        "Real people. ",
        /* @__PURE__ */ jsx("br", {}),
        " Real ",
        /* @__PURE__ */ jsx("span", { className: "text-yellow", children: "cravings." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex gap-5 px-4 md:px-10 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide", children: reactions.map((r, i) => /* @__PURE__ */ jsxs("article", { className: "snap-start shrink-0 w-[85vw] md:w-[420px] aspect-[3/4] rounded-2xl bg-card border border-border p-7 flex flex-col justify-between hover:border-yellow/50 transition", children: [
      /* @__PURE__ */ jsx("span", { className: "text-yellow text-6xl font-display leading-none", children: '"' }),
      /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-display uppercase leading-tight", children: r.quote }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-6 border-t border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: r.who }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: r.role })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "text-yellow font-mono text-xs", children: [
          "0",
          i + 1,
          " / 0",
          reactions.length
        ] })
      ] })
    ] }, i)) }) })
  ] });
}
function WhyComeBack() {
  const rows = [{
    big: "Made Fresh",
    sub: "Not reheated. Every order goes on the grill the moment it comes in."
  }, {
    big: "Served Hot",
    sub: "No heat lamps. No sitting around. From pan to packet to you."
  }, {
    big: "Open Late",
    sub: "Till 2AM, every night. When the cravings actually hit."
  }];
  return /* @__PURE__ */ jsxs("section", { className: "py-24 md:py-32 px-4 md:px-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-yellow mb-3", children: "Section 04 · Why they're back" }),
    /* @__PURE__ */ jsxs("h2", { className: "text-display text-5xl md:text-7xl mb-16", children: [
      "Why people ",
      /* @__PURE__ */ jsx("br", {}),
      " keep coming back."
    ] }),
    /* @__PURE__ */ jsx("div", { className: "divide-y divide-border border-y border-border", children: rows.map((r, i) => /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-[1fr_1fr] gap-6 py-10 md:py-16 items-center group", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-6", children: [
        /* @__PURE__ */ jsxs("span", { className: "font-mono text-sm text-muted-foreground", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-display text-6xl md:text-[8rem] leading-[0.85] group-hover:text-yellow transition-colors", children: r.big })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-md md:justify-self-end", children: r.sub })
    ] }, r.big)) })
  ] });
}
function Menu() {
  return /* @__PURE__ */ jsxs("section", { id: "menu", className: "py-24 md:py-32 px-4 md:px-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-yellow mb-3", children: "Section 05 · The hits" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-display text-5xl md:text-7xl", children: [
          "Signature ",
          /* @__PURE__ */ jsx("span", { className: "text-yellow", children: "menu." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("a", { href: ZOMATO, target: "_blank", rel: "noreferrer", className: "font-mono text-sm uppercase tracking-widest hover:text-yellow", children: "Full menu on Zomato →" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: menu.map((item) => /* @__PURE__ */ jsxs("article", { className: "group rounded-2xl bg-card border border-border overflow-hidden flex flex-col hover:border-yellow transition", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-square overflow-hidden bg-black", children: /* @__PURE__ */ jsx("img", { src: item.img, alt: item.name, loading: "lazy", width: 1024, height: 1024, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-yellow", children: item.tag }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between gap-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-display text-2xl", children: item.name }),
          /* @__PURE__ */ jsx("span", { className: "font-mono text-lg", children: item.price })
        ] }),
        /* @__PURE__ */ jsx("a", { href: ZOMATO, target: "_blank", rel: "noreferrer", className: "mt-2 text-center bg-yellow text-ink font-semibold py-2.5 rounded-full hover:scale-[1.02] transition", children: "Add to order" })
      ] })
    ] }, item.name)) })
  ] });
}
function Inside() {
  return /* @__PURE__ */ jsxs("section", { id: "inside", className: "py-24 md:py-32 border-t border-border", children: [
    /* @__PURE__ */ jsxs("div", { className: "px-4 md:px-10 max-w-7xl mx-auto mb-12", children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-yellow mb-3", children: "Section 06 · The spot" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-display text-5xl md:text-7xl", children: [
        "Inside ",
        /* @__PURE__ */ jsx("span", { className: "text-yellow", children: "PIX EAT." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "px-4 md:px-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-4", children: [interior1, interior2, interior3].map((src, i) => /* @__PURE__ */ jsxs("div", { className: `relative rounded-2xl overflow-hidden ${i === 1 ? "md:translate-y-10" : ""}`, children: [
      /* @__PURE__ */ jsx("img", { src, alt: `PIX EAT outlet ${i + 1}`, loading: "lazy", width: 1280, height: 960, className: "w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 font-mono text-xs uppercase tracking-widest bg-ink/70 backdrop-blur px-3 py-1.5 rounded-full", children: ["The counter", "On the grill", "Outside, 12AM"][i] })
    ] }, i)) })
  ] });
}
function Coverage() {
  return /* @__PURE__ */ jsxs("section", { id: "coverage", className: "py-24 md:py-32 px-4 md:px-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-yellow mb-3", children: "Section 07 · Delivery" }),
    /* @__PURE__ */ jsxs("h2", { className: "text-display text-5xl md:text-7xl mb-12", children: [
      "Hot food ",
      /* @__PURE__ */ jsx("br", {}),
      " delivered ",
      /* @__PURE__ */ jsx("span", { className: "text-yellow", children: "fast." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1.3fr_1fr] gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "relative rounded-2xl bg-card border border-border aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 600 450", className: "absolute inset-0 w-full h-full", preserveAspectRatio: "xMidYMid slice", children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsx("pattern", { id: "grid", width: "40", height: "40", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsx("path", { d: "M40 0H0V40", fill: "none", stroke: "oklch(1 0 0 / 0.06)", strokeWidth: "1" }) }),
          /* @__PURE__ */ jsxs("radialGradient", { id: "glow", cx: "50%", cy: "50%", r: "50%", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.82 0.18 85 / 0.6)" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.82 0.18 85 / 0)" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("rect", { width: "600", height: "450", fill: "url(#grid)" }),
        /* @__PURE__ */ jsx("path", { d: "M0 230 L600 200", stroke: "oklch(1 0 0 / 0.12)", strokeWidth: "2" }),
        /* @__PURE__ */ jsx("path", { d: "M280 0 L320 450", stroke: "oklch(1 0 0 / 0.12)", strokeWidth: "2" }),
        /* @__PURE__ */ jsx("path", { d: "M0 100 Q300 180 600 80", stroke: "oklch(1 0 0 / 0.08)", strokeWidth: "1.5", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M0 350 Q300 280 600 380", stroke: "oklch(1 0 0 / 0.08)", strokeWidth: "1.5", fill: "none" }),
        /* @__PURE__ */ jsx("circle", { cx: "300", cy: "225", r: "200", fill: "url(#glow)" }),
        /* @__PURE__ */ jsx("circle", { cx: "300", cy: "225", r: "200", fill: "none", stroke: "oklch(0.82 0.18 85 / 0.5)", strokeDasharray: "6 6" }),
        /* @__PURE__ */ jsxs("g", { children: [
          /* @__PURE__ */ jsx("circle", { cx: "300", cy: "225", r: "14", fill: "oklch(0.82 0.18 85)" }),
          /* @__PURE__ */ jsxs("circle", { cx: "300", cy: "225", r: "14", fill: "none", stroke: "oklch(0.82 0.18 85)", strokeWidth: "2", children: [
            /* @__PURE__ */ jsx("animate", { attributeName: "r", from: "14", to: "60", dur: "2.5s", repeatCount: "indefinite" }),
            /* @__PURE__ */ jsx("animate", { attributeName: "opacity", from: "0.8", to: "0", dur: "2.5s", repeatCount: "indefinite" })
          ] }),
          /* @__PURE__ */ jsx("text", { x: "320", y: "222", fill: "white", fontFamily: "ui-monospace, monospace", fontSize: "11", fontWeight: "700", children: "PIX EAT · Malviya Nagar" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border p-8 flex flex-col", children: [
        /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4", children: "We deliver to" }),
        /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-2 gap-x-4 gap-y-3 flex-1", children: areas.map((a) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-lg font-display uppercase", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-yellow" }),
          " ",
          a
        ] }, a)) }),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 text-sm text-muted-foreground", children: [
          "Average delivery: ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground font-semibold", children: "22 min" }),
          " within 4 km."
        ] })
      ] })
    ] })
  ] });
}
function Instagram() {
  const tiles = [interior3, burger, interior1, fries, shake, interior2, combo, heroOutlet];
  return /* @__PURE__ */ jsxs("section", { className: "py-24 md:py-32 border-y border-border bg-secondary/30", children: [
    /* @__PURE__ */ jsxs("div", { className: "px-4 md:px-10 max-w-7xl mx-auto mb-10 flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-yellow mb-3", children: "Section 08 · The feed" }),
        /* @__PURE__ */ jsx("h2", { className: "text-display text-5xl md:text-7xl", children: "@pixeat" })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "https://instagram.com", target: "_blank", rel: "noreferrer", className: "font-mono text-sm uppercase tracking-widest hover:text-yellow", children: "Follow on Instagram →" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "px-4 md:px-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3", children: tiles.map((src, i) => /* @__PURE__ */ jsxs("a", { href: "https://instagram.com", target: "_blank", rel: "noreferrer", className: "aspect-square overflow-hidden rounded-lg group relative", children: [
      /* @__PURE__ */ jsx("img", { src, alt: "PIX EAT instagram", loading: "lazy", className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition flex items-center justify-center text-yellow opacity-0 group-hover:opacity-100", children: "❤" })
    ] }, i)) })
  ] });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-[90svh] flex flex-col items-center justify-center text-center px-4 py-24 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.82_0.18_85/0.25),transparent_60%)]" }),
    /* @__PURE__ */ jsx("p", { className: "relative font-mono text-xs uppercase tracking-[0.4em] text-yellow mb-8", children: "Section 09 · No more scrolling" }),
    /* @__PURE__ */ jsxs("h2", { className: "relative text-display text-yellow leading-[0.85] text-[18vw] md:text-[14vw]", children: [
      "PIX ",
      /* @__PURE__ */ jsx("br", {}),
      " EAT"
    ] }),
    /* @__PURE__ */ jsx("p", { className: "relative mt-8 text-display uppercase text-3xl md:text-5xl max-w-3xl", children: "Hunger won't wait." }),
    /* @__PURE__ */ jsx("a", { href: ZOMATO, target: "_blank", rel: "noreferrer", className: "relative mt-10 bg-yellow text-ink font-display uppercase text-xl md:text-2xl px-10 py-5 rounded-full hover:scale-[1.03] transition yellow-glow", children: "Order on Zomato" })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "border-t border-border px-4 md:px-10 py-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-6 items-center text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsxs("p", { className: "font-display text-xl text-foreground", children: [
      "PIX ",
      /* @__PURE__ */ jsx("span", { className: "text-yellow", children: "EAT" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "md:text-center", children: "Malviya Nagar, New Delhi · Open till 2AM" }),
    /* @__PURE__ */ jsx("p", { className: "md:text-right font-mono text-xs uppercase tracking-widest", children: "© 2026 · Delhi after dark" })
  ] });
}
export {
  Index as component
};
