import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Productdisplay = (props) => {
    const {product} = props;
    const {addToCart}= useContext(ShopContext)
  return (
    <div className='product-display'>
      <div className="product-display-left">
        <div className="product-display-imglist">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
            <img className="product-display-mainimgage" src={product.image} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(110)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old"> ${product.old_price}</div>
            <div className="productdisplay-right-price-new"> ${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            Experience comfort and style with our premium-quality product, crafted for everyday wear. Designed with precision, it offers a perfect fit, durable fabric, and a modern aesthetic — ideal for casual outings, office, or travel.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
        <p className='productdisplay-right-category'><span>Category :</span>{product.category},casual</p>
      </div>
    </div>
  )
}

export default Productdisplay
