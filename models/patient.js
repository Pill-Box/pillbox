module.exports = (sequelize, DataTypes) => {
    var Patient = sequelize.define('Patient', {
          name_first: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // len: [35]
        }
      },
        name_last: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // len: [35]
        }
      }
    });

    Patient.associate = function (models) {
      Patient.hasMany(models.Rx, {
        onDelete: "cascade"
      });
    };

    Patient.associate = function(models) {
      Patient.belongsTo(models.User, {
          foreignKey: {
              allowNull: false
          }
      });
  };
  
    return Patient;
  };
  