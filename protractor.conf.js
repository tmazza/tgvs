exports.config = {
    framework: 'jasmine',
    specs: ['./client/tests/e2e/**/*.js'],
    multiCapabilities: [{
        browserName: 'chrome'
    }, {
        browserName: 'firefox'
    }],
    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true
    }
}
