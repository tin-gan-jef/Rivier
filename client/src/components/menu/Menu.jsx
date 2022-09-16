import React, { useState } from 'react'
import './menu.css'
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';

export default function Menu() {
    const [burgerOpen, setBurgerOpen] = useState(false)
  return (
    <div className='menu_container'>
        <div className="menu_left">
            <span className="logo">RIVIÈRE ROUGE RV PARK</span>
        </div>
        <div className="menu_center">
            <div className="menu_items">
                <Link className='menu_link' to={"/"}>HOME</Link>
                <Link className='menu_link' to={"/map"}>PARK MAP</Link>
                <Link className='menu_link' to={"/rule"}>RULES & POLICIES</Link>
                <Link className='menu_link' to={"/about"}>ABOUT</Link>
                <Link className='menu_link' to={"/book"}>BOOK</Link>
            </div>
        </div>
        <div className="menu_right">
            <span className="menu_open">
                <MenuIcon fontSize='medium' onClick={()=>setBurgerOpen(true)} />
            </span>
        </div>
        <BurgerNav show={burgerOpen} className="burger_navbar">
            <ClearIcon onClick={()=>setBurgerOpen(false)} className='clear' fontSize='medium' />
            <Link className='burger_link' to={"/"}>HOME</Link>
            <Link className='burger_link' to={"/park"}>PARK MAP</Link>
            <Link className='burger_link' to={"/rule"}>RULES & POLICIES</Link>
            <Link className='burger_link' to={"/about"}>ABOUT</Link>
            <Link className='burger_link' to={"/book"}>BOOK</Link>
            <button className="burger_btn">(318) 447-7530</button>
        </BurgerNav>
    </div>
  )
}


const BurgerNav = styled.div`
position: fixed;
z-index: 9999;
top: 0;
bottom: 0;
right: 0;
background-color: white;
width: 250px;
padding: 20px;
display: flex;
flex-direction: column;
transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
transition: transform 0.5s;
`