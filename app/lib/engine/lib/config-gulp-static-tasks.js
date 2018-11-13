module.exports = `gulp.task('clear', () => {
    del(sources.dist);
});

gulp.task('serve', () => {
    bs.init({
        server: sources.dist,
        open: false
    });

    gulp.watch(sources.html, ['html']);
    gulp.watch(sources.css.app, ['css']);
    gulp.watch(sources.js.app, ['js']);
});

gulp.task('test', () => {
    console.log(sources);
});

gulp.task('default', ['minify', 'serve'], () => {
    gulp.watch('gulpfile.js', process.exit);
});

gulp.task('minify', ['html', 'css', 'js', 'images']);

gulp.task('images', () => {
    gulp.src(sources.src.app)
    .pipe(imgmin())
    .pipe(gulp.dest(sources.src.dist));
});`;