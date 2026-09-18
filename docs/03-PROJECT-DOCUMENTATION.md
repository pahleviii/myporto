# Dokumentasi Project — Portfolio Reza Pahlevi

| | |
|---|---|
| **Pemilik** | Reza Pahlevi |
| **Tipe** | Personal Portfolio Website |
| **Stack** | Next.js 15 + TypeScript + Tailwind CSS |
| **Status** | In Development |
| **Terakhir Diperbarui** | September 2026 |

---

## Daftar Isi

1. [Latar Belakang & Tujuan](#1-latar-belakang--tujuan)
2. [Tahap Perancangan](#2-tahap-perancangan)
3. [Design System](#3-design-system)
4. [Arsitektur & Struktur Project](#4-arsitektur--struktur-project)
5. [Komponen & Fitur](#5-komponen--fitur)
6. [Animasi & Interaksi](#6-animasi--interaksi)
7. [Data & Konten](#7-data--konten)
8. [Cara Menambah Konten](#8-cara-menambah-konten)
9. [Perintah Development](#9-perintah-development)
10. [Checklist Deploy](#10-checklist-deploy)
11. [Changelog](#11-changelog)

---

## 1. Latar Belakang & Tujuan

Portfolio ini dibangun sebagai **kartu nama digital** untuk Reza Pahlevi, fresh graduate Teknik Informatika Universitas Negeri Surabaya yang berminat di bidang web development dan UI/UX design.

### Tujuan utama:
- Menampilkan project-project yang telah dikerjakan secara profesional
- Memberikan first impression yang kredibel kepada recruiter dan klien freelance
- Menyediakan satu titik kontak yang mudah dibagikan
- Membuktikan kemampuan teknis secara langsung melalui kualitas website itu sendiri

### Target audiens:
- Recruiter / HR tech company
- Klien freelance / startup founder
- Sesama developer untuk kolaborasi atau networking

---

## 2. Tahap Perancangan

### Fase Riset (`docs/00-RESEARCH-REFERENCES.md`)
Dilakukan analisis terhadap portfolio developer terbaik dari berbagai sumber (Colorlib, Muzli, Gallereee). Pola yang diadopsi:
- Grid/list layout untuk project showcase
- Palet monokromatik (putih, abu-abu, hitam)
- Negative space yang besar
- Tipografi sebagai elemen desain utama
- Single-page dengan navigasi sederhana
- Animasi scroll/hover halus

### Fase BRD (`docs/01-BRD.md`)
Dokumen Business Requirements mendefinisikan scope fase 1:
- Landing page single-page (Hero, About, Projects, Skills, Contact)
- Data project dari file statis JSON
- Desain responsif mobile-first
- Deploy ke Vercel

**Di luar scope fase 1:** blog/CMS, autentikasi, backend database, multi-bahasa.

### Fase PRD (`docs/02-PRD.md`)
Product Requirements Document menjadi sumber kebenaran teknis:
- Design token warna dan tipografi ditetapkan
- Struktur data `projects.json` didefinisikan
- Struktur folder komponen ditentukan
- Functional requirements diprioritaskan (Must/Should/Could/Won't)

---

## 3. Design System

### Warna

| Token | Nilai | Penggunaan |
|---|---|---|
| `background` | `#FFFFFF` | Background halaman utama |
| `surface` | `#F5F5F5` | Background section alternatif, card |
| `border` | `#E5E5E5` | Border, divider |
| `text` | `#171717` | Teks utama (hampir hitam) |
| `text-muted` | `#6B7280` | Teks sekunder, deskripsi |
| `accent` | `#404040` | Link, tombol CTA, label tech stack |
| `accent-hover` | `#171717` | State hover pada elemen accent |

> **Catatan:** Warna aksen awalnya biru (`#2563EB`) lalu direvisi ke abu-abu gelap (`#404040`) untuk kesan lebih minimalis dan premium.

### Tipografi
- Font: **Inter** (via `next/font/google`, self-hosted)
- Heading: `font-bold`, `tracking-tight`
- Body: `leading-relaxed` (1.6 line height)
- Label kecil: `uppercase`, `tracking-widest`, `text-xs`

### Layout
- Max-width konten: `1200px`
- Padding horizontal responsif: `px-4 sm:px-6 lg:px-8`
- Breakpoints: mobile (`<768px`), tablet (`768px`), desktop (`1024px`)

### Hero Section (khusus)
- Background gelap: `#0A0A0A`
- Teks putih dan abu-abu
- Kontras tinggi untuk emphasis visual

---

## 4. Arsitektur & Struktur Project

```
Portfolio/
├── app/                        # Next.js App Router
│   ├── globals.css             # Global styles + CSS animations
│   ├── layout.tsx              # Root layout (font, metadata SEO)
│   └── page.tsx                # Landing page — render semua section
│
├── components/                 # Komponen UI per section
│   ├── Header.tsx              # Navigasi sticky + smart hide/show
│   ├── Hero.tsx                # Hero section dark background
│   ├── BrowserMockup.tsx       # CSS-only browser frame (dipakai di Hero)
│   ├── About.tsx               # Profil + bio + stats
│   ├── QuoteBanner.tsx         # Quote banner (antara About & Skills)
│   ├── Skills.tsx              # Tech stack dari skills.json
│   ├── ProjectGrid.tsx         # List semua project dari projects.json
│   ├── ProjectCard.tsx         # Baris project individual (list format)
│   └── Footer.tsx              # Contact + social links + copyright
│
├── hooks/                      # Custom React hooks
│   ├── useInView.ts            # IntersectionObserver untuk scroll reveal
│   └── useScrollDirection.ts  # Deteksi arah scroll untuk smart header
│
├── lib/                        # Utility functions (data access layer)
│   ├── projects.ts             # getAllProjects(), getFeaturedProjects(), dll
│   ├── skills.ts               # getAllSkills()
│   └── quotes.ts               # getAllQuotes(), getFirstQuote()
│
├── content/                    # Data statis (sumber kebenaran konten)
│   ├── projects.json           # Data project portfolio
│   ├── skills.json             # Data skill/tech stack
│   └── quotes.json             # Quote untuk QuoteBanner
│
├── public/
│   └── images/
│       ├── IMG-20241123-WA0081.jpg    # Foto profil
│       └── projects/                  # Thumbnail project (isi manual)
│
├── docs/                       # Dokumentasi project
│   ├── 00-RESEARCH-REFERENCES.md
│   ├── 01-BRD.md
│   ├── 02-PRD.md
│   └── 03-PROJECT-DOCUMENTATION.md  ← file ini
│
├── AGENTS.md                   # Panduan untuk AI coding agent
├── tailwind.config.ts          # Design token Tailwind
├── next.config.js
└── package.json
```

---

## 5. Komponen & Fitur

### `Header.tsx`
- Logo / nama "Reza Pahlevi" (link ke atas halaman)
- Navigasi desktop: About, Skills, Projects, Contact
- Tombol Resume (link ke `/resume.pdf`)
- Tombol Contact Me (`mailto:reza35553@gmail.com`)
- **Smart hide/show:** header menghilang saat scroll ke bawah, muncul kembali saat scroll ke atas
- Posisi `fixed` dengan `backdrop-blur` agar transparan

### `Hero.tsx`
- Background gelap (`#0A0A0A`) sebagai satu-satunya section dark
- Layout 2 kolom: teks kiri, BrowserMockup kanan
- Headline: *"Building products that **actually** ship."*
- Tagline kecil, deskripsi singkat, 2 tombol CTA
- Animasi word-by-word fade-in dengan stagger delay

### `BrowserMockup.tsx`
- CSS-only browser window (tidak butuh gambar/screenshot)
- Traffic lights merah/kuning/hijau
- Address bar dengan ikon lock SVG dan URL dinamis
- Skeleton UI yang mensimulasikan tampilan portfolio
- Props: `url`, `title`, `className`

### `About.tsx`
- Foto profil bulat kecil (`w-24 h-24`) di atas konten
- Layout single column, `max-w-2xl` terpusat
- Bio 3 paragraf
- 4 stat card: S1 UNESA, Projects (dengan counter animasi), Web Focus, Open to Work

### `QuoteBanner.tsx`
- Background `surface` dengan border atas-bawah
- Quote besar bold, nama author kecil uppercase
- Data dari `content/quotes.json` — ganti quote cukup edit JSON
- Render null jika `quotes.json` kosong (graceful fallback)

### `Skills.tsx`
- Data dari `content/skills.json` (data-driven, tidak hardcoded)
- 4 kategori: Frontend, Backend, Tools, Interests
- Label kategori uppercase kecil berwarna `accent`
- Skill ditampilkan sebagai **pill badges** `rounded-full`
- Hover: border berubah ke `accent`, teks gelap

### `ProjectGrid.tsx`
- Render semua project dari `content/projects.json`
- Layout list vertikal (`flex flex-col`)
- Heading section dengan scroll reveal stagger

### `ProjectCard.tsx`
- Format **list row** (bukan card dengan thumbnail)
- Kiri: tech stack labels → judul → deskripsi
- Kanan: tombol "View Repo" (GitHub) + "Live Demo" (jika ada)
- Hover: konten geser 2px kanan, background highlight subtle
- `demoUrl: null` → tombol Live Demo tidak muncul

### `Footer.tsx`
- Section contact dengan heading "Let's Connect"
- Social icons: GitHub, LinkedIn, Instagram, Email, WhatsApp
- Quick Links navigasi
- Copyright dengan tahun dinamis
- Kontak:
  - Email: `reza35553@gmail.com`
  - WhatsApp: `085748913967` (link `wa.me/6285748913967`)
  - GitHub: `github.com/pahleviii`
  - LinkedIn: `linkedin.com/in/pahleviii`
  - Instagram: `instagram.com/rezapahlevi1511`

---

## 6. Animasi & Interaksi

Semua animasi mengikuti prinsip **tidak overused** — digunakan hanya untuk meningkatkan UX, bukan dekorasi.

### 1. Smart Header (Hide/Show on Scroll)
- **Hook:** `useScrollDirection.ts`
- Scroll ke bawah lebih dari 8px → header slide ke atas (`-translate-y-full`)
- Scroll ke atas → header slide kembali (`translate-y-0`)
- Transisi `duration-300 ease-in-out`

### 2. Hero Word Fade-in
- **CSS:** `@keyframes wordFadeIn` + class `.hero-word`
- Setiap elemen Hero punya `animation-delay` berbeda (stagger 100-200ms)
- Urutan: tagline → kata headline satu per satu → deskripsi → tombol → mockup
- Kata *"actually"* punya typing cursor (`|`) yang berkedip

### 3. Scroll Reveal (Fade Up)
- **Hook:** `useInView.ts` (IntersectionObserver, threshold 10-15%)
- **CSS:** class `.fade-up` + `.in-view` + `.fade-up-delay-1` s/d `.fade-up-delay-4`
- Diterapkan pada: About, Skills (per kategori), ProjectGrid
- Berjalan satu kali saat masuk viewport (`once: true`)

### 4. Project Row Hover
- **CSS Tailwind:** `group`, `group-hover:translate-x-1`, `hover:bg-surface/40`
- Hover baris: konten geser 2px ke kanan, background muncul tipis, judul gelap
- Transisi `duration-200` — cepat dan responsif

### 5. Number Counter
- **Komponen:** `CountUp` (inside `About.tsx`)
- Angka count dari 0 ke target saat section masuk viewport
- Durasi 1200ms, berjalan satu kali
- Saat ini dipakai untuk stat "3+ Projects"

### Accessibility
Semua animasi dinonaktifkan untuk pengguna yang mengaktifkan:
```css
@media (prefers-reduced-motion: reduce) { ... }
```

---

## 7. Data & Konten

### `content/projects.json`

Skema per entri:

```json
{
  "slug": "kebab-case-unik",
  "title": "Judul Project",
  "description": "1-2 kalimat deskripsi.",
  "techStack": ["Tech1", "Tech2"],
  "repoUrl": "https://github.com/pahleviii/nama-repo",
  "demoUrl": "https://demo.vercel.app atau null",
  "thumbnail": "/images/projects/slug.png",
  "featured": true
}
```

**Project saat ini:**

| Judul | Tech Stack | Featured |
|---|---|---|
| Layanan Pengaduan Masyarakat | Laravel, Vue 3, Vite, MySQL, Tailwind CSS | Ya |
| Website Desa Banjarsari | HTML, CSS, JavaScript | Tidak |
| RealV Coffee | Next.js, TypeScript | Tidak |

### `content/skills.json`

```json
[
  { "category": "Frontend", "items": ["React", "Next.js", "Vue 3", ...] },
  { "category": "Backend",  "items": ["Laravel", "Node.js", ...] },
  { "category": "Tools",    "items": ["Git", "GitHub", "Figma", ...] },
  { "category": "Interests","items": ["UI/UX Design", ...] }
]
```

### `content/quotes.json`

```json
[
  { "id": "1", "text": "...", "author": "..." }
]
```

Quote pertama di array adalah yang ditampilkan. Pindahkan entri ke posisi pertama untuk mengganti quote yang muncul.

---

## 8. Cara Menambah Konten

### Tambah Project Baru
1. Buka `content/projects.json`
2. Tambahkan entri baru mengikuti skema di atas
3. Letakkan di awal array jika `featured: true`, akhir array jika `false`
4. Tambahkan thumbnail ke `public/images/projects/<slug>.png`
5. Tidak perlu menyentuh kode komponen sama sekali

### Ganti Quote
1. Buka `content/quotes.json`
2. Pindahkan quote yang diinginkan ke posisi pertama array, atau edit teks langsung

### Update Skill
1. Buka `content/skills.json`
2. Tambah/hapus item di array `items` sesuai kategori
3. Bisa tambah kategori baru — komponen akan render otomatis

### Update Kontak / Social Link
Edit langsung di `components/Footer.tsx` dan `components/Header.tsx` (untuk tombol Contact Me).

---

## 9. Perintah Development

```bash
# Install dependencies
npm install

# Jalankan dev server (localhost:3000)
npm run dev

# Jalankan dengan akses dari device lain dalam network
npm run dev -- --hostname 0.0.0.0

# Build production
npm run build

# Jalankan production server
npm run start

# Cek lint
npm run lint
```

---

## 10. Checklist Deploy

Sebelum push ke production, pastikan:

- [ ] `npm run build` sukses tanpa error
- [ ] Semua `repoUrl` dan `demoUrl` di `projects.json` valid (tidak 404)
- [ ] File `public/resume.pdf` sudah ada (tombol Resume di header)
- [ ] Thumbnail project sudah ada di `public/images/projects/`
- [ ] Cek tampilan di 3 breakpoint: mobile (375px), tablet (768px), desktop (1200px)
- [ ] Cek animasi berjalan dengan baik di semua section
- [ ] Lighthouse Performance >= 90
- [ ] Lighthouse Accessibility >= 90
- [ ] Tidak ada `console.log` tersisa
- [ ] Semua link sosial (GitHub, LinkedIn, Instagram, WhatsApp) valid

---

## 11. Changelog

### v0.1.0 — Initial Setup
- Inisialisasi project Next.js 15 + TypeScript + Tailwind CSS
- Struktur folder sesuai PRD §7
- File konfigurasi: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `next.config.js`

### v0.2.0 — Static UI (Semua Komponen)
- Buat semua komponen: `Header`, `Hero`, `About`, `Skills`, `ProjectGrid`, `ProjectCard`, `Footer`
- `app/layout.tsx` dengan metadata SEO dasar
- `app/page.tsx` sebagai landing page
- `content/projects.json` dengan 4 data dummy
- `lib/projects.ts` utility functions

### v0.3.0 — Foto Profil
- Foto profil asli ditambahkan ke `public/images/`
- `About.tsx` diupdate dari placeholder emoji ke `next/image`

### v0.4.0 — Tambah 3 Project Asli
- Tambah entri ke `projects.json`: Layanan Pengaduan Masyarakat, Website Desa Banjarsari, RealV Coffee
- Semua menggunakan `repoUrl` ke `github.com/pahleviii`

### v0.5.0 — Redesign Visual
- **Design token:** aksen diubah dari biru `#2563EB` ke abu-abu `#404040`, tambah `accent-hover: #171717`
- **Hero section:** background dark `#0A0A0A`, layout 2 kolom, headline dengan italic emphasis
- **Projects section:** dari grid 3 kolom ke list vertikal (format baris)
- **QuoteBanner:** komponen baru antara About dan ProjectGrid, data dari `quotes.json`
- **BrowserMockup:** CSS-only browser frame di Hero section
- Buat `content/quotes.json` dan `lib/quotes.ts`

### v0.6.0 — Data Asli & Cleanup
- Hapus 4 project dummy dari `projects.json`
- Update email ke `reza35553@gmail.com`
- Update social links: GitHub/LinkedIn ke `pahleviii`, ganti Twitter ke Instagram `rezapahlevi1511`
- Bio `About.tsx` diubah ke narasi asli (fresh graduate TI UNESA)
- Stats diperbarui: hapus "100% Client Satisfaction", tambah "S1 Teknik Informatika UNESA"

### v0.7.0 — Animasi & Interaksi
- Tambah `hooks/useInView.ts` dan `hooks/useScrollDirection.ts`
- Update `globals.css` dengan keyframes animasi
- **Header:** smart hide/show on scroll (`fixed` + `useScrollDirection`)
- **Hero:** word-by-word fade-in dengan stagger delay + typing cursor
- **ProjectCard:** hover translate + background highlight
- **About:** scroll reveal + `CountUp` number counter
- **Skills & ProjectGrid:** scroll reveal fade-up dengan stagger

### v0.8.0 — Revisi About & Skills
- **About:** layout dari 2-col menjadi single column, foto dari `aspect-square` ke bulat kecil `w-24 h-24`
- **Skills:** data dipindah dari hardcoded ke `content/skills.json` + `lib/skills.ts`
- Layout skills dari card grid ke pill badges per kategori
- Skills diperbarui sesuai tech stack project asli

### v0.8.1 — Tambah Kontak WhatsApp
- `Footer.tsx`: tambah icon Phone dengan link `wa.me/6285748913967`
- Import `Phone` dari lucide-react
