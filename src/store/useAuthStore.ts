import { create } from 'zustand';
import axios from 'axios';

interface AuthState {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  fetchLoginStatus: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  fetchLoginStatus: async () => {
    try {
      const response = await axios.get('/api/checkLogin');
      set({ isLoggedIn: response.data.isLoggedIn });
    } catch (error) {
      set({ isLoggedIn: false });
    }
  },
}));

export default useAuthStore;
