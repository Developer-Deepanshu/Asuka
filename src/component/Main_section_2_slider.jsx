import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import computer from '../images/computer1.svg'
import phone from '../images/phone.png'
// import close_btn from '../images/close_btn.png'

export default function Slier() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
      <div id="call_slider" className="d_flex h_100vh bar ">
        <div className="box_1 p_0">
          <Slider {...settings}>
            <div className='h_100  bg_box_1'>
              <div className="h_100 mx_10 d_flex_1">
                <p className="content">Kottons conent Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fuga ratione dicta sint, iste eos natus recusandae doloribus nobis ipsam reprehenderit, nam repudiandae dignissimos molestias ipsa sapiente suscipit fugit magni. Architecto quod sit laborum, qui, praesentium a adipisci corporis sint blanditiis maiores possimus! Nobis eligendi culpa earum consectetur at velit asperiores provident, corrupti facere? Facilis nostrum labore veritatis ipsa minus, saepe nisi doloremque tempora aperiam maiores perspiciatis, laudantium odit suscipit harum eveniet recusandae impedit velit quidem accusantium voluptates? Corrupti adipisci dolores exercitationem? Ipsum dolore recusandae, fugiat quasi animi magnam nulla voluptate ut tenetur natus voluptas iure vitae velit laboriosam expedita laudantium molestias nemo pariatur earum minus quo sapiente</p>
                <div className="credit align_end d_flex_end">
                  <p className="text_end">~ The credited person</p>
                </div>
              </div>
            </div>
            <div className='h_100  bg_box_2'>
              <div className="h_100 mx_10 d_flex_1">
                <p className="content">Kottons conent Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fuga ratione dicta sint, iste eos natus recusandae doloribus nobis ipsam reprehenderit, nam repudiandae dignissimos molestias ipsa sapiente suscipit fugit magni. Architecto quod sit laborum, qui, praesentium a adipisci corporis sint blanditiis maiores possimus! Nobis eligendi culpa earum consectetur at velit asperiores provident, corrupti facere? Facilis nostrum labore veritatis ipsa minus, saepe nisi doloremque tempora aperiam maiores perspiciatis, laudantium odit suscipit harum eveniet recusandae impedit velit quidem accusantium voluptates? Corrupti adipisci dolores exercitationem? Ipsum dolore recusandae, fugiat quasi animi magnam nulla voluptate ut tenetur natus voluptas iure vitae velit laboriosam expedita laudantium molestias nemo pariatur earum minus quo sapiente</p>
                <div className="credit align_end d_flex_end">
                  <p className="text_end">~ The credited person</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}
