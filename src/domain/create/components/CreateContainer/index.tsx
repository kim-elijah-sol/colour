import { PropsWithChildren } from 'react';
import * as style from './style.css';

function CreateContainer({ children }: PropsWithChildren) {
  return <div className={style.createContaier}>{children}</div>;
}

export default CreateContainer;
