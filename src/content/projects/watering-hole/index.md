---
title: "The Watering Hole"
summary: "Flash-chill beverage dispenser designed in Fusion 360 across three client-driven design iterations."
date: 2026-01-01
status: in-progress
category: design-build
tools: ["Fusion 360", "Client iteration", "Thermal design"]
hero: ./hero.png
heroAlt: "Fusion 360 assembly render of The Watering Hole flash-chill dispenser, transparent shell showing the internal keg, canister, and electronics layout"
model3d:
  kind: glb
  src: models/watering-hole.glb
---

## Problem

RIT Multidisciplinary Senior Design (MSD I) project for client Beth Race: a 3-spigot dispenser that chills, filters, and (optionally) flavors water, meant to compete with single-use bottled water as new state packaging-waste legislation (S1464 & A1749) started penalizing companies for plastic waste. Customers use their own reusable bottle, pay per ounce dispensed through a point-of-sale touchscreen, and watch the running total in real time as they fill.

## Constraints

- Budget capped at $3,000 (a mid-project increase was requested and approved once roughly half the parts list had been purchased)
- Footprint small enough for a convenience-store floor (~3-5 ft diameter), powered from two standard 120V/15A outlets stepped down to 12V for the pumps and 5V for the Raspberry Pi
- Water-contact parts food-safe, exterior housing non-plastic, and the whole unit mobile on lockable wheels rated for its filled weight

## Design decisions

Three client-driven design iterations shaped the final mechanism.

- **Dispensing concept**: chose an inline on-tube pump with a physical button, Wi-Fi telemetry, and a gas-station-style touchscreen readout over two rival concepts (a submersible pump with a camera-based readout, and a gravity-fed design with text-message receipts), scored via a Pugh chart against pressure reliability, water-waste avoidance, and payment safety.
- **Cooling method**: evaluated an evaporator-condenser loop as the physically better chilling method, but rejected it because it requires refrigeration licensing and expertise the team didn't have access to, so they built a flash chiller instead, a deliberate tradeoff of cooling performance for buildability within a semester.
- **Keg loading (final)**: dropped an earlier door-plus-separate-pull-out-canister mechanism once the team judged it over-engineered, replacing it with a simpler rail-based system for swapping kegs, and reworked the frame's mounting concept after a manufacturability review with an outside machinist.

## Analysis and validation

A MATLAB model related pump flow rate, chiller heat-removal capacity, and resulting temperature drop (Q = 500 × GPM × ΔT). Target design point: 1 GPM (±0.2 GPM) through the chiller, cooling from an assumed 70°F inlet to a 40°F outlet. Running the model against the chiller the team could actually afford (1,900 BTU/hr) surfaced a real limitation: even 1 GPM across all 3 spigots combined was "a stretch," only about 0.1 GPM per spigot was achievable at a 20°F drop, which became the team's flagged risk to carry into MSD II. A heat-transfer/thermodynamics reviewer checked and approved the underlying equation.

## Outcome

By the end of Phase 4 (detailed design), the CAD was finalized, the frame's mounting concept had been reworked after manufacturability review, and roughly half the parts list was purchased, but no physical prototype had been assembled or tested yet, which is why the project carries an in-progress status into MSD II. The team's own risk assessment named the flash chiller's limited cooling capacity as the biggest open question for the next phase.
