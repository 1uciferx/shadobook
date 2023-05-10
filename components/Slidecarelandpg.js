import { useState } from 'react';
import Image from 'next/image';

const CardSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? totalImages - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === totalImages - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative h-80">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 focus:outline-none"
        onClick={prevSlide}
      >
        <svg
          className="w-6 h-6 text-gray-500 hover:text-gray-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 focus:outline-none"
        onClick={nextSlide}
      >
        <svg
          className="w-6 h-6 text-gray-500 hover:text-gray-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } absolute top-0 left-0 w-full h-full transition-opacity duration-500`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
