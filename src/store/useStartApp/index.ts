import { create } from 'zustand';

export interface GlobalData {
  isStart: boolean;
  setIsStart: (payload: boolean) => void;
}

export const useStartApp = create<GlobalData>((set) => ({
  isStart: false,
  setIsStart: (payload: boolean) => {
    set({ isStart: payload });
  }
}));
