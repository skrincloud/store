import Icon from '../../components/Icon'
import './Dropdown.css'
function Dropdown() {
  return (
    <section className="Dropdown">
      <div>
        <Icon name="person"></Icon>
        <p className="Drpdown__name">El hijo de don app</p>
      </div>
      <button className="Dropdown__button">
        <Icon name="add"></Icon>
      </button>
    </section>
  )
}

export default Dropdown
