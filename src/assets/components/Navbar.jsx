import React from 'react'

const Navbar = ({isNavOpen}) => {
  return (
    <nav className={`${isNavOpen ? "opened" : ""}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar