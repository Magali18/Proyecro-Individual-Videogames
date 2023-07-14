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
        
      },
      description: {
        type: DataTypes.TEXT,
        
      },
      platforms: {
        type: DataTypes.ARRAY(DataTypes.TEXT), 
      
        defaultValue: []
      },
      image: {
        type: DataTypes.TEXT,
      },
      released: {
        type: DataTypes.FLOAT,

      
      },
      rating: {
        type: DataTypes.FLOAT,
      },
    },
    { timestamps: false }
  );
};
