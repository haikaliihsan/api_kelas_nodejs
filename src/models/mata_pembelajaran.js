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
      mata_pembelajaran.belongsTo(models.mode_pembelajaran, {
        foreignKey: "id_mode_pembelajaran",
        as: "mode_pembelajarans"
      });
      mata_pembelajaran.belongsTo(models.bab, {
        foreignKey: "id_mata_pembelajaran",
        as: "babs"
      });
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