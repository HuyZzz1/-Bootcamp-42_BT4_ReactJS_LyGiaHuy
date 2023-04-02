import React, { useState, useEffect } from "react";

function ProductForm({ product, onSubmit, onReset }) {
  const [values, setValues] = useState({
    name: "",
    type: "",
    des: "",
    image: "",
    price: "",
  });

  useEffect(() => {
    setValues(product);
  }, [product]);

  const handleChange = (evt) => {
    const { value, name } = evt.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
    handleResetForm();
  };

  const handleResetForm = () => {
    setValues({
      name: "",
      type: "",
      des: "",
      image: "",
      price: "",
    });
    onReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={values.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Type</label>
        <input
          type="text"
          name="type"
          className="form-control"
          value={values.type}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          name="des"
          value={values.des}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Image</label>
        <input
          type="text"
          className="form-control"
          name="image"
          value={values.image}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="text"
          className="form-control"
          name="price"
          value={values.price}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-success me-2">
        Submit
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleResetForm}
      >
        Reset
      </button>
    </form>
  );
}

export default ProductForm;
