import React from 'react'
import './feature.css'

export default function Feature() {
  return (
    <div className='feature_container'>
        <div className="feature_wrapper">
            <div className="feature_left">
                <span className="feature_indication">CAMPGROUND</span>
                <span className="feature_title">FEATURES & AMENITIES</span>
                <p className="feature_description">
                    Use of the washer and dryer facilities, 
                    and modern bathrooms featuring walk in showers with continuous hot water, 
                    as well as ice is available to all campers, and is included in the fee. 
                    There are two 1-acre, stocked fishing ponds.
                </p>
            </div>
            <div className="feature_right">
                <span className="feature_title rate">RATES</span>
                <button className="feature_btn">$60 - 70  NIGHT</button>
                <button className="feature_btn">$750 - 950  MONTHLY</button>
            </div>
        </div>
    </div>
  )
}
