var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // app.get("/vendors", function(req, res) {
    //     // res.render("providershbs")
    //     // var hbsObject = {
    //     //     eachProvider: res
    //     //   };
    //     //   return res.render("providershbs", hbsObject);
    //     res.redirect("/providers")
    //     // res.sendFile(path.join(__dirname, "../public/providers.html"));
    // });

    // app.get("/profile", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/profile.html"));
    // });

    // app.get("/package", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/package.html"));
    // });
}

