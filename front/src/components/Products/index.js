// custom component
import Product from './Product';

// style sheet
import './index.scss'

const Products = (props) => {
  // products list
  let items = [...(props.data ?? [])];

  // products jsx
  let products = items.map(item => {
    return <Product item={item} key={item.id} />
  });

  return (
    <div className="products">
      <div className="title">Products</div>
      <div className="products-list">
        {products}
      </div>
    </div>
  );
}

export default Products;