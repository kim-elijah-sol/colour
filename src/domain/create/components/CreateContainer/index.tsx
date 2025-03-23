import { PropsWithChildren } from 'react';
import { createContaier } from './style.css';

function CreateContainer({ children }: PropsWithChildren) {
  return <div className={createContaier}>{children}</div>;
}

export default CreateContainer;
