import "./favoritos.style.css";
import { Link } from "react-router-dom";
const Favoritos = () => {
  return (
    <div className="bodyFavoritos">
      <Link to="/Home">VOLVER AL INICIO</Link>
      <h1>FAVORITOS </h1>
    </div>
  );
};
export default Favoritos;
