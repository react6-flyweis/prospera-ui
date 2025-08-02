import { DownloadIcon, EyeIcon } from 'lucide-react';
import documentIcon from '@/assets/icons/document.png';
import documentBg from '@/assets/images/document-bg.png';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function DocumentCard({ title }: { title: string }) {
  return (
    <div className="">
      <div className="mb-2 flex items-center">
        <img
          alt="Document Icon"
          className="max-h-8 max-w-8"
          src={documentIcon}
        />
        <div className="ml-3">
          <h3 className="font-semibold text-gray-700 text-sm">{title}</h3>
        </div>
      </div>
      <Card
        className="relative flex h-32 w-52 items-center overflow-hidden rounded-2xl border-2 border-gray-300 border-dashed bg-gradient-to-br from-gray-50 to-gray-200 shadow-md"
        style={{
          backgroundImage: `url(${documentBg})`,
          backgroundSize: 'cover',
        }}
      >
        {/* Floating icons top right */}
        <div className="absolute top-3 right-4 z-10 flex gap-3">
          <Button className="bg-white/70 shadow-sm" size="icon" variant="ghost">
            <EyeIcon className="text-gray-500 hover:text-blue-600" size={20} />
          </Button>
          <Button className="bg-white/70 shadow-sm" size="icon" variant="ghost">
            <DownloadIcon
              className="text-gray-500 hover:text-blue-600"
              size={20}
            />
          </Button>
        </div>
      </Card>
    </div>
  );
}
