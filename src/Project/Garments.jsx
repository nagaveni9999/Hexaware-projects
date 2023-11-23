import React,{useState,useEffect} from "react";

import { Link } from "react-router-dom";
function DataFromAPI()
{
    const[data,setData]=useState([]);
    
    useEffect(() => {
        fetch("https://localhost:44340/api/Garments")
        .then(response =>{return response.json()})
        .then(data => setData(data))
        console.log(data);
    },[]);

    const addToCart = (item) => {
      let cartItems = [];
  const existingCartData = localStorage.getItem('cart');
  if (existingCartData) {
    cartItems = JSON.parse(existingCartData);
  }
  cartItems.push(item);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  alert('Product added to cart');
    };
    return (
        
    <div>
    <div style={{ display: 'flex',gap: '30px' ,paddingTop: '90px' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {data.map((item, index) => (
      <div
        class="card"
        style={{
          width: '200px',
          marginRight: '25px',
          marginBottom: '25px',
          flex: '2 0 15%',
        }}
      >
        <img src={item.imageUrl} style={{ height: "255px" }} class="card-img-top" alt="" />
        
        <div class="card-body">
          
          {/* <h6 class="card-id">Id:{item.id}</h6> */}
          <h6 class="card-name">Name:{item.name}</h6>
          <h6 class="card-unitPrice"> Price: Rs.{item.unitPrice}</h6>
          <h6 class="card-discount"> Discount: Rs.{item.discount}</h6>
          
          
        
          <button
                  class="btn btn-primary"
                  onClick={() => addToCart(item)}
                >
                  Add to cart
                </button>
               
        </div>
        {(index + 1) % 4 === 0 && <div style={{ flexBasis: '80 %', height: '0' }} />}
      </div>
    ))}
  </div>
  </div>
</div>
    )
}
export default  DataFromAPI;
