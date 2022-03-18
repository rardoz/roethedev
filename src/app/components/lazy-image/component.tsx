import React, {  useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const LazyImage:React.FC<{
    imgSrc: string
    placeholderSrc?: string
}> = ( { imgSrc, placeholderSrc } ) => {
  const { ref, inView } = useInView()
  const loadedRef = useRef( false )
  loadedRef.current = loadedRef.current || inView

  return (
    <img
      className='lazy-image'
      ref={ref}
      width="100%"
      src={inView || loadedRef.current ? imgSrc : placeholderSrc}
    />
  )
}
export default LazyImage