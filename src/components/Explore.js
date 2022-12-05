import React from 'react'
import NavBar from './Navigation'
import '../styles/explore.scss'
import searchIcon from '../images/searchIcon.png'

function Explore() {
  return (
    <>
        <NavBar/>
        <div className='expPanel'>
            <div className="explore">
                <div className="expSearch"> 
                    <input text="text" className="" placeholder="Search for people" />
                    <img className="expSearchIcon" src={searchIcon} alt="search icon" /> 
                </div>
                <div className="expTitleContainer">
                    <div className="expTitle">Suggestions for you</div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Explore