import { useState } from "react";

const cravings = [
  { emoji: "🍔", label: "Burger", url: "https://www.zomato.com/" },
  { emoji: "🍟", label: "Fries", url: "https://www.zomato.com/" },
  { emoji: "🥤", label: "Shake", url: "https://www.zomato.com/" },
  { emoji: "🌯", label: "Wrap", url: "https://www.zomato.com/" },
];

export function HungryButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 group bg-yellow text-ink font-display uppercase tracking-tight text-lg md:text-xl px-5 py-4 rounded-full yellow-glow hover:scale-105 active:scale-95 transition-transform animate-flicker"
        aria-label="I'm hungry"
      >
        <span className="flex items-center gap-2">
          <span className="text-2xl">🔥</span> I'm Hungry
        </span>
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 md:p-10"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-yellow mb-3">
              Quick order
            </p>
            <h3 className="text-display text-4xl md:text-5xl mb-8">
              What are you <span className="text-yellow">craving?</span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {cravings.map((c) => (
                <a
                  key={c.label}
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-2 p-6 rounded-xl bg-secondary hover:bg-yellow hover:text-ink transition-colors"
                >
                  <span className="text-5xl group-hover:scale-110 transition-transform">
                    {c.emoji}
                  </span>
                  <span className="font-display text-xl uppercase">{c.label}</span>
                </a>
              ))}
            </div>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full text-muted-foreground text-sm hover:text-foreground"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
