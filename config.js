/*
  Pengaturan Sadhu Health.
  Aplikasi ini menyimpan semua data langsung di HP masing-masing —
  tidak perlu Google Cloud, Client ID, atau API key apa pun.

  Satu-satunya hal opsional di sini adalah reCAPTCHA, untuk mempersulit
  bot mengisi form Daftar/Masuk secara otomatis. Boleh dilewati sepenuhnya:
  kalau dibiarkan kosong, aplikasi memakai centang "Saya bukan robot" sebagai
  gantinya, dan tetap berfungsi normal.

  Cara membuat reCAPTCHA (gratis), ada di PANDUAN.md bagian "Langkah 2".
*/
window.CSK_CONFIG = {
  recaptchaSiteKey: 'ISI_RECAPTCHA_SITE_KEY' // atau biarkan begini untuk pakai centang cadangan
};
