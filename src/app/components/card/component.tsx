import React from 'react'
import classnames from 'classnames'
import LazyImage from '../lazy-image'
import { Link } from 'react-router-dom'
import './styles.scss'

const commonProps = {
  tabIndex: 1,
  className: 'card-link-wrapper',
}

const Card: React.FC<{
  className?: string
  title: string
  description: string
  to: string
  featuredImage: string
  hardRoute?: boolean
}> = ( { className, description, to, title, featuredImage, hardRoute } ) => {
  const linkContent = (
    <>
      <div
        className='card-image'
      >
        <LazyImage
          imgSrc={featuredImage}
        />
      </div>
      <div
        className='card-content'
      >
        <h3
          className='clamp-title'
        >
          {title}
        </h3>
        <div
          className='clamp-content'
        >
          <p>
            {description}
          </p>
        </div>
      </div>
      <small
        className='read'
      >
Read
      </small>
    </>
  )

  return (
    <div
      className={
        classnames( 'card',
          className )
      }
    >
      {
        hardRoute ? (
          <a
            {...commonProps}
            href={to}
            target='_blank'
            rel="noreferrer"
          >
            {linkContent}
          </a>
        ) : (
          <Link
            to={to}
            tabIndex={1}
            className='card-link-wrapper'
          >
            {linkContent}
          </Link>
        )
      }
    </div>
  )
}

export default Card
