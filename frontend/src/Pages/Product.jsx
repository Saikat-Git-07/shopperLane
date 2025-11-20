import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import Productdisplay from '../Components/Productdisplay/Productdisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  console.log("Product ID from URL:", productId);

  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <Productdisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts product={product} />
    </div>
  )
}

export default Product
