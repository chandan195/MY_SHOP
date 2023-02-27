import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import parse from "html-react-parser";
import "../css/ProductPage.css";
import { useDispatch, useSelector } from "react-redux";
//import axios from "axios";
//import { setProduct } from "../../redux/action/productAction";
import { selectedProduct } from "../../redux/action/productAction";
const ProductPage = () => {
  const products = useSelector((state) => state);
  const Dispatch = useDispatch();
   console.log(products.allProduct);
  const params = useParams();
  // const [product, setProduct] = useState([]);
  const product_id = params.id;
  // console.log(a);
 
  const productData = []; //empty array for storing the all item of the category
  useEffect(() => {
    Dispatch(selectedProduct(productData));
    //set subData in redux store and passing  selectedProduct (productAction type) as a action
  }, [2000]);

  return (
    <div className="container-fluid" style={{paddingTop:"4%"}}>
      <div className="row">
        {products.allProduct.product.map((all) => {
          // console.log(all)
          if (all.cat_id === product_id) {
            // console.log("hi",all);

            // productData.push(all); // set data in productData array
            // console.log ( 'productdata',productData);

            return (
              <>
                {all.products.map((subData) => {
                  // console.log("sub",subData);
                  productData.push(subData); // set data in productData array

                  if (subData.status === "Available") {
                    return (
                      <div
                        className="col-md-4 col-sm-6 card-item"
                        key={subData.productId}
                      >
                        <div className="card card--product">
                          <NavLink
                            to={`/SingleProduct/${subData.productId}`}
                           
                          >
                            <img
                              className="card-img-top"
                              src={subData.primaryimage}
                              alt="img"
                            />
                          </NavLink>
                          <div className="cord-body">
                            <h6 className="card-title">
                              {subData.productName}
                            </h6>
                            <p>{parse(subData.description)}</p>
                          </div>
                          {subData.variants.map((price) => {
                            var p = parseInt(price.varprice);
                            // console.log(p)
                            var ep = 200;
                            var discount = p + ep;
                            // ......................................................................................
                            var originalPrice = discount - p;
                            var percentage = parseInt(
                              (originalPrice * 100) / discount
                            );
                            // console.log( "price"+originalPrice)
                            // console.log(percentage)
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
                        </div>
                      </div>
                    );
                  }
                })}
              </>
            );
          } else {
            // console.log("error in conduction");
          }
        })}
      </div>
    </div>
  );
};

export default ProductPage;
