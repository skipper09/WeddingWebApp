var db = require("../models");

module.exports = function(app) {

    // app.get("/vendors", function(req, res) {
        // res.render("providershbs")
        // var hbsObject = {
        //     eachProvider: res
        //   };
        //   return res.render("providershbs", hbsObject);
        // res.redirect("/providers")
        // res.sendFile(path.join(__dirname, "../public/providers.html"));
    // });

    // app.get("/api/providers", function(req, res) {
    //     db.Providers.findAll({})
    //     .then(function(results) {
    //         res.json(results);
    //         var hbsObject = {
    //             eachProvider: results
    //           };
    //         res.render("providershbs", hbsObject);
    //     });
    // });

    app.get("/vendors", function(req, res) {
            db.Providers.findAll({})
            .then(function(results) {
                // console.log(results);
                // res.json(results);
                var hbsObject = {
                    vendor: results
                  };
                res.render("providershbs", hbsObject);
            });
        });

    app.get("/api/providers/:type/:budget?", function(req, res) {
        if (req.params.type && req.params.budget === "undefined") {
            db.Providers.findAll({
                where: {
                    type: req.params.type
                }
            }).then(function(results) {
                // var hbsObject = {
                //     eachProvider: results
                //   };
                //   return res.render("providershbs", hbsObject);
                res.json(results);
            });

        } else {
            db.Providers.findAll({
                where: {
                    type: req.params.type,
                    budget: req.params.budget
                }
            }).then(function(results) {
                res.json(results)
            });

        }
    });
};

