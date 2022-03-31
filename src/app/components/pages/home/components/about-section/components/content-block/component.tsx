import React from 'react'
import './styles.scss'
import classnames from 'classnames'

const ContentBlock: React.FC<{ className?: string }> = ( { className, children } ) => {
  return (
    <div
      className={
        classnames( 'content-block',
          className )
      }
    >
      <h3
        className='text-capitalize'
      >
Software engineer, mentor and artist
      </h3>
      <p>
        I'm a digital nomad and flamboyant creative technologist disguised as a web frontend engineer living on the road
        making cool projects.
      </p>
      <br />
      <p>
        I attended Black Hawk College and The Illinois Insitute of Art in Chicago. There I earned my associates degree
        in visual communications. I have over 10 years of professional software development experience.
      </p>
      {children}
    </div>
  )
}

export default ContentBlock
