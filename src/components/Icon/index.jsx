import classnames from 'classnames'

import './Icon.css'

const DEFAULT_COLOR = 'font'

function Icon(props) {
  const { name, color = DEFAULT_COLOR, className, onClick } = props
  const colorClass = `Icon--${color}`
  const classNames = classnames('Icon', className, colorClass)

  return (
    <div
      className={classNames}
      role="img"
      title="Icono pequeño"
      onClick={onClick}
    >
      <span className="material-symbols-rounded" translate="no">
        {name}
      </span>
    </div>
  )
}

export default Icon
