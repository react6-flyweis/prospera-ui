import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { usePageStore } from '@/store/pageStore';

interface PageLayoutProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageLayout({
  title,
  description,
  children,
  className,
}: PageLayoutProps) {
  const { setPage } = usePageStore();

  useEffect(() => {
    setPage(title, description);
    return () => {
      setPage('', ''); // Reset to default on unmount
    };
  }, [title, description, setPage]);

  return <div className={cn(className)}>{children}</div>;
}
