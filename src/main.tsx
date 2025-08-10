import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import App from './App.tsx';
//import SecondApp from './Components/SecondApp.tsx';
import ProductItem from './Components/ProductItem.tsx';
import SecondProductItem from './Components/SecondProductItem.tsx';
import MyButton from './Components/MyButton.tsx';
import Hooks from './Components/Hooks.tsx';
import CounterButton from './Components/CounterButton.tsx';
import SharedInfo from './Components/SharedInfo.tsx';
import Title from './Components/Title.tsx';
import Forms from './Components/Forms.tsx';
import SecondForms from './Components/SecondForms.tsx';
import UseEffect from './Components/UseEffect.tsx';
import Modal from './Components/Modal.tsx';
import SecondModal from './Components/SecondModal.tsx';
import Apis from './Components/Apis.tsx';
import AsyncAwait from './Components/AsyncAwait.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductItem title="ITEM 1" id={1} />
    <ProductItem title="ITEM 2" id={2} />
    <ProductItem title="ITEM 3" id={3} />
    <SecondProductItem />
    <MyButton />
    <Hooks />
    <CounterButton />
    <SharedInfo />
    <Title
      message="My First Title"
      user={{ name: 'Felipe', age: 50, email: 'felipesanchez@gmail.com' }}
    />
    <Forms />
    <SecondForms />
    <UseEffect />
    <Modal />
    <SecondModal />
    <Apis />
    {/* Otra manera de invocar un componente */}
    <AsyncAwait></AsyncAwait>
  </StrictMode>
);
