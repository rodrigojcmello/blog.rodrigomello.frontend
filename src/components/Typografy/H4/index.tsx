import React, { ReactElement } from 'react';
import { Props } from './types';
import { cn } from '../../../utils/style';

function H4({ children, className }: Props): ReactElement {
  return (
    <h4
      className={cn(
        [
          'fs4',
          'bold',
          'mt9',
          'mb5',
          'pl10',
          'pr10',
          'md_pl0',
          'md_pr0',
          ...(className || [])
        ],
        'h4'
      )}
    >
      {children}
    </h4>
  );
}

export default H4;
