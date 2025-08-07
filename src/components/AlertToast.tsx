import { useEffect } from 'react';
import animatedCheck from '@/assets/images/check-animation.gif';
import animatedCross from '@/assets/images/cross-animation.gif';
import { cn } from '@/lib/utils';
import { useToastStore } from '@/store/toastStore';
import { AlertDialog, AlertDialogContent } from './ui/alert-dialog';
// import { SuccessToast } from '../SuccessToast';

export function AlertToast() {
  const { toasts, remove } = useToastStore();

  useEffect(() => {
    if (toasts.length === 0) {
      return;
    }
    const timers = toasts.map((toast) =>
      setTimeout(() => remove(toast.id), toast.duration ?? 3000)
    );
    return () => timers.forEach(clearTimeout);
  }, [toasts, remove]);

  const { title, description, type } = toasts[0] || {};

  return (
    <AlertDialog open={toasts.length > 0}>
      <AlertDialogContent>
        <div
          className={cn(
            'flex w-full max-w-md flex-col items-center justify-center rounded-3xl bg-white p-5'
          )}
        >
          <div className="mb-6">
            <img
              alt={type === 'error' ? 'Error animation' : 'Success animation'}
              className="rounded-full object-contain"
              height={120}
              src={type === 'error' ? animatedCross : animatedCheck}
              width={120}
            />
          </div>
          <h2 className={cn('mb-2 text-center font-semibold text-xl')}>
            {title}
          </h2>
          {description && (
            <p className="text-center text-base text-gray-500">{description}</p>
          )}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
