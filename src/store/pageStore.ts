import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface PageState {
  title: string;
  description?: string;
  setTitle: (title: string) => void;
  setDescription: (description?: string) => void;
  setPage: (title: string, description?: string) => void;
}

export const usePageStore = create<PageState>()(
  immer((set) => ({
    title: 'Dashboard',
    description: undefined,
    setTitle: (title) => set({ title }),
    setDescription: (description) => set({ description }),
    setPage: (title, description) => set({ title, description }),
  }))
);
