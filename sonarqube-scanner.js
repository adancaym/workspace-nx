const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "sqp_2ea8fdeaf66a78ddaf4755a06afd9fedc65aa3b2",
    options: {
      "sonar.projectKey": "workspace-nx",
      "sonar.sources": "./apps",
      "sonar.exclusions": "**/*.spec.tsx",
      "sonar.tests": "./apps",
      "sonar.test.inclusions": "**/*.spec.tsx,**/*.spec.ts",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "test-report.xml"
    },
  },
  () => process.exit()
);