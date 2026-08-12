# Interactive Academic E-Portfolio

Next.js + TypeScript + Framer Motion implementation of the E-Waste & Environmental Management academic portfolio.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit content

All personal/content data lives in:

- `data/profile.ts`
- `data/projects.ts`
- `data/subjects.ts`
- `data/assignments.ts`
- `data/contact.ts`

## Replace your photograph

Replace the placeholder inside `components/Portfolio.tsx` with a Next/Image component and put the photo in `public/`.

## Add assignment photos

Put images in `public/assignments/` and add their paths to the `images` array in `data/assignments.ts`.

## Add real subject content

Edit `data/subjects.ts` and the subject detail page. The current topic text is intentionally editable placeholder content because the actual syllabus/notes were not supplied.
