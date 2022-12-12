'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Contract.belongsTo(models.Admin, { foreignKey: 'adminId' })
      Contract.belongsTo(models.Client, {
        as: 'associated_client',
        foreignKey: 'clientId'
      })
      Contract.belongsToMany(models.Client, {
        as: 'contracts',
        through: models.ClientContract,
        foreignKey: 'contractId'
      })
    }
  }
  Contract.init(
    {
      budget: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      eta: {
        type: Sequelize.DATE,
        allowNull: false
      },
      details: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      sequelize,
      modelName: 'Contract',
      tableName: 'contracts'
    }
  )
  return Contract
}
