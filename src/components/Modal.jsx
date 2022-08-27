import axios from "axios";
import React, { useEffect, useState } from "react";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function AddModal({ getData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", description: "", size: "" });

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  // Handling Form Input
  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Data Testing
  useEffect(() => {
    // console.log(form);
  }, [form]);

  // posting data to db
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.name && form.description && form.size) {
      await axios.post("http://localhost:8080/propertiess", {
        name: form.name,
        description: form.description,
        size: form.size,
      });
      setForm({ name: "", description: "", size: "" });
      getData();
      toggleModal();
    } else {
      window.alert("please fill the details");
    }
  };

  return (
    <div>
      <button onClick={toggleModal}>Add New</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <button onClick={toggleModal}>Close modal</button>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                name="name"
                placeholder="Enter Name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Description</label>
              <input
                type="textArea"
                name="description"
                placeholder="Enter Description"
                value={form.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Size</label>
              <input
                type="number"
                name="size"
                placeholder="Enter Size"
                value={form.size}
                onChange={handleChange}
              />
            </div>
            <input type={"submit"} />
          </form>
        </div>
      </Modal>
    </div>
  );
}
