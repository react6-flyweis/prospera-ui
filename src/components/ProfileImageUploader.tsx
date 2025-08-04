import { PenIcon } from 'lucide-react';
import type React from 'react';

interface ProfileImageUploaderProps {
  value: File | string;
  onChange: (file: File | null) => void;
}

export const ProfileImageUploader: React.FC<ProfileImageUploaderProps> = ({
  value,
  onChange,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    onChange(file);
  };
  // Render the uploader component

  return (
    <div className="relative flex flex-col items-center">
      <label className="cursor-pointer" htmlFor="profile-image-upload">
        <input
          accept="image/*"
          className="hidden"
          id="profile-image-upload"
          onChange={handleFileChange}
          type="file"
        />
        <div className="group relative flex size-28 items-center justify-center rounded-full bg-gray-400 shadow-lg">
          {value ? (
            <img
              alt="Profile Preview"
              className="h-full w-full rounded-full object-cover"
              src={
                typeof value === 'string' ? value : URL.createObjectURL(value)
              }
            />
          ) : (
            <span className="font-semibold text-lg text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Upload Image
            </span>
          )}
          {/* Edit Icon */}
          <div className="absolute right-2 bottom-2">
            <div className="rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-2 shadow-lg">
              <PenIcon className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};
