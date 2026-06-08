import { use } from 'react';
import NewsList from '@/components/NewsList';
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import Link from 'next/link';
import { TEXT } from '@/constants/styles';

type Params = {
  params: Promise<{
    filter: string;
  }>;
};

const FilteredNewsPage: React.FC<ComponentProps<Params>> = ({ params }) => {
  const { filter } = use(params);
  const [selectedYear, selectedMonth] = filter ?? [];

  let news: News = [];
  let newsContent = null;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  if ((selectedYear || selectedMonth) && !news.length) {
    newsContent = <p className={`${TEXT.GRAY} text-center`}>No news found for the selected filter</p>;
  }

  if (news?.length) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <header className='my-4'>
        <ul className={`${TEXT.NORMAL} flex justify-center gap-2 list-none`}>
          {links.map(link => (
            <li key={link}>
              <Link
                href={selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`}
                className={TEXT.NORMAL}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      {newsContent}
    </>
  );
};

export default FilteredNewsPage;
