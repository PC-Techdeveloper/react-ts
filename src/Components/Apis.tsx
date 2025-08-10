//Llamadas a APIs con useEffect
//Para hacer llamadas a APIs podemos usar fetch dentro del useEffect

import { useEffect, useState } from 'react';

//Definimos la interfaz para el tipo de datos que espera recibir de la API
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Apis = () => {
  const [data, setData] = useState<null | Todo>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //useEffect se ejecuta al montar el componente (array vacío)
  useEffect(() => {
    //Lllamada a la API
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => {
        //Si la respuesta es incorrecta, lanza un error
        if (!res.ok) throw new Error('Error al consumir la API');
        //Convertir la respuesta a JSON
        return res.json();
      })
      .then((data: Todo) => {
        //Guardar los datos al recibir el pago
        setData(data);
      })
      .catch((e: unknown) => {
        //unknown: Es un tipo de dato que es desconocido
        //Si ocurre un error, comprobar la instancia
        if (e instanceof Error) {
          //Guardar el error
          setError(e.message);
        } else {
          //Si el error es desconocido, mostrar un mensaje genérico
          setError('Error al consumir la API');
        }
      })
      .finally(() => {
        //Cuando termina todo, deja el loader
        setLoading(false);
      });
  }, []); //El array vacío hace que solo se ejecute una vez

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto">
      <h1>Fetch</h1>
      {/* Mostrar todos los datos en formato JSON */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Apis;
