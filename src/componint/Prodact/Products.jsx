import React from "react";
import { useParams } from "react-router-dom";
import "./Products.css";
import Prodact from "./Prodact";
function Products({ data }) {
  const { id } = useParams();
  console.log(id);
  const choosproduct = data.find(item => item.id === Number(id));
  const filtred = data.filter(item => item.category === choosproduct.category);
  return (
    <div>
      <div className="products_product">
        <img src={choosproduct.image} alt={choosproduct.title} />
        <h2>Title:{choosproduct.title}</h2>
      </div>

      {filtred.length > 0 ? (
          <div className="prodact1">
          {filtred.map(item => (
              <Prodact key={item.id} {...item} />
              ))}
        </div>
      ) : (
          <h1>Loading...</h1>
          )}
          </div>
    
  );
}

export default Products;
