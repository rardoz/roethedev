import React from 'react'
import './styles.scss'
import classnames from 'classnames'

const WaveContainer: React.FC<JSX.IntrinsicElements["div"]> = ( { children, className, ...props } ) => {
  return ( 
    <div className={classnames( "wave-container", className )} {...props}>
      {children}
    </div>
  )
}

export default WaveContainer