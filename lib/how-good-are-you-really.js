/**
 * Calculates if your score was higher than the class average.
 * @param {number[]} classPoints An array containing the class points.
 * @param {number} yourPoints Your points as a number.
 * @returns {boolean} Returns true if yourPoints is greater than the class average.
 */
module.exports = function betterThanAverage(classPoints, yourPoints) {
  const classPointAverage =
    classPoints.reduce((classPoint, total) => classPoint + total) /
    classPoints.length;

  return classPointAverage < yourPoints;
};
