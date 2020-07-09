import { multiply } from "./multiply";

describe('simple operation', () => {

  test('passing no options', () => {
    expect(multiply()).toEqual(0);
  });  

  test('follows order of operands', () => {
    expect(multiply([2, 1])).toEqual(2);
    expect(multiply([2, 0])).toEqual(0);
    expect(multiply([2])).toEqual(2);
  });  
  
})

describe('multiplication is transitive ', () => {

  test('a * b = c & b * a = c', () => {
    expect(multiply([2, 1])).toEqual(2);
    expect(multiply([1, 2])).toEqual(2);

    expect(multiply([5, 3])).toEqual(15);
    expect(multiply([3, 5])).toEqual(15);
  });  
  
})

describe('any number multiplied to one results to the same number ', () => {

  test('a * 1 = a', () => {
    expect(multiply([3, 1])).toEqual(3);
    
    expect(multiply([3, 1, 1])).toEqual(3);
    
    expect(multiply([1, 6])).toEqual(6);
  });  
  
})

describe('negative tests ', () => {

  test('1 * 1 is not equal to 0', () => {
    expect(multiply([1, 1])).toEqual(1);
    expect(multiply([1, 1])).not.toEqual(0);
  });  
  
})

