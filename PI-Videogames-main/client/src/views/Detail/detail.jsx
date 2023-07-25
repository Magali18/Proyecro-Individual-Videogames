import React from "react";
import './detail.style.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { idVideogame } from '../../Redux/acction';

const Detail = () => {
  const detailVideogame = useSelector((state) => state.detailVideogame);
  const dispatch = useDispatch();
  const objId = useParams();
  const id = objId.id;

  useEffect(() => {
    dispatch(idVideogame(id));
  }, [dispatch, id]);

  const { name, description, genres,genre, image, platforms, rating, released } = detailVideogame;

  return (
    <div className="bodyDetail">
      <Link to='/home'> Volver</Link>
      <h1>{name}</h1>
      <img className="imgDetail" src={image} alt={name} />
      <div className="bodyStyle">
      <h5>GENEROS: {genres} </h5>

      <h5>PLATAFORMAS:</h5>{platforms}

      
      
      <h5>REITING:</h5>{rating}
      <h5>FECHA DE LANZAMIENTO:</h5>{released}
      <h5>DESCRIPCION:</h5>{description}
      </div>
    </div>
  );
};

export default Detail;
