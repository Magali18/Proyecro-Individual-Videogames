import React from "react";
import './detail.style.css'
import {Link} from 'react-router-dom'

const Detail = (id) => {
  return (
    <div className="bodyDetail">
      <Link to='/home'>INICIO</Link>
      <h1>ESTAMOS EN EL DETAIL {`${id}`}</h1>
<h1>asdasdasd</h1>

<h4>asdasdasdasd</h4>

<h4>asdasdasd</h4>


<h4>asdasdasd</h4>

    </div>
  );
};
export default Detail;
