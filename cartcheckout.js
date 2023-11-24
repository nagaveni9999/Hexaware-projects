import React, { useState } from 'react';

const validateForm = (formData) => {
 let errors = {};

 if (!formData.phone) {
    errors.phone = "Phone number is required.";
 } else if (!/^\d{10}$/.test(formData.phone)) {
    errors.phone = "Invalid phone number.";
 }

 if (!formData.address) {
    errors.address = "Address is required.";
 }

 if (!formData.pincode) {
    errors.pincode = "Pincode is required.";
 } else if (!/^\d{6}$/.test(formData.pincode)) {
    errors.pincode = "Invalid pincode.";
 }

 if (!formData.state) {
    errors.state = "State is required.";
 }

 if (!formData.email) {
    errors.email = "Email is required.";
 } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Invalid email address.";
 }

 if (!formData.confirmEmail) {
    errors.confirmEmail = "Confirm email is required.";
 } else if (formData.confirmEmail !== formData.email) {
    errors.confirmEmail = "Emails do not match.";
 }

 return errors;
};

const CheckoutForm = () => {
 const [formData, setFormData] = useState({});
 const [errors, setErrors] = useState({});

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(formData));
 };

 return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Phone:</label>
        <input type="text" name="phone" onChange={handleChange} />
        {errors.phone && <p>{errors.phone}</p>}
      </div>
      <div>
        <label>Address:</label>
        <input type="text" name="address" onChange={handleChange} />
        {errors.address && <p>{errors.address}</p>}
      </div>
      <div>
        <label>Pincode:</label>
        <input type="text" name="pincode" onChange={handleChange} />
        {errors.pincode && <p>{errors.pincode}</p>}
      </div>
      <div>
        <label>State:</label>
        <input type="text" name="state" onChange={handleChange} />
        {errors.state && <p>{errors.state}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Confirm Email:</label>
        <input type="email" name="confirmEmail" onChange={handleChange} />
        {errors.confirmEmail && <p>{errors.confirmEmail}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
 );
};

export default CheckoutForm;