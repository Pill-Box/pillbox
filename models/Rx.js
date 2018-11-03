module.exports = function(sequelize, DataTypes) {
    var Rx = sequelize.define("Rx", {
        drug_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [75]
            }
        }

   });
  
    return Rx;
  };
