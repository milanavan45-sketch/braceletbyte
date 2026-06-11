// ========== BraceletByte Firebase 认证模块 ==========
console.log('🔥 auth.js 加载中...');

// 导入 Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Firebase 配置（你的配置已正确填入）
const firebaseConfig = {
  apiKey: "AIzaSyC_VAyPp2j845Klr9SY4uv0qus1MBODvew",
  authDomain: "braceletbyte.firebaseapp.com",
  projectId: "braceletbyte",
  storageBucket: "braceletbyte.firebasestorage.app",
  messagingSenderId: "256044354969",
  appId: "1:256044354969:web:4371212a36bffc5a6dd708",
  measurementId: "G-8WZTD03DGJ"
};

// 初始化 Firebase（只一次）
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

console.log('✅ Firebase 初始化完成');

// ========== 用户管理 ==========
const USER_KEY = 'braceletbyte_user';

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

// ========== 显示登录弹窗 ==========
function showAuthModal() {
  // 移除已存在的弹窗
  const existing = document.getElementById('authModal');
  if (existing) existing.remove();
  
  const modalHtml = `
    <div id="authModal" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:20000;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;">
      <div style="background:white;border-radius:24px;padding:32px;max-width:400px;width:90%;text-align:center;border:2px solid #FFB5C2;">
        <div style="font-size:56px;">✨</div>
        <h2 style="margin:10px 0;color:#3D2B4A;">Welcome to BraceletByte!</h2>
        <p style="color:#666;margin-bottom:24px;">Sign in to save your cart across devices</p>
        
        <button id="googleSignInBtn" style="width:100%;padding:12px;margin-bottom:12px;background:#4285F4;color:white;border:none;border-radius:999px;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;gap:8px;">
          <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#fff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#fff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#fff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Sign in with Google
        </button>
        
        <div style="margin:16px 0;position:relative;text-align:center;"><span style="background:white;padding:0 12px;color:#999;">or</span><hr style="position:absolute;top:50%;width:100%;z-index:-1;border:none;border-top:1px solid #e0e0e0;"></div>
        
        <button id="guestModeBtn" style="width:100%;padding:12px;background:#e0e0e0;color:#333;border:none;border-radius:999px;cursor:pointer;font-size:16px;">
          🎮 Continue as Guest
        </button>
        
        <p style="font-size:11px;color:#999;margin-top:20px;">✨ Guest mode: Data saved on this device only<br>🔐 Sign in: Sync across any device</p>
        <button id="closeAuthModalBtn" style="margin-top:16px;background:none;border:none;color:#999;cursor:pointer;">× Close</button>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  document.body.style.overflow = 'hidden';
  
  // 绑定事件
  document.getElementById('googleSignInBtn')?.addEventListener('click', handleGoogleSignIn);
  document.getElementById('guestModeBtn')?.addEventListener('click', handleGuestMode);
  document.getElementById('closeAuthModalBtn')?.addEventListener('click', closeAuthModal);
  document.getElementById('authModal')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('authModal')) closeAuthModal();
  });
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.remove();
  document.body.style.overflow = '';
}

// ========== Google 登录 ==========
async function handleGoogleSignIn() {
  const btn = document.getElementById('googleSignInBtn');
  if (!btn) return;
  
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span style="display:inline-block;width:16px;height:16px;border:2px solid white;border-top-color:transparent;border-radius:50%;animation:spin 0.6s linear infinite;"></span> Signing in...';
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
    
    closeAuthModal();
    alert(`✨ Welcome, ${user.displayName || 'Bracelet Lover'}!`);
    
    // 刷新页面加载用户数据
    window.location.reload();
    
  } catch (error) {
    console.error('Google sign in error:', error);
    let errorMsg = 'Sign in failed. Please try again.';
    if (error.code === 'auth/popup-blocked') {
      errorMsg = 'Popup was blocked. Please allow popups for this site.';
    } else if (error.code === 'auth/unauthorized-domain') {
      errorMsg = 'This domain is not authorized. Please add "app.github.dev" to Firebase console.';
    }
    alert(errorMsg);
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
}

// ========== 访客模式 ==========
function handleGuestMode() {
  const guestId = 'guest_' + Date.now();
  saveUser({
    uid: guestId,
    name: 'Guest',
    isGuest: true
  });
  
  closeAuthModal();
  alert('🎮 Guest mode activated! Your cart is saved on this device.');
  window.location.reload();
}

// ========== 登出 ==========
function handleSignOut() {
  const user = getCurrentUser();
  if (user?.isGuest) {
    if (confirm('Sign out will clear your guest cart and wishlist. Continue?')) {
      localStorage.removeItem(USER_KEY);
      window.location.reload();
    }
  } else {
    signOut(auth).then(() => {
      saveUser(null);
      alert('Signed out successfully');
      window.location.reload();
    }).catch(err => {
      console.error('Sign out error:', err);
      alert('Failed to sign out');
    });
  }
}

// ========== 检查登录状态 ==========
function checkAuthState() {
  const user = getCurrentUser();
  if (!user) {
    showAuthModal();
    return false;
  }
  return true;
}

// ========== 初始化 ==========
function initAuthListener() {
  onAuthStateChanged(auth, (firebaseUser) => {
    const localUser = getCurrentUser();
    
    if (firebaseUser && (!localUser || localUser.isGuest || localUser.uid !== firebaseUser.uid)) {
      saveUser({
        uid: firebaseUser.uid,
        name: firebaseUser.displayName,
        email: firebaseUser.email,
        photo: firebaseUser.photoURL,
        isGuest: false
      });
      if (window.location.pathname !== '/index.html') {
        window.location.reload();
      }
    }
  });
}

// 导出全局
window.auth = {
  getCurrentUser,
  signOut: handleSignOut,
  checkAuthState
};

// 将 showAuthModal 暴露为全局函数，供 shared-ui.js 调用
window.showAuthModal = showAuthModal;
document.addEventListener('DOMContentLoaded', () => {
  initAuthListener();
  setTimeout(() => {
    checkAuthState();
  }, 300);
});

console.log('✅ auth.js 加载完成');