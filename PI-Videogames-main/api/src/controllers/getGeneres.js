const { Genere } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getGeneres = async () => {
  const existeGenres = await Genere.findAll();
  let arrayGenere= []

  if (!existeGenres.length) {
    const dataApi = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    const resultsApi = dataApi.data.results;
    const genres = resultsApi.map(({ id, name }) => ({ id, name }));

     arrayGenere.push(genres)
    
    for (const genre of genres) {
      await Genere.create(genre);
    }

  }else{
    const dataApi = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    const resultsApi = dataApi.data.results;
    const genres = resultsApi.map(({ id, name }) => ({ id, name }));

     arrayGenere.push(genres)
    

  }

  return arrayGenere
};

module.exports = { getGeneres };
