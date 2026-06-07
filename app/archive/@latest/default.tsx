import NewsList from '@/components/NewsList';
import { TEXT } from '@/constants/styles';
import { getLatestNews } from '@/lib/news';

const LatestPage: React.FC<ComponentProps> = () => {
  const latestNews = getLatestNews();

  return (
    <>
      <h1 className={`${TEXT.NORMAL} text-2xl font-medium`}>Latest News</h1>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestPage;
