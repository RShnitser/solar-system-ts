// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  const yearMap = new Map<number, number>();
  let greateStDiscoveryYear: number | undefined = undefined;

  for (const asteroid of asteroids) {
    const discoveryYear = asteroid.discoveryYear;
    const discoveries: number = (yearMap.get(discoveryYear) || 0) + 1;
    yearMap.set(discoveryYear, discoveries);

    if (greateStDiscoveryYear === undefined) {
      greateStDiscoveryYear = discoveryYear;
    } else {
      const greatestDiscoveries = yearMap.get(greateStDiscoveryYear);
      if (
        greatestDiscoveries !== undefined &&
        discoveries > greatestDiscoveries
      ) {
        greateStDiscoveryYear = discoveryYear;
      }
    }
  }

  return greateStDiscoveryYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
