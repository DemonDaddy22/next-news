import { HEADER_TEXT } from '@/constants/styles';
import { use } from 'react';

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

const NewsDetailsPage: React.FC<ComponentProps<Params>> = ({ params }) => {
  const { slug } = use(params);
  return <h1 className={HEADER_TEXT}>News Details - {slug}</h1>;
};

export default NewsDetailsPage;
