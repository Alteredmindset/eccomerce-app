import React, { useState } from 'react' // Import useState
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { UserButton, useUser } from '@clerk/clerk-react'
import { VscAccount } from 'react-icons/vsc'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'
import SearchInput from './SearchInput'
import NavigationMenu from './NavigationMenu'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  const { user } = useUser()

  const [showDropdown, setShowDropdown] = useState(false) // State to track dropdown visibility

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <img className="logolink" src="/images/ruggmobile.png" />
        </Link>
      </p>

      <div className="user">
        <UserButton />
      </div>

      {!user && (
        <>
          <div className="auth-link1">
            <VscAccount
              className="account-default"
              size={25}
              onClick={() => setShowDropdown(!showDropdown)}
            />{' '}
            {/* Toggle dropdown visibility */}
            {/* Dropdown for Sign In and Sign Up */}
            {showDropdown && (
              <div className="dropdown-user">
                <Link href="/signin">
                  <a>Sign In</a>
                </Link>
                <Link href="/signup">
                  <a>Sign Up</a>
                </Link>
              </div>
            )}
          </div>
        </>
      )}

      <div>
        <button
          className={`hamburger-button ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          ☰
        </button>
        {isMenuOpen && <NavigationMenu onClose={toggleMenu} />}
        {/* Your main content goes here */}
      </div>

      <SearchInput />
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping color="black" />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
