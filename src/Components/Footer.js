import React from 'react'

const Footer = () => {
    const today = new Date();

  return (
  <footer>
      <center>
          <h1>Footer & copy {today.getFullYear()}</h1>
      </center>
  </footer>

  )
}

export default Footer