'use strict';

function sortYear(movies) {
  return movies.sort((a, b) => {
    return a.year > b.year ? -1 : 1;
  });
}

function sortTitle(movies) {
  return movies.sort((a, b) => {
    const aTitle = a.title.slice(0, 3) === 'The' ? a.title.slice(4) : a.title;
    const bTitle = b.title.slice(0, 3) === 'The' ? b.title.slice(4) : b.title;
    if (aTitle < bTitle) {
      return -1;
    } else if (aTitle > bTitle) {
      return 1;
    } else {
      return 0;
    }
  });
}

module.exports = { sortYear, sortTitle };
