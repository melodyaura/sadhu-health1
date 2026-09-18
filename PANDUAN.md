# Panduan Pemasangan Sadhu Health

Sadhu Health berjalan di HP seperti aplikasi biasa dan tetap bisa dipakai tanpa internet. **Semua data tersimpan langsung di HP itu sendiri** — tidak ada server, tidak ada akun Google Cloud, tidak ada langkah rumit apa pun. Pemasangannya cukup satu langkah: unggah ke GitHub Pages.

Waktu yang dibutuhkan sekitar 10 menit, dan gratis.

## Isi paket

| File | Fungsi |
|---|---|
| `index.html` | Aplikasinya |
| `config.js` | Tempat mengisi reCAPTCHA (opsional, boleh dilewati) |
| `sw.js` | Membuat aplikasi tetap terbuka tanpa internet |
| `manifest.webmanifest`, `logo.png`, `icon-*.png` | Nama, logo, dan ikon saat dipasang di layar utama HP |
| `PANDUAN.md` | Panduan ini |

## Gambaran cara kerjanya

Setiap orang yang memakai aplikasi ini mendaftar akun sendiri (email, username, password) langsung di HP itu. Semua data — catatan kesehatan, akun, dan log aktivitas — tersimpan di penyimpanan internal HP tersebut, tidak dikirim ke mana pun.

**Satu hal penting yang perlu dipahami:** karena tidak ada server bersama, data di satu HP **tidak otomatis muncul** di HP lain. Kalau seluruh keluarga memakai satu HP yang sama secara bergantian (paling umum), ini tidak masalah — semua orang login-logout di HP yang sama, jadi datanya selalu satu dan sama. Kalau tiap anggota keluarga punya HP masing-masing, tiap HP akan punya catatan sendiri-sendiri yang terpisah.

Cadangan datanya berupa **backup manual**: kamu unduh file `.json`, lalu simpan sendiri di tempat aman — misalnya dilampirkan ke email dan dikirim ke Gmail-mu sendiri. Kalau suatu saat HP hilang, rusak, di-reset, atau kamu pindah ke HP baru, tinggal unduh lagi lampiran itu dari email dan pulihkan lewat aplikasi. Pemulihan ini **mengganti seluruh isi HP** dengan isi file backup yang dipilih — bukan menggabungkan — jadi pastikan file yang dipilih memang yang ingin dipakai.

Pemulihan bisa dilakukan bahkan sebelum ada akun sama sekali di HP itu (misalnya HP baru), lewat tautan "Pulihkan dari file backup" yang ada di layar Masuk/Daftar.

---

## Langkah 1: Taruh aplikasi di internet lewat GitHub Pages

1. Buka **github.com** lalu daftar atau login.
2. Klik tombol **+** di kanan atas, pilih **New repository**.
3. Isi *Repository name* dengan `sadhu-health`. Pilih **Public**, lalu klik **Create repository**.
4. Di halaman berikutnya, klik tautan **uploading an existing file**.
5. Ekstrak file zip. **Masuk ke dalam folder hasil ekstrak**, lalu seret **semua isinya** (index.html, config.js, dan seterusnya) langsung ke halaman upload GitHub — jangan seret foldernya sendiri, supaya file-nya tidak tertumpuk satu folder terlalu dalam. Klik **Commit changes**.
6. Buka tab **Settings**, lalu menu **Pages** di sebelah kiri.
7. Pada *Build and deployment*, pilih *Source*: **Deploy from a branch**. Pilih *Branch*: **main** dan folder **/ (root)**, lalu klik **Save**.
8. Tunggu 1–2 menit, lalu muat ulang halaman. Alamat aplikasimu akan muncul, misalnya:
   `https://namakamu.github.io/sadhu-health/`

Selesai — aplikasinya sudah bisa langsung dibuka dan dipakai dari alamat itu.

## Langkah 2: Siapkan reCAPTCHA (opsional)

Langkah ini boleh dilewati sepenuhnya. Tanpa reCAPTCHA, aplikasi memakai centang "Saya bukan robot" biasa di form Daftar dan Masuk, dan tetap berfungsi normal. Kalau ingin reCAPTCHA sungguhan dari Google:

1. Buka **google.com/recaptcha/admin/create**.
2. Isi *Label* dengan `Sadhu Health`.
3. Pilih jenis **reCAPTCHA v2**, lalu pilihan **"I'm not a robot" Checkbox**.
4. Pada *Domains*, tambahkan domain dari alamat aplikasimu tanpa `https://`, misalnya `namakamu.github.io`.
5. Centang persetujuan, klik **Submit**.
6. Salin **Site key** yang muncul. Kunci **Secret key** di halaman itu tidak dipakai di sini karena butuh server untuk memverifikasinya — boleh diabaikan.
7. Di GitHub, buka file `config.js` di repository-mu, klik ikon pensil untuk mengedit, ganti `ISI_RECAPTCHA_SITE_KEY` dengan site key yang baru disalin, lalu **Commit changes**.

## Langkah 3: Pasang di HP

- **Android (Chrome):** buka alamat aplikasi, ketuk menu titik tiga, lalu pilih **Instal aplikasi** atau **Tambahkan ke layar utama**.
- **iPhone (Safari):** buka alamat aplikasi, ketuk tombol **Bagikan**, lalu pilih **Tambah ke Layar Utama**.

## Langkah 4: Daftar akun pertama

1. Buka aplikasi. Layar **Daftar** akan muncul otomatis karena belum ada akun sama sekali.
2. Isi nama lengkap, username, email, nomor WhatsApp, tanggal lahir, alamat, catatan medis (opsional), dan password, lalu ketuk **Daftar**.
3. Pendaftar pertama ini otomatis jadi **pemilik data keluarga** di HP itu dan langsung aktif — tidak perlu aktivasi apa pun untuk yang pertama.
4. Setelah masuk, buka menu **Profil**, gulir ke bagian **Persetujuan akun baru**, lalu isi **Nomor WhatsApp untuk menerima kode aktivasi** dengan nomor WhatsApp aktif milikmu (format `62812xxxxxxx`, tanpa tanda `+`), lalu ketuk **Simpan nomor**. Nomor ini dipakai kalau nanti ada anggota lain yang mendaftar di HP yang sama.
5. Tambahkan profil kesehatan anggota keluarga (Saya, Ibu, Ayah, dan seterusnya) lewat tombol **Tambah anggota keluarga** di beranda.

## Langkah 5 (kalau HP dipakai bergantian): anggota lain mendaftar

Kalau satu HP dipakai bergantian oleh beberapa orang, setiap orang bisa punya akun login sendiri di HP yang sama:

1. Di layar Masuk, ketuk tab **Daftar**, lalu isi formulirnya.
2. Setelah mendaftar, muncul kode 6 digit. Ketuk **Kirim kode lewat WhatsApp** — ini membuka WhatsApp dengan pesan berisi nama, username, dan kode, terkirim ke nomor pemilik yang sudah diisi di Langkah 4.
3. Pemilik (siapa pun yang sedang login di HP itu dengan akun pemilik) membuka menu **Profil**, mencocokkan kode di WhatsApp dengan yang tampil di bagian **Persetujuan akun baru**, lalu ketuk **Aktifkan**.
4. Anggota baru bisa langsung login dengan email/username dan password yang tadi dibuat.

## Langkah 6: Backup rutin ke email

Lakukan ini sesekali, terutama sebelum pindah HP atau kalau sudah lama tidak backup:

1. Buka menu **Backup** di kanan atas, ketuk **Unduh backup (.json)**.
2. Buka aplikasi email, buat email baru ke alamat Gmail-mu sendiri, lampirkan file yang baru diunduh, lalu kirim.
3. Kalau suatu saat perlu memulihkan: buka email itu, unduh lampirannya, lalu di aplikasi ketuk **Pulihkan dari file backup** (tersedia di menu Backup, atau langsung di layar Masuk kalau HP-nya baru/kosong) dan pilih file tersebut.

---

## Pemakaian sehari-hari

- **Log aktivitas** di menu Profil mencatat setiap kali seseorang masuk, gagal masuk, keluar, membuka menu, mengisi data, atau disetujui aktivasinya — gunakan ini untuk memeriksa apakah ada akses yang mencurigakan di HP itu.
- **Tombol SOS** (lingkaran merah) memanggil 112 dengan satu ketukan, dan menampilkan kontak favorit yang diatur di menu Profil.
- Data tetap tersimpan dan bisa dicatat walau tidak ada sinyal sama sekali.

## Keamanan dan privasi — batasannya, secara jujur

- **Password** disimpan dalam bentuk hash (diacak dengan PBKDF2, bukan teks biasa), tersimpan di HP itu saja.
- **reCAPTCHA**, kalau diaktifkan, hanya berupa tantangan visual dari Google tanpa verifikasi server, jadi ia menghalangi bot dan skrip sederhana, bukan penyerang yang benar-benar menargetkan aplikasi ini secara khusus.
- **Data hanya ada di HP itu.** Kalau HP hilang, rusak, atau aplikasinya dihapus tanpa backup, seluruh catatan kesehatan dan akun ikut hilang. Backup manual ke email (Langkah 6) adalah satu-satunya jaring pengaman, jadi lakukan secara rutin.
- File backup `.json` berisi data kesehatan dan akun (password dalam bentuk hash, bukan teks polos). Simpan di tempat yang hanya bisa diakses keluarga, misalnya email pribadi, bukan folder atau chat yang dibagikan secara luas.
- Kode aplikasi di GitHub bersifat publik, tetapi tidak berisi data siapa pun — data baru muncul setelah aplikasi dipakai di HP masing-masing.

## Kalau ada masalah

| Yang terjadi | Yang perlu dicek |
|---|---|
| Setelah upload ke GitHub, alamat aplikasi menampilkan 404 | File kemungkinan tertumpuk satu folder terlalu dalam. Buka repository di GitHub — kalau yang terlihat cuma satu folder, masuk ke dalamnya, salin semua isinya ke posisi utama repository, lalu commit ulang. |
| reCAPTCHA tidak muncul, hanya centang biasa | Site key belum diisi di `config.js`, atau domain di Langkah 2 tidak cocok dengan alamat aplikasi. Aplikasi tetap bisa dipakai dengan centang cadangan. |
| Kode aktivasi WhatsApp tidak terkirim otomatis | Ini memang manual — anggota yang mendaftar sendiri yang mengetuk tombol kirim di WhatsApp mereka. Pastikan nomor pemilik sudah diisi di menu Profil. |
| Username ditolak padahal terasa belum dipakai | Username hanya dicek terhadap akun yang sudah ada di HP itu. Kalau ini HP baru dengan data lama, pulihkan dulu dari file backup sebelum mendaftar. |
| Lupa password dan tidak ada akun lain untuk reset | Tidak ada cara reset password otomatis (tidak ada server email). Kalau punya file backup lama dengan akun itu, pulihkan filenya — passwordnya akan sama seperti saat backup dibuat. Kalau tidak ada, satu-satunya jalan adalah mendaftar akun baru. |
| Semua data hilang setelah ganti HP atau hapus aplikasi | Ini yang dijaga oleh backup rutin (Langkah 6). Kalau ada file backup di email, buka menu Backup di aplikasi baru dan pulihkan dari file itu. |

## Memperbarui aplikasi di kemudian hari

1. Unggah `index.html` versi baru ke GitHub, menggantikan yang lama.
2. Edit `sw.js` dan naikkan angka versinya, misalnya dari `sadhu-v1` menjadi `sadhu-v2`.
3. Di HP, tutup lalu buka aplikasi dua kali agar versi baru terpasang.

Data tidak hilang saat aplikasi diperbarui, karena data tersimpan di HP, bukan di dalam kode.
