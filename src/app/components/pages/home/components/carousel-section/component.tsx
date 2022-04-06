import React, { useContext } from 'react'
import cmsContext from '../../../../../context/cms'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' 
import CarouselSlide from './components/carousel-slide'
import './styles.scss'

const CarouselSection: React.FC = () => {
  const { items } = useContext( cmsContext )
  return( 
    <Carousel
      className='carousel-section'
      autoPlay
      dynamicHeight
      infiniteLoop
      interval={3000}
      showArrows
      stopOnHover
      swipeable
      emulateTouch
      useKeyboardArrows
      showThumbs={false}
      animationHandler="slide"
    >
      {
        ( items || [
          {
         
          } 
        ] ).map( item => ( 
          <CarouselSlide
            key={item.title}
            {...item}
          />
        ) )
      }
    </Carousel>
  )
}

export default CarouselSection