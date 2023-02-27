import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { Button } from "react-bootstrap";
//import {productData } from '../Pages/ProductPage'

const SingleProduct = () => {
  // const[image ,setImage]=useState(img);
  const singleProduct = Object.values(useSelector((state) => state.product));
  console.log(singleProduct);
  const params = useParams();
  //console.log(params)
  const item_id = params.productId;
  console.log(item_id);

  return (
    <div className="container-fluid" style={{ paddingTop: "4%" }}>
      <div className="row">
        {singleProduct.map((all) => {
          console.log(all);
          if (all.productId === item_id) {
            return (
              <>
                <div className="col-md-5" key={all.productId}>
                  <div className="row">
                    <div className="col-md-2">
                      {all.images.map((img) => {
                        // console.log("img.....",img)
                        return (
                          <div className="img">
                            <img
                              src={img}
                              alt=" image"
                              style={{ width: "100%", height: "50%" }}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="col-md-10">
                      <img
                        className="card-img-top"
                        src={all.primaryimage}
                        alt="img"
                      />
                    </div>
                  </div>

                  <div className="row" style={{ paddingTop: "3%" }}>
                    <div className="col-md-6 d-grid">
                      <NavLink to={`/Cart/${all.productId}`}>
                        <Button className="btn btn-warning" style={{width:"100%"}}>Add To Card</Button>
                      </NavLink>
                    </div>
                    <div className="col-md-6 d-grid">
                      <Button className="btn btn-info">BUY NOW</Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-7" style={{ paddingLeft: "4%" }}>
                  <div className="card-product">
                    <div className="cord">
                      <h6 className="title">{all.productName}</h6>
                    </div>
                    {all.variants.map((price) => {
                      var p = parseInt(price.varprice);
                      // console.log(p)
                      var ep = 200;
                      var discount = p + ep;
                      // ......................................................................................
                      var originalPrice = discount - p;
                      var percentage = parseInt(
                        (originalPrice * 100) / discount
                      );
                      return (
                        <div className="details-body">
                          <h5 className="details"> ₹{price.varprice}</h5>

                          <del className="details">₹{discount}</del>
                          <p className="details  percentage">
                            {percentage}% off{" "}
                          </p>
                        </div>
                      );
                    })}
                    <div>
                      <p>{parse(all.description)}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          } else {
            // console.log("pppp");
          }
        })}
      </div>
    </div>
  );
};

export default SingleProduct;
