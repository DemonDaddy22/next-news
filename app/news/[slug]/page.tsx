import { HEADER_TEXT } from '@/constants/styles';
import { DUMMY_NEWS } from '@/data/news';
import Image from 'next/image';
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
    return <h2>News not found</h2>;
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
        <h1 className={HEADER_TEXT}>{newsItem.title}</h1>
        <time dateTime={newsItem.date} className='text-gray-600 dark:text-gray-400 text-sm'>
          {newsItem.date}
        </time>
      </header>
      <hr className='my-10' />
      <p className='text-lg leading-relaxed'>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetailsPage;
