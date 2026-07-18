export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string;
  accent: "mint" | "coral" | "sun" | "teal";
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "ambient-cork-lamp",
    title: "Ambient Cork Lamp",
    subtitle: "Material-led lighting experience",
    year: "2026",
    category: "Product Design",
    overview:
      "A warm, tactile lighting object that explores cork as both structural and emotional material in home interiors.",
    challenge:
      "Design a lamp that feels premium yet sustainable while balancing manufacturability, heat management, and visual softness.",
    solution:
      "The final concept layers cork, diffused light, and a modular core to create a calm atmosphere and easy maintenance workflow.",
    impact:
      "Delivers a memorable tabletop product language that communicates eco-consciousness without looking utilitarian.",
    accent: "mint",
    images: [
      "/images/portfolio/page-04.png",
      "/images/portfolio/page-05.png",
      "/images/portfolio/page-06.png",
    ],
  },
  {
    slug: "mycocradle",
    title: "MycoCradle",
    subtitle: "Bio-material future concept",
    year: "2026",
    category: "Sustainable Systems",
    overview:
      "MycoCradle investigates mycelium-driven product systems through cradle-to-cradle thinking and biodegradable form language.",
    challenge:
      "Translate emerging bio-material research into an understandable user-facing product narrative and practical use-case.",
    solution:
      "A product-service concept with intuitive interactions, lifecycle visuals, and designed disassembly from day one.",
    impact:
      "Demonstrates systems-level design maturity and a clear direction for circular product ecosystems.",
    accent: "coral",
    images: [
      "/images/portfolio/page-07.png",
      "/images/portfolio/page-08.png",
    ],
  },
  {
    slug: "water-jug-redesign",
    title: "Water Jug Redesign",
    subtitle: "Everyday usability refinement",
    year: "2025",
    category: "Human-Centered Design",
    overview:
      "A redesigned jug experience focused on grip, pour control, and refill behavior in daily household routines.",
    challenge:
      "Reduce user fatigue and messy pours while keeping production feasibility within existing manufacturing constraints.",
    solution:
      "The redesign introduces ergonomic grip transitions, weighted balance, and form cues that guide use naturally.",
    impact:
      "Improves confidence and comfort for frequent-use scenarios with minimal manufacturing disruption.",
    accent: "sun",
    images: [
      "/images/portfolio/page-10.png",
      "/images/portfolio/page-11.png",
      "/images/portfolio/page-12.png",
      "/images/portfolio/page-13.png",
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    subtitle: "Visual identity and communication",
    year: "2025",
    category: "Communication Design",
    overview:
      "A collection of brand, editorial, and visual communication explorations that support product storytelling.",
    challenge:
      "Create consistent yet expressive visual systems across varied formats and narrative contexts.",
    solution:
      "Developed modular compositions, bold typographic hierarchy, and adaptive color systems to unify outputs.",
    impact:
      "Strengthens cross-disciplinary capability between product thinking and visual communication.",
    accent: "teal",
    images: [
      "/images/portfolio/page-14.png",
      "/images/portfolio/page-15.png",
      "/images/portfolio/page-16.png",
      "/images/portfolio/page-17.png",
    ],
  },
  {
    slug: "form-studies",
    title: "Form Studies",
    subtitle: "Spatial and object experimentation",
    year: "2024-2026",
    category: "Form Exploration",
    overview:
      "A process archive of sketch, model, and proportion studies used to sharpen three-dimensional decision making.",
    challenge:
      "Build disciplined form language while experimenting with scale, silhouette, and tactile qualities.",
    solution:
      "Iterative physical and digital studies mapped into comparative matrices for faster design judgments.",
    impact:
      "Acts as the foundation for confident concept development across future product directions.",
    accent: "mint",
    images: [
      "/images/portfolio/page-18.png",
      "/images/portfolio/page-19.png",
      "/images/portfolio/page-20.png",
      "/images/portfolio/page-21.png",
    ],
  },
];

export const processSteps = [
  {
    title: "Observe",
    body: "I begin with context: people, behavior, constraints, and existing workarounds that reveal real friction.",
  },
  {
    title: "Frame",
    body: "Insights are translated into a concise problem statement, success criteria, and clear design principles.",
  },
  {
    title: "Iterate",
    body: "Through sketching, mockups, and rapid testing, I compare options and evolve the concept intentionally.",
  },
  {
    title: "Refine",
    body: "I push proportion, details, and communication quality so the final proposal is both desirable and feasible.",
  },
];