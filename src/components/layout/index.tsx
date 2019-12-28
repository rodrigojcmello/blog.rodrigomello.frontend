import React, { ReactElement, ReactNode } from 'react';
import { cn } from '../../utils/style';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props): ReactElement {
  return (
    <div className={cn(['height100vh', 'scrollY'], 'container scroll')}>
      <div className={cn(['mrAuto0', 'mlAuto0', 'bp3'], 'container')}>
        <main>{children}</main>
        <footer>bem-vindo dev</footer>
      </div>
    </div>
  );
}

export default Layout;
