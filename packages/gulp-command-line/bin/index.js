const cac = require("cac");
const cli = cac("gulp-command-line");
const clean = require("../lib/gulpfile");
cli
  .command("clean <dir>", "Remove a dir")
  .option("-r, --recursive", "Remove recursively")
  .action(clean());

cli.help();

cli.parse();
