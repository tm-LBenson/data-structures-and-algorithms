'use strict';


function validateBrackets(string) {
  const stack = [];
  const regex = /[[({]/;
  const regexChar = /[A-z]/;
  const filter = [];
  let newString;
  for (let i of string) {
    if (!regexChar.test(i)) {
      filter.push(i);
    }
  }
  newString = filter.join('');
  for (let i of newString) {

    if (regex.test(i)) {
      stack.push(i);

    } else if (!checker(stack.pop(), i)) {
      return false;
    }
  }

  return stack.length === 0;
}
function checker(string1, string2) {
  const combined = string1 + string2;

  return combined === '()' || combined === '[]' || combined === '{}';
}

module.exports = { validateBrackets };
