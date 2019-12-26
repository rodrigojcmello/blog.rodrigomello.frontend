import React, { ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props): ReactElement {
  return (
    <div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1024,
          padding: `0px 1.0875rem 1.45rem`
        }}
      >
        <main>{children}</main>
        <footer>bem-vindo dev</footer>
      </div>
    </div>
  );
}

export default Layout;
