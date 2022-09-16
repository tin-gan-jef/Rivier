import React from 'react'
import './carousel.css'
import Carousel from 'react-bootstrap/Carousel';
import Zoom from 'react-reveal/Zoom';

function Carouse() {
  return (
    <Carousel className='carousel' fade>

      <Carousel.Item className='first'>
        <Carousel.Caption className='caption'>
          <Zoom>
          <p className='title'>RIVIÈRE ROUGE RV PARK</p>
          <p className='desc'>
            Stay in RIVIÈRE ROUGE RV PARK with all the amenities you need to live comfortably.
            This is an exciting venture for us to share our hospitality with others.
          </p>
          <button className="carousel_btn">DIRECTION</button>
          </Zoom>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='second'>
        <Carousel.Caption className='caption'>
        <Zoom>
          <p className='title'>RIVIÈRE ROUGE RV PARK</p>
          <p className='desc'>
            Stay in RIVIÈRE ROUGE RV PARK with all the amenities you need to live comfortably.
            This is an exciting venture for us to share our hospitality with others.
          </p>
          <button className="carousel_btn">(318) 447-7530</button>
        </Zoom>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='fourth'>
        <Carousel.Caption className='caption'>
          <Zoom>
          <p className='title'>RIVIÈRE ROUGE RV PARK</p>
          <p className='desc'>
            Stay in RIVIÈRE ROUGE RV PARK with all the amenities you need to live comfortably.
            This is an exciting venture for us to share our hospitality with others.
          </p>
          <button className="carousel_btn">DIRECTION</button>
          </Zoom>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='third'>
        <Carousel.Caption className='caption'>
          <Zoom>
          <p className='title'>RIVIÈRE ROUGE RV PARK</p>
          <p className='desc'>
              Stay in RIVIÈRE ROUGE RV PARK with all the amenities you need to live comfortably.
              This is an exciting venture for us to share our hospitality with others.
          </p>
          <button className="carousel_btn">(318) 447-7530</button>
          </Zoom>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carouse