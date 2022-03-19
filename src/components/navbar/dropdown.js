import React, { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import { createPopper } from "@popperjs/core";


const Dropdown = ({ color }) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    const [isOpen, setOpen] = useState(false);
    // bg colors
    let bgColor;
    color === "white"
        ? (bgColor = "bg-blueGray-700")
        : (bgColor = "bg-" + color + "-500");


    return (

        <>
            <div className="xsm:block lg:hidden relative flex justify-end">
                <div className="w-auto flex justify-end relative z-50">
                    <div className="flex justify-end relative w-20 z-50">
                        <div className="btnWrap flex items-center">
                            <span className="xsm:hidden md:block titles cursor-default pr-4 text-white tracking-tight xsm:text-sm md:text-tiny lg:text-md border-r-2 border-white border-opacity-60">Menu</span>
                            <button
                                className={
                                    "flex items-center text-white font-bold uppercase text-sm xsm:mr-0 md:mr-1 outline-none focus:outline-none ease-linear transition-all duration-150" +
                                    bgColor
                                }
                                type="button"
                                ref={btnDropdownRef}
                                onClick={() => {
                                    dropdownPopoverShow
                                        ? closeDropdownPopover()
                                        : openDropdownPopover();
                                }}
                            >
                                {/* <h1
                                onClick={() => setOpen()}
                            >Menu</h1> */}
                                <Hamburger
                                    toggle={setOpen}
                                    size={24}
                                    easing="ease-in"
                                    distance="lg"
                                    duration={0.3}
                                    toggled={isOpen}
                                    color="hsl(0, 100%, 100%)"

                                />
                            </button>
                        </div>
                        <div className="relative z-50">
                            <div
                                ref={popoverDropdownRef}
                                className={
                                    (dropdownPopoverShow ? "block " : "hidden ") +
                                    (color === "white" ? "bg-white " : bgColor + " ") +
                                    "titles bg-white text-base z-50 list-none text-right rounded-b shadow-2xl mt-20"
                                }
                                style={{ minWidth: "12rem" }}
                            >
                                <a
                                    href="/"
                                    className={
                                        "py-4 px-4 border-b border-tBlue50 border-opacity-20 font-normal block w-full whitespace-nowrap bg-transparent " +
                                        (color === "white" ? " text-blueGray-700" : "hover:bg-tBlue50 text-tBlue50 hover:text-white")
                                    }
                                    onClick={e => {
                                        closeDropdownPopover();
                                        setOpen();
                                        let divisions = document.getElementById("divisions");
                                        e.preventDefault();
                                        divisions && divisions.scrollIntoView();
                                    }}
                                >
                                    About
                                </a>
                                <a
                                    href="/"
                                    className={
                                        "xsm:py-4 md:py-5 px-4 border-b border-tBlue50 border-opacity-20 font-normal block w-full whitespace-nowrap bg-transparent " +
                                        (color === "white" ? " text-blueGray-700" : "hover:bg-tBlue50 text-tBlue50 hover:text-white")
                                    }
                                    onClick={e => {
                                        closeDropdownPopover();
                                        setOpen();
                                        let divisions = document.getElementById("divisions");
                                        e.preventDefault();
                                        divisions && divisions.scrollIntoView();
                                    }}
                                >
                                    Divisions
                                </a>
                                <a
                                    href="/"
                                    className={
                                        "xsm:py-4 md:py-5 px-4 border-b border-tBlue50 border-opacity-20 font-normal block w-full whitespace-nowrap bg-transparent " +
                                        (color === "white" ? " text-blueGray-700" : "hover:bg-tBlue50 text-tBlue50 hover:text-white")
                                    }
                                    onClick={e => {
                                        closeDropdownPopover();
                                        setOpen();
                                        let divisions = document.getElementById("divisions");
                                        e.preventDefault();
                                        divisions && divisions.scrollIntoView();
                                    }}
                                >
                                    Services
                                </a>
                                <a
                                    href="/"
                                    className={
                                        "xsm:py-4 md:py-5 px-4 border-b border-tBlue50 border-opacity-20 font-normal block w-full whitespace-nowrap bg-transparent " +
                                        (color === "white" ? " text-blueGray-700" : "hover:bg-tBlue50 text-tBlue50 hover:text-white")
                                    }
                                    onClick={e => {
                                        closeDropdownPopover();
                                        setOpen();
                                        let divisions = document.getElementById("divisions");
                                        e.preventDefault();
                                        divisions && divisions.scrollIntoView();
                                    }}
                                >
                                    Products
                                </a>
                                <a
                                    href="/"
                                    className={
                                        "xsm:py-4 md:py-5 px-4 border-b border-tBlue50 border-opacity-20 font-normal block w-full whitespace-nowrap bg-transparent " +
                                        (color === "white" ? " text-blueGray-700" : "hover:bg-tBlue50 text-tBlue50 hover:text-white")
                                    }
                                    onClick={e => {
                                        closeDropdownPopover();
                                        setOpen();
                                        let clients = document.getElementById("clients");
                                        e.preventDefault();
                                        clients && clients.scrollIntoView();
                                    }}
                                >
                                    Clients
                                </a>
                                <a
                                    href="/"
                                    className={
                                        "xsm:py-4 md:py-5 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                        (color === "white" ? " text-blueGray-700" : "hover:bg-tBlue50 text-tBlue50 hover:text-white")
                                    }
                                    onClick={e => {
                                        closeDropdownPopover();
                                        setOpen();
                                        let divisions = document.getElementById("divisions");
                                        e.preventDefault();
                                        divisions && divisions.scrollIntoView();
                                    }}
                                >
                                    Contact
                                </a>
                                {/* <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                                <a
                                    href="#pablo"
                                    className={
                                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                        (color === "white" ? " text-blueGray-700" : "text-tBlue50")
                                    }
                                    onClick={e => e.preventDefault()}
                                >
                                    Seprated link
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function DropdownRender() {
    return (
        <>
            <Dropdown color="lightBlue" />
        </>
    );
}