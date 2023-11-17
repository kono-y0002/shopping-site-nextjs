import Link from 'next/link'
import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link href="/">shop</Link>
        <Link href="/contact">contact</Link>
        <Link href="/cart">cart</Link>
      </div>
    </div>
  )
}

export default Navbar