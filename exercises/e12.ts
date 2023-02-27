// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

import { AllData } from "../data/data";

export const allPlanetsMoonsCount = (data: AllData) => {
    return data.planets.reduce((acc: number, planet) => {
        return planet.moonsCount !== undefined ? acc + planet.moonsCount : acc;
    }, 0)
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
