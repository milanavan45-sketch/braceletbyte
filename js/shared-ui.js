/* Shared overlays, splash, modals, chat, accessibility — all pages */

function injectSharedUI() {
  if (document.getElementById('bb-overlays')) return;

  const wrap = document.createElement('div');
  wrap.id = 'bb-overlays';
  wrap.innerHTML = `
    <div id="splash" class="splash" role="presentation" aria-hidden="true">
      <div class="splash-bg"></div>
      <div class="splash-sparkles" aria-hidden="true"></div>
      <div class="splash-orbit" aria-hidden="true">
        <svg class="splash-logo" viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="54" fill="var(--surface)" stroke="var(--pink)" stroke-width="3"/>
          <circle cx="60" cy="60" r="36" stroke="var(--lavender)" stroke-width="5" fill="none" class="splash-ring"/>
          <circle cx="60" cy="24" r="7" fill="var(--gold)"/>
          <circle cx="85" cy="38" r="6" fill="var(--pink)"/>
          <circle cx="96" cy="60" r="6" fill="var(--mint)"/>
          <circle cx="85" cy="82" r="6" fill="var(--lavender)"/>
          <circle cx="60" cy="96" r="7" fill="var(--gold)"/>
          <circle cx="35" cy="82" r="6" fill="var(--pink)"/>
          <circle cx="24" cy="60" r="6" fill="var(--mint)"/>
          <circle cx="35" cy="38" r="6" fill="var(--lavender)"/>
        </svg>
      </div>
      <p class="splash-title">BraceletByte</p>
      <p class="splash-sub">✨ wrist magic loading ✨</p>
    </div>

    <div id="signupModal" class="modal" role="dialog" aria-modal="true" aria-labelledby="signupTitle" hidden>
      <div class="modal-backdrop" data-close-modal="signupModal"></div>
      <div class="modal-panel modal-whimsy">
        <button class="modal-close" data-close-modal="signupModal" aria-label="Close sign up">×</button>
        <div class="modal-icon" aria-hidden="true">🎀</div>
        <h2 id="signupTitle">Welcome to BraceletByte!</h2>
        <p class="modal-desc">Sign up so we know your name at checkout — no payment info needed, ever.</p>
        <form id="signupForm">
          <label for="signupName">Your name <span class="req">*</span></label>
          <input type="text" id="signupName" class="field-input" required autocomplete="name" placeholder="e.g. Luna"/>
          <label for="signupEmail">Email (optional, for cute updates)</label>
          <input type="email" id="signupEmail" class="field-input" autocomplete="email" placeholder="you@example.com"/>
          <button type="submit" class="btn-primary btn-block">Join the sparkle club ✨</button>
          <button type="button" class="btn-ghost btn-block" data-close-modal="signupModal">Maybe later</button>
        </form>
      </div>
    </div>

    <div id="checkoutModal" class="modal" role="dialog" aria-modal="true" aria-labelledby="checkoutTitle" hidden>
      <div class="modal-backdrop" data-close-modal="checkoutModal"></div>
      <div class="modal-panel modal-whimsy">
        <button class="modal-close" data-close-modal="checkoutModal" aria-label="Close checkout">×</button>
        <div class="modal-icon" aria-hidden="true">💌</div>
        <h2 id="checkoutTitle">Almost there!</h2>
        <p class="modal-desc">Tell us your name to complete your order. We never ask for card details.</p>
        <form id="checkoutForm">
          <label for="checkoutName">Your name <span class="req">*</span></label>
          <input type="text" id="checkoutName" class="field-input" required autocomplete="name" placeholder="Your name"/>
          <p class="checkout-note" role="note">🔒 No card details · No payment info · Name only</p>
          <button type="submit" class="btn-primary btn-block">Place Order 🎉</button>
        </form>
      </div>
    </div>

    <div id="productModal" class="modal modal-wide" role="dialog" aria-modal="true" aria-labelledby="productModalTitle" hidden>
      <div class="modal-backdrop" data-close-modal="productModal"></div>
      <div class="modal-panel modal-product">
        <button class="modal-close" data-close-modal="productModal" aria-label="Close product details">×</button>
        <div class="product-modal-grid">
          <div class="zoom-panel">
            <div class="zoom-toolbar" role="toolbar" aria-label="Image zoom controls">
              <button type="button" id="zoomOut" aria-label="Zoom out">−</button>
              <span id="zoomLevel" aria-live="polite">100%</span>
              <button type="button" id="zoomIn" aria-label="Zoom in">+</button>
              <button type="button" id="zoomReset" aria-label="Reset zoom">Reset</button>
            </div>
            <div class="zoom-viewport" id="zoomViewport" tabindex="0" aria-label="Product image, scroll or pinch to zoom">
              <div class="zoom-inner" id="zoomInner">
                <div class="zoom-img" id="zoomImg"></div>
              </div>
            </div>
            <p class="zoom-hint">Use +/− buttons, scroll wheel, or pinch to zoom</p>
          </div>
          <div class="product-modal-info">
            <h2 id="productModalTitle"></h2>
            <p id="productModalMaterial" class="product-modal-material"></p>
            <p id="productModalPrice" class="product-modal-price"></p>
            <p id="productModalDesc" class="product-modal-desc"></p>
            <div class="mfg-section">
              <h3>🏭 Manufacturing & Craft</h3>
              <ul id="productModalMfg" class="mfg-list"></ul>
            </div>
            <div class="product-modal-actions">
              <button type="button" class="btn-primary" id="productModalAdd">Add to Cart</button>
              <button type="button" class="btn-secondary" id="productModalWish" aria-pressed="false">♡ Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="sizeGuideModal" class="modal" role="dialog" aria-modal="true" aria-labelledby="sizeGuideTitle" hidden>
      <div class="modal-backdrop" data-close-modal="sizeGuideModal"></div>
      <div class="modal-panel modal-whimsy">
        <button class="modal-close" data-close-modal="sizeGuideModal" aria-label="Close size guide">×</button>
        <h2 id="sizeGuideTitle">📏 Wrist Size Guide</h2>
        <table class="size-table">
          <thead><tr><th>Size</th><th>Wrist (in)</th><th>Fit</th></tr></thead>
          <tbody>
            <tr><td>XS</td><td>5.5–6</td><td>Snug</td></tr>
            <tr><td>S</td><td>6–6.5</td><td>Classic</td></tr>
            <tr><td>M</td><td>6.5–7</td><td>Comfortable</td></tr>
            <tr><td>L</td><td>7–7.5</td><td>Relaxed</td></tr>
            <tr><td>XL</td><td>7.5+</td><td>Loose & cozy</td></tr>
          </tbody>
        </table>
        <p class="modal-desc">Most of our bracelets are adjustable — measure with a soft tape around your wrist bone.</p>
      </div>
    </div>

    <div class="a11y-bar" role="region" aria-label="Accessibility tools">
      <button type="button" id="a11yLargeText" aria-pressed="false" title="Larger text">A+</button>
      <button type="button" id="a11yHighContrast" aria-pressed="false" title="High contrast">◐</button>
      <button type="button" id="a11yReduceMotion" aria-pressed="false" title="Reduce motion">◎</button>
    </div>

    <button type="button" class="chat-fab" id="chatFab" aria-expanded="false" aria-controls="chatPanel" aria-label="Open AI assistant chat">
      <span aria-hidden="true">💬</span>
      <span class="chat-fab-label">Ask Byte</span>
    </button>

    <div id="chatPanel" class="chat-panel" role="dialog" aria-label="AI shopping assistant" hidden>
      <div class="chat-header">
        <span>✨ Byte Assistant</span>
        <button type="button" id="chatClose" aria-label="Close chat">×</button>
      </div>
      <div class="chat-messages" id="chatMessages" role="log" aria-live="polite" aria-relevant="additions"></div>
      <div class="chat-quick" id="chatQuick" role="group" aria-label="Quick questions"></div>
      <form class="chat-form" id="chatForm">
        <label for="chatInput" class="visually-hidden">Type your question</label>
        <input type="text" id="chatInput" placeholder="Ask about products, shipping…" autocomplete="off"/>
        <button type="submit" aria-label="Send message">↑</button>
      </form>
    </div>

    <div id="liveAnnouncer" class="visually-hidden" role="status" aria-live="assertive" aria-atomic="true"></div>
    <div id="visualAlert" class="visual-alert" role="alert" hidden></div>
  `;
  document.body.appendChild(wrap);

  initSparkles();
  initModals();
  initChat();
  initA11yBar();
  augmentHeader();
}

function augmentHeader() {
  const actions = document.querySelector('.header-actions');
  if (!actions || document.getElementById('themeToggle')) return;

  const themeBtn = document.createElement('button');
  themeBtn.type = 'button';
  themeBtn.id = 'themeToggle';
  themeBtn.className = 'icon-btn';
  themeBtn.setAttribute('aria-label', 'Toggle light and dark mode');
  themeBtn.innerHTML = '<span class="theme-icon" aria-hidden="true">🌙</span>';

  const accountBtn = document.createElement('button');
  accountBtn.type = 'button';
  accountBtn.id = 'accountBtn';
  accountBtn.className = 'account-btn';
  accountBtn.setAttribute('aria-label', 'Sign up or view account');
  accountBtn.innerHTML = '<span aria-hidden="true">✨</span> <span id="accountLabel">Sign Up</span>';

  const sizeBtn = document.createElement('button');
  sizeBtn.type = 'button';
  sizeBtn.id = 'sizeGuideBtn';
  sizeBtn.className = 'icon-btn';
  sizeBtn.setAttribute('aria-label', 'Open wrist size guide');
  sizeBtn.textContent = '📏';

  actions.insertBefore(themeBtn, actions.firstChild);
  actions.insertBefore(sizeBtn, actions.firstChild);
  actions.insertBefore(accountBtn, actions.firstChild);

  themeBtn.addEventListener('click', toggleTheme);
  accountBtn.addEventListener('click', () => openModal('signupModal'));
  sizeBtn.addEventListener('click', () => openModal('sizeGuideModal'));

  updateAccountButton();
}

function initSparkles() {
  const container = document.querySelector('.splash-sparkles');
  if (!container) return;
  for (let i = 0; i < 24; i++) {
    const s = document.createElement('span');
    s.className = 'sparkle';
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(s);
  }
}

function initModals() {
  document.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', () => closeModal(el.dataset.closeModal));
  });

  document.getElementById('signupForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    if (!name) return;
    saveUser({ name, email });
    closeModal('signupModal');
    announce(`Welcome, ${name}! You're signed up.`);
    showVisualAlert(`Welcome, ${name}! 🎀`);
    updateAccountButton();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      ['productModal', 'signupModal', 'checkoutModal', 'sizeGuideModal'].forEach(id => closeModal(id));
      closeChat();
    }
  });
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  const focusable = modal.querySelector('input, button, [tabindex="0"]');
  focusable?.focus();
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.hidden = true;
  if (!document.querySelector('.modal:not([hidden])')) {
    document.body.classList.remove('modal-open');
  }
}

function initTheme() {
  const saved = localStorage.getItem('bb_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('bb_theme', next);
  updateThemeIcon(next);
  announce(next === 'dark' ? 'Dark mode on' : 'Light mode on');
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('.theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function runSplash() {
  const splash = document.getElementById('splash');
  if (!splash) return;

  const reduced = document.documentElement.classList.contains('reduce-motion')
    || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const seen = sessionStorage.getItem('bb_splash_done');

  if (reduced || seen) {
    splash.remove();
    maybeShowSignup();
    return;
  }

  sessionStorage.setItem('bb_splash_done', '1');
  document.body.classList.add('splash-active');

  setTimeout(() => {
    splash.classList.add('splash-out');
    setTimeout(() => {
      splash.remove();
      document.body.classList.remove('splash-active');
      maybeShowSignup();
    }, 700);
  }, 2800);
}

function maybeShowSignup() {
  if (!getUser()?.name) {
    setTimeout(() => openModal('signupModal'), 400);
  }
}

function initChat() {
  const fab = document.getElementById('chatFab');
  const panel = document.getElementById('chatPanel');
  const form = document.getElementById('chatForm');
  const input = document.getElementById('chatInput');
  const quick = document.getElementById('chatQuick');

  const quickQs = ['Shipping?', 'Customize?', 'Returns?', 'Size guide?', 'Categories?'];
  quickQs.forEach(q => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = q;
    b.addEventListener('click', () => { input.value = q; form.requestSubmit(); });
    quick.appendChild(b);
  });

  fab?.addEventListener('click', () => {
    const open = panel.hidden;
    panel.hidden = !open;
    fab.setAttribute('aria-expanded', String(open));
    if (open) {
      input.focus();
      if (!panel.dataset.greeted) {
        addChatMsg('bot', "Hi! I'm Byte ✨ Ask me about products, shipping, customizing, or accessibility!");
        panel.dataset.greeted = '1';
      }
    }
  });

  document.getElementById('chatClose')?.addEventListener('click', closeChat);

  form?.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addChatMsg('user', text);
    input.value = '';
    setTimeout(() => addChatMsg('bot', getChatReply(text)), 400);
  });
}

function closeChat() {
  const panel = document.getElementById('chatPanel');
  const fab = document.getElementById('chatFab');
  if (panel) panel.hidden = true;
  if (fab) fab.setAttribute('aria-expanded', 'false');
}

function addChatMsg(role, text) {
  const box = document.getElementById('chatMessages');
  if (!box) return;
  const div = document.createElement('div');
  div.className = `chat-msg chat-msg-${role}`;
  div.textContent = text;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function getChatReply(text) {
  const q = text.toLowerCase();
  if (/ship|deliver|post/.test(q)) return 'Shipping is $5.99, FREE on orders over $75! Orders arrive in 3–7 days. 📦';
  if (/custom|design|engrav|letter/.test(q)) return 'Head to Customize to pick style, color, pattern & letters! Live preview included. 🎨';
  if (/return|refund/.test(q)) return '30-day hassle-free returns on all standard pieces! 💕';
  if (/size|fit|wrist/.test(q)) return 'Click the 📏 button in the header for our full wrist size guide! Most pieces are adjustable.';
  if (/categor|type|kind/.test(q)) return 'We have Beaded, Gold, Pearl, Celestial, Friendship, Eco, Vintage & more! Browse Products to filter. ✨';
  if (/blind|screen reader|access/.test(q)) return 'We support screen readers, skip links, high contrast, large text & visual alerts (no sound needed). Use the A+ tools on the left!';
  if (/deaf|hear|sound/.test(q)) return 'All notifications are visual — toasts, banners & chat. No audio required! 💬';
  if (/pay|card|credit/.test(q)) return 'We never ask for card details! Checkout only needs your name. 🔒';
  if (/sign|account|join/.test(q)) return 'Click Sign Up in the header after the welcome animation! Just your name — email optional.';
  if (/hello|hi|hey/.test(q)) return 'Hello, sparkle friend! How can I help you find the perfect bracelet? ✨';
  return 'Try asking about shipping, customizing, categories, sizes, or accessibility! Or browse Products — every card opens full details with zoom. 💖';
}

function initA11yBar() {
  document.getElementById('a11yLargeText')?.addEventListener('click', function () {
    const on = document.documentElement.classList.toggle('large-text');
    this.setAttribute('aria-pressed', String(on));
    announce(on ? 'Larger text enabled' : 'Larger text disabled');
  });
  document.getElementById('a11yHighContrast')?.addEventListener('click', function () {
    const on = document.documentElement.classList.toggle('high-contrast');
    this.setAttribute('aria-pressed', String(on));
    announce(on ? 'High contrast enabled' : 'High contrast disabled');
  });
  document.getElementById('a11yReduceMotion')?.addEventListener('click', function () {
    const on = document.documentElement.classList.toggle('reduce-motion');
    this.setAttribute('aria-pressed', String(on));
    announce(on ? 'Reduced motion enabled' : 'Reduced motion disabled');
  });
}

function announce(msg) {
  const el = document.getElementById('liveAnnouncer');
  if (el) { el.textContent = ''; setTimeout(() => { el.textContent = msg; }, 50); }
}

function showVisualAlert(msg) {
  const el = document.getElementById('visualAlert');
  if (!el) return;
  el.textContent = msg;
  el.hidden = false;
  setTimeout(() => { el.hidden = true; }, 4000);
}

const USER_KEY = 'bb_user';
function getUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY)); } catch { return null; }
}
function saveUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify({ ...user, signedUp: true }));
}
function updateAccountButton() {
  const user = getUser();
  const label = document.getElementById('accountLabel');
  const btn = document.getElementById('accountBtn');
  if (label && user?.name) {
    label.textContent = user.name.split(' ')[0];
    btn?.setAttribute('aria-label', `Signed in as ${user.name}. Click to update profile.`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  injectSharedUI();
  initTheme();
  runSplash();
});
