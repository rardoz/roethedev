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
Tech lead, software engineer, mentor and artist
      </h3>
      <p>
        I am a versatile digital nomad and innovative creative technologist
        assuming the role of a tech lead while embracing a nomadic lifestyle, 
        dedicated to bringing creative ideas to fruition.
      </p>
      <br />
      <p>
        I pursued my education at Black Hawk College and The Illinois Institute
        of Art in Chicago, achieving an associate's degree in visual communications.
        With a professional tenure of over a decade, I have accumulated substantial
        experience in software development.
      </p>
      {children}
    </div>
  )
}

export default ContentBlock
