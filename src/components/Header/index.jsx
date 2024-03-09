import './Header.css'

function Header() {
  return (
    <section className="Header">
      <p className="Header__title">Mi cielito</p>
      <div>
        <p className="Header__name">Luis Barboza</p>
        <img
          className="Header__img"
          src="https://img.freepik.com/foto-gratis/collage-fondo-programacion_23-2149901782.jpg?w=996&t=st=1709668841~exp=1709669441~hmac=115e1de9393fffe964ebf0bd2fc31b12602b03077f87a6fd6306c1103629e657"
          alt=""
        />
      </div>
    </section>
  )
}

export default Header
