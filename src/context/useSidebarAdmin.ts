import { create } from "zustand";

type ISidebarSelectState = "User" | "Card";
interface ISidebarState {
  sidebar: ISidebarSelectState;
  setSidebar: (value: ISidebarSelectState) => void;
}

export const useSidebarStore = create<ISidebarState>()((set) => ({
  sidebar: "User",
  setSidebar: (value) => set({ sidebar: value }),
}));
