import React, { ReactElement } from 'react';
import { Props } from './types';
import { cn } from '../../../utils/style';

function Blockquote({ children, className }: Props): ReactElement {
  return (
    <blockquote
      className={cn(
        [
          'pr10',
          'pl10',
          'pt10',
          'pb10',
          'md_pr0',
          'md_pl0',
          'mb10',
          'italic',
          'bgContrast1',
          ...(className || [])
        ],
        'blockquote'
      )}
    >
      {children}
    </blockquote>
  );
}

export default Blockquote;
