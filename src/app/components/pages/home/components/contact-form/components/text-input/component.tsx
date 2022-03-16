import React, { HTMLInputTypeAttribute } from 'react'
import './styles.scss'

const TextInput: React.FC<{
    name?: string
    title: string
    id: string
    type?: HTMLInputTypeAttribute
    required?: boolean
    placeholder?: string
    value?: string
}> = ( {
  name,
  title,
  id,
  type,
  required,
  placeholder,
  value
} ) => {
  return (
    <div className='text-input'>
      <label htmlFor={id}>{title}</label>
      <input value={value} placeholder={placeholder || title} required={required} type={type} name={name} id={id} />
    </div>
  )
}

export default TextInput