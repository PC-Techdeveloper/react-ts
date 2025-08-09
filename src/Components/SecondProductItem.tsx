/* Segunda forma de usar las props */

/* 
Interfaces VS Types: Ambos pueden usarse para definir la forma de los props en TypeScript
*/

import ProductItem from './ProductItem';

type Props = {
  title: string;
  id: number;
};

const SecondProductItem = () => {
  const products: Props[] = [
    { title: 'Col', id: 1 },
    { title: 'Ajo', id: 2 },
    { title: 'Manzana', id: 3 },
  ];

  return (
    <>
      <ul>
        {products.map(item => (
          <ProductItem key={item.id} title={item.title} id={item.id} />
        ))}
      </ul>
    </>
  );
};
export default SecondProductItem;
