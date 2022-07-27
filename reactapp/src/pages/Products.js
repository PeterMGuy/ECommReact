import React from 'react'
import axios from 'axios';
import {useEffect, useState} from "react";
import './Products.css';


function Products() {
    const [listOfProducts, setListOfProducts] = useState([]);

    
  useEffect(() => {
    axios.get("http://localhost:3002/Products").then((response) => {
      setListOfProducts(response.data);
    });
  }, []);
  return (
    <div>
        {listOfProducts.map((value, key) => {
        return (
          <div className='products'>
            <div class = 'container'>
            </div>
            
            <div class = "product">
            <div className="content">

              {/* name of flower batch */}
              <h1 class = "lg-title">
                <div className='title'> {value.title} </div>
              </h1>
              
              {/* image of flower */}
              <img src= {value.img} className='img'/>
              
              {/* description of flower batch */}
              <p class = "text-light">
                <div className='description'> {value.description} </div>
              </p>

              {/* product price */}
              <div className='price'> {value.price} </div>
              
              {/* add to cart button */}
              <button type = "button" class = "btn-cart"> add to cart
                <span><i class = "fas fa-plus"></i></span>
              </button>

              {/* buy now button */}
              <button type = "button" class = "btn-buy"> buy now
                <span><i class = "fas fa-shopping-cart"></i></span>
              </button>

            </div>
            </div>
          </div>
        );
      })};
    </div>
  );
};

export default Products