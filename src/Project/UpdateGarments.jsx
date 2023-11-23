// import React, { useState } from "react";

// function UpdateGarments() {
//   const [garmentData, setGarmentData] = useState({
    
//     name: "",
//     unitPrice: "",
//     discount: "",
//     quantity: "",
//     imageUrl: "",
//     status: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setGarmentData({ ...garmentData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Perform a POST request to save the updated garment data
//       const response = await fetch("https://localhost:44340/api/Garments", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(garmentData),
//       });

//       if (response.ok) {
//         // Garment data successfully updated
//         alert("Garment data updated successfully!");
//         // Clear the input fields
//         setGarmentData({
          
//           name: "",
//           unitPrice: "",
//           discount: "",
//           quantity: "",
//           imageUrl: "",
//           status: "",
//         });
//       } else {
//         alert("Failed to update garment data.");
//       }
//     } catch (error) {
//       console.error("Error updating garment data:", error);
//     }
//   };

//   return (
//     <div>
//         <div>
//        <div className="container mt-5"style={{fontFamily:'poppins'}}>
//       <div className="row mx-auto mt-5">
//           <div className="mx-auto col-md-6 mt-5 pt-4">
//              <div className="card mb-5 p-2 shadow rounded">
//                <div className="card-body mt-2">
//                 <div className="row mb-3">
                
//       <h3>Update Garment Data</h3>
//       <form onSubmit={handleSubmit}>
       
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={garmentData.name}
//             onChange={handleInputChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>UnitPrice</label>
//           <input
//             type="text"
//             name="unitPrice"
//             value={garmentData.unitPrice}
//             onChange={handleInputChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Discount</label>
//           <input
//             type="text"
//             name="discount"
//             value={garmentData.discount}
//             onChange={handleInputChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Quantity</label>
//           <input
//             type="text"
//             name="quantity"
//             value={garmentData.quantity}
//             onChange={handleInputChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Image url</label>
//           <input
//             type="text"
//             name="imageUrl"
//             value={garmentData.imageUrl}
//             onChange={handleInputChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>status</label>
//           <input
//             type="text"
//             name="status"
//             value={garmentData.status}
//             onChange={handleInputChange}
//             className="form-control"
//           />
//         </div>
//         {/* Add similar input fields for other attributes */}
//         <button type="submit" className="btn btn-primary">
//           Update Garment
//         </button>
//       </form>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
    

//   );
// }

// export default UpdateGarments;
import React, { useState, useEffect } from "react";
import GarmentList from "./GarmentList"; // Import the GarmentList component

function UpdateGarments() {
  const [garmentData, setGarmentData] = useState({
    name: "",
    unitPrice: "",
    discount: "",
    quantity: "",
    imageUrl: "",
    status: "",
  });

  const [garments, setGarments] = useState([]); // State to store the list of garments

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGarmentData({ ...garmentData, [name]: value });
  };

  const handleRemove = async (garmentId) => {
    try {
      // Perform a DELETE request to remove the garment from the database
      const response = await fetch(
        `https://localhost:44340/api/Garments`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Garment successfully removed from the database
        alert("Garment removed successfully!");
        // Fetch the updated list of garments after removal
        fetchGarments();
      } else {
        alert("Failed to remove garment.");
      }
    } catch (error) {
      console.error("Error removing garment:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform a POST request to save the updated garment data
      const response = await fetch("https://localhost:44340/api/Garments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(garmentData),
      });

      if (response.ok) {
        // Garment data successfully updated
        alert("Garment data updated successfully!");
        // Clear the input fields
        setGarmentData({
          name: "",
          unitPrice: "",
          discount: "",
          quantity: "",
          imageUrl: "",
          status: "",
        });
        // Fetch the updated list of garments after addition
        fetchGarments();
      } else {
        alert("Failed to update garment data.");
      }
    } catch (error) {
      console.error("Error updating garment data:", error);
    }
  };

  // Fetch the list of garments from the database
  const fetchGarments = async () => {
    try {
      const response = await fetch("https://localhost:44340/api/Garments");
      if (response.ok) {
        const data = await response.json();
        setGarments(data);
      }
    } catch (error) {
      console.error("Error fetching garments:", error);
    }
  };


  useEffect(() => {
    fetchGarments(); // Fetch garments when the component mounts
  }, []);

  return (
    <div>
      <div className="container mt-5" style={{ fontFamily: "poppins"}}>
        <div className="row mx-auto mt-5">
          <div className="mx-auto col-md-6 mt-5 pt-4">
            <div className="card mb-5 p-2 shadow rounded">
              <div className="card-body mt-2">
                <div className="row mb-3">
                
                  <h3 color="green">Update Garment Data</h3>
      <form onSubmit={handleSubmit}>
       
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={garmentData.name}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>UnitPrice</label>
          <input
            type="text"
            name="unitPrice"
            value={garmentData.unitPrice}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Discount</label>
          <input
            type="text"
            name="discount"
            value={garmentData.discount}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input
            type="text"
            name="quantity"
            value={garmentData.quantity}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Image url</label>
          <input
            type="text"
            name="imageUrl"
            value={garmentData.imageUrl}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>status</label>
          <input
            type="text"
            name="status"
            value={garmentData.status}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Garment
         </button>
                  </form>
                </div>
                <GarmentList garments={garments} onRemove={handleRemove} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateGarments;
