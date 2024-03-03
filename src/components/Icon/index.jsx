import classnames from 'classnames'

import './Icon.css'

const DEFAULT_COLOR = 'font'

function Icon(props) {
  const { name, color = DEFAULT_COLOR, className } = props
  const colorClass = `Icon--${color}`
  const classNames = classnames('Icon', className, colorClass)

  return (
    <div className={classNames}>
      <span className="material-symbols-rounded">{name}</span>
    </div>
  )
}

export default Icon
