function main (config) {
	let cssExt = {};
	cssExt['sass(scss syntax)'] = 'scss';
	cssExt['sass'] = 'sass';
	cssExt['none'] = 'css';

	let langs = {
		js: config.frontLanguage[0].toLowerCase() + 's',
		css: cssExt[config.cssPreProcesor.toLowerCase()],
		html: config.htmlPreProcesor.toLowerCase()
	};

	let ret = `const app = \`app\`;
const dist = \`dist\`;
var sources = {
	app: app+'/',
	dist: dist,
	html: \`\${app}/*.${langs.html}\`,
	css: {
		app: \`\${app}/css/**/*.${langs.css}\`,
		lib: \`\${app}/css/**/*.lib.css\`,
		dist: \`\${dist}/css\`
	},
	js: {
		app: \`\${app}/js/**/*.${langs.js}\`,
		lib: \`\${app}/js/**/*.lib.js\`,
		dist: \`\${dist}/js\`
	},
	src: {
		app: \`\${app}/src/*.*\`,
		dist: \`\${dist}/src\`
	}
};`;
	return ret;
}
module.exports = main;