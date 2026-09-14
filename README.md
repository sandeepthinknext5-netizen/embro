# EMBROSHYAL 🌟

Luxury Architectural Living, Modular Kitchens, Wardrobes & Bespoke Spaces.

## 🚀 Instant Vercel Deployment (Zero `node_modules` Needed)

This project is a high-performance, standalone web platform configured for **zero-configuration instant deployment on Vercel**.

- **Node Modules Required:** None (0 dependencies)
- **Build Step:** None needed (pure static HTML5 / Tailwind CDN / Lucide Icons / Vanilla JS)
- **Vercel Framework Preset:** `Other` (handled automatically via `vercel.json` with `"framework": null`)
- **Clean URLs:** Enabled (`/about`, `/contact`, `/modular-kitchens`, etc.)

### Deploying to Vercel:
1. Push this repository to GitHub.
2. In [Vercel Dashboard](https://vercel.com/):
   - Click **Add New Project** &rarr; Select your repository.
   - Framework Preset: **Other** (default detected via `vercel.json`).
   - Build Command: Leave blank / default.
   - Output Directory: Leave blank / default.
   - Click **Deploy**.
3. Your site will be live on Vercel global CDN within seconds with zero build errors!

---

## 💻 Local Development / Preview

To preview the website locally without installing any `node_modules`:

```bash
# Start the built-in HTTP server:
node server.js
# OR:
npm start
```

Visit: `http://localhost:3000` in your browser.
