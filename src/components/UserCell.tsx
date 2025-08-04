import { Trash2Icon } from 'lucide-react';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

export function UserCell({ name, avatar }: { name: string; avatar: string }) {
  const [showDelete, setShowDelete] = useState(false);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setShowDelete((v) => !v);
    }
  };
  return (
    <div className="relative flex items-center gap-2">
      <Avatar>
        <AvatarImage alt={name} src={avatar} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <button
        aria-label={`Show delete for ${name}`}
        className="cursor-pointer font-medium text-blue-700 hover:underline focus:outline-none"
        onClick={() => setShowDelete((v) => !v)}
        onKeyDown={handleKeyDown}
        style={{ background: 'none', border: 'none', padding: 0 }}
        tabIndex={0}
        type="button"
      >
        {name}
      </button>
      {showDelete && (
        <Button
          className="ml-2 flex items-center gap-1 rounded-lg border border-red-200 bg-white px-3 py-1 text-red-600 shadow hover:bg-red-50"
          style={{ position: 'absolute', left: '100%', top: 0, zIndex: 10 }}
          variant="ghost"
        >
          <Trash2Icon className="mr-1 size-5" /> Delete This Profile
        </Button>
      )}
    </div>
  );
}
