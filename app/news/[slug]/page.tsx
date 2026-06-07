import { TEXT } from '@/constants/styles';
import { DUMMY_NEWS } from '@/data/news';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { use } from 'react';

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

const NewsDetailsPage: React.FC<ComponentProps<Params>> = ({ params }) => {
  const { slug } = use(params);
  const newsItem = DUMMY_NEWS.find(item => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className='mx-auto max-w-4xl p-4'>
      <header className='flex flex-col items-center gap-6'>
        <Image
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          width={400}
          height={400}
          className='rounded-md'
        />
        <h1 className={TEXT.HEADER}>{newsItem.title}</h1>
        <time dateTime={newsItem.date} className={`${TEXT.GRAY} text-sm`}>
          {newsItem.date}
        </time>
      </header>
      <hr className='my-10' />
      <p className={`${TEXT.NORMAL} text-lg leading-relaxed`}>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetailsPage;
