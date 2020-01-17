import React, { ReactElement } from 'react';
import { Props } from './types';
import { cn } from '../../../utils/style';

function P({ children, className }: Props): ReactElement {
  return (
    <p
      className={cn(
        ['p', 'pr10', 'pl10', 'md_pr0', 'md_pl0', ...(className || [])],
        'p'
      )}
    >
      {children}
    </p>
  );
}

export default P;
