import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_BY_NAME = "GET_BY_NAME";
export const POST_VIDEOGAME = "POST_VIDEOGAME";
export const ID_VIDEOGAME = "ID_VIDEOGAME";
export const FILTRO_RATING = "FILTRO_RATING";
export const ORDENAR_VIDEOGAME = "ORDENAR_VIDEOGAME";
export const GENERES = "GENERES";
export const FILTRO_GENEROS = "FILTRO_GENEROS";
export const FILTRO_DESTINO = "FILTRO_DESTINO";

export function getVideogames() {
  return async function (dispatch) {
    const response = await axios(" http://localhost:3001/videogames ");
    return dispatch({
      type: "GET_VIDEOGAMES",
      payload: response.data
    });
  };
}

export function getByName(name) {
  return async function (dispatch) {
    const response = await axios(
      `http://localhost:3001/videogameName?name=${name}`
    );
    return dispatch({
      type: "GET_BY_NAME",
      payload: response.data,
    });
  };
}

export function postVideogame(input) {
  return async function (dispatch) {
    const { data } = await axios.post(
      `http://localhost:3001/videogamesCreado`,
      input
    );
    return dispatch({
      type: "POST_VIDEOGAME",
      payload: data,
    });
  };
}

export function idVideogame(id) {
  return async function (dispatch) {
    const { data } = await axios(`http://localhost:3001/videogames/${id}`);
    return dispatch({
      type: "ID_VIDEOGAME",
      payload: data,
    });
  };
}

export function filtroRaiting(options) {
  return {
    type: "FILTRO_RATING",
    payload: options,
  };
}

export function ordenarVideogame(ordenar) {
  return {
    type: "ORDENAR_VIDEOGAME",
    payload: ordenar,
  };
}

export function generes() {
  return async function (dispatch) {
    const { data } = await axios(`http://localhost:3001/generes`);
    return dispatch({
      type: "GENERES",
      payload: data,
    });
  };
}
export function filtrarGenero(options) {
  return {
    type: "FILTRO_GENEROS",
    payload: options,
  };
}
export function filtrarDestino(destino) {
  return {
    type: "FILTRO_DESTINO",
    payload: destino,
  };
}
