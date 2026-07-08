---
# Copy this folder to src/content/projects/your-project-slug/ (folder name becomes the URL slug).
# Drop images alongside this file and reference them with relative paths, e.g. ./cad-iso.png

title: "Project title"                 # max 60 chars
summary: "One-sentence summary shown on the card."   # max 140 chars
date: 2026-01-01                       # completion or last-major-update date; drives sort order (newest first)
status: complete                       # complete | in-progress
category: design-build                 # design-build | machining | embedded | analysis (see below)
tools: ["Tool one", "Tool two"]        # at least one entry
hero: ./placeholder.png                # required; 16:10 crop recommended, see IMAGES.md
heroAlt: "Describe the hero image for screen readers."   # required

# Optional:
# links:
#   github: https://github.com/you/repo
#   drawingPdf: ./drawing.pdf
# model3d:
#   kind: glb                          # glb | sketchfab
#   src: ./part.glb                    # or a Sketchfab embed URL
#   poster: ./placeholder.png
# featured: false
---

<!--
Category semantics:
  design-build = full design-to-physical-build projects
  machining    = fabrication / GD&T-centered work
  embedded     = electromechanical + Arduino
  analysis     = FEA / stress / simulation-centered work

The body below must contain exactly these five H2 sections, in order.
Inline images use standard markdown; add a quoted title to get a caption:
  ![Alt text for screen readers](./cad-view.png "Fig 1. What the reader is seeing and why it mattered.")
Every figure should have a caption (one sentence).
-->

## Problem

2-4 sentences: what needed to exist, and for whom. No throat-clearing.

## Constraints

- Real constraint one (budget, size envelope, course requirement, material on hand, client demand)
- Real constraint two, with numbers wherever possible

## Design decisions

The longest section. 2-4 decisions, each as: the option chosen, the alternative rejected, and why.

## Analysis and validation

What was calculated, simulated, or measured, and what the numbers said. Photograph hand calcs and FBDs and inline them here.

## Outcome

What happened, quantified. What would be done differently. 3-6 sentences, honest about shortcomings.
