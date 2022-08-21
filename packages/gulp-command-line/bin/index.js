const cac = require("cac");
const cli = cac("gulp-command-line");
const clean = require("../lib/gulpfile");
cli
  .command("rm <dir>", "Remove a dir")
  .option("-r, --recursive", "Remove recursively")
  .action((dir, options) => {
    console.log("remove " + dir + (options.recursive ? " recursively" : ""));
    clean();
  });

cli.help();

cli.parse();
