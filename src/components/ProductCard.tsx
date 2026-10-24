import { Icon } from "@/components/Icon";
import type { Product } from "@/lib/site";
import { orderMessage, waLink } from "@/lib/site";
import { cn } from "@/utils/cn";

export function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-carbon to-charcoal transition-all duration-500 hover:-translate-y-1.5 hover:border-crimson/40 hover:shadow-[0_28px_70px_-32px_rgba(255,30,39,0.65)]"
      style={{ transitionDelay: `${index * 20}ms` }}
    >
      {/* Media */}
      <div className="relative aspect-square overflow-hidden bg-obsidian">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,30,39,0.22),transparent_60%)]" />
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.09]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 -m-10 rounded-full bg-crimson/20 blur-3xl transition-opacity duration-500 group-hover:bg-crimson/30" />
              <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-steel to-obsidian text-crimson transition-transform duration-500 group-hover:scale-110">
                <Icon name={product.icon ?? "sparkle"} size={46} />
              </div>
            </div>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />

        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-crimson px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_6px_20px_-6px_rgba(255,30,39,0.9)]">
            {product.tag}
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-lg border border-white/10 bg-obsidian/70 px-2.5 py-1 font-display text-base leading-none text-white backdrop-blur-md">
          {product.price}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg uppercase leading-tight tracking-wide text-white">
            {product.name}
          </h3>
        </div>
        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-crimson/90">
          {product.size}
        </p>
        <p className="mt-3 text-[13px] leading-relaxed text-soft">
          {product.benefit}
        </p>

        {product.specs && (
          <ul className="mt-4 space-y-1.5">
            {product.specs.map((spec) => (
              <li
                key={spec}
                className="flex items-center gap-2 text-[11.5px] text-mist/80"
              >
                <Icon name="check" size={12} className="text-crimson" />
                {spec}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-5">
          <a
            href={waLink(orderMessage(product.name, product.price))}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-crimson px-5 py-3.5",
              "text-[11px] font-extrabold uppercase tracking-[0.14em] text-white",
              "transition-all duration-300 hover:bg-crimson-deep hover:shadow-[0_14px_38px_-12px_rgba(255,30,39,1)]"
            )}
          >
            <span className="pointer-events-none absolute inset-y-0 -left-full w-1/3 skew-x-[-20deg] bg-white/25 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
            <Icon name="whatsapp" size={16} />
            Order via WhatsApp
          </a>
          <p className="mt-2.5 text-center text-[10px] uppercase tracking-[0.14em] text-soft/50">
            Pre-filled message · Same-day confirmation
          </p>
        </div>
      </div>
    </article>
  );
}
