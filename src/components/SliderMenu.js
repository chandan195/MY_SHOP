import React from "react";
import './css/SliderMenu.css'
import "react-awesome-slider/dist/styles.css";
// import AwesomeSlider from "react-awesome-slider";
// import withAutoplay from "react-awesome-slider/dist/autoplay";
import ProductSlider from "./ProductSlider";

// const AutoplaySlider = withAutoplay(AwesomeSlider);
const SliderMenu = () => {
  return (
    <div className="auto-slider">
      {/* <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={4500}
        //style={{height:"350px"}}
        className="slider"
      >
        <div data-src="./my-Shop.png" />
        <div>
          <img src="./fev.jpg" alt="fev" />
        </div>
        <div data-src="./my-Shop.png" />
      </AutoplaySlider> */}
      <ProductSlider/>
    </div>
  );
};

export default SliderMenu;
