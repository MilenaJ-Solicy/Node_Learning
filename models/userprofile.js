'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    static associate(models) {
      UserProfile.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
  }

  UserProfile.init(
    {
      fullName: DataTypes.STRING,
      bio: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'UserProfile',
    }
  );

  return UserProfile;
};
