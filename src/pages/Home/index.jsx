import Dropdown from '../../components/Dropdown'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Scanner from '../../components/Scanner'
import './Home.css'
function Home() {
  return (
    <div className="Home">
      <Header />
      <Dropdown />
      <Scanner />
      <ProductList />
      <div className="Home__price__products">
        <p>Toca un producto para editarlo</p>
        <span>S/ 39.00</span>
      </div>
    </div>
  )
}

export default Home
