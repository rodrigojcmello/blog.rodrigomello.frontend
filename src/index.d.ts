// import '@testing-library/jest-dom/extend-expect';

declare module '*.jpeg' {
  const value: string;
  export = value;
}

declare module '*.png' {
  const value: string;
  export = value;
}

declare module '@mdx-js/react' {
  import React, { ComponentType, ReactElement } from 'react';

  type MDXProps = {
    children: ReactNode;
    components: { wrapper: ComponentType };
  };
  const MDXProvider: (props: MDXProps) => ReactElement;
  // eslint-disable-next-line import/prefer-default-export
  export { MDXProvider };
}
