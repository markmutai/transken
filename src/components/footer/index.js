import React from 'react';
// import LogoImg from "../../assets/img/logo.png";
import Images from '../../assets/img';

export const Footer = () => {
    return (
        <>

            <div className="relative z-50 xsm:-mb-8 md:-mb-8 2xl:-mb-10">
                <img src={Images.logo} class="mx-auto xsm:h-10 md:h-13 lg:h-10 2xl:h-16" alt="Transken Links Limited" />
            </div>
            <footer class="relative z-40 bg-opacity-90 xsm:border-t-3 md:border-t-4 lg:border-t-6 border-white border-opacity-20 md:px-6 xsm:py-6 xsm:mt-1 md:mt-0 md:py-4 2xl:py-6 dark:bg-gray-800">
                <div className="mx-auto pt-1 xsm:w-full md:w-11/12 lg:w-9/12 2xl:w-3/5 3xl:px-10">
                    <div class="xsm:flex flex-wrap xsm:items-center sm:justify-between xsm:pt-3 md:pt-0">
                        <div className="xsm:w-full md:w-1/2">
                            <a href="https://transken.co.ke/" target="_blank" class="flex items-center xsm:justify-center md:justify-start xsm:mb-0 xsm:w-full md:w-1/2">
                                <h1 className="titles self-center xsm:text-base md:text-md lg:text-lg 2xl:text-xl text-tBlue50 whitespace-nowrap">
                                    Transken Links Limited
                                </h1>

                                {/* <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                            </a>
                            <div className='parTxt flex flex-col xsm:mt-2 md:mt-1 xsm:space-y-3 md:space-y-0 lg:space-y-0 opacity-80 xsm:mb-4 md:mb-0 xsm:text-center md:text-left xsm:text-2xs md:text-xs lg:text-sm'>
                                <a className="text-sky-500 hover:text-sky-900" href="tel:0722794322">
                                    0722794322
                                </a>
                                {/* <strong className="opacity-30">&nbsp;&nbsp;|&nbsp;&nbsp;</strong> */}
                                <a className="text-sky-500 hover:text-sky-900" href="tel:0788250191">
                                    0788250191
                                </a>
                                {/* <br /> */}
                                <a className=" text-sky-500 hover:text-sky-900 xsm:mt-2" href="mailto:info@transken.co.ke">
                                    info@transken.co.ke
                                </a>
                            </div>
                        </div>
                        <div class="parTxt flex flex-wrap border-gray-300 border-opacity-60 xsm:pt-4 md:pt-0 xsm:mt-2 md:mt-0 xsm:border-t md:border-t-0 xsm:text-xsxmini xl:text-sm xsm:w-full md:w-1/4 xl:w-1/3">
                            <div class="xsm:w-45% md:w-1/3 h-12 flex items-center xsm:justify-center md:justify-start">
                                <a
                                    className='text-tBlue50 hover:text-sky-800'
                                    onClick={e => {
                                        let about = document.getElementById("about");
                                        e.preventDefault();
                                        about && about.scrollIntoView();
                                    }}
                                >
                                    About
                                </a>
                            </div>
                            <div className="flex items-center justify-center xsm:w-10% md:w-1/4 h-12">
                                <div className="w-2 h-full border-r border-gray-500 border-opacity-20"></div>
                            </div>
                            <div class="xsm:w-45% md:w-1/3 h-12 flex items-center xsm:justify-center md:justify-end">
                                <a href="" className='text-tBlue50 hover:text-sky-800'>
                                    Privacy
                                </a>
                            </div>
                            <div class="xsm:w-45% md:w-1/3 h-12 flex items-center xsm:justify-center md:justify-start">
                                <a href="" className='text-tBlue50 hover:text-sky-800'>
                                    Licensing
                                </a>
                            </div>
                            <div className="flex items-center justify-center xsm:w-10% md:w-1/4 h-12">
                                <div className="w-2 h-full border-r border-gray-500 border-opacity-20"></div>
                            </div>
                            <div class="xsm:w-45% md:w-1/3 h-12 flex items-center xsm:justify-center md:justify-end">
                                <a
                                    className='text-tBlue50 hover:text-sky-800'
                                    onClick={e => {
                                        let about = document.getElementById("about");
                                        e.preventDefault();
                                        about && about.scrollIntoView();
                                    }}
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr class="border-gray-400 border-opacity-30 sm:mx-auto dark:border-gray-700 xsm:my-4 lg:my-6" />
                    <div className="opacity-80">
                        <span class="parTxt block xsm:text-3xs md:text-xs 2xl:text-xsxmini text-gray-500 sm:text-center dark:text-gray-400">
                            Copyright© 2022,&nbsp;Transken Limited. All Rights Reserved.
                        </span>
                        <span class="parTxt block xsm:text-3xs md:text-xs 2xl:text-xsxmini text-sky-500 sm:text-center dark:text-gray-400"><a href="https://linchpin.co.ke/" target="_blank" class="parTxt hover:underline">
                            Designed by Linchpin</a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};