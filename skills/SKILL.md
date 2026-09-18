---
name: add-project
description: Gunakan skill ini saat Reza ingin menambahkan project baru ke portofolio dengan memberikan link repository (dan info lain seperti deskripsi, tech stack, atau link demo). Skill ini menambahkan entri baru ke content/projects.json tanpa mengubah kode komponen.
---

# Add Project Skill

## Kapan dipakai
Trigger: Reza memberi link repository GitHub baru dan minta agar ditambahkan ke portofolio. Contoh input:
> "Tambahkan project ini ke portofolio: https://github.com/rezapahlevi/nama-repo, ini aplikasi to-do list pakai React dan Firebase."

## Langkah
1. **Baca repo** (jika bisa diakses): cek nama repo, README, dan file `package.json`/manifest untuk menebak tech stack jika tidak disebutkan eksplisit.
2. **Susun entri sesuai skema** di `docs/02-PRD.md` § 6:
   ```json
   {
     "slug": "kebab-case-dari-judul",
     "title": "Judul Project (Title Case, singkat)",
     "description": "1-2 kalimat: apa yang dibangun + masalah yang diselesaikan. Jika belum ada copy, minta bantuan Gemini untuk menulis ulang jadi persuasif.",
     "techStack": ["Tech1", "Tech2"],
     "repoUrl": "https://github.com/...",
     "demoUrl": "https://... atau null jika tidak ada",
     "thumbnail": "/images/projects/<slug>.png",
     "featured": false
   }
   ```
3. **Tambahkan entri** ke array di `content/projects.json` — jangan menimpa entri lain, tambahkan di akhir array (atau di awal jika `featured: true` agar tampil lebih dulu).
4. Jika `thumbnail` belum ada file gambarnya, beri tahu Reza untuk menaruh screenshot di `public/images/projects/<slug>.png`, atau gunakan placeholder sementara (`/images/projects/placeholder.png`).
5. **Jangan** menyentuh file komponen (`ProjectCard.tsx`, `ProjectGrid.tsx`) — grid project harus otomatis merender entri baru karena data-driven (lihat AGENTS.md aturan #2).
6. Jalankan `npm run dev` untuk verifikasi card baru tampil dengan benar di grid, lalu laporkan hasil ke Reza.

## Output yang diharapkan
- Satu entri baru tervalidasi (JSON valid) di `content/projects.json`.
- Konfirmasi bahwa link repo/demo dapat diakses (tidak 404).
- Pengingat untuk menambahkan file thumbnail jika belum tersedia.
