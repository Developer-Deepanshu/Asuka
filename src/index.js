import React from 'react'
import ReactDOM from 'react-dom'
import Main_section_2_slider from './component/Main_section_2_slider.jsx'

import GiftBoxAnimation from './GiftBoxAnimation'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <GiftBoxAnimation />
    <Main_section_2_slider />
  </React.StrictMode>,
  rootElement,
)
