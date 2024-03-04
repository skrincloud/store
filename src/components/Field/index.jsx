import classnames from 'classnames'
import { useState } from 'react'
import Icon from '../Icon'

import './Field.css'

function Field(props) {
  const { name, defaultValue, onChange, label, type, icon } = props
  const [value, setValue] = useState(defaultValue)
  const [focus, setFocus] = useState(false)
  const className = classnames('Field', { 'Field--focus': focus })
  const showLabel = value == '' || focus

  function onInputChange(event) {
    if (typeof onChange === 'function') {
      onChange(event.target.value)
    }
    setValue(event.target.value)
  }

  return (
    <div className={className} role="group">
      <Icon className="Field__logo" name={icon} />
      <div className="Field__container">
        {showLabel && <label className="Field__label">{label}</label>}
        <input
          type={type}
          name={name}
          title={label}
          defaultValue={defaultValue}
          className="Field__input"
          onChange={onInputChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
    </div>
  )
}

export default Field
