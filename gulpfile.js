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
    },
    'test': {
        'e2e': [
            './e2e-tests/**/*.e2e.js'
        ]
    }
};

var gulp = require('gulp');
var Server = require('karma').Server;
var plugins = require('gulp-load-plugins')();

var port = '8000';

gulp.task('default', ['build'], function () {
    gulp.start('unit');

    gulp.start('connect');
    gulp.start('e2e');
    gulp.start('disconnect');
});

gulp.task('build', ['js', 'css']);

gulp.task('connect', function() {
    plugins.connect.server({
        root: 'project',
        port: port
    });
});

gulp.task('disconnect', ['e2e'],function() {
    plugins.connect.serverClose();
});

gulp.task('unit', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('unit-watch', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        autoWatch: true
    }, done).start();
});

gulp.task('e2e',function (done) {
    return gulp
        .src(paths.test.e2e)
        .pipe(plugins.protractor.protractor({
            configFile: 'protractor.conf.js',
            args: ['--baseUrl', 'http://localhost:' + port]
        }))
        .on('error', function (e) { throw e; });
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

