// define global path for source, destination and watching
export const publicSource = {
	cssBuild      : '../public/assets/css/*.css',
	jsBuild       : '../public/assets/js/*.js',
	css           : '../public/assets/css/',
	js            : '../public/assets/js/',
	htmlBuild     : '../public/',
	faviconBuild  : '../public',
	pathOutputCss : 'assets/html/base/partials/front/css/',
	pathOutputJs  : 'assets/html/base/partials/front/js/',
	images        : '../public/assets/images/',
	svgSprite     : '../public/assets/images/sprites/'
};

export const devSource = {
	baseInputCss       : 'assets/html/base/partials/front/dist/css.html',
	baseInputJs        : 'assets/html/base/partials/front/dist/js.html',
	scssPages          : 'assets/scss/**/*.scss',
	jsPages            : 'assets/js/_page-scripts/*.js',
	htmlSource         : 'assets/html/*.html',
	htmlBase           : 'assets/html/base',
	images             : 'assets/images/**/*.+(png|jpg|gif|svg|ico)',
	excludeSprites     : '!assets/images/sprites/**/*',
	excludeFavicon     : '!assets/images/favicon/**/*',
	favicon            : 'assets/images/favicon/favicon.svg',
	svgSprite          : 'assets/images/sprites/',
	browserSyncBaseDir : '../public/',
	browserSyncIndex   : 'companies-list.html',
};

export const watchSource = {
	scss           : 'assets/scss/**/*.scss',
	js             : 'assets/js/**/*.js',
	html           : 'assets/html/**/*.html',
	svgSprite      : 'assets/images/sprites/**/*.svg',
	images         : 'assets/images/**/*.+(png|jpg|gif|svg|ico)',
	excludeSprites : '!assets/images/sprites/**/*',
	excludeFavicon : '!assets/images/favicon/**/*'
};