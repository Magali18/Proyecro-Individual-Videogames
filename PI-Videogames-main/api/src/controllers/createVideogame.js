const { Videogame } = require("../db");

const createVideogame = async (
  id,
  name,
   description, 
   rating,
   background_image,
   genres
  
   )=>{
  
  return await Videogame.create({
    id,
    name,
    description,
    rating,
    background_image,
    genres

  });
};
module.exports = { createVideogame };
