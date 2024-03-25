import React, { useState } from 'react'

// Layout HOC
import DefaultLayoutHoc from '../layout/Default.Layout'

// Components
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'


const HomePage = () => {
   const [recommendedMovies, setRecommendedMovies] = useState([]);
   const [premierMovies, setPMovies] = useState([]);
   const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);


  return (
    <>
        <HeroCarousel />
    </>
  )
}

export default DefaultLayoutHoc(HomePage)