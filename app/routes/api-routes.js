var db = require("../models");

module.exports = function (app) {
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

    app.get("/vendors", function (req, res) {
        db.Providers.findAll({})
            .then(function (results) {
                // console.log(results);
                // res.json(results);
                var hbsObject = {
                    vendor: results
                };
                res.render("providershbs", hbsObject);
            });
    });

    app.get("/vendors/:budget", function (req, res) {
        db.Providers.findAll({
            where: {
                budget: req.params.budget
            }
        })
            .then(function (results) {
                // console.log(results);
                // res.json(results);
                var hbsObject = {
                    vendor: results
                };
                res.render("providershbs", hbsObject);
            });
    });

    app.get("/api/vendors/:type/:budget?", function (req, res) {
        if (req.params.type && req.params.budget === "undefined") {
            db.Providers.findAll({
                where: {
                    type: req.params.type
                }
            }).then(function (results) {
                var hbsObject = {
                    vendor: results
                };
                res.render("providershbs", hbsObject);
                // res.json(results);
            });

        } else {
            db.Providers.findAll({
                where: {
                    type: req.params.type,
                    budget: req.params.budget
                }
            }).then(function (results) {
                // res.json(results)
                var hbsObject = {
                    vendor: results
                };
                res.render("providershbs", hbsObject);
            });

        }
    });

    // app.post("/packages/create", function(req, res) {
    //         // edited burger create to add in a burger_name
    //         db.Burger.create({
    //           burger_name: req.body.burger_name
    //         })
    //         // pass the result of our call
    //         .then(function(dbBurger) {
    //           // log the result to our terminal/bash window
    //           console.log(dbBurger);
    //           // redirect
    //           res.redirect("/");
    //         });
    //       })


};

