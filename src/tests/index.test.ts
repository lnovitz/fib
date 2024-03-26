import { getFib } from '@/app/api/submit/route'

describe('testing Fibonacci sequence generator', () => {
  test('n is 0 should result in zero', () => {
    expect(getFib(0)).toBe(0);
  });
  test('n is 1 should result in 1', () => {
    expect(getFib(1)).toBe(1);
  });
  test('n is 2 should result in 1', () => {
    expect(getFib(2)).toBe(1);
  });
  test('n is 3 should result in 2', () => {
    expect(getFib(3)).toBe(2);
  });
  test('n is 9 should result in 34', () => {
    expect(getFib(9)).toBe(34);
  });
});
