gulp.task('default', ['jade', 'sass', 'js', 'imageMin', 'src'] , () => {
	browser({
	    server: 'dist/'
	});

	gulp.watch(source.jade, ['jade'], () => { console.log('\7'); });
	gulp.watch(source.css, ['sass'], () => { console.log('\7'); });
	gulp.watch(source.js, ['js'], () => { console.log('\7'); });
	gulp.watch(source.img, ['imageMin'], () => { console.log('\7'); });

	gulp.watch('gulpfile.js', () => {
	    process.exit();
	});
});

module.exports = main;