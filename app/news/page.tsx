import NewsList from '@/components/NewsList';
import { TEXT } from '@/constants/styles';
import { DUMMY_NEWS } from '@/data/news';

const NewsPage: React.FC<ComponentProps> = () => {
  return (
    <>
      <h1 className={TEXT.HEADER}>Articles</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};

export default NewsPage;
