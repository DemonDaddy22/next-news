import { use } from 'react';
import NewsList from '@/components/NewsList';
import { getNewsForYear } from '@/lib/news';

type Params = {
  params: Promise<{
    year: string;
  }>;
};

const YearNewsPage: React.FC<ComponentProps<Params>> = ({ params }) => {
  const { year } = use(params);
  const news = getNewsForYear(year);

  return <NewsList news={news} />;
};

export default YearNewsPage;
