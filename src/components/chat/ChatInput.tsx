import { ArrowRightIcon, CheckIcon, PaperclipIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="p-4">
      <form
        className="relative flex items-center gap-3"
        onSubmit={handleSubmit}
      >
        <Input
          className="h-11 rounded-lg border-2 border-primary bg-white"
          disabled={disabled}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={t('chatInterface.typeMessage')}
          value={message}
        />
        <div className="-translate-y-1/2 absolute top-1/2 right-3 z-10 flex items-center gap-2">
          <Button
            className="rounded bg-primary-gradient"
            disabled={!message.trim() || disabled}
            size="icon"
            type="submit"
          >
            <ArrowRightIcon className="h-5 w-5 text-white" />
          </Button>

          <Button
            className="text-gray-500 hover:text-gray-700"
            size="icon"
            type="button"
            variant="ghost"
          >
            <PaperclipIcon className="h-5 w-5 text-primary" />
          </Button>

          <Button
            className="text-gray-500 hover:text-gray-700"
            size="icon"
            type="button"
            variant="ghost"
          >
            <CheckIcon className="h-5 w-5 text-primary" />
          </Button>
        </div>
      </form>
    </div>
  );
}
