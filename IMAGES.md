# Imagery and presentation standards

Rules for every project image, so future projects match the launch set without re-reading the full design plan.

## CAD screenshots

- Consistent isometric (or dimetric) orientation across all projects.
- Shaded-with-edges display style.
- Solid white background (`#FFFFFF`), so screenshots float cleanly on cards.
- Zero application UI chrome: no toolbars, browser tabs, or cursors.
- Export at 1600px+ wide; hero images cropped to 16:10.
- One exploded view per multi-part assembly is strongly encouraged; it is the single highest-credibility CAD image type.
- Section views welcome where the mechanism is internal.

## Photos of real parts and builds

- Plain background (white poster board, or a granite surface plate for machining shots).
- One diffuse light source or indirect daylight, no harsh flash.
- Parts wiped clean of chips and oil.
- Include a scale cue in at least one shot (calipers, ruler, or a coin).
- Shoot one 3/4 view plus one close-up of the most technically interesting feature.
- A photo of calipers actually measuring a toleranced dimension is worth more than any glamour shot; the Piston project should lead with exactly that.

## Analysis artifacts

Photographed hand calcs, free-body diagrams, simulation result plots, and spreadsheet screenshots are first-class images and belong inline in the "Analysis and validation" section. Clean up before shooting (dark pen, straight crop, good contrast) but do not redraw digitally; authentic hand work reads as stronger evidence.

## Process sequencing

Every project page should show, in body order, at least four of these five beats:

1. Sketch or free-body diagram
2. CAD
3. Analysis artifact
4. Build/machining photo
5. Finished part with validation (measurement, test result)

A project may skip a beat it genuinely does not have. The template renders fine with any subset.

## Interactive 3D viewer

Set `model3d` in frontmatter only when a `.glb` (or Sketchfab embed) exists for that project. Export `.glb` from Onshape/Fusion; keep files under ~8 MB. Piston and future tracking-turret projects are the best first candidates.

## Formats

Drop JPG/PNG at full resolution; Astro's image pipeline emits responsive WebP automatically (hero: widths 640/960/1600; inline figures: max 1400, quality 80). No manual resizing.
