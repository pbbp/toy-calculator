import { divide } from "./divide";

describe('simple operation', () => {

  test('passing no options', () => {
    expect(divide()).toEqual(0);
  });  

  test('follows order of operands', () => {
    expect(divide([2, 1])).toEqual(2);
    expect(divide([1, 2])).toEqual(0.5);
    expect(divide([2, 0])).toBe(Infinity);
  });  
  
});