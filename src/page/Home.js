import React from 'react';
import { Slider } from '../components/Slider';
import Filter from '../components/Home/Filter';
import Recommendations from '../components/Recommendations';
import Mission from '../components/Mission';
import Vision from '../components/Vision';
import MapHome from '../components/MapHome';
import Video from '../components/Video';
import Testimonials from '../components/Testimonials';
import Advice from '../components/Advice';




function Home () {
  return (
    <div>
    <Slider  />
    <Filter/>
    <Recommendations/>

    <Vision/>
    <Mission/>
    <MapHome/>
    <Video/>
    <Testimonials/>
    <Advice/>
    </div>
  )
}

export default Home;