// Firebase 认证模块
// 重要：请将下面的 firebaseConfig 替换为你在 Firebase 控制台复制的配置
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_VAyPp2j845Klr9SY4uv0qus1MBODvew",
  authDomain: "braceletbyte.firebaseapp.com",
  projectId: "braceletbyte",
  storageBucket: "braceletbyte.firebasestorage.app",
  messagingSenderId: "256044354969",
  appId: "1:256044354969:web:4371212a36bffc5a6dd708",
  measurementId: "G-8WZTD03DGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 用户存储 key
const USER_KEY = 'braceletbyte_user';

// ========== 辅助函数 ==========
function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY));
  } catch {
    return null;
  }
}

function saveUser(user) {
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(USER_KEY);
  }
}

// 显示登录/访客选择弹窗
function showAuthModal() {
  // 检查是否已存在弹窗
  if (document.getElementById('authModal')) return;
  
  const modalHtml = `
    <div id="authModal" class="auth-modal" role="dialog" aria-modal="true" aria-labelledby="authModalTitle">
      <div class="auth-modal-backdrop" id="authModalBackdrop"></div>
      <div class="auth-modal-content">
        <button class="auth-modal-close" id="authModalClose" aria-label="Close">×</button>
        <div class="auth-modal-icon" aria-hidden="true">✨</div>
        <h2 id="authModalTitle" class="auth-modal-title">Welcome to BraceletByte!</h2>
        <p class="auth-modal-desc">Sign in to save your cart & wishlist across devices, or continue as a guest.</p>
        
        <button id="googleSignInBtn" class="auth-google-btn">
          <svg class="auth-google-icon" viewBox="0 0 24 24" width="20" height="20">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign in with Google
        </button>
        
        <div class="auth-divider"><span>or</span></div>
        
        <button id="guestModeBtn" class="auth-guest-btn">
          🎮 Continue as Guest
        </button>
        
        <p class="auth-note">✨ Guest mode: Your cart & wishlist are saved on this device only.<br>🔐 Sign in: Sync your data across any device.</p>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  
  // 绑定事件
  document.getElementById('authModalClose')?.addEventListener('click', closeAuthModal);
  document.getElementById('authModalBackdrop')?.addEventListener('click', closeAuthModal);
  document.getElementById('googleSignInBtn')?.addEventListener('click', handleGoogleSignIn);
  document.getElementById('guestModeBtn')?.addEventListener('click', handleGuestMode);
  
  // 阻止背景滚动
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.remove();
  document.body.style.overflow = '';
}

async function handleGoogleSignIn() {
  const btn = document.getElementById('googleSignInBtn');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<div class="auth-loading"></div> Signing in...';
  btn.disabled = true;
  
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    saveUser({
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      isGuest: false
    });
    
    // 尝试迁移访客数据
    migrateGuestData(user.uid);
    
    closeAuthModal();
    showToast(`✨ Welcome, ${user.displayName || 'Bracelet Lover'}!`);
    updateAuthUI();
    
    // 刷新页面数据
    window.dispatchEvent(new CustomEvent('userChanged'));
    
  } catch (error) {
    console.error('Google sign in error:', error);
    let errorMsg = 'Sign in failed. Please try again.';
    if (error.code === 'auth/popup-blocked') {
      errorMsg = 'Popup was blocked. Please allow popups for this site.';
    } else if (error.code === 'auth/unauthorized-domain') {
      errorMsg = 'This domain is not authorized. Please add it to Firebase console.';
    }
    showToast(errorMsg);
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
}

function handleGuestMode() {
  const guestId = 'guest_' + Date.now();
  saveUser({
    uid: guestId,
    name: 'Guest',
    isGuest: true
  });
  
  closeAuthModal();
  showToast('🎮 You\'re in guest mode! Your items are saved on this device.');
  updateAuthUI();
  
  window.dispatchEvent(new CustomEvent('userChanged'));
}

function handleSignOut() {
  if (getCurrentUser()?.isGuest) {
    // 访客登出：清除数据并刷新
    if (confirm('Sign out will clear your guest cart and wishlist. Continue?')) {
      localStorage.removeItem(USER_KEY);
      localStorage.removeItem('braceletbyte_cart');
      localStorage.removeItem('braceletbyte_wishlist');
      window.location.reload();
    }
  } else {
    // Google 用户登出
    signOut(auth).then(() => {
      saveUser(null);
      showToast('Signed out successfully');
      updateAuthUI();
      window.dispatchEvent(new CustomEvent('userChanged'));
    }).catch(err => {
      console.error('Sign out error:', err);
      showToast('Failed to sign out');
    });
  }
}

// 迁移访客数据到 Google 账号
function migrateGuestData(uid) {
  const oldCartKey = 'braceletbyte_cart';
  const oldWishKey = 'braceletbyte_wishlist';
  const newCartKey = `braceletbyte_cart_${uid}`;
  const newWishKey = `braceletbyte_wishlist_${uid}`;
  
  const oldCart = localStorage.getItem(oldCartKey);
  const oldWish = localStorage.getItem(oldWishKey);
  
  if (oldCart) {
    localStorage.setItem(newCartKey, oldCart);
  }
  if (oldWish) {
    localStorage.setItem(newWishKey, oldWish);
  }
  
  // 不清除旧数据，让用户选择
}

// 更新 UI 中的用户按钮
function updateAuthUI() {
  const user = getCurrentUser();
  const accountBtn = document.querySelector('.icon-btn[title="Account"], button[id="accountBtn"]');
  
  if (accountBtn) {
    if (user && !user.isGuest) {
      const initial = (user.name?.[0] || user.email?.[0] || 'U').toUpperCase();
      accountBtn.innerHTML = `<span style="font-weight:600;font-size:14px;">${initial}</span>`;
      accountBtn.title = user.name || user.email || 'Account';
    } else if (user?.isGuest) {
      accountBtn.innerHTML = '🎮';
      accountBtn.title = 'Guest Mode';
    } else {
      accountBtn.innerHTML = '👤';
      accountBtn.title = 'Sign In';
    }
  }
}

// 获取当前用户的存储 key
function getUserStorageKey() {
  const user = getCurrentUser();
  if (!user) return 'braceletbyte_temp';
  return `braceletbyte_${user.isGuest ? 'guest' : 'user'}_${user.uid}`;
}

// 获取购物车（按用户隔离）
function getUserCart() {
  const key = getUserStorageKey() + '_cart';
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

// 保存购物车
function saveUserCart(cart) {
  const key = getUserStorageKey() + '_cart';
  localStorage.setItem(key, JSON.stringify(cart));
}

// 获取心愿单
function getUserWishlist() {
  const key = getUserStorageKey() + '_wishlist';
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

// 保存心愿单
function saveUserWishlist(list) {
  const key = getUserStorageKey() + '_wishlist';
  localStorage.setItem(key, JSON.stringify(list));
}

// 显示 toast 通知
function showToast(message) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
  } else {
    alert(message);
  }
}

// 检查登录状态（页面加载时调用）
function checkAuthState() {
  const user = getCurrentUser();
  
  // 如果没有用户，显示登录弹窗
  if (!user) {
    showAuthModal();
    return false;
  }
  
  // 如果有 Google 用户且没有 Firebase 监听，保持登录
  if (!user.isGuest && auth.currentUser) {
    // 已登录 Firebase
  }
  
  updateAuthUI();
  return true;
}

// 初始化 Firebase 监听
function initAuthListener() {
  onAuthStateChanged(auth, (firebaseUser) => {
    const localUser = getCurrentUser();
    
    if (firebaseUser && (!localUser || localUser.isGuest || localUser.uid !== firebaseUser.uid)) {
      // Firebase 登录状态与本地不同步
      saveUser({
        uid: firebaseUser.uid,
        name: firebaseUser.displayName,
        email: firebaseUser.email,
        photo: firebaseUser.photoURL,
        isGuest: false
      });
      updateAuthUI();
      window.dispatchEvent(new CustomEvent('userChanged'));
    } else if (!firebaseUser && localUser && !localUser.isGuest) {
      // Firebase 登出但本地还有 Google 用户记录
      saveUser(null);
      updateAuthUI();
      window.dispatchEvent(new CustomEvent('userChanged'));
    }
  });
}

// 修改原有的 addToCart 函数（如果 app.js 中需要）
window.addToCartWithAuth = function(product) {
  const cart = getUserCart();
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty += product.qty || 1;
  } else {
    cart.push({ ...product, qty: product.qty || 1 });
  }
  saveUserCart(cart);
  showToast(`✅ "${product.name}" added to cart`);
  updateCartBadge();
};

// 导出给全局使用
window.auth = {
  getCurrentUser,
  getUserCart,
  saveUserCart,
  getUserWishlist,
  saveUserWishlist,
  getUserStorageKey,
  checkAuthState,
  showToast,
  signOut: handleSignOut
};

// 页面加载时检查认证
document.addEventListener('DOMContentLoaded', () => {
  initAuthListener();
  // 延迟检查，让页面先渲染
  setTimeout(() => {
    checkAuthState();
  }, 100);
});