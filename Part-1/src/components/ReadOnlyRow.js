import React from "react";

const ReadOnlyRow = ({ prop, handleDeleteClick }) => {
  return (
    <tr>
      <td>{prop.name}</td>
      <td>{prop.description}</td>
      <td>{prop.size}</td>

      <td>
        <button type="button" onClick={() => handleDeleteClick(prop.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
