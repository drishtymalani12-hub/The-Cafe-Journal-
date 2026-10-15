# The Cafe Journal

> **Tagline:** Discover Cafes. Sip Slowly. Live Fully.  
> **Topic:** Cafe culture, coffee drinks, cafe food, desserts, cafe experiences, and mindful lifestyle.

---

## ☕ Project Overview

**The Cafe Journal** is an editorial-style cafe publication built entirely with **vanilla HTML5, CSS3, and JavaScript** (no frameworks, no external runtime dependencies). It is structured for clean static hosting on **GitHub Pages**, **Vercel**, or **Netlify**, with comprehensive Technical SEO, Answer Engine Optimization (AEO), Schema.org structured data (JSON-LD), Open Graph metadata, and responsive mobile-first typography.

### Design & Aesthetic
- **Warm Cream Canvas:** `#F7F3EC`
- **Espresso Brown:** `#4A3028`
- **Terracotta Accent:** `#B86F52`
- **Dark Charcoal:** `#292724`
- **Typography:** *Playfair Display* for editorial headings, *Lato* for body prose.
- **Zero-Pill Discipline:** Clean, unboxed metadata separated by typographic dots (`·`).

---

## 📁 Project Structure

```
├── index.html                   # Homepage (Hero, search, categories, featured & latest)
├── blogs.html                   # All 10 articles with live search & category tabs
├── about.html                   # About Us page (Mission, editorial pillars, reviewer team)
├── 404.html                     # Custom 404 error page ("This Cup Is Empty")
├── css/
│   └── style.css                # Pure CSS3 stylesheet with variables & responsive styles
├── js/
│   └── script.js                # Vanilla JavaScript (search filter, progress bar, mobile drawer)
├── images/                      # Optimized high-resolution cafe imagery
│   ├── cafe-interior.jpg
│   ├── latte-art.jpg
│   ├── cafe-food.jpg
│   ├── cafe-desserts.jpg
│   ├── cafe-date.jpg
│   ├── study-cafe.jpg
│   ├── coffee-beans.jpg
│   ├── cafe-photography.jpg
│   └── cafe-barista.jpg
├── blogs/                       # 10 dedicated, full-length HTML article pages
│   ├── types-of-cafes.html
│   ├── coffee-drinks-for-beginners.html
│   ├── popular-cafe-food.html
│   ├── cafe-desserts.html
│   ├── cafe-date-ideas.html
│   ├── cafes-for-studying.html
│   ├── coffee-beans-and-roasts.html
│   ├── cafe-photography-tips.html
│   ├── cafe-etiquette.html
│   └── choosing-a-cafe.html
├── robots.txt                   # Search crawler directives referencing sitemap
├── sitemap.xml                  # Full XML sitemap with all URLs and canonical paths
├── favicon.svg                  # Brand SVG favicon
└── vercel.json                  # Vercel deployment configuration
```

---

## 🚀 How to Test the Website Locally

### Option 1: Using the Built-In Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. All sub-pages and articles are immediately accessible.

### Option 2: Using Any Static HTTP Server (Python / npx serve)
Because this project uses vanilla HTML, CSS, and JS, you can serve it with any static server:
```bash
# Using Python 3:
python3 -m http.server 8000

# Or using npx serve:
npx serve .
```
Navigate to `http://localhost:8000`.

---

## 🐙 How to Upload to GitHub

1. Open your terminal in this project directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Complete The Cafe Journal blog website"
   ```
2. Create a new repository on [GitHub.com](https://github.com/new) (e.g. `the-cafe-journal`).
3. Link your local repo to GitHub and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/the-cafe-journal.git
   git push -u origin main
   ```

---

## ▲ How to Deploy on Vercel

1. Log in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **"Add New..."** &rarr; **"Project"**.
3. Select your `the-cafe-journal` repository.
4. In the configuration settings:
   - **Framework Preset:** Select **"Other"** (or leave as Vite / Static HTML).
   - **Root Directory:** `./`
   - **Build Command:** Can be left blank or `npm run build`
   - **Output Directory:** Can be left blank for static root deployment or `dist` if building with Vite.
5. Click **"Deploy"**. Vercel will assign you a live production URL, such as:  
   `https://the-cafe-journal-yourname.vercel.app`

---

## 🔍 Canonical Domain Configuration & Google Search Console Submission

### 1. Update the Canonical URLs & Sitemap
Once Vercel assigns your live domain (e.g., `https://the-cafe-journal-demo.vercel.app`):
1. Open `sitemap.xml` and replace `https://the-cafe-journal.vercel.app` with your actual live domain.
2. Open `robots.txt` and verify the `Sitemap:` URL matches your live domain.
3. In each HTML file (`index.html`, `blogs.html`, `about.html`, and each file in `blogs/`), update the `<link rel="canonical" href="...">` tag to your actual Vercel URL.

### 2. Submit the Sitemap in Google Search Console
1. Visit [Google Search Console](https://search.google.com/search-console).
2. Click **"Add Property"** and enter your Vercel URL as a **URL Prefix** (e.g., `https://the-cafe-journal-yourname.vercel.app`).
3. Verify ownership using HTML Tag verification or DNS verification.
4. In the left navigation, click **"Sitemaps"**.
5. Under **"Add a new sitemap"**, enter `sitemap.xml` and click **"Submit"**.
6. Google will fetch your sitemap and begin indexing all 10 articles and core pages.

---

## 📈 SEO & AEO Optimization Summary

- **Single Main H1:** Each page features exactly one targeted H1.
- **AEO Direct Answer Blocks:** Selected articles include question-based H2 headings followed by a direct answer block for AI search snippets (Google SGE, Perplexity, Bing Copilot).
- **Schema.org Structured Data:** `WebSite` & `SearchAction` on home, `CollectionPage` on archive, and `BlogPosting` with author/publisher attributes on each article.
- **Internal Linking:** Every article contains relevant, contextual anchor links to related guides.
- **Image Optimization:** Explicit `width` and `height` attributes to prevent Cumulative Layout Shift (CLS), descriptive keyword-rich `alt` text, and `loading="lazy"` on below-the-fold assets.
