/* 
Array de dependencias: Es una lista de variables que el efecto depende. Si alguna de estas variables cambia, el efecto se volverá a ejecutar. Si el array esta vacío, el efecto solo se ejecutará una vez, después del primer renderizado del componente.
*/

import { useEffect } from 'react';

//Efectos de limpieza para limpiar los efectos secundarios
export default function Modal() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Hola cada segundo!');
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('Temporizador terminado!');
    };
  }, []);

  return <div className="alert alert-danger">Modal</div>;
}
