const fs = require('fs');
const glob = require('glob');
const path = require('path');
const sharp = require('sharp');
var rimraf = require('rimraf');

// keep config separate from function for easier management
const transforms = [
    {
        src: 'src/_assets/img/gallery/*',
        dist: '_site/img/gallery-thumb/',
        options: {
            width: 200,
            position: 'top',
            fit: 'cover',
        },
    },
];

// resize images
function resizeImages(done) {
    // loop through configuration array of objects
    transforms.forEach(function (transform) {
        // clear directory if exists to avoid dead thumbs during watch
        rimraf.sync(transform.dist);

        // if dist folder does not exist, create it with all parent folders
        if (!fs.existsSync(transform.dist)) {
            fs.mkdirSync(transform.dist, { recursive: true }, (err) => {
                if (err) throw err;
            });
        }

        // glob all files
        let files = glob.sync(transform.src);

        // for each file, apply transforms and save to file
        files.forEach(function (file) {
            let filename = path.basename(file);
            sharp(file)
                .resize(transform.options)
                .toFile(`${transform.dist}/${filename}`)
                .catch((err) => {
                    console.log(err);
                });
        });
    });
    done();
}

// exports (Common JS)
module.exports = {
    resize: resizeImages,
};
