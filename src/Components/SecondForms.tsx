/* 
Controlling input: Los forularios controlados son aquellos en que el valor de los campos del formulario es controlado por el estado del componente, es decir, que el valor del campo se almacena en el estado y se actualiza a través de eventos como onChange.
*/

/* onSubmit: <form> Comunica a react que función ejecutar cuando el usuario envía el formulario (al hacer click, al agregar o presionar Enter) */

import { useState, type FormEvent } from 'react';

//Controlado
//Validaciones con bootstrap: Instalar Bootstrap (npm i bootstrap@version)
const SecondForms = () => {
  const [username, setUsername] = useState('');
  const [color, setColor] = useState('');
  const [accept, setAccept] = useState(false);
  const [text, setText] = useState('');

  //Estado para saber si el usuario ha interactuado con cada campo
  const [touched, setTouched] = useState({
    username: false,
    color: false,
    accept: false,
  });

  //Función para validar los campos
  type Field = 'username' | 'color' | 'accept';
  const handleBlur = (field: Field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //Marca todos los campos como tocados al enviar el formulario
    setTouched({ username: true, color: true, accept: true });
  };

  //Procesar el formulario
  if (username.length >= 3 && color !== '' && accept) {
    alert('Formulario enviado correctamente ✅');
  }

  return (
    <>
      <div className="container mx-auto">
        <h2>Formulario de tercer nivel</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Your username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              onBlur={() => handleBlur('username')}
              className={`${
                touched.username &&
                (username.length >= 3 ? 'is-valid' : 'is-invalid')
              }`}
            />
            <div className="invalid-feedback">
              El nombre del usuario tiene que tener mínimo 3 carácteres
            </div>
          </div>
          <div className="mb-3">
            <select
              value={color}
              onChange={e => setColor(e.target.value)}
              onBlur={() => handleBlur('color')}
              className={`form-select ${
                touched.color && (color !== '' ? 'is-valid' : 'is-invalid')
              }`}
            >
              <option value="" disabled>
                Choose a color
              </option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>

            <div className="invalid-feedback">Seleccionar un color</div>
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              checked={accept}
              onChange={e => setAccept(e.target.checked)}
              onBlur={() => handleBlur('accept')}
              className={`form-check-input ${
                touched.accept && (accept ? 'is-valid' : 'is-invalid')
              }`}
            />
            <label className="form-check-label">
              Aceptar los términos y condiciones
            </label>

            <div className="invalid-feedback">Acepta los términos</div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <h1>Second Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br />
        <select value={color} onChange={e => setColor(e.target.value)}>
          <option value="" disabled>
            Modifica un color
          </option>
          <option value="rojo">rojo</option>
          <option value="verde">verde</option>
          <option value="naranja">naranja</option>
        </select>

        <br />

        <label>
          <input
            type="checkbox"
            checked={accept}
            onChange={e => setAccept(e.target.checked)}
          />
          Aceptar los términos.
        </label>

        <button type="submit">Enviar</button>
      </form>
      <p>{text}</p>
    </>
  );
};

export default SecondForms;
