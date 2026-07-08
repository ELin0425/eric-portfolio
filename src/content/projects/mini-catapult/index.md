---
title: "Mini Catapult"
summary: "Statics-driven launch mechanism sized from free-body analysis before any CAD was drawn."
date: 2023-06-01 # [EDIT: confirm month - Eric recalls 2023]
status: complete
category: design-build
tools: ["Onshape", "Statics", "Hand calcs"]
hero: ./hero.png
heroAlt: "IMAGE PENDING: hero photo or CAD render of the Mini Catapult"
model3d:
  kind: glb
  src: models/mini-catapult.gltf
---

## Problem

MECE 204 (RIT mechanical engineering design course) team project: design and 3D-print a catapult arm for a base supplied by the course, then compete on two independent axes: strength-to-weight ratio and launch distance. Teams of 3-4 students; base and launch payload provided, arm geometry was the team's own design.

## Constraints

- Arm must be 3D printed in PLA: 15-30% infill, 3-5 perimeters, no more than 60g total weight as estimated by the slicer
- Exactly one rubber band as the only energy-storage element; a through-hole at the fulcrum (~3.5mm diameter) to mount on the base with a rod, no separate mounting pin
- Arm had to be sized to fit the specific base provided, measured directly rather than from a spec sheet

## Design decisions

- [EDIT: the arm geometry/cross-section chosen, sized from statics, and the alternative geometry rejected]
- [EDIT: the rubber-band attachment point decision and its rationale]
- [EDIT: a materials/print-orientation or fastening decision and its rationale]

## Analysis and validation

Two tests validated the design: a cantilever beam bending test (water added to a bucket hanging off the arm until failure, for strength-to-weight ratio) and a launch test (three throws, best distance counted). [EDIT: describe the actual hand calcs done (torque, arm length sizing) and inline a photo of the FBD/hand calc here.]

## Outcome

[EDIT: measured launch distance and/or failure load from the actual tests, quantified. What would be done differently.]
