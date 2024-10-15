// FuniroFurniture.jsx
import React from "react";
import "./style-home/furniroFurniture.css";
import img1 from "../../assets/images/home/share/FuniroFurniture/1da1dc5c1c4cd5091a6369784c3b3366.png";
import img2 from "../../assets/images/home/share/FuniroFurniture/2f4aae4edaceced4645de9ad49216504.png";
import img3 from "../../assets/images/home/share/FuniroFurniture/77d8a98d7cff3b010ba29ad5b60844d7.png";
import img4 from "../../assets/images/home/share/FuniroFurniture/94f946a8fffd305fbd1dafe75395cc6f.png";
import img5 from "../../assets/images/home/share/FuniroFurniture/360b02673b349021a24f23d4184b4e15.png";
import img6 from "../../assets/images/home/share/FuniroFurniture/413c23f2d7371be94a52ea9020db45cc.png";
import img7 from "../../assets/images/home/share/FuniroFurniture/37569bf147f74d2ca44831a4a6ef3ee5.png";
import img8 from "../../assets/images/home/share/FuniroFurniture/40560e3b59b4fd3c2538107c6fa70736.png";
import img9 from "../../assets/images/home/share/FuniroFurniture/f9de6c6ff643cd2e7661215ad26aed46.png";

const FuniroFurniture = () => {
  return (
    <div className="furniro-furniture-container">
      <div className="furniro-furniture-title" id="">
        <p>Share your setup with</p>
        <h2>#Furniro Furniture</h2>
      </div>
      <div className="images-container">
        <div className="img-columns-left">
          <div className="img-columns-left-over">
            <div className="img-columns-left-box-1">
              <img src={img1} alt="" />
            </div>
            <div className="img-columns-left-box-2">
              <img src={img6} alt="" />
            </div>
          </div>
          <div className="img-columns-left-under">
            <div className="img-columns-left-box-3">
              <img src={img2} alt="" />
            </div>
            <div className="img-columns-left-box-4">
              <img src={img9} alt="" />
            </div>
          </div>
        </div>

        <div className="img-columns-beetwen">
          <div className="img-columns-beetwen-box">
            <img src={img8} alt="" />
          </div>
        </div>

        <div className="img-columns-right">
          <div className="img-columns-right-over">
            <div className="img-columns-right-box-1">
              <img src={img5} alt="" />
            </div>
            <div className="img-columns-right-box-2">
              <img src={img7} alt="" />
            </div>
          </div>
          <div className="img-columns-right-under last-box">
            <div className="img-columns-right-box-3">
              <img src={img3} alt="" />
            </div>
            <div className="img-columns-right-box-4">
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuniroFurniture;
