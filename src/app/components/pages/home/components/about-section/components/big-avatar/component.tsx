import React from 'react'
import './styles.scss'
import LazyImage from '../../../../../../lazy-image'

const BigAvatar: React.FC<{
  avatarImg: string
  avatarImgAlt?: string
}> = ( { avatarImg, avatarImgAlt } ) => {
  return (
    <div
      className='big-avatar'
    >
      <LazyImage
        imgSrc={avatarImg}
      />
      {
        avatarImgAlt && <LazyImage
          imgSrc={avatarImgAlt}
        />
      }
    </div>
  )
}

export default BigAvatar
