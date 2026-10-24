import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { Marquee, Footer } from "@/components/Chrome";
import { MobileHeader, Sidebar } from "@/components/Sidebar";
import { useRoute } from "@/lib/router";
import { SITE, waLink } from "@/lib/site";
import Home from "@/pages/Home";
import Resources from "@/pages/Resources";
import { GearPage, SupplementsPage } from "@/pages/Shop";
import { cn } from "@/utils/cn";

const TITLES: Record<string, string> = {
  "/": "MKORBATLY — Transform Physically & Mentally",
  "/free-resources": "Free Resources & Blog — MKORBATLY",
  "/supplements": "Supplements & Vitamins — MKORBATLY",
  "/nutrition-gear": "Nutrition Gear & Tools — MKORBATLY",
};

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(window.scrollY / h, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-transparent lg:pl-[272px]">
      <div
        className="h-full origin-left bg-gradient-to-r from-crimson-deep via-crimson to-crimson-deep shadow-[0_0_14px_rgba(255,30,39,0.9)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[65] flex flex-col items-end gap-3">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-charcoal/90 text-mist backdrop-blur-xl transition-all duration-400 hover:border-crimson/60 hover:text-crimson",
          show
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        )}
      >
        <Icon name="chevron" size={18} className="rotate-180" />
      </button>

      <a
        href={waLink("Hello Coach! I'd like to know more about your coaching and products.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3"
        aria-label="Chat on WhatsApp"
      >
        <span className="pointer-events-none hidden translate-x-2 rounded-xl border border-white/10 bg-charcoal/95 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
          Chat with the coach
        </span>
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-crimson text-white shadow-[0_14px_40px_-10px_rgba(255,30,39,1)] transition-transform duration-300 group-hover:scale-110">
          <span className="absolute inset-0 animate-ping rounded-full bg-crimson/40" />
          <Icon name="whatsapp" size={26} className="relative" />
        </span>
      </a>
    </div>
  );
}

function CurrentPage({ route }: { route: string }) {
  switch (route) {
    case "/free-resources":
      return <Resources />;
    case "/supplements":
      return <SupplementsPage />;
    case "/nutrition-gear":
      return <GearPage />;
    default:
      return <Home />;
  }
}

export default function App() {
  const route = useRoute();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.title = TITLES[route] ?? TITLES["/"];
  }, [route]);

  return (
    <div className="min-h-screen bg-obsidian">
      <ScrollProgress />
      <Sidebar active={route} />
      <MobileHeader active={route} />

      <div className="lg:pl-[272px]">
        <Marquee />
        <main key={route} className="page-enter">
          <CurrentPage route={route} />
        </main>
        <Footer />
      </div>

      <FloatingActions />

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            name: `${SITE.brand} — ${SITE.coach}`,
            description:
              "Elite personal training, online coaching, supplements and nutrition tools.",
            telephone: `+${SITE.whatsappNumber}`,
            email: SITE.email,
            sameAs: [SITE.instagram],
            areaServed: "Worldwide",
          }),
        }}
      />
    </div>
  );
}
