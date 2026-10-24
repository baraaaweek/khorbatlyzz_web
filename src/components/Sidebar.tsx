import logoImg from '../assets/logo.png';
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { Icon } from "@/components/Icon";
import { NAV, SITE, waLink } from "@/lib/site";
import { navigate } from "@/lib/router";

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="absolute inset-0 rounded-xl bg-crimson/40 blur-lg" />
        <img src={logoImg} alt="Logo" className="h-11 w-auto object-contain" />
      </div>
      {!compact && (
        <div className="leading-none">
          <div className="display-title text-[22px] tracking-wide text-white">
            {SITE.brand}
          </div>
          <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.3em] text-soft">
            {SITE.brandSub}
          </div>
        </div>
      )}
    </div>
  );
}

function NavLinks({
  active,
  onNavigate,
}: {
  active: string;
  onNavigate?: () => void;
}) {
  return (
    <nav className="flex flex-col gap-1.5">
      {NAV.map((item) => {
        const isActive = active === item.path;
        return (
          <a
            key={item.path}
            href={`#${item.path}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(item.path);
              onNavigate?.();
            }}
            className={cn(
              "group relative flex items-start gap-3.5 overflow-hidden rounded-xl px-3.5 py-3 transition-all duration-300",
              isActive
                ? "bg-gradient-to-r from-crimson/20 via-crimson/5 to-transparent"
                : "hover:bg-white/[0.04]"
            )}
          >
            <span
              className={cn(
                "absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-r bg-crimson transition-all duration-300",
                isActive
                  ? "h-8 shadow-[0_0_12px_rgba(255,30,39,0.9)]"
                  : "group-hover:h-5 group-hover:opacity-60"
              )}
            />
            <span
              className={cn(
                "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300",
                isActive
                  ? "border-crimson/50 bg-crimson/15 text-crimson"
                  : "border-white/10 bg-white/[0.03] text-soft group-hover:border-crimson/40 group-hover:text-white"
              )}
            >
              <Icon name={item.icon} size={16} />
            </span>
            <span className="min-w-0">
              <span
                className={cn(
                  "block text-[13px] font-semibold leading-tight transition-colors duration-300",
                  isActive ? "text-white" : "text-mist group-hover:text-white"
                )}
              >
                {item.label}
              </span>
              <span className="mt-1 block text-[11px] leading-tight text-soft/70">
                {item.note}
              </span>
            </span>
          </a>
        );
      })}
    </nav>
  );
}

function CoachCta() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal p-4">
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-crimson/25 blur-2xl" />
      <div className="relative">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-crimson">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-crimson" />
          </span>
          Coach online
        </div>
        <p className="mt-2.5 text-[13px] leading-snug text-mist">
          Questions about training, food or supplements? Message me directly.
        </p>
        <a
          href={waLink(
            "Hello Coach! I have a question about your coaching and products."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3.5 flex w-full items-center justify-center gap-2 rounded-xl bg-crimson px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-crimson-deep hover:shadow-[0_10px_30px_-8px_rgba(255,30,39,0.9)]"
        >
          <Icon name="whatsapp" size={15} />
          Message the coach
        </a>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2.5 flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-soft transition-all duration-300 hover:border-white/25 hover:text-white"
        >
          <Icon name="instagram" size={15} />
          {SITE.coachHandle}
        </a>
      </div>
    </div>
  );
}

export function Sidebar({ active }: { active: string }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[272px] flex-col border-r border-white/[0.07] bg-gradient-to-b from-charcoal via-obsidian to-obsidian lg:flex">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-crimson/40 to-transparent" />
      <div className="px-6 pb-5 pt-7">
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          className="inline-block"
        >
          <BrandMark />
        </a>
      </div>

      <div className="mx-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

      <div className="flex-1 overflow-y-auto px-4 py-5">
        <p className="px-3.5 pb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-soft/50">
          Navigate
        </p>
        <NavLinks active={active} />
      </div>

      <div className="px-4 pb-6">
        <CoachCta />
        <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-soft/40">
          {SITE.location}
        </p>
      </div>
    </aside>
  );
}

export function MobileHeader({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [active]);

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/[0.07] bg-obsidian/85 px-4 py-3 backdrop-blur-xl lg:hidden">
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <BrandMark />
        </a>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition-colors hover:border-crimson/50 hover:text-crimson"
        >
          <Icon name="menu" size={20} />
        </button>
      </header>

      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-obsidian/80 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 flex w-[86%] max-w-[320px] flex-col border-r border-white/10 bg-charcoal transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
            <BrandMark />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-soft transition-colors hover:border-crimson/50 hover:text-crimson"
            >
              <Icon name="close" size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-5">
            <p className="px-3.5 pb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-soft/50">
              Navigate
            </p>
            <NavLinks active={active} onNavigate={() => setOpen(false)} />
          </div>

          <div className="px-4 pb-6">
            <CoachCta />
          </div>
        </div>
      </div>
    </>
  );
}