import React from 'react'
import RadioInput from '../radio-input'
import './styles.scss'

const RadioField: React.FC<{
  options: radioFieldOptionsType
  title: string
}> = ( { options, title } ) => {
  return (
    <fieldset name='services[]' className='radio-fieldset'>
      <legend>{title}</legend>
      {options.map( ( option ) => (
        <RadioInput {...option} key={option.name} />
      ) )}
    </fieldset>
  )
}

export default RadioField
