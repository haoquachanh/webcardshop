import React from "react";
import '../styles/utility.scss'
import {HiShoppingBag} from 'react-icons/hi'
import { BsFacebook,BsTiktok,BsYoutube,BsInstagram, BsMessenger } from 'react-icons/bs';
import { Link } from "react-router-dom";
// import { BiMailSend } from 'react-icons/bi';

export default function Utility(){
    return(
        <>
            <div className="utilitybar">
                <div className="bag">
                    <div className="value"><p className="iconu">0</p></div>
                    <Link to='/shoppingcart' ><HiShoppingBag className="iconu" /> </Link>
                </div>
                <div className="contact">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> < BsFacebook className="iconu"/> </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"> < BsInstagram className="iconu" /> </a>
                    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"> < BsTiktok className="iconu" /> </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"> < BsYoutube className="iconu" /> </a>
                </div>
                <div className="mess">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> < BsMessenger className="iconu"/> </a>

                </div>
            </div>
        </>
    )
}