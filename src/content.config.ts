import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  // [^_] excludes the _template folder, same convention Astro's own docs use
  loader: glob({ pattern: '[^_]*/index.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string().max(60),
    summary: z.string().max(140),          // the one-liner on the card
    date: z.coerce.date(),                 // completion or last-major-update date; drives sort
    status: z.enum(['complete', 'in-progress']),
    category: z.enum(['design-build', 'machining', 'embedded', 'analysis']),
    tools: z.array(z.string()).min(1),     // e.g. ["Onshape", "Manual lathe", "GD&T"]
    hero: image(),                         // relative path, e.g. ./hero.jpg
    heroAlt: z.string(),                   // required; enforces alt text
    links: z.object({
      github: z.string().url().optional(),
      drawingPdf: z.string().optional(),   // relative path to a PDF in the project folder
    }).optional(),
    model3d: z.object({                    // presence of this key renders the 3D viewer
      kind: z.enum(['glb', 'sketchfab']),
      src: z.string(),                     // ./part.glb  OR a Sketchfab embed URL
      poster: image().optional(),          // shown while loading / if JS disabled
    }).optional(),
    featured: z.boolean().default(false),  // reserved for future use; no layout effect at launch
  }),
});

export const collections = { projects };
