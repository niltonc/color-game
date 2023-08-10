import { create } from 'zustand';

export interface GlobalData {
  global: boolean;
  setGlobal: (payload: boolean) => void;
}

export const useAppStore = create<GlobalData>((set) => ({
  global: false,
  setGlobal: (payload: boolean) => {
    set({ global: payload });
  }
}));
