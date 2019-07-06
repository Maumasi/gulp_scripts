const gulp = require('gulp');
const sass = require('gulp-sass');
const shell = require('shelljs');
const { argv } = require('yargs');

// git info
const gitInfo = {
  user: shell.exec('`which git` config --list | grep "user.name"').split('=')[1].split('\n')[0],
  branch: shell.exec('`which git` branch | `which grep` "*"').stdout.split(' ')[1].split('\n')[0],
}
// paths
// const watchPaths = {
//   libSass: '_dev/sass_files/**/*.sass',
//   mainSass: '_dev/sass_files/**/*.sass',
// };


// =================== SASS ====================================================

// function compileSass(done) {
//   return gulp.src('./_dev/sass_files/main.sass')
//     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//     .pipe(gulp.dest('./client'));
//     done();
// }
// // task
// gulp.task('sass', compileSass);

// =================== Watch  ==================================================
// function watch(done) {
//   const { libSass, mainSass } = watchPaths;
//
//   // all task to run before startinf the watch task
//   gulp.series(compileSass);
//   // add all watch tasks here
//   gulp.watch(libSass, compileSass);
//   gulp.watch(mainSass, compileSass);
//   done();
// }

// task
// gulp.task('watch', watch);

// =================== Git  ====================================================

function gitMessageBuilder() {
  const { user, branch } = gitInfo;
  let heading = '';
  if(argv.s) {
    heading = 'STABLE'
  } else if(argv.b) {
    heading = 'BROKEN'
  } else if(argv.f) {
    heading = 'FEATURE'
  } else if(argv.x) {
    heading = 'HOTFIX'
  } else if(argv.m) {
    heading = 'MESSAGE';
  } else {
    heading = 'AUTO-COMMIT';
  }

  let message = argv.m;

  if(!message || !(message.length > 0)) {
    message = 'no message for commit.';
  }
  return `[BRANCH] ${branch} | [USER] ${user} :: ${heading} :: ${message}`;
}


function commitAndPush(done) {
  const { branch } = gitInfo;
  let gitJob = `\`which git\` add .`;
  gitJob += ` && \`which git\` commit --message "${gitMessageBuilder()}"`;
  gitJob += ` && \`which git\` push -u github ${branch}`;
  gitJob += ` && \`which git\` push -u heroku ${branch}`;
  shell.exec(gitJob);
  done();
}


gulp.task('push', gulp.series(compileSass, commitAndPush));

// =================== Default =================================================
// just type `gulp` in the terminal to execute all the gulp tasks
gulp.task('default', gulp.series(compileSass, watch));




//
