import { getJestProjects } from '@nx/jest';

export default {
  projects: getJestProjects(),
  testTimeout: 10000, // Sets a global test timeout of 10 seconds for all tests
};
