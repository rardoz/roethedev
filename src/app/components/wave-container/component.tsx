import React from 'react'
import './styles.scss'
import classnames from 'classnames'
const WaveContainer: React.FC<JSX.IntrinsicElements['div'] & { type?: 'bottom' }> = ( {
  children,
  className,
  type,
  ...props
} ) => {
  return (
    <div
      className={
        classnames( 'wave-container',
          className,
          {
            'wave-bottom': type === 'bottom' 
          } )
      }
      {...props}
    >
      {children}
    </div>
  )
}

export default WaveContainer
