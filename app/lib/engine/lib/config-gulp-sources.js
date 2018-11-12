function main (config) {
	let ret = `const source = {
	dist: 'dist/', //katalog do którego trafia wersja skomilowana
	jsDist: 'dist/js/', //katalog do którego trafia wersja skomilowana
	jsLib: 'app/js/*.min.js', //libki js'a
	img: 'app/img/*.*', //obrazki
	imgDist: 'dist/img/', //katalog do którego trafia wersja skomilowana
	src: 'app/src/**/*.*', //źródła do skopiowania
	srcDist: 'dist/src/', //tutaj
	cssLib: 'app/sass/*.css', //pliki css które nie muszą być kompilowane
	cssDist: 'dist/css/', //katalog do którego trafia wersja skomilowana`;

	ret += '\n';
	if (config.frontLanguage == "TypeScript") {
		ret += "	ts: 'app/js/*.ts', //pliki ts'a poza bibliotekami";
	} else if (config.frontLanguage == "JavaScript") {
		ret += "	js: 'app/js/*.js', //pliki js'a poza bibliotekami";
	}

	ret += '\n';
	if (config.htmlPreProcesor == "Jade") {
		ret += "	jade: 'app/*.jade', //katalog projektu gdzie trzymane są pliki JADE";
	} else if (config.htmlPreProcesor == "HTML") {
		ret += "	html: 'app/*.html', //katalog projektu gdzie trzymane są pliki HTML";
	}

	ret += '\n';
	if (config.cssPreProcesor == "None") {
		ret += "	css: 'app/css/*.css', // pliki css'a";
	} else if (config.cssPreProcesor == "Sass") {
		ret += "	css: 'app/sass/*.sass', // pliki sass'a\n";
		ret += "	cssMain: 'app/sass/style.sass', //główny plik sass'a";
	} else if (config.cssPreProcesor == "Sass(Scss syntax)") {
		ret += "	css: 'app/sass/*.scss', // pliki sass'a\n";
		ret += "	cssMain: 'app/sass/style.scss', //główny plik sass'a";
	}

	return ret + '\n};';
}
module.exports = main;