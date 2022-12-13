'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ClientContract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClientContract.init(
    {
      clientId: DataTypes.INTEGER,
      contractId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'ClientContract',
      tableName: 'client_contracts'
    }
  )
  return ClientContract
}
