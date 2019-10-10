import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between'}}>
    <Link href="/"><a>Home</a></Link>
    <Link href="/about-us"><a>About Us</a></Link>
    <Link href="/posts"><a>Posts</a></Link>
    <Link href="/users"><a>Users</a></Link>
  </div>
)

export default Nav
