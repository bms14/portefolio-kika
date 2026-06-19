export type MediaItem =
  | { type: "image"; src: string }
  | { type: "gif"; src: string }    // animated GIF — rendered without Next.js optimisation
  | { type: "video"; src: string }  // mp4/webm hosted file
  | { type: "embed"; url: string }; // Figma, YouTube, Vimeo, etc.

export interface Project {
  slug: string;
  title: string;
  description?: string;
  tags?: string[];
  coverImage: string;
  hoverImage: string;
  media: MediaItem[];
}

// Helpers to build encoded public paths
const img = (folder: string, file: string): MediaItem => ({
  type: "image",
  src: `/images/projects/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`,
});
const gif = (folder: string, file: string): MediaItem => ({
  type: "gif",
  src: `/images/projects/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`,
});
const vid = (folder: string, file: string): MediaItem => ({
  type: "video",
  src: `/images/projects/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`,
});
const cover = (folder: string, file: string) =>
  `/images/projects/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;

export const projects: Project[] = [
  {
    slug: "kyrt",
    title: "KYRT",
    coverImage: cover("KYRT", "cover.png"),
    hoverImage: cover("KYRT", "hover.png"),
    media: [
      img("KYRT", "1.png"),
      img("KYRT", "2.png"),
      gif("KYRT", "3.gif"),
      gif("KYRT", "4.gif"),
      img("KYRT", "5.png"),
      img("KYRT", "6.png"),
      img("KYRT", "7.png"),
      img("KYRT", "8.png"),
      img("KYRT", "9.png"),
      gif("KYRT", "10.gif"),
      vid("KYRT", "11.mp4"),
    ],
  },
  {
    slug: "auto-representacao",
    title: "Auto Representação",
    coverImage: cover("Auto Representação", "cover.jpg"),
    hoverImage: cover("Auto Representação", "hover.jpg"),
    media: [
      img("Auto Representação", "1.jpg"),
      img("Auto Representação", "2.jpg"),
      img("Auto Representação", "3.jpg"),
      img("Auto Representação", "4.jpg"),
      img("Auto Representação", "5.jpg"),
      img("Auto Representação", "6.jpg"),
    ],
  },
  {
    slug: "best-friends",
    title: "Best Friends",
    coverImage: cover("Best Friends", "cover.jpg"),
    hoverImage: cover("Best Friends", "hover.jpg"),
    media: [
      img("Best Friends", "1.jpg"),
      img("Best Friends", "2.jpg"),
      img("Best Friends", "3.png"),
      img("Best Friends", "4.jpg"),
      img("Best Friends", "5.jpg"),
      img("Best Friends", "6.png"),
      img("Best Friends", "7.png"),
      img("Best Friends", "8.jpg"),
      img("Best Friends", "9.jpg"),
    ],
  },

  {
    slug: "casa-de-emergencia",
    title: "Casa de Emergência",
    coverImage: cover("Casa de Emergência", "cover.jpg"),
    hoverImage: cover("Casa de Emergência", "hover.jpg"),
    media: [
      img("Casa de Emergência", "cover.jpg"),
      img("Casa de Emergência", "hover.jpg"),
    ],
  },
  {
    slug: "duas-de-letra",
    title: "Duas de Letra",
    coverImage: cover("Duas de Letra", "JPEG image-49B2-8424-36-0.jpeg"),
    hoverImage: cover("Duas de Letra", "JPEG image-49B2-8424-36-0.jpeg"),
    media: [
      img("Duas de Letra", "JPEG image-49B2-8424-36-0.jpeg"),
      vid("Duas de Letra", "video.mp4"),
    ],
  },
  {
    slug: "master-infographics",
    title: "Master Infographics",
    coverImage: cover("Master Infographics", "cover.jpg"),
    hoverImage: cover("Master Infographics", "hover.jpg"),
    media: [
      img("Master Infographics", "1.jpg"),
      img("Master Infographics", "2.jpg"),
      img("Master Infographics", "3.jpg"),
      img("Master Infographics", "4.png"),
      img("Master Infographics", "5.png"),
      img("Master Infographics", "6.png"),
      img("Master Infographics", "7.png"),
      img("Master Infographics", "8.jpg"),
    ],
  },
  {
    slug: "present-continuous",
    title: "Present Continuous",
    coverImage: cover("Present Continuous", "cover.JPG"),
    hoverImage: cover("Present Continuous", "hover.png"),
    media: [
      img("Present Continuous", "1.jpg"),
      img("Present Continuous", "2.JPG"),
      img("Present Continuous", "3.JPG"),
      img("Present Continuous", "4.JPG"),
      img("Present Continuous", "5.JPG"),
      img("Present Continuous", "6.JPG"),
      img("Present Continuous", "7.JPG"),
      img("Present Continuous", "8.JPG"),
      img("Present Continuous", "9.JPG"),
    ],
  },
  {
    slug: "mares",
    title: "Mares",
    coverImage: cover("mares", "cover.jpg"),
    hoverImage: cover("mares", "hover.jpg"),
    media: [
      img("mares", "1.jpg"),
      img("mares", "2.jpg"),
      img("mares", "3.jpg"),
      img("mares", "4.jpg"),
      img("mares", "5.jpg"),
      img("mares", "6.jpg"),
      img("mares", "7.jpg"),
      img("mares", "8.jpg"),
      img("mares", "10.jpg"),
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// All cover images for the hero cursor effect
export const allCoverImages = projects.map((p) => p.coverImage);
