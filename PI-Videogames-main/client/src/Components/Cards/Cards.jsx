import React from "react";
import Card from "../Card/Card";
import "./cards.style.css";

const Cards = ({
  paginaPrincipal,
  setNumeroPagina,
  videogameCopy,
  numeroPagina,
}) => {
  const videogamesList = paginaPrincipal;
  const isVideogamesListArray = Array.isArray(videogamesList);
  if (videogameCopy.length) {
    if (!paginaPrincipal.length) {
      setNumeroPagina(numeroPagina - 1);
    }

    return (
      <div className="cards-container">
        {isVideogamesListArray
          ? videogamesList.map((game) => <Card key={game.id} game={game} />)
          : console.log("no es un array")}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Cards;