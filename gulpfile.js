// Packages
const gulp = require('gulp');

// import tasks
const thumbnails = require('./.gulp/thumbnails.js');

// // Watch files
// function watchFiles() {
//     gulp.watch('src/_assets/img/**/*', thumbnails.resize);
// }

// // compose tasks (massively simplified here)
// const watch = gulp.parallel(watchFiles);
// const build = thumbnails.resize;

// // export tasks
// exports.watch = watch;
// exports.build = build;

exports['thumbnails:build'] = thumbnails.resize;
exports['thumbnails:watch'] = function () {
    gulp.watch(
        'src/_assets/img/**/*',
        { ignoreInitial: false },
        gulp.series('thumbnails:build')
    );
};
