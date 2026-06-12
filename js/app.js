const CATEGORIES = [
  { id: 'all', emoji: '✨', label: 'All' },
  { id: 'beaded', emoji: '📿', label: 'Beaded' },
  { id: 'gold', emoji: '🏅', label: 'Gold' },
  { id: 'silver', emoji: '🥈', label: 'Silver' },
  { id: 'pearl', emoji: '🦪', label: 'Pearl' },
  { id: 'friendship', emoji: '💕', label: 'Friendship' },
  { id: 'celestial', emoji: '🌙', label: 'Celestial' },
  { id: 'charm', emoji: '🌸', label: 'Charm' },
  { id: 'crystal', emoji: '💎', label: 'Crystal' },
  { id: 'leather', emoji: '🤎', label: 'Leather' },
  { id: 'stackable', emoji: '🔗', label: 'Stackable' },
  { id: 'vintage', emoji: '🕰️', label: 'Vintage' },
  { id: 'eco', emoji: '🌿', label: 'Eco' },
  { id: 'yarn', emoji: '🧶', label: 'Yarn' },
  { id: 'necklace', emoji: '📿', label: 'Necklace' },
  { id: 'earring', emoji: '💎', label: 'Earring' },
  { id: 'minimalist', emoji: '◽', label: 'Minimalist' },
  { id: 'custom', emoji: '🎨', label: 'Custom' }
];

const PRODUCTS = [
  { id: 'soleil-gold', name: 'Soleil Gold Cuff', material: '18k Gold Plated · Adjustable', price: 48, emoji: '📿', image: 'soleil gold cuff.jpg', bg: 'linear-gradient(135deg,#FFF5E0,#F5D89A)', cat: 'gold', badge: 'new', rating: 4.9,
    desc: 'A sun-kissed cuff that catches every ray. Adjustable fit, hypoallergenic plating.',
    reviews: [
      { name: 'Mia', rating: 5, text: 'Beautiful fit and gorgeous finish — everyone asks where it is from.' },
      { name: 'Zoe', rating: 5, text: 'Stays shiny and feels very luxe on.' }
    ],
    mfg: { origin: 'Handcrafted in Portland, OR', materials: ['Recycled brass base', '18k gold plate', 'Hypoallergenic lacquer'], steps: ['Cast & shaped', 'Triple-plated', 'Hand-polished', 'QC inspected'], lead: '3–5 days', eco: '♻️ Recycled metals' }},
  { id: 'amethyst-stack', name: 'Amethyst Dream Stack', material: 'Natural Amethyst · Set of 3', price: 62, emoji: '🔮', image: 'amethyst dream stack.webp', bg: 'linear-gradient(135deg,#F0E8FF,#D4C5E8)', cat: 'beaded', badge: 'hot', rating: 4.8,
    desc: 'Three dreamy amethyst strands for calm, clarity, and major stack goals.',
    reviews: [
      { name: 'Ivy', rating: 5, text: 'The stones are gorgeous and my wrist feels so calming.' },
      { name: 'Nova', rating: 4, text: 'Styled well with my other bracelets and feels high quality.' }
    ],
    mfg: { origin: 'Strung in Asheville, NC', materials: ['Natural amethyst', 'Silk thread', 'Sterling spacers'], steps: ['Stone selection', 'Hand-knotted', 'Blessed & packaged'], lead: '2–4 days', eco: '🌿 Ethically sourced stones' }},
  { id: 'wave-chain', name: 'Wave Sterling Chain', material: '925 Sterling Silver · 7"', price: 35, oldPrice: 50, emoji: '🌊', image: 'wave sterling chain.webp', bg: 'linear-gradient(135deg,#EEF2F7,#CFD8E8)', cat: 'silver', rating: 4.7,
    desc: 'Minimal wave-link chain — ocean vibes for everyday elegance.',
    reviews: [
      { name: 'Eden', rating: 5, text: 'Lovely chain with a soft wave detail that feels elegant.' },
      { name: 'Rae', rating: 4, text: 'Perfect for stacking with my other silver pieces.' }
    ],
    mfg: { origin: 'Made in Rhode Island', materials: ['925 sterling silver', 'Anti-tarnish coat'], steps: ['Link forging', 'Soldered', 'Tumbled smooth'], lead: '3–5 days', eco: '♻️ Recycled silver' }},
  { id: 'cherry-charm', name: 'Cherry Blossom Charm', material: 'Rose Gold · Enamel Charms', price: 29, oldPrice: 42, emoji: '🌸', image: 'cherry blossom charm.jpg', bg: 'linear-gradient(135deg,#FFE8EE,#F5B8C8)', cat: 'charm', badge: 'sale',
    desc: 'Delicate cherry blossom charms on a rose gold chain — spring forever.',
    mfg: { origin: 'Designed in Tokyo, crafted in LA', materials: ['Rose gold plate', 'Hand-painted enamel'], steps: ['Charm casting', 'Enamel by hand', 'Assembly'], lead: '4–6 days', eco: '💧 Water-based enamel' }},
  { id: 'cognac-leather', name: 'Cognac Leather Wrap', material: 'Full-Grain Leather · Unisex', price: 44, emoji: '🤎', image: 'cognac leather wrap (1).webp', bg: 'linear-gradient(135deg,#EDE0D4,#D4B99A)', cat: 'leather',
    desc: 'Rich cognac leather that ages beautifully. Wraps twice, magnetic clasp.',
    mfg: { origin: 'Tanned in Italy, assembled in NYC', materials: ['Vegetable-tanned leather', 'Brass magnetic clasp'], steps: ['Cut & burnish', 'Edge dyed', 'Clasp set'], lead: '5–7 days', eco: '🌿 Veg-tan, no chrome' }},
  { id: 'jade-bangle', name: 'Jade Harmony Bangle', material: 'Natural Jade · Silver Trim', price: 78, emoji: '💚', image: 'Jade harmony bangle (1).jpg', bg: 'linear-gradient(135deg,#E8F5F0,#A8D8C8)', cat: 'crystal', badge: 'new',
    desc: 'Serene jade bangle with sterling trim — balance and beauty united.',
    mfg: { origin: 'Jade from Myanmar, set in Seattle', materials: ['Grade A jade', '925 silver trim'], steps: ['Jade carving', 'Silver inlay', 'Final polish'], lead: '7–10 days', eco: '✅ Fair-trade sourced' }},
  { id: 'golden-stack', name: 'Golden Hours Stack', material: 'Gold-Fill · Set of 5', price: 95, oldPrice: 120, emoji: '✨', image: 'Golden hour stack.jpg', bg: 'linear-gradient(135deg,#FFF8E0,#FFE87A)', cat: 'stackable',
    desc: 'Five golden bands for golden hour glow. Mix, match, never take off.',
    mfg: { origin: 'Handmade in Austin, TX', materials: ['14k gold-fill wire', 'Lobster clasp'], steps: ['Wire wrapping', 'Hammered texture', 'Set of 5 boxed'], lead: '3–5 days', eco: '♻️ Gold-fill = less mining' }},
  { id: 'name-plate', name: 'Name Plate Bracelet', material: 'Custom Engraved · Silver/Gold', price: 55, emoji: '🎨', image: 'name plate bracelet (1).jpg', bg: 'linear-gradient(135deg,#F0EEFF,#C8BCFF)', cat: 'custom', badge: 'hot',
    desc: 'Your name, your story. Laser-engraved on a dainty plate bracelet.',
    mfg: { origin: 'Engraved on-demand in Chicago', materials: ['Sterling or gold plate', 'Laser engraving'], steps: ['Plate cut', 'Laser engraved', 'Chain attached'], lead: '5–8 days', eco: '♻️ Zero-waste engraving' }},
  { id: 'pearl-classic', name: 'Luna Pearl Strand', material: 'Freshwater Pearl · 14k Clasp', price: 68, emoji: '🦪', image: 'Luna pearl strand.jpg', bg: 'linear-gradient(135deg,#FFF8FC,#F5E0EE)', cat: 'pearl', badge: 'new',
    desc: 'Lustrous freshwater pearls on a dainty 14k clasp — timeless grace.',
    mfg: { origin: 'Pearls from Japan, strung in Boston', materials: ['AAA freshwater pearls', '14k gold clasp'], steps: ['Pearl grading', 'Silk restringing', 'Clasp set'], lead: '4–6 days', eco: '🌊 Sustainable farms' }},
  { id: 'friendship-braid', name: 'Bestie Braid Duo', material: 'Woven Cotton · Set of 2', price: 22, emoji: '💕', image: 'Bestie braided duo.jpg', bg: 'linear-gradient(135deg,#FFE0F0,#FFB8D9)', cat: 'friendship',
    desc: 'Matching friendship bracelets for you and your ride-or-die. Two in every pack!',
    mfg: { origin: 'Woven by artisans in Oaxaca', materials: ['Organic cotton thread', 'Adjustable tie'], steps: ['Hand-braided', 'Color-matched pair', 'Gift tagged'], lead: '2–3 days', eco: '🌿 Organic cotton' }},
  { id: 'moon-celestial', name: 'Moonphase Celestial', material: 'Silver · Moon Charms', price: 52, emoji: '🌙', image: 'moonphase celestial (1).jpg', bg: 'linear-gradient(135deg,#E8E4F8,#B8B0E8)', cat: 'celestial', badge: 'hot',
    desc: 'Phases of the moon on a sterling chain — for stargazers and dreamers.',
    mfg: { origin: 'Cast in New Mexico', materials: ['925 silver', 'Oxidized moon charms'], steps: ['Lost-wax casting', 'Oxidation', 'Chain assembly'], lead: '5–7 days', eco: '♻️ Recycled silver' }},
  { id: 'vintage-locket', name: 'Vintage Locket Chain', material: 'Antique Gold · Photo Locket', price: 58, emoji: '🕰️', image: 'vintage locket chain (1).jpg', bg: 'linear-gradient(135deg,#F5EDE0,#E8D4B0)', cat: 'vintage',
    desc: 'A tiny locket for tiny treasures. Vintage-inspired, modern quality.',
    mfg: { origin: 'Inspired by 1920s Paris, made in Montreal', materials: ['Antique gold plate', 'Hinged locket'], steps: ['Locket hinge set', 'Chain matched', 'Velvet pouch'], lead: '6–8 days', eco: '♻️ Upcycled chain links' }},
  { id: 'eco-cork', name: 'Eco Cork Band', material: 'Cork & Hemp · Vegan', price: 32, emoji: '🌿', image: 'Eco cork.jpg', bg: 'linear-gradient(135deg,#E8F5E8,#B8DEB8)', cat: 'eco', badge: 'new', rating: 4.6,
    desc: 'Lightweight cork and hemp — planet-friendly and super comfy.',
    mfg: { origin: 'Cork from Portugal, assembled in Berlin', materials: ['Natural cork', 'Hemp cord', 'Wood bead'], steps: ['Cork sliced', 'Hemp braided', 'Bead knotted'], lead: '3–4 days', eco: '🌍 100% vegan & biodegradable' },
    reviews: [
      { name: 'Ava', rating: 5, text: 'So comfortable and sustainable — love the natural texture.' },
      { name: 'Cass', rating: 4, text: 'Great everyday bracelet, especially for summer.' }
    ]},
  { id: 'stitched-yarn', name: 'Stitched Yarn Wrap', material: 'Organic Yarn · Soft Tie', price: 26, emoji: '🧶', image: 'yarn ball.jpg', bg: 'linear-gradient(135deg,#FFF0E9,#FFC2B5)', cat: 'yarn',
    desc: 'Soft organic yarn wraps for gentle, playful texture and bright color.',
    mfg: { origin: 'Crafted in Portland, OR', materials: ['Organic cotton yarn', 'Embroidery thread'], steps: ['Hand-stitch', 'Patterned wrap', 'Tied with care'], lead: '2–3 days', eco: '🌿 Vegan yarn and low-waste dye' }},
  { id: 'sunset-necklace', name: 'Sunset Pendant Necklace', material: 'Gold Fill · Shell Charm', price: 54, emoji: '🌅', image: 'Sunset pendant necklace.webp', bg: 'linear-gradient(135deg,#FFF0CE,#FFD4A6)', cat: 'necklace', badge: 'hot',
    desc: 'A warm pendant necklace with beachy shell charm and subtle shine.',
    mfg: { origin: 'Designed in Miami, made in LA', materials: ['Gold fill', 'Shell charm', 'Adjustable chain'], steps: ['Chain finished', 'Charm attached', 'Polished'], lead: '3–5 days', eco: '♻️ Gold fill with minimal mining' }},
  { id: 'opal-drop-ears', name: 'Opal Drop Earrings', material: 'Sterling Silver · Opal', price: 42, emoji: '💎', image: 'opal drop earrings (1).avif', bg: 'linear-gradient(135deg,#E8F2FF,#C7D8FF)', cat: 'earring', rating: 4.8,
    desc: 'Playful opal drops that match your bracelet stack or necklace sets.',
    mfg: { origin: 'Made in Seattle', materials: ['925 sterling silver', 'Lab opal'], steps: ['Stone set', 'Earring formed', 'Polished'], lead: '4–6 days', eco: '🌱 Recycled metals' },
    reviews: [
      { name: 'Lina', rating: 5, text: 'The opal sparkle is even better in person.' },
      { name: 'Tess', rating: 4, text: 'Really pretty earrings with a soft glow.' }
    ]},
  { id: 'minimal-bar', name: 'Whisper Thin Bar', material: 'Sterling Silver · 1mm', price: 38, emoji: '◽', image: 'whisper thin bar.webp', bg: 'linear-gradient(135deg,#F5F5F5,#E0E0E0)', cat: 'minimalist', rating: 4.7,
    desc: 'Ultra-thin bar bracelet — barely there, always noticed.',
    mfg: { origin: 'Minimalist studio in Copenhagen-style workshop, NYC', materials: ['925 sterling', '1mm profile'], steps: ['Bar drawn', 'Ends rounded', 'Mirror polish'], lead: '2–4 days', eco: '♻️ Recycled sterling' },
    reviews: [
      { name: 'Noa', rating: 5, text: 'Perfect subtle finish — I wear it every day.' },
      { name: 'June', rating: 4, text: 'Love the thin design, goes with everything.' }
    ]}
];

const CUSTOMIZE = {
  basePrice: 45,
  uploadPrice: 58,
  simplePalettes: [
    { name: 'Sunrise', colors: ['#F0A83B', '#E87A5D', '#F7D45B', '#97C96A', '#6ABBD8'] },
    { name: 'Carnival', colors: ['#F05B7E', '#6AC7A6', '#F5B942', '#7B8BE7', '#FFDAD2'] },
    { name: 'Sorbet', colors: ['#FFB3C8', '#FFD166', '#8FD6C1', '#7AA9FF', '#FFF1CC'] },
    { name: 'Lagoon', colors: ['#5F89C9', '#7FC8C4', '#F0C257', '#F28D6B', '#F4F2E9'] },
    { name: 'Festival', colors: ['#E05F4E', '#F3CF50', '#66B76F', '#4E9CC8', '#F7EEE1'] }
  ]
};

const CART_KEY = 'braceletbyte_cart';
const WISH_KEY = 'bb_wishlist';
let zoomScale = 1;
let currentModalProduct = null;

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}
function getWishlist() {
  try { return JSON.parse(localStorage.getItem(WISH_KEY)) || []; } catch { return []; }
}
function saveWishlist(list) {
  localStorage.setItem(WISH_KEY, JSON.stringify(list));
}
function updateCartBadge() {
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(i => i.id === item.id && !item.custom);
  if (existing && !item.custom) existing.qty += 1;
  else cart.push({ ...item, qty: 1 });
  saveCart(cart);
  showToast(`✅ "${item.name}" added to cart`);
  announce(`Added ${item.name} to cart`);
  showVisualAlert?.(`Added to cart: ${item.name}`);
}

function removeFromCart(id) {
  saveCart(getCart().filter(i => i.id !== id));
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

function setActiveNav(page) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
}

function getStarMarkup(rating) {
  const stars = Math.round(Math.min(Math.max(rating || 0, 0), 5));
  const filled = '★'.repeat(stars);
  const empty = '☆'.repeat(5 - stars);
  return `<span class="stars" aria-hidden="true">${filled}${empty}</span>`;
}

function renderProductCard(product) {
  const badgeHtml = product.badge
    ? `<span class="product-badge badge-${product.badge}">${product.badge === 'hot' ? 'Hot' : product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}</span>`
    : '';
  const oldPriceHtml = product.oldPrice ? `<span class="price-old">$${product.oldPrice}</span>` : '';
  const wished = getWishlist().includes(product.id);
  const ratingValue = product.rating ?? 4.8;
  const reviewCount = product.reviews?.length || 0;

  return `
    <article class="product-card" data-cat="${product.cat}" data-name="${product.name.toLowerCase()}" data-id="${product.id}" tabindex="0" role="button" aria-label="View details for ${product.name}, $${product.price}">
      <div class="product-img" style="${product.image ? '' : `background:${product.bg}`}">
        ${product.image ? `<img src="${encodeURI(product.image)}" alt="${product.name}">` : `<span aria-hidden="true">${product.emoji}</span>`}
        ${badgeHtml}
        <button class="wishlist-btn ${wished ? 'wished' : ''}" data-wish-id="${product.id}" aria-label="${wished ? 'Remove from' : 'Add to'} wishlist" aria-pressed="${wished}">${wished ? '♥' : '♡'}</button>
      </div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-material">${product.material}</div>
        <div class="product-rating">${getStarMarkup(ratingValue)}<span class="rating-value">${ratingValue.toFixed(1)}</span>${reviewCount ? `<span class="review-count">(${reviewCount})</span>` : ''}</div>
        <div class="product-footer">
          <div><span class="product-price">$${product.price}</span>${oldPriceHtml}</div>
          <button class="add-btn" data-add-id="${product.id}" aria-label="Add ${product.name} to cart">+</button>
        </div>
        <button class="details-link" data-detail-id="${product.id}">View details & zoom →</button>
      </div>
    </article>`;
}

function bindProductGrid(grid) {
  if (!grid) return;

  grid.addEventListener('click', e => {
    const wishBtn = e.target.closest('[data-wish-id]');
    if (wishBtn) { e.stopPropagation(); toggleWish(wishBtn); return; }

    const addBtn = e.target.closest('[data-add-id]');
    if (addBtn) {
      e.stopPropagation();
      const p = PRODUCTS.find(x => x.id === addBtn.dataset.addId);
      if (p) addToCart({ id: p.id, name: p.name, price: p.price, emoji: p.emoji, bg: p.bg, meta: p.material });
      return;
    }

    const detailBtn = e.target.closest('[data-detail-id]');
    const card = e.target.closest('.product-card');
    const id = detailBtn?.dataset.detailId || card?.dataset.id;
    if (id) openProductModal(id);
  });

  grid.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.product-card');
      if (card?.dataset.id) { e.preventDefault(); openProductModal(card.dataset.id); }
    }
  });
}

function toggleWish(btn) {
  const id = btn.dataset.wishId;
  let list = getWishlist();
  const has = list.includes(id);
  list = has ? list.filter(x => x !== id) : [...list, id];
  saveWishlist(list);
  btn.textContent = has ? '♡' : '♥';
  btn.classList.toggle('wished', !has);
  btn.setAttribute('aria-pressed', String(!has));
  btn.setAttribute('aria-label', `${has ? 'Add to' : 'Remove from'} wishlist`);
  showToast(has ? 'Removed from wishlist' : 'Added to wishlist ♥');
}

function openProductModal(id) {
  const user = getUser();
  if (!user) {
    openModal('signupModal');
    showToast('Please sign in or sign up to view product details.');
    return;
  }

  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentModalProduct = p;
  zoomScale = 1;

  document.getElementById('productModalTitle').textContent = p.name;
  document.getElementById('productModalMaterial').textContent = p.material;
  document.getElementById('productModalPrice').textContent = `$${p.price}${p.oldPrice ? ' (was $' + p.oldPrice + ')' : ''}`;
  document.getElementById('productModalDesc').textContent = p.desc || '';

  const mfg = p.mfg;
  document.getElementById('productModalMfg').innerHTML = mfg ? `
    <li><strong>Origin:</strong> ${mfg.origin}</li>
    <li><strong>Materials:</strong> ${mfg.materials.join(', ')}</li>
    <li><strong>Process:</strong> ${mfg.steps.join(' → ')}</li>
    <li><strong>Lead time:</strong> ${mfg.lead}</li>
    <li><strong>Sustainability:</strong> ${mfg.eco}</li>` : '';

  const zoomImg = document.getElementById('zoomImg');
  zoomImg.style.background = p.bg || 'var(--surface-alt)';
  const imageSrc = p.image ? encodeURI(p.image) : '';
  zoomImg.innerHTML = p.image
    ? `<img src="${imageSrc}" alt="${p.name}" loading="lazy">`
    : `<span class="zoom-emoji" aria-hidden="true">${p.emoji}</span>`;
  updateZoom();

  const wished = getWishlist().includes(p.id);
  const reviewCount = p.reviews?.length || 0;
  const ratingValue = p.rating ?? 4.8;
  document.getElementById('productModalRating').innerHTML = `
    <div class="product-review-rating" aria-label="Rated ${ratingValue.toFixed(1)} out of 5 stars">
      ${getStarMarkup(ratingValue)}
      <span class="rating-value">${ratingValue.toFixed(1)}</span>
      <span class="review-count">(${reviewCount} reviews)</span>
    </div>`;
  document.getElementById('productModalReviews').innerHTML = p.reviews && p.reviews.length
    ? p.reviews.map(r => `
        <article class="review-card">
          <div class="review-stars" aria-hidden="true">${getStarMarkup(Math.round(r.rating ?? ratingValue))}</div>
          <div class="reviewer">${r.name}</div>
          <p>${r.text}</p>
        </article>`).join('')
    : `<p class="no-reviews">No reviews yet. Be the first to love this bracelet!</p>`;

  const wishBtn = document.getElementById('productModalWish');
  wishBtn.textContent = wished ? '♥ Wishlisted' : '♡ Wishlist';
  wishBtn.setAttribute('aria-pressed', String(wished));

  openModal('productModal');
  announce(`Opened details for ${p.name}`);
}

function updateZoom() {
  const inner = document.getElementById('zoomInner');
  const level = document.getElementById('zoomLevel');
  if (inner) inner.style.transform = `scale(${zoomScale})`;
  if (level) level.textContent = Math.round(zoomScale * 100) + '%';
}

function initProductModal() {
  document.getElementById('zoomIn')?.addEventListener('click', () => { zoomScale = Math.min(3, zoomScale + 0.25); updateZoom(); });
  document.getElementById('zoomOut')?.addEventListener('click', () => { zoomScale = Math.max(0.5, zoomScale - 0.25); updateZoom(); });
  document.getElementById('zoomReset')?.addEventListener('click', () => { zoomScale = 1; updateZoom(); });

  const vp = document.getElementById('zoomViewport');
  vp?.addEventListener('wheel', e => {
    e.preventDefault();
    zoomScale = Math.max(0.5, Math.min(3, zoomScale + (e.deltaY > 0 ? -0.1 : 0.1)));
    updateZoom();
  }, { passive: false });

  document.getElementById('productModalAdd')?.addEventListener('click', () => {
    if (!currentModalProduct) return;
    const p = currentModalProduct;
    addToCart({ id: p.id, name: p.name, price: p.price, emoji: p.emoji, bg: p.bg, meta: p.material });
    closeModal('productModal');
  });

  document.getElementById('productModalWish')?.addEventListener('click', function () {
    if (!currentModalProduct) return;
    const id = currentModalProduct.id;
    let list = getWishlist();
    const has = list.includes(id);
    list = has ? list.filter(x => x !== id) : [...list, id];
    saveWishlist(list);
    this.textContent = has ? '♡ Wishlist' : '♥ Wishlisted';
    this.setAttribute('aria-pressed', String(!has));
    document.querySelectorAll(`[data-wish-id="${id}"]`).forEach(btn => {
      btn.textContent = has ? '♡' : '♥';
      btn.classList.toggle('wished', !has);
    });
  });
}

function renderCategoryDropdown(select) {
  if (!select) return;
  select.innerHTML = CATEGORIES.map(c =>
    `<option value="${c.id}">${c.label}</option>`
  ).join('');
  select.addEventListener('change', () => filterProducts(select.value));
}

function initProductsPage() {
  const grid = document.getElementById('productGrid');
  const categorySelect = document.getElementById('categorySelect');
  renderCategoryDropdown(categorySelect);
  if (grid) {
    grid.innerHTML = PRODUCTS.map(renderProductCard).join('');
    bindProductGrid(grid);
  }
  document.getElementById('searchInput')?.addEventListener('input', () => applyProductFilters());
  const urlCat = new URLSearchParams(window.location.search).get('cat');
  if (urlCat) {
    const option = categorySelect?.querySelector(`option[value="${urlCat}"]`);
    if (option) {
      categorySelect.value = urlCat;
      filterProducts(urlCat);
    }
  }
}

function applyProductFilters() {
  const category = document.getElementById('categorySelect')?.value || 'all';
  const query = document.getElementById('searchInput')?.value.toLowerCase().trim() || '';
  document.querySelectorAll('.product-card').forEach(card => {
    const name = card.dataset.name || '';
    const mat = card.querySelector('.product-material')?.textContent.toLowerCase() || '';
    const searchableText = `${name} ${mat}`;
    const matchesCategory = category === 'all'
      || card.dataset.cat === category
      || (category === 'gold' && searchableText.includes('gold'))
      || (category === 'silver' && searchableText.includes('silver'))
      || (category === 'beaded' && (searchableText.includes('bead') || searchableText.includes('gemstone')));
    const matchesSearch = !query || name.includes(query) || mat.includes(query);
    card.style.display = matchesCategory && matchesSearch ? '' : 'none';
  });
}

function filterProducts(cat) {
  applyProductFilters();
  const label = CATEGORIES.find(c => c.id === cat)?.label || cat;
  if (cat !== 'all') { showToast(`Showing ${label} products`); announce(`Filtered to ${label} category`); }
}

function initHomeFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (grid) {
    grid.innerHTML = PRODUCTS.slice(0, 4).map(renderProductCard).join('');
    bindProductGrid(grid);
  }
}

function initCustomizeExperience() {
  const previewWeave = document.getElementById('previewWeave');
  const previewLetterStack = document.getElementById('previewLetterStack');
  const previewUploadWrap = document.getElementById('previewUploadWrap');
  const previewUploadImage = document.getElementById('previewUploadImage');
  const previewStrip = document.getElementById('previewStrip');
  const previewCaption = document.getElementById('previewCaption');
  const customPrice = document.getElementById('customPrice');
  if (!previewWeave || !previewLetterStack || !previewUploadWrap || !previewUploadImage || !previewStrip || !previewCaption || !customPrice) return;

  const state = {
    mode: 'simple',
    simplePaletteIndex: 0,
    letters: '',
    letterBackground: '#FFF7E8',
    letterColor: '#E878A0',
    uploadName: '',
    uploadNotes: '',
    uploadImage: ''
  };

  const panels = {
    simple: document.getElementById('simpleControls'),
    letters: document.getElementById('letterControls'),
    upload: document.getElementById('uploadControls')
  };

  function getPalette() {
    return CUSTOMIZE.simplePalettes[state.simplePaletteIndex];
  }

  function nextPaletteIndex() {
    let next = Math.floor(Math.random() * CUSTOMIZE.simplePalettes.length);
    if (next === state.simplePaletteIndex) next = (next + 1) % CUSTOMIZE.simplePalettes.length;
    return next;
  }

  function buildChevronSvg(colors, background = '#FFF8EC') {
    const rowHeight = 52;
    const width = 120;
    const height = 780;
    const rows = Math.ceil(height / rowHeight) + 1;
    let svgShapes = `<rect width="${width}" height="${height}" fill="${background}"/>`;
    for (let row = 0; row < rows; row += 1) {
      const y = row * rowHeight;
      colors.forEach((color, index) => {
        const inset = 10 + index * 9;
        const top = y + index * 8;
        const stroke = 8;
        svgShapes += `<path d="M ${inset} ${top} L ${width / 2} ${top + 22} L ${width - inset} ${top}" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"/>`;
      });
      svgShapes += `<path d="M 0 ${y + 14} L ${width / 2} ${y + 40} L ${width} ${y + 14}" fill="none" stroke="rgba(77,59,54,0.18)" stroke-width="1"/>`;
      svgShapes += `<path d="M 0 ${y + 34} L ${width / 2} ${y + 8} L ${width} ${y + 34}" fill="none" stroke="rgba(77,59,54,0.12)" stroke-width="1"/>`;
    }
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${svgShapes}</svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }

  function updatePrice() {
    let price = CUSTOMIZE.basePrice;
    if (state.mode === 'letters') price += state.letters.length * 3;
    if (state.mode === 'upload') price = CUSTOMIZE.uploadPrice;
    customPrice.textContent = `$${price}`;
    return price;
  }

  function updateModePanels() {
    Object.entries(panels).forEach(([key, panel]) => {
      if (!panel) return;
      panel.hidden = key !== state.mode;
    });
    document.querySelectorAll('#styleOptions .option-btn').forEach(btn => {
      btn.classList.toggle('selected', btn.dataset.mode === state.mode);
    });
  }

  function updatePreview() {
    previewWeave.style.display = 'block';
    previewLetterStack.style.display = 'none';
    previewUploadWrap.hidden = true;
    previewUploadWrap.style.display = 'none';
    previewStrip.style.background = '#FFF8EC';
    previewLetterStack.innerHTML = '';

    if (state.mode === 'simple') {
      const palette = getPalette();
      previewWeave.style.backgroundImage = buildChevronSvg(palette.colors);
      previewCaption.textContent = `${palette.name} chevron colors are live. Use Shuffle Colors to swap the V-line threads.`;
    }

    if (state.mode === 'letters') {
      previewWeave.style.backgroundImage = 'none';
      previewStrip.style.background = state.letterBackground;
      previewLetterStack.style.display = 'flex';
      previewLetterStack.style.color = state.letterColor;
      const letters = state.letters || 'NAME';
      previewLetterStack.innerHTML = letters.split('').map(letter => `<span>${letter === ' ' ? '&bull;' : letter}</span>`).join('');
      previewCaption.textContent = 'Letters stack vertically on the bracelet. Change the bracelet background and the letter color below.';
    }

    if (state.mode === 'upload') {
      previewWeave.style.backgroundImage = 'none';
      previewStrip.style.background = 'linear-gradient(180deg, #F8EEF8, #F7F2EA)';
      previewUploadWrap.hidden = false;
      previewUploadWrap.style.display = 'block';
      if (state.uploadImage) {
        previewUploadImage.src = state.uploadImage;
        previewUploadImage.style.opacity = '1';
        previewCaption.textContent = state.uploadNotes
          ? `Change request: ${state.uploadNotes}`
          : 'Your uploaded design is ready. Add details below to explain what should change.';
      } else {
        previewUploadImage.removeAttribute('src');
        previewUploadImage.style.opacity = '0';
        previewCaption.textContent = 'Upload a bracelet image, then add notes about the changes you want made.';
      }
    }

    updatePrice();
  }

  document.getElementById('styleOptions')?.addEventListener('click', e => {
    const btn = e.target.closest('.option-btn[data-mode]');
    if (!btn) return;
    state.mode = btn.dataset.mode;
    updateModePanels();
    updatePreview();
  });

  document.getElementById('shuffleSimpleBtn')?.addEventListener('click', () => {
    state.simplePaletteIndex = nextPaletteIndex();
    updatePreview();
  });

  document.getElementById('letterInput')?.addEventListener('input', e => {
    state.letters = e.target.value.slice(0, 12).toUpperCase();
    e.target.value = state.letters;
    updatePreview();
  });

  document.getElementById('letterBgOptions')?.addEventListener('click', e => {
    const swatch = e.target.closest('.color-swatch');
    if (!swatch) return;
    state.letterBackground = swatch.dataset.color;
    document.querySelectorAll('#letterBgOptions .color-swatch').forEach(btn => btn.classList.remove('selected'));
    swatch.classList.add('selected');
    updatePreview();
  });

  document.getElementById('letterTextOptions')?.addEventListener('click', e => {
    const swatch = e.target.closest('.color-swatch');
    if (!swatch) return;
    state.letterColor = swatch.dataset.color;
    document.querySelectorAll('#letterTextOptions .color-swatch').forEach(btn => btn.classList.remove('selected'));
    swatch.classList.add('selected');
    updatePreview();
  });

  document.getElementById('designUpload')?.addEventListener('change', e => {
    const [file] = e.target.files || [];
    if (!file) return;
    state.uploadName = file.name;
    const reader = new FileReader();
    reader.onload = () => {
      state.uploadImage = reader.result;
      updatePreview();
    };
    reader.readAsDataURL(file);
  });

  document.getElementById('designNotes')?.addEventListener('input', e => {
    state.uploadNotes = e.target.value.trim();
    if (state.mode === 'upload') updatePreview();
  });

  document.getElementById('addCustomBtn')?.addEventListener('click', () => {
    const price = updatePrice();
    let item = {
      id: 'custom-' + Date.now(),
      price,
      emoji: '*',
      custom: true
    };

    if (state.mode === 'simple') {
      const palette = getPalette();
      item = {
        ...item,
        name: 'Simple Chevron Bracelet',
        bg: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[2]})`,
        meta: `Simple mode | Palette: ${palette.name}`
      };
    }

    if (state.mode === 'letters') {
      item = {
        ...item,
        name: 'Letter Bracelet',
        bg: `linear-gradient(135deg, ${state.letterBackground}, ${state.letterBackground})`,
        meta: `Letters mode | Text: ${state.letters || 'NAME'} | Bracelet: ${state.letterBackground} | Letter color: ${state.letterColor}`
      };
    }

    if (state.mode === 'upload') {
      item = {
        ...item,
        name: 'Uploaded Pattern Bracelet',
        bg: 'linear-gradient(135deg, #F8EEF8, #F7F2EA)',
        meta: `Upload mode | File: ${state.uploadName || 'No file yet'} | Notes: ${state.uploadNotes || 'No notes yet'} | Source: friendship-bracelets.net`
      };
    }

    addToCart(item);
  });

  updateModePanels();
  updatePreview();
}

function initCustomizePage() {
  const state = { style: 'beaded', color: '#F5D061', pattern: 'solid', letters: '' };
  const previewRing = document.getElementById('previewRing');
  if (!previewRing) return;

  function updatePreview() {
    const styleObj = CUSTOMIZE.styles.find(s => s.id === state.style);
    previewRing.className = 'preview-ring' + (styleObj?.class ? ' ' + styleObj.class : '');
    previewRing.style.borderColor = state.color;

    const patternObj = CUSTOMIZE.patterns.find(p => p.id === state.pattern);
    const pp = document.getElementById('previewPattern');
    pp.style.background = patternObj?.css || 'transparent';
    pp.style.backgroundSize = (state.pattern === 'dots' || state.pattern === 'hearts') ? '14px 14px' : '';

    const eng = document.getElementById('previewEngraving');
    eng.textContent = state.letters;
    eng.style.display = state.letters ? 'block' : 'none';

    const beads = document.getElementById('previewBeads');
    beads.innerHTML = '';
    if (state.style === 'beaded') {
      for (let i = 0; i < 8; i++) {
        const bead = document.createElement('div');
        bead.className = 'preview-bead';
        bead.style.background = state.color;
        const angle = (i / 8) * 360, rad = angle * Math.PI / 180, r = 115;
        bead.style.left = `${130 + Math.sin(rad) * r - 7}px`;
        bead.style.top = `${130 - Math.cos(rad) * r - 7}px`;
        beads.appendChild(bead);
      }
    }
    document.getElementById('customPrice').textContent = `$${CUSTOMIZE.basePrice + state.letters.length * 3}`;
  }

  ['styleOptions', 'patternOptions'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', e => {
      const btn = e.target.closest('.option-btn');
      if (!btn) return;
      const key = id === 'styleOptions' ? 'style' : 'pattern';
      state[key] = btn.dataset.value;
      document.querySelectorAll(`#${id} .option-btn`).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      updatePreview();
    });
  });

  document.getElementById('colorOptions')?.addEventListener('click', e => {
    const sw = e.target.closest('.color-swatch');
    if (!sw) return;
    state.color = sw.dataset.color;
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
    sw.classList.add('selected');
    updatePreview();
  });

  document.getElementById('engravingInput')?.addEventListener('input', e => {
    state.letters = e.target.value.slice(0, 12).toUpperCase();
    e.target.value = state.letters;
    updatePreview();
  });

  document.getElementById('addCustomBtn')?.addEventListener('click', () => {
    const sl = CUSTOMIZE.styles.find(s => s.id === state.style)?.label;
    const cl = CUSTOMIZE.colors.find(c => c.hex === state.color)?.label || 'Custom';
    const pl = CUSTOMIZE.patterns.find(p => p.id === state.pattern)?.label;
    const price = CUSTOMIZE.basePrice + state.letters.length * 3;
    addToCart({
      id: 'custom-' + Date.now(), name: 'Custom Bracelet', price, emoji: '✨',
      bg: `linear-gradient(135deg, ${state.color}44, ${state.color}88)`,
      meta: `${sl} · ${cl} · ${pl}${state.letters ? ' · "' + state.letters + '"' : ''}`, custom: true
    });
  });

  updatePreview();
}

function renderCartPage() {
  const container = document.getElementById('cartContent');
  if (!container) return;

  function renderOrderHistory() {
    const orders = getOrderHistory();
    if (!orders.length) {
      return `<div class="order-history"><h2>Order History</h2><p>No orders yet. Place one to see it here, and enjoy easy returns.</p><p><strong>Returns:</strong> 30-day hassle-free returns on standard pieces.</p></div>`;
    }
    return `
      <div class="order-history">
        <h2>Order History</h2>
        ${orders.map(order => `
          <div class="order-card">
            <div class="order-card-header">
              <strong>${order.date}</strong>
              <span>${order.total}</span>
            </div>
            <div class="order-card-items">
              ${order.items.map(item => `<div>${item.name}${item.qty > 1 ? ' × ' + item.qty : ''} — $${(item.price * item.qty).toFixed(2)}</div>`).join('')}
            </div>
            <div class="order-card-meta">
              <span>Status: ${order.status}</span>
              <span>Returns: ${order.return}</span>
            </div>
          </div>`).join('')}
      </div>`;
  }

  function render() {
    const cart = getCart();
    const ordersHtml = renderOrderHistory();
    if (!cart.length) {
      container.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon" aria-hidden="true">🛍️</div><h2>Your cart is empty</h2><p>Add bracelets from our shop or create your own!</p><a href="products.html" class="btn-primary">Browse Products</a> <a href="customize.html" class="btn-secondary" style="margin-left:12px">Customize</a></div>${ordersHtml}`;
      return;
    }
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const shipping = subtotal >= 75 ? 0 : 5.99;
    container.innerHTML = `
      <div class="cart-items">${cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-img" style="background:${item.bg || 'var(--surface-alt)'}" aria-hidden="true">${item.emoji || '📿'}</div>
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}${item.qty > 1 ? ' × ' + item.qty : ''}</div>
            <div class="cart-item-meta">${item.meta || ''}</div>
          </div>
          <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
          <button class="remove-btn" data-remove="${item.id}" aria-label="Remove ${item.name} from cart">✕</button>
        </div>`).join('')}
      </div>
      <div class="cart-summary">
        <div class="summary-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
        <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? 'Free ✨' : '$' + shipping.toFixed(2)}</span></div>
        <div class="summary-row total"><span>Total</span><span>$${(subtotal + shipping).toFixed(2)}</span></div>
        <p class="checkout-note" role="note">🔒 No card details ever — we only ask for your name</p>
        <button class="checkout-btn" id="checkoutBtn">Proceed to Checkout 💌</button>
      </div>
      ${ordersHtml}`;

    container.querySelectorAll('[data-remove]').forEach(btn => {
      btn.addEventListener('click', () => { removeFromCart(btn.dataset.remove); showToast('Item removed'); render(); });
    });
    document.getElementById('checkoutBtn')?.addEventListener('click', startCheckout);
  }
  render();
}

function initCartPage() { renderCartPage(); }

function startCheckout() {
  const user = getUser?.();
  const nameInput = document.getElementById('checkoutName');
  if (nameInput && user?.name) nameInput.value = user.name;
  openModal('checkoutModal');
  if (!document.getElementById('checkoutForm')?.dataset.bound) {
    document.getElementById('checkoutForm').dataset.bound = '1';
    document.getElementById('checkoutForm').addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('checkoutName').value.trim();
      if (!name) return;
      saveUser?.({ name, email: getUser?.()?.email || '' });
      const cart = getCart();
      const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
      const shipping = subtotal >= 75 ? 0 : 5.99;
      const total = subtotal + shipping;
      const order = {
        date: new Date().toLocaleString(),
        total: `$${total.toFixed(2)}`,
        items: cart.map(item => ({ name: item.name, qty: item.qty, price: item.price })),
        status: 'Confirmed',
        return: '30-day return available'
      };
      recordOrder(order);
      saveCart([]);
      closeModal('checkoutModal');
      showToast(`Thank you, ${name}! Order placed 🎉`);
      showVisualAlert?.(`Order confirmed for ${name}! No payment needed.`);
      announce(`Order placed successfully for ${name}`);
      if (document.body.dataset.page === 'cart') renderCartPage();
      updateAccountButton?.();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  initProductModal();

  const page = document.body.dataset.page;
  if (page) setActiveNav(page);
  if (page === 'home') initHomeFeatured();
  if (page === 'products') initProductsPage();
  if (page === 'customize') initCustomizeExperience();
  if (page === 'cart') initCartPage();

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); });
  });
});
