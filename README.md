# Eric Lin - Mechanical Engineering Portfolio

Personal portfolio site. Astro 7, content collections, plain CSS (no framework), GitHub Pages.

## Adding a project

1. Copy `src/content/projects/_template/` to `src/content/projects/your-slug/`.
2. Fill in the frontmatter and the five body sections (see the comments in the template).
3. Drop images alongside `index.md`; reference them with relative paths.
4. `git add . && git commit -m "Add <project>" && git push`.

The Action builds and deploys automatically. Adding a project never requires touching layout or component code; see `IMAGES.md` for photo/CAD standards.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321/eric-portfolio/
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Known placeholders

Search the repo for `[EDIT` to find every unresolved fact (dates, measured values) and placeholder image/PDF still waiting on real content.
