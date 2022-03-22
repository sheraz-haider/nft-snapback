import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const [address, setAddress] = useState(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const [facebook, setFacebook] = useState("")
  const [twitter, setTwitter] = useState("")
  const router = useRouter()

  useEffect(() => {
    // connect()
  }, [])
  async function connect() {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const _address = await provider.getSigner().getAddress()
    const _artist = await axios({
      method: 'get',
      url: `/api/v1/artists`,
      params: { address: _address },
    })
    if(_artist.data.length) {
      // Redirect to home
    }
    else {
      setAddress(_address)
    }
    console.log(address, _artist.data);
  }

  async function register() {
    if(name !== '' && email !== '' && address) {
      const _artist = await axios({
        method: 'post',
        url: `/api/v1/artists`,
        data: { address, name, email, bio, facebook, twitter },
      })
      if(_artist.data) {
        window.location.replace('/')
      }
    }
  }

  return (
    <div className="">

      {address ? (
        <div className="edit_profile register">
          <div className="container">
            <div className="row">
              <div className="col-lg-3" />
              <div className="col-lg-9">
                <div className="right_part space-y-20">
                  <h1 className="color_white"> Create Profile</h1>
                  <p className="color_white" style={{color: 'white !important'}}>You can set preferred display name and manage other personal settings.</p>
                  <div className="box edit_box w-full space-y-20">
                    <div className="row">
                      <div className="col-lg-6 account-info">

                        <h3 className="mb-20"> 🍉 Account info </h3>
                        <div className="form-group space-y-10 mb-0">
                          <div className="space-y-20">
                            <div className="space-y-10">
                              <span className="nameInput">Display name</span>
                              <input type="text" onChange={({ target }) => setName(target.value)} className="form-control" placeholder="your name" />
                            </div>
                            <div className="space-y-10">
                              <span className="nameInput d-flex justify-content-between">Email
                                <span className="txt_xs color_text">Your email for marketplace notifications</span>
                              </span>
                              <div className="confirm">
                                <input type="text" onChange={({ target }) => setEmail(target.value)} className="form-control" placeholder="Enter email" />
                                {/* <a href="#" className="confirm-btn btn btn-dark btn-sm">Confirm</a> */}
                              </div>
                            </div>
                            <div className="space-y-10">
                              <span className="nameInput">Bio</span>
                              <textarea style={{minHeight: '110px'}} onChange={({ target }) => setBio(target.value)} placeholder="Add your bio" defaultValue={""} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 social-media">
                        <h3 className="mb-20">👨 Social media ‍</h3>
                        <div className="form-group space-y-10">
                          <div className="space-y-20">
                            <div className="d-flex flex-column">
                              <span className="nameInput mb-10">Facebook</span>
                              <input type="text" className="form-control" onChange={({ target }) => setFacebook(target.value)} placeholder="facebook username" />
                              {/* <a className="facebook-btn btn btn-primary mt-10 btn-sm" href="#">
                                <i className="ri-facebook-circle-fill" />
                                Connect to Facebook
                              </a> */}
                            </div>
                            <div className="d-flex flex-column">
                              <span className="nameInput mb-10">Twitter</span>
                              <input type="text" className="form-control" onChange={({ target }) => setTwitter(target.value)} placeholder="twitter username" />
                              {/* <a className="twitter-btn btn btn-primary mt-10 btn-sm" href="#">
                                <i className="ri-twitter-fill" />
                                Connect to Twitter
                              </a> */}
                            </div>
                            {/* <div className="d-flex flex-column">
                              <span className="nameInput mb-10">Discord</span>
                              <input type="text" className="form-control" placeholder="discord username" />
                              <a className="discord-btn btn btn-primary mt-10 btn-sm" href="#">
                                <i className="ri-discord-fill" />
                                Connect to Discord
                              </a>
                            </div> */}
                          </div>
                        </div>
                        <h3 className="mb-20 mt-40">📮 Notifications </h3>
                        <ul className="space-y-10">
                          <li className="d-flex space-x-10 switch_item">
                            <input type="checkbox" id="switch1" defaultChecked /><label htmlFor="switch1">Toggle</label>
                            <span className="color_text"> Email Notifications </span>
                          </li>
                          <li className="d-flex space-x-10 switch_item">
                            <input type="checkbox" id="switch3" defaultChecked /><label htmlFor="switch3">Toggle</label>
                            <span className="color_text"> Item Purchased </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="hr" />
                    <p className="color_black">Please take a few minutes to read and understand Stacks Terms of
                      Service. To continue, you’ll need to accept the terms of services
                      by checking the boxes.</p>
                    {name !== '' && email !== '' && address && (
                      <button onClick={register} className="btn btn-grad">Register</button>
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="effect">
          <div className="container">
            <Link href="/" ><a className="btn btn-white btn-sm mt-20">Back to home</a></Link>
            <div className="hero__wallets pt-100 pb-50">
              <div className="space-y-20 d-flex flex-column align-items-center">
                <div className="logo">
                  <img src="assets/img/icons/logo.svg" alt="" />
                </div>
                <h2 className="text-center">Connect your wallet</h2>
                <p className="text-center">Connect with one of available wallet
                  providers or create a new wallet.
                </p>
              </div>
            </div>		<div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="wallets">
                  <div className="row justify-content-md-center mb-20_reset">
                    {/* ================= item */}
                    <div className="col-lg-4">
                      <a href="#" onClick={connect} className="box in__wallet space-y-10">
                        <div className="logo">
                          <img src="assets/img/icons/metamask.svg" alt="logo_community" />
                        </div>
                        <h5 className="text-center">metamask</h5>
                        <p className="text-center">A browser extension with great flexibility. The web's popular wallet</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



    </div>
  )
}