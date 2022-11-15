import React from 'react'
import Cards from './Cards'
import Sidebar from './Sidebar'
import "../styles/App.scss";
import NavBar from './Navigation';

function HomePage() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <div className="container">
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  )
}

export default HomePage;
