import { divide } from "./divide";

describe('simple operation', () => {

  test('follows order of operands', () => {
    expect(divide([2, 1])).toEqual(2);
    expect(divide([2, 0])).toBe(Infinity);
  });  
  
});