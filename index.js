const { start } = require("live-server")

start({
  port: 3000, // Set the server port. Defaults to 8080.
  host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
  open: true, // When false, it won't load your browser by default.
  file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
  logLevel: 1, // 0 = errors only, 1 = some, 2 = lots
  wait: 1000,
})
