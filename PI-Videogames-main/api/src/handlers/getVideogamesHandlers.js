const {
  getAllVideogames,
  getVideogameById,
  getVideogameByName,
  getGeneres
} = require("../controllers/index");

//-------------------HANDLERS GET----------------------------
module.exports.getVideogamesHandler = async (req, res) => {
  try {
    const response = await getAllVideogames();
    if(!response){
      throw new error('La data esta vacia')
    }
    res.status(200).json(response);

  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports.getIdVideogameHandler = async (req, res) => {
  const { id } = req.params;

  const auxiliar = isNaN(id) ? "bd" : "api";

  try {
    const response = await getVideogameById(id, auxiliar);
    if(!response){
      throw new error('No se encontro videogames con ese id')
    }

    res.status(200).json(response);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message });
  }
};

module.exports.getNameVideogameHandler = async (req, res) => {
  const {name} = req.query;
  try {
    const response = await getVideogameByName(name);

    if (response === undefined) {
      res.status(402).json("La data es undefined");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports.getGeneresHandler = async (req, res) => {

  try {
    const response = await getGeneres()
    res.status(200).json(response);

  } catch (error) {
    res.status(400).json({error:error.message})
  }
};
