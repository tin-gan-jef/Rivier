import React from 'react'
import './widget.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function Widget({type, bg}) {
    let data;
    switch(type){
        case "users":
            data={
                title: "New customers",
                num: '26',
                isMoney: false,
                positive: true,
                Value: "4.90%",
                link: "since last week",
                bg: 'crimson',
                icon: (
                    <PersonOutlineIcon fontSize='large' style={{
                        color: "white",
                        backgroundColor: "crimson",
                    }} />
                )
            };
            break;
        case "orders":
            data={
                title: "Total Bookings",
                num: '366',
                isMoney: false,
                positive: true,
                Value: "7.00%",
                link: "since last week",
                bg: 'goldenrod',
                icon: (
                    <ShoppingCartIcon fontSize='large' style={{
                        color: "white",
                        backgroundColor: "goldenrod",
                    }} />
                )
            };
            break;
        case "earnings":
            data={
                title: "Total Earnings",
                num: '1K',
                isMoney: true,
                positive: true,
                Value: "18.6%",
                link: "since last week",
                bg: 'green',
                icon: (
                    <MonetizationOnIcon fontSize='large' style={{
                        color: "white",
                        backgroundColor: "green",
                    }} />
                )
            };
            break;
        case "balance":
            data={
                title: "Total Balance",
                num: '45K',
                isMoney: true,
                positive: false,
                Value: "0.366%",
                link: "since last week",
                bg: 'purple',
                icon: (
                    <AccountBalanceIcon className="widget_icon" fontSize='large' style={{
                        color: "white",
                        backgroundColor: "purple",
                    }} />
                )
            };
            break;
        default:
            break
    }
  return (
    <div className={`widget-container ${data.bg}`}>
        <div className="widget_left">
            <div className="widget_title">{data.title}</div>
            <div className="widget_number">{data.isMoney && "$"} {data.num}</div>
            <div className="widget_link">
                <span className={`value_number ${data.positive}`}>{data.positive ? `+` : `-`}{data.Value}</span>
                <span className="value_link">{data.link}</span>
            </div>
        </div>
        <div className="widget_right">
            {data.icon}
        </div>
    </div>
  )
}
