import { readItems } from "@directus/sdk";
import { useEffect, useState } from "react";
import { client } from "../../server";

function Home() {
  const [products, setProducts] = useState([]);

  async function fetchItems() {
    try {
      const items = await client.request(readItems('products'));
      setProducts(items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Productos</h1>

      {products && products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}

      <p> Puede seleccionar los productos para agregarlos a la compra </p>
    </div>
  )
}

export default Home
