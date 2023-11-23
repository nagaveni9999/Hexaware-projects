import { buildQueries } from "@testing-library/react";
import React from "react";


export default function About()
{
    return (
        <div class="mt-5 pt-5">
        <div
    style={{
      height: '85vh',
      width: '100%',
      overflow: 'hidden',
      background: 'url("images/one.jpg")',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'centerLeft',
    }}
  >
    <h1
      style={{
        fontSize: '1 rem',
        color: 'Black',
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        padding: '15px',
        fontWeight: 'bold',
      }}
      
    >
      This is the Garment Shopping cart where you can find variety of Garments in a wide range of price
       <div>
          <h2>Thankyou for shopping with RAAVISH!</h2>
       </div>
       
    </h1>
  </div>
        <div>
           
        </div>
    </div>
    )
}