//For grabbing providers from the database
module.exports = function(sequelize, DataTypes) {
    var Providers = sequelize.define("Providers", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        img: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        capacity: {
            type: DataTypes.STRING
        },
        budget: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        }
    },{
        timestamps: false
    });
        return (Providers);
};



