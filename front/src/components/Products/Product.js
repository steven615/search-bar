const Product = (props) => {
  let item = {...(props.item ?? {})};
  return (
    <div className="product-item">
      <div className="content">
        <img src={`assets/img/${item.image}`} />
      </div>
      <div className="info">
        <p>{item.name}</p>
        <p className="price">{item.price}</p>
      </div>
    </div>
  );
}

export default Product;