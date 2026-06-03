import Link from 'next/link';

const NavHeader: React.FC<ComponentProps> = () => {
  return (
    <header className='flex gap-4 justify-end w-full py-2 px-8 text-lg font-medium'>
      <Link href='/'>Home</Link>
      <Link href='/news'>News</Link>
    </header>
  );
};

export default NavHeader;
