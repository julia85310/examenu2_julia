/*
Componente ImageCarousel:
    Recibe por props un array de URLs de objetos que contienen imágenes  y títulos.
    Muestra una imagen y su título a la vez.
    Incluye dos botones:
        Uno para mostrar la imagen y título anterior.
        Otro para mostrar la imagen y título siguiente.
    Al llegar al principio o al final de la lista, el carrusel debe "circular" (volver a la última imagen si se pulsa "anterior" en la primera, o a la primera si se pulsa "siguiente" en la última).
Requisitos:
    Usa el hook useState para gestionar qué imagen está activa.
    Haz que el carrusel funcione correctamente con cualquier cantidad de imágenes en el array.
*/
import {useState} from 'react';

export default function ImageCarousel({imagenes}){
    const [indiceImagen, setIndiceImagen] = useState(0);

    /**
     * Maneja el onClick del boton para pasar a la siguiente imagen 
     * añadiendo 1 al indice o, si es la ultima imagen, reestableciendo el
     * indice a 0.
     */
    function handleNextImagen(){
      if(indiceImagen == (imagenes.length - 1)){
        setIndiceImagen(0);
      }else{
        setIndiceImagen(indiceImagen + 1);
      }
    }

    /**
     * Maneja el onClick del boton para volver a la anterior imagen 
     * quitando 1 al indice o, si es la primera imagen, 
     * poniendo el indice en la ultima imagen.
     */
    function handlePreviousImagen(){
      if(indiceImagen == 0){
        setIndiceImagen(imagenes.length - 1);
      }else{
        setIndiceImagen(indiceImagen - 1);
      }
    }

    /**
     * Devuelve la imagen correspondiente con su titulo 
     * y un boton para pasar a la anterior y otro
     * para pasar a la siguuiente.
     */
    return <div>
        <h2>{imagenes[indiceImagen].titulo}</h2>
        <img
            src={imagenes[indiceImagen].url}
            height={200}
        ></img><br></br>
        <button onClick={handlePreviousImagen}>Anterior</button>
        <button onClick={handleNextImagen}>Siguiente</button>
    </div>
}