'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Games.belongsTo(models.State, {
        foreignKey: 'id',
        target_key: 'state_id'
      })
      Games.belongsTo(models.Cells, {
        foreignKey: 'id',
        target_key: 'cells_id'
      })
    }
  }
  Games.init({
    state_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Games',
  });
  return Games;
};