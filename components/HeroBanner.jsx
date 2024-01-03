// components/Carousel.js
import { useState, useEffect } from 'react'
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6'

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    )
  }
  const handlePrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    )
  }
  const handleDotClick = index => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext()
    }, 6000) // Change slide every 6 seconds

    return () => clearTimeout(timer) // Clear the timer when component is unmounted
  }, [currentIndex]) // Re-run the effect when `currentIndex` changes

  return (
    // <div className="carousel">
    //   <img className='img6' key={currentIndex} src={images[currentIndex]}  />
    //   <div className="slide_direction">
    //     <div className="left1" onClick={handlePrevious}>
    //       <FaCircleChevronLeft
    //         className="carousel-nav"
    //         size={30}
    //         color="black"
    //       />
    //     </div>
    //     <div className="right1" onClick={handleNext}>
    //       <FaCircleChevronRight
    //         className="carousel-nav"
    //         size={30}
    //         color="black"
    //       />
    //     </div>
    //   </div>
    //   <div className="indicator">
    //     {images.map((_, index) => (
    //       <div
    //         key={index}
    //         className={`dot ${currentIndex === index ? 'active' : ''}`}
    //         onClick={() => handleDotClick(index)}
    //       ></div>
    //     ))}
    //   </div>
    // </div>
    <div className="container">
      <div className="carousel">
        <input type="radio" id="carousel-1" name="carousel[]" defaultChecked />
        <input type="radio" id="carousel-2" name="carousel[]" />
        <input type="radio" id="carousel-3" name="carousel[]" />
        <input type="radio" id="carousel-4" name="carousel[]" />
        <input type="radio" id="carousel-5" name="carousel[]" />
        <ul className="carousel__items">
          <li className="carousel__item">
            <img src="/images/banner1.png" alt="" />
          </li>
          <li className="carousel__item">
            <img src="/images/1.png" alt="" />
          </li>
          <li className="carousel__item">
            <img src="/images/2.png" alt="" />
          </li>
          <li className="carousel__item">
            <img src="/images/3.png" alt="" />
          </li>
          <li className="carousel__item">
            <img src="/images/4.png" alt="" />
          </li>
        </ul>
        <div className="carousel__prev">
          <label htmlFor="carousel-1" />
          <label htmlFor="carousel-2" />
          <label htmlFor="carousel-3" />
          <label htmlFor="carousel-4" />
          <label htmlFor="carousel-5" />
        </div>
        <div className="carousel__next">
          <label htmlFor="carousel-1" />
          <label htmlFor="carousel-2" />
          <label htmlFor="carousel-3" />
          <label htmlFor="carousel-4" />
          <label htmlFor="carousel-5" />
        </div>
        <div className="carousel__nav">
          <label htmlFor="carousel-1" />
          <label htmlFor="carousel-2" />
          <label htmlFor="carousel-3" />
          <label htmlFor="carousel-4" />
          <label htmlFor="carousel-5" />
        </div>
      </div>
    </div>
  )
}
