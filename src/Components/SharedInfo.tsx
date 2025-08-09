import CounterButton from './CounterButton';
import Title from './Title';

//Compartir datos entre componentes
const SharedInfo = () => {
  const user = {
    name: 'Juan',
    age: 26,
    email: 'juan@gmail.com',
  };

  return (
    <>
      <Title message="Mis queridos contadores" user={user}></Title>
      <CounterButton />
      <CounterButton />
    </>
  );
};

export default SharedInfo;
