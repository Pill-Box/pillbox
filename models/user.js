module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    user_id: {
      type: DataTypes.INT,
      notEmpty: true
    },
    user_name: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    email: {
      type: DataTypes.STRING,
      notEmpty: true,
      validate: {
        isEmail: true
      }
    },
    hashed_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
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
    },
    active: {
			type: DataType.Boolean,
			defaultValue: 1
		}

  });

  User.associate = function (models) {
    User.hasMany(models.Rx, {
      onDelete: "cascade"
    });
    
  };

  return User;
};
