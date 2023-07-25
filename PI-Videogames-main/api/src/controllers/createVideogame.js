const { Videogame } = require("../db");

const createVideogame = async (
  id,
  name,
   description, 
   rating,
   background_image,
   genre
  
   )=>{
  
  return await Videogame.create({
    id,
    name,
    description,
    rating,
    background_image,
    genre

  });
};
module.exports = { createVideogame };
