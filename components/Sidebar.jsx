import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { VscListFlat } from 'react-icons/vsc'
import { Sidebarmenu } from './'
import { useStateContext } from '../context/StateContext'
import SearchInput from './SearchInput'

const Sidebar = () => {
  const { setShowMenu, showMenu } = useStateContext()

  return (
    <div>
      <button
        type="button"
        className="hamburger-icon"
        onClick={() => setShowMenu(true)}
      >
        <VscListFlat color="black" />
      </button>
      {showMenu && <Sidebarmenu />}
    </div>
  )
}

export default Sidebar
