# Laporan singkat — paket produksi bounty video MozaikPay

Tanggal: 2026-10-31, diperbarui 2026-11-03

## Isi folder
| File | Isi |
|---|---|
| [facts.md](facts.md) | Fakta produk dari docs resmi + App Store/Play Store, tiap baris bersumber |
| [ELIGIBILITY.md](ELIGIBILITY.md) | Analisis kelayakan Bryan (bahasa Indonesia) |
| [SCRIPTS.md](SCRIPTS.md) | 3 naskah Spanyol (35–50 dtk), shot list, teks layar, versi suara opsional, checklist |
| [template/](template/) | Template Remotion + PNG transparan + render demo placeholder |
| [x-thread/THREAD.md](x-thread/THREAD.md) | Thread X 16 tweet (bahasa Inggris), 6 keyword gambar, CTA, hashtag; teks polos di `x-thread/tweets.txt` |

## Kesimpulan utama
Diperbarui 2026-11-03. Kesimpulan lama ("tidak bisa lolos dengan akun sendiri") ditarik.

**Status: paket persiapan selesai, video final belum ada, belum ada yang diposting.**

| Syarat bounty | Status |
|---|---|
| Akun TikTok sendiri, profil publik | @nayrbryangaming terlihat dari tampilan pemilik; status publik perlu dipastikan |
| Audiens Chile + Kolombia >50% | Belum terbukti: gambar yang ada menyebut 91,4%, tetapi tidak ada screenshot langsung dari TikTok. Lihat [ELIGIBILITY.md](ELIGIBILITY.md) |
| Akun MozaikPay asli di layar | Screenshot 2026-11-03: Profile `@nayrbryangaming` dan layar Transfer. Rekaman video belum ada |
| Cerita uang yang nyata | Cerita dari Bryan: bayar freelancer di Santiago dan Bogotá (pernyataan sendiri, belum diverifikasi). Naskah: Guion 2 versi freelancer |
| Video 30–60 dtk, Spanyol, #publicidad | Naskah siap, video belum |

- Isi saldo dan tarik ke bank masih perlu KYC. Bryan menyatakan warga negara Kolombia (belum diverifikasi); jika memegang Cédula de Ciudadanía, jalur Kolombia layak dicek.
- Jika file analytics asli ternyata di bawah 50%, jalur cadangan: kreator di Chile/Kolombia yang memiliki akun, audiens, KYC, bank, dan ceritanya sendiri, dengan paket ini sebagai bahan produksi.
- Detail: [ELIGIBILITY.md](ELIGIBILITY.md).

## Fakta penting (lihat facts.md)
- Isi saldo/tarik: Argentina, Chile, Kolombia saja; kirim/terima dan link pembayaran bisa di mana saja.
- Komisi isi saldo/tarik ditampilkan sebelum konfirmasi (nominal tidak dipublikasikan); antar-pengguna gratis.
- Link pembayaran: kedaluwarsa 1 jam–7 hari, penerima tidak perlu akun, bisa dicabut, dana kembali otomatis jika kedaluwarsa.
- Billetera autocustodial; MozaikPay tidak menyimpan dana/kunci.

## Template
- Demo: `template/out/demo-placeholder.mp4` (20 dtk, 1080×1920) dengan klip **placeholder** berlabel jelas — bukan UI MozaikPay.
- PNG transparan 1080×1920 per teks: `template/out/pngs/` (29 file; alpha dicek: latar 0, kotak 82%, teks penuh).
- Render memakai Edge (`--browser-executable` / `BROWSER_EXECUTABLE`). Di mesin ini render 20 dtk butuh ±10 menit; timeout dinaikkan (`--timeout=120000 --concurrency=2`).

## Thread X
- 16 tweet, semua ≤280 karakter (terpanjang 254). Isi hanya klaim yang ada di docs/store; tanpa "saya sudah coba" palsu.
- Handle X resmi MozaikPay **tidak ditemukan** (web, mozaik.money, docs). Tweet 3 dan 16 memakai `@[MOZAIKPAY_HANDLE]`: cek manual di X, jangan tag akun yang belum terverifikasi.
- Kalimat orang pertama ("I read the docs", "I live in Makassar") harus benar sebelum diposting. Tambah "I installed it" hanya kalau memang sudah.

## Yang sengaja tidak dilakukan
- Tidak install app, tidak buat akun, tidak KYC, tidak tautkan bank, tidak posting.
- Tidak membuat screenshot aplikasi palsu.
