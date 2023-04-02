import React, { useState, useEffect } from "react";
import UserForm from "./ProductForm";
import UserList from "./ProductList";
import axios from "axios";
import Search from "./Search";

function UserManagement() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [searchByName, setSearchByName] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://63f32799fe3b595e2edbb83b.mockapi.io/Products",
        {
          params: {
            name: searchByName || undefined,
          },
        }
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (product) => {
    const { id, ...payload } = product;

    try {
      if (id) {
        await axios.put(
          `https://63f32799fe3b595e2edbb83b.mockapi.io/Products/${id}`,
          payload
        );
      } else {
        await axios.post(
          "https://63f32799fe3b595e2edbb83b.mockapi.io/Products",
          payload
        );
      }
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(
        `https://63f32799fe3b595e2edbb83b.mockapi.io/Products/${productId}`
      );
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleSearch = (searchString) => {
    setSearchByName(searchString);
  };

  useEffect(() => {
    fetchProducts();
  }, [searchByName]);

  return (
    <div className="container-fluid">
      <h1 className="text-center text-primary">Product management</h1>

      <div className="card">
        <div className="card-header bg-dark text-white">Product Form</div>
        <div className="card-body">
          <UserForm
            product={selectedProduct}
            onSubmit={handleSubmit}
            onReset={() => handleSelectProduct({})}
          />
        </div>
      </div>

      <div className="mt-4">
        <Search onSearch={handleSearch} />
      </div>

      <div className="mt-4">
        <UserList
          products={products}
          onDeleteProduct={handleDeleteProduct}
          onSelectProduct={handleSelectProduct}
        />
      </div>
    </div>
  );
}

export default UserManagement;
