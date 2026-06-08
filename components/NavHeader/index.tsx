'use client';

import { TEXT } from '@/constants/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavHeader: React.FC<ComponentProps> = () => {
  const path = usePathname();

  const getActiveLinkClass = (currentPath: string) => {
    return path.startsWith(currentPath) ? TEXT.HIGHLIGHT : undefined;
  };

  return (
    <header className='flex gap-4 justify-end w-full py-2 px-8 text-lg font-medium text-blue-950 dark:text-blue-200'>
      <Link href='/news' className='flex-1 font-bold text-2xl'>
        Next News
      </Link>
      <Link href='/news' className={getActiveLinkClass('/news')}>
        News
      </Link>
      <Link href='/archive' className={getActiveLinkClass('/archive')}>
        Archive
      </Link>
    </header>
  );
};

export default NavHeader;
