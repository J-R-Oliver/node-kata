const betterThanAverage = require("../../lib/how-good-are-you-really");

describe("how-good-are-you-really.js tests", () => {
  describe("betterThanAverage tests", () => {
    it("should return true when yourPoints is greater than classPoints average", () => {
      const classPoints = [1, 2, 3];
      const yourPoints = 5;

      const isBetterThanAverage = betterThanAverage(classPoints, yourPoints);

      expect(isBetterThanAverage).toBe(true);
    });

    it("should return false when yourPoints is less than classPoints average", () => {
      const classPoints = [1, 2, 3];
      const yourPoints = 1;

      const isBetterThanAverage = betterThanAverage(classPoints, yourPoints);

      expect(isBetterThanAverage).toBe(false);
    });

    it("should return false when yourPoints is equal to classPoints average", () => {
      const classPoints = [1, 2, 3];
      const yourPoints = 2;

      const isBetterThanAverage = betterThanAverage(classPoints, yourPoints);

      expect(isBetterThanAverage).toBe(false);
    });
  });
});
