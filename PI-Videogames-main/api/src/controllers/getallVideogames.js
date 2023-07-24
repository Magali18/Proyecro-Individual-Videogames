const { cleaner } = require("../utils/cleaner");
const { Videogame } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getAllVideogames = async () => {
  const videogameBD = await Videogame.findAll();
  let page = 2;
  let arrayFinal = [];

  for (let i = 0; i < 6; i++) {
    const response = await axios.get(
      ` https://api.rawg.io/api/games?dates=2019-09-01%2C2019-09-30&key=${API_KEY}&page=${page}&platforms=18%2C1%2C7`
    );
    const resultado = await response.data.results;
    
    arrayFinal.push(...resultado);
    
    page++
  }

  return [...arrayFinal, ...videogameBD];
};
module.exports = { getAllVideogames };
