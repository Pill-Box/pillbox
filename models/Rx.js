module.exports = function(sequelize, DataTypes) {
    var Rx = sequelize.define("Rx", {
        user_id: {
            type: DataTypes.INT
        },
        drug_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [75]
            }
        },
        refills: {
            type: DataTypes.INT,
            allowNull: false,
        },
        dispensed_qty: {
            type: DataTypes.INT,
            allowNull: false,
        },
        frequency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        frequency_num: {
            type: DataTypes.INT,
            allowNull: false
        },
        time_of_day: {
            type: DataTypes.STRING
        },
        sig: {
            type: DataTypes.STRING
        },
        notes: {
            type: DataTypes.STRING
        },
        pharmacist: {
            type: DataTypes.STRING
        },
        pharmacy_number: {
            type: DataTypes.STRING
        },
        prescriber: {
            type: DataTypes.STRING
        }
   });

    Rx.associate = function(models) {
        Rx.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Rx;
  };
