import React, { useState } from 'react';
import './App.css';

function App() {
  // Step 1: Create state to store user input for the ID card details
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    department: '',
    year: '',
    address: '',
    enrollmentNo: '',
    aadhaarNo: '',
    dob: '',
    bloodGroup: '',
    mobile1: '',
    mobile2: '',
    collegeName: 'Atmiya University',
    issueDate: '',
  });

  // Step 2: Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Log to console each time input is changed
    console.log('Form Data:', formData);
  };

  // Step 3: Handle form submission (optional)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the data to the console when form is submitted
    console.log('Submitted Form Data:', formData);
  };

  return (
    <div className="App">
      <h1>College ID Card</h1>
      
      {/* Step 4: Form for user input */}
      <form onSubmit={handleSubmit}>
        {/* Full Name Fields (First Name, Middle Name, Last Name) */}
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter first name"
            required
          />
        </div>

        <div className="form-group">
          <label>Middle Name:</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleInputChange}
            placeholder="Enter middle name"
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter last name"
            required
          />
        </div>

        {/* Department Field */}
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            placeholder="Enter department"
            required
          />
        </div>

        {/* Year Field */}
        <div className="form-group">
          <label>Year (e.g., 2024-2025):</label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            placeholder="Enter year"
            required
          />
        </div>

        {/* Address Field */}
        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter address"
            required
          />
        </div>

        {/* Enrollment Number Field */}
        <div className="form-group">
          <label>Enrollment Number:</label>
          <input
            type="text"
            name="enrollmentNo"
            value={formData.enrollmentNo}
            onChange={handleInputChange}
            placeholder="Enter enrollment number"
            required
          />
        </div>

        {/* Aadhaar Card Number Field */}
        <div className="form-group">
          <label>Aadhaar Card Number:</label>
          <input
            type="text"
            name="aadhaarNo"
            value={formData.aadhaarNo}
            onChange={handleInputChange}
            placeholder="Enter Aadhaar card number"
            required
          />
        </div>

        {/* Date of Birth Field */}
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Blood Group Field */}
        <div className="form-group">
          <label>Blood Group:</label>
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleInputChange}
            placeholder="Enter blood group"
            required
          />
        </div>

        {/* Mobile Number 1 Field */}
        <div className="form-group">
          <label>Mobile Number 1:</label>
          <input
            type="text"
            name="mobile1"
            value={formData.mobile1}
            onChange={handleInputChange}
            placeholder="Enter mobile number 1"
            required
          />
        </div>

        {/* Mobile Number 2 Field */}
        <div className="form-group">
          <label>Mobile Number 2:</label>
          <input
            type="text"
            name="mobile2"
            value={formData.mobile2}
            onChange={handleInputChange}
            placeholder="Enter mobile number 2"
          />
        </div>

        {/* Issue Date Field */}
        <div className="form-group">
          <label>Issue Date:</label>
          <input
            type="date"
            name="issueDate"
            value={formData.issueDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Generate ID Card</button>
      </form>

      {/* Step 5: Displaying the dynamically generated ID card */}
      {formData.firstName && formData.lastName && (
        <div className="id-card">
          <h2>{formData.collegeName}</h2>
          <p><strong>Full Name:</strong> {formData.firstName} {formData.middleName} {formData.lastName}</p>
          <p><strong>Department:</strong> {formData.department}</p>
          <p><strong>Year:</strong> {formData.year}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          <p><strong>Enrollment No.:</strong> {formData.enrollmentNo}</p>
          <p><strong>Aadhaar Card No.:</strong> {formData.aadhaarNo}</p>
          <p><strong>Date of Birth:</strong> {formData.dob}</p>
          <p><strong>Blood Group:</strong> {formData.bloodGroup}</p>
          <p><strong>Mobile No. 1:</strong> {formData.mobile1}</p>
          <p><strong>Mobile No. 2:</strong> {formData.mobile2}</p>
          <p><strong>Issue Date:</strong> {formData.issueDate}</p>
        </div>
      )}
    </div>
  );
}

export default App;
