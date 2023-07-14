const { DataTypes } = require("sequelize");

//MODELO LLAMADO 'GENERES':

module.exports = (sequelize) => {
  sequelize.define
  ("Genere", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },{timestamps:false})
};
