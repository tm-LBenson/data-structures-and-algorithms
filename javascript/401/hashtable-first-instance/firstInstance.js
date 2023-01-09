function firstInstance(string) {
  const words = string.split(' ');

  const wordCounts = new Map();
  for (const word of words) {
    const normalizedWord = word.toLowerCase().replace(/[^a-z]/g, '');

    if (!wordCounts.has(normalizedWord)) {
      wordCounts.set(normalizedWord, 1);
    } else {
      return word;
    }
  }

  return null;
}

module.exports = firstInstance;
