import React from 'react'
import { Link } from 'react-router-dom'
import Icons from './Social'
import Move from './Scroll'
import "./home.css"
import Info from '../info/Info'
import Register from '../register/Register'
import Data from '../data/Data'
import Credit from '../credit/Credit'
import Devices from '../devices/Devices'
import Profile from '../profile/Profile'

const Home = () => {
  return (
    <>
      <section className="home section">
        <div className="home-container container">

          <div className="home-content">
            <div className="data">
              <h4>Welcome to the health aura</h4>
              <h1>
                Your <br />Pocket  Healthcare <br/>Solution.
              </h1>

            </div>
            <Icons />
          </div>
          <Move />

        </div>
      </section>

      <Info />
      <Register />
      <Data />
      <Credit />
      <Devices/>
      <Profile/>

    </>
  )
}

export default Home