import { create } from 'zustand';

export type Toast = {
  id: string;
  title: string;
  description?: string;
  duration?: number;
  type?: 'success' | 'error';
};

interface ToastStore {
  toasts: Toast[];
  show: (toast: Omit<Toast, 'id'>) => void;
  remove: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  show: (toast) =>
    set((state) => ({
      toasts: [
        ...state.toasts,
        { ...toast, id: Math.random().toString(36).slice(2) },
      ],
    })),
  remove: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));

// Imperative toast API
type ToastOptions = {
  description?: string;
  duration?: number;
  type?: 'success' | 'error';
};

const toast = (title: string, options?: ToastOptions) => {
  useToastStore.getState().show({ title, ...options });
};

toast.success = (
  title: string,
  options?: { description?: string; duration?: number }
) => {
  useToastStore.getState().show({ title, ...options, type: 'success' });
};

toast.error = (
  title: string,
  options?: { description?: string; duration?: number }
) => {
  useToastStore.getState().show({ title, ...options, type: 'error' });
};

export { toast };
