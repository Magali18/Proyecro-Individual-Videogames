import React from "react";
import './paginado.style.css'

const Paginado = ({paginadNext,paginadoBefore}) => {

  return (
    <div className="containerButtons" >
      <div>
        <button onClick={paginadoBefore}  className="button-85">⏪</button>
      </div>
 
      <div>
        <button onClick={paginadNext} className="button-85">⏩</button>
      </div>
    </div>
  );
};
export default Paginado;
