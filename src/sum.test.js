import { sum } from "./sum";

describe('simple operation', () => {

  test('follows order of operands', () => {
    expect(sum([2, 1])).toEqual(3);
    expect(sum([2, 0, 2])).toEqual(4);
  });  
  
})

describe('transitive operands ', () => {

  test('a + b = c & b + a = c', () => {
    expect(sum([2, 1])).toEqual(3);
    expect(sum([1, 2])).toEqual(3);
  });  
  
})

describe('negative tests ', () => {

  test('1 + 1 is not equal to 1', () => {
    expect(sum([1, 1])).toEqual(2);
    expect(sum([1, 1])).not.toEqual(1);
  });  
  
})

