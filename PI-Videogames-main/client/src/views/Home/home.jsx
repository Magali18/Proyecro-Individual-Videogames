import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getByName } from '../../Redux/acction';
import './home.style.css';

import Cards from '../../Components/Cards/Cards';
import NavBar from '../../Components/NavBar';

const Home = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.allVideogames);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  const [searchString, setSearchString] = useState('');

  const handleChange = (e) => {
    e.preventDefault()
    setSearchString(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(searchString));
  };
  

  return (
    <div className='homeBody'>
      <h2>VIDEO-GAMES</h2>
      <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <hr />
      <Cards allVideogames={allVideogames} />
    </div>
  );
};

export default Home;
