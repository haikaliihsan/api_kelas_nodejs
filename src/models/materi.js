"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class materi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      materi.belongsToMany(models.user, {
        through: models.progress,
        foreignKey: "id_materi",
        as: "users",
      });
    }
  }
  materi.init(
    {
      nama_materi: DataTypes.STRING,
      tipe_materi: DataTypes.ENUM(
        "video",
        "end quiz",
        "single quiz",
        "summary"
      ),
      exp: DataTypes.INTEGER,
      gold: DataTypes.INTEGER,
      id_sub_bab: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "materi",
      underscored: true,
    }
  );
  return materi;
};
