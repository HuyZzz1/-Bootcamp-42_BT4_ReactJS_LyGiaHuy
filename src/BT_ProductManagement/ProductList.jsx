import React from "react";

function UserList({ products, onDeleteProduct, onSelectProduct }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <td width={200}>{product.name}</td>
              <td width={200}>{product.type}</td>
              <td>{product.des}</td>
              <td  width={200}>
                <img
                  src={product.image}
                  width={60}
                  height={60}
                  alt={product.name}
                />
              </td>
              <td width={200}>{product.price}$</td>
              <td  width={180}>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => onSelectProduct(product)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UserList;
