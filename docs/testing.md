# Testing Guidelines (Jest + React Testing Library)

This project uses **Jest** with **React Testing Library (RTL)** for unit and integration testing. Follow these practices to keep tests consistent and meaningful.

## Guidelines

- **Test behavior:**
  Write tests from the perspective of the user (what’s rendered, what they can click, what text appears).
- **Keep tests small and fast:**
  Unit tests for components, integration tests for multiple components together.

## Project Setup

- All tests live in `__tests__/` folders and end with `.test.ts`
- Run all tests with:

```bash
npm test
```
