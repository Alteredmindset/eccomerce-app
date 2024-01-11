import React from 'react'
import Head from 'next/head'

import WhatsApp from './Whatsapp'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Ruggmobile Imports Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
      <WhatsApp />
    </div>
  )
}

export default Layout
