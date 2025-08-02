import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface PageState {
  title: string;
  description?: string;
  showBackButton?: boolean;
  setShowBackButton: (show: boolean) => void;
  setTitle: (title: string) => void;
  setDescription: (description?: string) => void;
  setPage: (title: string, description?: string) => void;
}

export const usePageStore = create<PageState>()(
  immer((set) => ({
    title: 'Dashboard',
    description: undefined,
    showBackButton: false,
    setTitle: (title) => set({ title }),
    setDescription: (description) => set({ description }),
    setShowBackButton: (show) => set({ showBackButton: show }),
    setPage: (title, description) => set({ title, description }),
  }))
);
