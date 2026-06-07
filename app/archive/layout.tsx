import { TEXT } from '@/constants/styles';

const ArchiveLayout: React.FC<ComponentProps> = ({ archive, latest }) => {
  return (
    <div>
      <h1 className={TEXT.HEADER}>News Archive</h1>
      <section id='archive-filter'>{archive}</section>
      <hr className='my-8' />
      <section id='archive-latest'>{latest}</section>
    </div>
  );
};

export default ArchiveLayout;
