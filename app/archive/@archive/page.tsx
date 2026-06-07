import { TEXT } from '@/constants/styles';
import { getAvailableNewsYears } from '@/lib/news';
import Link from 'next/link';

const ArchivePage: React.FC<ComponentProps> = () => {
  const links = getAvailableNewsYears();

  return (
    <header className='my-4'>
      <ul className={`${TEXT.NORMAL} flex justify-center gap-2 list-none`}>
        {links.map(link => (
          <li key={link}>
            <Link href={`/archive/${link}`} className={TEXT.NORMAL}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default ArchivePage;
