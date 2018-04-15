var gulp = require("gulp");
var cssnano = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");
var postcss = require("gulp-postcss");
var precss = require("precss");
var autoprefixer = require("autoprefixer");
var rename = require("gulp-rename");

gulp.task("build", function(done) {
  gulp
    .src("./src/css/main.css")
    .pipe(sourcemaps.init())
    .pipe(
      postcss([
        precss(),
        autoprefixer({
          browsers: ["last 2 versions"],
          cascade: false
        })
      ])
    )
    .on('error', done)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist/css/"))
    .pipe(cssnano())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest("./dist/css/"));
});

