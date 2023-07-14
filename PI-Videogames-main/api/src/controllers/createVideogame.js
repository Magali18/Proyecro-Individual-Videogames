const { Videogame } = require("../db");


const createVideogame = async (
    id,
    name,
    description,
    plataforms,
    image,
    released,
    rating
  ) => {
    return await Videogame.create({
      id,
      name,
      description,
      plataforms,
      image,
      released,
      rating,
    });
  };
  module.exports = {createVideogame}