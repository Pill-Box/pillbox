module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    username: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    email: {
      type: Sequelize.STRING,
      notEmpty: true,
      validate: {
        isEmail: true
      }
    },
    hashed_password: {
      type: Sequelize.STRING,
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
    status: {
			type: Sequelize.ENUM('active', 'inactive'),
			defaultValue: 'active'
		}

  });

  User.associate = function (models) {
    User.hasMany(models.Rx, {
      onDelete: "cascade"
    });
  };

  return User;
};
