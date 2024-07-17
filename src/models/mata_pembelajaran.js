'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mata_pembelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mata_pembelajaran.init({
    nama_mata_pembelajaran: DataTypes.STRING,
    id_mode_pembelajaran: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mata_pembelajaran',
    underscored: true,
  });
  return mata_pembelajaran;
};