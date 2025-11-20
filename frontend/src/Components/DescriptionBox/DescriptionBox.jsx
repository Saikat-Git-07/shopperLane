import React from 'react'
import './Descriptionbox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (100)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
            Discover the perfect blend of style, comfort, and quality with our featured product. Designed to meet your everyday needs, this item brings a premium look with durable performance. Whether you're shopping for casual wear, work essentials, or something special, this product has you covered.
        Key Features:
         High-quality material for long-lasting wear,
         Modern design with precise stitching,
         Comfortable fit – available in multiple sizes,
         Perfect for casual outings, office, or travel,
         Carefully tested for quality and durability
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
