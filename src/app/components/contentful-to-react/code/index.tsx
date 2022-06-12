import React from 'react'
import './styles.scss'

const Code: React.FC = ( { children } ) => {
  return ( <div
    className='code-container'
  > 

    <div
      className='code'
    >
      {children}
    </div> 
    <div
      className='code-playground'
    >
      <div
        className='code-btn-container'
      >
        <button
          className='code-run-btn'
        >
run
        </button>
        <button
          className='code-reset-btn'
        >
reset
        </button>
      </div>
      <iframe
        className='code-iframe'
      />
    </div>
  </div> )
}

export default Code