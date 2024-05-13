import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <h1 className='fixed'>Navbar</h1>
    <div className='d-flex gap-5'>
    <Link to='/'>Home</Link>
    <Link to='/lab'>lab</Link>
      <Link to='/about'>about</Link>
      <Link to='/mission'>mission</Link>
      <Link to='/team'>team</Link>
    </div>
    </>
  )
}

export default Navbar