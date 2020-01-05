declare module '*.jpeg' {
  const value: string;
  export = value;
}

declare module '*.png' {
  const value: string;
  export = value;
}

declare module '@mdx-js/react' {
  import { ComponentType, ReactNode } from 'react';

  type MarkdownTagsPeteca =
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'thematicBreak'
    | 'blockquote'
    | 'ul'
    | 'ol'
    | 'li'
    | 'table'
    | 'tr'
    | 'td'
    | 'pre'
    | 'code'
    | 'em'
    | 'strong'
    | 'delete'
    | 'inlineCode'
    | 'hr'
    | 'a'
    | 'img';

  type MDXProps = {
    children: ReactNode;
    components: Partial<
      Record<MarkdownTagsPeteca, ComponentType<{ children: ReactNode }>>
    >;
  };
  const MDXProvider: ComponentType<MDXProps>;
  // eslint-disable-next-line import/prefer-default-export
  export { MDXProvider };
}
