import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideogames,
  getByName,
  filtroRaiting,
  ordenarVideogame,
  generes,
  filtrarGenero,
  filtrarDestino,

} from "../../Redux/acction";

import "./home.style.css";
import Paginado from "../../Components/Paginado/paginado";
import Filtros from "../../Components/Filtros/filtros";

import Cards from "../../Components/Cards/Cards";
import NavBar from "../../Components/NavBar/NavBar";

const Home = () => {
  const dispatch = useDispatch();

  const videogameCopy = useSelector((state) => state.videogameCopy);

   const [numeroPagina, setNumeroPagina] = useState(1);

   const [gameDePantalla] = useState(10);
  // // cuntos videogames van a estar en pantalla ? : 10

  // total videogames : 100
  //entonces tenemos cuantas paginas ? : 10
  //esto nos da un array del 90 al 100
  // si estoy en la pagina 5 * 10 = 50 -> (final)

  //si yo al 50 le resto 10 tengo el principio
  //               1              10
  const final = numeroPagina * gameDePantalla;
  //              10          10
  const inicio = final - gameDePantalla;

  const paginaPrincipal = videogameCopy.slice(inicio, final);

  const ultimaPgina = Math.ceil(videogameCopy / gameDePantalla);

    console.log('aqui no hay nada',paginaPrincipal )
   

  //--------paginado NEXT-------------------------

   const paginadoNext = () => {
    if (numeroPagina === ultimaPgina) {
      setNumeroPagina(numeroPagina);
    } else {
     setNumeroPagina(numeroPagina + 1);
    }
   };
  // //--------------PAGINADO BEFORE------------------

   const paginadoBefore = () => {
     if (numeroPagina === 1) {
    setNumeroPagina(numeroPagina);
     } else {
       setNumeroPagina(numeroPagina - 1);
     }
    
  };

  //----------------------------------------------------
  useEffect(() => {
    dispatch(getVideogames());
    dispatch(generes());
  }, [dispatch]);

  //--------------------------------BUSCAR POR NOMBRE --------------------------------------------------------
  const [searchString, setSearchString] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchString(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(searchString));
  };
  //-----------------------------------------FILTRO RAITING-------------------------------------------
  const raitingHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(filtroRaiting(e.target.value));
    console.log("entro al handler");
  };

  //----------------------------------------FILTRO ORENAR---------------------------------------------------
  const hanlderOrdenar = (e) => {
    e.preventDefault();
    dispatch(ordenarVideogame(e.target.value));
    console.log("se ejecuto el handler");
  };

  //---------------------------------------FILTRAR POR GENERO -------------------------------------
  const genereHandler = (e) => {
    e.preventDefault();
    dispatch(filtrarGenero(e.target.value));
    console.log("entro al handler");
  };
  //-----------------------------FILTRAR POR BD O API---------------
  const destinoInfoHandler =(e)=>{
    e.preventDefault()
    dispatch(filtrarDestino(e.target.value))
    console.log("entro al handler");

  }
//--------------------------RESET----------
const hadlerReset =()=>{
  dispatch(getVideogames())
}
  return (
    <div className="homeBody">
      <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />

      <Filtros
        raitingHandleSubmit={raitingHandleSubmit}
        hanlderOrdenar={hanlderOrdenar}
        genereHandler={genereHandler}
        destinoInfoHandler={destinoInfoHandler}
        hadlerReset={hadlerReset}
      />

      { <Paginado paginadNext={paginadoNext}
       paginadoBefore={paginadoBefore} /> }
      <Cards
        paginaPrincipal={paginaPrincipal}
         setNumeroPagina={setNumeroPagina}
        videogameCopy={videogameCopy}
         numeroPagina={numeroPagina}
      />
    </div>
  );
};

export default Home;
