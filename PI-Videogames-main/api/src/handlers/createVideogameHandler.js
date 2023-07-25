//-------------------POST HANDLERS---------------------------------------
const { createVideogame } = require('../controllers/index');

const createVideogameHandler = async (req, res) => {
  const {
    id,
    name,
    description,
    rating,
    background_image,
    genre
    
  } = req.body;

  try {
    const response = await createVideogame(
      id,
     name,
     description,
     rating,
     background_image,
     genre
      );

    res.status(203).json(response);

  } catch (error) {
    console.log(error)
    res.status(401).json({ error: error.message });
  }
};

module.exports = { createVideogameHandler };
