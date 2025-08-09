/* 
¿Qué es un estado?: Es un objeto que representa la información que puede cambiar en el componente, cuando el estado cambia, React renderiza nuevamente el componente para reflejar los cambios.

useState: Es una función que permite añadir estados a tus componentes funcionales en React. Retorna un valor y una función para actualizar el valor.

¿Hooks?: Son funciones especiales, como el ciclo de vida y el estado desde los componentes funcionales. Los hooks deben ser llamados a nivel superior, no dentro de bucles, condicionales o funciones anidadas.
*/

import CounterButton from './CounterButton';

function Hooks() {
  // Destructuring: Permite extraer valores de un objeto.
  const fruitsArray = ['🍎', '🍊', '🍋'];
  const [fruitOne, fruitTwo, fruitThree] = fruitsArray;
  console.log(fruitOne, fruitTwo, fruitThree);
  // Lo mismo con los objetos
  const user = {
    name: 'Iván',
    age: 30,
  };

  const { name, age } = user;
  console.log(name, age);

  return (
    <>
      <h1>UseStates: Estados</h1>
      <h2>Mis Contadores</h2>
      <CounterButton />
      <CounterButton />
    </>
  );
}

export default Hooks;
