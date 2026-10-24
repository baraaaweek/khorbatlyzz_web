import { useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import { Button, Eyebrow, Reveal, Section, SectionHeading } from "@/components/ui";
import { Faq, NoBudgetCta, PageHero } from "@/components/Sections";
import { ProductCard } from "@/components/ProductCard";
import {
  GEAR,
  SHOP_BANNERS,
  SUPPLEMENTS,
  waLink,
  type Product,
} from "@/lib/site";
import { cn } from "@/utils/cn";

const SUPP_CATS: Record<string, string> = {
  whey: "Protein",
  creatine: "Performance",
  preworkout: "Performance",
  multivitamin: "Health",
  omega: "Health",
  bcaa: "Performance",
};

const GEAR_CATS: Record<string, string> = {
  blender: "Kitchen",
  scale: "Tracking",
  shaker: "Kitchen",
  containers: "Kitchen",
  tape: "Tracking",
  spoons: "Kitchen",
};

function FilterBar({
  cats,
  active,
  onChange,
}: {
  cats: string[];
  active: string;
  onChange: (c: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {cats.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            "relative rounded-xl px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.14em] transition-all duration-300",
            active === cat
              ? "bg-crimson text-white shadow-[0_10px_30px_-12px_rgba(255,30,39,0.9)]"
              : "border border-white/10 bg-white/[0.03] text-soft hover:border-crimson/40 hover:text-white"
          )}
        >
          {cat}
          {active === cat && (
            <span className="absolute inset-x-4 -bottom-px h-px bg-white/50" />
          )}
        </button>
      ))}
    </div>
  );
}

function ShopPage({
  variant,
}: {
  variant: "supplements" | "gear";
}) {
  const isSupp = variant === "supplements";
  const banner = isSupp ? SHOP_BANNERS.supplements : SHOP_BANNERS.gear;
  const products = isSupp ? SUPPLEMENTS : GEAR;
  const cats = isSupp ? SUPP_CATS : GEAR_CATS;

  const [active, setActive] = useState("All");

  const categoryList = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => cats[p.id])))],
    [products, cats]
  );

  const filtered =
    active === "All" ? products : products.filter((p) => cats[p.id] === active);

  return (
    <>
      <PageHero
        eyebrow={banner.eyebrow}
        title={banner.title}
        sub={banner.sub}
        bullets={banner.bullets}
      />

      {/* Product grid */}
      <Section id="shop" className="bg-obsidian">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={isSupp ? "The supplement stack" : "The tool kit"}
            title={
              isSupp ? (
                <>
                  Coach-screened
                  <br />
                  <span className="text-crimson">supplements only</span>
                </>
              ) : (
                <>
                  Kitchen &amp; tracking
                  <br />
                  <span className="text-crimson">essentials</span>
                </>
              )
            }
          />
          <Reveal delay={120}>
            <FilterBar cats={categoryList} active={active} onChange={setActive} />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product: Product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-white/[0.08] bg-charcoal/60 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-crimson/15 text-crimson">
                <Icon name="whatsapp" size={22} />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-white">
                  Not sure what you need?
                </p>
                <p className="mt-1 text-[13px] text-soft">
                  Send me your goal and I'll build the exact stack for it — free
                  advice, no upsell.
                </p>
              </div>
            </div>
            <Button
              href={waLink(
                isSupp
                  ? "Hello Coach! I need help choosing the right supplements for my goal."
                  : "Hello Coach! I need help choosing the right nutrition tools."
              )}
              icon="whatsapp"
              iconRight="arrow"
            >
              Ask the coach
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* How ordering works */}
      <Section className="border-t border-white/[0.07] bg-charcoal">
        <SectionHeading
          align="center"
          eyebrow="How ordering works"
          title={
            <>
              Three taps and it's
              <span className="text-crimson"> on its way</span>
            </>
          }
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: "whatsapp" as const,
              step: "Step 01",
              title: "Tap 'Order via WhatsApp'",
              body: "The message is already written for you with the product and the price. Just hit send.",
            },
            {
              icon: "check" as const,
              step: "Step 02",
              title: "Confirm with the coach",
              body: "I check stock, confirm your address and answer any dosing or usage questions on the spot.",
            },
            {
              icon: "truck" as const,
              step: "Step 03",
              title: "Delivery or pickup",
              body: "Nationwide delivery across Lebanon, shipping abroad on request, or same-day pickup in Beirut.",
            },
          ].map((step, i) => (
            <Reveal key={step.step} delay={i * 110}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-obsidian/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-crimson/40">
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-crimson/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-crimson transition-transform duration-500 group-hover:scale-110">
                  <Icon name={step.icon} size={21} />
                </span>
                <p className="relative mt-5 text-[10px] font-extrabold uppercase tracking-[0.22em] text-crimson">
                  {step.step}
                </p>
                <h3 className="relative mt-2 font-display text-lg uppercase tracking-wide text-white">
                  {step.title}
                </h3>
                <p className="relative mt-2.5 text-[13px] leading-relaxed text-soft">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Bundle band */}
      <Section className="border-t border-white/[0.07] bg-obsidian">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-crimson/30 bg-gradient-to-br from-charcoal via-carbon to-obsidian p-8 sm:p-12">
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
          <div className="pointer-events-none absolute -left-16 -bottom-20 h-72 w-72 rounded-full bg-crimson/20 blur-[90px]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <Eyebrow icon="sparkle">Bundle &amp; save</Eyebrow>
              <h2 className="display-title mt-4 text-4xl leading-[0.95] text-white sm:text-5xl">
                {isSupp ? (
                  <>
                    The starter stack
                    <br />
                    <span className="text-crimson">whey + creatine + pre</span>
                  </>
                ) : (
                  <>
                    The nutrition starter kit
                    <br />
                    <span className="text-crimson">scale + shaker + prep set</span>
                  </>
                )}
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-soft">
                {isSupp
                  ? "The three supplements with the strongest evidence in sport. Everything else is optional until these three are automatic."
                  : "Weigh, shake and portion with precision — the exact kit I give every new nutrition client on day one."}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {(isSupp
                  ? ["MK Whey Isolate", "Creatine Monohydrate", "Ignite Pre-Workout"]
                  : [
                      "Digital Food Scale",
                      "Insulated Steel Shaker",
                      "Meal Prep Container Set",
                    ]
                ).map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-mist"
                  >
                    <Icon name="check" size={12} className="text-crimson" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-obsidian/70 p-7 text-center backdrop-blur-xl">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-soft/70">
                Bundle price
              </p>
              <p className="display-title mt-3 text-6xl text-white text-glow-red">
                {isSupp ? "$99" : "$74"}
              </p>
              <p className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-soft">
                Save {isSupp ? "$19" : "$11"} vs. buying separately
              </p>
              <div className="mt-6">
                <Button
                  href={waLink(
                    isSupp
                      ? "Hello Coach! I would like to order: Starter Supplement Stack (Whey + Creatine + Pre-Workout) - $99"
                      : "Hello Coach! I would like to order: Nutrition Starter Kit (Scale + Shaker + Prep Set) - $74"
                  )}
                  icon="whatsapp"
                  iconRight="arrow"
                  size="lg"
                  className="w-full"
                >
                  Order the bundle
                </Button>
              </div>
              <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-soft/50">
                While stock lasts
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-white/[0.07] bg-charcoal">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Ordering questions"
              title={
                <>
                  Everything about
                  <br />
                  <span className="text-crimson">ordering &amp; delivery</span>
                </>
              }
              sub="Message me any time — you'll always get the coach, never a call centre."
            />
            <Reveal delay={160}>
              <div className="mt-8">
                <Button
                  href={waLink("Hello Coach! I have a question about an order.")}
                  icon="whatsapp"
                  size="lg"
                >
                  Message the coach
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <Faq
              items={[
                {
                  q: "How do I place an order?",
                  a: "Tap 'Order via WhatsApp' on any product. A pre-filled message with the product name and price opens in WhatsApp — just send it. I confirm stock, total and delivery within a few hours.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "Cash on delivery inside Lebanon, Whish Money / OMT transfer, and bank transfer for international orders. Everything is confirmed with you directly on WhatsApp before dispatch.",
                },
                {
                  q: "How long does delivery take?",
                  a: "Beirut and Mount Lebanon: 24-48 hours. Rest of Lebanon: 2-3 working days. International shipping is arranged case by case with a quoted rate before you pay.",
                },
                {
                  q: "Are the supplements original?",
                  a: "Yes — every unit is sourced from authorised distributors with batch numbers and, where available, third-party lab certificates. If I wouldn't take it myself, it doesn't go on this page.",
                },
                {
                  q: "Can you help me choose a stack?",
                  a: "Always, and it's free. Send me your goal, budget, training schedule and current supplements, and I'll tell you exactly what to take, how much and when — including what to skip.",
                },
              ]}
            />
          </Reveal>
        </div>
      </Section>

      <NoBudgetCta compact />
    </>
  );
}

export function SupplementsPage() {
  return <ShopPage variant="supplements" />;
}

export function GearPage() {
  return <ShopPage variant="gear" />;
}
