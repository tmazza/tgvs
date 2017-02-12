var paths = {
    'src': {
        'js': [
            './www/app/**/*.module.js',
            './www/app/**/!(*.unit).js'
        ],
        'css': [
            './www/assets/css/**/app.scss'
        ]
    },
    'dst': {
        'js': './www/assets/js/',
        'css': './www/assets/css/'
    }
};

var PORT = '8001';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

/**
 * Run server.
 */
gulp.task('server', function () {
    plugins.connect.server({
        root: ['./www'],
        port: PORT
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
        .pipe(plugins.ngAnnotate({
            add: true,
            single_quotes: true
        }))
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dst.js));
});

/**
 * Build css.
 */
gulp.task('css', function () {
    return gulp
        .src(paths.src.css)
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('app.min.css'))
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.cleanCss())
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dst.css));
});

/**
 * Watch javascript and css.
 */
gulp.task('watch', function () {
    var js = paths.src.js;
    var css = paths.src.css;

    plugins.watch(js, function () {
        gulp.start('js');
    });

    plugins.watch(css, function () {
        gulp.start('css');
    });
});
