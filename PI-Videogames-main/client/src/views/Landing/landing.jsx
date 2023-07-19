import React from "react";
import './landing.style.css';
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div className="body">
    <div  >
      <h1>PROYECTO INDIVIDUAL -VIDEOGAMES 🎮</h1>
      <h5>Magali M. Pereyra</h5>

      <Link to='/home'>
      <h4>INICIO</h4>
      </Link> 
      </div>
    </div>
  );
};

export default Landing;

  
