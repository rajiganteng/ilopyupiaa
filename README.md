# razz sayangg piaaa banyakkk banyakkk 💗

Website ucapan happy birthday untuk **Fitria Rahmadanie**, tema pink, dibuat murni dengan HTML + CSS + JavaScript (tanpa framework, tanpa proses build) — jadi tinggal upload dan langsung jalan.

## Alur website

1. **Layar PIN** — harus masukin PIN dulu (8 digit) baru bisa lanjut. Setiap digit yang dimasukin ditampilin sebagai hati (love), bukan angka/titik biasa.
2. **Layar buka kado** — tap kotak kado, ada animasi meriah (kado mantul, tutup kado terbang, ledakan hati & bunga) sebelum masuk ke halaman utama.
3. **Halaman utama** — kalender, musik, foto, buket bunga interaktif, surat, galeri, pesan, top 3 playlist, closing.

## Isi folder

```
├── index.html      -> struktur halaman
├── style.css        -> semua tampilan, warna pink, dan ikon (dibuat coding, bukan emoji HP)
├── script.js         -> semua animasi & interaksi (PIN, kado, musik, buket, dst)
├── assets/
│   ├── favicon.svg
│   ├── photos/            -> semua foto
│   │   ├── hero.jpg           (foto utama, bentuk hati)
│   │   ├── gallery-1.jpg .. gallery-6.jpg   (foto galeri)
│   │   ├── closing.jpg        (foto penutup)
│   │   └── cover.jpg           (gambar untuk preview link/OG image)
│   └── songs/              -> musik & sound effect
│       ├── music.mp3          (musik utama — GANTI dengan lagu asli, lihat bagian Musik di bawah)
│       ├── pin-correct.mp3    (bunyi saat PIN benar)
│       └── pin-wrong.mp3      (bunyi saat PIN salah)
└── README.md (file ini)
```

## 1. PIN masuk

PIN-nya **20100830** (format: tahun-bulan-tanggal lahir → 30 Agustus 2010). Clue yang ditampilkan ke pacarmu: *"tahun, bulan, tanggal lahir kamu :3"*. Setiap digit yang diketik ditampilkan sebagai bentuk **hati**, bukan angka/titik biasa. Salah PIN akan bunyi + pesan "huuu salahhhhh dekksss", benar akan bunyi + lanjut ke halaman buka kado.

Suara PIN benar/salah ada di `assets/songs/pin-correct.mp3` dan `assets/songs/pin-wrong.mp3` — saat ini masih nada uji coba sederhana, boleh diganti kalau mau pakai bunyi lain (nama file harus tetap sama).

Kalau mau ganti PIN, buka `script.js`, baris paling atas:
```js
const PIN_CODE = "20100830";
```
Ganti jadi PIN lain (harus digit angka), lalu sesuaikan juga teks clue-nya di `index.html` pada elemen `<p class="pin-clue">`.

## 2. Musik (PENTING — baca ini)

Musik utama sekarang **diputar dari file lokal** `assets/songs/music.mp3`, bukan dari Spotify embed lagi — supaya bisa dikontrol mulai dari detik tertentu.

**Saat ini `assets/songs/music.mp3` masih file nada placeholder (bukan lagu aslinya)**, karena aku nggak bisa mengunduh audio dari Spotify (melanggar aturan Spotify & hak cipta). Kamu perlu:

1. Dapatkan file audio lagu itu sendiri secara sah (misalnya export/rekam dari lagu yang kamu punya hak untuk memakainya, atau beli/download resmi).
2. Timpa file `assets/songs/music.mp3` dengan file itu (nama file harus tetap `music.mp3`, format MP3).

**Perilaku pemutaran musik sudah diatur otomatis di `script.js`:**
- Pertama kali diputar → mulai dari **detik 2:29 (149s)** sampai **3:58 (238s)**.
- Setelah sampai 3:58 → otomatis balik ke **detik 0:00**, lalu main sampai 3:58 lagi.
- Ini berulang terus selama halaman dibuka.

Kalau mau ubah titik potongnya, buka `script.js`:
```js
const AUDIO_TRIM_START = 149; // 2:29
const AUDIO_TRIM_END = 238;   // 3:58
```
Ubah angkanya (dalam detik).

> Catatan: browser (terutama di HP) memblokir autoplay audio sebelum ada interaksi user. Musik baru kedengeran begitu pacarmu buka kado / pencet tombol play — ini normal.

## 3. Top 3 Playlist for U

Ada section baru di antara "Just for you" dan "Closing" berisi 3 lagu Spotify (pakai Spotify embed resmi, bisa diputar langsung dari situ). Untuk ganti lagunya, buka `index.html`, cari `playlist-section`, dan ganti kode track di URL `open.spotify.com/embed/track/KODE-INI` dengan track ID lagu baru.

## 4. Buket bunga digital

Section baru "Buket Bunga Buat Kamu" — ada 10 bunga yang bisa diklik, masing-masing nampilin satu ucapan kecil. Untuk ganti isi ucapannya, buka `script.js`, cari:
```js
const BOUQUET_MESSAGES = [ ... ];
```
Isi array itu dengan 10 (atau lebih) kalimat ucapan sesuai keinginan.

## 5. Ganti foto

Semua foto masih **placeholder pink**. Tinggal timpa (replace) file dengan nama yang sama persis di folder `assets/photos/`: `hero.jpg`, `gallery-1.jpg` s/d `gallery-5.jpg`, `closing.jpg`. Format JPG/PNG apa saja bisa, disarankan foto potrait (vertikal).

## 6. Tanggal & kalender

Kalender Agustus dan tanda hati di tanggal **30** diatur di `script.js`:
```js
const LOVE_DATE_DAY = 30;
const CALENDAR_FIRST_WEEKDAY = 6; // posisi tanggal 1 di baris hari apa (0=Minggu ... 6=Sabtu)
```

## 7. Ganti teks/surat

Semua teks ucapan ada langsung di `index.html`:
- `<div class="letter-paper">` — isi surat di amplop
- `<div class="quote-card">` — pesan "Just for you"
- `<div class="closing-card">` — pesan penutup

## 8. Upload ke GitHub

Upload **semua isi folder ini** (termasuk `vercel.json` — jangan sampai kelewat, itu file konfigurasi biasa yang perlu ikut ter-push seperti file lainnya):
```bash
git init
git add .
git commit -m "happy birthday website"
git branch -M main
git remote add origin <link-repo-kamu>
git push -u origin main
```

## 9. Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com) → login dengan akun GitHub.
2. Klik **Add New → Project**, pilih repo yang tadi kamu upload.
3. Framework Preset: pilih **Other** (static HTML biasa, tidak perlu build command).
4. Klik **Deploy** — selesai, dapat link `namamu.vercel.app`.

## Tips tambahan

- Kalau foto kepotong aneh di frame hati/oval, crop dulu jadi rasio potrait (misal 4:5) sebelum upload.
- Semua ikon (hati, bunga, pita, kue, dst) dibuat murni dari kode SVG — bukan emoji bawaan HP.
- File `assets/songs/music.mp3` **wajib diganti** sebelum di-share ke pacarmu, karena saat ini isinya cuma nada uji coba, bukan lagu sungguhan.
- Warna tema bisa diubah di bagian atas `style.css`, blok `:root { --pink-... }`.

Selamat, semoga Fitria suka! 🎀

