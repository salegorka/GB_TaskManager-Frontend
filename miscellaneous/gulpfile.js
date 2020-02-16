// Подключаем Gulp + модули к нему
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const del = require('del');

// Определяем пути
const path = {
    src: {
        css: 'sass/**/*.*',
    },
    build: {
        root: 'css/',
    }
};

// Удаление старой версии сборки
gulp.task('kill', function() {
    return del(path.build.root);
});

// Сборка CSS
gulp.task('css', function() {
    return gulp.src(path.src.css)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.build.root))
});

// Наблюдатель за изменениями файлов
gulp.task('watch', function() {
    gulp.watch(path.src.css, gulp.series('css'));
});

// Общая сборка
gulp.task('dev', gulp.series('kill', 'css', 'watch'));
gulp.task('build', gulp.series('kill', 'css'));