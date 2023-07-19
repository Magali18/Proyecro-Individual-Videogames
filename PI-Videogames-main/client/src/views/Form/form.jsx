import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./form.style.css";
import { postVideogame } from "../../Redux/acction";
import { useDispatch } from "react-redux";
import validate from "./validate";

const Form = () => {
  const dispatch = useDispatch();
  const [mensaje, setMensaje] = useState("");

  const [input, setInput] = useState({
    nombre: "",
    description: "",
    platforms: "",
    image: "",
    released: "",
    rating: "",
    genres: "",
  });
  const [errors, setErrors] = useState({
    nombre: "",
    description: "",
    platforms: "",
    image: "",
    released: "",
    rating: "",
    genres: "",
  });

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

    dispatch(postVideogame(input));

    setMensaje("Videojuego creado con éxito");
  }

  return (
    <div className="bodyForm">
      <Link to="/home">
        <h3>VOLVER AL INICIO</h3>
      </Link>
      <h2>CREAR NUEVO VIDEOGAME</h2>

      <div>
        <form className="formStyle" onSubmit={handleSubmit}>
          <div>
            <label className="labelStyle"> VIDEOJUEGO </label>
            <input
              className="styleInput"
              value={input.nombre}
              name="nombre"
              type="text"
              onChange={handleChange}
              placeholder="Nombre del videogame"
            />
            <span>{errors.nombre}</span>
          </div>
          <div></div>

          <div>
            <label>PLATAFORMAS</label>
            <input
              className="styleInput"
              value={input.platforms}
              name="platforms"
              type="text"
              onChange={handleChange}
            />
            <span>{errors.platforms}</span>
          </div>

          <div>
            <label>IMAGEN</label>
            <input
              className="styleInput"
              value={input.image}
              name="image"
              type="text"
              onChange={handleChange}
              placeholder="url.img"
            />
            <span>{errors.image}</span>
          </div>

          <div>
            <label>FECHA DE LANZAMIENTO</label>
            <input
              className="styleInput"
              value={input.released}
              name="released"
              type="text"
              onChange={handleChange}
              placeholder="dd/mm/aaaa"
            />
            <span>{errors.released}</span>
          </div>

          <div>
            <label>RATING</label>
            <input
              className="styleInput"
              value={input.rating}
              name="rating"
              type="text"
              onChange={handleChange}
              placeholder="ejemplo: 1.23"
            />
            <span>{errors.rating}</span>
          </div>
          <div>
            <label>GENEROS</label>
            <input
              className="styleInput"
              value={input.genres}
              name="genres"
              type="text"
              onChange={handleChange}
              placeholder="Ingrese el texto"
            />
            <span>{errors.genres}</span>
          </div>
          <div>
            <label>DESCRIPCIÓN</label>
            <input
              className="styleInput1"
              value={input.description}
              name="description"
              type="text"
              onChange={handleChange}
              placeholder="Ingrese el texto"
            />
            <span>{errors.description}</span>
          </div>

          {errors.image ||
          errors.description ||
          errors.nombre ||
          errors.released ||
          errors.platforms ||
          errors.rating ||
          errors.genres ? null : (
            <button type="submit">CREAR</button>
          )}
        </form>

        {mensaje && <p className="mensajeStyle">{mensaje}</p>}
      </div>
    </div>
  );
};

export default Form;
