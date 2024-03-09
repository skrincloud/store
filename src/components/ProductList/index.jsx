import Icon from '../../components/Icon'
import './ProductList.css'

const products = [
  {
    id: 1,
    name: 'Azucar',
    price: 5,
  },
  {
    id: 2,
    name: 'Azucar',
    price: 5,
  },
  {
    id: 3,
    name: 'Azucar',
    price: 5,
  },
  {
    id: 4,
    name: 'Azucar',
    price: 5,
  },
]

function ProductList() {
  return (
    <section className="ProductList">
      <div className="ProductList__quantity">
        <p>4 productos seleccionados</p>
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
