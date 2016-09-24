var paths = {
    'src': {
        'js': [
            './project/app/**/*.module.js',
            './project/app/**/!(*.unit).js'
        ],
        'sass': [
            './project/layout/sass/**/!(_)*.scss'
        ]
    },
    'dest': {
        'js': './project/assets/js/',
        'css': './project/assets/css/'
    }
};

var gulp = require('gulp');
var Server = require('karma').Server;
var plugins = require('gulp-load-plugins')();

gulp.task('default', ['build']);

gulp.task('build', ['js', 'css']);

gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('tdd', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        autoWatch: true
    }, done).start();
});

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
        .src(paths.src.sass)
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('tgvs.min.css'))
        .pipe(plugins.sass({includePaths: ['./project/layout/sass/']})
        .on('error', plugins.sass.logError))
        .pipe(plugins.cleanCss())
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dest.css));
});

gulp.task('watch', function () {
    var js = paths.src.js;
    var sass = paths.src.sass;

    plugins.watch(js, function () {
        gulp.start('js');
    });

    plugins.watch(sass, function () {
        gulp.start('css');
    });
})

