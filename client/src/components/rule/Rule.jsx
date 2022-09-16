import React from 'react'
import './rule.css'
import Menu from '../../components/menu/Menu'
import Footer from '../footer/Footer'
import Data from '../data/policy.json'


export default function Rule() {
  return (
    <div className='rule_container'>
        <div className="rule_slide">
            <Menu />
            <div className="rule_title">
                <p>Rules</p>
            </div>
        </div>
        <div className="rule_wrapper">
        <div className="rule_indication">OUR STORY</div>
            <div className="rule_header">RIVIÈRE ROUGE RV PARK</div>
            <div className="rule_description">
                Come join us on the river for some fun events at the outdoor pavilion, which can also be rented out for your special occasion!
                And we will have a 14 x 60 3 bedroom 2 bath mobile home on site for weekend or weekly rental only.
            </div>
            <div className="rules">
                {Data.map((data)=>(
                    <div tabIndex={data.index} className="rule">
                        <p className="rule_policy_title">{data.title}</p>
                        <p className='rule_desc'>{data.description}</p>
                    </div>
                    
                ))}
            </div>
        </div>
        <Footer />
    </div>
  )
}
