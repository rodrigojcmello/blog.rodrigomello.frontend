/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { cn } from './style';

describe('Style Utils DEV', () => {
  test('function cn with params', () => {
    expect(cn(['colorContrast8'], 'test')).toBe('TEST colorContrast8');
  });

  test('function cn with no params', () => {
    expect.assertions(2);
    try {
      // @ts-ignore
      cn();
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
      expect(error).toHaveProperty(
        'message',
        "Cannot read property 'toUpperCase' of undefined"
      );
    }
  });
});

describe('Style Utils PROD', () => {
  test('cn function with params', () => {
    process.env.NODE_ENV = 'production';
    expect(cn(['colorContrast8'], 'test')).toBe('colorContrast8');
  });
});
