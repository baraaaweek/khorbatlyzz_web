import { useState } from "react";
import { cn } from "@/utils/cn";
import { Icon, type IconName } from "@/components/Icon";
import { Button, Eyebrow, Reveal } from "@/components/ui";
import { FAQS } from "@/lib/site";

/* ------------------------------- Page hero ------------------------------ */

export function PageHero({
  eyebrow,
  title,
  sub,
  bullets,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  bullets: string[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] bg-charcoal px-5 pb-16 pt-14 sm:px-8 lg:px-12 lg:pb-20 lg:pt-20">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-crimson/15 blur-[90px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-crimson/50 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display-title mt-5 text-[2.6rem] leading-[0.95] text-white sm:text-6xl lg:text-[4.4rem] xl:text-[5.2rem]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-soft sm:text-lg">
            {sub}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <ul className="mt-9 flex flex-wrap gap-3">
            {bullets.map((b) => (
              <li
                key={b}
                className="glass-card flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-mist"
              >
                <Icon name="check" size={13} className="text-crimson" />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- Faq ------------------------------------ */

export function Faq({ items = FAQS }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/[0.07] overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-carbon/80 to-charcoal">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="relative">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-white/[0.02] sm:px-7"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "text-[15px] font-semibold transition-colors duration-300 sm:text-base",
                  isOpen ? "text-white" : "text-mist"
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300",
                  isOpen
                    ? "rotate-180 border-crimson/60 bg-crimson/15 text-crimson"
                    : "border-white/10 text-soft"
                )}
              >
                <Icon name="chevron" size={16} />
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 pr-14 text-sm leading-relaxed text-soft sm:px-7">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------- Trust row ------------------------------ */

export function TrustStrip({ items }: { items: { icon: IconName; label: string; sub: string }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <Reveal key={item.label} delay={i * 90}>
          <div className="group flex h-full items-center gap-4 rounded-2xl border border-white/[0.07] bg-charcoal/70 p-4 transition-all duration-400 hover:border-crimson/30 hover:bg-charcoal">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-crimson transition-transform duration-400 group-hover:scale-110">
              <Icon name={item.icon} size={19} />
            </span>
            <span>
              <span className="block text-[13px] font-bold uppercase tracking-wide text-white">
                {item.label}
              </span>
              <span className="mt-0.5 block text-[11.5px] text-soft">
                {item.sub}
              </span>
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------ CTA banner ------------------------------ */

export function NoBudgetCta({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id="free"
      className={cn(
        "relative overflow-hidden border-y border-white/[0.07] bg-obsidian px-5 sm:px-8 lg:px-12",
        compact ? "py-16" : "py-20 lg:py-24"
      )}
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-crimson/12 blur-[110px]" />

      <div className="relative mx-auto w-full max-w-5xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.22em] text-crimson">
            <Icon name="sparkle" size={13} />
            Zero cost · Zero catch
          </span>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="display-title mt-6 text-4xl leading-[0.95] text-white sm:text-5xl lg:text-[4.2rem]">
            Don't have a budget
            <br />
            right now?{" "}
            <span className="text-crimson text-glow-red">We've got you.</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-soft sm:text-lg">
            Access 100% free guides, e-books & training worksheets — the same
            frameworks my paying clients use, packed into downloadable PDFs.
          </p>
        </Reveal>

        <Reveal delay={230}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              to="/free-resources"
              size="lg"
              icon="download"
              iconRight="arrow"
            >
              Get the free resources
            </Button>
            <Button to="/supplements" size="lg" variant="outline" icon="pill">
              Browse supplements
            </Button>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-7 text-[11px] uppercase tracking-[0.2em] text-soft/50">
            No email traps · No card required · Instant download
          </p>
        </Reveal>
      </div>
    </section>
  );
}
