import React from "react";
import './card.style.css';
import {Link} from 'react-router-dom'

const Card = (props) => {
  const { id, name, description, plataforms, background_image, released, rating } = props.game;


  const cardStyle = {
    backgroundImage: `url(${background_image})`,
    backgroundSize: 'cover'
  };

  return (
    <div className="card-single" >
  
      <div style={cardStyle}>
      
    
      <Link to={`/detail/${id}`}>
      <h3>{name}</h3>
     </Link>
      <h3>{description}</h3>
    
      
      <h3>{plataforms}</h3>
      
      <h3>{released}</h3>
      <h3>{rating}</h3>
    </div>  
    </div>
  );
};

export default Card;
