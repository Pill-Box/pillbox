module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
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
			type: DataTypes.BOOLEAN,
			defaultValue: 1
		}

  });
 
  return User;
};
