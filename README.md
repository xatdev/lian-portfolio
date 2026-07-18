# Lian Portfolio Website

Premium, vibrant product design portfolio built with Next.js, React, Tailwind CSS, and Framer Motion.

## Stack

- Next.js (App Router)
- React
- Tailwind CSS v4
- Framer Motion

## Website Sections

- Home
- About
- Projects
  - Ambient Cork Lamp
  - MycoCradle
  - Water Jug Redesign
  - Graphic Design
  - Form Studies
- Design Process
- Contact

## Getting Started

1. Install dependencies:

	npm install

2. Run development server:

	npm run dev

3. Build production version:

	npm run build

## PDF Image Extraction Workflow

The portfolio visuals in this project are generated from:

- ../LianLijo_Portfolio.pdf

Extract script location:

- scripts/extract_pdf_images.py

It outputs images to:

- public/images/portfolio

Run extraction:

1. Ensure Python and PyMuPDF are installed.
2. Run:

	npm run extract:pdf-images

## Notes

- Project pages are statically generated for performance.
- Route transitions and reveal animations are powered by Framer Motion.
- The design system uses custom typography, vibrant accents, and textured gradients for a premium portfolio aesthetic.
