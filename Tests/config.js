exports.config = {

    /**
     * language of your feature files
     * options: french, spanish, norwegian, polish, german, russian
     */
    language: 'english',

    /**
     * set selenium host and port
     */
    selenium: {
        host: '127.0.0.1',
        port: 4444
    },

    /**
     * webdriverio options
     *
     * - logLevel: stdout log level
     *   Options: *verbose* | *silent* | *command* | *data* | *result*
     *
     * - coloredLogs: Enables colors for log output
     *   default: true
     *
     * - singleton: Set to true if you always want to reuse the same remote
     *   default: false
     *
     * - waitforTimeout: Default timeout for all waitForXXX commands
     *   default: 500
     */
    options: {
        logLevel: 'result'
    },

    /**
     * desired capabilities
     */
    capabilities: {
        browserName: 'chrome'
    },

    /**
     * location of feature files
     */
    featureFiles: [
        'test/features/**/*.feature'
    ],

    /**
     * environment variables
     *
     * - baseUrl: sets base url for `Given I open the site "/some/url.html"`
     */
    env: {
        baseUrl: 'http://acpm-staging.avenuecode.com/'
    },

    /**
     * mocha options
     * @see http://mochajs.org/
     */
    mochaOpts: {
        reporter: 'JSON',
        timeout: 40000,
        require: 'chai'

    }
};
