import {
  GET_VIDEOGAMES,
  GET_BY_NAME,
  POST_VIDEOGAME,
  ID_VIDEOGAME,
  FILTRO_RATING,
  ORDENAR_VIDEOGAME,
  GENERES,
  FILTRO_GENEROS,
  FILTRO_DESTINO,
} from "../Redux/acction";

let initialState = {
  allVideogames: [],
  videogameCopy: [],
  postVideogame: {},
  detailVideogame: {},
  allGeneres: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: action.payload,
        videogameCopy: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        videogameCopy: action.payload,
      };
    case POST_VIDEOGAME:
      return {
        ...state,
        postVideogame: action.payload,
      };
    case ID_VIDEOGAME:
      return {
        ...state,
        detailVideogame: action.payload,
      };
    case FILTRO_RATING:
      return {
        ...state,
        videogameCopy:
          action.payload === "Mayor"
            ? state.allVideogames.slice().sort((a, b) => b.rating - a.rating) 
            : state.allVideogames.slice().sort((a, b) => a.rating - b.rating), 
      };


    case ORDENAR_VIDEOGAME:
      return {
        ...state, 
         videogameCopy: 
         action.payload === "A-Z"?
       state.videogameCopy
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name)):
          state.videogameCopy
          .slice()
          .sort((a, b) => b.name.localeCompare(a.name))

      };

    case GENERES:
      return {
        ...state,
        allGeneres: action.payload,
      };
    case FILTRO_GENEROS:
      return {
        ...state,
        videogameCopy: state.allVideogames.filter((videogame) =>
          videogame.genres.some((genre) => genre.name === action.payload)
        ),
      };
    case FILTRO_DESTINO:
      return {
        ...state,
        videogameCopy:
          action.payload === "Api"
            ? state.allVideogames.filter((i) => typeof i.id === "number")
            : state.allVideogames.filter((i) => typeof i.id === "string"),
      };

    default:
      return state;
  }
}

export default rootReducer;
