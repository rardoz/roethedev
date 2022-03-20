import React from 'react'
import './styles.scss'
import classNames from 'classnames'

const WaveHeroTitle: React.FC<{
    title1: string, 
    title2?:string, 
    title3?: string}> = ( { 
      title1, 
      title2, 
      title3 
    } ) => {
    
      return ( 
        <h1 className={classNames( 'wave-hero-title', 'row' )}>
          <span>{`${title1} `}</span>
          <span className='row'>
            {title2 && <span>{`${title2} `}</span>}
            {title3 && <span>{title3} </span>}
          </span>
        </h1> 
      )
    }

export default WaveHeroTitle