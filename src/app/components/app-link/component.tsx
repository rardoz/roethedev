import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import './styles.scss'
import classnames from 'classnames'

const AppLink: React.FC<
  LinkProps & {
    inverted?: boolean
    size?: 'xxl' | 'default',
    hard?: boolean
  }
> = ( { className, size, inverted, hard, to, ...props } ) => {
  const formattedProps =  {
    className: 
      classnames( className,
        'app-link',
        size === 'xxl' ? 'app-link-xxl' : false,
        {
          inverted 
        } )
    ,
    ...props
  }

  return hard && typeof to === 'string' ? ( 
    <a
      href={to}
      {...formattedProps}
    /> 
  )  : (
    <Link
      to={to}
      {...formattedProps}
    />
  )
}

export default AppLink
