import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [artists, setArtists] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadArtists()
  }, [])
  async function loadArtists() {
    const _artists = await axios.get('/api/v1/artists')
    setArtists(_artists.data)
    setLoadingState('loaded')
  }

  return (
    <div className="">



      <div className="section__creators mt-100">
        <div className="container">
          <div className="space-y-30">
            <div className="section_head">
              <div className="row justify-content-between
          align-items-center">
                <div className="col-lg-auto">
                  <h2 className="section__title">Artists</h2>
                </div>
                {/* <div className="col-lg-4">
                  <div className="search">
                    <input type="text" placeholder="Search" className="bg_white" style={{background: 'white'}} />
                    <button className="result">
                      <i className="ri-search-line" />
                    </button>
                  </div>
                </div> */}

              </div>
            </div>
            <div className="section__body space-y-20">
              <div className="row mb-20_reset">
                {artists.map(artist => (
                  <div key={artist._id} className="col-lg-4">
                    <div className="creator_item creator_card space-y-20 mb-20">
                      <div className="avatars flex-column space-y-10">
                        <div className="cover">
                          <img src="/assets/img/items/cover_1.png" alt="Avatar" className="img-fluid" />
                        </div>
                        <div className="media">
                          <a>
                            <img src="/assets/img/avatars/avatar_5.png" alt="Avatar" className="avatar
                        avatar-md" />
                          </a>
                        </div>
                        <div className="details text-center">
                          <div>
                            <p className="color_black txt_lg">
                              {artist.creations.filter(c => c.sold).length}
                              {` `}
                              <span className="txt_sm">NFT</span></p>
                            <p className="color_black txt_sm">Sold</p>
                          </div>
                          <div>
                            <p className="color_black txt_lg">{artist.name}</p>
                            <p className="color_black txt_sm"></p>
                          </div>
                          <div>
                            <p className="color_black txt_lg">{artist.creations.length}</p>
                            <p className="color_black txt_sm">Creations</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}