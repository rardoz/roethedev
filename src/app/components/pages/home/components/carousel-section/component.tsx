import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Autoplay, Pagination, Navigation, EffectFade, Lazy, A11y } from 'swiper'
// Import Swiper styles

// Styles must use direct files imports
import 'swiper/swiper.scss' // core Swiper
import 'swiper/modules/effect-fade/effect-fade.scss' // Pagination module

import 'swiper/modules/navigation/navigation.scss' // Navigation module
import 'swiper/modules/pagination/pagination.scss' // Pagination module

const CarouselSection: React.FC = () => {
  return ( 
    <div>
      <Swiper
        grabCursor
        spaceBetween={50}
        slidesPerView={1}
        speed={1000}
        effect="fade"
        fadeEffect={
          {
            crossFade: true 
          }
        }
        loop
        modules={
          [
            Autoplay,
            Pagination,
            Navigation,
            EffectFade,
            Lazy,
            A11y
          ]
        }
        navigation
        centeredSlides
        autoplay={
          {
            delay: 2500,
            disableOnInteraction: false,
          }
        }
        pagination={
          {
            clickable: true,
          }
        }
        lazy
        onSlideChange={() => console.log( 'slide change' )}
        onSwiper={( swiper ) => console.log( swiper )}
      >
        <SwiperSlide>
Watch me code live on twitch
should follow the same format as the cards do
        </SwiperSlide>
        {/* <SwiperSlide>
Recommended Tutorials
        </SwiperSlide>
        <SwiperSlide>
Latest from portfolio
        </SwiperSlide>
        <SwiperSlide>
Latest from blog post
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default CarouselSection