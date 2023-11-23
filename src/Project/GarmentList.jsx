import React from "react";

function GarmentList({ garments, onRemove }) {
  return (
    <div>
      <h3>Products Page</h3>
      <ul>
        {garments.map((garment,name) => (
          <li key={name}>
            {garment.name} - {garment.unitPrice} - {garment.quantity} -{" "}
            {garment.status}
            <button onClick={() => onRemove(garment.name)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GarmentList;
