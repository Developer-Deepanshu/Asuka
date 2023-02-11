import React from 'react'
import ReactDOM from 'react-dom'
import Main_section_2_slider from './component/Main_section_2_slider.jsx'
import Pop_2 from './component/Pop_2.jsx'
import Pop_3 from './component/Pop_3.jsx'

import GiftBoxAnimation from './GiftBoxAnimation'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <GiftBoxAnimation />
    <Main_section_2_slider />
    <Pop_2 />
    <Pop_3 />
  </React.StrictMode>,
  rootElement,
)
