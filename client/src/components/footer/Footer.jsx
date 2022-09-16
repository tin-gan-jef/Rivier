import React from 'react'
import './footer.css'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer_container'>
        <div className="footer">
            <div className="footer_text">
                <div className="footer_title">RIVIÈRE ROUGE RV PARK</div>
                <p className="footer_description">
                    All sites can accommodate a 40 foot RV with multiple slideouts and parking for two vehicles
                </p>
                <p className="footer_description">
                    All sites can accommodate a 40 foot RV with multiple slideouts and parking for two vehicles
                </p>
            </div>
            <div className="footer_text">
                <div className="footer_title">Quick Links</div>
                <div className="links">
                    <Link className='link' to={''}>Home</Link>
                    <Link className='link' to={''}>Park</Link>
                    <Link className='link' to={''}>About</Link>
                    <Link className='link' to={'/admin'}>Admin</Link>
                </div>
            </div>
            <div className="footer_text">
                <div className="footer_title">Our Services</div>
                <div className="links">
                    <Link className='link' to={''}>Web Designing</Link>
                    <Link className='link' to={''}>Digital marketing</Link>
                    <Link className='link' to={''}>SEO Services</Link>
                    <Link className='link' to={''}>Email Marketing</Link>
                </div>
            </div>
            <div className="footer_text">
                <div className="footer_title">Get In Touch</div>
                <span className="footer_icon">
                    <span><LocationOnIcon className='icon' fontSize='medium' /></span>High way 457 PASS Dewitt Rd.
                </span>
                <span className="footer_icon">
                    <span><MapIcon className='icon' fontSize='medium' /></span>Google map
                </span>
                <span className="footer_icon">
                    <span><AccessTimeIcon className='icon' fontSize='medium' /></span>24/7 Working Hourse
                </span>
                <span className="footer_icon">
                    <span><PhoneIcon className='icon' fontSize='medium' /></span>(318) 447-7530
                </span>
                <span className="footer_icon">
                    <span><EmailIcon className='icon' fontSize='medium' /></span>info@gmail.com
                </span>
                <span className='footer_media'>
                    <WhatsAppIcon fontSize='medium' />
                    <InstagramIcon fontSize='medium' />
                    <FacebookIcon fontSize='medium' />
                    <TwitterIcon fontSize='medium' />
                    <YouTubeIcon fontSize='medium' />
                </span>
            </div>
        </div>
    </div>
  )
}
