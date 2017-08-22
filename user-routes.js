// var db = require("../models");

// module.exports = function(app) {

//     app.get("/api/users", function(req, res) {
//         db.Providers.findAll({})
//         .then(function(results) {
//             res.json(results);
//         });
//     });

//     app.get("/api/providers/:type", function(req, res) {
//         if (req.params.type) {
//             db.Providers.findAll({
//                 where: {
//                     type: req.params.type
//                 }
//             }).then(function(results) {
//                 res.json(results);
//             });
//         };
//     });

//     app.get("/api/providers/:type/:budget", function(req, res) {
//         if (req.params.type && req.params.budget) {
//             db.Providers.findAll({
//                 where: {
//                     type: req.params.type,
//                     budget: req.params.budget
//                 }
//             }).then(function(results) {
//                 res.json(results)
//             });
//         };
//     });
// };


