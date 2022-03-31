import React from 'react'
import './styles.scss'

const SectionTitle: React.FC = ( { children } ) => {
  return (
    <div className='section-title'>
      {children && <h2>{children}</h2>}
      <div className='hr' />
    </div>
  )
}

export default SectionTitle
