/* PROPS: Son una forma de pasar datos y funciones de componentes en React. 
pueden ser cualquier tipo de dato (string, numbers, objects, functions, etc.) */

/* Primera forma de usar props */

interface Props {
  title: string;
  id: number;
}

const ProductItem = (props: Props) => {
  console.log(props);
  const { title, id } = props;

  return (
    <>
      <li>
        {id} - {title}
      </li>
    </>
  );
};
export default ProductItem;
