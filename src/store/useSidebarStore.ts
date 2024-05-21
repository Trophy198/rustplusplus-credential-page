import { create } from 'zustand';
import Router from 'next/router';

interface SidebarState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarClosed: () => void;
}

const useSidebarStore = create<SidebarState>((set) => {
  const handleRouteChange = () => {
    set({ isSidebarOpen: false });
  };

  Router.events.on('routeChangeStart', handleRouteChange);
  return {
    isSidebarOpen: false,
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    setSidebarClosed: () => set({ isSidebarOpen: false }),
  };
});

export default useSidebarStore;
