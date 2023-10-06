'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserInterest extends Model {
    static associate(models) {
    }
  }

  UserInterest.init(
    {
      userId: DataTypes.INTEGER,
      interestId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'UserInterest'
    }
  );

  return UserInterest;
};

return UserInterest;
