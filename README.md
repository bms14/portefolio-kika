# Francisca Alemão — Portfolio

Portfolio website for graphic designer Francisca Alemão. Built with Next.js 16, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add real content

- **Images**: Replace the `picsum.photos` URLs in [`data/projects.ts`](data/projects.ts) with your own image paths or URLs.
- **Text**: Edit names, taglines, bio, and timeline entries directly in the component files or in `data/projects.ts`.
- **CV PDF**: Drop the real PDF at `public/cv/francisca-alemao-cv.pdf`.
- **About photo**: Replace the placeholder div in [`components/About.tsx`](components/About.tsx) with a real `<Image>` tag.

## Add a new project

Edit [`data/projects.ts`](data/projects.ts) and append a new object to the `projects` array:

```ts
{
  slug: "my-new-project",          // URL: /projects/my-new-project
  title: "My New Project",
  description: "Description text.",
  tags: ["Branding", "2025"],
  coverImage: "/images/new-cover.jpg",
  hoverImage: "/images/new-hover.jpg",
  images: [
    "/images/new-1.jpg",
    "/images/new-2.jpg",
    "/images/new-3.jpg",
    "/images/new-4.jpg",
  ],
}
```

## Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com](https://vercel.com) → New Project → Import your GitHub repo.
   - Vercel auto-detects Next.js — no config needed. Click Deploy.

3. **Custom domain**
   - Buy a domain at [vercel.com/domains](https://vercel.com/domains).
   - In your Vercel project → Settings → Domains → Add your domain.
   - Follow the DNS instructions shown.
