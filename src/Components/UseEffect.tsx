/* 
useEffect: Permite realizar efectos secundarios en componentes funcionales, es una forma de manejar tareas que no están directamente relacionadas con el renderizado como (Llamadas a APIs, suscripciones a eventos, manipulación del DOM, etc.).


¿Qué es un efecto secundario?
Es cualquier acción que ocurre como resultado de un renderizado, pero no afecta directamente el renderizado en si. El renderizado en si no cambia, pero el estado del componente si.
*/

import { useEffect, useState } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('El componente se ha montado o actualizado');
    document.title = `Count: ${count}`;

    // Cleanup function (opcional)
    return () => {
      console.log('El componente se va a desmontar o actualizar');
    };
  }, [count]);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default UseEffect;
