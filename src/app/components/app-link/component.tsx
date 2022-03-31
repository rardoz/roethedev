import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import './styles.scss'
import classnames from 'classnames'

const AppLink: React.FC<
  LinkProps & {
    inverted?: boolean
    size?: 'xxl' | 'default'
  }
> = ( { className, size, inverted, ...props } ) => {
  return (
    <Link
      className={
        classnames( className,
          'app-link',
          size === 'xxl' ? 'app-link-xxl' : false,
          {
            inverted 
          } )
      }
      {...props}
    />
  )
}

export default AppLink
