import React, { useState, useEffect } from 'react'

import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner, Sidebar } from '../components'

const Home = ({ products, bannerData }) => {
  const images = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    // ... add more images as needed
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % bannerData.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [bannerData.length])

  return (
    <>
      <HeroBanner images={images} />
      <div className="products-heading">
        <h2>Best Selling products</h2>
        <p>products You can Look to buy</p>
      </div>
      <div className="products-container">
        {products?.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner
        footerBanner={bannerData && bannerData[currentIndex]}
        products={products}
      />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData },
  }
}

export default Home
