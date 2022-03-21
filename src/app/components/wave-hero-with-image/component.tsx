import React from 'react'
import './styles.scss'

const WaveHeroWithImage: React.FC <{
    children?: React.ReactChild,
    src?: string, title?: string, description?: string}> = ( { 
      children,
      title,
      description,
      src 
    } ) => {
      return (
        <div className='wave-hero-with-image'>
          <img src={src} width="100%" />
          {title && <h1>{title}</h1>}
          {title && <p>{description}</p>}
          {children}
        </div>
      )}

export default WaveHeroWithImage