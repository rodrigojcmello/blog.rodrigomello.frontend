import React, { ReactElement, ReactNode } from 'react';
import { container } from './style.module.scss';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props): ReactElement {
  return (
    <div>
      <div className={container}>
        <main>{children}</main>
        <footer>bem-vindo dev</footer>
      </div>
    </div>
  );
}

export default Layout;
