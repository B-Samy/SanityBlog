'use client'

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from '@clerk/nextjs'
import React, { useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Next Blog</Link>
      </div>
      <ul className="navLinks">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/service">Blog</Link></li>
        <li><Link href="/payments">Payments</Link></li>

        <SignedOut>
          <SignInButton asChild>
            <button>Sign In</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </ul>
    </nav>
  )
}

export default Navbar
