/* 
- Formularios NO CONTROLADOS: El valor del formulario se maneja directamente a través del DOM.
- Formularios CONTROLADOS: El valor del formulario se maneja a través del estado de React. El valor del input se almacena en el estado del componente y se actualiza a través de eventos como onChange, onSubmit, etc.
*/

//Formulario NO controlado
//useRef: Accede a un elemento DOM directamente sin usar el estado de React.
//Donde no se necesita renderizar el componente cada vez que cambia de valor del input.
import { useRef, type FormEvent } from 'react';

const Forms = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Create the FormData object from the form
    const formData = new FormData(formRef.current);

    // Get values using get()
    const username = formData.get('username');
    const color = formData.get('color');
    const accept = !!formData.get('accept'); // Convert to boolean

    console.log({
      username,
      color,
      accept,
    });
  };

  return (
    <div>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input type="text" name="username" placeholder="Your username" />

        <br />

        <select name="color" defaultValue="">
          <option value="" disabled>
            Choose a color
          </option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>

        <br />

        <label>
          <input type="checkbox" name="accept" />I accept the terms
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Forms;
