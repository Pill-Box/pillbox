module.exports = function(sequelize, DataTypes) {
    var Rx = sequelize.define("Rx", {
        drug_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ndc: {
            type: DataTypes.STRING,
        },
        refills: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dispensed_qty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        frequency: {
            type: DataTypes.STRING
        },
        perDay: {
            type: DataTypes.STRING
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
        },
        prescriber_number: {
            type: DataTypes.STRING
        }
   });

    Rx.associate = function(models) {
        Rx.belongsTo(models.Patient, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    
    return Rx;
  };
