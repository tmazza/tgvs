var paths = {
    'src': {
        'js': [
            './project/app/*.module.js',
            './project/app/*.config.js',
            './project/app/services/*.service.js',
            './project/app/components/*.directive.js',
            './project/app/*.controller.js'
        ],
        'css': [
            './project/css/!(_)*.scss'
        ]
    },
    'dest': {
        'js': './project/assets/js/',
        'css': './project/assets/css/'
    }
};

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('default', ['build']);

gulp.task('build', ['js', 'css']);

gulp.task('js', function () {
    return gulp
        .src(paths.src.js)
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('tgvs.min.js'))
        .pipe(plugins.ngAnnotate())
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dest.js));
});

gulp.task('css', function () {
    return gulp
        .src(paths.src.css)
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('tgvs.min.css'))
        .pipe(plugins.sass({includePaths: ['./project/css/']})
        .on('error', plugins.sass.logError))
        .pipe(plugins.cleanCss())
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dest.css));
});

gulp.task('watch', function () {
    var js = paths.src.js;
    var css = paths.src.css;

    plugins.watch(js, function () {
        gulp.start('js');
    });

    plugins.watch(css, function () {
        gulp.start('css');
    });
})

