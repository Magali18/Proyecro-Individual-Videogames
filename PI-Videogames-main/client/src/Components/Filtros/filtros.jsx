import "./filtros.style.css";
const Filtros = ({
  raitingHandleSubmit,
  hanlderOrdenar,
  genereHandler,
  destinoInfoHandler,
  hadlerReset,
}) => {
  return (
    <div className="bodyFiltros">

      <select onChange={raitingHandleSubmit}>
        {['Mayor', 'Menor'].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
        
      </select>

      <select onChange={hanlderOrdenar}>
        {["Ordenar", "A-Z"].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

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

      <select onChange={destinoInfoHandler}>
        {["Api", "DB"].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      <button className="butonStyle" onClick={hadlerReset}>
        Reset
      </button>
    </div>
  );
};
export default Filtros;
