import classnames from 'classnames'
import { useState } from 'react'
import Icon from '../Icon'

import './Dropdown.css'

function Dropdown(props) {
  const { name, defaultValue, onChange, label, icon, action = {} } = props
  const [value, setValue] = useState(defaultValue)
  const [focus, setFocus] = useState(false)
  const className = classnames('Dropdown', { 'Dropdown--focus': focus })
  const showLabel = value == '' || focus

  function onInputChange(event) {
    if (typeof onChange === 'function') {
      onChange(event.target.value)
    }
    setValue(event.target.value)
  }

  return (
    <div className={className} role="group">
      <Icon className="Dropdown__icon" name={icon} />
      <div className="Dropdown__container">
        {showLabel && <label className="Dropdown__label">{label}</label>}
        <input
          name={name}
          title={label}
          defaultValue={defaultValue}
          className="Dropdown__input"
          onChange={onInputChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
      {action.icon && (
        <Icon
          className="Dropdown__icon"
          name={action.icon}
          onClick={action.onClick}
        />
      )}
    </div>
  )
}

export default Dropdown
