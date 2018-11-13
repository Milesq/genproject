function main (config) {
	let ts = config.frontLanguage == 'TypeScript',
		jade = config.htmlPreProcesor == 'Jade',
		sass = config.cssPreProcesor == 'Sass'
		scss = config.cssPreProcesor == 'Sass(Scss syntax)';
	let ret = `${require('./config-gulp-static-tasks')}

gulp.task('html', () => {
	gulp.src(sources.html)${(jade)? `
		.pipe(pug())
		` : ''}
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest(sources.dist));
	bs.reload();
});

gulp.task('css', () => {
	gulp.src(sources.css.app)${(sass||scss)?`
		.pipe(sm.init())
        .pipe(sass().on('error', sass.logError))
		` : ''}.pipe(cssmin())${(sass||scss)?`
		.pipe(sm.write())` : ''}
        .pipe(gulp.dest(sources.css.dist))
        .pipe(bs.stream());

    gulp.src(sources.css.lib).pipe(gulp.dest(sources.css.dist));
});

gulp.task('js', () => {
    gulp.src(sources.js.app)${(ts)? `
        .pipe(smTS.init())
        .pipe(ts())`: ''} 
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(jsmin())${(ts)?`
        .pipe(smTS.write())
		` : ''}
		.pipe(gulp.dest(sources.js.dist));

    gulp.src(sources.js.lib).pipe(gulp.dest(sources.js.dist));
    bs.reload();
});`;
	return ret;
}

module.exports = main;