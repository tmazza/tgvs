var paths = {
    'src': {
        'js': './client/app/**/*.js',
        'sass': './client/content/sass/**/!(_)*.scss'
    },
    'dest': {
        'js': './client/assets/js/',
        'css': './client/assets/css/'
    },
    'test': {
        'e2e': './client/tests/e2e/**/*.js'
    }
};

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var clientPort = '8000';

/**
 * Start server.
 */
gulp.task('start', function () {
    plugins.connect.server({
        root: ['./client'],
        port: clientPort
    });
});

/**
 * Run e2e tests (start server first).
 */
gulp.task('e2e',function (done) {
    return gulp
        .src(paths.test.e2e)
        .pipe(plugins.protractor.protractor({
            configFile: 'protractor.conf.js',
            args: ['--baseUrl', 'http://localhost:' + clientPort]
        }))
        .on('error', function (e) {
            console.log(e);
        });
});

/**
 * Build assets.
 */
gulp.task('build', ['js', 'css']);

/**
 * Build javascript.
 */
gulp.task('js', function () {
    return gulp
        .src(paths.src.js)
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('app.min.js'))
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dest.js));
});

/**
 * Build css.
 */
gulp.task('css', function () {
    return gulp
        .src(paths.src.sass)
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('app.min.css'))
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.cleanCss())
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dest.css));
});

/**
 * Watch javascript and css.
 */
gulp.task('watch', function () {
    var js = paths.src.js;
    var sass = paths.src.sass;

    plugins.watch(js, function () {
        gulp.start('js');
    });

    plugins.watch(sass, function () {
        gulp.start('css');
    });
});
