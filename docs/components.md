# Components Guide

This guide explains how components are organized, named, and developed across the project. All components should follow the design system and naming conventions for consistency and maintainability.

---

## Folder Structure

```

/src/components
/common         → Micro components (buttons, links, tags)
/layout         → Macro layout (header, footer, grid wrappers)
/sections       → Page-specific sections (hero, about, CTA)
/icons          → SVGs as components

```

---

## Component Types

### 1. Micro Components (Atomic)

Small, reusable elements like:

- `Button.tsx`
- `Link.tsx`
- `Badge.tsx`

These should be **pure**, **stateless**, and **highly reusable**.

---

### 2. Composite Components

Built from micro components. For more complicated components, its suggested to use prebuild components from [shadcn](https://ui.shadcn.com/)

Examples:

- `Card.tsx`
- `Accordion.tsx`
- `ImageCarousel.tsx`

---

### Image Components

- `AssuImage.tsx` (common): Accessible, responsive image with optional text overlay, skeleton while loading, and error fallback. Uses `next/image` with `fill` and supports caption via `<figcaption>`.
  - Props: `src`, `alt`, `caption?`, `ariaLabel?`, `sizes?`, `className?`, `imgClassName?`, `aspectClassName?`, `priority?`, `overlay?`, `overlayPosition?`, `overlayAlign?`, `fallback?`.
  - Accessibility: requires meaningful `alt`; `figure` has `aria-label` and `aria-busy` during load.
  - Mobile: container is `max-w-full` and uses `object-cover` within an aspect wrapper to prevent horizontal scrolling.

- `HeroImage.tsx` (sections): Wide banner image constrained to site container (not edge-to-edge) with same overlay/caption features.
  - Props: inherits `AssuImage` props plus `containerClassName?`, `heroAspectClassName?`, `heroSizes?`.
  - Default container: `max-w-7xl mx-auto` with responsive padding.

---

### 3. Layout Components

Structural wrappers:

- `Header.tsx`
- `Footer.tsx`
- `Section.tsx`
- `Container.tsx`

Used across multiple pages to ensure consistent layout.

---

### 4. Section Components

Page-specific but composable:

- `HeroSection.tsx`
- `FeatureSection.tsx`
- `ContactSection.tsx`

Typically built from micro + layout components.

---

## 🧪 Testing

- All new components should have a basic test (`.test.tsx`)
- Use React Testing Library
- Example test: render the component and verify content or interaction

---

## 🎨 Styling

- Use **Tailwind CSS utility classes**
- Avoid inline styles unless absolutely necessary
- Shared design tokens come from `tailwind.config.js`

---

## 🧠 Guidelines

- One component per file
- Prefer `Props` interfaces with explicit types
- Keep components stateless unless absolutely necessary
- Name files and folders in **PascalCase**

---

## 📚 Example: HeroText Component

```tsx
// src/components/sections/HeroText.tsx

type HeroTextProps = {
  title: string;
  subtitle?: string;
};

export default function HeroText({ title, subtitle }: HeroTextProps) {
  return (
    <section className="py-12 text-center">
      <h1 className="text-4xl font-bold text-primary">{title}</h1>
      {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
    </section>
  );
}
```

---

## 🚀 Adding a New Component

1. Create it in the appropriate folder
2. Add props typing
3. Add a test file in the same directory
4. Follow accessibility best practices
5. Link it in the storybook/docs if applicable

```

---

Let me know if you'd like this adapted to an atomic design model (`atoms/`, `molecules/`, `organisms/`) or added to a `README.md` structure.
```
