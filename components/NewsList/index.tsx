import { TEXT } from '@/constants/styles';
import Image from 'next/image';
import Link from 'next/link';

type NewsPageProps = {
  news: News;
};

const SIZE = 300;
const GAP = 8;

const NewsList: React.FC<NewsPageProps> = ({ news }) => {
  return (
    <section
      className='py-8 flex flex-wrap items-center'
      style={{
        rowGap: `${GAP * 5}px`,
        columnGap: `${GAP}px`,
        maxWidth: `${SIZE * 3 + GAP * 2}px`,
      }}
    >
      {news.map(newsItem => (
        <Link key={newsItem.id} href={`/news/${newsItem.slug}`}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={SIZE}
            height={SIZE}
            className='rounded-md'
            loading='eager'
          />
          <h3 className={`${TEXT.NORMAL} text-lg font-medium mt-2`}>{newsItem.title}</h3>
        </Link>
      ))}
    </section>
  );
};

export default NewsList;
