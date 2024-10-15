import React from 'react'
import "./style-shop/shopicons.css"
import { GoTrophy } from "react-icons/go";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsChatRightDots } from "react-icons/bs";

const ShopIcons = () => {
  return (
    <div className='shop-icons'>
        <div className="icons-icon-text">
            <div className="image-icon">
                <GoTrophy
                fontSize="80px"
                />
            </div>
            <div className="icon-text">
                <h3>High Quality</h3>
                <p>crafted from top materials</p>
            </div>
        </div>
        <div className="icons-icon-text">
            <div className="image-icon">
                <FaRegCheckCircle
                fontSize="80px"
                />
            </div>
            <div className="icon-text">
                <h3>Warranty Protection</h3>
                <p>Over 2 years</p>
            </div>
        </div>
        <div className="icons-icon-text">
            <div className="image-icon">
                <LiaShippingFastSolid
                fontSize="80px"
                />
            </div>
            <div className="icon-text">
                <h3>Free Shipping</h3>
                <p>Order over 150 $</p>
            </div>
        </div>
        <div className="icons-icon-text">
            <div className="image-icon">
                <BsChatRightDots
                fontSize="80px"
                />
            </div>
            <div className="icon-text">
                <h3>24 / 7 Support</h3>
                <p>Dedicated support</p>
            </div>
        </div>
    </div>
  )
}

export default ShopIcons