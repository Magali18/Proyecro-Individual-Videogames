require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

//CONECCIÓN DE SEQUELIZE CON MI BD:
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`,
 { 
  logging: false, 
  native: false,
}
);


//---------------------------------------CODIGO DESCONOCIDO---------------------------------------------------------------

const basename = path.basename(__filename);
const modelDefiners = [];
// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });
// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

//---------------------------------------------------------------------------------------------------------------------

//MODELOS IMPORTADOS:
const { Videogame, Genere} = sequelize.models;


//RELACIONES:

Videogame.belongsToMany(Genere,{through:'videogameGeneres'})

Genere.belongsToMany(Videogame, {through:'videogameGeneres'})



module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};