import React from 'react'
import './styles.scss'

const Textarea: React.FC = () => {
  return (
    <div className='textarea'>
      <label aria-label='Message to Roe' htmlFor="message-textarea"></label>
      <textarea  id="message-textarea" className='textarea-input' rows={3} placeholder="Please tell me your needs. Be sure to include helpful details."  />
    </div>
  )
}

export default Textarea