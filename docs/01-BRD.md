# Business Requirements Document (BRD)
## Personal Portfolio — Reza Pahlevi

| | |
|---|---|
| **Pemilik Project** | Reza Pahlevi |
| **Jenis Project** | Personal Portfolio Website |
| **Tanggal** | 17 September 2026 |
| **Status** | Draft v1.0 |

## 1. Latar Belakang
Reza Pahlevi, seorang Software/Web Developer, membutuhkan sebuah website portofolio pribadi untuk menampilkan project-project yang telah dikerjakan secara profesional, mudah diakses, dan dapat dibagikan sebagai kartu nama digital kepada recruiter, klien freelance, maupun komunitas developer.

## 2. Tujuan Bisnis
1. Membangun personal branding sebagai Software/Web Developer yang kredibel.
2. Menyediakan satu tempat terpusat untuk menampilkan seluruh project (dengan link repository & demo) sebagai bukti kompetensi teknis.
3. Meningkatkan peluang mendapatkan pekerjaan, klien freelance, atau kolaborasi project melalui kesan profesional pertama (first impression).
4. Menjadi media kontak yang mudah dihubungi oleh pihak tertarik (recruiter, klien, kolaborator).

## 3. Target Audiens
- **Recruiter / HR Tech Company** — mencari bukti kemampuan teknis nyata (bukan hanya CV).
- **Klien freelance / startup founder** — mencari developer untuk mengerjakan project.
- **Sesama developer / komunitas** — untuk kolaborasi atau networking.

## 4. Ruang Lingkup (Scope)
### Termasuk dalam scope:
- Landing page portofolio 1 halaman (single-page) dengan section: Hero, About, Projects (showcase), Skills, Contact.
- Menampilkan daftar project dengan data: judul, deskripsi singkat, tech stack, link repository (GitHub), link live demo (jika ada), thumbnail/screenshot.
- Form/CTA kontak (email langsung atau link ke platform lain: LinkedIn, WhatsApp, dll).
- Desain responsif (mobile, tablet, desktop).
- Deploy ke Vercel dengan domain publik yang bisa diakses.

### Di luar scope (fase 1):
- Blog/CMS penuh untuk artikel.
- Sistem autentikasi/login.
- Backend/database kompleks (fase 1 bersifat statis/JSON-driven).
- Multi-bahasa (bisa jadi fase 2).

## 5. Batasan & Asumsi
- **Batasan waktu**: dikerjakan solo dengan bantuan AI tools (Claude, VSCode Agent, Gemini) — bukan tim besar.
- **Batasan biaya**: menggunakan tools gratis/tier gratis (Vercel Hobby, Next.js open-source).
- **Asumsi**: Reza akan menyediakan daftar link repository project dan konten dasar (bio, foto) secara manual; AI membantu menyusun copywriting dan struktur.
- **Asumsi**: Desain final mengikuti gaya minimalis putih-abu-abu yang telah divalidasi di tahap riset.

## 6. Kriteria Sukses (Success Metrics)
| Metrik | Target |
|---|---|
| Waktu muat halaman (Lighthouse Performance) | ≥ 90 |
| Responsif di semua perangkat | 100% (mobile, tablet, desktop) |
| Semua link repository & demo project berfungsi | 100% |
| Aksesibilitas dasar (Lighthouse Accessibility) | ≥ 90 |
| Website live & dapat diakses publik | Ya, via Vercel |

## 7. Stakeholder
- **Pemilik/Decision Maker**: Reza Pahlevi
- **AI Assistant (perencanaan & riset)**: Claude
- **AI Assistant (desain UI opsional)**: Stitch AI
- **AI Assistant (eksekusi coding)**: VSCode Agent
- **AI Assistant (content writing)**: Gemini
- **Platform Hosting**: Vercel

## 8. Risiko
| Risiko | Mitigasi |
|---|---|
| Konten project belum lengkap saat development dimulai | Gunakan data dummy/placeholder terlebih dahulu, isi struktur `projects.json` belakangan |
| Desain dari Stitch AI tidak konsisten dengan design system | Tetapkan design token (warna, font, spacing) sejak PRD, gunakan sebagai acuan wajib |
| Scope creep (menambah fitur di luar rencana) | Kunci scope fase 1 sesuai dokumen ini; fitur tambahan masuk backlog fase 2 |
