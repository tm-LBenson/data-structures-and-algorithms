'use strict';

const firstInstance = require('./firstInstance');


describe('First Instance Unit testing', () => {

  it('returns expected result for 1 character', () => {
    const string1 = 'Once upon a time, there was a brave princess who...';
    const result1 = firstInstance(string1);
    expect(result1).toBe('a');
  });

  it('Can handle long strings', () => {
    const string2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    const result2 = firstInstance(string2);
    expect(result2).toBe('it');
  });

  test('ignores punctuation', () => {
    const string3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    const result3 = firstInstance(string3);
    expect(result3).toBe('summer');
  });

});
