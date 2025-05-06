exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://github.com/',
      browser: 'chrome'
    },
    REST: {
      endpoint: '',
      defaultHeaders: {
        'Content-Type': 'application/json'
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/steps.js',
      './step_definitions/exercise3Login.js',
      './step_definitions/exercise1Extraction.js',
      './step_definitions/exercise2Url.js',
      './step_definitions/exercise4Steps.js'
    ]
  },
  plugins: {
    screenshotOnFail: { enabled: true },
    tryTo: { enabled: true },
    retryFailedStep: { enabled: true },
    retryTo: { enabled: true },
    eachElement: { enabled: true },
    pauseOnFail: {}
  },
  tests: './*_test.js',
  name: 'testProject'
}
