import React, { useState } from 'react'
import './styles.scss'

const RadioInput: React.FC<RadioFieldOption> = ( { id, name, label } ) => {
  const [ 
    checked,
    setChecked 
  ] = useState( false )

  return (
    <div key={id} className="radio-input">
      <input
        type="radio"
        name={name}
        id={id}
        checked={checked}

        onChange={( e ) => {
          setChecked( !checked )
        }}
        onClick={() =>{
          setChecked( !checked )
        }}
        onKeyDown={( e ) => {

          if( e.key == " " ) {
            e.preventDefault()
            setChecked( !checked )
          }
        }}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioInput