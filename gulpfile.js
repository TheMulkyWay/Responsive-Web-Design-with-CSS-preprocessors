var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify'),
 cssmin = require('gulp-cssmin');
concat = require('gulp-concat');
var connect = require('gulp-connect');



var coffeeSources = ['scripts/hello.coffee'],
  jsSources = ['scripts/*.js'],
    sassSources = ['styles/*.scss'],
    htmlSources = ['**/*.html'],
    outputDir = 'assets';
    tempdir='tempdir';


gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest(outputDir))});


gulp.task('log', function() {
 gutil.log('== Build Pipline Started ..Logging Tasks ==')});



gulp.task('mincss',function(){
gulp.src('styles/*.scss')
/*.pipe(uglify())*/
.on('error', gutil.log)
.pipe(concat('mainjo.scss'))
 .pipe(gulp.dest(tempdir))

});
 


gulp.task('sass', function() {
gulp.src('styles/main.scss')
.pipe(sass({style: 'expanded'}))
.on('error', gutil.log)
.pipe(gulp.dest(outputDir))
.pipe(connect.reload())});



gulp.task('js', function() {
  gulp.src(jsSources)
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest(outputDir))
  .pipe(connect.reload())
});


gulp.task('html', function() {
  gulp.src(htmlSources)
  .pipe(connect.reload())
});





gulp.task('watch', function() {
/*  gulp.watch('scripts/hello.coffee', ['coffee']); */
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSources, ['sass']);
  gulp.watch(htmlSources,['html'])
});



gulp.task('connect', function() {
  connect.server({
        port:8090,
    root: '.',
    livereload: true
  })
});

gulp.task('t_cssmin',function(){
gulp.src('tempdir/*.scss')
})



gulp.task('default', ['log','html', 'js','sass','connect', 'watch']);

      // gulp.task('default', ['log','html', 'js','micss','sass','connect', 'watch']);