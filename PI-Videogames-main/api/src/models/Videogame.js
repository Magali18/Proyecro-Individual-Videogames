const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Videogame",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      genres:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false

      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
       
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },     
      released: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW
      
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      background_image:{
        type: DataTypes.TEXT,
        allowNull: false,

      },
      genre:{
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
    },
    
    { timestamps: false }
  );
};
