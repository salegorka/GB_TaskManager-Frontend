// Подключаем модули
const gulp = require('gulp');

// Определяем пути
const path = {
    src: {
        img: 'src/img/*.*'
    },
    build: {
        img: 'dist/img'
    }
};

// IMG
gulp.task('img', () => {
    return gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
});

// Наблюдатель
gulp.task('watch', function() {
    gulp.watch(path.src.img, gulp.series('img'));
});

// Common
gulp.task('images', gulp.series('img', 'watch'));