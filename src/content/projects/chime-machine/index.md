---
title: "Chime Machine"
summary: "Arduino-timed solenoid striker that reached a 50 percent efficiency improvement over the first prototype."
date: 2022-06-01 # [EDIT: confirm month - Eric recalls 2022]
status: complete
category: embedded
tools: ["Arduino", "Onshape", "Solenoids"]
hero: ./hero.png
heroAlt: "Isometric CAD render of the Chime Machine solenoid striker mechanism and frame"
---

## Problem

RIT team design project ("robochime"): build a device that autonomously plays a song at least 40 seconds long, using at least 5 different notes, triggered by a single flip of a power switch with no further human interference. Built from a provided kit of parts, judged on sound quality rather than a fixed spec.

## Constraints

- Must use, and activate, at least one motor and at least one solenoid to help play the song
- Kit-parts only (plus a reasonable amount of hot glue); paint allowed but decorative only, never load-bearing
- Must rest solely on a table's top surface (no clamping/adhering, though it can extend below the table edge) and fit inside a 23"W x 19"D x 19.5"H box; all wiring to the shared control box goes through a provided 26-pin ribbon header

## Design decisions

- [EDIT: solenoid striker mechanism chosen over the alternative, and why]
- [EDIT: Arduino timing/control approach chosen (e.g. interrupt-driven vs. polling) and why]
- [EDIT: mounting/frame decision in Onshape and its rationale]

## Analysis and validation

[EDIT: how the 50 percent efficiency improvement was measured against the first prototype: what was measured (power draw, strike energy, response time), and the before/after numbers. Inline a photo of the test setup or a measurement here.]

## Outcome

Reached a 50 percent efficiency improvement over the first prototype. [EDIT: what that meant in practice, and what would be done differently next time.]
