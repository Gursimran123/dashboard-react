import React from 'react';
import './widget.css';
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Widget = (props) => {
    let data;

    const amount=100;
    const diff=20;

    switch(props.type){
        case "user":
            data = {
              title: "USERS",
              isMoney: false,
              link: "See all users",
              icon: <PersonIcon className="icon-widget" style={{color: "crimson",backgroundColor:"rgba(255,0,0,0.2)"}} />,
            };
            break;
        case "order":
            data = {
              title: "ORDERS",
              isMoney: false,
              link: "View all orders",
              icon: <ShoppingCartIcon className="icon-widget" 
                style={{
                    color:"goldenrod",
                    backgroundColor:"rgba(218,165,32,0.2)"
                    }}
              />,
            };
            break;
        case "earnings":
            data = {
              title: "EARNINGS",
              isMoney: true,
              link: "View net earning",
              icon: <MonetizationOnIcon className="icon-widget" style={{
                    color:"green",
                    backgroundColor:"rgba(0,128,0,0.2)"
                    }}/>,
            };
            break;
        case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"View details",
                icon:(
                    <AccountBalanceWalletIcon className='icon-widget' style={{
                    color:"purple",
                    backgroundColor:"rgba(128,0,128,0.2)"
                    }}/>
                ),
            };
            break;
            default:
                break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title-widget">{data.title}</span>
            <span className="counter-widget">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
             <KeyboardArrowUpIcon />
             {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget