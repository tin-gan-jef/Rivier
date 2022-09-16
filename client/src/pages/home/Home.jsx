import React from 'react'
import Carouse from '../../components/carousel/Carousel'
import './home.css'
import Menu from '../../components/menu/Menu'
import Feature from '../../components/feature/Feature'
import Aminities from '../../components/data/aminities.json'
import Zoom from 'react-reveal/Zoom';
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'


export default function Home() {

  return (
    <div className='home_container'>

      <Menu />
      <Carouse />

      <div className="home_wrapper">
{/* HOME MAP */}
        <div className="home_map_content">
          <div className="home_map_content_left">
            <div className="home_map_inidcator">FIND THE PARK</div>
            <div className="home_map_title">DIRECTIONS</div>
            <p className="home_map_description">
              At the end of High way 1198, turn right on High way 457. PASS Dewitt Rd. on your right, 
              then take the NEXT ramp to the left over the levee
            </p>
            <img src="./images/map2.png"  width={"100%"} height={"320px"} alt="map_image" className="home_map_img" />
          </div>
          <div className="home_map_content_right">
            <div className="home_map_inidcator">ALL THE AMENITIES</div>
            <div className="home_map_title">MODERN CAMPING</div>
            <p className="home_map_description home_map_txt">
              Come join us on the river for some fun events at the outdoor pavilion, 
              which can also be rented out for your special occasion! We will have approximately 15 great camping 
              spots on the river bank, 10 in the middle row where you can position your camper either way for a beautiful river view, 
              and 15 on the bank of the pond (borrow pit) which will be stocked for fishing. All sites will have full hook ups. 
              The oxbow is very calm and leads directly into the Red River just south of the Poland Lock & Dam.
            </p>
            <Link to={'/about'}>
              <button className="home_map_btn">
                  READ MORE
              </button>
            </Link>
          </div>
        </div>

{/* FEATURE */}
        <Feature />

{/* AMINITIES */}
        <div className="home_aminities_features">
          <Zoom>
          <span className="aminities_features_indication">FEATURES & AMENITIES</span>
          <span className="aminities_features_title">WHY CHOOSE US</span>
          <div className="aminities_features">
            {Aminities.map((aminity)=>(
                    <div key={aminity.index} className="aminity">
                        <span className="aminity_index">{aminity.index}</span>
                        <span className='aminity_title'>{aminity.title}</span>
                        <div className="line"></div>
                        <p className="aminity_description">{aminity.description}</p>
                    </div>
                ))}
          </div>
          </Zoom>
        </div>

{/* TESTIMONIALS */}
       <div className="home_testimonials">
        <div className="testimonials_indication">CUSTOMER REVIEWS</div>
        <div className="testimonials_title">TESTIMONIALS</div>
        <div className="testimonies">
          <div className="testimony">
          <div className="author">PATRICK THOMAS</div>
          <div className="description">
            ” Stayed here while playing in a baseball tournament. 
            Excellent facilities. Nice shaded spots. Laundry and bathrooms were always clean. 
            Owner is very nice and reasonable. Highly recommended. “
          </div>
          </div>

          <div className="testimony">
          <div className="author">RICHARD LOVELESS</div>
          <div className="description">
          ” This is one of the nicest campgroungs I have seen. the owner is very helpful. 
          The facilities are extremely nice. highly recommend “
          </div>
          </div>

          <div className="testimony">
          <div className="author">MISTY BELK</div>
          <div className="description">
          ” Very nice rv park and nice owner who is very helpful. All lots are shaded and roomy. 
           Wifi is very fast and reliable and the laundry room and showers are nice and clean and also has vending machines and ice available. “
          </div>
          </div>
        </div>
       </div>
       {/* FOOTER */}
       <Footer />
      </div>
    </div>
  )
}
