'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Client.belongsTo(models.Admin, { foreignKey: 'adminId' })
      Client.belongsToMany(models.Contract, {
        as: 'clientcontract',
        through: models.ClientContract,
        foreignKey: 'postId'
      })
      Client.hasMany(models.Contract, {
        as: 'associated_contracts',
        foreignKey: 'clientId'
      })
    }
  }
  Client.init(
    {
      company: {
        type: DataTypes.STRING,
        allowNull: false
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: false
      },
      services: {
        type: DataTypes.STRING,
        allowNull: false
      },
      comments: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'Client',
      tableName: 'clients'
    }
  )
  return Client
}
