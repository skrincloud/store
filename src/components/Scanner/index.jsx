import Icon from '../../components/Icon'
import './Scanner.css'

function Scanner() {
  return (
    <section className="Scanner">
      <Icon name="photo_camera" color="hint"></Icon>
      <p className="Scanner__text">Toca para activar el escaner</p>
    </section>
  )
}

export default Scanner
