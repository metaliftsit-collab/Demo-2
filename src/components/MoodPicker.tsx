import { useState } from "react";

const moods = [
  {
    emoji: "🍔",
    title: "Hungry",
    tag: "Mains",
    items: [
      "Classic Chicken Burger",
      "Crispy Veg Burger",
      "Double Patty Special",
      "Spicy Tandoori Wrap",
    ],
  },
  {
    emoji: "🍟",
    title: "Snack Attack",
    tag: "Sides",
    items: ["Loaded Cheese Fries", "Peri-Peri Fries", "Chicken Nuggets", "Onion Rings"],
  },
  {
    emoji: "🥤",
    title: "Something Sweet",
    tag: "Shakes",
    items: ["Oreo Thickshake", "KitKat Crush", "Strawberry Cream", "Cold Coffee"],
  },
  {
    emoji: "🌯",
    title: "Full Meal",
    tag: "Combos",
    items: ["Burger + Fries + Coke", "Wrap Combo", "Chicken Feast", "Late Night Box"],
  },
];

export function MoodPicker() {
  const [active, setActive] = useState(0);
  const m = moods[active];

  return (
    <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6">
      <div className="grid grid-cols-2 gap-3">
        {moods.map((mood, i) => (
          <button
            key={mood.title}
            onClick={() => setActive(i)}
            className={`group relative aspect-square p-5 rounded-2xl border text-left transition-all ${
              active === i
                ? "bg-yellow text-ink border-yellow"
                : "bg-card border-border hover:border-yellow/50"
            }`}
          >
            <span className="text-5xl md:text-6xl block">{mood.emoji}</span>
            <span className="absolute bottom-4 left-4 right-4 font-display uppercase text-2xl md:text-3xl">
              {mood.title}
            </span>
          </button>
        ))}
      </div>

      <div className="rounded-2xl bg-card border border-border p-8 md:p-10 flex flex-col">
        <p className="font-mono text-xs uppercase tracking-widest text-yellow">
          {m.tag} / {m.title}
        </p>
        <h3 className="text-display text-3xl md:text-5xl mt-2 mb-6">You'd vibe with these.</h3>
        <ul className="space-y-3 mb-8 flex-1">
          {m.items.map((item, i) => (
            <li
              key={item}
              className="flex items-baseline gap-4 text-lg md:text-xl border-b border-border pb-3"
            >
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <span className="flex-1">{item}</span>
              <span className="text-yellow font-mono text-sm">→</span>
            </li>
          ))}
        </ul>
        <a
          href="https://www.zomato.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center bg-yellow text-ink font-display uppercase text-lg px-6 py-3 rounded-full hover:scale-[1.02] transition-transform self-start"
        >
          Order this mood →
        </a>
      </div>
    </div>
  );
}
