import { ChevronDownIcon, GlobeIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { changeLanguageWithLoading, languages } from '@/i18n';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = async (languageCode: string) => {
    if (languageCode === i18n.language) {
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    try {
      await changeLanguageWithLoading(languageCode);
    } finally {
      setIsLoading(false);
      setIsOpen(false);
    }
  };

  return (
    <DropdownMenu onOpenChange={setIsOpen} open={isOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex items-center gap-2 text-gray-700 hover:bg-gray-100"
          disabled={isLoading}
          size="sm"
          variant="ghost"
        >
          <GlobeIcon className="h-4 w-4" />
          <span className="text-sm">
            {isLoading ? 'Loading...' : currentLanguage.name}
          </span>
          <ChevronDownIcon className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            className="flex cursor-pointer items-center gap-3"
            disabled={isLoading}
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="flex-1">{language.name}</span>
            {language.code === i18n.language && (
              <div className="h-2 w-2 rounded-full bg-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
