import React from 'react'
import classnames from 'classnames'
import LazyImage from '../lazy-image'
import { Link } from 'react-router-dom'
import './styles.scss'

const Card: React.FC<{
    className?: string
    title: string
    description: string
    to: string
    featuredImage: string
}> = ( { className, description, to, title, featuredImage } ) => {
  return ( 
    <div className={classnames( 'card', className )}>
      <Link to={to} tabIndex={1} className="card-link-wrapper">
        <div>
          <LazyImage imgSrc={featuredImage}  />
        </div>
        <div className='card-content'>
          <h3 className='clamp-title'>{title}</h3>
          <div className='clamp-content'>
            <p>{description}</p>
          </div>
        </div>
        <small className='read'>Read</small>
      </Link>
    </div>
  )
}

export default Card