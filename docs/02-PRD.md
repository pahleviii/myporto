# Product Requirements Document (PRD)
## Personal Portfolio — Reza Pahlevi

| | |
|---|---|
| **Turunan dari** | 01-BRD.md |
| **Stack** | Next.js (App Router) + Tailwind CSS |
| **Deploy Target** | Vercel |
| **Status** | Draft v1.0 |

## 1. Ringkasan Produk
Website portofolio satu halaman (dengan opsi halaman detail per-project) yang menampilkan profil Reza Pahlevi sebagai Software/Web Developer beserta showcase project dengan link repository, dibangun dengan Next.js + Tailwind CSS, bergaya visual minimalis putih–abu-abu, di-deploy ke Vercel.

## 2. Design System (Wajib diikuti oleh Stitch AI & VSCode Agent)
### Warna
```
--color-background: #FFFFFF
--color-surface:    #F5F5F5   /* card / section alternatif */
--color-border:     #E5E5E5
--color-text:       #171717   /* hampir hitam, bukan pure black */
--color-text-muted: #6B7280   /* abu-abu untuk deskripsi/secondary text */
--color-accent:     #2563EB   /* aksen tipis untuk link/hover/CTA — bisa diganti */
```
### Tipografi
- Font: `Inter` atau `Geist Sans` (via next/font, self-hosted agar cepat).
- Heading: bold, tracking tight.
- Body: regular, line-height nyaman (1.6).

### Layout
- Max-width konten: `1200px`, dengan padding horizontal responsif.
- Grid project: 3 kolom (desktop) → 2 kolom (tablet) → 1 kolom (mobile).
- Spacing konsisten pakai skala Tailwind default (4, 8, 12, 16, 24, 32, 48, 64px).

## 3. Struktur Halaman (Sitemap)
```
/               → Landing page (single-page, semua section)
/project/[slug] → (opsional, fase 1.5) halaman detail per-project
```

### Section pada Landing Page:
1. **Header/Nav** — nama "Reza Pahlevi", nav link (About, Projects, Contact), tombol CTA (Resume/CV atau Hire Me).
2. **Hero** — nama, tagline singkat (contoh: "Software/Web Developer"), deskripsi 1-2 kalimat, CTA utama (lihat project / hubungi).
3. **About** — bio singkat, foto (opsional), highlight pengalaman.
4. **Skills/Tech Stack** — daftar teknologi yang dikuasai, dalam bentuk badge/chip.
5. **Projects Showcase** — grid card project, tiap card memuat:
   - Thumbnail/screenshot
   - Judul project
   - Deskripsi singkat (1-2 kalimat)
   - Badge tech stack yang dipakai
   - Link "View Repo" (GitHub) dan/atau "Live Demo"
6. **Contact/Footer** — email, link LinkedIn/GitHub, form kontak sederhana (opsional: pakai mailto atau Formspree), copyright.

## 4. Functional Requirements
| ID | Requirement | Prioritas |
|---|---|---|
| FR-01 | Sistem harus menampilkan daftar project dari satu sumber data terpusat (`content/projects.json`) | Must |
| FR-02 | Setiap project card harus punya link ke repository GitHub | Must |
| FR-03 | Website harus responsif di breakpoint mobile/tablet/desktop | Must |
| FR-04 | Website harus punya CTA kontak yang jelas & berfungsi | Must |
| FR-05 | Menambahkan project baru harus semudah menambah 1 entri di `projects.json` (tanpa ubah kode komponen) | Must |
| FR-06 | SEO dasar: meta title, description, Open Graph image | Should |
| FR-07 | Animasi scroll/hover halus (fade-in saat scroll) | Should |
| FR-08 | Halaman detail per-project (`/project/[slug]`) | Could (fase 1.5) |
| FR-09 | Dark mode toggle | Won't (fase 1) |

## 5. Non-Functional Requirements
- **Performance**: Lighthouse Performance ≥ 90 (gunakan `next/image`, font self-hosted, lazy load).
- **Accessibility**: kontras warna memenuhi WCAG AA, semantic HTML, alt text pada semua gambar.
- **SEO**: metadata lengkap via Next.js Metadata API.
- **Maintainability**: data project terpisah dari komponen UI (data-driven), memudahkan update konten via AI (Gemini) tanpa sentuh logic.

## 6. Struktur Data Project
```ts
// content/projects.json
{
  "slug": "nama-project-singkat",
  "title": "Nama Project",
  "description": "Deskripsi singkat 1-2 kalimat tentang apa yang dibangun dan masalah apa yang diselesaikan.",
  "techStack": ["Next.js", "TypeScript", "Tailwind CSS"],
  "repoUrl": "https://github.com/username/repo",
  "demoUrl": "https://demo-project.vercel.app",
  "thumbnail": "/images/projects/nama-project.png",
  "featured": true
}
```

## 7. Struktur Folder Project (untuk VSCode Agent)
```
reza-portfolio/
├── AGENTS.md
├── docs/
│   ├── 00-RESEARCH-REFERENCES.md
│   ├── 01-BRD.md
│   └── 02-PRD.md
├── skills/
│   └── add-project/SKILL.md
├── content/
│   └── projects.json
├── public/
│   └── images/projects/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              (landing page, render semua section)
│   ├── project/[slug]/page.tsx   (opsional, fase 1.5)
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── ProjectGrid.tsx
│   ├── ProjectCard.tsx
│   └── Footer.tsx
├── lib/
│   └── projects.ts            (fungsi untuk baca/filter projects.json)
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## 8. Alur Kerja Konten (Content — Gemini)
1. Reza memberi daftar project mentah (nama, link repo, poin-poin fitur) ke Gemini.
2. Gemini menulis ulang menjadi deskripsi project yang persuasif & ringkas (1-2 kalimat per project) mengikuti tone profesional-tapi-santai.
3. Gemini juga membantu menulis bio "About" dan tagline hero.
4. Hasil akhir dimasukkan manual (atau via agent) ke `content/projects.json`.

## 9. Alur Deploy (Vercel)
1. Push project ke GitHub repository.
2. Import repository di Vercel dashboard → pilih framework preset **Next.js** (otomatis terdeteksi).
3. Set environment variable jika ada (misal: `RESEND_API_KEY` untuk form kontak — opsional).
4. Deploy → dapat URL `*.vercel.app`.
5. (Opsional) Hubungkan custom domain di tab **Domains** pada project Vercel.

## 10. Milestone
| Fase | Deliverable |
|---|---|
| 1. Setup | Repo Next.js + Tailwind terinisialisasi, struktur folder sesuai PRD |
| 2. Static UI | Semua komponen (Header–Footer) selesai dengan data dummy |
| 3. Data Integration | `projects.json` diisi data asli, grid project dinamis |
| 4. Content Polish | Copywriting final dari Gemini dimasukkan |
| 5. QA | Cek responsif, Lighthouse score, broken link |
| 6. Deploy | Live di Vercel |
