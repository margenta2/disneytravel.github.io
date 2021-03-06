'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hotel.hasMany(models.User, {foreignKey: 'hotelId'})
    }
  };
  Hotel.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    transportation: DataTypes.STRING,
    category: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};