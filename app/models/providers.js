<<<<<<< HEAD
//For grabbing providers from the database
module.exports = function(sequelize, Sequelize) {
    var Providers = sequelize.define("Providers", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        img: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        capacity: {
            type: Sequelize.STRING
        },
        budget: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        }
    },{
        timestamps: false
    });
        return (Providers);
};



=======
//For grabbing providers from the database
module.exports = function(sequelize, Sequelize) {
    var Providers = sequelize.define("Providers", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        img: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        capacity: {
            type: Sequelize.STRING
        },
        budget: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        }
    },{
        timestamps: false
    });

    // Providers.associate = function(models) {
    //     Providers.belongsTo(models.Packages, {
    //     //   foreignKey: {
    //     //     allowNull: true
    //     //   }
    //     });
    //   };

    return (Providers);
};



>>>>>>> 2ee53928e411b9c86f43da5a2d1f5aaa6a976334
