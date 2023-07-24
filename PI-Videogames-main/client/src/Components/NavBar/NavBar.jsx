import { Link } from "react-router-dom";
import "./NavBar.style.css";

const NavBar = ({ handleChange, handleSubmit,hadlerReset }) => {
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
      <div className="botonReset">
      <button className="button-86" onClick={hadlerReset}>
        Reset
      </button>
      </div>
 
    </div>
  );
};
export default NavBar;
