# Git Strategy

This document outlines our Git workflow and contribution rules to ensure consistent and clean version control across the project.

---

## Branching Strategy

### Main Branches

- **`main`**: Production-ready code only. All deployments come from this branch.
- **`dev`**: Active development branch. Feature branches are merged here first.

### Working Branches

- **`feature/<name>`**: For new features
  - Example: `feature/hero-section`, `feature/responsive-nav`
- **`fix/<name>`**: For bug fixes
  - Example: `fix/navbar-overlap`, `fix/mobile-padding`
- **`refactor/<name>`**: For non-functional cleanup or improvements
- **`chore/<name>`**: For CI config, documentation, tooling, etc.

---

## Pull Request Rules

- Always open a PR **into `dev`**, not `main`
- Name the PR descriptively (ex: `feat: add hero text component`)
- Use the [PR template](../.github/pull_request_template.md).
- Keep PRs focused and small (1 feature or fix per PR)
- Run all pre-commit checks (lint, type check, tests)

---

## Commit Message Convention

We loosely follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):
