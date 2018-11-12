function main (config) {
	let ret = `var gulp = require('gulp'),
	del = require('del'),
	uglify = require('gulp-uglify'),
	html_min = require('gulp-htmlmin'),
	imgMin = require('gulp-imagemin'),
	minCss = require('gulp-clean-css'),
	browser = require('browser-sync'),
	babel = require('gulp-babel')`;
	
	if (config.frontLanguage == "TypeScript") {
		ret += ',\n';
		ret += "	ts = require('gulp-typescript')";
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

	return ret + ';';
}

module.exports = main;