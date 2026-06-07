import { HEADER_TEXT } from '@/constants/styles';
import { DUMMY_NEWS } from '@/data/news';
import Image from 'next/image';
import Link from 'next/link';

const SIZE = 300;
const GAP = 8;

const NewsPage: React.FC<ComponentProps> = () => {
  return (
    <>
      <h1 className={HEADER_TEXT}>Articles</h1>
      <section
        className='py-8 flex flex-wrap items-center'
        style={{
          rowGap: `${GAP * 5}px`,
          columnGap: `${GAP}px`,
          maxWidth: `${SIZE * 3 + GAP * 2}px`,
        }}
      >
        {DUMMY_NEWS.map(newsItem => (
          <Link key={newsItem.id} href={`/news/${newsItem.slug}`}>
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              width={SIZE}
              height={SIZE}
              className='rounded-md'
            />
            <h3 className='text-lg font-medium mt-2'>{newsItem.title}</h3>
          </Link>
        ))}
      </section>
    </>
  );
};

export default NewsPage;
