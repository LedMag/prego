const { src, dest } = require('gulp');
const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const del = require('del');
const scss = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');


const projectFolder = 'app/dest';
const sourceFolder = 'app/src';

const paths = {
  build: {
    html: projectFolder + '/',
    css: projectFolder + '/',
    js: projectFolder + '/',
    images: projectFolder + '/img/'
  },
  source: {
    html: sourceFolder + '/index.html',
    css: sourceFolder + '/style.scss',
    js: sourceFolder + '/main.js',
    images: sourceFolder + '/img/**/*.{jpg, png}'
  },
  watch: {
    html: sourceFolder + '/**/*.html',
    css: sourceFolder + '/**/*.scss',
    js: sourceFolder + '/**/*.js/',
    images: sourceFolder + '/img/**/*.{jpg, png}'
  },
  clean: './' + projectFolder + '/'
}

function browserSync(params) {
  browsersync.init({
    server: {
        baseDir: "./" + projectFolder + '/'
    },
    port: 2000,
    notify: false,
  })
}

function html() {
  return src(paths.source.html)
        .pipe(fileinclude())
        .pipe(dest(paths.build.html))
        .pipe(browsersync.stream())
}

function css() {
  return src(paths.source.css)
        .pipe(scss({
          outputStyle: 'compressed'
        }))
        .pipe(gcmq())
        .pipe(autoprefixer({
          overrideBrowserslist: ['last 5 versions'],
        }))
        .pipe(dest(paths.build.css))
        .pipe(cleanCSS())
        .pipe(rename({
          extname: ".min.css"
        }))
        .pipe(dest(paths.build.css))
        .pipe(browsersync.stream())
}

function js() {
  return src(paths.source.js)
        .pipe(fileinclude())
        .pipe(babel())
        .pipe(dest(paths.build.js))
        .pipe(uglify())
        .pipe(rename({
          extname: ".min.js"
        }))
        .pipe(dest(paths.build.js))
        .pipe(browsersync.stream())
}

function img() {
  return src(paths.source.images)
        .pipe(dest(paths.build.images))
        .pipe(browsersync.stream())
}

function watchFiles() {
  gulp.watch([paths.watch.html], html);
  gulp.watch([paths.watch.css], css);
  gulp.watch([paths.watch.js], js);
  gulp.watch([paths.watch.images], img);
}

function clean() {
  return del(paths.clean)
}


let build = gulp.series(clean, gulp.parallel(html, js, css, img));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.img = img;
exports.js = js;
exports.css = css;
exports.watchFiles = watchFiles;
exports.clean = clean;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
