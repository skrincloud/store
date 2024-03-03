import classnames from 'classnames'
import { useState } from 'react'

import './Field.css'

function Field(props) {
  const [focus, setFocus] = useState(false)
  const { name, value, onChange, label, type } = props
  const className = classnames('Field', { 'Field--focus': focus })

  return (
    <div className={className}>
      <div className="Field__logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z"></path>
        </svg>
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
