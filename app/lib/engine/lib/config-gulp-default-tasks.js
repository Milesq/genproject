function main (config) {
	let html = config.htmlPreProcesor.toLowerCase(),
		js = config.frontLanguage[0].toLowerCase() + 's',
		css = (config.cssPreProcesor == "None")? 'css' : 'sass',
		tsPipe = (js == 'ts')? '\n		.pipe(ts())' : '',
		sassPipe = (css != 'None')? `
	.pipe(sm.init())
	.pipe(sass())` : '',
		sassSM = (css != 'None')? '\n	.pipe(sm.write())' : '',
		jadePipe = (html == 'jade')? '\n 	.pipe(pug())': '';

	let ret = `gulp.task('clean', () => {
	del('dist/*');
});

gulp.task('src', () => {
	gulp.src(source.src)
	.pipe(gulp.dest(source.srcDist));
});

gulp.task('imageMin', () => {
	gulp.src(source.img)
		.pipe(imgMin())
		.pipe(gulp.dest(source.imgDist));
	browser.reload();
});

gulp.task('default', ['${html}', '${css}', '${js}', 'imageMin', 'src'] , () => {
	browser({
	    server: 'dist/'
	});

	gulp.watch(source.${html}, ['${html}']);
	gulp.watch(source.css, ['${css}']);
	gulp.watch(source.js, ['${js}']);
	gulp.watch(source.img, ['imageMin']);

	gulp.watch('gulpfile.js', () => {
	    process.exit();
	});
});

gulp.task('minify', ['${html}', '${css}', '${js}', 'imageMin', 'src'], () => {
	console.log('Tylko minifikacja.');
});

gulp.task('${js}', () => {
	gulp.src(source.js)${tsPipe}
		.pipe(babel({
			presets: ['@babel/env']
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

gulp.task('${css}', () => {
	gulp.src(source.cssMain)${sassPipe}
		.pipe(minCss())${sassSM}
		.pipe(gulp.dest(source.cssDist))
		.pipe(browser.stream());

	gulp.src(source.cssLib)
		.pipe(gulp.dest(source.cssDist));
});

gulp.task('${html}', () => {
    gulp.src(source.${html})${jadePipe}
		.pipe(html_min({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest(source.dist));
	browser.reload();
});`;

	return ret;
}

module.exports = main;