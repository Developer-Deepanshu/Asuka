import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import computer from '../images/computer1.svg'
import phone from '../images/phone.png'

export default function Slier() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section>
      <div id="call_slider" className="d_flex h_100vh bar">
        <div className="box_1">
          <Slider {...settings}>
            {/* 1 */}
            <div className="mt-4 my-3 pb-2 height_394 ">
              <div className="p-4 hover_3">
                <div className="d-flex justify-content-center py-5 px-2 height">
                  <img src={computer} alt="computer" />
                </div>
                <h5 className="ff_gilroy fw-bold text_blue fs_xsm text-center color">
                  Online Services
                </h5>
                <div className="d-flex justify-content-center">
                  <p className="ff_gilroy fw-regular text_light_black fs_xsm text-center m-0 col-11 px-1 color">
                    Accept online payments on any channel via credit and debit
                    card, mobile wallets, whatever your business model. Setup is
                    quick and easy
                  </p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="mt-4 my-3 pb-2 height_394">
              <div className="4 hover_3">
                <div className="d-flex justify-content-center py-5 px-2 height">
                  <img src={phone} alt="phone" />
                </div>
                <h5 className="ff_gilroy fw-bold text_blue fs_xsm text-center color mt-4">
                  Mobile
                </h5>
                <div className="d-flex justify-content-center mb-2">
                  <p className="ff_gilroy fw-regular text_light_black fs_xsm text-center m-0 col-8 p-0 color pb-2">
                    Placerat porttitor risus mi lacinia consectetur quisque
                    massa, nam.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}
