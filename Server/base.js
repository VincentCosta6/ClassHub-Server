let express = require("express"),
    path =    require("path");

let router = express.Router();

let html = "public/Views/HTML/";
let arr = ["login", "signup", "session"];

for(let i in arr)
    router.get("/" + arr[i], function(req, res) {
        res.sendFile(path.resolve(__dirname, html + arr[i] + ".html"));
    });

router.post("/Image", function(req, res) {
    if(!req.session_state.user)
        return res.json(m(false, "You might not have a session"));
    if(!req.body.lobbyID)
        return res.json(m(false, "You dont have a lobbyID"));
    
    
});

router.get("/Image", function(req, res) {
    
});

function m(RESULT, REASON)
{
    return {passed: RESULT, reason: REASON};
}

module.exports = router;