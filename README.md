# ASSU Website Redesign

This project aims to rebuild the ASSU (Arts & Science Students’ Union) website using a modern frontend and a headless WordPress backend. The goal is to create a maintainable, accessible, and responsive platform while preserving the content and structure from the [Wix prototype](https://jennykwon0712.wixsite.com/u-of-t-assu).

Design document [here](https://docs.google.com/document/d/1B0RA_o40j4AhZyEdWzGDMVanZiRAoG4CBDRSa0Lyhlo/edit?usp=sharing).

## Tech Stack

| Area       | Stack                                   |
| ---------- | --------------------------------------- |
| Frontend   | Next.js, React, Tailwind CSS, Shadcn UI |
| Backend    | WordPress (Bluehost) + REST API         |
| CI/CD      | GitHub Actions                          |
| Deployment | Vercel or GitHub Pages                  |

---

## Architecture

- **Frontend:** Static site with `getStaticProps`, Tailwind CSS, and CI via GitHub Actions
- **Backend:** WordPress provides dynamic content via REST API
- **Webhooks:** WordPress → GitHub Dispatch → Trigger site rebuild

## Contributors

Jason Li
Shirley Zhang
Stanley Pang
Rashu Sharda
# Trigger CI
