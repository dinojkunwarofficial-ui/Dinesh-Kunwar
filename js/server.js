const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const mimeTypes = {
  ".css": "text/css",
  ".html": "text/html",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  } catch {
    res.writeHead(400).end("Bad request");
    return;
  }

  const file = path.resolve(root, pathname === "/" ? "index.html" : `.${pathname}`);
  if (file !== root && !file.startsWith(`${root}${path.sep}`)) {
    res.writeHead(403).end("Forbidden");
    return;
  }

  fs.readFile(file, (error, content) => {
    if (error) {
      res.writeHead(error.code === "ENOENT" ? 404 : 500).end("Unable to read file");
      return;
    }

    res.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(file).toLowerCase()] ?? "application/octet-stream",
    });
    res.end(content);
  });
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Serving Actor Portfolio at http://localhost:8000");
});
