module.exports = function(config) {
    config.set({
        basePath: './project',

        files: [
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-route.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-animate.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-aria.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-messages.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.0/angular-material.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-mocks.js',

            'app/**/*.html',
            'app/**/*.module.js',
            'app/**/*.js'
        ],

        browsers: ['Chrome'],

        frameworks: ['jasmine'],

        reporters: ['progress'],

        colors: true,

        logLevel: config.LOG_INFO,

        port: 9876,

        autoWatch: true,

        singleRun: false,

        concurrency: Infinity
    });
}
