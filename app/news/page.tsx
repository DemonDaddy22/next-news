import { HEADER_TEXT } from '@/constants/styles';
import Link from 'next/link';

const NewsPage: React.FC<PageProps> = () => {
  return (
    <>
      <h1 className={HEADER_TEXT}>News</h1>
      <section className='py-8 flex flex-col gap-2'>
        <Link href='/news/article-1' className='text-blue-500 hover:underline'>
          Article 1
        </Link>
        <Link href='/news/article-2' className='text-blue-500 hover:underline'>
          Article 2
        </Link>
        <Link href='/news/article-3' className='text-blue-500 hover:underline'>
          Article 3
        </Link>
      </section>
    </>
  );
};

export default NewsPage;
