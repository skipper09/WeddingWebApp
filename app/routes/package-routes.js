var db = require("../models");

module.exports = function (app) {

    app.get("/package", function (req, res) {
        console.log('something');
        db.Packages.findAll({})
            .then(function (results) {
                var hbsObject = {
                    package: results
                };
                res.render("packagehbs", hbsObject);
            });
    });

    app.post("/package/create", function (req, res) {
        console.log(res);

        db.Packages.create({
            venue: req.body.venue,
            photographers: req.body.photographer,
            caterers: req.body.caterers,
            cake: req.body.cake,
            music: req.body.music,
            florist: req.body.florist
        })
            .then(function (result) {
                res.redirect("/package");
            });
    });

    app.delete("/package/delete/:id", function (req, res) {
        db.Packages.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            res.redirect("/package")
        });
    })

};