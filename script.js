/* =========================================================
   SEMERBAK COFFEE — DATA & CONFIG
   Edit this file to update menu, WhatsApp, Instagram, maps,
   and future partnership packages.
   ========================================================= */

const CONFIG = {
  WHATSAPP_NUMBER: "", // contoh: "6281234567890" — tanpa +, spasi, atau tanda -
  INSTAGRAM_URL: "#",
  GOOGLE_MAPS_URL: "#",
};

const MENU_DATA = {
  kopiena: {
    label: "Kopiena",
    icon: "☕",
    products: [
      { name: "Americano", desc: "Kopi hitam dengan karakter ringan dan clean.", prices: { S: 5000, M: 7000, L: 10000 }, image: "" },
      { name: "Kopi Susu", desc: "Kopi susu creamy untuk teman aktivitas.", prices: { S: 7000, M: 10000, L: 12000 }, image: "" },
      { name: "Kopi Susu Gula Aren", desc: "Kopi susu dengan manis gula aren.", prices: { S: 8000, M: 12000, L: 14000 }, image: "" },
      { name: "Coffe Latte", desc: "Espresso dan susu dengan rasa lembut.", prices: { M: 12000, L: 15000 }, image: "" },
      { name: "Vanilla Latte", desc: "Latte lembut dengan sentuhan vanilla.", prices: { M: 13000, L: 15000 }, image: "" },
      { name: "Mocachino", desc: "Perpaduan kopi dan cokelat yang creamy.", prices: { M: 13000, L: 15000 }, image: "" },
      { name: "Coconut Aren Latte", desc: "Latte dengan karakter coconut dan gula aren.", prices: { M: 13000, L: 15000 }, image: "" },
      { name: "Salted Caramel Latte", desc: "Latte manis dengan sentuhan salted caramel.", prices: { M: 13000, L: 15000 }, image: "" },
      { name: "Butterschoot Latte", desc: "Latte dengan rasa butterscotch.", prices: { M: 13000, L: 15000 }, image: "" },
      { name: "Pandan Latte", desc: "Latte dengan aroma pandan yang khas.", prices: { M: 13000, L: 15000 }, image: "" },
    ]
  },
  matcha: {
    label: "Matcha",
    icon: "🍵",
    products: [
      { name: "Matcha Vanilla", desc: "[Deskripsi akan diisi]", prices: {}, image: "" },
      { name: "Matcha Latte", desc: "[Deskripsi akan diisi]", prices: {}, image: "" },
      { name: "Matcha Crem Cheese", desc: "[Deskripsi akan diisi]", prices: {}, image: "" },
      { name: "Matcha Milo", desc: "[Deskripsi akan diisi]", prices: {}, image: "" },
      { name: "Korean Strawberry", desc: "[Deskripsi akan diisi]", prices: {}, image: "" },
    ]
  },
  noncoffee: {
    label: "Non Coffee",
    icon: "🥤",
    products: [
      { name: "Chocolate", desc: "[Deskripsi akan diisi]", prices: {}, image: "" },
      { name: "Choco Vanilla", desc: "[Deskripsi akan diisi]", prices: {}, image: "" },
      { name: "Strawberry Vanilla", desc: "[Deskripsi akan diisi]", prices: {}, image: "" },
      { name: "Korean Strawberry", desc: "[Deskripsi akan diisi]", prices: {}, image: "" },
      { name: "Produk Baru", desc: "[Tambahkan produk di sini]", prices: {}, image: "" },
    ]
  }
};

const PARTNERSHIP_DATA = [
  {
    id: "semerbak",
    name: "Semerbak Coffee",
    icon: "☕",
    desc: "Konsep usaha kopi dan minuman Semerbak Coffee.",
    packages: [
      {
        name: "Paket 1",
        price: "[Harga akan diisi]",
        image: "assets/booth-utama.png",
        desc: "[Deskripsi paket akan diisi]",
        facilities: ["Gerobak", "Branding", "Peralatan", "Bahan baku awal", "SOP", "Training", "Pendampingan"]
      },
      {
        name: "Paket 2",
        price: "[Harga akan diisi]",
        image: "assets/booth-interior.png",
        desc: "[Deskripsi paket akan diisi]",
        facilities: ["Gerobak", "Branding", "Peralatan", "Bahan baku awal"]
      },
      {
        name: "Paket 3",
        price: "[Harga akan diisi]",
        image: "assets/booth-outdoor.png",
        desc: "[Deskripsi paket akan diisi]",
        facilities: ["Branding", "Peralatan", "SOP", "Pendampingan"]
      }
    ]
  },
  {
    id: "matcha",
    name: "Matcha",
    icon: "🍵",
    desc: "Konsep usaha minuman matcha.",
    packages: [
      {
        name: "Paket Matcha",
        price: "[Harga akan diisi]",
        image: "",
        desc: "[Deskripsi paket akan diisi]",
        facilities: ["Gerobak", "Branding", "Peralatan", "Bahan baku awal", "SOP", "Training"]
      }
    ]
  },
  {
    id: "esteh",
    name: "Es Teh",
    icon: "🧋",
    desc: "Konsep usaha es teh.",
    packages: [
      {
        name: "Paket Es Teh",
        price: "[Harga akan diisi]",
        image: "",
        desc: "[Deskripsi paket akan diisi]",
        facilities: ["Gerobak", "Branding", "Peralatan", "Bahan baku awal"]
      }
    ]
  },
  {
    id: "sempol",
    name: "Sempol",
    icon: "🍢",
    desc: "Konsep usaha sempol.",
    packages: [
      {
        name: "Paket Sempol",
        price: "[Harga akan diisi]",
        image: "",
        desc: "[Deskripsi paket akan diisi]",
        facilities: ["Gerobak", "Branding", "Peralatan", "Bahan baku awal"]
      }
    ]
  }
];

const rupiah = (value) => typeof value === "number"
  ? new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value)
  : value;

const firstPrice = (prices) => {
  const values = Object.values(prices).filter(v => typeof v === "number");
  return values.length ? Math.min(...values) : null;
};

const sizeEntries = (prices) => Object.entries(prices);

const menuGrid = document.querySelector("#menuGrid");
const tabs = [...document.querySelectorAll(".tab")];
const productModal = document.querySelector("#productModal");
const packageModal = document.querySelector("#packageModal");
const toast = document.querySelector("#toast");

let activeCategory = "kopiena";
let activeProduct = null;
let activeSize = null;
let activeBrand = PARTNERSHIP_DATA[0];

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function whatsappUrl(message) {
  if (!CONFIG.WHATSAPP_NUMBER) return null;
  return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function openWhatsApp(message) {
  const url = whatsappUrl(message);
  if (!url) {
    showToast("Nomor WhatsApp belum dikonfigurasi di script.js.");
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

function formatStartingPrice(prices) {
  const min = firstPrice(prices);
  return min === null ? "[Harga akan diisi]" : `Mulai ${rupiah(min)}`;
}

function renderMenu(category = activeCategory) {
  activeCategory = category;
  const data = MENU_DATA[category];
  menuGrid.innerHTML = data.products.map((product, index) => `
    <article class="product-card">
      <div class="product-image">
        ${product.image
          ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
          : `<div class="product-placeholder" aria-hidden="true">${data.icon}</div>`}
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <div class="product-price">${formatStartingPrice(product.prices)}</div>
        <button class="product-action" type="button" data-product-index="${index}">
          Lihat & Pesan
        </button>
      </div>
    </article>
  `).join("");

  tabs.forEach(tab => {
    const isActive = tab.dataset.category === category;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function openProduct(product) {
  activeProduct = product;
  const sizes = sizeEntries(product.prices);
  activeSize = sizes.length ? sizes[0][0] : null;

  document.querySelector("#modalContent").innerHTML = `
    <div class="modal-product">
      <span class="modal-kicker">${MENU_DATA[activeCategory].label.toUpperCase()}</span>
      <h3 id="modalTitle">${product.name}</h3>
      <p>${product.desc}</p>
      ${sizes.length ? `
        <div class="size-options" role="group" aria-label="Pilih ukuran">
          ${sizes.map(([size, price], i) => `
            <button class="size-option ${i === 0 ? "active" : ""}" type="button" data-size="${size}">
              <strong>${size}</strong>
              <span>${rupiah(price)}</span>
            </button>
          `).join("")}
        </div>
        <div class="order-summary">
          <div><small>Pilihanmu</small><strong id="selectedSize">${activeSize}</strong></div>
          <div><small>Total</small><strong id="selectedPrice">${rupiah(product.prices[activeSize])}</strong></div>
        </div>
        <button class="modal-full-btn" type="button" id="orderProduct">Pesan via WhatsApp →</button>
      ` : `
        <div class="order-summary">
          <div><small>Status harga</small><strong>Belum tersedia</strong></div>
        </div>
        <button class="modal-full-btn" type="button" id="askProduct">Tanya Harga via WhatsApp →</button>
      `}
    </div>
  `;

  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  document.querySelectorAll(".size-option").forEach(button => {
    button.addEventListener("click", () => {
      activeSize = button.dataset.size;
      document.querySelectorAll(".size-option").forEach(x => x.classList.remove("active"));
      button.classList.add("active");
      document.querySelector("#selectedSize").textContent = activeSize;
      document.querySelector("#selectedPrice").textContent = rupiah(product.prices[activeSize]);
    });
  });

  document.querySelector("#orderProduct")?.addEventListener("click", () => {
    openWhatsApp(`Halo Semerbak Coffee, saya mau pesan ${product.name} ukuran ${activeSize}.`);
  });
  document.querySelector("#askProduct")?.addEventListener("click", () => {
    openWhatsApp(`Halo Semerbak Coffee, saya ingin menanyakan harga ${product.name}.`);
  });
}

function closeProduct() {
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderBrands() {
  const grid = document.querySelector("#brandGrid");
  grid.innerHTML = PARTNERSHIP_DATA.map((brand, index) => `
    <button class="brand-card ${index === 0 ? "active" : ""}" type="button" data-brand-id="${brand.id}">
      <div class="brand-symbol">${brand.icon}</div>
      <strong>${brand.name}</strong>
      <small>${brand.desc}</small>
      <span class="brand-arrow">→</span>
    </button>
  `).join("");

  grid.querySelectorAll(".brand-card").forEach(button => {
    button.addEventListener("click", () => {
      activeBrand = PARTNERSHIP_DATA.find(b => b.id === button.dataset.brandId);
      grid.querySelectorAll(".brand-card").forEach(x => x.classList.remove("active"));
      button.classList.add("active");
      renderPackages();
      document.querySelector("#packageArea").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderPackages() {
  document.querySelector("#packageTitle").textContent = activeBrand.name;
  document.querySelector("#packageCount").textContent = `${activeBrand.packages.length} paket`;
  const grid = document.querySelector("#packageGrid");

  grid.innerHTML = activeBrand.packages.map((pack, index) => `
    <article class="package-card">
      <div class="package-photo">
        ${pack.image
          ? `<img src="${pack.image}" alt="${activeBrand.name} — ${pack.name}" loading="lazy">`
          : `<div class="package-placeholder">Foto paket<br>akan diisi</div>`}
      </div>
      <div class="package-info">
        <h4>${pack.name}</h4>
        <div class="package-price">${pack.price}</div>
        <p>${pack.desc}</p>
        <div class="feature-list">
          ${pack.facilities.map(item => `<span>✓ ${item}</span>`).join("")}
        </div>
        <button class="package-btn" type="button" data-package-index="${index}">Lihat Detail</button>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".package-btn").forEach(button => {
    button.addEventListener("click", () => openPackage(activeBrand.packages[Number(button.dataset.packageIndex)]));
  });
}

function openPackage(pack) {
  document.querySelector("#packageModalContent").innerHTML = `
    <div class="package-detail">
      <span class="modal-kicker">${activeBrand.name.toUpperCase()}</span>
      <h3 id="packageModalTitle">${pack.name}</h3>
      <div class="detail-price">${pack.price}</div>
      <p style="font-size:12px;color:#746866">${pack.desc}</p>
      <div class="detail-box">
        <h4>Yang kamu dapatkan</h4>
        <ul>${pack.facilities.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
      <p style="font-size:10px;color:#8a7771;margin:13px 0">Syarat dan ketentuan: [Akan diisi]</p>
      <button class="modal-full-btn" type="button" id="askPackage">Tanya via WhatsApp →</button>
      <button class="modal-full-btn" type="button" id="registerPackage" style="margin-top:8px;background:#241817">Daftar Kemitraan</button>
    </div>
  `;
  packageModal.classList.add("open");
  packageModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const message = `Halo Semerbak Coffee, saya tertarik dengan kemitraan ${activeBrand.name}, paket ${pack.name}. Saya ingin mendapatkan informasi lebih lanjut.`;
  document.querySelector("#askPackage").addEventListener("click", () => openWhatsApp(message));
  document.querySelector("#registerPackage").addEventListener("click", () => openWhatsApp(message + " Saya juga ingin mengetahui proses pendaftarannya."));
}

function closePackage() {
  packageModal.classList.remove("open");
  packageModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

tabs.forEach(tab => tab.addEventListener("click", () => renderMenu(tab.dataset.category)));
menuGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-product-index]");
  if (!button) return;
  openProduct(MENU_DATA[activeCategory].products[Number(button.dataset.productIndex)]);
});

document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeProduct));
document.querySelectorAll("[data-close-package]").forEach(el => el.addEventListener("click", closePackage));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeProduct();
    closePackage();
  }
});

document.querySelectorAll("[data-whatsapp]").forEach(el => {
  el.addEventListener("click", event => {
    event.preventDefault();
    openWhatsApp("Halo Semerbak Coffee, saya ingin mendapatkan informasi lebih lanjut.");
  });
});

document.querySelectorAll("[data-instagram]").forEach(el => {
  el.addEventListener("click", event => {
    if (CONFIG.INSTAGRAM_URL === "#") {
      event.preventDefault();
      showToast("Link Instagram belum dikonfigurasi di script.js.");
      return;
    }
    el.href = CONFIG.INSTAGRAM_URL;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
});

document.querySelectorAll("[data-maps]").forEach(el => {
  el.addEventListener("click", event => {
    if (CONFIG.GOOGLE_MAPS_URL === "#") {
      event.preventDefault();
      showToast("Link Google Maps belum dikonfigurasi di script.js.");
      return;
    }
    el.href = CONFIG.GOOGLE_MAPS_URL;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
});

renderMenu();
renderBrands();
renderPackages();
