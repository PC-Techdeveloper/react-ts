import './button.css';

/* 
EVENTOS: Los eventos son una forma de interactuar con los componentes. Usando props, para manejar un clic en un botón, etc.
*/

//Pasando un argumento a la función
function MyButton() {
  // Función controladora
  const handleClick = (message: string) => {
    console.log(message);
  };

  return (
    /* Referencia a la función sin paréntesis */
    /* Cuando un evento recibe un argumento se usa una función anónima */
    <button
      className="btn"
      onClick={() => handleClick('Button clicked with argument')}
    >
      Click me Export ✅
    </button>
  );
}

export default MyButton;
