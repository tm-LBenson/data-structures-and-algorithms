'use strict';

const { validateBrackets } = require('./bracket-checker');





describe('Valid Brackets', () => {


  it('Can successfully test for a match ()', () => {
    expect(validateBrackets('()')).toBe(true);
  });

  it('Can successfully return false for a match ))', () => {
    expect(validateBrackets('))')).toBe(false);
  });

  it('Can successfully return true for a match with multiple types', () => {
    expect(validateBrackets('{[(())]}')).toBe(true);
  });

  it('Can successfully return false for a match with multiple types and an extra bracket', () => {
    expect(validateBrackets('{[(())]})')).toBe(false);
  });

  it('Can successfully return true for a match with a extra characters between', () => {
    expect(validateBrackets('{[((test))]}')).toBe(true);
  });

});
