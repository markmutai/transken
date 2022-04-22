const siteName = "TranskenLinks";
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const webp = require("gulp-webp");
const minifyCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const changed = require("gulp-changed");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
const realFavicon = require('gulp-real-favicon');
const FAVICON_DATA_FILE = 'faviconData.json';
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

gulp.task('favicon', function (done) {
    realFavicon.generateFavicon({
        masterPicture: './favicon.png',
        dest: './public',
        iconsPath: '/',
        design: {
            ios: {
                pictureAspect: 'noChange',
                assets: {
                    ios6AndPriorIcons: false,
                    ios7AndLaterIcons: false,
                    precomposedIcons: false,
                    declareOnlyDefaultIcon: true
                },
                appName: { siteName }
            },
            desktopBrowser: {
                design: 'background',
                backgroundColor: '#00346a',
                backgroundRadius: 0.2,
                imageScale: 0.8
            },
            windows: {
                pictureAspect: 'noChange',
                backgroundColor: '#00346a',
                onConflict: 'override',
                assets: {
                    windows80Ie10Tile: false,
                    windows10Ie11EdgeTiles: {
                        small: false,
                        medium: true,
                        big: false,
                        rectangle: false
                    }
                },
                appName: { siteName }
            },
            androidChrome: {
                pictureAspect: 'backgroundAndMargin',
                margin: '13%',
                backgroundColor: '#00346a',
                themeColor: '#00346a',
                manifest: {
                    name: { siteName },
                    display: 'standalone',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true
                },
                assets: {
                    legacyIcon: false,
                    lowResolutionIcons: false
                }
            },
            safariPinnedTab: {
                pictureAspect: 'blackAndWhite',
                threshold: 58.59375,
                themeColor: '#00346a'
            }
        },
        settings: {
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false,
            readmeFile: false,
            htmlCodeFile: true,
            usePathAsIs: false
        },
        markupFile: FAVICON_DATA_FILE
    }, function () {
        done();
    });
});


// --------------------------------------------- run

gulp.task("default", gulp.series("gulpImg", "tw", "compile_sass", "compile_css", "favicon", "watchMeDoMyTing"));
