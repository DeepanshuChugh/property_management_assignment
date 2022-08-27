import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";

const App = () => {
  const [propertyData, setPropertyData] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    description: "",
    size: "",
  });

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const params = {
      id: nanoid(),
      name: addFormData.name,
      description: addFormData.description,
      size: addFormData.size,
    };

    const newPropertyData = [...propertyData, params];
    setPropertyData(newPropertyData);
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleDeleteClick = (propId) => {
    const newPropertyData = [...propertyData];

    const index = propertyData.findIndex((item) => item.id === propId);

    newPropertyData.splice(index, 1);

    setPropertyData(newPropertyData);
  };

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {propertyData.map((prop) => (
            <Fragment>
              <ReadOnlyRow prop={prop} handleDeleteClick={handleDeleteClick} />
            </Fragment>
          ))}
        </tbody>
      </table>

      <h2>Add New Property</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="description"
          required="required"
          placeholder="Enter Description..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="size"
          required="required"
          placeholder="Enter Size..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
