import Icon from '../../components/Icon'
import './Home.css'
function Home() {
  // const [products, setProducts] = useState([])

  // async function fetchItems() {
  //   try {
  //     const items = await client.request(readItems('products'))
  //     setProducts(items)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //   fetchItems()
  // }, [])

  return (
    <div className="Home">
      <section className="Home__profile">
        <p className="Home__title">Mi cielito</p>
        <div>
          <p className="Home__name">Luis Barboza</p>
          <img
            className="Home__img"
            src="https://img.freepik.com/foto-gratis/collage-fondo-programacion_23-2149901782.jpg?w=996&t=st=1709668841~exp=1709669441~hmac=115e1de9393fffe964ebf0bd2fc31b12602b03077f87a6fd6306c1103629e657"
            alt=""
          />
        </div>
      </section>
      <section className="Home__client">
        <div>
          <Icon name="person"></Icon>
          <p className="Home__client__text">El hijo de don app</p>
        </div>
        <button className="Home__client__add">
          <Icon name="add"></Icon>
        </button>
      </section>

      <section className="Home__scanner">
        <Icon name="photo_camera" color="hint"></Icon>
        <p>Toca para activar el escaner</p>
      </section>

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
