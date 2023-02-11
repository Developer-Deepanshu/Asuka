import React from 'react'
import spotify_logo from '../images/spotify_logo.jpg'

function Pop_2() {
  return (
    <>
      <section>
        <div id="pop_2id" className="d_flex h_100vh bar">
          <div className="bg_box_2">
            <div className="d_flex_1 flex_coloum align_center pt_">
              <a href="https://open.spotify.com/">
                <img
                  className="w_200 br_35"
                  src={spotify_logo}
                  alt="spotify_logo"
                />
              </a>
              <div className="box_2 mt_50">
                <a className="fs_20" href="https://open.spotify.com/">
                  https://open.spotify.com/
                </a>
              </div>
              <p className="fw_600 fs_20 text_green mt_84">
                {' '}
                Feels Like A Party!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pop_2
