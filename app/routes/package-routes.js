var db = require("../models");

module.exports = function (app) {

    app.get("/package", function (req, res) {
        db.Packages.findAll({
            include: ['venue', 'photographer', 'music', 'florist', 'caterer', 'cake'],
        }).then(function (results) {
            var price = 0;
            for (var i=0; i < results.length; i++) {
                if (results[i].venue)
                    price += results[i].venue.price;
                if (results[i].photographer)
                    price += results[i].photographer.price;
                if (results[i].caterer)
                    price += results[i].caterer.price;
                if (results[i].cake)
                    price += results[i].cake.price;
                if (results[i].music)
                    price += results[i].music.price;
                if (results[i].florist)
                    price += results[i].florist.price;
            }

            var hbsObject = {
                package: results,
                price: price
            };
            res.render("packagehbs", hbsObject);
        });
    });

    app.post("/package/create", function (req, res) {
        console.log(req.body);
        // console.log(req.user);

        db.Packages.create({
            venueId: req.body.venue,
            photographerId: req.body.photographer,
            catererId: req.body.caterers,
            cakeId: req.body.cake,
            musicId: req.body.music,
            floristId: req.body.florist
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