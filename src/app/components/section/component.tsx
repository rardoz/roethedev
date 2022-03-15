import React from 'react'
import './styles.scss'
import classnames from 'classnames'

const Section: React.FC<JSX.IntrinsicElements["section"]> = 
( { className, ...props } ) => {
  return (
    <section className={classnames( 'section', className )} {...props}/>
  )
}

export default Section