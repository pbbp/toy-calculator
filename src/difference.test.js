import { difference } from "./difference";

describe('simple operation', () => {

  test('passing no options', () => {
    expect(difference()).toEqual(0);
  });  

  test('follows order of operands', () => {
    expect(difference([2, 1])).toEqual(1);
    expect(difference([2, 0])).toEqual(2);
    expect(difference([2])).toEqual(2);
  });  
  
})

describe('subtraction is not transitive ', () => {

  test('a - b = c & b - a = d', () => {
    expect(difference([2, 1])).toEqual(1);
    expect(difference([1, 2])).toEqual(-1);
  });  
  
})

describe('negative tests ', () => {

  test('1 - 1 is not equal to 1', () => {
    expect(difference([1, 1])).toEqual(0);
    expect(difference([1, 1])).not.toEqual(1);
  });  
  
})

