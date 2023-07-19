import { Link } from "react-router-dom";
import "./NavBar.style.css";

const NavBar = ({ handleChange, handleSubmit }) => {
  return (
    <div className="containerLinks">
      <div className="backgroundDiv">
        <ul>
          <li>
            <Link to="/">LANDING</Link>
          </li>
          <li>
            <Link to="/form">CREAR VIDEOJUEGO</Link>
          </li>
          <li>
            <Link to="/favoritos">♥️</Link>
          </li>
        </ul>
      </div>

      <form onChange={handleChange}>
        <input
          className="containerInput"
          type="search"
          placeholder="Ingrese el texto"
        />
        <button className="button-86" onClick={handleSubmit} type="submit">
          Buscar
        </button>
      
      </form>
 
    </div>
  );
};
export default NavBar;
