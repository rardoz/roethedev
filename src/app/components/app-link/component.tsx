import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import './styles.scss'
import classnames from 'classnames'

const AppLink: React.FC<LinkProps> = ( { className, ...props } ) => {
  return <Link className={classnames( className, 'app-link' )} {...props} />
}

export default AppLink