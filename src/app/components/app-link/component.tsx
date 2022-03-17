import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import './styles.scss'
import classnames from 'classnames'

const AppLink: React.FC<LinkProps & {inverted?: boolean}> = ( { className, inverted, ...props } ) => {
  return <Link className={classnames( className, 'app-link', { inverted } )} {...props} />
}

export default AppLink