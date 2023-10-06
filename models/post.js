'use strict';
const { Model } = require('sequelize');
const status = require('../enums/status');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
    }
  }
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        values: Object.values(status),
    },
    userId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
