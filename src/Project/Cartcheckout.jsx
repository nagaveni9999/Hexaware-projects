// import React,{useState} from "react";

// export default function Cartcheckout()
// {
//     const[data,setData]=useState({
//         "orderId": 0,
//         "orderDate": " ",
//         "quantity": 0,
//         "address": " ",
//         "phone": 0,
//         "totalPrice": 0,
//         "registrationId": 0,
//         "isbn": 0
//     });
//     const handleInputChange=event => {
//         setData({
//             ...data,
//             [event.target.orderDate]:event.target.value
//         });
//     };
//     const handleSubmit=event=>{
//         event.preventDefault();
//         console.log('data after submit',data)
//         fetch('https://localhost:44322/api/OrderDetails',{
//             method:'POST', 
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(data)
//         })
//         .then(Response =>{Response.json();
//         console.log(Response.json())})
//         .then(data =>{
//             console.log('Success',data);
//             setData({
//                 "orderDate": " ",
//                 "quantity": 0,
//                 "address": " ",
//                 "phone": 0,
//                 "totalPrice": 0,
//                 "registrationId": 0,
//                 "isbn": 0  
//             });
//         })
//         .catch(error =>{
//             console.log('Error:',error)    
//         })
//     }
//     return(
//           <form onSubmit={handleSubmit}>
//             <div className="form-group mt-5 pt-5">
//                 <label htmlFor="orderDate">OrderDate</label>
//                 <input type="date" name="orderDate"
//                 value={data.orderDate} className="form-control"
//                 onChange={handleInputChange}></input>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="quantity">Quantity</label>
//                 <input type="number" name="quantity"
//                 value={data.quantity} className="form-control"
//                 onChange={handleInputChange}></input>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="address">Address</label>
//                 <input type="text" name="address"
//                 value={data.address} className="form-control"
//                 onChange={handleInputChange}></input>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="phone">Phone_no</label>
//                 <input type="number" name="phone"
//                 value={data.phone} className="form-control"
//                 onChange={handleInputChange}></input>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="totalprice">Totalprice</label>
//                 <input type="number" name="totalprice"
//                 value={data.totalPrice} className="form-control"
//                 onChange={handleInputChange}></input>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="registrationId">RegistrationId</label>
//                 <input type="number" name="registrationId"
//                 value={data.registrationId} className="form-control"
//                 onChange={handleInputChange}></input>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="isbn">ISBN</label>
//                 <input type="number" name="isbn"
//                 value={data.isbn} className="form-control"
//                 onChange={handleInputChange}></input>
//             </div>
//             <div class="row">
//                 <div class="mt-3 text-center">
//                     <a href="/successful" class="btn text-decoration-none btn-success fw-bold mx-5">Place Order</a>
//                     <a href="/" class="btn text-decoration-none btn-danger fw-bold mx-5">Cancel</a>
//                 </div>
//             </div>
//           </form>
//     )
// }
// import React, { useState } from "react";

// export default function CartCheckout() {
//   const [data, setData] = useState({
   
//     phone: "",
//     address: "",
//     landmark: "",
//     pincode: "",
//     state: "",
//     Conformemail: "",
  
//   });

//   const handleInputChange = (event) => {
//     setData({
//       ...data,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('data after submit', data);

//     // Modify the API URL and request body according to your backend
//     fetch('https://your-api-url.com/cart/checkout', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((responseData) => {
//         console.log('Success', responseData);

//         // Clear the form after successful submission
//         setData({
          
//           phone: "",
//           address: "",
//           landmark: "",
//           pincode: "",
//           state: "",
//           Conformemail: "",
         
//         });
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}tyle={{fontFamily:'poppins'}}>
//       <div className="form-group mt-5 pt-5">
//         {/* <label htmlFor="firstName">First Name</label> */}
//         {/* <input
//           type="text"
//           name="firstName"
//           value={data.firstName}
//           className="form-control"
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="lastName">Last Name</label>
//         <input
//           type="text"
//           name="lastName"
//           value={data.lastName}
//           className="form-control"
//           onChange={handleInputChange}
//         />
//       </div> */}
//       <div className="form-group">
//         <label htmlFor="phone">Phone Number</label>
//         <input
//           type="text"
//           name="phone"
//           value={data.phone}
//           className="form-control"
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="address">Address</label>
//         <input
//           type="text"
//           name="address"
//           value={data.address}
//           className="form-control"
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="landmark">Landmark</label>
//         <input
//           type="text"
//           name="landmark"
//           value={data.landmark}
//           className="form-control"
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="pincode">Pincode</label>
//         <input
//           type="text"
//           name="pincode"
//           value={data.pincode}
//           className="form-control"
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="state">State</label>
//         <input
//           type="text"
//           name="state"
//           value={data.state}
//           className="form-control"
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email"> Confirm Email ID</label>
//         <input
//           type="email"
//           name="Conformemail"
//           value={data.email}
//           className="form-control"
//           onChange={handleInputChange}
//         />
//       </div>
//       </div>

 
    
  
  
     
//       <div className="row">
//       <div class="mt-3 text-center">
//                     <a href="/successful" class="btn text-decoration-none btn-success fw-bold mx-5">Place Order</a>
//                     <a href="/" class="btn text-decoration-none btn-danger fw-bold mx-5">Cancel</a>
//                 </div>
//       </div>
//     </form>
//   );
// }
import React, { useState } from "react";

export default function CartCheckout() {
  const [data, setData] = useState({
    phone: "",
    address: "",
    landmark: "",
    pincode: "",
    state: "",
    Conformemail: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (data.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    }
    if (data.address.trim() === "") {
      newErrors.address = "Address is required";
    }
    if (data.pincode.trim() === "") {
      newErrors.pincode = "Pincode is required";
    }
    if (data.state.trim() === "") {
      newErrors.state = "State is required";
    }
    if (data.Conformemail.trim() === "") {
      newErrors.Conformemail = "Confirm Email ID is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("data after submit", data);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ fontFamily: "poppins" }}>
      <div className="form-group mt-5 pt-5">
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={data.phone}
            className="form-control"
            onChange={handleInputChange}
          />
          {errors.phone && <span className="text-danger">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={data.address}
            className="form-control"
            onChange={handleInputChange}
          />
          {errors.address && <span className="text-danger">{errors.address}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="landmark">Landmark</label>
          <input
            type="text"
            name="landmark"
            value={data.landmark}
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={data.pincode}
            className="form-control"
            onChange={handleInputChange}
          />
          {errors.pincode && <span className="text-danger">{errors.pincode}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            value={data.state}
            className="form-control"
            onChange={handleInputChange}
          />
          {errors.state && <span className="text-danger">{errors.state}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email"> Confirm Email ID</label>
          <input
            type="email"
            name="Conformemail"
            value={data.Conformemail}
            className="form-control"
            onChange={handleInputChange}
          />
          {errors.Conformemail && <span className="text-danger">{errors.Conformemail}</span>}
        </div>
      </div>

      <div className="row">
        <div className="mt-3 text-center">
        <a href="/successful" className="btn text-decoration-none btn-success fw-bold mx-5">
            Placeorder
          </a>
          <a href="/" className="btn text-decoration-none btn-danger fw-bold mx-5">
            Cancel
          </a>
        </div>
      </div>
    </form>
  );
}
