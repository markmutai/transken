import React from "react";
import images from "../../assets/img";
// import phoneIco from "../../assets/img/phone.png";
// import mailIco from "../../assets/img/mail.png";
// import farmLand from "../../assets/img/farmland.webp";


export const HeaderContact = () => {
    return (
        <div>
            <div className="absolute w-full h-full z-10">
                <img className="absolute top-0 right-0 xsm:h-screen md:h-2/3 lg:h-auto xsm:w-auto xsm:object-cover md:w-full xl:w-11/12 2xl:w-11/12" src={images.farmland} alt="" />
            </div>
            <header className="relative flex w-full xsm:h-10 lg:h-12 p-0 bg-gray-50 xsm:bg-opacity-95 md:bg-opacity-80 shadow-2xl z-10">
                <div className="flex parTxt w-1/2 h-full items-center justify-start text-gray-700 opacity-90 xsm:tracking-normal 2xl:tracking-normalPlus xsm:text-3xs xl:text-xs 2xl:text-xsxmini">
                    <div className="xsm:h-4 md:h-5 2xl:h-6 xsm:hidden md:block flex items-center justify-center h-1/2 border-r border-tBlue40 border-opacity-30 px-2">
                        <img className="h-full opacity-95" src={images.phone} alt="Transken Links Phone Number" />
                    </div>
                    <div className="flex h-full items-center justify-start xsm:pl-3 md:pl-4">
                        <a className="text-sky-500 hover:text-sky-900" href="tel:0722794322">
                            0722794322
                        </a>
                        <strong className="opacity-30">&nbsp;|&nbsp;</strong>
                        <a className="text-sky-500 hover:text-sky-900" href="tel:0788250191">
                            0788250191
                        </a>
                    </div>
                </div>
                <div className="flex parTxt w-1/2 h-full items-center justify-end text-gray-700 opacity-90 xsm:tracking-normal 2xl:tracking-normalPlus xsm:text-2xs lg:text-xs 2xl:text-xsxmini">
                    <div className="flex h-full items-center justify-end xsm:pr-2 md:pr-4">
                        <a className="text-sky-500 hover:text-sky-900" href="mailto:info@transken.co.ke">
                            info@transken.co.ke
                        </a>
                    </div>
                    <div className="xsm:h-4 md:h-5 2xl:h-6 flex items-center justify-center xsm:hidden md:block border-l border-tBlue40 border-opacity-30 px-2.5">
                        <img className="my-auto h-full opacity-95" src={images.mail} alt="Transken Links Email" />
                    </div>
                </div>
            </header>

        </div>
    )
}