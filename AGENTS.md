# AGENTS.md

Instruksi ini untuk AI coding agent (VSCode Agent/Copilot/Cursor/Claude Code, dsb.) yang bekerja di repository ini. Baca dokumen ini dan `docs/02-PRD.md` **sebelum** menulis kode apa pun.

## Tentang Project
Personal portfolio untuk **Reza Pahlevi**, Software/Web Developer. Menampilkan project-project yang telah dikerjakan (dengan link repository) dalam desain minimalis putih–abu-abu.

Dokumen acuan wajib dibaca urut:
1. `docs/00-RESEARCH-REFERENCES.md` — konteks riset & referensi gaya
2. `docs/01-BRD.md` — kebutuhan bisnis & scope
3. `docs/02-PRD.md` — spesifikasi produk, design system, struktur data & folder (**sumber kebenaran utama**)

## Stack
- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **Data project**: file statis `content/projects.json` (bukan database — lihat FR-01 di PRD)

## Perintah
```bash
npm install          # install dependency
npm run dev          # jalankan dev server (localhost:3000)
npm run build         # build production
npm run lint          # cek lint
```

## Aturan Coding
1. **Ikuti design token di `docs/02-PRD.md` § 2 secara ketat** — jangan menciptakan warna/spacing baru di luar token yang sudah ditentukan, kecuali diminta eksplisit.
2. **Semua data project HARUS berasal dari `content/projects.json`**, jangan hardcode data project di dalam komponen `.tsx`. Ini membuat penambahan project baru tidak perlu sentuh kode (lihat `skills/add-project/SKILL.md`).
3. Gunakan `next/image` untuk semua gambar (thumbnail project, foto profil) demi performa.
4. Komponen dipecah per section sesuai struktur folder di PRD § 7 (`Header`, `Hero`, `About`, `Skills`, `ProjectGrid`, `ProjectCard`, `Footer`) — satu tanggung jawab per komponen.
5. Semua halaman/komponen harus responsif mobile-first (`sm:`, `md:`, `lg:` breakpoint Tailwind).
6. Tulis alt text deskriptif untuk setiap gambar (accessibility, lihat PRD § 5).
7. Gunakan Metadata API Next.js (`export const metadata`) untuk SEO tiap halaman.
8. Jangan menambahkan fitur di luar scope `docs/01-BRD.md` § 4 (contoh: auth, blog CMS, multi-bahasa) tanpa konfirmasi eksplisit dari Reza.
9. Commit message singkat & deskriptif, mengikuti pola: `feat: tambah section hero`, `fix: perbaiki grid project di mobile`, dst.

## Menambah Project Baru
Jangan tulis ulang komponen — cukup ikuti skill di `skills/add-project/SKILL.md` dan tambahkan entri baru ke `content/projects.json` sesuai skema di PRD § 6.

## Sebelum Deploy
Checklist wajib (lihat juga PRD § 6 Success Metrics):
- [ ] `npm run build` sukses tanpa error
- [ ] Semua link `repoUrl`/`demoUrl` di `projects.json` valid (tidak 404)
- [ ] Cek tampilan di 3 breakpoint (mobile/tablet/desktop)
- [ ] Lighthouse Performance & Accessibility ≥ 90
- [ ] Tidak ada `console.log` / kode debug tersisa

## Larangan
- Jangan install dependency berat/tidak perlu (state management library, UI kit besar) untuk portofolio 1 halaman ini — tetap ringan sesuai NFR performance.
- Jangan mengubah struktur folder di PRD § 7 tanpa alasan kuat; jika terpaksa, catat alasannya di PR/commit description.
