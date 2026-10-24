import whey from "@/assets/p-whey.jpg";
import creatine from "@/assets/p-creatine.jpg";
import preworkout from "@/assets/p-preworkout.jpg";
import vitamin from "@/assets/p-vitamin.jpg";
import omega from "@/assets/p-omega.jpg";
import blender from "@/assets/g-blender.jpg";
import scale from "@/assets/g-scale.jpg";
import shaker from "@/assets/g-shaker.jpg";
import containers from "@/assets/g-containers.jpg";
import type { IconName } from "@/components/Icon";

export const SITE = {
  brand: "MKORBATLY",
  brandSub: "ELITE PERFORMANCE",
  coach: "Mohamad Khorbatly",
  coachHandle: "@mkhorbatly",
  instagram: "https://www.instagram.com/mkhorbatly",
  whatsappNumber: "96171112360",
  whatsappDisplay: "+961 71 112 360",
  email: "coach@mkhorbatly.fit",
  location: "Beirut, Lebanon — Online Worldwide",
};

/** Builds a direct WhatsApp deep-link with a pre-filled message. */
export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(name: string, price: string) {
  return `Hello Coach! I would like to order: ${name}\n${price}`;
}

export type NavItem = {
  label: string;
  short: string;
  path: string;
  icon: IconName;
  note: string;
};

export const NAV: NavItem[] = [
  {
    label: "Home",
    short: "Home",
    path: "/",
    icon: "home",
    note: "Coaching & bundles",
  },
  {
    label: "Free Resources & Blog",
    short: "Free Resources",
    path: "/free-resources",
    icon: "book",
    note: "Guides, e-books & articles",
  },
  {
    label: "Supplements & Vitamins",
    short: "Supplements",
    path: "/supplements",
    icon: "pill",
    note: "Order via WhatsApp",
  },
  {
    label: "Nutrition Gear & Tools",
    short: "Nutrition Gear",
    path: "/nutrition-gear",
    icon: "utensils",
    note: "Kitchen & tracking tools",
  },
];

/* ------------------------------- COACHING ------------------------------- */

export type Plan = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  features: string[];
  popular?: boolean;
  icon: IconName;
};

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$50",
    cadence: "one-time",
    tagline: "Consultation & Custom Plan",
    icon: "target",
    features: [
      "60-min 1-on-1 strategy call",
      "Personalised 4-week training plan",
      "Calorie & macro targets calculated",
      "Video form-check review",
      "7 days of WhatsApp Q&A",
      "One plan revision included",
    ],
  },
  {
    id: "transformation",
    name: "Transformation",
    price: "$200",
    cadence: "12-week program",
    tagline: "Body & Mind Recomposition",
    icon: "bolt",
    popular: true,
    features: [
      "Everything in Starter",
      "12-week periodised training block",
      "Macro-cycling nutrition plan",
      "Weekly video check-ins & adjustments",
      "Private exercise video library",
      "Personal supplement protocol",
      "Mindset & habit coaching",
      "Priority 24/7 WhatsApp support",
    ],
  },
  {
    id: "elite",
    name: "Elite VIP",
    price: "$1,000",
    cadence: "monthly 1-on-1",
    tagline: "Full Access Personal Coaching",
    icon: "crown",
    features: [
      "Everything in Transformation",
      "Unlimited live 1-on-1 sessions",
      "Daily accountability & check-ins",
      "Full supplement stack guidance",
      "Biometric + progress-photo tracking",
      "Contest prep / photoshoot ready",
      "Direct line to the coach, always",
    ],
  },
];

export const STATS = [
  { value: 480, suffix: "+", label: "Clients Coached" },
  { value: 12, suffix: " yrs", label: "Coaching Experience" },
  { value: 94, suffix: "%", label: "Goal Completion Rate" },
  { value: 24, suffix: "/7", label: "Direct Support" },
];

export const PROCESS = [
  {
    step: "01",
    title: "Apply & Consult",
    body: "Send a short application. We jump on a call and map out exactly where you are and where you want to be.",
    icon: "target" as IconName,
  },
  {
    step: "02",
    title: "Deep Assessment",
    body: "Movement screen, training history, nutrition audit, sleep and stress profile — the full picture.",
    icon: "chart" as IconName,
  },
  {
    step: "03",
    title: "Your Blueprint",
    body: "A periodised training block, a nutrition strategy built around your food, and a supplement protocol.",
    icon: "book" as IconName,
  },
  {
    step: "04",
    title: "Execute & Adjust",
    body: "Weekly check-ins, real-time tweaks and brutal-honest accountability until the result is undeniable.",
    icon: "bolt" as IconName,
  },
];

export const TESTIMONIALS = [
  {
    name: "Rami H.",
    role: "Transformation Client",
    result: "−18 kg / 16 weeks",
    quote:
      "I had trained for years with zero direction. Mohamad rebuilt everything — my training, my food, my discipline. 16 weeks later I'm in the best shape of my life.",
    rating: 5,
  },
  {
    name: "Layal K.",
    role: "Online Coaching",
    result: "+7 kg lean mass",
    quote:
      "The check-ins are relentless in the best way. Every week there's a clear adjustment, never a generic template. Worth every single dollar.",
    rating: 5,
  },
  {
    name: "Jad A.",
    role: "Elite VIP",
    result: "First physique show",
    quote:
      "We prepped for my first show together. Daily feedback, perfect peak week, and a level of attention I've never seen from any coach.",
    rating: 5,
  },
  {
    name: "Nour S.",
    role: "Starter Client",
    result: "−9 kg / 10 weeks",
    quote:
      "Started with the $50 consultation just to see. The plan was so detailed I upgraded within two weeks. Zero regrets.",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "Do I need gym access to work with you?",
    a: "No. Every program is built around your actual equipment. I coach full-gym athletes, home-dumbbell-only clients and zero-equipment travellers — the principles of progression stay identical, the tools change.",
  },
  {
    q: "How fast will I see results?",
    a: "Most clients see measurable change in energy, strength and waist circumference within 3–4 weeks. Visibly dramatic physique change typically lands between week 8 and 12 when the plan is followed consistently.",
  },
  {
    q: "What happens after I pay?",
    a: "You receive an onboarding questionnaire within minutes. Once it's back, we book your consultation call and your first training block lands in your inbox within 48 hours.",
  },
  {
    q: "Is nutrition included in every plan?",
    a: "Yes. Every bundle includes calorie and macronutrient targets. The Transformation and Elite VIP tiers add macro cycling, meal structure and supplement protocols that evolve with your progress.",
  },
  {
    q: "How do supplement and gear orders work?",
    a: "Everything is ordered directly through WhatsApp. Tap 'Order via WhatsApp' on any product and a pre-filled message opens with the product and price — the coach confirms availability and delivery the same day.",
  },
  {
    q: "What if I can't afford coaching right now?",
    a: "That's exactly why the Free Resources page exists. Download the hypertrophy guide, macro cheat sheet and training worksheets at zero cost and start today. No catch, no email traps.",
  },
];

/* ------------------------------- RESOURCES ------------------------------ */

export type Resource = {
  id: string;
  title: string;
  file: string;
  type: "PDF Guide" | "E-book" | "Worksheet" | "Cheat Sheet";
  pages: string;
  blurb: string;
  icon: IconName;
  accent: string;
  contents: string[];
};

export const RESOURCES: Resource[] = [
  {
    id: "hypertrophy",
    title: "Full Body Hypertrophy Guide",
    file: "Full-Body-Hypertrophy-Guide.pdf",
    type: "PDF Guide",
    pages: "42 pages",
    blurb:
      "The complete science of building muscle: volume landmarks, rep ranges, exercise selection and a ready-to-run 4-day split.",
    icon: "dumbbell",
    accent: "from-crimson/25 to-transparent",
    contents: [
      "Volume & intensity landmarks explained",
      "The 4-day full-body split (printable)",
      "Exercise swap matrix for any gym",
      "Deload protocol & progression rules",
    ],
  },
  {
    id: "macro",
    title: "Macronutrient Tracking Cheat Sheet",
    file: "Macronutrient-Tracking-Cheat-Sheet.pdf",
    type: "Cheat Sheet",
    pages: "8 pages",
    blurb:
      "Calculate your calories and macros in under 3 minutes, plus a portion-hand guide you can use at any restaurant.",
    icon: "chart",
    accent: "from-crimson/25 to-transparent",
    contents: [
      "Bodyweight-based macro formula",
      "Hand-portion measurement system",
      "Cutting / maintaining / bulking presets",
      "Common tracking mistakes to avoid",
    ],
  },
  {
    id: "supps",
    title: "Supplements 101: What Actually Works",
    file: "Supplements-101-What-Actually-Works.pdf",
    type: "E-book",
    pages: "26 pages",
    blurb:
      "An evidence-based breakdown of every supplement on the shelf — ranked A to F, with dosing protocols and budget picks.",
    icon: "pill",
    accent: "from-crimson/25 to-transparent",
    contents: [
      "Tier-ranked supplement evidence table",
      "Exact doses & timing protocols",
      "What to skip at any price",
      "Sample stacks for goal & budget",
    ],
  },
  {
    id: "overload",
    title: "12-Week Progressive Overload Worksheet",
    file: "12-Week-Progressive-Overload-Worksheet.pdf",
    type: "Worksheet",
    pages: "14 pages",
    blurb:
      "A fill-in logbook that forces progression. Track load, reps, RPE and weekly tonnage so every session has a target.",
    icon: "target",
    accent: "from-crimson/25 to-transparent",
    contents: [
      "Weekly tonnage & RPE tracker",
      "Auto-regulated progression rules",
      "Personal-record log pages",
      "Printable gym-friendly format",
    ],
  },
  {
    id: "mealprep",
    title: "Meal Prep on a Budget — 30 Recipes",
    file: "Meal-Prep-on-a-Budget-30-Recipes.pdf",
    type: "E-book",
    pages: "38 pages",
    blurb:
      "High-protein, low-cost recipes with full macros, shopping lists and a Sunday prep system that takes 90 minutes.",
    icon: "leaf",
    accent: "from-crimson/25 to-transparent",
    contents: [
      "30 recipes with full macro breakdowns",
      "Cost-per-protein-gram comparison",
      "90-minute Sunday prep system",
      "Complete weekly shopping lists",
    ],
  },
  {
    id: "home",
    title: "Home Workout Blueprint — Zero Equipment",
    file: "Home-Workout-Blueprint-Zero-Equipment.pdf",
    type: "PDF Guide",
    pages: "20 pages",
    blurb:
      "Build muscle at home with bodyweight only. Tempo work, mechanical drop sets and a 6-week escalating plan.",
    icon: "bolt",
    accent: "from-crimson/25 to-transparent",
    contents: [
      "6-week zero-equipment program",
      "Tempo & mechanical drop-set methods",
      "Progression without added load",
      "20-minute hotel-room sessions",
    ],
  },
];

export type Post = {
  id: string;
  title: string;
  category: string;
  read: string;
  date: string;
  excerpt: string;
  image: string;
  body?: string[];
  featured?: boolean;
};

const RAW_POSTS: Post[] = [
  {
    id: "overload",
    title: "Progressive Overload: The Only Rule That Actually Matters",
    category: "Training",
    read: "6 min read",
    date: "Feb 18, 2026",
    excerpt:
      "You can change exercises every week and still build nothing. Here's how to make every single session count with four measurable overload methods.",
    image:
      "https://images.pexels.com/photos/31267848/pexels-photo-31267848.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    featured: true,
  },
  {
    id: "protein",
    title: "How Much Protein Do You Really Need Per Day?",
    category: "Nutrition",
    read: "8 min read",
    date: "Feb 11, 2026",
    excerpt:
      "The 2 g/kg number gets repeated everywhere. The truth is a range — and where you sit in it depends on your body fat, training age and deficit.",
    image:
      "https://images.pexels.com/photos/5236668/pexels-photo-5236668.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    id: "burners",
    title: "The Truth About Fat Burners (And What To Buy Instead)",
    category: "Supplements",
    read: "5 min read",
    date: "Feb 04, 2026",
    excerpt:
      "Most fat burners are caffeine in expensive packaging. Here's the short list of ingredients with real evidence behind them.",
    image:
      "https://images.pexels.com/photos/15120889/pexels-photo-15120889.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    id: "sleep",
    title: "Sleep: The Anabolic Secret Weapon Nobody Tracks",
    category: "Recovery",
    read: "7 min read",
    date: "Jan 28, 2026",
    excerpt:
      "One week of poor sleep can drop testosterone and wreck your insulin sensitivity. Fix these four inputs before you touch your program.",
    image:
      "https://images.pexels.com/photos/29886673/pexels-photo-29886673.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    id: "prep",
    title: "Meal Prep in 90 Minutes a Week: The Full System",
    category: "Nutrition",
    read: "9 min read",
    date: "Jan 19, 2026",
    excerpt:
      "Five proteins, two carbs, three vegetables, one sauce. A repeatable framework that keeps you on plan without eating the same meal 14 times.",
    image:
      "https://images.pexels.com/photos/5622193/pexels-photo-5622193.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    id: "plateau",
    title: "Stuck at the Same Weight? Five Fixes That Work",
    category: "Mindset",
    read: "6 min read",
    date: "Jan 09, 2026",
    excerpt:
      "Plateaus are almost never a program problem. Audit these five variables in this order before you change anything else.",
    image:
      "https://images.pexels.com/photos/30283461/pexels-photo-30283461.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
];

const POST_BODY: Record<string, string[]> = {
  overload: [
    "Muscle is a adaptation problem, not a novelty problem. Your body does not care that you changed exercises this week — it cares that you asked slightly more of it than you did last week. That request can come in four forms: more load, more reps at the same load, better quality reps at the same fatigue, or less rest with the same output.",
    "Pick ONE variable per block. If your top set of bench was 80 kg × 6 last week, this week it should be 80 kg × 7-8, or 82.5 kg × 6. Trying to progress load, reps and density simultaneously is how people end up injured and spinning.",
    "Track it. Write down every working set. A session that isn't recorded cannot be progressed reliably — you're negotiating with your memory instead of reading a number. This is the single biggest difference between people who build muscle year after year and people who look identical in every photo.",
  ],
  protein: [
    "The research lands on a range, not a single number: roughly 1.6 to 2.2 grams per kilogram of bodyweight per day for anyone lifting seriously. Where you sit inside that range depends on three things — your body fat percentage, whether you're in a deficit, and your training age.",
    "If you're lean and cutting, go high: 2.2 to 2.6 g/kg. Lean mass is most at risk in a deficit and protein is also the most satiating macronutrient, which makes the diet easier to hold. If you're gaining slowly at a higher body fat, 1.6 to 1.8 g/kg is plenty.",
    "Distribution matters more than most people think. Aim for 0.4 g/kg per meal across three to five feedings, with 30-40 g of high-quality protein in the meal right after training. Total daily intake still rules — but if you're hitting your number in one giant dinner, you're leaving recovery on the table.",
  ],
  burners: [
    "Almost every commercial fat burner is a stimulant blend: caffeine, green tea extract, cayenne, and a long list of unproven botanicals dressed up with a clinical-sounding dose. Caffeine genuinely works — for performance and appetite suppression. The rest is mostly marketing.",
    "If fat loss is the goal, your money goes further in this order: a food scale, creatine, whey protein, and a good night's sleep. Those four things will out-perform any burner on the shelf, and three of them keep working after you stop buying them.",
    "The one exception worth knowing about is a genuine deficit. No ingredient on earth can out-supplement an energy surplus. Fix the deficit first, keep protein high, lift three to five times a week — and then, only then, consider a caffeine dose you actually feel.",
  ],
  sleep: [
    "Restrict sleep to five hours for a week and the research is blunt: testosterone drops, perceived exertion rises, insulin sensitivity worsens, and appetite hormones shift hard toward cravings for dense carbohydrates. You will feel every set heavier and every meal harder to control.",
    "Four inputs fix most of it. A consistent wake time — even on weekends. A dark, cool room. No caffeine inside eight to ten hours of bed. And a hard stop on screens an hour before, replaced with something genuinely boring.",
    "Track it for two weeks against your training log. When clients do this, the pattern is always the same: their best weeks of lifting line up with their best weeks of sleep, not their best weeks of programming. Recovery is where the adaptation actually happens.",
  ],
  prep: [
    "The system is five proteins, two carbs, three vegetables and one sauce. Cook all of them on Sunday in a single 90-minute window, then combine differently through the week so you never eat the same meal twice in a row.",
    "Batch by method, not by recipe. Everything that roasts goes in the oven together at 200°C; everything that simmers goes on the hob. Tray one chicken, tray two beef and vegetables, pot one rice, pot two potatoes. Two heat sources, six items, no waiting.",
    "Weigh cooked, raw, once — then stop weighing. Build a portion template per container so prep day becomes assembly rather than arithmetic. The goal is not precision forever; it's precision long enough to learn what a correct portion looks like in your hand.",
  ],
  plateau: [
    "In order, audit these: sleep, step count, weekend calories, training log honesty, and stress. Ninety percent of plateaus are explained inside that list before anything about the program needs to change.",
    "Then look at the log. If your top sets haven't moved in six weeks, you haven't been progressing — you've been maintaining. Add load or reps to your first working set of each main lift, every week, and let the back-off sets follow.",
    "Finally, consider a diet break or a deliberate two-week maintenance phase. If you've been in a deficit for four months straight, your metabolism has adapted and your adherence has quietly eroded. Eating at maintenance for fourteen days is not quitting — it's what makes the next twelve productive.",
  ],
};

export const POSTS: Post[] = RAW_POSTS.map((post) => ({
  ...post,
  body: POST_BODY[post.id] ?? [],
}));

/* -------------------------------- SHOP ---------------------------------- */

export type Product = {
  id: string;
  name: string;
  size: string;
  price: string;
  benefit: string;
  image?: string;
  icon?: IconName;
  tag?: string;
  specs?: string[];
};

export const SUPPLEMENTS: Product[] = [
  {
    id: "whey",
    name: "MK Whey Isolate",
    size: "2 kg · 66 servings",
    price: "$55",
    benefit:
      "Ultra-filtered isolate delivering 27 g of protein per scoop with under 1 g of sugar — fast absorption for post-training recovery.",
    image: whey,
    tag: "Best Seller",
    specs: ["27 g protein / scoop", "Under 1 g sugar", "Third-party tested"],
  },
  {
    id: "creatine",
    name: "Creatine Monohydrate",
    size: "300 g · 60 servings",
    price: "$25",
    benefit:
      "Pharmaceutical-grade micronised creatine. The single most researched performance supplement on earth — strength, power and volume.",
    image: creatine,
    tag: "Evidence Tier A",
    specs: ["5 g daily dose", "Micronised, unflavoured", "60-day supply"],
  },
  {
    id: "preworkout",
    name: "Ignite Pre-Workout",
    size: "300 g · 30 servings",
    price: "$38",
    benefit:
      "Citrulline, beta-alanine and a clean 200 mg caffeine hit. Skin-splitting pumps without the crash or the kitchen-sink formula.",
    image: preworkout,
    tag: "Trainer Pick",
    specs: ["6 g citrulline malate", "3.2 g beta-alanine", "No proprietary blends"],
  },
  {
    id: "multivitamin",
    name: "Daily Multivitamin",
    size: "90 capsules",
    price: "$22",
    benefit:
      "A hard-training body burns through micronutrients. This covers the gaps a high-protein, low-calorie diet leaves behind.",
    image: vitamin,
    specs: ["31 active nutrients", "Chelated minerals", "Once daily"],
  },
  {
    id: "omega",
    name: "Omega-3 Fish Oil",
    size: "120 softgels",
    price: "$19",
    benefit:
      "High-concentration EPA/DHA for joints, heart and recovery — sourced wild-caught and molecularly distilled for purity.",
    image: omega,
    specs: ["1,000 mg per softgel", "600 mg EPA/DHA", "No fishy aftertaste"],
  },
  {
    id: "bcaa",
    name: "Electrolyte + Recovery Blend",
    size: "400 g · 40 servings",
    price: "$32",
    benefit:
      "Hydration minerals with added electrolytes for long sessions and Lebanese summers. Zero sugar, full sodium and potassium profile.",
    icon: "bolt",
    tag: "New",
    specs: ["5 key electrolytes", "Zero sugar", "Intra-workout use"],
  },
];

export const GEAR: Product[] = [
  {
    id: "blender",
    name: "Vortex Portable Blender",
    size: "500 ml · USB-C",
    price: "$45",
    benefit:
      "Six stainless blades and a 5,000 mAh battery. Blend your shake in the car, at the office or in the gym in under 30 seconds.",
    image: blender,
    tag: "Best Seller",
    specs: ["5,000 mAh battery", "6 stainless blades", "Self-clean mode"],
  },
  {
    id: "scale",
    name: "Precision Digital Food Scale",
    size: "0.1 g accuracy",
    price: "$29",
    benefit:
      "The single highest-ROI nutrition tool you can own. Weighs to 0.1 g with a backlit display and a full nutrition database mode.",
    image: scale,
    tag: "Must Have",
    specs: ["0.1 g precision", "Backlit LED display", "Tare & auto-off"],
  },
  {
    id: "shaker",
    name: "Insulated Steel Shaker",
    size: "700 ml",
    price: "$24",
    benefit:
      "Double-wall stainless steel keeps shakes cold for 12 hours. No odour, no plastic stains, no leaking lid.",
    image: shaker,
    specs: ["12 h cold retention", "Leak-proof lid", "Dishwasher safe"],
  },
  {
    id: "containers",
    name: "Meal Prep Container Set",
    size: "Set of 5 · 3-compartment",
    price: "$32",
    benefit:
      "Microwave, freezer and dishwasher safe with a leak-proof seal. Portion-accurate compartments that match your macro plan.",
    image: containers,
    tag: "Bundle Favourite",
    specs: ["3 compartments", "Leak-proof seals", "Freezer to microwave"],
  },
  {
    id: "tape",
    name: "Body Tape + Caliper Kit",
    size: "Measure & track",
    price: "$14",
    benefit:
      "Track what the scale can't show. Body tape plus skinfold calipers with a quick-reference measurement card.",
    icon: "ruler",
    specs: ["150 cm body tape", "Skinfold calipers", "Progress card included"],
  },
  {
    id: "spoons",
    name: "Stainless Measuring Spoon Set",
    size: "8 pieces",
    price: "$12",
    benefit:
      "Exact scoops every time — from 5 g of creatine to 60 ml of oil. Magnetic nesting design keeps the drawer tidy.",
    icon: "utensils",
    specs: ["8 metric sizes", "Magnetic nesting", "Engraved markings"],
  },
];

export const SHOP_BANNERS = {
  supplements: {
    eyebrow: "Supplements & Vitamins",
    title: "FUEL THE WORK",
    sub: "Coach-screened supplements only. No fillers, no fairy dust, no proprietary blends — every product here earns its place in your stack.",
    bullets: [
      "Personally vetted by the coach",
      "Same-day WhatsApp ordering",
      "Delivery across Lebanon & abroad",
    ],
  },
  gear: {
    eyebrow: "Nutrition Gear & Tools",
    title: "TOOLS THAT MAKE IT STICK",
    sub: "Execution beats motivation. These are the exact tools my clients use to weigh, blend, portion and track their way to a physique that lasts.",
    bullets: [
      "Used in real client protocols",
      "Kitchen-to-gym portability",
      "Same-day WhatsApp ordering",
    ],
  },
};