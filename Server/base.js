let express = require("express"),
    path = require("path"),
    formidable = require("formidable"),
    fileUpload = require("express-fileupload");
let router = express.Router();

let html = "public/Views/HTML/";
let arr = ["login", "signup", "session"];

for(let i in arr)
    router.get("/" + arr[i], function(req, res) {
        res.sendFile(path.resolve(__dirname, html + arr[i] + ".html"));
    });

let fileTypes = ["png", "jpg", "jpeg"];

router.use(fileUpload());

router.post("/Image", function(req, res) {
    //if(!req.session_state.user)
     //   return res.json(m(false, "You might not have a session"));
    //if(!req.body.lobbyID)
        //return res.json(m(false, "You dont have a lobbyID"));
    
    if(!req.files || !req.files.sample)
        return res.json(m(false, "You didnt upload a file"));
    let extend = req.files.sample.name.split(".")[1];
    if(!fileValid(extend))
        return res.json(m(false, "File format not supported"));
    req.files.sample.mv(path.resolve(__dirname, "public/Images") + "/" + req.files.sample.name, (err) => {
        if(err) {console.log(err);return res.json(m(false, "An error occured"));}

        console.log("Upload");
        return res.json(m(true, "File successfully uploaded"));
    });
});

router.get("/Image", function(req, res) {
    
});

function fileValid(type)
{
    for(let i in fileTypes)
        if(fileTypes[i] == type)
            return true;
    return false;
}

function m(RESULT, REASON)
{
    return {passed: RESULT, reason: REASON};
}

module.exports = router;