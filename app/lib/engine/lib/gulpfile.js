gulp.task('clean', () => {
	del('dist/*');
});

gulp.task('jade', () => {
    gulp.src(source.jade)
  		.pipe(pug())
		.pipe(html_min({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest(source.dist));
	browser.reload();
});

gulp.task('sass', () => {
	gulp.src(source.cssMain)
		.pipe(sm.init())
		.pipe(sass())
		.pipe(minCss())
		.pipe(sm.write())
		.pipe(gulp.dest(source.cssDist))
		.pipe(browser.stream());

	gulp.src(source.cssLib)
		.pipe(gulp.dest(source.cssDist));
});

gulp.task('js', () => {
	gulp.src(source.js)
		.pipe(ts())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.on('error', function (err) {
			console.log(err.cause);
		})
		.pipe(gulp.dest(source.jsDist));

	gulp.src(source.jsLib)
		.pipe(gulp.dest(source.jsDist));
	browser.reload();
});

gulp.task('imageMin', () => {
	gulp.src(source.img)
		.pipe(imgMin())
		.pipe(gulp.dest(source.imgDist));
	browser.reload();
});

gulp.task('minify', ['jade', 'html', 'sass', 'ts', 'js', 'imageMin', 'src'], () => {
	console.log('Tylko minifikacja.');
});

gulp.task('src', () => {
	gulp.src(source.src)
		.pipe(gulp.dest(source.srcDist));
});