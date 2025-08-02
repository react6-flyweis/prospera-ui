import { XIcon } from 'lucide-react';
import type { PropsWithChildren } from 'react';

interface FileInputProps {
  label?: string;
  onChange?: (file: File | null) => void;
  value?: File | null;
  accept?: string;
  className?: string;
}

export function FileInput({
  label,
  onChange,
  value,
  accept,
  className,
  children,
}: PropsWithChildren<FileInputProps>) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      onChange?.(e.target.files[0]);
    } else {
      onChange?.(null);
    }
  };

  return (
    <label className={className}>
      {label && <div className="mb-1 block font-medium">{label}</div>}
      <input
        accept={accept}
        className="hidden"
        onChange={handleChange}
        type="file"
      />
      {children ? (
        children
      ) : (
        <div className="flex cursor-pointer items-center rounded bg-primary-100 px-4 py-2 text-primary-700">
          {value ? value.name : 'Upload'}
          {value && (
            <button
              aria-label="Remove file"
              className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
              onClick={() => onChange?.(null)}
              type="button"
            >
              <XIcon size={16} />
            </button>
          )}
        </div>
      )}
      {value && (
        <div className="mt-1 flex items-center text-primary-500 text-sm">
          {value.name}
          <button
            aria-label="Remove file"
            className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
            onClick={() => onChange?.(null)}
            type="button"
          >
            <XIcon size={16} />
          </button>
        </div>
      )}
    </label>
  );
}
