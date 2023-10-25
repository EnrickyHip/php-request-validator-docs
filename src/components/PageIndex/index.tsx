import React from 'react';
import { PageIndexAside, PageIndexList } from './styled';

export interface Props {
  children: React.ReactNode;
}

function PageIndex({ children }: Props) {
  return (
    <PageIndexAside>
      <PageIndexList>{children}</PageIndexList>
    </PageIndexAside>
  );
}

export default PageIndex;
