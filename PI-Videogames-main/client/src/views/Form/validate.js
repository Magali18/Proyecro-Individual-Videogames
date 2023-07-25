function validate(input) {
  let errors = {};

  if (!input.name) {
    errors.name = "Campo requerido";
  }

  if (!(input.name.length < 30)) {
    errors.name = "El nombre no puede superar los 25 caracteres";
  }
  //-----------------------------------------
  if (!input.rating) {
    errors.rating = "Campo requerido";
  }
  if (!/^[0-9.]+$/.test(input.rating)) {
    errors.rating = "Tiene que ser un valor numerico";
  }
  //--------------------------------------------------------

  if(!input.background_image){
    errors.background_image = 'campo requerido'
  }

  //-----------------------------------------------

  if (!(input.released)) {
    errors.released = "Campo requerido";
  }

  if (!(input.description.length !== 0 && input.description.length < 200)) {
    errors.description = "Campo requerido";
  }
  //------------------------------
  if(!input.plataforms){
    errors.plataforms = 'Campo requerido'
  }
  /*if(!input.genres){
    errors.genres = 'Campo requerido'
  }*/

  return errors;
}
export default validate;
// nombre: "",
//     description: "",
//     platforms: "",
//     image: "",
//     released: "",
//     rating: '',