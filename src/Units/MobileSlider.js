import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './MobileSlider.scss'

const MobileSlider = () => {
    return (
      <Carousel className='carousel-c' interval={3000} prevIcon={null} nextIcon={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/shows/caraouselShow/bb.jpg"
            alt="Breaking Bad"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/shows/caraouselShow/wd.jpg"
            alt="Westworld"
          />
          <Carousel.Caption>
    
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/shows/caraouselShow/arr.jpg"
            alt="Arrow"
          />
          <Carousel.Caption>
  
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  };
  
  export default MobileSlider;
 
  
  