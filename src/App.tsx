import './App.css';
import MyButton from './Components/MyButton';

/* Mostrar datos: JSX Permite insertar variables y expresiones de JavaScript dentro de las llaves {}, cuando se usen en propiedades de un elemento, las "" se reemplazan por las llaves {} */

const App = () => {
  const user = {
    username: 'Ignacio',
    imageUrl: 'https://i.pravatar.cc/150?img=3',
    imageSize: 90,
  };

  // Desestructuring de objetos
  const { username, imageUrl, imageSize } = user;

  return (
    <>
      <div>
        <h1>Hola: {username}</h1>
        <img
          src={imageUrl}
          alt={`imagen-${username}`}
          /* Estilos en línea: Css estila con nomenclatura camelCase */
          style={{
            width: imageSize,
            height: imageSize,
            borderRadius: '50%',
          }}
        />
      </div>
      <MyButton />
      <br />
      <p>Lorem, ipsum dolor.</p>
    </>
  );
};
export default App;

// function App() {
//   return (
//     // <> Fragmentos: Agrupa múltiples elementos
//     <>
//       <h1>Hola App</h1>
//       <MyButton />
//     </>
//   );
// }
//export default App;

/* Creando un Componente */
// const MyButton = () => {
//   return <button>Click Me!</button>;
// };
