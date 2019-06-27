// explained in https://medium.com/@jamischarles/using-import-export-in-node-js-with-esm-7ce9153ff63
require = require("esm")(module)
module.exports = require("./src/main.js")
