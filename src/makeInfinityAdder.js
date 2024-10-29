'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(currentNum) {
  let currentNummount = currentNum || 0;

  function sum(nextNum) {
    if (nextNum !== undefined) {
      currentNummount += nextNum;

      return sum;
    } else {
      const result = currentNummount;

      currentNummount = 0;

      return result;
    }
  }

  return sum;
}

module.exports = makeInfinityAdder;
