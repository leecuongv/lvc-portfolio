# Lê Văn Cường — Software Engineer & Head of ERP

> **Personal Engineering Portfolio** designed with the **Apple Design Ethos**. Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-GitHub_Pages-0071e3?style=for-the-badge&logo=github)](https://leecuongv.github.io/lvc-portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

##  Design & Engineering Highlights

- **Apple Design Ethos**: Frosted glassmorphism (`backdrop-filter: blur(20px)`), curated HSL typography, sleek Bento grid layout, responsive pill navigation, and ultra-smooth micro-interactions.
- **Bilingual Architecture**: Instant toggling between **English (US)** and **Tiếng Việt**, with persistent language preferences in `localStorage` and dynamic SEO metadata.
- **Dark & Light Mode**: Defaulting to Apple Pro dark aesthetic (`#000000`), with persistent theme state and system color adaptation.
- **Performance Optimized**: Sub-second load times, progressive JPEG compression (< 50KB), zero Cumulative Layout Shift (CLS), and modular tree-shaking via Vite.
- **Production Ready**: Fully automated CI/CD deployment to GitHub Pages via `gh-pages`.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, TypeScript 5.8, Vite 6 |
| **Styling & Effects** | Tailwind CSS, Custom Apple CSS Design System, Frosted Glass Blur |
| **Icons & Typography** | FontAwesome 6, Inter Font Family |
| **Deployment** | GitHub Pages (`gh-pages`) |

---

## 📂 Project Structure

```
lvc-portfolio/
├── public/                 # Static assets (Optimized avt.jpg, custom favicon.svg)
├── src/
│   ├── components/         # Modular Apple Bento components
│   │   ├── Header.tsx      # Frosted glass nav, active scrollspy, theme/lang controls
│   │   ├── HeroSection.tsx # Apple M4-style silicon spec card, avatar, bio & pills
│   │   ├── ProjectsSection.tsx       # Flagship bento card & featured repositories
│   │   ├── ExperienceSection.tsx     # Interactive milestone roadmap & education
│   │   ├── SkillsSection.tsx         # Bento tech specs & dynamic icon resolution
│   │   ├── CertificatesSection.tsx   # Verified AWS & Coursera credentials
│   │   ├── HonorsAndAwardsSection.tsx# Filterable recognitions & proofs
│   │   ├── AboutSection.tsx          # Direct contact channels & soft skills
│   │   └── Footer.tsx                # Apple colophon, sitemap & back-to-top
│   ├── LanguageContext.tsx # Context for reactive EN/VI localization
│   ├── constants.tsx       # English content & engineering specs
│   ├── constants_vi.tsx    # Vietnamese content & engineering specs
│   ├── types.ts            # Strongly-typed TypeScript interfaces
│   └── index.css           # Apple design tokens, frosted glass utilities
├── index.html              # HTML5 entry with OpenGraph & Twitter Card SEO
├── App.tsx                 # Root layout & theme provider
└── vite.config.ts          # Vite build configuration with GitHub Pages base path
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **pnpm** / **yarn**

### 1. Clone the repository

```bash
git clone https://github.com/leecuongv/lvc-portfolio.git
cd lvc-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Visit `http://localhost:5173/lvc-portfolio/` in your browser.

### 4. Build for production

```bash
npm run build
```

The production-ready bundle will be output to the `dist/` folder.

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 📬 Contact & Connect

- **Email**: [cuonglevan.work@gmail.com](mailto:cuonglevan.work@gmail.com)
- **Phone**: [+84 389 365 835](tel:+84389365835)
- **LinkedIn**: [linkedin.com/in/leecuongv](https://linkedin.com/in/leecuongv)
- **GitHub**: [github.com/leecuongv](https://github.com/leecuongv)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
