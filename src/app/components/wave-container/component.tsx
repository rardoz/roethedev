import React from 'react'
import './styles.scss'
import classnames from 'classnames'
import MediaQuery from 'react-responsive'
import WaveBg from './components/wave-bg'
import WaveBgMobile from './components/wave-bg-mobile' 
import { BREAKPOINTS } from '../../context/theme/constants'
import WaveBgBottom from './components/wave-bg-bottom'

const WaveContainer: React.FC<JSX.IntrinsicElements['div'] & { type?: 'bottom' }> = ( {
  children,
  className,
  type,
  ...props
} ) => {
  return (
    <div
      className='wave-svg-container'
    >
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
      {
        type === 'bottom' ? <WaveBgBottom />
          :
          ( <>
            <MediaQuery
              minWidth={`${BREAKPOINTS.SMALL + 1}px`}
            >
              <WaveBg />
            </MediaQuery>
            <MediaQuery
              maxWidth={`${BREAKPOINTS.SMALL}px`}
            >
              <WaveBgMobile />
            </MediaQuery>
          </> )
      }
    </div>
  )
}

export default WaveContainer
