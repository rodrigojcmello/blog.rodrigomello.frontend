import React, { ReactElement } from 'react';
import { Props } from './types';
import { cn } from '../../../utils/style';

function H3({ children, className }: Props): ReactElement {
  return (
    <h3
      className={cn(
        // ['fs5', 'md_mt1', 'mb5', 'md_pl0', 'md_pr0', ...(className || [])],
        [
          'fs5',
          'mt11',
          'mb5',
          'pl10',
          'pr10',
          'colorContrast10',
          'md_pl0',
          'md_pr0',
          ...(className || [])
        ],
        'h3'
      )}
    >
      {children}
    </h3>
  );
}

export default H3;
