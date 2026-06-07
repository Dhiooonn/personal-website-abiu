# ABIU — Personal Website
### *Artist Portfolio · Minimalist Modern*

> Website personal ABIYYU IBRAHIM sebagai seniman Indonesia, dibangun dengan HTML, CSS, dan JavaScript murni.

---

## 👤 Tentang ABIU

**ABIYYU IBRAHIM** — akrab disapa **ABIU** — adalah seorang seniman Indonesia yang berbasis di Semarang. Karya-karyanya lahir dari pencarian mendalam akan definisi diri dan pemahaman tentang esensi kehidupan itu sendiri.

Melalui bahasa visual yang kuat dan jernih, ABIU menangkap pengalaman manusia secara kolektif — lalu mengungkapkan universalitasnya lewat eksplorasi narasi yang sangat personal. Setiap karya adalah sebuah percakapan antara dirinya dengan dunia; sebuah jembatan antara yang terasa pribadi dan yang dirasakan bersama.

> *"My art rises from the search for self-definition and understanding the essence of life itself."*
> — ABIYYU IBRAHIM

---

## 📌 Project Overview

| Key | Value |
|-----|-------|
| **Pemilik** | ABIYYU IBRAHIM (ABIU) |
| **Profesi** | Seniman / Visual Artist |
| **Domisili** | Semarang, Indonesia |
| **Type** | Personal Artist Portfolio Website |
| **Style** | Minimalist Modern Dark |
| **Stack** | HTML5, CSS3, Vanilla JavaScript |
| **Theme** | Dark — Black & Off-white |
| **Status** | 🔧 In Development |

---

## 🎯 Tujuan Website

- Memperkenalkan ABIU sebagai seniman kepada audiens yang lebih luas
- Menampilkan galeri karya seni dengan presentasi yang kuat dan tak terganggu
- Menyampaikan narasi dan filosofi di balik setiap karya
- Membuka pintu untuk kolaborasi, pameran, dan pembelian karya
- Menjadi *digital home* yang mencerminkan identitas artistik ABIU

---

## 🗂️ Site Structure

```
personal-website/
│
├── index.html              # Entry point utama
├── website.md              # Dokumentasi project
│
└── assets/
    ├── css/
    │   └── style.css       # Global styles, variables, layout, animations
    │
    ├── js/
    │   └── script.js       # Cursor, navbar, scroll reveal, interactions
    │
    └── images/
        ├── profile.jpg         # Foto / potret ABIU
        └── gallery/            # Foto karya seni ABIU
            ├── work-01.jpg
            ├── work-02.jpg
            └── ...
```

---

## 📄 Sections & Konten

### 1. `#hero` — Landing / Intro
**Tujuan:** Kesan pertama yang kuat — identitas ABIU dalam satu layar.

```
Hi, I'm ABIU!
─────────────────────────────────────
Visual Artist · Semarang, Indonesia

[ Explore Gallery ]  [ About Me ]

● Available for collaboration
```

- Nama besar dengan bold serif font — terasa seperti karya seni itu sendiri
- Tagline: *"Visual Artist · Semarang, Indonesia"*
- Dua CTA button: **Explore Gallery** dan **About Me**
- Status availability (hijau dot — "Open for collaboration / commission")
- Subtle scroll indicator

---

### 2. `#about` — Tentang ABIU
**Tujuan:** Membangun koneksi personal antara pengunjung dan sang seniman.

**Konten yang diisi:**
```
Foto profil ABIU (potret, rasio 3:4)

Bio:
"Saya ABIYYU IBRAHIM, seorang seniman Indonesia yang tinggal
di Semarang. Karya saya lahir dari pencarian akan definisi diri
dan pemahaman terhadap esensi kehidupan.

Lewat bahasa visual yang kuat dan jelas, saya berupaya menangkap
pengalaman manusia yang kolektif — dan mengungkap universalitasnya
melalui eksplorasi narasi yang personal.

Jelajahi galeri dan portofolio saya untuk menyelami dunia saya."

[ Download Artist Statement ]
```

---

### 3. `#gallery` — Gallery
**Tujuan:** Showcase karya seni ABIU — ruang utama website ini.

- Grid masonry / bento — 2 sampai 3 kolom
- Setiap item: gambar karya + judul + tahun
- Hover: judul muncul dengan overlay tipis
- Klik: lightbox atau link ke halaman detail karya
- Tidak ada teks berlebihan — biarkan karya berbicara sendiri

---

### 4. `#portfolio` — Portfolio / Series
**Tujuan:** Mengelompokkan karya ke dalam seri atau project artistik.

Setiap portfolio card berisi:
- Thumbnail series
- Nama series / project
- Jumlah karya dalam series
- Tahun
- Deskripsi singkat konsep
- Tombol: **View Series →**

---

### 5. `#contact` — Kontak & CTA
**Tujuan:** Mendorong pengunjung untuk terhubung, berkolaborasi, atau membeli karya.

```
Let's create
together.
─────────────────────────────────────
Terbuka untuk kolaborasi seni, pameran,
komisi karya, dan diskusi kreatif.

abimanyuibrahim1042@gmail.com

[ Commission a Work ]

Instagram · WhatsApp · Email
```

---

## 📣 Call-to-Action (CTA)

Berikut daftar CTA yang digunakan di seluruh halaman:

| Lokasi | CTA Text | Aksi |
|--------|----------|------|
| Hero | **Explore Gallery** | Scroll ke `#gallery` |
| Hero | **About Me** | Scroll ke `#about` |
| About | **Download Artist Statement** | Download PDF |
| Portfolio card | **View Series →** | Buka halaman series |
| Contact | **Commission a Work** | Buka form / email |
| Contact | **Get In Touch** | `mailto:` link |
| Footer | **↑ Back to Top** | Scroll ke atas |

> **Prinsip CTA:** Setiap CTA harus terasa seperti undangan, bukan perintah.  
> Gunakan bahasa yang hangat dan artistik — bukan generik.

---

## 🎨 Design System

### Filosofi Visual
Website ABIU dirancang seperti sebuah *white cube gallery* versi digital — bersih, gelap, dan memberikan ruang penuh bagi karya untuk bernafas. Tipografi bold serif mencerminkan ketegasan ekspresi artistiknya; whitespace yang luas menciptakan ketenangan dan fokus.

### Color Palette

```css
:root {
  --bg:          #080808;   /* background utama — hitam pekat */
  --bg-2:        #0f0f0f;   /* background section alternate */
  --surface:     #141414;   /* card / surface */
  --border:      #1e1e1e;   /* garis pembatas */
  --text:        #ede9e3;   /* teks utama — off-white hangat */
  --text-muted:  #666660;   /* teks sekunder */
  --em:          #c9b99a;   /* aksen — krem emas, warna seni */
}
```

### Typography

```css
/* Display / Heading — Bold Serif (artistik, karakter kuat) */
font-family: 'Cormorant Garamond', Georgia, serif;

/* Body / UI — Clean Modern Sans */
font-family: 'Syne', sans-serif;
```

| Role | Size | Weight |
|------|------|--------|
| Hero Name | `clamp(3.5rem, 10vw, 8.5rem)` | 700 |
| Section Title | `clamp(2.4rem, 5vw, 4rem)` | 700 |
| Body Text | `1rem – 1.1rem` | 400 |
| Label / Caption | `0.7rem` | 500 · letter-spacing: 0.2em |

### Spacing Scale
```
4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128px
```

### Breakpoints
```css
@media (max-width: 768px)  { /* Tablet & Mobile */ }
@media (max-width: 480px)  { /* Small Mobile   */ }
```

---

## ✨ Interactions & Animations

| Elemen | Perilaku |
|--------|----------|
| Custom cursor | Dot kecil + lingkaran follower smooth (desktop) |
| Hero text | Fade-in + slide up staggered saat load |
| Navbar | Transparan → solid saat scroll; hide saat scroll down |
| Section reveal | Fade up saat masuk viewport (IntersectionObserver) |
| Gallery item | Overlay judul muncul saat hover |
| Portfolio card | Border + slight lift saat hover |
| CTA button | Border invert saat hover |
| Scroll indicator | Animated line — loop turun |

---

## 🛠️ Tech Stack

### HTML5
- Semantic: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Meta SEO: `og:title`, `og:image`, `og:description`, `twitter:card`
- Accessibility: `aria-label`, `alt` text, keyboard navigable

### CSS3
- CSS Custom Properties untuk design token
- CSS Grid + Flexbox untuk layout
- `clamp()` untuk fluid typography & spacing
- `@keyframes` + `transition` untuk animasi
- Zero framework — pure CSS

### JavaScript (Vanilla)
- `IntersectionObserver` — scroll reveal
- `requestAnimationFrame` — smooth cursor follower
- `window.scrollY` — navbar behavior
- Lightbox gallery (vanilla, tanpa library)
- Zero dependencies — no jQuery, no library besar

---

## 🔠 Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Syne:wght@400;500;700&display=swap" rel="stylesheet">
```

---

## 🚀 Deployment

| Platform | Catatan |
|----------|---------|
| **Vercel** | Paling mudah, auto-deploy dari GitHub |
| **Netlify** | Support form contact gratis |
| **GitHub Pages** | Gratis, langsung dari repo |

```bash
git init
git add .
git commit -m "init: abiu personal website"
git remote add origin https://github.com/abiu/personal-website.git
git push -u origin main
# Aktifkan GitHub Pages di Settings > Pages
```

---

## 📋 Development Checklist

### Setup
- [ ] Struktur folder sesuai diagram
- [ ] CSS variables & reset
- [ ] Google Fonts terpasang
- [ ] Favicon (inisial "A" atau logo ABIU)

### Konten
- [ ] Tulis bio ABIU di section About
- [ ] Upload foto profil (`assets/images/profile.jpg`)
- [ ] Upload foto karya ke `assets/images/gallery/`
- [ ] Isi data gallery & portfolio di HTML
- [ ] Pasang link email, Instagram, WhatsApp

### Sections
- [ ] Hero + CTA buttons
- [ ] About + foto profil
- [ ] Gallery grid + hover effect
- [ ] Portfolio series cards
- [ ] Contact + CTA "Commission a Work"

### Polish
- [ ] Responsive mobile (test 375px)
- [ ] Scroll reveal aktif semua section
- [ ] Navbar behavior smooth
- [ ] Custom cursor (disable di mobile)
- [ ] Meta tag SEO & OG image
- [ ] Test: Chrome, Firefox, Safari

### Deploy
- [ ] Push ke GitHub
- [ ] Deploy ke Vercel / GitHub Pages
- [ ] Custom domain (opsional: `abiu.id` atau `abiyyu.com`)
- [ ] PageSpeed Insights — target > 90

---

## 💡 Referensi Inspirasi

- [sarahreinertsenart.com](https://sarahreinertsenart.com) — artist portfolio bersih
- [awwwards.com/sites/portfolio](https://awwwards.com) — portfolio terbaik dunia
- [davidiwanow.com](https://davidiwanow.com) — dark minimal artist site
- Figma referensi ABIU — dark, bold serif, editorial layout

---

## 📝 Catatan Akhir

> Website ABIU bukan sekadar portofolio digital —  
> ini adalah **ruang seni** tempat setiap pengunjung diajak menyelami dunianya.
>
> *"Explore my gallery and portfolio to dive into my world."*  
> — ABIYYU IBRAHIM

---

*Last updated: Juni 2026 · ABIYYU IBRAHIM Personal Website*