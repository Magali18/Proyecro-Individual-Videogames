import "./filtros.style.css";
const Filtros = ({
  raitingHandleSubmit,
  hanlderOrdenar,
  genereHandler,
  destinoInfoHandler,

}) => {
  return (
    <div className="bodyFiltros">
    
        <label>Ordear por rating:</label>
        <select onChange={raitingHandleSubmit}>
          {["Mayor", "Menor"].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
 
      <label>Ordenar Alfabeticamente:</label>
      <select onChange={hanlderOrdenar}>
        {["Z-A", "A-Z"].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    
        <label>Filtrar por genero:</label>

        <select onChange={genereHandler}>
          {[
            "Action",
            "Indie",
            "Adventure",
            "RPG",
            "Strategy",
            "Shooter",
            "Casual",
            "Simulation",
            "Puzzle",
            "Arcade",
            "Platformer",
            "Massively Multiplayer",
            "Racing",
            "Sports",
            "Fighting",
            "Family",
            "Board Games",
            "Educational",
            "Card",
          ].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>


      <label>Filtrar por procedencia:</label>

      <select onChange={destinoInfoHandler}>
        {["Api", "DB"].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

     
    </div>
  );
};
export default Filtros;
