import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./css/Products.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProduct } from "../redux/action/productAction";

const Products = () => {
  const products = useSelector((state) => state); //Allows you to extract data from the Redux store state,
  //console.log(products);
  const dispatch = useDispatch(); //useDispatch is use to store data in redux store
  const fetchProduct = async () => {
    const response = await axios
      .get("http://localhost/foodorder/JSON/pbyc.php")
      .catch((err) => {
        console.log("Err" + err);
      });
    //console.log(response.data)
    dispatch(setProduct(response.data));
  };
  useEffect(() => {
    fetchProduct();
  });

  //console.log("product :"+ products)

  const renderList = products.allProduct.product.map((all) => {
    const { cat_id, category_image, category_name } = all;
    return (
      <div className="col-md-3 col-sm-6 card-item" key={cat_id}>
        <div className="card card_product">
          <NavLink to={`/ProductPage/${cat_id}`}>
            <img
              className="card-img-top"
              src={category_image}
              alt="Card imageData "
            />{" "}
          </NavLink>
          <div className="card-body">
            <h5 className="card-title">{category_name}</h5>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container-fluid">
      <div className="row">{renderList}</div>
      {/* <div className="effect">This is a 3d Card</div> */}
    </div>
  );
};
export default Products;
