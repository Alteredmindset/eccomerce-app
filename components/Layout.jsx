import React from 'react'
import Head from 'next/head'
import Sidebar from './Sidebar'
import WhatsApp from './Whatsapp'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div>
        <Sidebar />
      </div>
      <Head>
        <title>JS Mastery Store</title>
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
