'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate(models) {
      // define association here
    }
  }
  Contact.init({
    id: {
      // allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    theme: DataTypes.STRING,
    link: DataTypes.STRING,
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};
