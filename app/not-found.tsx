import { HEADER_TEXT } from '@/constants/styles';

const NotFoundPage: React.FC<ComponentProps> = () => {
  return (
    <h1 className={`${HEADER_TEXT} mt-20 text-4xl max-w-lg`}>The page you&apos;re looking for doesn&apos;t exist!</h1>
  );
};

export default NotFoundPage;
