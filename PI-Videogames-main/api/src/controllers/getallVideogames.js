const { cleaner } = require("../utils/cleaner");
const { Videogame } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getAllVideogames = async () => {
  const videogameBD = await Videogame.findAll();
  
  const response = await axios.get(
    `https://api.rawg.io/api/games?dates=2019-09-01%2C2019-09-30&key=${API_KEY}&page=5&platforms=18%2C1%2C7`
    
  );
  const gamesApi = response.data.results;
  const gamesClean = cleaner(gamesApi);

  return [...gamesClean, ...videogameBD];
};
module.exports = { getAllVideogames };

/*const getVideogamesApi = async (req, res) => {

   try {
      let games = [];
      for (let i=0; i < 5; i++){ // traigo 100 juegos
     const response = await axios.get('https://api.rawg.io/api/games?key=7ec4d410b20b453189a41dce23b83c6b%27);
     const results = response.data.results.map((game) => {
       return {
         id: game.id,
         name: game.name,
         description: game.description_raw,
         image: game.background_image,
         released: game.released,
         rating: game.rating,
         platforms: game.platforms.map((platform) => platform.platform.name),
         genres: game.genres.map((genre) => genre.name),
       };
     })
   games.push(...results);
}
return games;
 } catch (error) {
     res.status(500).send('Videojuego not found', error);
 }}
*/