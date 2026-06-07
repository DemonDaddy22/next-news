import { TEXT } from '@/constants/styles';
import Link from 'next/link';

const NotFoundPage: React.FC<ComponentProps> = () => {
  return (
    <>
      <h1 className={`${TEXT.HEADER} mt-20 text-4xl max-w-lg`}>The page you&apos;re looking for doesn&apos;t exist!</h1>
      <p className={`${TEXT.NORMAL} mt-4 text-center`}>
        Explore our latest <Link href='/news'>articles</Link>
      </p>
    </>
  );
};

export default NotFoundPage;
