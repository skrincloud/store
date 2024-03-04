import classnames from 'classnames'
import { useState } from 'react'
import Icon from '../Icon'

import './Field.css'

function Field(props) {
  const [focus, setFocus] = useState(false)
  const { name, value, onChange, label, type, icon } = props
  const className = classnames('Field', { 'Field--focus': focus })
  const showLabel = value === '' || focus

  return (
    <div className={className} role="group">
      <Icon className="Field__logo" name={icon} />
      <div className="Field__container">
        {showLabel && <label className="Field__label">{label}</label>}
        <input
          type={type}
          name={name}
          value={value}
          title={label}
          className="Field__input"
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
    </div>
  )
}

export default Field
