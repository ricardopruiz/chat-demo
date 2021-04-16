const ROOT_DIRECTORY = "/";
const SERVE_PORT = process.env.PORT || 8080;

const express = require("express");
const serveStatic = require("serve-static");
const { join } = require("path");

const app = express();

const absolutePathBuilder = (relativePath) => join(__dirname, relativePath);

app.use(ROOT_DIRECTORY, serveStatic(absolutePathBuilder("/dist")));

app.get(/.*/, (req, { sendFile }) =>
  sendFile(absolutePathBuilder("/dist/index.html"))
);

app.listen(SERVE_PORT);
