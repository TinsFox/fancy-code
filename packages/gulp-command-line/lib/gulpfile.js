const rimraf = require("rimraf");
const cwd = process.cwd();
const path = require("path");
function clean() {
  rimraf.sync(path.join(cwd, "dist"));
  console.log("rimraf");
}
module.exports = clean;
