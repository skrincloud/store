import './Header.css'

function Header(props) {
  const { title, subtitle, avatar, onAvatarClick } = props
  return (
    <section className="Header">
      <p className="Header__title">{title}</p>
      <div>
        <p className="Header__name">{subtitle}</p>
        <img
          className="Header__img"
          src={avatar}
          alt=""
          onClick={onAvatarClick}
        />
      </div>
    </section>
  )
}

export default Header
