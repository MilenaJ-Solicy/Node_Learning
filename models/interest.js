'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Interest extends Model {
    static associate(models) {
    }
  }
  Interest.init(
    {
      interestName: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Interest'
    }
  );

  return Interest;
};

return Interest;
