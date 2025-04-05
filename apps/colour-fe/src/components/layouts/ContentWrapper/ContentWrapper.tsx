import { PropsWithChildren } from 'react';
import { contentWrapper } from './ContentWrapper.css';

function ContentWrapper({ children }: PropsWithChildren) {
  return <div className={contentWrapper}>{children}</div>;
}

export default ContentWrapper;
