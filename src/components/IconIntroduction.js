//IconIntroduction
import React, { useState } from 'react'

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0) // 当前显示的图片索引

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  }

  return (
    <div className="slider relative">
      <div className="text-2xl font-bold text-center">
        Icon Introduction
      </div>
      <button
        onClick={prevSlide}
        className="left-arrow absolute top-1/2 -left-20 bg-gray-600 text-white p-2 rounded-full"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="right-arrow absolute top-1/2 -right-20 bg-gray-600 text-white p-2 rounded-full"
      >
        &#9654;
      </button>
      {images.map((image, index) => (
        <div
          className={
            index === current
              ? 'slide active opacity-100 transition-opacity duration-300'
              : 'slide opacity-0 transition-opacity duration-300'
          }
          key={index}
        >
          {index === current && (
            <div className="image-caption-container mx-auto max-w-xl">
              <img
                src={image.src}
                alt="Slider"
                className=" object-cover mx-auto max-w-xl h-64"
              />
                      {/* <p className="text-center mt-2">{image.caption}</p> */}
                      <p className="text-center mt-2">{image.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ImageSlider
