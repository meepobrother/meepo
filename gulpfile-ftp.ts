var gulp = require('gulp');
var sftp = require('gulp-sftp');
var ssh = require('gulp-ssh');


const sshConfig = {
    ssh: {
        host: '121.40.132.12',
        port: 22,
        username: 'root',
        password: 'Imeepos1989.',
    },
    remoteDir: `/data/wwwroot/default/addons/imeepos_runner/core/model/pages/`,
    commands: [
        //删除现有文件
        `rm -rf /data/wwwroot/default/addons/imeepos_runner/core/model/pages/`,
        `rm -f /data/wwwroot/default/addons/imeepos_runner/core/model/pages/`
    ]
};

const gulpSSH = new ssh({
    ignoreErrors: false,
    sshConfig: sshConfig.ssh
});
gulp.task('runner',['runner.delete'], function () {
    return gulp.src('src/runner/model/pages/**/*')
        .pipe(sftp({
            host: '121.40.132.12',
            port: '22',
            user: 'root',
            pass: 'Imeepos1989.',
            remotePath: '/data/wwwroot/default/addons/imeepos_runner/core/model/pages'
        }));
});

gulp.task('ssh', function () {

})


gulp.task('runner.delete', () => {
    console.log('删除服务器上现有文件...');
    return gulpSSH.shell(sshConfig.commands, { filePath: 'commands.log' })
        .pipe(gulp.dest('logs'));
});