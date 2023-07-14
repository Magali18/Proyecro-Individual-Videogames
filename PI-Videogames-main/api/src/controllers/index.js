
const {getAllVideogames} = require('./getallVideogames')
const {getVideogameById}= require ('./getVideogameById')
const {getVideogameByName}=require ('./getVideogameByName')
const {getGeneres} = require ('./getGeneres')
const {createVideogame} = require ('./createVideogame')

module.exports = {
  getAllVideogames,
  getVideogameById,
  getVideogameByName,
  getGeneres,
  createVideogame
};
