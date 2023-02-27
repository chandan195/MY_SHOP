import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";
import "../components/css/ProductSlider.css"
const ProductSlider = () => {
  const products = useSelector((state) => state); //Allows you to extract data from the Redux store state,
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "90px",
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
  };
  const renderList = products.allProduct.product.map((all) => {
    const { cat_id, category_image} = all;
    return (
      <div className="col-md-3 col-sm-6 card-item" key={cat_id} style={{margin:"10px"}}>
        {/* <div className="card card-slider" > */}
        <div className="card " >
        <NavLink to={`/ProductPage/${cat_id}`}>
          <img
            className="card-img-top"
            src={category_image}
            alt="Card imageData "
          />{" "}
          </NavLink>
        </div>
      </div>
    );
  });
  return (
    <div className="container-fluid" style={{height:"320px",paddingBottom:"10px"}}>
      <div className="row" style={{padding:"20px"}}>
      <Slider {...settings} >
        {renderList}
        </Slider>
        </div>
    </div>
  );
  //   return (
  //     <div style={{height:"320px"}}>
  //       {" "}

  //       <Slider {...settings}>

  //         <div>
  //           <img src="./fev.jpg" alt="fev" />
  //         </div>
  //         <div>
  //           <img src="./fev.jpg" alt="fev" />
  //         </div>
  //         <div>
  //           <img src="./fev.jpg" alt="fev" />
  //         </div>
  //         <div>
  //           <img src="./fev.jpg" alt="fev" />
  //         </div>
  //         <div>
  //           <img src="./fev.jpg" alt="fev" />
  //         </div>
  //         <div>
  //           <img src="./fev.jpg" alt="fev" />
  //         </div>
  //       </Slider>
  //     </div>
  //   );
};

export default ProductSlider;
