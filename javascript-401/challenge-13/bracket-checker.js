'use strict';
'use strict';


function validateBrackets(string) {
  const stack = [];
  const regex = /[[({]/;
  for (let i of string) {
    if (regex.test(i)) {
      stack.push(i);
    } else if (!checker(stack.pop(), i))
      return false;
  }
  return stack.length === 0;
}
function checker(string1, string2) {
  const combined = string1 + string2;

  return combined === '()' || combined === '[]' || combined === '{}';
}

module.exports = { validateBrackets };
