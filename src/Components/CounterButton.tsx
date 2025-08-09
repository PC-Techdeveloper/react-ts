import { useState } from 'react';

//Ejemplo de userState
const CounterButton = () => {
  const handleIncrementCounter = () => {
    const newValue = counter + 1;
    setCounter(newValue);
  };
  const [counter, setCounter] = useState(0);

  return <button onClick={handleIncrementCounter}>{counter}</button>;
};

export default CounterButton;
