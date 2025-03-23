import { flex } from '@/utils/styles';
import { PropsWithChildren } from 'react';

function CreateContainer({ children }: PropsWithChildren) {
  return <div className={flex()}>{children}</div>;
}

export default CreateContainer;
