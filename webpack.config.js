const path = require("path");

module.exports = {
    entry: "./src/logic/index.js",
    mode: "development",
    output: {
        filename: "./logic/main.js",
        path: path.resolve(__dirname, "dist"),
    },
};