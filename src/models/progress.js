"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      progress.belongsTo(models.materi, {
        foreignKey: "id_materi",
        as: "materis",
      });
      progress.belongsTo(models.user, {
        foreignKey: "id_user",
        as: "users",
      });
    }
  }
  progress.init(
    {
      id_materi: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
      status_progress: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "progress",
      underscored: true,
    }
  );
  return progress;
};
