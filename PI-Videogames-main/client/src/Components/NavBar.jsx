import {Link} from 'react-router-dom'

const NavBar =({handleChange,handleSubmit})=>{
    return (

        <div>
            <Link to='/favoritos'>FVORITOS</Link>
            <hr />
            <Link to='/form'>CREAR VIDEOJUEGO</Link>
            <hr />
            <Link to='/'>LANDING</Link>
            <hr />
            
           <form onChange={handleChange}  >
            <input type="search" placeholder="Ingrese el texto" />
            <button onClick={handleSubmit} type='submit'>Buscar</button>
           </form>
        </div>
    )

};
export default NavBar;