const gulp = require("gulp");
const child_process = require("child_process");
const path = require("path");
const fs = require("fs");

const {
  promises: { readdir },
} = require("fs");

const getDirectories = async (source) =>
  (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

gulp.task("yarn_all", async (done) => {
  getDirectories(".").then((dirs) => {
    for (let el of dirs) {
      if (el !== "node_modules" && el !== ".git" && el !== ".vscode") {
        if (fs.existsSync(`${el}/package.json`)) {
          console.log(`working on ${el}`);
          child_process.execSync(`cd ${el} && yarn --dev`, {
            encoding: "utf-8",
          });
        }
      }
    }
    console.log({ dirs });
  });
});

gulp.task(
  "default",
  gulp.series("yarn_all", (done) => {
    done();
  })
);
