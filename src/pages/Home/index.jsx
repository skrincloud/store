import Dropdown from '../../components/Dropdown'
import Header from '../../components/Header'
import Icon from '../../components/Icon'
import Scanner from '../../components/Scanner'
import './Home.css'
function Home() {
  return (
    <div className="Home">
      <Header />
      <Dropdown />
      <Scanner />
      <section className="Home__products">
        <div className="Home__quantity__products">
          <p>4 productos seleccionados</p>
          <button>
            <Icon name="check" color="background"></Icon>
          </button>
        </div>
        <div className="Home__product__list">
          <div>
            <p>Azucar</p>
            <p>S/ 5.00</p>
          </div>
          <div>
            <p>Vino</p>
            <p>S/ 17.00</p>
          </div>
          <div>
            <p>Arroz</p>
            <p>S/ 13.00</p>
          </div>
          <div>
            <p>Pollo</p>
            <p>S/ 19.00</p>
          </div>
          <div>
            <p>Pollo</p>
            <p>S/ 19.00</p>
          </div>
          <div>
            <p>Pollo</p>
            <p>S/ 19.00</p>
          </div>
          <div>
            <p>Pollo</p>
            <p>S/ 19.00</p>
          </div>
          <div>
            <p>Pollo</p>
            <p>S/ 19.00</p>
          </div>
          <div>
            <p>Pollo</p>
            <p>S/ 19.00</p>
          </div>
          <div>
            <p>Pollo</p>
            <p>S/ 19.00</p>
          </div>
          <div>
            <p>Pollo</p>
            <p>S/ 19.00</p>
          </div>
          <div>
            <p>Pollo</p>
            <p>S/ 19.00</p>
          </div>
          <div>
            <p>Pollo</p>
            <p>S/ 19.00</p>
          </div>
        </div>
      </section>
      <div className="Home__price__products">
        <p>Toca un producto para editarlo</p>
        <span>S/ 39.00</span>
      </div>
    </div>
  )
}

export default Home
