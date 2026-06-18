export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  coverImage: string;
  hoverImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "brand-identity-studio-a",
    title: "Brand Identity – Studio A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["Branding", "Identity", "2024"],
    coverImage: "https://picsum.photos/seed/proj1cover/800/1000",
    hoverImage: "https://picsum.photos/seed/proj1hover/800/1000",
    images: [
      "https://picsum.photos/seed/proj1img1/800/1200",
      "https://picsum.photos/seed/proj1img2/800/1000",
      "https://picsum.photos/seed/proj1img3/800/1100",
      "https://picsum.photos/seed/proj1img4/800/900",
    ],
  },
  {
    slug: "editorial-design-magazine-b",
    title: "Editorial Design – Magazine B",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    tags: ["Editorial", "Print", "2023"],
    coverImage: "https://picsum.photos/seed/proj2cover/800/1000",
    hoverImage: "https://picsum.photos/seed/proj2hover/800/1000",
    images: [
      "https://picsum.photos/seed/proj2img1/800/1200",
      "https://picsum.photos/seed/proj2img2/800/1000",
      "https://picsum.photos/seed/proj2img3/800/1100",
      "https://picsum.photos/seed/proj2img4/800/900",
    ],
  },
  {
    slug: "packaging-product-c",
    title: "Packaging – Product C",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    tags: ["Packaging", "3D", "2023"],
    coverImage: "https://picsum.photos/seed/proj3cover/800/1000",
    hoverImage: "https://picsum.photos/seed/proj3hover/800/1000",
    images: [
      "https://picsum.photos/seed/proj3img1/800/1200",
      "https://picsum.photos/seed/proj3img2/800/1000",
      "https://picsum.photos/seed/proj3img3/800/1100",
      "https://picsum.photos/seed/proj3img4/800/900",
    ],
  },
  {
    slug: "visual-identity-brand-d",
    title: "Visual Identity – Brand D",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    tags: ["Identity", "Typography", "2022"],
    coverImage: "https://picsum.photos/seed/proj4cover/800/1000",
    hoverImage: "https://picsum.photos/seed/proj4hover/800/1000",
    images: [
      "https://picsum.photos/seed/proj4img1/800/1200",
      "https://picsum.photos/seed/proj4img2/800/1000",
      "https://picsum.photos/seed/proj4img3/800/1100",
      "https://picsum.photos/seed/proj4img4/800/900",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
