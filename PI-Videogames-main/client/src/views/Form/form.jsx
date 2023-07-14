import React, { useState } from "react";
import { Link } from "react-router-dom";
import './form.style.css';
import { postVideogame } from "../../Redux/acction";
import { useDispatch } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: '',
    description: '',
    platforms: '',
    image: '',
    released: '',
    rating: ''
  });

  const [mensaje, setMensaje] = useState('');

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postVideogame(input));
    setMensaje('Videojuego creado con exito');
  }

  return (
    <div className="bodyForm">
      <Link to="/home">
        <h3>VOLVER AL INICIO</h3>
      </Link>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>NOMBRE DEL VIDEOJUEGO</label>
            <input value={input.name} name='name' type='text' onChange={handleChange} />
          </div>

          <div>
            <label>DESCRIPCIÓN</label>
            <input value={input.description} name='description' type='text' onChange={handleChange} />
          </div>

          <div>
            <label>PLATAFORMAS</label>
            <input value={input.platforms} name='platforms' type='text' onChange={handleChange} />
          </div>

          <div>
            <label>IMAGEN</label>
            <input value={input.image} name='image' type="text" onChange={handleChange} />
          </div>

          <div>
            <label>FECHA DE LANZAMIENTO</label>
            <input value={input.released} name='released' type='text' onChange={handleChange} />
          </div>

          <div>
            <label>RATING</label>
            <input value={input.rating} name='rating' type='text' onChange={handleChange} />
          </div>

          <div>
            <button type="submit">CREAR</button>
          </div>
        </form>
        {mensaje && <p>{mensaje}</p>}
      </div>
    </div>
  );
};

export default Form;
