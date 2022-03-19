import React, { useState, useRef } from "react";
import { Twirl as Hamburger } from 'hamburger-react'
import DropdownRender from "./dropdown";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useHideAndSeekMenu } from 'react-hideandseekmenu'
// import Dropdown from "@material-tailwind/react/Dropdown"
// import DropdownItem from "@material-tailwind/react/DropdownItem"
// import DropdownLink from "@material-tailwind/react/DropdownLink"

// import LogoImg from "../../assets/img/logo.png";
// import LogoTxt from "../../assets/img/logo_txt.png";

export const Navbar = () => {
    let Link = Scroll.Link;

    const navref = useRef < HTMLElement > (null);
    useHideAndSeekMenu({
        ref: navref,
        offset: 120,
        transitionDuration: 0.3,
    })

    // const [isOpen, setOpen] = useState(false);
    return (
        <>
            {/* <HeaderContact /> */}
            <div className="navSection mx-auto md:w-11/12 lg:w-9/12 2xl:w-3/5 xsm:px-0 md:px-5 2xl:px-10 xsm:pb-10 md:pb-12 lg:pb-16 xl:pb-6 mt-4">
                <div className="navContainer flex items-center justify-center xsm:pt-5 2xl:pt-8 lg:pb-8 2xl:pb-10 px-0">
                    <nav ref={navref} className="menu relative flex items-center w-full xsm:h-13 md:h-14 lg:h-15 xl:h-17 2xl:h-18 bg-tBlue50 bg-opacity-95 xsm:rounded-sm lg:rounded-md xsm:shadow-md lg:shadow-2xl opacity-100 md:border-3 lg:border-4 border-white border-opacity-95 xsm:px-2 md:pl-6 z-30">
                        <div className="logoContainer flex items-center w-1/2 h-full">
                            {/* <img className="h-4.5 ml-6" src={LogoTxt} alt="TranskenLogo" /> */}
                            <h1 className="titles xsm:ml-2 lg:ml-1 2xl:ml-2 xsm:text-md lg:text-lg xl:text-mdplus 2xl:text-xl text-white">Transken Links Limited</h1>
                        </div>
                        <div className="xsm:hidden lg:block menuContainer w-1/2 h-full">
                            <ul className="transition-all duration-400 menuList cursor-default inline-flex list-none w-full h-full text-white items-center justify-end xsm:space-x-2 lg:space-x-3 2xl:space-x-4 xsm:text-sm lg:text-tiny xl:text-base 2xl:text-md">
                                <li className="transition-all duration-400 rounded-sm hover:cursor-pointer hover:bg-white hover:text-tBlue50 px-5 py-2">Home</li>
                                <li
                                    className="transition-all duration-400 rounded-sm hover:cursor-pointer hover:bg-white hover:text-tBlue50 px-5 py-2"
                                >
                                    <a href="/"
                                        onClick={e => {
                                            let about = document.getElementById("about");
                                            e.preventDefault();
                                            about && about.scrollIntoView();
                                        }}
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="transition-all duration-400 rounded-sm hover:cursor-pointer hover:bg-white hover:text-tBlue50 px-5 py-2">
                                    <a href="/"
                                        onClick={e => {
                                            let divisions = document.getElementById("divisions");
                                            e.preventDefault();
                                            divisions && divisions.scrollIntoView();
                                        }}
                                    >
                                        Divisions
                                    </a>
                                </li>
                                <li className="transition-all duration-400 rounded-sm hover:cursor-pointer hover:bg-white hover:text-tBlue50 px-5 py-2">
                                    <a href="/"
                                        onClick={e => {
                                            let services = document.getElementById("services");
                                            e.preventDefault();
                                            services && services.scrollIntoView();
                                        }}
                                    >
                                        Services
                                    </a>
                                </li>
                                <li className="transition-all duration-400 rounded-sm hover:cursor-pointer hover:bg-white hover:text-tBlue50 px-5 py-2">
                                    <a href="/"
                                        onClick={e => {
                                            let products = document.getElementById("products");
                                            e.preventDefault();
                                            products && products.scrollIntoView();
                                        }}
                                    >
                                        Products
                                    </a>
                                </li>
                                <li className="transition-all duration-400 rounded-sm hover:cursor-pointer hover:bg-white hover:text-tBlue50 px-5 py-2">
                                    <a href="/"
                                        onClick={e => {
                                            let contact = document.getElementById("contact");
                                            e.preventDefault();
                                            contact && contact.scrollIntoView();
                                        }}
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <DropdownRender />
                    </nav>
                </div>
                {/* navContainer -------------------------------------------*/}
            </div>
            {/* navSection -------------------------------------------*/}
        </>
    )
}