const SecondApp = () => {
  /* Renderizado de listas */
  const products = [
    { title: 'Col', id: 1 },
    { title: 'Ajo', id: 2 },
    { title: 'Manzana', id: 3 },
  ];

  /* Primera forma  */
  return (
    <>
      <h1>List</h1>
      <ul>
        <li>{products[0].title}</li>
        <li>{products[1].title}</li>
        <li>{products[2].title}</li>
      </ul>
      {/* Segunda forma */}
      <div>
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SecondApp;
