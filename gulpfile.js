const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const webp = require("gulp-webp");
const minifyCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const changed = require("gulp-changed");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
const sass_src = "./src/assets/sass/*.scss";
const sass_dest = "./src/assets/css";


// ---------------------------------------------functions

function imgCompress() {
    return gulp
        .src("./src/assets/img/**/*.{png,svg,jpg}", {
            base: "img",
        })
        .pipe(webp())
        .pipe(gulp.dest("./src/"));
};

function twCompress() {
    return gulp
        .src("./src/tailwind.css")
        .pipe(
            minifyCSS({
                compatibility: "ie8",
            })
        )
        .pipe(rename("tailwind.min.css"))
        .pipe(gulp.dest("./src/"));
};


// ---------------------------------------------tasks

gulp.task("compile_sass", async function () {
    gulp
        .src(sass_src)
        .pipe(sass().on("error", sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: ".min" }))
        .pipe(changed(sass_dest))
        .pipe(gulp.dest(sass_dest));
});

gulp.task("compile_css", async function () {
    return gulp.src(sass_src)
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(sass_dest));
});

gulp.task("watchMeDoMyTing", function () {
    browserSync.init({
        watch: true,
        server: false,
        port: 3010,
        ui: {
            port: 3020
        },
    });
    gulp.watch(sass_src, gulp.series("compile_sass"));
    gulp.watch("./src/assets/sass/*.scss").on("change", reload);
    gulp.watch("./src/assets/css/*.css").on("change", reload);
    gulp.watch("./src/**/*.js").on("change", reload);
    gulp.watch("./src/tailwind.css").on("change", twCompress);
    gulp.watch("./src/tailwind.min.css").on("change", reload);
    gulp.watch("./src/assets/img/*").on("add", imgCompress, reload);
});

gulp.task("tw", async function () {
    twCompress();
});

gulp.task("gulpImg", async function () {
    imgCompress();
});


// --------------------------------------------- run

gulp.task("default", gulp.series("gulpImg", "tw", "compile_sass", "compile_css", "watchMeDoMyTing"));
