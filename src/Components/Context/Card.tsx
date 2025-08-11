import Context from './Context.tsx';

//Componente Card reciba contenido dinámico con el prop children
function Card() {
  return (
    <div className="container mx-auto my-5">
      <Context />
    </div>
  );
}

export default Card;
