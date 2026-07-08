---
title: "Piston"
summary: "Fully toleranced GD&T drawing, machined on a manual lathe and mill, then measured against the CAD."
date: 2022-06-01 # [EDIT: confirm month - Eric recalls 2022; the 2021 date on the drawing is the professor's template, not the actual build]
status: complete
category: machining
tools: ["Onshape", "GD&T", "Manual lathe", "Manual mill"]
hero: ./hero.png
heroAlt: "IMAGE PENDING: photo of the machined piston with calipers measuring a toleranced dimension"
model3d:
  kind: glb
  src: models/piston.gltf
---

## Problem

RIT machine-shop project: produce a full drawing package for a seven-part piston/crank assembly, then machine and validate every part on a manual lathe and mill. A hand-cranked Knob turns a Crank Block, which drives a connecting Link that pushes a Piston back and forth inside a clear Piston Guide, a scotch-yoke-style mechanism for converting rotary motion to linear motion.

## Constraints

- Two functional fits had to hold: an interference fit between the Crank Block's bore (Ø.375 +.001/-.000) and the Knob's shaft (Ø.375 +.000/-.002), and a precision reamed bore in the Post (Ø.4990 ±.0005) for its mating pivot pin
- Four materials across the assembly: aluminum 6061 (Piston, Link, Post, Knob, Base), steel (Crank Block, the highest-wear part), bronze (Bushing), and clear polycarbonate (Piston Guide, chosen so the mechanism's motion stays visible)
- All threaded features held to 8-32 UNC-2B or 1/4-20 UNC-2B; drawing package spanned sheet sizes A through C

## Design decisions

- Crank Block called out in steel rather than aluminum like the rest of the assembly, since it carries both the Knob's interference-fit shaft and the Link's reciprocating pivot load
- Piston Guide made from clear polycarbonate instead of an opaque metal so the piston's motion inside it stays visible
- [EDIT: machining sequence chosen (lathe operations vs. mill operations) and the alternative sequence rejected; fixturing/setup decision and its rationale]

## Analysis and validation

Every part was dimensioned and toleranced in a full drawing package before any material was cut, including two functional fits: the Crank Block/Knob interference fit and the Post's ±.0005 precision reamed bore. [EDIT: which dimensions were actually checked with calipers/pin gauges after machining, and whether they came in within tolerance. Lead with that photo per IMAGES.md.]

## Outcome

[EDIT: what happened, quantified (which dimensions passed/failed tolerance, lessons on machining an interference fit and a multi-part GD&T assembly). What would be done differently.]
