'use strict';

const { AnimalQueue } = require('./animal-queue');


const queue = new AnimalQueue();

function animalBuilder(species, value) {
  return {
    species: species,
    value: value
  };
}

describe('Animal shelter testing', () => {


  it('Can successfully test for a match ()', () => {
    console.log('test here');
  });

});
