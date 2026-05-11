export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  date: string;
  readMin: number;
  cover: string;
  body: { type: "h2" | "h3" | "p" | "ul" | "quote"; text?: string; items?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "full-epc-vs-installation-contractor",
    title: "Full EPC vs. Installation Contractor: Why It Matters for Your Commercial Solar Project",
    subtitle:
      "The choice between a full EPC and a pure installation contractor shapes risk, accountability and long-term performance. Here's how to think about it.",
    excerpt:
      "Why the EPC vs. installer distinction matters more than most commercial solar buyers realize, and what to ask before you sign.",
    category: "Commercial",
    date: "2025-04-12",
    readMin: 7,
    cover: "/images/project-1.jpg",
    body: [
      { type: "p", text: "If you're scoping a commercial solar project, one of the first decisions you'll make is the type of partner you bring in. The two most common options are a full EPC (Engineering, Procurement, Construction) firm and a pure installation contractor working under someone else's design. The decision sounds technical, but it shapes every aspect of cost, schedule, performance and accountability." },
      { type: "h2", text: "What \"full EPC\" actually means" },
      { type: "p", text: "A full EPC owns the project from end to end. The same firm engineers the system, procures the materials, installs the array, commissions it, and (if needed) supports it through its lifecycle. There is one contract, one project manager, and, critically, one party that holds the entire result." },
      { type: "p", text: "An installation contractor, on the other hand, executes someone else's design. They are typically not responsible for engineering, permitting, procurement, or commissioning. If something falls between the design and the install, the buyer is the one holding the gap." },
      { type: "h2", text: "Where projects actually go sideways" },
      { type: "p", text: "Most commercial solar projects don't fail because of bad engineering or bad installation in isolation. They fail in the seam, the handoff between engineering intent and field execution." },
      { type: "ul", items: [
        "Drawings that are accurate but don't reflect field constraints",
        "Material substitutions made in procurement without engineering review",
        "Conduit routing that meets the spec but blocks future maintenance",
        "Inverter and combiner placements that aren't serviceable",
        "Commissioning steps that get rushed because the GC pulled crews",
      ] },
      { type: "p", text: "When one team owns engineering and execution, those seams disappear. The same engineers who drew the system are accountable for what gets built, and the install crew has direct access to the engineers when reality differs from the drawings." },
      { type: "h2", text: "Five questions to ask any solar partner" },
      { type: "ul", items: [
        "Are you the EPC, or are you executing someone else's design?",
        "Is your engineering in-house or subcontracted?",
        "Is your electrical scope in-house or subcontracted?",
        "Who owns commissioning, and what does \"commissioning complete\" mean to you?",
        "If a problem shows up in year 3, who do I call, and what do they own?",
      ] },
      { type: "h2", text: "When an installation-only contractor is the right call" },
      { type: "p", text: "There are scenarios where bringing in a pure installer makes sense, most commonly when you already have a developer or master EPC carrying the engineering and procurement scope, and you need a high-quality installation partner under their direction. Even in that scenario, you want an installer who reads drawings critically, not one who just builds whatever they're handed." },
      { type: "h2", text: "The bottom line" },
      { type: "p", text: "Commercial solar is a 25-year asset. The party that engineers it, builds it, commissions it and supports it should, wherever possible, be the same party. That's not philosophy; that's accountability. The seam between design and execution is exactly where most performance issues live, and a full EPC eliminates the seam." },
    ],
  },

  {
    slug: "when-to-reinstall-or-decommission",
    title: "When Should You Reinstall or Decommission Your Solar System?",
    subtitle: "Aging systems, roof replacements, performance gaps. Here's a framework for choosing between R&R, decommissioning, and stay-the-course.",
    excerpt:
      "A practical framework for asset owners deciding whether to reinstall, decommission, or hold an existing solar system.",
    category: "Asset Management",
    date: "2025-03-08",
    readMin: 6,
    cover: "/images/project-2.jpg",
    body: [
      { type: "p", text: "Solar systems are 25-year assets, but the components inside them aren't all on the same clock. Modules degrade slowly. Inverters age faster. Roofs age on their own schedule. And the economics around storage and TOU rates shift every year." },
      { type: "p", text: "If you own a commercial system that's been operating for more than 7–10 years, you're likely starting to ask one of three questions:" },
      { type: "ul", items: [
        "Should we reinstall this system?",
        "Should we decommission it?",
        "Should we just hold and maintain?",
      ] },
      { type: "h2", text: "The reinstallation decision" },
      { type: "p", text: "Reinstallation (often paired with R&R: Removal & Reinstallation) makes sense when the system is fundamentally productive but components are nearing end of life or the underlying roof needs replacement. Common drivers:" },
      { type: "ul", items: [
        "Inverters approaching end-of-warranty or showing reliability issues",
        "Roof underneath the array within 5–10 years of replacement",
        "Modules still performing but layout could be optimized",
        "Opportunity to add storage or upgrade to higher-efficiency components",
      ] },
      { type: "p", text: "A well-executed reinstallation can reset the clock on a system, extending its productive life by 10–15 years and often improving production along the way." },
      { type: "h2", text: "The decommissioning decision" },
      { type: "p", text: "Pure decommissioning (without reinstall) makes sense when:" },
      { type: "ul", items: [
        "The site is being sold or repurposed",
        "The economics no longer support the system",
        "Modules and BOS have reached genuine end of life",
        "Insurance or storm damage requires controlled removal",
      ] },
      { type: "p", text: "Decommissioning isn't just \"taking it down.\" Done properly, it includes labeling for resale or recycling, BOM documentation, AHJ closeout, and roof restoration." },
      { type: "h2", text: "When to hold" },
      { type: "p", text: "Sometimes the right answer is to keep maintaining the system as-is. If modules are degrading at expected rates, inverters are healthy, the roof is sound, and the production economics are still strong, there's no reason to disturb a productive asset. A structured O&M plan with annual inspections is usually enough." },
      { type: "h2", text: "A simple decision framework" },
      { type: "p", text: "When clients ask us how to decide, we usually start with three questions:" },
      { type: "ul", items: [
        "How is the roof? If it has less than 10 years of life, plan an R&R window now.",
        "How are the inverters? Failing inverters are usually the signal to reinstall, not just replace one-for-one.",
        "What's the energy strategy? If you want storage, EV-charging, or expanded capacity, reinstallation is the cleanest moment to integrate it.",
      ] },
      { type: "p", text: "Whatever the answer, document it. The cost of a bad decision in solar asset management compounds over decades. The cost of getting it right shows up every month for the next 20+ years." },
    ],
  },

  {
    slug: "roof-replacement-and-solar-r-r",
    title: "Roof Replacement and Solar: How to Handle Removal & Reinstallation the Right Way",
    subtitle: "R&R looks simple on paper. In the field, it's where most solar projects lose months and warranty coverage. Here's how to do it cleanly.",
    excerpt:
      "Roof replacement under a solar array is one of the most underestimated operations in commercial solar. A practical guide.",
    category: "R&R",
    date: "2025-02-21",
    readMin: 8,
    cover: "/images/working-2.jpg",
    body: [
      { type: "p", text: "Replacing a roof underneath an existing solar array is one of the most underestimated operations in commercial solar. On paper, it's simple: pull the panels, redo the roof, put the panels back. In practice, it's where most projects lose months, blow budgets, and quietly forfeit warranty coverage." },
      { type: "p", text: "If you're considering a roof replacement on a building with an active solar system, here's how to think about it." },
      { type: "h2", text: "Step 1: Audit the roof and the system together" },
      { type: "p", text: "The mistake most owners make is assuming the roof and the system are separate problems. They're not. The audit should cover both at once:" },
      { type: "ul", items: [
        "Roof condition, remaining life, manufacturer warranty status",
        "Module performance, age, and degradation",
        "Inverter health, age, and warranty status",
        "Racking and flashing condition",
        "Code compliance gaps in the original install",
      ] },
      { type: "p", text: "The output of this audit should be a single phasing plan, not two separate plans handed off between trades." },
      { type: "h2", text: "Step 2: Decide on the reinstall scope" },
      { type: "p", text: "An R&R is a rare opportunity to upgrade the system without a full new-build. Decide whether you'll:" },
      { type: "ul", items: [
        "Reinstall as-is (cheapest, fastest)",
        "Reinstall with new flashing and racking (often required for new roof warranty)",
        "Replace inverters or move to optimizers / microinverters",
        "Optimize the array layout (better setbacks, conduit, monitoring)",
        "Add storage during reinstallation",
      ] },
      { type: "p", text: "Roof manufacturer requirements often force at least new flashing, since the new roof's warranty depends on it. Don't skip that conversation." },
      { type: "h2", text: "Step 3: Coordinate trades, single source if possible" },
      { type: "p", text: "The most expensive R&R failures we see come from trades stepping on each other. The solar contractor pulls panels late, the roofer can't start, the schedule slips, the panels sit on a rack getting weathered. A single contractor managing both scopes (or coordinating tightly with the roofer) eliminates most of that risk." },
      { type: "h2", text: "Step 4: Document and re-commission" },
      { type: "p", text: "After reinstall, the system needs to be re-commissioned, not just reconnected. That includes:" },
      { type: "ul", items: [
        "String-level performance testing",
        "Inverter logs review",
        "Monitoring re-activation and validation",
        "AHJ recommissioning where required",
        "Updated BOM and as-built documentation",
      ] },
      { type: "p", text: "Skipping re-commissioning means you'll discover problems six months later when production drops, without the labor on site to fix them efficiently." },
      { type: "h2", text: "The bottom line" },
      { type: "p", text: "An R&R isn't a chore. It's an opportunity to extend a 25-year asset by another decade, and often improve it along the way. Done right, you walk away with a new roof, an upgraded system, and clean documentation. Done wrong, you walk away with months of delays and a compromised warranty stack. The difference is in who is coordinating the work." },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
