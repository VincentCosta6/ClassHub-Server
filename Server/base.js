let express = require("express"),
    path =    require("path");

let router = express.Router();

let html = "public/Views/HTML/";
let arr = ["login", "signup", "session"];

for(let i in arr)
    router.get("/" + arr[i], function(req, res) {
        res.sendFile(path.resolve(__dirname, html + arr[i] + ".html"));
    });

module.exports = router;