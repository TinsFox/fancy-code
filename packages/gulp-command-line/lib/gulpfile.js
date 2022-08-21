const rimraf = require("rimraf");
function clean(cb) {
  // body omitted
  // cb();
  console.log("rimraf", rimraf);
}
module.exports = clean;
