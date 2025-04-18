import { PageParams } from '@/types/pageParams';
import { useParams } from 'react-router';

function Studio() {
  const params = useParams<PageParams['studio']>();

  console.log(params.nickname);

  return <></>;
}

export default Studio;
