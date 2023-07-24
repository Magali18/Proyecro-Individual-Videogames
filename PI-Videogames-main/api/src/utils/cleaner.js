
const cleaner = (arr) => {
  return arr.map((i) => {
    return {

      id: i.id,
      name: i.name,
      description: i.description,
      platforms: i.platforms,
      image: i.background_image,
      released: i.released,
      rating: i.rating
    };
  });
};


 
module.exports= {cleaner}
/*const {
    
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
};*/