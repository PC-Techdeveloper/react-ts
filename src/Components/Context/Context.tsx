/* Children: Es un prop especial que representa los nodos hijos que se colocan dentro de un componente cuando se renderizan. Permite pasar componentes hijos a un componente padre. Es útil para crear componentes reutilizables y flexibles */

const Context = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p className="card-text">Esto es una simple carta en un componente</p>
        <button className="btn btn-primary">Haz click aquí 🖱️</button>
      </div>
    </div>
  );
};

export default Context;
