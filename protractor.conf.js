exports.config = {
    framework: 'jasmine',
    specs: ['./e2e-tests/**/*.e2e.js'],
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
