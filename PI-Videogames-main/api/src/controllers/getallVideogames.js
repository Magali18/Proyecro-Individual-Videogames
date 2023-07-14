const { cleaner } = require("../utils/cleaner");
const { Videogame } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getAllVideogames = async () => {
  const videogameBD = await Videogame.findAll();

  const response = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}`
  );
  const gamesApi = response.data.results;
  const gamesClean = cleaner(gamesApi).slice(0, 1);

  return [...gamesClean, ...videogameBD];
};
module.exports = { getAllVideogames };
