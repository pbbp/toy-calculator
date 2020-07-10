import { exponentiate } from "./exponent";

describe('simple operation', () => {

  test('follows order of operands', () => {
    expect(exponentiate(2, 1)).toEqual(2);
  
  });  
  
});