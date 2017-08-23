// For saving user choices into their "package" in the database

// NEEDS TO BE COMPLETED

// Need to do an association with users?? or the other way around

module.exports = function(sequelize, DataTypes) {
    var Packages = sequelize.define("Packages", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        venue: {
            type: DataTypes.STRING
        },
        photographers: {
            type: DataTypes.STRING
        },
        music: {
            type: DataTypes.STRING
        },
        florist: {
            type: DataTypes.STRING
        },
        caterers: {
            type: DataTypes.STRING
        },
        cake: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });
    return Packages;
}
