import React from 'react'
import { useRouter } from 'next/router'
import { urlFor } from '../lib/client'

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
    link,
  },
  products,
}) => {
  console.log('Link:', link)

  const router = useRouter()

  const selectedProduct = products.find(prod => prod.name === product)

  const handleButtonClick = () => {
    console.log('handleButtonClick called');
    if (selectedProduct && selectedProduct.link) {
      console.log('Navigating to:', selectedProduct.link);
      router.push(selectedProduct.link);
    }
  };
  

  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <button type="button" onClick={handleButtonClick}>
            Go to
          </button>
        </div>

        <img src={urlFor(image)} className="footer-banner-image" />
      </div>
    </div>
  )
}

export default FooterBanner
