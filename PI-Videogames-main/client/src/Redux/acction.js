import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_BY_NAME ='GET_BAY_NAME';
export const POST_VIDEOGAME ='POST_VIDEOGAME';
export const ID_VIDEOGAME='ID_VIDEOGAME';


export function getVideogames(){
 
return async function (dispatch){
    const response = await axios('https://api.rawg.io/api/games?key=c378f8c5094645449c88134e2bb692f9');
    return dispatch({
        type:'GET_VIDEOGAMES',
        payload: response.data.results
    })
}
};
export function getByName(name){
 
    return async function (dispatch){
        const response = await axios(`http://localhost:3001/videogameName?name=${name}`);
        return dispatch({
            type:'GET_BAY_NAME',
            payload: response.data
                })
    }
    }

    export function postVideogame(input){

        return async function  (dispatch){
            const { data } = await axios.post(`http://localhost:3001/videogamesCreado`,input);
            return dispatch({
                type:'POST_VIDEOGAME',
                payload: data
                    })
        }
        };

        export function idVideogame(id){

            return async function  (dispatch){
                const { data } = await axios(`http://localhost:3001/videogames${id}`);
                return dispatch({
                    type:'ID_VIDEOGAME',
                    payload: data
                        })
            }
            };

    