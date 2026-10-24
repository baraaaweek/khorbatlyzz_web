import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { Button, Eyebrow, Reveal, Section, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/Sections";
import { POSTS, RESOURCES, SITE, waLink, type Post, type Resource } from "@/lib/site";
import { cn } from "@/utils/cn";

/* ------------------------------ Download -------------------------------- */

function downloadResource(resource: Resource) {
  const line = "=".repeat(58);
  const body = [
    resource.title.toUpperCase(),
    line,
    `${resource.type} · ${resource.pages}`,
    `Coach ${SITE.coach} — ${SITE.brand}`,
    line,
    "",
    resource.blurb,
    "",
    "WHAT'S INSIDE",
    ...resource.contents.map((c) => `  •  ${c}`),
    "",
    "HOW TO USE THIS SHEET",
    "  1. Read it once end to end before you train again.",
    "  2. Pick the parts that apply to your current block only.",
    "  3. Track every session — untracked training is just exercise.",
    "",
    "WANT THE FULL COACHED VERSION?",
    `  WhatsApp ${SITE.whatsappDisplay} — mention this guide for a free 15-min review.`,
    "",
    line,
    "Train hard. Eat smart. Stay consistent.",
  ].join("\n");

  const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = resource.file.replace(/\.pdf$/i, "") + ".txt";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

/* -------------------------------- Modal --------------------------------- */

function Modal({
  open,
  onClose,
  children,
  label,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  label: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-obsidian/85 backdrop-blur-md transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        className={cn(
          "relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/10 bg-charcoal shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] transition-all duration-400 sm:rounded-3xl",
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-8 scale-[0.98] opacity-0"
        )}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-obsidian/70 text-mist backdrop-blur transition-colors hover:border-crimson/60 hover:text-crimson"
        >
          <Icon name="close" size={17} />
        </button>
        {children}
      </div>
    </div>
  );
}

/* ------------------------------ Resources ------------------------------- */

function ResourceCard({
  resource,
  index,
  onPreview,
}: {
  resource: Resource;
  index: number;
  onPreview: (r: Resource) => void;
}) {
  return (
    <Reveal delay={index * 90}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-carbon/80 to-charcoal transition-all duration-500 hover:-translate-y-1.5 hover:border-crimson/40 hover:shadow-[0_28px_70px_-34px_rgba(255,30,39,0.6)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-crimson/12 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex items-start justify-between gap-4 p-6 pb-0">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-obsidian/60 text-crimson transition-transform duration-500 group-hover:scale-110">
            <Icon name={resource.icon} size={22} />
          </span>
          <span className="rounded-full border border-crimson/30 bg-crimson/10 px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.16em] text-crimson">
            {resource.type}
          </span>
        </div>

        <div className="relative flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl uppercase leading-tight tracking-wide text-white">
            {resource.title}
          </h3>
          <p className="mt-1.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-soft/70">
            <Icon name="book" size={12} />
            {resource.pages} · PDF
          </p>
          <p className="mt-3.5 text-[13px] leading-relaxed text-soft">
            {resource.blurb}
          </p>

          <ul className="mt-4 space-y-1.5">
            {resource.contents.slice(0, 3).map((c) => (
              <li key={c} className="flex items-start gap-2 text-[11.5px] text-mist/75">
                <Icon name="check" size={12} className="mt-0.5 text-crimson" />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex gap-2.5 pt-6">
            <button
              onClick={() => downloadResource(resource)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-crimson px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-crimson-deep hover:shadow-[0_14px_36px_-12px_rgba(255,30,39,1)]"
            >
              <Icon name="download" size={15} />
              Download
            </button>
            <button
              onClick={() => onPreview(resource)}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-mist transition-all duration-300 hover:border-crimson/60 hover:text-white"
            >
              Preview
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* -------------------------------- Blog ---------------------------------- */

function FeaturedPost({ post, onRead }: { post: Post; onRead: (p: Post) => void }) {
  return (
    <Reveal>
      <article
        onClick={() => onRead(post)}
        className="group relative grid cursor-pointer overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-charcoal transition-all duration-500 hover:border-crimson/40 lg:grid-cols-2"
      >
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[340px]">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-charcoal/10 lg:to-charcoal" />
          <span className="absolute left-4 top-4 rounded-full bg-crimson px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white">
            Featured
          </span>
        </div>
        <div className="flex flex-col justify-center p-7 sm:p-9">
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em]">
            <span className="text-crimson">{post.category}</span>
            <span className="flex items-center gap-1.5 text-soft/70">
              <Icon name="clock" size={12} />
              {post.read}
            </span>
            <span className="text-soft/50">{post.date}</span>
          </div>
          <h3 className="display-title mt-4 text-3xl leading-[0.95] text-white transition-colors duration-300 group-hover:text-crimson sm:text-4xl">
            {post.title}
          </h3>
          <p className="mt-4 text-[14.5px] leading-relaxed text-soft">
            {post.excerpt}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white">
            Read article
            <Icon
              name="arrow"
              size={15}
              className="text-crimson transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </span>
        </div>
      </article>
    </Reveal>
  );
}

function PostCard({
  post,
  index,
  onRead,
}: {
  post: Post;
  index: number;
  onRead: (p: Post) => void;
}) {
  return (
    <Reveal delay={index * 90}>
      <article
        onClick={() => onRead(post)}
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-charcoal/70 transition-all duration-500 hover:-translate-y-1.5 hover:border-crimson/40 hover:shadow-[0_26px_64px_-34px_rgba(255,30,39,0.55)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
          <span className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-obsidian/75 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-mist backdrop-blur">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-soft/60">
            <span className="flex items-center gap-1.5">
              <Icon name="clock" size={12} />
              {post.read}
            </span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
          <h3 className="mt-3 font-display text-lg uppercase leading-tight tracking-wide text-white transition-colors duration-300 group-hover:text-crimson">
            {post.title}
          </h3>
          <p className="mt-2.5 text-[13px] leading-relaxed text-soft">
            {post.excerpt}
          </p>
          <span className="mt-auto flex items-center gap-2 pt-5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white">
            Read article
            <Icon
              name="arrow"
              size={14}
              className="text-crimson transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </span>
        </div>
      </article>
    </Reveal>
  );
}

/* -------------------------------- PAGE ---------------------------------- */

export default function Resources() {
  const [preview, setPreview] = useState<Resource | null>(null);
  const [article, setArticle] = useState<Post | null>(null);

  const featured = POSTS.find((p) => p.featured) ?? POSTS[0];
  const rest = POSTS.filter((p) => p.id !== featured.id);

  return (
    <>
      <PageHero
        eyebrow="Free Resources & Blog"
        title="TAKE THE KNOWLEDGE. IT'S FREE."
        sub="Every guide, cheat sheet and worksheet I use with paying clients — downloadable right now at zero cost. No email traps, no card, no catch. Just start."
        bullets={[
          "6 downloadable guides",
          "Instant access",
          "Coach-written content",
          "Updated monthly",
        ]}
      />

      {/* Downloads */}
      <Section id="downloads" className="bg-obsidian">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Free downloads"
            title={
              <>
                Guides, e-books &amp;
                <br />
                <span className="text-crimson">training worksheets</span>
              </>
            }
          />
          <Reveal delay={150}>
            <div className="glass-card flex items-center gap-3 rounded-2xl px-4 py-3">
              <Icon name="download" size={18} className="text-crimson" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mist">
                12,400+ downloads to date
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r, i) => (
            <ResourceCard
              key={r.id}
              resource={r}
              index={i}
              onPreview={setPreview}
            />
          ))}
        </div>
      </Section>

      {/* Blog */}
      <Section id="blog" className="border-t border-white/[0.07] bg-charcoal">
        <SectionHeading
          eyebrow="Fitness & nutrition blog"
          title={
            <>
              Training, food &amp; supplements —
              <br />
              <span className="text-crimson">explained without the fluff</span>
            </>
          }
          sub="Short, practical articles you can apply in your very next session. Written by the coach, not a content farm."
        />

        <div className="mt-12">
          <FeaturedPost post={featured} onRead={setArticle} />
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <PostCard key={p.id} post={p} index={i} onRead={setArticle} />
          ))}
        </div>
      </Section>

      {/* Coaching bridge */}
      <Section className="border-t border-white/[0.07] bg-obsidian">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-br from-carbon via-charcoal to-obsidian p-8 sm:p-12">
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-crimson/15 blur-[90px]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <Eyebrow icon="bolt">Ready for the coached version?</Eyebrow>
              <h2 className="display-title mt-4 text-4xl leading-[0.95] text-white sm:text-5xl">
                Knowledge is step one.
                <br />
                <span className="text-crimson">Accountability is step two.</span>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-soft">
                The guides tell you what to do. Coaching makes sure you actually
                do it — week after week, with adjustments built around your real
                life and your real numbers.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button to="/" anchor="plans" icon="arrow" size="lg">
                See coaching bundles
              </Button>
              <Button
                href={waLink(
                  "Hello Coach! I downloaded your free guide and I'd like to know more about coaching."
                )}
                variant="outline"
                icon="whatsapp"
                size="lg"
              >
                Message the coach
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Resource preview modal */}
      <Modal
        open={!!preview}
        onClose={() => setPreview(null)}
        label="Resource preview"
      >
        {preview && (
          <div>
            <div className="relative overflow-hidden border-b border-white/[0.07] bg-obsidian p-7 sm:p-9">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-crimson/20 blur-3xl" />
              <div className="relative flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-crimson/15 text-crimson">
                  <Icon name={preview.icon} size={26} />
                </span>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-crimson">
                    {preview.type} · {preview.pages}
                  </span>
                  <h3 className="display-title mt-2 text-2xl leading-tight text-white sm:text-3xl">
                    {preview.title}
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-7 sm:p-9">
              <p className="text-[15px] leading-relaxed text-mist">
                {preview.blurb}
              </p>
              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-soft/70">
                What's inside
              </p>
              <ul className="mt-4 space-y-2.5">
                {preview.contents.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-mist">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-crimson/15 text-crimson">
                      <Icon name="check" size={12} strokeWidth={3} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={() => downloadResource(preview)}
                  icon="download"
                  iconRight="arrow"
                  size="lg"
                  className="flex-1"
                >
                  Download free
                </Button>
                <Button
                  href={waLink(
                    `Hello Coach! I just downloaded the "${preview.title}" — can you help me apply it?`
                  )}
                  variant="outline"
                  icon="whatsapp"
                  size="lg"
                  className="flex-1"
                >
                  Ask about it
                </Button>
              </div>
              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.16em] text-soft/50">
                Free forever · No sign-up required
              </p>
            </div>
          </div>
        )}
      </Modal>

      {/* Article modal */}
      <Modal
        open={!!article}
        onClose={() => setArticle(null)}
        label="Article"
      >
        {article && (
          <article>
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em]">
                  <span className="rounded-full bg-crimson px-3 py-1 text-white">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-mist">
                    <Icon name="clock" size={12} />
                    {article.read}
                  </span>
                  <span className="text-soft/70">{article.date}</span>
                </div>
                <h3 className="display-title mt-3 text-2xl leading-[0.98] text-white sm:text-4xl">
                  {article.title}
                </h3>
              </div>
            </div>
            <div className="p-7 sm:p-9">
              <p className="border-l-2 border-crimson pl-4 text-[15px] font-medium leading-relaxed text-white">
                {article.excerpt}
              </p>
              <div className="mt-6 space-y-4">
                {(article.body ?? []).map((para, i) => (
                  <p key={i} className="text-[14.5px] leading-relaxed text-soft">
                    {para}
                  </p>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-white/[0.08] bg-obsidian/60 p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-crimson">
                  Want this applied to you?
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-mist">
                  I build the training, nutrition and supplement plan around
                  your body — then adjust it every single week.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Button href={waLink(`Hello Coach! I read your article "${article.title}" and I'd like to start coaching.`)} icon="whatsapp" className="flex-1">
                    Start coaching
                  </Button>
                  <Button
                    onClick={() => {
                      setArticle(null);
                      downloadResource(RESOURCES[0]);
                    }}
                    variant="outline"
                    icon="download"
                    className="flex-1"
                  >
                    Get the free guide
                  </Button>
                </div>
              </div>
            </div>
          </article>
        )}
      </Modal>
    </>
  );
}


