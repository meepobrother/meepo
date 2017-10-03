import * as gulp from 'gulp';
var symdest = require('gulp-symdest');
var electron = require('gulp-atom-electron');
gulp.task('default', (done: any) => {
    let src = [
        './*',
        './**/*'
    ];
    return gulp.src(src)
        .pipe(electron({ version: '0.37.2', platform: 'win32' }))
        .pipe(symdest('desktop/windows'));
});
