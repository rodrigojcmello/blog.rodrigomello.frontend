import React from 'react';
import { Props } from './types';
import { cn } from '../../../utils/style';

function H2({ children }: Props): JSX.Element {
  return <h2 className={cn(['fs5'], 'h2')}>{children}</h2>;
}

export default H2;
