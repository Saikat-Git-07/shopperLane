import React from 'react'
import './RelatedProducts.css'
import all_product from '../Assets/all_product'
import Item from '../Item/Item'

const RelatedProducts = ({ product }) => {
  // Filter related products based on category and exclude the current one
  const relatedProducts = all_product
    .filter(item => item.category === product.category && item.id !== product.id)
    .slice(0, 4); // Limit to first 4 items

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-items">
        {relatedProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
