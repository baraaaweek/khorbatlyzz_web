
import logoImg from '../assets/logo.png';
import { Icon } from "@/components/Icon";
import { NAV, SITE, waLink } from "@/lib/site";
import { navigate } from "@/lib/router";
import { cn } from "@/utils/cn";


/* ------------------------------- Marquee -------------------------------- */

const MARQUEE_ITEMS = [
  "FREE RESOURCES AVAILABLE NOW",
  "CLICK HERE TO DOWNLOAD FREE GUIDES & EBOOKS",
];

function MarqueeRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 items-center"
    >
      {Array.from({ length: 3 }).map((_, group) => (
        <div key={group} className="flex shrink-0 items-center">
          {MARQUEE_ITEMS.map((text, i) => (
            <span
              key={`${group}-${i}`}
              className="flex shrink-0 items-center whitespace-nowrap text-[11px] font-extrabold uppercase tracking-[0.22em] text-white sm:text-xs"
            >
              <span className="px-4">🔥 {text} 🔥</span>
              <span className="h-1 w-1 rounded-full bg-white/60" />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function Marquee({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group relative z-30 overflow-hidden bg-gradient-to-r from-crimson-deep via-crimson to-crimson-deep",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.35),transparent_18%,transparent_82%,rgba(0,0,0,0.35))]" />
      <a
        href="#/free-resources"
        onClick={(e) => {
          e.preventDefault();
          navigate("/free-resources");
        }}
        className="relative block py-2.5 transition-colors group-hover:bg-white/5"
        aria-label="Download free guides and e-books"
      >
        <div className="marquee-track flex w-max animate-marquee">
          <MarqueeRow />
          <MarqueeRow hidden />
        </div>
      </a>
    </div>
  );
}

/* -------------------------------- Footer -------------------------------- */

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-charcoal">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-crimson/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
<img src={logoImg} alt="Logo" className="h-11 w-auto object-contain" />
              <div>
                <div className="display-title text-xl text-white">
                  {SITE.brand}
                </div>
                <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-soft">
                  {SITE.brandSub}
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-soft">
              Coach {SITE.coach} builds training, nutrition and mindset systems
              for people who are done guessing. Evidence-based coaching,
              coach-screened supplements, and tools that make consistency easy.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-soft transition-all duration-300 hover:border-crimson/60 hover:text-crimson"
              >
                <Icon name="instagram" size={17} />
              </a>
              <a
                href={waLink("Hello Coach! I'd like to know more.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-soft transition-all duration-300 hover:border-crimson/60 hover:text-crimson"
              >
                <Icon name="whatsapp" size={17} />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-soft transition-all duration-300 hover:border-crimson/60 hover:text-crimson"
              >
                <Icon name="mail" size={17} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.24em] text-white">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.path}>
                  <a
                    href={`#${item.path}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.path);
                    }}
                    className="group flex items-center gap-2 text-sm text-soft transition-colors hover:text-white"
                  >
                    <span className="h-px w-3 bg-crimson/50 transition-all duration-300 group-hover:w-5" />
                    {item.short}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.24em] text-white">
              Coaching
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-soft">
              <li>Starter Consultation — $50</li>
              <li className="flex items-center gap-2">
                Transformation Package
                <span className="rounded-full bg-crimson/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-crimson">
                  Popular
                </span>
              </li>
              <li>Elite VIP 1-on-1 — $1,000</li>
              <li className="pt-2">
                <a
                  href="#/free-resources"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/free-resources");
                  }}
                  className="font-semibold text-crimson transition-colors hover:text-white"
                >
                  Free Resources →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.24em] text-white">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-soft">
              <li>
                <a
                  href={waLink("Hello Coach! I would like to get started.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Icon name="whatsapp" size={16} className="mt-0.5 text-crimson" />
                  <span>
                    {SITE.whatsappDisplay}
                    <span className="mt-0.5 block text-[11px] text-soft/60">
                      WhatsApp — fastest reply
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Icon name="mail" size={16} className="mt-0.5 text-crimson" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="instagram" size={16} className="mt-0.5 text-crimson" />
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {SITE.coachHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] uppercase tracking-[0.18em] text-soft/50">
            © {new Date().getFullYear()} {SITE.brand} · {SITE.coach}. All rights
            reserved.
          </p>
          <p className="text-[11px] uppercase tracking-[0.18em] text-soft/50">
            Train hard · Eat smart · Stay consistent
          </p>
        </div>
      </div>
    </footer>
  );
}
