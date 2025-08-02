import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { usePageStore } from '@/store/pageStore';

interface PageLayoutProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  withBack?: boolean;
}

export function PageLayout({
  title,
  description,
  children,
  className,
  withBack = false,
}: PageLayoutProps) {
  const { setPage, setShowBackButton } = usePageStore();

  useEffect(() => {
    setPage(title, description);
    setShowBackButton(withBack);
    return () => {
      setPage('', ''); // Reset to default on unmount
    };
  }, [title, description, setPage, setShowBackButton, withBack]);

  return <div className={cn(className)}>{children}</div>;
}
