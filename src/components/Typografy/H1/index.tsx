import React from 'react';
import { Props } from './types';
import { cn } from '../../../utils/style';

function H1({ children, className }: Props): JSX.Element {
  return (
    <h1
      className={cn(
        [
          'fs7',
          'pl10',
          'pr10',
          'md_mt1',
          'mb5',
          'md_pl0',
          'md_pr0',
          ...(className || [])
        ],
        'h1'
      )}
    >
      {children}
    </h1>
  );
}

export default H1;
