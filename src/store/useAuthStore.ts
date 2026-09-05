import { create } from 'zustand';
import { hasLoginFlagCookie } from '@/lib/authCookie';

interface AuthState {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  fetchLoginStatus: () => void;
}

/**
 * Login state is derived from the non-HttpOnly `rpp_logged_in` cookie that is
 * set alongside the HttpOnly credential cookie. Reading it client-side avoids a
 * serverless function call on every page load.
 */
const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  fetchLoginStatus: () => set({ isLoggedIn: hasLoginFlagCookie() }),
}));

export default useAuthStore;
