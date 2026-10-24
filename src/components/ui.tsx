import {
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/utils/cn";
import { Icon, type IconName } from "@/components/Icon";
import { navigate, scrollToId } from "@/lib/router";

/* ------------------------------- Reveal --------------------------------- */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ------------------------------- Buttons -------------------------------- */

type Variant = "primary" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2.5 font-semibold tracking-wide uppercase transition-all duration-300 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson/70 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-crimson text-white shadow-[0_10px_40px_-12px_rgba(255,30,39,0.9)] hover:bg-crimson-deep hover:shadow-[0_16px_50px_-10px_rgba(255,30,39,1)] hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-white/20 text-white bg-white/[0.03] hover:border-crimson/70 hover:bg-crimson/10 hover:text-white hover:-translate-y-0.5",
  ghost:
    "text-soft hover:text-white border-b border-white/15 hover:border-crimson pb-1",
  light:
    "bg-white text-obsidian hover:bg-mist hover:-translate-y-0.5 shadow-[0_10px_36px_-14px_rgba(255,255,255,0.55)]",
};

const sizes: Record<Size, string> = {
  sm: "text-[11px] px-4 py-2.5 rounded-lg",
  md: "text-xs px-6 py-3.5 rounded-xl",
  lg: "text-sm px-8 py-4 rounded-xl",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconRight?: IconName;
  to?: string;
  href?: string;
  anchor?: string;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  to,
  href,
  anchor,
  className,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <>
      {icon && <Icon name={icon} size={size === "lg" ? 18 : 16} />}
      <span>{children}</span>
      {iconRight && (
        <Icon
          name={iconRight}
          size={size === "lg" ? 18 : 16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  const handleClick = (e: React.MouseEvent) => {
    onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
    if (anchor) {
      e.preventDefault();
      const current = (window.location.hash || "").replace(/^#/, "") || "/";
      if (to && current !== to) {
        navigate(to);
        window.setTimeout(() => scrollToId(anchor), 340);
      } else {
        scrollToId(anchor);
      }
    } else if (to) {
      e.preventDefault();
      navigate(to);
    }
  };

  if (href || to || anchor) {
    return (
      <a
        href={href ?? (to ? `#${to}` : "#")}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        onClick={handleClick}
        className={classes}
      >
        {inner}
      </a>
    );
  }

  return (
    <button className={classes} onClick={handleClick} {...rest}>
      {inner}
    </button>
  );
}

/* ------------------------------ Typography ------------------------------ */

export function Eyebrow({
  children,
  className,
  icon,
}: {
  children: ReactNode;
  className?: string;
  icon?: IconName;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-crimson",
        className
      )}
    >
      {icon ? (
        <Icon name={icon} size={13} />
      ) : (
        <span className="h-[2px] w-6 bg-crimson" />
      )}
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow className={align === "center" ? "justify-center" : ""}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="display-title mt-4 text-4xl text-white sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={140}>
          <p className="mt-5 text-base leading-relaxed text-soft">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

/* -------------------------------- Section ------------------------------- */

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative px-5 py-20 sm:px-8 lg:px-12 lg:py-28", className)}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

/* -------------------------------- Counter ------------------------------- */

export function Counter({
  to,
  suffix = "",
  duration = 1600,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/* --------------------------------- Stars -------------------------------- */

export function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1 text-crimson">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" size={14} />
      ))}
    </div>
  );
}

/* ------------------------------ Check item ------------------------------ */

export function CheckItem({
  children,
  accent = false,
}: {
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <li className="flex items-start gap-3 text-sm leading-relaxed text-mist">
      <span
        className={cn(
          "mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full",
          accent
            ? "bg-crimson text-white shadow-[0_0_14px_rgba(255,30,39,0.55)]"
            : "bg-white/10 text-crimson"
        )}
      >
        <Icon name="check" size={11} strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}
