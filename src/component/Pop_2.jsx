import React from 'react'
import spotify_logo from '../images/spotify_logo.jpg'
import playlist from '../images/playlist.png'

function Pop_2() {
  return (
    <>
      <section>
        <div id="pop_2id" className="d_flex h_100vh height bar ">
          <div className="bg_box_2 bimg">
            <div className="d_flex_1 flex_coloum align_center pt_">
              <a href="https://open.spotify.com/">
                <img
                  className="w_200 br_35"
                  src={spotify_logo}
                  alt="spotify_logo"
                />
              </a>
              <div className="box_2 mt_50">
                <a  href="https://open.spotify.com/">
                  <img
                      className='w_200 br_20'
                      src={playlist}
                      alt="playlist_logo"
                      />
                </a>
              </div>
              <p className="fw_600 fs_20 text_color2 mt_84">
                {' '}
                We made a playlist for you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pop_2
