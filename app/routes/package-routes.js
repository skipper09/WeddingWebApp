var db = require("../models");

module.exports = function (app) {

    app.get("/package", function (req, res) {
        // console.log(req._passport);
        db.Packages.findAll({})
            .then(function (results) {
                var hbsObject = {
                    package: results
                };
                res.render("packagehbs", hbsObject);
            });
    });

    app.post("/package/create", function (req, res) {
        console.log(req.body);
        // console.log(req.user);

        db.Packages.create(
            req.body
        )
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