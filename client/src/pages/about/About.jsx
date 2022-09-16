import React from 'react'
import './about.css'
import Menu from '../../components/menu/Menu'
import Data from '../../components/data/about.json'
import Footer from '../../components/footer/Footer'

export default function About() {
  return (
    <div className='about_container'>
        <div className="about_slide">
            <Menu />
            <div className="about_title">
                <p>About Us</p>
            </div>
        </div>
        <div className="about_wrapper">
            <div className="about_indication">OUR STORY</div>
            <div className="about_header">RIVIÈRE ROUGE RV PARK</div>
            <div className="about_description">
                Come join us on the river for some fun events at the outdoor pavilion, which can also be rented out for your special occasion!
                And we will have a 14 x 60 3 bedroom 2 bath mobile home on site for weekend or weekly rental only.
            </div>
            <div className="services">
                {Data.map((data)=>(
                    <div tabIndex={data.index} className="service">
                        <img src={data.image} alt="pic" className="service_img" width={'100%'} height={"250px"} />
                        <p className="service_title">{data.title}</p>
                        <p className='service_desc'>{data.description}</p>
                    </div>
                    
                ))}
            </div>
        </div>
        <Footer />
    </div>
  )
}
