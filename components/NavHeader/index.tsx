import Link from 'next/link';

const NavHeader: React.FC<ComponentProps> = () => {
  return (
    <header className='flex gap-4 justify-end w-full py-2 px-8 text-lg font-medium text-blue-950 dark:text-blue-200'>
      <Link href='/' className='flex-1 font-bold text-2xl'>
        Next News
      </Link>
      <Link href='/'>Home</Link>
      <Link href='/news'>News</Link>
    </header>
  );
};

export default NavHeader;
