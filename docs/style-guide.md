# Style Guide

This document defines the visual standards for your frontend site, based on your mockup. Customize values from your design where needed.

---

## Colors

### Base Colors

| Role       | Token                | Value                |
| ---------- | -------------------- | -------------------- |
| Background | `--color-background` | `rgb(243, 243, 243)` |
| Foreground | `--color-foreground` | `rgb(11, 0, 20)`     |
| White      | `--color-white`      | `rgb(255, 255, 255)` |
| Black      | `--color-black`      | `rgb(0, 0, 0)`       |

### Brand Colors

| Role   | Token            | Value               |
| ------ | ---------------- | ------------------- |
| Red    | `--color-red`    | `rgb(237, 28, 36)`  |
| Blue   | `--color-blue`   | `rgb(0, 136, 203)`  |
| Yellow | `--color-yellow` | `rgb(255, 203, 5)`  |
| Pink   | `--color-pink`   | `rgb(201, 8, 111)`  |
| Green  | `--color-green`  | `rgb(179, 217, 67)` |
| Orange | `--color-orange` | `rgb(222, 93, 53)`  |

### Gray Scale

| Role         | Token                  | Value                |
| ------------ | ---------------------- | -------------------- |
| Gray         | `--color-gray`         | `rgb(114, 114, 114)` |
| Gray Light   | `--color-gray-light`   | `rgb(176, 176, 176)` |
| Gray Lighter | `--color-gray-lighter` | `rgb(243, 243, 243)` |
| Gray Dark    | `--color-gray-dark`    | `rgb(69, 61, 76)`    |
| Gray Darker  | `--color-gray-darker`  | `rgb(11, 0, 20)`     |

### Text Colors

| Role           | Token                    | Value             |
| -------------- | ------------------------ | ----------------- |
| Primary Text   | `--color-text-primary`   | `rgb(11, 0, 20)`  |
| Secondary Text | `--color-text-secondary` | `rgb(69, 61, 76)` |
| Title          | `--color-title`          | `rgb(11, 0, 20)`  |
| Subtitle       | `--color-subtitle`       | `rgb(11, 0, 20)`  |

### Semantic Colors

| Role     | Token              | Value                |
| -------- | ------------------ | -------------------- |
| Action   | `--color-action`   | `rgb(254, 234, 250)` |
| Disabled | `--color-disabled` | `rgb(127, 122, 132)` |
| Line     | `--color-line`     | `rgb(11, 0, 20)`     |

---

## Typography

### Font Families

- **Primary Font**: `questrial, sans-serif` (`--font-sans`)
- **Body Font**: `din-next-w01-light, sans-serif` (`--font-body`)

### Heading Styles

| Element | Token       | Value                                |
| ------- | ----------- | ------------------------------------ |
| H2      | `--font-h2` | `55px / 1.4em questrial, sans-serif` |
| H3      | `--font-h3` | `45px / 1.4em questrial, sans-serif` |
| H4      | `--font-h4` | `35px / 1.4em questrial, sans-serif` |
| H5      | `--font-h5` | `30px / 1.4em questrial, sans-serif` |
| H6      | `--font-h6` | `25px / 1.4em questrial, sans-serif` |

### Body Text Styles

| Size    | Token                 | Value                                         |
| ------- | --------------------- | --------------------------------------------- |
| Large   | `--font-body-large`   | `20px / 1.4em questrial, sans-serif`          |
| Medium  | `--font-body-medium`  | `17px / 1.4em questrial, sans-serif`          |
| Small   | `--font-body-small`   | `14px / 1.4em questrial, sans-serif`          |
| X-Small | `--font-body-x-small` | `12px / 1.4em din-next-w01-light, sans-serif` |

### Body Default

- **Font family**: `questrial, sans-serif`
- **Line height**: `1.6`
- **Font smoothing**: Antialiased

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

## Button Components

### Primary Button

| State           | Token                                    | Value                |
| --------------- | ---------------------------------------- | -------------------- |
| Fill            | `--color-button-primary-fill`            | `rgb(254, 234, 250)` |
| Border          | `--color-button-primary-border`          | `rgb(254, 234, 250)` |
| Text            | `--color-button-primary-text`            | `rgb(243, 243, 243)` |
| Hover Fill      | `--color-button-primary-fill-hover`      | `rgb(243, 243, 243)` |
| Hover Border    | `--color-button-primary-border-hover`    | `rgb(254, 234, 250)` |
| Hover Text      | `--color-button-primary-text-hover`      | `rgb(254, 234, 250)` |
| Disabled Fill   | `--color-button-primary-fill-disabled`   | `rgb(127, 122, 132)` |
| Disabled Border | `--color-button-primary-border-disabled` | `rgb(127, 122, 132)` |
| Disabled Text   | `--color-button-primary-text-disabled`   | `rgb(243, 243, 243)` |

### Secondary Button

| State           | Token                                      | Value                |
| --------------- | ------------------------------------------ | -------------------- |
| Fill            | `--color-button-secondary-fill`            | `rgb(243, 243, 243)` |
| Border          | `--color-button-secondary-border`          | `rgb(254, 234, 250)` |
| Text            | `--color-button-secondary-text`            | `rgb(254, 234, 250)` |
| Hover Fill      | `--color-button-secondary-fill-hover`      | `rgb(254, 234, 250)` |
| Hover Border    | `--color-button-secondary-border-hover`    | `rgb(254, 234, 250)` |
| Hover Text      | `--color-button-secondary-text-hover`      | `rgb(243, 243, 243)` |
| Disabled Fill   | `--color-button-secondary-fill-disabled`   | `rgb(243, 243, 243)` |
| Disabled Border | `--color-button-secondary-border-disabled` | `rgb(127, 122, 132)` |
| Disabled Text   | `--color-button-secondary-text-disabled`   | `rgb(127, 122, 132)` |

---

## Fill Colors

### Base Fills

| Token                       | Value                |
| --------------------------- | -------------------- |
| `--color-fill-base-1`       | `rgb(243, 243, 243)` |
| `--color-fill-base-2`       | `rgb(11, 0, 20)`     |
| `--color-fill-base-shade-1` | `rgb(185, 182, 187)` |
| `--color-fill-base-shade-2` | `rgb(127, 122, 132)` |
| `--color-fill-base-shade-3` | `rgb(69, 61, 76)`    |

### Accent Fills

| Token                   | Value                |
| ----------------------- | -------------------- |
| `--color-fill-accent-1` | `rgb(254, 234, 250)` |
| `--color-fill-accent-2` | `rgb(239, 247, 246)` |
| `--color-fill-accent-3` | `rgb(201, 8, 111)`   |
| `--color-fill-accent-4` | `rgb(174, 217, 224)` |

## Usage Integration

- Pull tokens into your CSS variables or `tailwind.config.ts`
- Apply consistent utility classes in your React components
- Any visual deviation must be approved and documented here

---
