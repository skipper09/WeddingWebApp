// For saving user choices into their "package" in the database

// NEEDS TO BE COMPLETED

// Need to do an association with users?? or the other way around

module.exports = function (sequelize, DataTypes) {
    var Packages = sequelize.define("Packages", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
        // venue: {
        //     type: DataTypes.STRING
        // },
        // photographers: {
        //     type: DataTypes.STRING
        // },
        // music: {
        //     type: DataTypes.STRING
        // },
        // florist: {
        //     type: DataTypes.STRING
        // },
        // caterers: {
        //     type: DataTypes.STRING
        // },
        // cake: {
        //     type: DataTypes.STRING
        // }
    }, {
<<<<<<< HEAD
        timestamps: false
    });

  Packages.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Packages.belongsTo(models.Providers, {
      foreignKey: {
        allowNull: true
      },
      as: 'venue'
    });

    Packages.belongsTo(models.Providers, {
      foreignKey: {
        allowNull: true
      },
      as: 'photographer'
    });

    Packages.belongsTo(models.Providers, {
      foreignKey: {
        allowNull: true
      },
      as: 'music'
    });

    Packages.belongsTo(models.Providers, {
      foreignKey: {
        allowNull: true
      },
      as: 'florist'
    });

    Packages.belongsTo(models.Providers, {
      foreignKey: {
        allowNull: true
      },
      as: 'caterer'
    });

    Packages.belongsTo(models.Providers, {
      foreignKey: {
        allowNull: true
      },
      as: 'cake'
    });
  };

=======
            timestamps: false
        });

    // Packages.associate = function (models) {
    //     Packages.hasMany(models.Providers, {
    //     });
    // };

    // Packages.associate = function(models) {
    //     Packages.belongsTo(models.User, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   };

    // Packages.associate = function (models) {
    //     Packages.hasOne(models.User, { foreignKey: 'user_id' })
    // }
>>>>>>> 2ee53928e411b9c86f43da5a2d1f5aaa6a976334

    return Packages;
}
