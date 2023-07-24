const { DataTypes } = require("sequelize");

//MODELO LLAMADO 'VIDEOGAME':

module.exports = (sequelize) => {
  sequelize.define(
    "Videogame",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },
      genres:{
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true,

      },

      plataforms: {
        type: DataTypes.ARRAY(DataTypes.TEXT), 
        allowNull:false

      },
      background_image: {
        type: DataTypes.TEXT,
        allowNull: false
      },       
      released: {
        type: DataTypes.DATEONLY,
        allowNull: false,

      
      },
      rating: {
        type: DataTypes.FLOAT,
      },
    },
    { timestamps: false }
  );
};
