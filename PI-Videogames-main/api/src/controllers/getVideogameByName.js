const { Videogame } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;
const { Op } = require('sequelize');

const getVideogameByName = async (name) => {
  const lowercaseName = name.toLowerCase(); // Convertir el nombre a minúsculas

  const infoApi = await axios.get(
  `https://api.rawg.io/api/games?search=${lowercaseName}&key=${API_KEY}`)

  const resultApi = infoApi.data.results.filter(
    (game) => game.name.toLowerCase().includes(lowercaseName)
  ).slice(0, 15);


  const videogameDB = await Videogame.findAll({
    where: {
      name: { [Op.iLike]: '%' + lowercaseName + '%' }
    },
    limit: 15
  });
  
return [...resultApi,...videogameDB]

};
  



module.exports = { getVideogameByName };
