import React from "react";
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import DropdownRender from "./dropdown";

// import LogoImg from "../../assets/img/logo.png";
// import LogoTxt from "../../assets/img/logo_txt.png";

export const Navbar = () => {
    const menuItems = "transition-all duration-400 rounded-sm hover:cursor-pointer hover:bg-white hover:text-tBlue50 lg:px-4 2xl:px-5 py-2";

    return (
        <>
            {/* <HeaderContact /> */}
            <div className="navSection mx-auto md:w-11/12 lg:w-9/12 2xl:w-3/5 2xlPlus:w-[64%] 3xl:w-3/5 xsm:pb-0 lg:pb-16 xl:pb-6 xsm:mt-0 md:mt-4">
                <div className="navContainer flex items-center justify-center lg:pt-8 xl:pt-8 xsm:pb-0 lg:pb-0 xl:pb-16 px-0">
                    <nav className="menu flex items-center w-full xsm:h-12 md:h-14 lg:h-16 xl:h-18 bg-tBlue50 bg-opacity-95 xsm:rounded-none md:rounded-mdPlus lg:rounded-xl xsm:shadow-md md:shadow-xl lg:shadow-2xl opacity-100 md:border-3 lg:border-4 border-white border-opacity-95 xsm:pl-2 md:pl-4 xl:pl-4 lg:pr-4 2xl:pr-3 z-50">
                        <div className="logoContainer flex items-center w-1/2 h-full">
                            {/* <img className="h-4.5 ml-6" src={LogoTxt} alt="TranskenLogo" /> */}
                            <HashLink
                                to="/"
                                className="titles xsm:ml-1 md:ml-2 lg:ml-1 2xl:ml-2 xsm:text-tiny md:text-base lg:text-xl text-white">
                                Transken Links Limited
                            </HashLink>
                        </div>
                        <div className="xsm:hidden lg:block menuContainer w-1/2 h-full">
                            <ul className="transition-all duration-400 menuList cursor-default inline-flex list-none w-full h-full text-white items-center justify-end xsm:space-x-0 lg:space-x-0 xl:space-x-0 2xl:space-x-2 xsm:text-sm lg:text-base 2xl:text-md">
                                {/* <li className="transition-all duration-400 rounded-sm hover:cursor-pointer hover:bg-white hover:text-tBlue50 px-5 py-2">
                                    <a href="/"
                                        onClick={e => {
                                            let products = document.getElementById("products");
                                            e.preventDefault();
                                            products && products.scrollIntoView();
                                        }}
                                    >
                                        Home
                                    </a>
                                </li> */}
                                <div className={menuItems}>
                                    <HashLink to="/">
                                        Home
                                    </HashLink>
                                </div>
                                <li className={menuItems}>
                                    <HashLink
                                        to="/#about"
                                    >
                                        About
                                    </HashLink>
                                </li>
                                {/* <li className="transition-all duration-400 rounded-sm hover:cursor-pointer hover:bg-white hover:text-tBlue50 lg:px-4 2xl:px-5 py-2">
                                    <a href="/"
                                        onClick={e => {
                                            let divisions = document.getElementById("divisions");
                                            e.preventDefault();
                                            divisions && divisions.scrollIntoView();
                                        }}
                                    >
                                        Divisions
                                    </a>
                                </li> */}
                                <li className={menuItems}>
                                    <HashLink
                                        to="/#divisions"
                                    >
                                        Divisions
                                    </HashLink>
                                </li>
                                <li className={menuItems}>
                                    <HashLink
                                        to="/#services"
                                    >
                                        Services
                                    </HashLink>
                                </li>
                                <li className={menuItems}>
                                    <HashLink
                                        to="/#products"
                                    >
                                        Products
                                    </HashLink>
                                </li>
                                <li className={menuItems}>
                                    <HashLink
                                        to="/#clients"
                                    >
                                        Clients
                                    </HashLink>
                                </li>
                                <li className={menuItems}>
                                    <HashLink
                                        to="/#contact"
                                    >
                                        Contact
                                    </HashLink>
                                </li>
                            </ul>
                        </div>
                        <div className="xsm:block lg:hidden w-1/2 flex p-0 justify-end">
                            <DropdownRender />
                        </div>
                    </nav>
                </div>
                {/* navContainer -------------------------------------------*/}
            </div>
            {/* navSection -------------------------------------------*/}
        </>
    )
}