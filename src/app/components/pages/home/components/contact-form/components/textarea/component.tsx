import React from 'react'
import './styles.scss'

const Textarea: React.FC = () => {
  return (
    <div
      className='textarea'
    >
      <label
        htmlFor='message-textarea'
      >
Write a message
      </label>
      <textarea
        name='message'
        id='message-textarea'
        className='textarea-input'
        placeholder='Please tell me your needs. Be sure to include helpful details.'
      />
    </div>
  )
}

export default Textarea
