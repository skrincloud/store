import { useState } from 'react'
import { getProductByCode } from '../../api/product/getProductByCode'
import Icon from '../../components/Icon'
import { useGlobalStore } from '../../store'
import './ProductList.css'

function ProductList() {
  const [input, setInput] = useState('')
  const { products, deleteProduct, addProduct } = useGlobalStore()
  const quantity = products.length

  function onChange(event) {
    setInput(event.target.value)
  }
  async function onSearchClick() {
    const scannedProduct = await getProductByCode(input)
    if (scannedProduct) {
      addProduct(scannedProduct)
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
          <div key={product.id} onClick={() => deleteProduct(product)}>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductList
