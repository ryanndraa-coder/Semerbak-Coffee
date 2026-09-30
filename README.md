# SEMERBAK COFFEE — Website Katalog & Kemitraan

Website mobile-first berbasis HTML5, CSS3, dan Vanilla JavaScript.

## Struktur
- `index.html` — halaman utama
- `style.css` — seluruh styling responsive
- `script.js` — data menu, data kemitraan, modal, WhatsApp, Instagram, Maps
- `assets/` — foto booth/menu yang diberikan

## Cara menjalankan
Buka `index.html` langsung di browser.

Untuk pengalaman development yang lebih nyaman, bisa menggunakan VS Code + Live Server.

## Yang perlu diisi
Buka `script.js`, lalu ubah:

```js
const CONFIG = {
  WHATSAPP_NUMBER: "",
  INSTAGRAM_URL: "#",
  GOOGLE_MAPS_URL: "#",
};
```

Contoh nomor WhatsApp:
`6281234567890`

Jangan memakai tanda `+`, spasi, atau tanda `-`.

## Mengubah menu
Semua menu ada di `MENU_DATA`.

Harga yang belum diberikan sengaja dibiarkan sebagai `{}` sehingga website tidak mengarang harga.

## Mengubah kemitraan
Semua paket ada di `PARTNERSHIP_DATA`.

Untuk menambah paket, copy satu object paket lalu ubah:
- `name`
- `price`
- `image`
- `desc`
- `facilities`

Jika foto belum tersedia, biarkan `image: ""`.

## Foto
Foto yang digunakan berasal dari upload pengguna:
- `booth-utama.png`
- `booth-interior.png`
- `menu-board.png`
- `menu-display.png`
- `booth-outdoor.png`

Tidak ada foto produk random yang diposisikan sebagai produk resmi Semerbak.

## Catatan
Website ini tidak memiliki checkout atau payment gateway. Semua pemesanan dan inquiry diarahkan ke WhatsApp.
