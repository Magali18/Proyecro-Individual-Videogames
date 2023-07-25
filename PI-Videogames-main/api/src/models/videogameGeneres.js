const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Videogame = sequelize.models.Videogame
  const Genere = sequelize.models.Genere
  sequelize.define(
    'videogameGeneres',
    {
      VideogameId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Videogame,
          key: 'id'
        }
      },
      GenereId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Genere,
          key: 'id'
        }
      }
    },
    {
      timestamps: false
    }
  )
}
