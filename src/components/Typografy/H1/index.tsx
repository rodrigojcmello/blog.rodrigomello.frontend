import React from 'react';
import { Props } from './types';
import { cn } from '../../../utils/style';

function H1({ children, className }: Props): JSX.Element {
  return (
    <h1 className={cn(['fs5', ...(className || [])], 'h1')}>{children}</h1>
  );
}

export default H1;
