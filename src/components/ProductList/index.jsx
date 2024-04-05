import { useState } from 'react'
import { getProductByCode } from '../../api/product/getProductByCode'
import { storage } from '../../api/storage'
import Icon from '../../components/Icon'
import './ProductList.css'

function ProductList() {
  const [input, setInput] = useState('')
  const [products, setProducts] = useState(storage.get('products'))
  const quantity = products.length

  function onChange(event) {
    setInput(event.target.value)
  }
  async function onSearchClick() {
    const scannedProduct = await getProductByCode(input)
    if (scannedProduct) {
      const productFound = products.some(
        (product) => product.id === scannedProduct.id,
      )
      if (!productFound) {
        setProducts([...products, scannedProduct])
        storage.set('products', [...products, scannedProduct])
      }
    }
    setInput('')
  }

  return (
    <section className="ProductList">
      <div>
        <input type="text" onChange={onChange} value={input} />
        <button onClick={onSearchClick}>search</button>
      </div>
      <div className="ProductList__quantity">
        <p> {quantity} productos seleccionados</p>
        <button>
          <Icon name="check" color="background"></Icon>
        </button>
      </div>
      <div className="ProductList__container">
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductList
