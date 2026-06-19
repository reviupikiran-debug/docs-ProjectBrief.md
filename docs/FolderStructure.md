# Folder Structure — Undangan Digital SEO System

---

## 1. Tujuan Struktur
Menentukan arsitektur folder agar sistem:
- scalable hingga 500+ halaman kota
- modular dan reusable
- siap untuk programmatic SEO
- mudah dideploy ke Cloudflare Pages

---

## 2. Struktur Project Utama

momen-undangan-seo/
│
├── docs/
│   ├── ProjectBrief.md
│   ├── Sitemap.md
│   └── FolderStructure.md
│
├── data/
│   └── cities.json
│
├── src/
│   ├── pages/
│   ├── components/
│   ├── layouts/
│   ├── styles/
│   └── data/
│
├── public/
├── package.json
└── astro.config.mjs

---

## 3. Penjelasan Folder

### /docs
Berisi blueprint sistem dan dokumentasi pengembangan.

### /data
Berisi data mentah untuk programmatic SEO.
Contoh:
- cities.json (database kota)

### /src/pages
Routing website:
- homepage
- halaman kota (dynamic route)
- blog
- halaman statis

### /src/components
Komponen UI reusable:
- Hero
- Navbar
- Footer
- CTA
- FAQ

### /src/layouts
Template halaman utama (base layout):
- struktur HTML
- SEO meta
- wrapper global

### /public
Asset statis:
- gambar
- logo
- favicon

---

## 4. Dynamic SEO System

Struktur utama:

/src/pages/undangan-digital/[city].astro

Akan membaca:
- data/cities.json

Menghasilkan:
- /undangan-digital-jakarta
- /undangan-digital-bandung
- /undangan-digital-surabaya

---

## 5. Prinsip Arsitektur

- separation of concerns
- data-driven pages
- reusable components
- SEO-first structure
- minimal duplication

---

## 6. Skalabilitas

Struktur ini dirancang untuk:
- 10 halaman awal (MVP)
- 100 halaman (growth phase)
- 500+ halaman (scale SEO system)

---

## 7. Tujuan Akhir

Mengubah website menjadi:
- mesin SEO otomatis
- generator halaman kota
- sistem lead generation terstruktur