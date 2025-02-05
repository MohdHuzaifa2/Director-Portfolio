import React from 'react'

const Header = ({isNavOpen, navbarToggle}) => {
  return (
    <header style={{color: isNavOpen ? "white" : ""}}>
      <div className="logo">
        <h3>Belinda Priolet</h3>
      </div>
      <button className={`nav-toggler ${isNavOpen ? "nav-open" : ""}`} aria-label="Toggle navigation" onClick={navbarToggle}>
        <div className="nav-toggle-line"></div>
        <div className="nav-toggle-line"></div>
      </button>
    </header>
  )
}

export default Header