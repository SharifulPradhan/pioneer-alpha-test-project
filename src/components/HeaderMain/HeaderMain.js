import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './HeaderMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const HeaderMain = () => {
  return (
    <Container className="carousel-container">
      <Carousel
        className="w-100"
        nextIcon={<FontAwesomeIcon size="3x" color="black" icon={faArrowRight} />}
        prevIcon={<FontAwesomeIcon size="3x" color="black" icon={faArrowLeft} />}
      >

        <Carousel.Item className="carousel-contents">
          <h3>A picture is worth a thousand words</h3>
          <p> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
          <button className="carousel-button">View Gallery</button>
        </Carousel.Item>

        <Carousel.Item className="carousel-contents">
          <h3>About Us</h3>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum voluptas, sit ullam tempore molestias eligendi a accusamus ab dolor praesentium error architecto eos officiis perspiciatis deleniti iure nam nulla quis.</p>
          <button className="carousel-button">Know More</button>
        </Carousel.Item>

      </Carousel>
    </Container>
  );
};

export default HeaderMain;