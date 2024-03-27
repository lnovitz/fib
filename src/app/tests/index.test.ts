import { callFib } from '../api/submit/route'

describe('testing Fibonacci sequence generator', () => {
  test('n is 0 should result in array ending in zero', () => {
    expect(callFib(0)).toEqual([0]);
  });
  test('n is 1 should result in array ending in 1', () => {
    expect(callFib(1)).toEqual([0, 1]);
  });
  test('n is 2 should result in array ending in 1', () => {
    expect(callFib(2)).toEqual([0, 1, 1]);
  });
  test('n is 3 should result in array ending in 2', () => {
    expect(callFib(3)).toEqual([0, 1, 1, 2]);
  });
  test('n is 9 should result in array ending in 34', () => {
    expect(callFib(9)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
