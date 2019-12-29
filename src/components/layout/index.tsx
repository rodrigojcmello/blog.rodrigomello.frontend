import React, { ReactElement, ReactNode } from 'react';
import { cn } from '../../utils/style';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props): ReactElement {
  return (
    <div className={cn(['height100vh', 'scrollY'], 'container scroll')}>
      <div
        className={cn(
          ['mrAuto0', 'mlAuto0', 'bp3', 'lg_pr10', 'lg_pl10'],
          'container'
        )}
      >
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
