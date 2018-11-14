function main (config) {
	let ret = `const gulp = require('gulp'),
	del = require('del'),
	bs = require('browser-sync').create(),

	
	autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-cssmin'),
	babel = require('gulp-babel'),
	jsmin = require('gulp-uglify'),
	imgmin = require('gulp-imagemin'),
	htmlmin = require('gulp-htmlmin')`;
	
	if (config.frontLanguage == "TypeScript") {
		ret += ',\n';
		ret += "	ts = require('gulp-typescript'),\n";
		ret += "	smTS = require('gulp-sourcemaps')";
	}

	if (config.htmlPreProcesor == "Jade") {
		ret += ',\n';
		ret += "	pug = require('gulp-pug')";
	}

	if (config.cssPreProcesor != "None") {
		ret += ',\n';
		ret += "	sass = require('gulp-sass'),\n";
		ret += "	sm = require('gulp-sourcemaps')";
	}

	ret += ';';
	
	if(config.cssPreProcesor != "None")
		ret += `\n\nsass.compiler = require('node-sass');`;

	return ret;
}

module.exports = main;