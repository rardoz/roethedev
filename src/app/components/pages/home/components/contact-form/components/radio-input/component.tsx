import React, { useState } from 'react'
import './styles.scss'

const RadioInput: React.FC<RadioFieldOption> = ( { name, label } ) => {
  const [ checked,
    setChecked ] = useState( false )

  return (
    <div className='radio-input'>
      <input
        type='radio'
        name={name}
        id={name}
        checked={checked}
        value={label}
        onChange={() => {
          setChecked( !checked )
        }}
        onClick={() => {
          setChecked( !checked )
        }}
        onKeyDown={( e ) => {
          if ( e.key == ' ' ) {
            e.preventDefault()
            setChecked( !checked )
          }
        }}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default RadioInput
