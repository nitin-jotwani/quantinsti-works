var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create()

gulp.task('sass', function () {
  return gulp.src('app/scss/main.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
})

gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: './app'
  })

  gulp.watch('app/scss/*.scss', ['sass'])
  gulp.watch('app/*.html').on('change', browserSync.reload)
  gulp.watch('app/css/*.css').on('change', browserSync.reload)
})

gulp.task('default', ['serve'])
