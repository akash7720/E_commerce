import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FakeStoreAllProducts = () => {

  const [allProducts, setAllProducts] = useState([]); 
 

  const [search, setSearch] = useState(""); 
  const [filterProducts, setFilterProducts] = useState([]); 

  const router = useNavigate();

  async function getProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      // console.log(response, "response from fakestore api")
      if (response?.data.length) {
        setAllProducts(response.data);
        setFilterProducts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function redirect(id) {
    router(`/fake-single-product/${id}`);
  }

  function handleChange(event) {
    console.log(event.target.value);

    setSearch(event.target.value);

    let userword = event.target.value.toLowerCase();

    const filteredProduts = allProducts.filter((product) => { 
      
      return product.title.toLowerCase().includes(userword);
    });

    setFilterProducts(filteredProduts); 

    console.log(filteredProduts, "filteredProduts");
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Fake Store All Products</h1>
      <div>
        <h2>Search Product:</h2>
        <input placeholder="Mens.." value={search} onChange={handleChange} />
      </div>
      
      {filterProducts?.length ? (
        <div
          style={{
            marginTop: "100px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            
          }}
        >
          {filterProducts.map((productObj) => (
            <div
              onClick={() => redirect(productObj.id)}
              style={{
                width: "20%",
                border: "2px solid black",
                height: "250px",
              
              }}
            >
              <img
                style={{ height: "70%", width: "100%" }}
                src={productObj.image}
              />
              <p>{productObj.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default FakeStoreAllProducts;



