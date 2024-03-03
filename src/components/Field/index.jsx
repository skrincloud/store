import classnames from 'classnames'
import { useState } from 'react'

import './Field.css'

function Field(props) {
  const [focus, setFocus] = useState(false)
  const { name, value, onChange, label, type, icon } = props
  const className = classnames('Field', { 'Field--focus': focus })

  return (
    <div className={className}>
      <div className="Field__logo">
        <span className="material-symbols-rounded">{icon}</span>
      </div>
      <div className="Field__container">
        {(value == '' || focus) && (
          <label className="Field__label">{label}</label>
        )}
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
