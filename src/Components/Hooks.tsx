/* 
¿Qué es un estado?: Es un objeto que representa la información que puede cambiar en el componente, cuando el estado cambia, React renderiza nuevamente el componente para reflejar los cambios.

useState: Es una función que permite añadir estados a tus componentes funcionales en React. Retorna un valor y una función para actualizar el valor.
*/

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

  return <div>UseStates: Estados</div>;
}

export default Hooks;
