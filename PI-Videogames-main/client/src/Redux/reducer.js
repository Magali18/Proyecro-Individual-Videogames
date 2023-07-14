import { GET_VIDEOGAMES, GET_BY_NAME,POST_VIDEOGAME,ID_VIDEOGAME} from "../Redux/acction";

let initialState = {
  allVideogames: [],
  videgameCopy: [],
  postVideogame:{},
  gameDetail: {}
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
        allVideogames: action.payload,
        
        
      };
      case POST_VIDEOGAME:
        return {
          ...state,
          postVideogame: action.payload
        }
        case ID_VIDEOGAME:
          return {
            ...state,
            gameDetail : action.payload
          }

    default:
      return state;
  }

}

export default rootReducer;
