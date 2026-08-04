# razz sayangg piaaa banyakkk banyakkk 💗

Website ucapan happy birthday untuk **Fitria Rahmadanie**, tema pink, dibuat murni dengan HTML + CSS + JavaScript (tanpa framework, tanpa proses build) — jadi tinggal upload dan langsung jalan.

## Isi folder

```
├── index.html      -> struktur halaman
├── style.css        -> semua tampilan, warna pink, dan ikon (dibuat coding, bukan emoji HP)
├── script.js         -> animasi buka kado, buka amplop, kalender, tombol musik
├── assets/           -> taruh foto-foto asli di sini
│   ├── hero.jpg          (foto utama, bentuk hati)
│   ├── gallery-1.jpg .. gallery-6.jpg   (foto galeri)
│   ├── closing.jpg       (foto penutup)
│   ├── cover.jpg          (gambar untuk preview link/OG image)
│   └── favicon.svg
└── README.md (file ini)
```

## 1. Ganti foto

Semua foto masih **placeholder pink** bertuliskan "Ganti foto ini di folder /assets". Tinggal timpa (replace) file dengan nama yang sama persis di folder `assets/`:

- `hero.jpg` — foto utama di frame hati
- `gallery-1.jpg` sampai `gallery-5.jpg` — foto-foto di galeri
- `closing.jpg` — foto di bagian penutup

Format JPG/PNG apa saja bisa, cukup timpa nama filenya. Disarankan foto potrait (vertikal) biar pas sama framenya.

## 2. Musiknya

Musik sudah dipasang otomatis pakai **Spotify embed player** dari link yang kamu kasih (lagu dengan track ID `6PqWdGIYq5xdLaa4zCZfRp`). Kalau mau ganti lagu lain, buka `index.html`, cari baris ini:

```html
<iframe id="spotifyFrame" ... src="https://open.spotify.com/embed/track/6PqWdGIYq5xdLaa4zCZfRp?..." ...>
```

Ganti angka/kode setelah `track/` dengan track ID lagu Spotify yang baru (ambil dari link share Spotify: `open.spotify.com/track/KODE-INI`).

> Catatan: browser modern (terutama di HP) biasanya **memblokir autoplay audio** sebelum ada interaksi user. Makanya musik baru mulai kedengeran pas pacarmu klik gift box / tombol play — ini normal dan berlaku di semua website, bukan bug.

## 3. Tanggal & kalender

Kalender bulan Agustus dan tanda hati di tanggal **30 Agustus** sudah otomatis dibuat lewat `script.js`. Kalau suatu saat mau ganti tanggal atau bulan, buka `script.js`, di bagian paling atas ada:

```js
const LOVE_DATE_DAY = 30;
const CALENDAR_MONTH_LABEL = "Agustus";
const CALENDAR_FIRST_WEEKDAY = 6; // posisi tanggal 1 di baris hari apa (0=Minggu ... 6=Sabtu)
```

## 4. Ganti teks/surat

Semua teks ucapan ada langsung di `index.html`, cari bagian:
- `<div class="letter-paper">` — isi surat di amplop
- `<div class="quote-card">` — pesan "Just for you"
- `<div class="closing-card">` — pesan penutup

Edit teksnya langsung sesuai keinginan.

## 5. Upload ke GitHub

1. Buat repository baru di GitHub (bisa public atau private).
2. Upload semua isi folder ini (bukan folder itu sendiri, tapi isinya) ke repo tersebut — bisa drag & drop lewat web GitHub, atau:
   ```bash
   git init
   git add .
   git commit -m "happy birthday website"
   git branch -M main
   git remote add origin <link-repo-kamu>
   git push -u origin main
   ```

## 6. Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com) → login dengan akun GitHub.
2. Klik **Add New → Project**, pilih repo yang tadi kamu upload.
3. Framework Preset: pilih **Other** (karena ini static HTML biasa, tidak perlu build command apa pun).
4. Klik **Deploy** — tunggu sebentar, selesai, dapat link `namamu.vercel.app`.

Tidak perlu install apapun, tidak ada `package.json` yang dibutuhkan — situs ini murni file statis.

## Tips tambahan

- Kalau foto terasa kepotong aneh di frame hati/oval, coba crop dulu fotonya jadi rasio potrait (misal 4:5) sebelum upload.
- Semua ikon (hati, bunga, pita, kue, dst) dibuat murni dari kode SVG di `style.css` — bukan emoji bawaan HP — supaya tampilannya konsisten di semua perangkat/browser.
- Warna tema bisa diubah di bagian paling atas `style.css`, pada blok `:root { --pink-... }`.

Selamat, semoga Fitria suka! 🎀
