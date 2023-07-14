//-------------------POST HANDLERS---------------------------------------
const {createVideogame} = require ('../controllers/index')

const createVideogameHandler = async (req,res)=>{
  const {id,
    name,
    description,
    plataformas,
    imagen,
    fechaDeLanzamiento,
    rating} = req.body
    try {
      const response = await createVideogame(
        id,
        name,
        description,
        plataformas,
        imagen,
        fechaDeLanzamiento,
      rating)

      res.status(200).json(response)
      
    } catch (error) {
      res.status(400).json({error:error.message})
    }
    
  };
  module.exports = {createVideogameHandler}


  
  