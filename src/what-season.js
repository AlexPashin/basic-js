module.exports = function getSeason(date) {
  if (typeof date === 'undefined') return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || !isFinite(date)) throw Error;
  const month = date.getMonth();
  return [0, 1, 11].indexOf(month) !== -1 ? 'winter' : [2, 3, 4].indexOf(month) !== -1 ? 'spring' : [5, 6, 7].indexOf(month) !== -1 ? 'summer' : [8, 9, 10].indexOf(month) !== -1 ? 'autumn' : new Error();
};
