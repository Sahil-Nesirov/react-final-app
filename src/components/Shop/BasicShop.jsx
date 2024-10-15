import React from 'react'
import ImageShop from './ImageShop'
import ProductsShop from './ProductsShop'
import './style-shop/products.css'
import ShopIcons from './ShopIcons'

const BasicShop = () => {
  return (
    <div>
        <ImageShop />
        <ProductsShop />
        <ShopIcons />
    </div>
  )
}

export default BasicShop