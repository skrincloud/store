import { readItems } from '@directus/sdk';
import { useState } from 'react';
import { client } from './server/index.js';

import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  async function onClick() {
    const email = '...';
    const password = '...';
    await client.login(email, password);

    const items = await client.request(readItems('products'));

    setProducts(items);
  }

  return (
    <>
      <h1>Store</h1>
      <div className="card">
        <button onClick={onClick}>
          Accionar
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
