import classnames from 'classnames'
import { createRef, useState } from 'react'
import Icon from '../Icon'

import './Dropdown.css'

function Dropdown(props) {
  const inputRef = createRef()
  const { name, onSelect, label, icon, data, action = {} } = props
  const [value, setValue] = useState('')
  const [focus, setFocus] = useState(false)
  const className = classnames('Dropdown', { 'Dropdown--focus': focus })
  const showLabel = value == '' || focus

  function onInputChange(event) {
    const value = event.target.value
    const names = data.map((item) => item.name)
    if (typeof onSelect === 'function' && names.includes(value)) {
      onSelect(data[names.indexOf(value)])
    }
    setValue(value)
  }

  function onBlur() {
    const names = data.map((item) => item.name)
    if (!names.includes(value)) onSelect(null)
    setFocus(false)
  }

  return (
    <div>
      <div className={className} role="group">
        <Icon className="Dropdown__icon" name={icon} />
        <div className="Dropdown__container">
          {showLabel && <label className="Dropdown__label">{label}</label>}
          <input
            ref={inputRef}
            name={name}
            title={label}
            className="Dropdown__input"
            list="clients"
            onChange={onInputChange}
            onFocus={() => setFocus(true)}
            onBlur={onBlur}
          />
          <datalist id="clients">
            {data.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </datalist>
        </div>
        {action.icon && (
          <Icon
            className="Dropdown__icon"
            name={action.icon}
            onClick={action.onClick}
          />
        )}
      </div>
      <p className="Details__text">Se registrará como nuevo cliente</p>
    </div>
  )
}

export default Dropdown
