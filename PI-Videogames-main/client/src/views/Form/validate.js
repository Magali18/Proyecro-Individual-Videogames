function validate(input) {
  let errors = {};

  if (!input.nombre) {
    errors.nombre = "Campo requerido";
  }

  if (!(input.nombre.length < 30)) {
    errors.nombre = "El nombre no puede superar los 25 caracteres";
  }
  //-----------------------------------------
  if (!input.rating) {
    errors.rating = "Campo requerido";
  }
  if (!/^[0-9.]+$/.test(input.rating)) {
    errors.rating = "Tiene que ser un valor numerico";
  }
  //--------------------------------------------------------

  if(!input.image){
    errors.image= 'campo requerido'
  }

  //-----------------------------------------------

  if (!/^(?=.*\/)[0-9\/]+$/.test(input.released)) {
    errors.released = "Campo requerido";
  }

  if (!(input.description.length !== 0 && input.description.length < 200)) {
    errors.description = "Campo requerido";
  }
  //------------------------------
  if(!input.platforms){
    errors.platforms = 'Campo requerido'
  }
  if(!input.genres){
    errors.genres = 'Campo requerido'
  }

  return errors;
}
export default validate;
// nombre: "",
//     description: "",
//     platforms: "",
//     image: "",
//     released: "",
//     rating: '',