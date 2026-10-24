
import { Icon } from "@/components/Icon";
import { Button, CheckItem, Counter, Eyebrow, Reveal, Section, SectionHeading, Stars } from "@/components/ui";
import { Faq, NoBudgetCta, TrustStrip } from "@/components/Sections";

import { navigate } from "@/lib/router";
import {
  GEAR,
  PLANS,
  PROCESS,
  SITE,
  STATS,
  SUPPLEMENTS,
  TESTIMONIALS,
  waLink,
} from "@/lib/site";

function enrollMessage(plan: string, price: string) {
  return `Hello Coach! I would like to enroll in the ${plan} plan - ${price}`;
}

/* --------------------------------- HERO --------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-obsidian">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full bg-crimson/10 blur-[130px] animate-pulse-glow" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-obsidian to-transparent" />

      {/* Mobile backdrop */}
    <img
        src="/src/assets/hero.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-top opacity-30 lg:hidden"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/90 to-obsidian/60 lg:hidden" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-10 lg:px-12 lg:pb-28 lg:pt-24">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="glass-card inline-flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-4 text-[10px] font-bold uppercase tracking-[0.2em] text-mist">
              <span className="rounded-full bg-crimson px-2.5 py-1 text-[9px] text-white">
                New
              </span>
              {SITE.coach} · Online & In-Person Coaching
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display-title mt-6 text-[2.9rem] text-white sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5.6rem]">
              Transform
              <br />
              <span className="text-crimson text-glow-red">Physically</span> &amp;
              <br />
              Mentally
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-soft sm:text-lg">
              No generic templates. No guesswork. A coach-built training,
              nutrition and mindset system engineered around your body, your
              schedule and your goals — with accountability that refuses to let
              you quit.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button anchor="plans" size="lg" iconRight="arrow">
                Explore Coaching Plans
              </Button>
              <Button to="/free-resources" size="lg" variant="outline" icon="download">
                Free Resources
              </Button>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/[0.07] pt-7">
              <div>
                <Stars />
                <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-soft">
                  4.9/5 from 300+ clients
                </p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="display-title text-2xl text-white">
                  <Counter to={480} suffix="+" />
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-soft">
                  Bodies transformed
                </p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="display-title text-2xl text-white">
                  <Counter to={12} suffix=" yrs" />
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-soft">
                  In the trenches
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-crimson/12 blur-[70px]" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-charcoal">
              <img
                src="/src/assets/hero.jpg"
                alt={`Coach ${SITE.coach} in a dark gym`}
                className="aspect-[4/5] w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-obsidian/70 via-transparent to-transparent" />

              {/* bottom label */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-obsidian/70 px-4 py-3 backdrop-blur-xl">
                <div>
                  <p className="font-display text-base uppercase tracking-wide text-white">
                    {SITE.coach}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-crimson">
                    Head Coach · {SITE.brand}
                  </p>
                </div>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 text-mist transition-colors hover:border-crimson/60 hover:text-crimson"
                  aria-label="Instagram"
                >
                  <Icon name="instagram" size={16} />
                </a>
              </div>
            </div>

            {/* floating stat card */}
            <div className="absolute -left-4 top-8 hidden w-[168px] rounded-2xl border border-white/10 bg-obsidian/80 p-4 backdrop-blur-xl sm:block animate-float-slow">
              <div className="flex items-center gap-2 text-crimson">
                <Icon name="chart" size={15} />
                <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                  Avg. client result
                </span>
              </div>
              <p className="display-title mt-2 text-3xl text-white">−9.4 kg</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-soft">
                First 12 weeks
              </p>
              <div className="mt-3 flex items-end gap-1">
                {[35, 48, 40, 62, 74, 88].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h * 0.28}px` }}
                    className="w-2 rounded-sm bg-gradient-to-t from-crimson/30 to-crimson"
                  />
                ))}
              </div>
            </div>

            <div
              className="absolute -right-3 bottom-24 hidden w-[150px] rounded-2xl border border-white/10 bg-obsidian/80 p-4 backdrop-blur-xl sm:block animate-float-slow"
              style={{ animationDelay: "1.4s" }}
            >
              <Icon name="shield" size={18} className="text-crimson" />
              <p className="mt-2 text-[12px] font-bold uppercase leading-tight tracking-wide text-white">
                94% goal completion
              </p>
              <p className="mt-1 text-[10px] text-soft">Program adherence</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- STATS --------------------------------- */

function StatsStrip() {
  return (
    <section className="relative border-y border-white/[0.07] bg-charcoal px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90}>
            <div className="group text-center lg:text-left">
              <p className="display-title text-4xl text-white transition-colors duration-300 group-hover:text-crimson sm:text-5xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-soft">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- COACH --------------------------------- */

function AboutCoach() {
  return (
    <Section className="bg-obsidian">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-crimson/10 blur-[60px]" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
              <img
                src="/src/assets/jero.jpg"
                alt={`Coach ${SITE.coach}`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="glass-card rounded-2xl px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-crimson">
                    Certifications
                  </p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-mist">
                    NASM-CPT · Precision Nutrition L2 · Strength &amp;
                    Hypertrophy Specialist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Meet your coach"
            title={
              <>
                I don't sell workouts.
                <br />
                <span className="text-crimson">I build systems.</span>
              </>
            }
            sub="Twelve years of coaching, cutting and bulking — and every mistake in between. My job is to compress a decade of trial and error into a plan you can actually execute on your worst day, not just your best one."
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: "target" as const,
                title: "Assessment first",
                body: "Every plan starts with data, not a template.",
              },
              {
                icon: "chart" as const,
                title: "Weekly adjustments",
                body: "The plan evolves as your body does.",
              },
              {
                icon: "heart" as const,
                title: "Real accountability",
                body: "Check-ins you can't hide from.",
              },
              {
                icon: "shield" as const,
                title: "Evidence over hype",
                body: "Only what the research supports.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="group h-full rounded-2xl border border-white/[0.07] bg-charcoal/60 p-5 transition-all duration-400 hover:-translate-y-1 hover:border-crimson/35">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-crimson transition-transform duration-400 group-hover:scale-110">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-soft">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={waLink("Hello Coach! I'd like to book a consultation.")} icon="whatsapp" size="lg">
                Book a free consult
              </Button>
              <Button href={SITE.instagram} variant="outline" icon="instagram" size="lg">
                Follow the journey
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------- PLANS --------------------------------- */

function PlanCard({ plan, index }: { plan: (typeof PLANS)[number]; index: number }) {
  return (
    <Reveal
      delay={index * 120}
      className={plan.popular ? "lg:-mt-4 lg:pb-4" : ""}
    >
      <article
        className={
          plan.popular
            ? "relative h-full overflow-hidden rounded-[1.6rem] border border-crimson/50 bg-gradient-to-b from-carbon to-charcoal shadow-[0_30px_90px_-40px_rgba(255,30,39,0.8)]"
            : "relative h-full overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-gradient-to-b from-carbon/80 to-charcoal transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20"
        }
      >
        {plan.popular && (
          <>
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-crimson/25 blur-[70px]" />
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl bg-crimson px-5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.24em] text-white shadow-[0_8px_24px_-8px_rgba(255,30,39,1)]">
              Most Popular
            </div>
          </>
        )}

        <div className="relative flex h-full flex-col p-7 sm:p-8">
          <div className="flex items-center justify-between">
            <span
              className={
                plan.popular
                  ? "flex h-12 w-12 items-center justify-center rounded-xl bg-crimson/15 text-crimson"
                  : "flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-crimson"
              }
            >
              <Icon name={plan.icon} size={22} />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-soft/60">
              {plan.cadence}
            </span>
          </div>

          <h3 className="display-title mt-6 text-3xl text-white">{plan.name}</h3>
          <p className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-crimson">
            {plan.tagline}
          </p>

          <div className="mt-6 flex items-end gap-2 border-b border-white/[0.07] pb-6">
            <span
              className={
                plan.popular
                  ? "display-title text-6xl text-white text-glow-red"
                  : "display-title text-6xl text-white"
              }
            >
              {plan.price}
            </span>
            <span className="pb-2 text-[11px] uppercase tracking-[0.14em] text-soft/70">
              USD
            </span>
          </div>

          <ul className="mt-6 flex-1 space-y-3">
            {plan.features.map((f) => (
              <CheckItem key={f} accent={plan.popular}>
                {f}
              </CheckItem>
            ))}
          </ul>

          <div className="mt-8">
            {plan.popular ? (
              <Button
                href={waLink(enrollMessage(plan.name, plan.price))}
                icon="whatsapp"
                iconRight="arrow"
                size="lg"
                className="w-full"
              >
                Enroll Now
              </Button>
            ) : (
              <Button
                href={waLink(enrollMessage(plan.name, plan.price))}
                variant="outline"
                icon="whatsapp"
                size="lg"
                className="w-full"
              >
                Enroll Now
              </Button>
            )}
            <p className="mt-3 text-center text-[10px] uppercase tracking-[0.16em] text-soft/50">
              Secure your spot via WhatsApp
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Plans() {
  return (
    <Section id="plans" className="border-t border-white/[0.07] bg-charcoal">
      <SectionHeading
        align="center"
        eyebrow="Coaching bundles"
        title={
          <>
            Choose your <span className="text-crimson">level of commitment</span>
          </>
        }
        sub="Three ways to work together. Every bundle includes a personalised training program, nutrition targets and direct access to the coach — the difference is depth."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-7">
        {PLANS.map((plan, i) => (
          <PlanCard key={plan.id} plan={plan} index={i} />
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-12">
          <TrustStrip
            items={[
              { icon: "whatsapp", label: "WhatsApp enrolment", sub: "Reply within a few hours" },
              { icon: "truck", label: "Worldwide online", sub: "In-person in Beirut" },
              { icon: "shield", label: "No lock-in contracts", sub: "Cancel any time" },
              { icon: "bolt", label: "Start within 48h", sub: "Onboarding is instant" },
            ]}
          />
        </div>
      </Reveal>
    </Section>
  );
}

/* ------------------------------- PROCESS -------------------------------- */

function Process() {
  return (
    <Section className="bg-obsidian">
      <SectionHeading
        eyebrow="How it works"
        title={
          <>
            Four steps from where you are
            <br />
            to where you <span className="text-crimson">want to be</span>
          </>
        }
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((step, i) => (
          <Reveal key={step.step} delay={i * 110}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-charcoal/60 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-crimson/40">
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-crimson/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center justify-between">
                <span className="display-title text-4xl text-white/10 transition-colors duration-500 group-hover:text-crimson/40">
                  {step.step}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-crimson transition-transform duration-500 group-hover:scale-110">
                  <Icon name={step.icon} size={18} />
                </span>
              </div>
              <h3 className="relative mt-5 font-display text-lg uppercase tracking-wide text-white">
                {step.title}
              </h3>
              <p className="relative mt-2.5 text-[13px] leading-relaxed text-soft">
                {step.body}
              </p>
              {i < PROCESS.length - 1 && (
                <span className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-5 bg-gradient-to-r from-crimson/60 to-transparent lg:block" />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------ SHOP TEASER ----------------------------- */

function ShopTeaser() {
  const panels = [
    {
      eyebrow: "Supplements & Vitamins",
      title: "FUEL",
      items: SUPPLEMENTS.slice(0, 3),
      to: "/supplements",
      icon: "pill" as const,
    },
    {
      eyebrow: "Nutrition Gear & Tools",
      title: "TOOLS",
      items: GEAR.slice(0, 3),
      to: "/nutrition-gear",
      icon: "utensils" as const,
    },
  ];

  return (
    <Section className="border-t border-white/[0.07] bg-charcoal">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Coach-curated shop"
          title={
            <>
              Supplements &amp; tools I actually
              <br />
              <span className="text-crimson">put in front of my clients</span>
            </>
          }
        />
        <Reveal delay={150}>
          <div className="flex flex-wrap gap-3">
            <Button to="/supplements" variant="outline" icon="pill">
              All supplements
            </Button>
            <Button to="/nutrition-gear" variant="outline" icon="utensils">
              All gear
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {panels.map((panel, pi) => (
          <Reveal key={panel.title} delay={pi * 120}>
            <div className="h-full rounded-[1.6rem] border border-white/[0.08] bg-gradient-to-b from-carbon/70 to-obsidian p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Eyebrow icon={panel.icon}>{panel.eyebrow}</Eyebrow>
                  <h3 className="display-title mt-3 text-3xl text-white">
                    {panel.title}
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-soft">
                  Order via WhatsApp
                </span>
              </div>

              <div className="mt-6 space-y-2.5">
                {panel.items.map((p) => (
                  <a
                    key={p.id}
                    href={`#${panel.to}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(panel.to);
                    }}
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-obsidian/60 p-3 transition-all duration-400 hover:border-crimson/40 hover:bg-obsidian"
                  >
                    <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-charcoal">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center text-crimson">
                          <Icon name={p.icon ?? "sparkle"} size={22} />
                        </span>
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[13.5px] font-semibold text-white">
                        {p.name}
                      </span>
                      <span className="block truncate text-[11px] text-soft">
                        {p.size}
                      </span>
                    </span>
                    <span className="font-display text-lg text-white">
                      {p.price}
                    </span>
                    <Icon
                      name="arrow"
                      size={16}
                      className="text-soft transition-all duration-300 group-hover:translate-x-1 group-hover:text-crimson"
                    />
                  </a>
                ))}
              </div>

              <div className="mt-6">
                <Button to={panel.to} variant="light" iconRight="arrow" className="w-full">
                  Shop {panel.eyebrow.toLowerCase()}
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------- TESTIMONIALS ----------------------------- */

function Testimonials() {
  return (
    <Section className="bg-obsidian">
      <SectionHeading
        align="center"
        eyebrow="Client results"
        title={
          <>
            Real people. Real numbers.
            <br />
            <span className="text-crimson">No filters.</span>
          </>
        }
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 100}>
            <figure className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-charcoal/70 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-crimson/35 sm:p-7">
              <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-crimson/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between">
                <Icon name="quote" size={30} className="text-crimson/60" />
                <span className="rounded-full border border-crimson/30 bg-crimson/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-crimson">
                  {t.result}
                </span>
              </div>
              <blockquote className="relative mt-5 text-[14.5px] leading-relaxed text-mist">
                "{t.quote}"
              </blockquote>
              <figcaption className="relative mt-6 flex items-center gap-4 border-t border-white/[0.07] pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-crimson to-crimson-deep font-display text-base text-white">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-bold text-white">
                    {t.name}
                  </span>
                  <span className="block text-[11px] uppercase tracking-[0.14em] text-soft">
                    {t.role}
                  </span>
                </span>
                <span className="ml-auto">
                  <Stars count={t.rating} />
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------- FAQ ---------------------------------- */

/* --------------------------------- FAQ ---------------------------------- */

function FaqSection() {
  return (
    <Section className="border-t border-white/[0.07] bg-charcoal">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Questions"
            title={
              <>
                Everything you
                <br />
                <span className="text-crimson">need to know</span>
              </>
            }
            sub="Still unsure? Send a message — you'll talk to the coach, not a sales team."
          />
          <Reveal delay={180}>
            <div className="mt-8">
              <Button
                href={waLink("Hello Coach! I have a question before starting.")}
                icon="whatsapp"
                size="lg"
              >
                Ask the coach
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <Faq />
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------- PAGE ---------------------------------- */

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <AboutCoach />
      <Plans />
      <Process />
      <ShopTeaser />
      <Testimonials />
      <FaqSection />
      <NoBudgetCta />
    </>
  );
}