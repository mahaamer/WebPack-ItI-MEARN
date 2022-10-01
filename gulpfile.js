var gulp = require("gulp"),
    concat = require("gulp-concat"),
    prefix = require("gulp-autoprefixer");
//css task

gulp.task("css", function() {
    return gulp

        .src("project1/*.css")
        .pipe(prefix("last 2 versions"))
        .pipe(concat("main.css"))
        .pipe(gulp.dest("dist"));
});

//Js task

gulp.task("scripts", function() {
    return gulp
        .src("project1/*.js")
        .pipe(concat("all.js"))
        .pipe(gulp.dest("dist"));
});