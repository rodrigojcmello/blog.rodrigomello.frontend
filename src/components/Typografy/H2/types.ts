import { ReactNode } from 'react';
import Base from '../../../assets/style/base.module.scss';

export interface Props {
  children: ReactNode;
  className?: Array<keyof typeof Base>;
}
