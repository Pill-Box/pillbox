module.exports = function(sequelize, DataTypes) {
    var patient = sequelize.define("patient", {
        name_first: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [35]
            }
        },
        name_last: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [35]
            }
        }

   });
  
    patient.associate = function(models) {
        patient.hasMany(models.Rx, {
        onDelete: "cascade"
      });
    };
  
    return patient;
  };
