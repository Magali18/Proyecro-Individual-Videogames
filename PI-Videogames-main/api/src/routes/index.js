const { Router } = require("express");
const {
  createVideogameHandler,
} = require('../handlers/createVideogameHandler')
const {
  getVideogamesHandler,
  getIdVideogameHandler,
  getNameVideogameHandler,
  getGeneresHandler,
} = require("../handlers/getVideogamesHandlers");

//-----------------------------RUTAS USANDO LOS HANDLERS---------------
const router = Router();

router.get("/videogames", getVideogamesHandler);
router.get("/videogames/:id", getIdVideogameHandler);
router.get('/videogameName', getNameVideogameHandler);
router.get("/generes", getGeneresHandler);
router.post("/videogamesCreado", createVideogameHandler);
 
module.exports = router
