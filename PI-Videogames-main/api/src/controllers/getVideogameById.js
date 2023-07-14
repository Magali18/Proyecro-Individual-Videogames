const { Videogame } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getVideogameById = async (id, auxiliar) => {
    let idVideogame;
  
    if (auxiliar === "api") {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      );
      idVideogame = response.data;
    } else {
      idVideogame = await Videogame.findByPk(id);
    }
  
    const {
    
      name,
      description,
      rating,
      background_image: image,
      released,
      platforms,
      genres,
    } = idVideogame;
  
    const platformNames = platforms.map((platform) => platform.platform.name);
    const genreNames = genres.map((genre) => genre.name);
  
    return {
   
      name,
      description,
      rating,
      image,
      released,
      platforms: platformNames,
      genres: genreNames,
    };
  };
  module.exports={getVideogameById}