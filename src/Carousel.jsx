import React, { useState, useEffect } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'First Page',
      content: 'This is the first page of the carousel.'
    },
    {
      title: 'Second Page',
      content: 'This is the second page of the carousel.'
    },
    {
      title: 'Third Page',
      content: 'This is the third page of the carousel.'
    }
  ];
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  return (
    <div className="carousel">
      <ul style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <li key={index}>
            <h2>{slide.title}</h2>
            <p>{slide.content}</p>
          </li>
        ))}
      </ul>
      <button className="carousel-btn prev-btn" onClick={prevSlide}>Prev</button>
      <button className="carousel-btn next-btn" onClick={nextSlide}>Next</button>
    </div>
  );
}

export default Carousel;
