class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = { [key]: value };
    } else {
      this.table[index][key] = value;
    }
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index] ? this.table[index][key] : null;
  }

  has(key) {
    const index = this.hash(key);
    return this.table[index] && this.table[index][key] ? true : false;
  }

  keys() {
    const keys = [];
    this.table.forEach((item) => {
      if (item) keys.push(...Object.keys(item));
    });
    return keys;
  }

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }
}

module.exports = HashTable;
