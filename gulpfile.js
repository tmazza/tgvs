var paths = {
    'src': {
        'js': './project/app/**/*.js',
        'sass': './project/content/sass/**/!(_)*.scss'
    },
    'dest': {
        'js': './project/assets/js/',
        'css': './project/assets/css/'
    }
};

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var clientPort = '8000';

/**
 * Build assets.
 */
gulp.task('build', ['js', 'css']);

/**
 * Start server.
 */
gulp.task('start', function () {
    plugins.connect.server({
        root: ['./project'],
        port: clientPort
    });
});

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
