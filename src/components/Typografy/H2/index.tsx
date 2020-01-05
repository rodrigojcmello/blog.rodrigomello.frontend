import React, { ReactElement } from 'react';
import { Props } from './types';
import { cn } from '../../../utils/style';

function H2({ children, className }: Props): ReactElement {
  return (
    <h2
      className={cn(
        [
          'fs5',
          'mt10',
          'mb5',
          'pl10',
          'pr10',
          'md_pl0',
          'md_pr0',
          ...(className || [])
        ],
        'h2'
      )}
    >
      {children}
    </h2>
  );
}

export default H2;
