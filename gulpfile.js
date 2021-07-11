// Packages
const gulp = require('gulp');

// import tasks
const thumbnails = require('./.gulp/thumbnails.js');

exports['thumbnails:build'] = thumbnails.resize;
exports['thumbnails:watch'] = function () {
    gulp.watch(
        'src/_assets/img/**/*',
        { ignoreInitial: false },
        gulp.series('thumbnails:build')
    );
};
