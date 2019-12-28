/* eslint-disable import/prefer-default-export */
import Base from '../assets/style/base.module.scss';

type Styles = keyof typeof Base;

export function cn(styles: Styles[], name: string): string {
  const componentName =
    process.env.NODE_ENV === 'production'
      ? ''
      : `${name.toUpperCase().replace(' ', '_')} `;
  return `${componentName}${styles.map((x): string => Base[x]).join(' ')}`;
}
