import { useEffect, useState } from 'react';

const AsyncAwait = () => {
  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  const [data, setData] = useState<null | Todo>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!res.ok) throw new Error('Error al consumir la api');
        const result = (await res.json()) as Todo;

        setData(result);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Error desconocido');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto">
      <h1>Fetch y useEffect</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default AsyncAwait;
