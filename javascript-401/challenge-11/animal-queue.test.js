'use strict';

const { AnimalQueue } = require('./animal-queue');


const queue = new AnimalQueue();



// 'Can successfully instantiate an empty queue'

// 'Can successfully enqueue multiple values into a queue'

// 'Can successfully dequeue out of a queue the expected value'

// 'Can successfully empty a queue after multiple dequeues'

// 'Can successfully return a 'cat' when the pref 'cat' is passed'

// 'Can successfully return a 'dog' when the pref 'dog' is passed'

// 'Does not return a 'dog' when pref 'cat' is passed'

// 'Does not return a 'cat when pref 'dog' is passed'

// 'returns null if no pref is passed'

// 'returns null if no animal match is found'

// 'raises an exception if the queue is empty and dequeue is called'


