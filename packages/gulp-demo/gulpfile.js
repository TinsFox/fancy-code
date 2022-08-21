const { parallel } = require("gulp");

function compileTs(stream) {
  return stream
    .pipe(ts(tsConfig))
    .js.pipe(
      through2.obj(function (file, encoding, next) {
        // console.log(file.path, file.base);
        file.path = file.path.replace(/\.[jt]sx$/, ".js");
        this.push(file);
        next();
      })
    )
    .pipe(gulp.dest(process.cwd()));
}

exports.default = compileTs;
