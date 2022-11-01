import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function HomeTopCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel  interval={1000} controls={false} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.foodpanda.com/wp-content/uploads/2021/01/foodpanda-model1-opt-scaled.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.foodpanda.com/wp-content/uploads/2021/01/foodpanda-model-opt-scaled.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}