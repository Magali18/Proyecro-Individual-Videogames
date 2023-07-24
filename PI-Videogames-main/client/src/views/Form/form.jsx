import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./form.style.css";
import { postVideogame } from "../../Redux/acction";
import { useDispatch } from "react-redux";
import validate from "./validate";

const Form = () => {
  const dispatch = useDispatch();
  const [mensaje, setMensaje] = useState("");
  const [inputGenero, setInputGenero] = useState([]);

  const [input, setInput] = useState({
    name: "",
    description: "",
    plataforms: "",
    background_image: " ",
    released: "",
    rating: "",
    genres: [...inputGenero]
  });
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    plataforms: "",
    background_image: " ",
    released: "",
    rating: "",
    genres: "",
  });
  function changeGenere(e) {
    const selectValue = e.target.value;
    setInputGenero([...inputGenero, selectValue]);
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !errors.background_image &&
      !errors.description &&
      !errors.genres &&
      !errors.name &&
      !errors.rating &&
      !errors.released &&
      !errors.plataforms
    ) {
      dispatch(postVideogame(input));
      setMensaje("Videojuego creado con éxito");
    } else {
      setMensaje("Llenar los campos requeridos");
      window.alert('No se pueden enviar los datos')
    }
  }

  return (
    <div className="bodyForm">
      <Link to="/home">
        <h3>ATRAS</h3>
      </Link>

      <h4>CREAR NUEVO VIDEOGAME</h4>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label> Videojuego:</label>
            </div>
            <input
              value={input.name}
              name="name"
              type="text"
              onChange={handleChange}
              placeholder="Nombre del videogame"
            />
            <span>{errors.name}</span>
          </div>
          <div>
            <div>
              <label>Plataformas:</label>
            </div>
            <input
              value={input.plataforms}
              name="plataforms"
              type="text"
              onChange={handleChange}
            />
            <span>{errors.plataforms}</span>
          </div>

          <div>
            <label>Imagen:</label>
          </div>
          <input
            value={input.background_image}
            name="background_image"
            type="text"
            onChange={handleChange}
            placeholder="url.imagen"
          />
          <span>{errors.background_image}</span>

          <div>
            <label>Fecha de lanzamiento:</label>
          </div>
          <input
            value={input.released}
            name="released"
            type="text"
            onChange={handleChange}
            placeholder="dd/mm/aaaa"
          />
          <span>{errors.released}</span>

          <div>
            <label>Rating:</label>
          </div>
          <input
            value={input.rating}
            name="rating"
            type="text"
            onChange={handleChange}
            placeholder="ejemplo: 1.23"
          />
          <span>{errors.rating}</span>

          <div>
            <label>Generos:</label>
          </div>
          <select onChange={changeGenere}>
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

          <span>{errors.genres}</span>

          <div>
            <label>Descripcion</label>{" "}
          </div>
          <input
            value={input.description}
            name="description"
            type="text"
            onChange={handleChange}
            placeholder="Ingrese el texto"
          />
          <span>{errors.description}</span>
          <div>
            {errors.image ||
            errors.description ||
            errors.nombre ||
            errors.released ||
            errors.plataforms ||
            errors.rating ||
            errors.genres ? null : (
              <button type="submit">CREAR</button>
            )}
          </div>
        </form>

        {mensaje && <p>{mensaje}</p>}
      </div>
    </div>
  );
};

export default Form;
