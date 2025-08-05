# Style Guide

This document defines the visual standards for your frontend site, based on your mockup. Customize values from your design where needed.

---

## Colors

| Role         | Token               | Example |
| ------------ | ------------------- | ------- |
| Primary      | `--color-primary`   | `TODO`  |
| Secondary    | `--color-secondary` | `TODO`  |
| Background   | `--color-bg`        | `TODO`  |
| Surface      | `--color-surface`   | `TODO`  |
| Text (main)  | `--text-primary`    | `TODO`  |
| Text (muted) | `--text-muted`      | `TODO`  |
| Error        | `--color-error`     | `TODO`  |

---

## 🅰 Typography

- **Font family**: TODO
- **Base sizes**:

  - `text-base` → 16px
  - `text-lg` → 18px
  - `text-xl` → 20px
  - `text-2xl` → 24px
  - `text-4xl` → 36px

- **Heading styles**:
  ```css
  h1 {
    font-size: 2.25rem;
    font-weight: bold;
  }
  h2 {
    font-size: 1.875rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  ```

---

## Spacing Scale

Use a 4px base scale:

| Token | Value |
| ----- | ----- |
| `0`   | 0px   |
| `1`   | 4px   |
| `2`   | 8px   |
| `3`   | 12px  |
| `4`   | 16px  |
| `6`   | 24px  |
| `8`   | 32px  |
| `12`  | 48px  |

---

## Border Radius & Shadows

| Token | Radius | Standard Use      |
| ----- | ------ | ----------------- |
| `sm`  | 4px    | Buttons, inputs   |
| `md`  | 8px    | Cards, containers |
| `lg`  | 12px   | Modals, banners   |

---

## Naming & Utility Order

- Component filenames: **PascalCase** (e.g. `HeroSection.tsx`)
- Props: **camelCase** (`title`, `isOpen`)
- Tailwind utility order:

  ```
  layout → spacing → border → background → text → effects
  ```

---

## Usage Integration

- Pull tokens into your CSS variables or `tailwind.config.js`
- Apply consistent utility classes in your React components
- Any visual deviation must be approved and documented here

---
