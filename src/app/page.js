'use client';

import Ejercicio1 from './AnimalList';
import Ejercicio2 from './ImageCarousel';
import Ejercicio3 from './Library';

export default function Home() {

  const imagenes = [
    {
      url: 'https://i.imgur.com/qY9uDfZ.jpeg',
      titulo: 'Lindo capibara'
    },
    {
      url: 'https://i.imgur.com/s8x9tyZ.jpeg',
      titulo: 'Gato pensativo'
    },
    {
      url: 'https://i.imgur.com/1Ioqd6l.jpeg',
      titulo: 'Gato negro y blanco'
    },
    {
      url: 'https://i.imgur.com/UvlTCNs.jpeg',
      titulo: 'Gato en la bañera'
    }
  ];

  return (
    <div>
      <h1>Ejercicio 1</h1>
      <Separacion height={20}/>
      <Ejercicio1/>
      <Separacion height={100}/> 
      <h1>Ejercicio 2</h1>
      <Separacion height={20}/>
      <Ejercicio2 imagenes={imagenes}/>
      <Separacion height={100}/>
      <h1>Ejercicio 3</h1>
      <Separacion height={20}/>
      <Ejercicio3/>
    </div>
  );
}

function Separacion({height}){
  return <img
    src = 'https://colorate.azurewebsites.net/SwatchColor/FFFFFF'
    height = {height}
  >
  </img>
}