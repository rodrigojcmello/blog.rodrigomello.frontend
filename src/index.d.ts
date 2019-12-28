// eslint-disable-next-line import/no-unresolved
import '@testing-library/jest-dom/extend-expect';

declare module '*.jpeg' {
  const value: string;
  export = value;
}
