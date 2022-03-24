import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"
import CookieConsent from "react-cookie-consent";

import { Navbar } from "../../components/navbar";
import { HeaderContact } from "../../components/headercontact";
import { Footer } from "../../components/footer";
// import { HomePage } from "./pages/home";
import MapContainer from "../../components/map";
import Form from "../../components/contact/form.tsx";
import Fonts from "../../components/theme/fonts";
import Colors from "../../components/theme/colors";
import Buttons from "../../components/theme/buttons";
import Images from "../../assets/img/index.js";

export const Home = () => {
    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    const [selected, setSelected] = useState(null)

    const toggle = () => {
        setSelected(!selected);
    }

    return (
        <>
            <motion.div
                transition={{
                    duration: 1.05,
                    ease: "easeInOut"
                }}
                exit={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                initial={{
                    opacity: 0,
                    y: -100
                }}
            >
                <div className="App bg-gradient-to-br from-white_egg via-white_egg to-white_semi">
                    {/* <div className="absolute bottom-0 right-0 ptn-bottom w-full h-40 z-90"></div> */}
                    <div className="absolute top-0 right-0 ptn w-full h-full z-0"></div>
                    <div className="parTxt">
                        <CookieConsent
                            disableButtonStyles="true"
                            location="bottom"
                            containerClasses="xsm:py-3 md:py-2 xsm:px-0 md:px-4 xsm:text-2xs md:text-base"
                            contentClasses="w-full place-self-start"
                            buttonText="I Agree"
                            buttonClasses="transition-all xsm:mt-0 md:mt-1 duration-500 titles xsm:w-screen xsm:h-12 md:w-28 md:h-12 bg-tBlue50 hover:bg-white hover:text-tBlue50 rounded-sm"
                            cookieName="myAwesomeCookieName2"
                            className="parTxt bg-tBlue50"
                            padding={0}
                            style={{ background: "hsl(211, 100%, 10%)" }}
                            // buttonStyle={{ background: "hsl(197, 100%, 46%)", color: "#fff", fontSize: "14px", FontFace: "FrizQuadrataStd-Bold" }}
                            expires={150}
                            hideOnAccept="false"
                        >
                            <p className="">
                                This website uses cookies to enhance the user experience. Confirm your consent to the use of cookies
                            </p>
                        </CookieConsent>
                    </div>
                    <HeaderContact />
                    <Navbar />

                    <div className="contentContainer mx-auto md:w-11/12 lg:w-9/12 2xl:w-3/5 2xlPlus:w-[64%] 3xl:w-3/5 xsm:pb-10 md:pb-12 lg:pb-16">
                        <div className="relative z-30 flex justify-center">
                            <img className="md:relative lg:absolute xsm:w-22 md:w-18 lg:w-16 2xl:w-18 xsm:my-12 lg:-mt-6 2xl:-mt-8" src={Images.logo} alt="TranskenLogo" />
                        </div>
                        <div className="glsWindow relative z-20 border-t-5 border-white border-opacity-80 xsm:rounded-t-3xl lg:rounder-t-2xl lg:rounded-t-4xl xsm:rounded-b-3xl lg:rounded-b-3xl 2xl:rounded-b-4xl shadow-2xl xsm:px-4 md:px-10 lg:px-14 2xl:px-18 xsm:pt-12 md:pt-12 lg:pt-16 xsm:pb-10 md:pb-12 2xl:pb-16">
                            <div className="introContainer flex xsm:pb-6 lg:pb-10 2xl:pb-10">
                                <div className="introInfo mx-auto xsm:w-full lg:w-full xsm:pr-0 lg:px-12 z-20 pt-0 pb-2">
                                    <h2 className="titles xsm:text-center xsm:text-3xl lg:text-4xl 2xl:text-7xl xsm:leading-6 lg:leading-6 2xl:leading-8 text-tBlue50">
                                        Importers and Distributors of
                                        <br />
                                        Food/Feed Ingredients
                                    </h2>
                                    <div className="introTxtContainer">
                                        <p className={`parIntro xsm:px-8 md:px-24 lg:px-14 2xl:px-20 xsm:mt-3 md:mt-4 xl:mt-4 2xl:mt-6 opacity-85 ${Fonts.bodyFontStyle} ${Fonts.parLeading}`}>
                                            Transken Links Limited is a duly registered Company under the Companies Act of Kenya. Established in 2004, our business aims to serve manufacturers &amp; industrialists who require raw materials, bio-chemicals, minerals, vitamins, &amp; feed/food ingredients &amp; fine chemicals for use during manufacture.
                                        </p>
                                    </div>
                                </div>
                                {/* introInfo */}
                                {/* <div className="xsm:hidden lg:block flex xsm:-mt-16 lg:-mt-20 2xl:-mt-32 items-start xsm:w-full lg:w-6/12 p-0 z-0">
                            <div className="absolute -ml-6">
                                <img className="introImg md:w-100 lg:w-110 2xl:w-117 opacity-90" src={VectorArt} alt="Transken Links Limited" />
                            </div>
                        </div> */}

                            </div>
                            {/* introContainer -------------------------------------------*/}
                            <div className="w-full bg-gray-50 bg-opacity-60 md:rounded-xl xl:rounded-2xl 2xl:rounded-3xl detailsContainer xsm:pt-4 md:pt-6 lg:pt-4 lg:pb-0 border-t-5 border-white border-opacity-50 shadow-2xl xsm:text-xsxminiplus lg:text-mini 2xl:text-tinyxsm">
                                <div className="xsm:px-8 md:px-12">
                                    {/* <div className="w-full h-4"></div> */}
                                    <div className="xsm:flex-row md:flex md:px-8 xl:px-4 2xl:px-6">
                                        <div className="xsm:w-full xsm:mb-8 md:mb-0 md:w-6/12 xsm:py-2 lg:py-2 xsm:pr-0 md:pr-12 xsm:border-0 md:border-r-4 border-dotted border-gray-500 border-opacity-20">
                                            <h3 className={`${Fonts.titleMissionVision}`}>
                                                Our Mission
                                            </h3>
                                            <div className="flex mt-2">
                                                <div className={`w-5/12 h-10 border-b -mt-6 ${Colors.borderTitleStyle}`}></div>
                                                <div className="w-2/12 h-10">
                                                    <img className="xsm:w-6 lg:w-7 2xl:w-8 mx-auto opacity-30" src={Images.mission} alt="Transken Mission" />
                                                </div>
                                                <div className={`w-5/12 h-10 border-b -mt-6 ${Colors.borderTitleStyle}`}></div>
                                            </div>
                                            {/* flex_container */}
                                            <p className={`opacity-80 text-gray-700 border-gray-500 border-opacity-30 lg:mt-0 2xl:mt-2 xsm:pt-0 lg:pt-2 xsm:px-0 lg:px-3 ${Fonts.bodyFontStyle} ${Fonts.parLeading}`}>
                                                To be a regional leader in the importation, sales, marketing and distribution of fine chemicals in East Africa.
                                            </p>

                                        </div>
                                        {/* mission_container -------------------------------------------*/}
                                        <div className="xsm:w-full md:w-6/12 py-2 xsm:pl-0 md:pl-12">
                                            <h3 className={`${Fonts.titleMissionVision}`}>
                                                Our Vision
                                            </h3>
                                            <div className="flex mt-2">
                                                <div className={`w-5/12 h-10 border-b -mt-6 ${Colors.borderTitleStyle}`}></div>
                                                <div className="w-2/12 h-10">
                                                    <img className="xsm:w-6 lg:w-7 2xl:w-8 mx-auto opacity-30" src={Images.vision} alt="Transken Vision" />
                                                </div>
                                                <div className={`w-5/12 h-10 border-b -mt-6 ${Colors.borderTitleStyle}`}></div>
                                            </div>
                                            {/* flex_container */}
                                            <p className={`opacity-80 text-gray-700 border-gray-500 border-opacity-30 lg:mt-0 2xl:mt-2 xsm:pt-0 lg:pt-2 xsm:px-0 lg:px-2 2xl:px-4 ${Fonts.bodyFontStyle} ${Fonts.parLeading}`}>
                                                Become market leaders in the distribution of food additives &amp; fine chemicals while adding value &amp; filling the stock gaps on time.
                                            </p>
                                        </div>
                                        {/* vision_container -------------------------------------------*/}
                                    </div>
                                </div>
                                <div id="about" className="whoContainer w-full bg-gradient-to-br from-tBlue50 to-tBlue40 bg-opacity-90 xsm:mt-8 md:mt-12 xsm:pt-5 md:pt-5 2xl:pt-6 xsm:pb-3 md:pb-10 lg:pb-5 xsm:px-4 md:px-8 lg:px-12">
                                    <h3 className={`text-white border-b-2 border-gray-50 border-opacity-30 xsm:pb-4 lg:pb-4 2xl:pb-5 ${Fonts.titleFontStyle}`}>
                                        Who We Are
                                    </h3>
                                    <p className={`xsm:py-6 xl:py-7 2xl:py-8 xsm:px-4 xl:px-7 2xl:px-8 xsm:text-center md:text-justify text-white ${Fonts.bodyFontStyle} ${Fonts.parLeading}`}>
                                        We are also consultants in nutrition/food safety/hygiene standards development &amp; all food security concerns.
                                        <br />
                                        <br />
                                        We pride staff/consultants who are competent in their specific area of expertise. They are trained locally &amp; at international levels. We also work with associate consultants as situations demand.
                                        <br />
                                        <br />
                                        The team is conversant with quality concerns, application of chemicals, health &amp; safety guidelines &amp; technical requirements. We can also set up a laboratory for you &amp; train your staff on quality management systems at competitive rates.
                                    </p>
                                </div>
                                <div id="divisions" className="md:px-10 2xl:px-12">
                                    <div className="divisionSection xsm:mt-1 2xl:mt-2">
                                        <h3 className={`${Fonts.titlePrimary} ${Fonts.titleFontStyle}`}>
                                            Business Divisions
                                        </h3>
                                        <hr className={`w-full border-b ${Colors.borderTitleStyle}`} />
                                        <div className="flex flex-wrap md:flex-row xsm:pt-4 lg:pt-6 2xl:pt-8">
                                            <div className="divisionBox flex flex-col justify-center xsm:w-1/2 md:w-1/4 py-4 border-r border-gray-500 border-opacity-20">
                                                <div className="w-full h-1/2 pt-2">
                                                    <img className="xsm:w-10 md:w-12 xl:w-12 2xl:w-14 mx-auto opacity-40" src={Images.chemicals} alt="" />
                                                </div>
                                                <div className="w-full h-1/2 pt-2">
                                                    <p className={`pt-4 xsm:leading-3 md:leading-5 ${Fonts.bodyFontStyle}`}>Fine Chemicals</p>
                                                </div>
                                            </div>
                                            <div className="divisionBox flex flex-col justify-center xsm:w-1/2 md:w-1/4 xsm:mt-2 md:mt-0 py-4 xsm:border-r-0 md:border-r md:border-t-0 border-gray-500 border-opacity-20">
                                                <div className="w-full h-1/2 pt-2">
                                                    <img className="xsm:w-10 md:w-12 xl:w-12 2xl:w-14 mx-auto opacity-40" src={Images.consult} alt="" />
                                                </div>
                                                <div className="w-full h-1/2 pt-2">
                                                    <p className={`pt-4 xsm:leading-3 md:leading-5 ${Fonts.bodyFontStyle}`}>Consultancy</p>
                                                </div>
                                            </div>
                                            <div className="divisionBox flex flex-col justify-center xsm:w-1/2 md:w-1/4 xsm:mt-2 md:mt-0 py-4 xsm:border-r xsm:border-t md:border-r md:border-t-0 border-gray-500 border-opacity-20">
                                                <div className="w-full h-1/2 pt-2">
                                                    <img className="xsm:w-10 md:w-12 xl:w-12 2xl:w-14 mx-auto opacity-40" src={Images.labtest} alt="" />
                                                </div>
                                                <div className="w-full h-1/2 pt-2">
                                                    <p className={`pt-4 xsm:leading-3 md:leading-5 ${Fonts.bodyFontStyle} ${Fonts.bodyOpacity}`}>Laboratory Testing</p>
                                                </div>
                                            </div>
                                            <div className="divisionBox flex flex-col justify-center xsm:border-t md:border-t-0 border-gray-500 border-opacity-20 xsm:w-1/2 md:w-1/4 xsm:mt-2 md:mt-0 py-4">
                                                <div className="w-full h-1/2 pt-2">
                                                    <img className="xsm:w-10 md:w-12 xl:w-12 2xl:w-14 mx-auto opacity-40" src={Images.stationery} alt="" />
                                                </div>
                                                <div className="w-full h-1/2 pt-2">
                                                    <p className={`pt-4 xsm:leading-3 md:leading-5 ${Fonts.bodyFontStyle} ${Fonts.bodyOpacity}`}>Stationery</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* DivisionSection */}
                                    {/* ServiceSection */}
                                    <div id="services" className="serviceSection">
                                        <h3 className={`${Fonts.titlePrimary} ${Fonts.titleFontStyle}`}>
                                            Services
                                        </h3>
                                        <hr className={`w-full border-b ${Colors.borderTitleStyle}`} />
                                        <div className="servicesInfo flex flex-wrap xsm:pt-6 md:pt-8">
                                            <div className="divisionBox xsm:w-1/2 md:w-1/3 xsm:mb-3 md:mb-0 flex flex-col justify-start py-4 xsm:px-3 md:px-4 xsm:border-r border-gray-500 border-opacity-20">
                                                <div className="w-full h-1/2">
                                                    <img className="xsm:w-10 md:w-12 xl:w-12 2xl:w-14 mx-auto opacity-40" src={Images.quality} alt="" />
                                                </div>
                                                <div className="w-full h-1/2">
                                                    <p className={`xsm:pt-4 xsm:pb-4 md:pb-0 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                        Quality Management
                                                        <br />
                                                        Systems ISO 9001;
                                                        <br />
                                                        2015 Training/Audit
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divisionBox xsm:w-1/2 md:w-1/3 xsm:mb-3 md:mb-0 flex flex-col justify-center py-4 px-4 xsm:border-r-0 md:border-r border-gray-500 border-opacity-20">
                                                <div className="w-full h-1/2">
                                                    <img className="xsm:w-10 md:w-12 xl:w-12 2xl:w-14 mx-auto opacity-40" src={Images.development} alt="Product Development Services" />
                                                </div>
                                                <div className="w-full h-1/2">
                                                    <p className={`xsm:pt-4 xsm:pb-4 md:pb-0 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                        Product
                                                        <br />
                                                        Development
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divisionBox xsm:w-1/2 md:w-1/3 xsm:mb-3 md:mb-0 flex flex-col justify-center py-4 px-4 xsm:border-r xsm:border-t md:border-r-0 md:border-t-0 border-gray-500 border-opacity-20">
                                                <div className="w-full h-1/2">
                                                    <img className="xsm:pt-2 md:pt-0 xsm:w-10 md:w-12 xl:w-12 2xl:w-14 mx-auto opacity-40" src={Images.management} alt="Project Management Services" />
                                                </div>
                                                <div className="w-full h-1/2">
                                                    <p className={`xsm:pt-4 xsm:pb-4 md:pb-0 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                        Project
                                                        <br />
                                                        Management
                                                    </p>
                                                </div>
                                            </div>
                                            <hr className={`w-full xsm:hidden md:block xsm:my-0 md:my-4 md:border-t-2 ${Colors.borderTitleStyle}`} />
                                            <div className="divisionBox xsm:w-1/2 md:w-1/3 xsm:mb-3 md:mb-0 flex flex-col justify-center py-4 px-4 xsm:border-r xsm:border-t md:border-r md:border-t-0 border-gray-500 border-opacity-20">
                                                <div className="w-full h-1/2">
                                                    <img className="xsm:pt-2 md:pt-0 xsm:w-10 md:w-12 xl:w-12 2xl:w-14 mx-auto opacity-40" src={Images.strategy} alt="Project Management Services" />
                                                </div>
                                                <div className="w-full h-1/2">
                                                    <p className={`xsm:pt-4 xsm:pb-4 md:pb-0 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                        Strategic
                                                        <br />
                                                        Planning
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divisionBox xsm:w-1/2 md:w-1/3 flex flex-col justify-center py-4 px-4 xsm:border-r xsm:border-t md:border-r md:border-t-0 border-gray-500 border-opacity-20">
                                                <div className="w-full h-1/2">
                                                    <img className="xsm:pt-2 md:pt-0 xsm:w-10 md:w-12 xl:w-12 2xl:w-14 mx-auto opacity-40" src={Images.training} alt="HACCP Training" />
                                                </div>
                                                <div className="w-full h-1/2">
                                                    <p className={`xsm:pt-4 xsm:pb-4 md:pb-0 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                        HACCP Training
                                                        <br />
                                                        &amp; Hygiene Audits
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divisionBox xsm:w-1/2 md:w-1/3 flex flex-col justify-center py-4 px-4 xsm:border-t md:border-r-0 md:border-t-0 border-gray-500 border-opacity-20">
                                                <div className="w-full h-1/2">
                                                    <img className="xsm:pt-2 md:pt-0 xsm:w-10 md:w-12 xl:w-12 2xl:w-14 mx-auto opacity-40" src={Images.microscope} alt="Laboratory Test Services" />
                                                </div>
                                                <div className="w-full h-1/2">
                                                    <p className={`xsm:pt-4 xsm:pb-4 md:pb-0 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                        Laboratory Tests
                                                        <br />
                                                        For Clients
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="products" className="productSection">
                                        <h3 className={`${Fonts.titlePrimary} ${Fonts.titleFontStyle}`}>
                                            Key Products
                                        </h3>
                                        <hr className={`w-full border-b ${Colors.borderTitleStyle}`} />
                                        <div className="servicesInfo xsm:pt-2 2xl:pt-4">
                                            <div className="divisionBox transition duration-300 w-1/3 flex flex-col justify-start xsm:py-3 2xl:py-5 xsm:px-3 2xl:px-4 border-r border-gray-500 border-opacity-20 hover:shadow-2xl">
                                                {/* <div className="w-full h-1/2">
                                        <img className="w-14 mx-auto opacity-40" src={QualityIco} alt="" />
                                    </div> */}
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <p className={`xsm:py-3 md:py-4 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                        Choline
                                                        <br />
                                                        Chloride
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divisionBox transition duration-300 w-1/3 flex flex-col justify-start xsm:py-3 2xl:py-5 xsm:px-3 2xl:px-4 border-r border-gray-500 border-opacity-20 hover:shadow-2xl">
                                                {/* <div className="w-full h-1/2">
                                        <img className="w-14 mx-auto opacity-40" src={DevelopmentIco} alt="" />
                                    </div> */}
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <p className={`xsm:py-3 md:py-4 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                        Lysine
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divisionBox transition duration-300 w-1/3 flex flex-col justify-start xsm:py-3 2xl:py-5 xsm:px-3 2xl:px-4 hover:shadow-2xl">
                                                {/* <div className="w-full h-1/2">
                                        <img className="w-14 mx-auto opacity-40" src={ManagementIco} alt="" />
                                    </div> */}
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <p className={`xsm:py-3 md:py-4 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                        Citric
                                                        <br />
                                                        Acid
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`transition duration-300 ${selected ? 'opacity-0' : 'opacity-100'}`}>
                                            <div className="w-full h-1 border-t-2 -mb-1 border-gray-300 border-opacity-50" />
                                        </div>

                                        <div className={`transition-all duration-300 overflow-hidden ${selected ? 'xsm:h-88 md:h-90 lg:h-92' : 'h-0'}`}>
                                            <div className="w-full h-1 mt-2 border-t border-gray-300 border-opacity-50"></div>
                                            <div className="servicesInfo xsm:pt-4 md:pt-3 2xl:pt-0">
                                                <div className="divisionBox transition duration-300 w-1/3 flex flex-col justify-start xsm:py-3 2xl:py-5 xsm:px-3 2xl:px-4 border-r border-gray-500 border-opacity-20 hover:shadow-2xl">
                                                    {/* <div className="w-full h-1/2">
                                        <img className="w-14 mx-auto opacity-40" src={QualityIco} alt="" />
                                    </div> */}
                                                    <div className="w-full h-full flex items-end justify-center">
                                                        <p className={`xsm:py-3 md:py-4 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                            Sodium
                                                            <br />
                                                            Bicarbonate
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="divisionBox transition duration-300 w-1/3 flex flex-col justify-start xsm:py-3 2xl:py-5 xsm:px-3 2xl:px-4 border-r border-gray-500 border-opacity-20 hover:shadow-2xl">
                                                    {/* <div className="w-full h-1/2">
                                        <img className="w-14 mx-auto opacity-40" src={DevelopmentIco} alt="" />
                                    </div> */}
                                                    <div className="w-full h-full flex items-end justify-center">
                                                        <p className={`xsm:py-3 md:py-4 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                            Dicalcium
                                                            <br />
                                                            Phosphate
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="divisionBox transition duration-300 w-1/3 flex flex-col justify-start xsm:py-3 2xl:py-5 xsm:px-3 2xl:px-4 hover:shadow-2xl">
                                                    {/* <div className="w-full h-1/2">
                                        <img className="w-14 mx-auto opacity-40" src={ManagementIco} alt="" />
                                    </div> */}
                                                    <div className="w-full h-full flex items-end justify-center">
                                                        <p className={`xsm:py-3 md:py-4 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                            Sodium Acid
                                                            <br />
                                                            Pyrophosphate
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* divider */}
                                                <div className="w-full h-1 my-2 border-t border-gray-300 border-opacity-50"></div>
                                                {/* divider */}
                                                <div className="divisionBox transition duration-300 w-1/3 flex flex-col justify-start xsm:py-3 2xl:py-5 xsm:px-3 2xl:px-4 border-r border-gray-500 border-opacity-20 hover:shadow-2xl">
                                                    {/* <div className="w-full h-1/2">
                                        <img className="w-14 mx-auto opacity-40" src={QualityIco} alt="" />
                                    </div> */}
                                                    <div className="w-full h-full flex items-end justify-center">
                                                        <p className={`xsm:py-3 md:py-4 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                            Minerals
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="divisionBox transition duration-300 w-1/3 flex flex-col justify-start xsm:py-3 2xl:py-5 xsm:px-3 2xl:px-4 border-r border-gray-500 border-opacity-20 hover:shadow-2xl">
                                                    {/* <div className="w-full h-1/2">
                                        <img className="w-14 mx-auto opacity-40" src={DevelopmentIco} alt="" />
                                    </div> */}
                                                    <div className="w-full h-full flex items-end justify-center">
                                                        <p className={`xsm:py-3 md:py-4 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                            Vitamins
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="divisionBox transition duration-300 w-1/3 flex flex-col justify-start xsm:py-3 2xl:py-5 xsm:px-3 2xl:px-4 hover:shadow-2xl">
                                                    {/* <div className="w-full h-1/2">
                                        <img className="w-14 mx-auto opacity-40" src={ManagementIco} alt="" />
                                    </div> */}
                                                    <div className="w-full h-full flex items-end justify-center">
                                                        <p className={`xsm:py-3 md:py-4 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                            Sodium
                                                            <br />
                                                            Carbonate
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* divider */}
                                                <div className="w-full h-1 my-2 border-t border-gray-300 border-opacity-50"></div>
                                                {/* divider */}
                                                <div className="divisionBox transition duration-300 w-1/3 flex flex-col justify-start xsm:py-3 2xl:py-5 xsm:px-3 2xl:px-4 border-r border-gray-500 border-opacity-20 hover:shadow-2xl">
                                                    {/* <div className="w-full h-1/2">
                                        <img className="w-14 mx-auto opacity-40" src={QualityIco} alt="" />
                                    </div> */}
                                                    <div className="w-full h-full flex items-end justify-center">
                                                        <p className={`xsm:py-3 md:py-4 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                            Food
                                                            <br />
                                                            Colours
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="divisionBox transition duration-300 w-1/3 flex flex-col justify-start xsm:py-3 2xl:py-5 xsm:px-3 2xl:px-4 border-r border-gray-500 border-opacity-20 hover:shadow-2xl">
                                                    {/* <div className="w-full h-1/2">
                                        <img className="w-14 mx-auto opacity-40" src={DevelopmentIco} alt="" />
                                    </div> */}
                                                    <div className="w-full h-full flex items-end justify-center">
                                                        <p className={`xsm:py-3 md:py-4 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>
                                                            Ascorbic
                                                            <br />
                                                            Acid
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="divisionBox transition duration-300 w-1/3 flex flex-col justify-start xsm:py-3 2xl:py-5 xsm:px-3 2xl:px-4">
                                                    {/* <div className="w-full h-1/2">
                                        <img className="w-14 mx-auto opacity-40" src={ManagementIco} alt="" />
                                    </div> */}
                                                    <div className="w-full h-full flex items-end justify-center">
                                                        <p className={`xsm:py-3 md:py-4 ${Fonts.bodyFontStyle} ${Fonts.bodyText} ${Fonts.bodyOpacity}`}>

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <button className={`sm:rounded-b-none md:rounded-b-md mb-2 xsm:w-full md:w-5/12 2xl:w-7/12 mx-auto ${Buttons.buttonPrimary}`} onClick={() => toggle()}>{selected ? 'Show Less -' : 'More Products +'}</button>
                                        </div>
                                    </div>

                                </div>
                                {/* <ImageSlider slides={SliderData}/> */}
                                <div id="gallery" className="galleryContainer">

                                    <div className="xsm:pt-4 md:pt-8 2xl:pt-10 xsm:px-3 md:px-10 2xl:px-12">
                                        <div id="carouselExampleCaptions" className="carousel slide relative border-2 border-gray-300 border-opacity-30 rounded-md xsm:pt-0 md:pt-8" data-bs-ride="carousel">
                                            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 xsm:mb-3 md:mb-7">
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleCaptions"
                                                    data-bs-slide-to="0"
                                                    className="active"
                                                    aria-current="true"
                                                    aria-label="Slide 1"
                                                ></button>
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleCaptions"
                                                    data-bs-slide-to="1"
                                                    aria-label="Slide 2"
                                                ></button>
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleCaptions"
                                                    data-bs-slide-to="2"
                                                    aria-label="Slide 3"
                                                ></button>
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleCaptions"
                                                    data-bs-slide-to="3"
                                                    aria-label="Slide 4"
                                                ></button>
                                            </div>
                                            <div className="carousel-inner relative w-full overflow-hidden">
                                                <div className="carousel-item active relative float-left w-full">
                                                    <img
                                                        src={Images.choline}
                                                        className="block h-full mx-auto"
                                                        alt="..."
                                                    />
                                                    <div className="carousel-caption hidden bottom-0 bg-white shadow-xl text-gray-500 rounded-md px-6 pb-10 mb-4 md:block absolute text-center">
                                                        <h5 className={`${Fonts.titleFontStyle}`}>
                                                            Choline Cloride
                                                        </h5>
                                                        <p className="parTxt xsm:text-tinyxsm 2xl:text-base opacity-75">
                                                            60% Corn Cob Feed Grade
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item relative float-left w-full">
                                                    <img
                                                        src={Images.dicalcium}
                                                        className="block h-full mx-auto"
                                                        alt="Dicalcium Phosphate"
                                                    />
                                                    <div className="carousel-caption hidden bottom-0 bg-white shadow-xl text-gray-500 rounded-md px-6 pb-10 mb-4 md:block absolute text-center">
                                                        <h5 className={`${Fonts.titleFontStyle}`}>
                                                            Dicalcium Phosphate
                                                        </h5>
                                                        <p className="parTxt xsm:text-tiny 2xl:text-base opacity-80">
                                                            18% Feed Grade
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item relative float-left w-full">
                                                    <img
                                                        src={Images.lysine}
                                                        className="block h-full mx-auto"
                                                        alt="Lysine"
                                                    />
                                                    <div className="carousel-caption hidden bottom-0 bg-white shadow-xl text-gray-500 rounded-md px-6 pb-10 mb-4 md:block absolute text-center">
                                                        <h5 className={`${Fonts.titleFontStyle}`}>
                                                            Lysine HCL
                                                        </h5>
                                                        <p className="parTxt xsm:text-tiny 2xl:text-base opacity-80">
                                                            98.5% Feed Grade
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item relative float-left w-full">
                                                    <img
                                                        src={Images.tableproduce}
                                                        className="block h-full mx-auto"
                                                        alt="Transken Chemical Products"
                                                    />
                                                    <div className="carousel-caption hidden bottom-0 bg-white shadow-xl text-gray-500 rounded-md px-6 pb-10 mb-4 md:block absolute text-center">
                                                        <h5 className={`${Fonts.titleFontStyle}`}>
                                                            Lorem Ipsum
                                                        </h5>
                                                        <p className="parTxt xsm:text-tiny 2xl:text-base opacity-80">
                                                            Sit amet consectetur adipisicing elit.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className={`carousel-control-prev rounded-r-md left-0 ${Buttons.buttonGallery}`}
                                                type="button"
                                                data-bs-target="#carouselExampleCaptions"
                                                data-bs-slide="prev"
                                            >
                                                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button
                                                className={`carousel-control-next rounded-l-md right-0 ${Buttons.buttonGallery}`}
                                                type="button"
                                                data-bs-target="#carouselExampleCaptions"
                                                data-bs-slide="next"
                                            >
                                                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div id="clients" className="clientSection xsm:px-0 md:px-10 lg:px-12">
                                    <h3 className={`${Fonts.titlePrimary} ${Fonts.titleFontStyle}`}>
                                        Our Clients
                                    </h3>
                                    <hr className={`w-full border-b ${Colors.borderTitleStyle}`} />
                                    <div className="servicesInfo flex flex-wrap xsm:pt-3 md:pt-4 xsm:px-3 md:px-10 2xl:px-12">
                                        <div className="divisionBox xsm:w-1/2 md:w-1/3 xsm:mb-3 md:mb-0 flex flex-col justify-start xsm:py-10 md:py-4 xsm:px-3 md:px-4 xsm:border-r border-gray-500 border-opacity-20">
                                            <div className="w-full h-full">
                                                <img className="w-20 m-auto opacity-40" src={Images.agrovet} alt="Agrovet" />
                                            </div>
                                        </div>
                                        <div className="divisionBox xsm:w-1/2 md:w-1/3 xsm:mb-3 md:mb-0 flex flex-col justify-center xsm:py-10 md:py-4 px-4 xsm:border-r-0 md:border-r border-gray-500 border-opacity-20">
                                            <div className="w-full h-full flex items-center">
                                                <img className="w-24 m-auto opacity-40" src={Images.bimeda} alt="Bimeda" />
                                            </div>
                                        </div>
                                        <div className="divisionBox xsm:w-1/2 md:w-1/3 xsm:mb-3 md:mb-0 flex flex-col justify-center xsm:py-10 md:py-4 px-4 xsm:border-r xsm:border-t md:border-r-0 md:border-t-0 border-gray-500 border-opacity-20">
                                            <div className="w-full h-full flex items-center">
                                                <img className="w-20 m-auto opacity-40" src={Images.eagle} alt="Eagle" />
                                            </div>
                                        </div>
                                        <hr className={`w-full xsm:hidden md:block xsm:my-0 md:my-4 md:border-t-2 ${Colors.borderTitleStyle}`} />
                                        <div className="divisionBox xsm:w-1/2 md:w-1/3 xsm:mb-3 md:mb-0 flex flex-col justify-center xsm:border-r-0 xsm:border-t md:border-r md:border-t-0 border-gray-500 border-opacity-20 xsm:py-10 md:py-4 px-4">
                                            <div className="w-full h-full flex items-center">
                                                <img className="w-24 m-auto opacity-40" src={Images.nutrimix} alt="Nutrimix" />
                                            </div>
                                        </div>
                                        <div className="divisionBox xsm:w-1/2 md:w-1/3 flex flex-col justify-center xsm:py-10 md:py-4 px-4 xsm:border-r xsm:border-t md:border-r md:border-t-0 border-gray-500 border-opacity-20">
                                            <div className="w-full h-full flex items-center">
                                                <img className="w-16 m-auto opacity-40" src={Images.pembe} alt="pembe" />
                                            </div>
                                        </div>
                                        <div className="divisionBox xsm:w-1/2 md:w-1/3 flex flex-col justify-center xsm:py-10 md:py-4 px-4 xsm:border-t md:border-r-0 md:border-t-0 border-gray-500 border-opacity-20">
                                            <div className="w-full h-full flex items-center">
                                                <img className="w-16 m-auto opacity-40" src={Images.unga} alt="Unga House Powder" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="contact" className="whoContainer w-full bg-white bg-opacity-90 border-t-2 border-gray-300 border-opacity-30 mt-10">
                                    <div className="xsm:px-0 md:px-12">
                                        <Form />
                                    </div>
                                    <div className="xsm:border-4 md:border-8 lg:border-10 border-white xsm:rounded-b-sm md:rounded-b-lg overflow-hidden">
                                        <MapContainer />
                                    </div>
                                </div>
                                {/* <div className="whoContainer w-full bg-white bg-opacity-90 border-2 border-gray-300 border-opacity-30 mt-1">
                            <MapContainer />
                        </div> */}
                            </div>
                            {/* whitebox */}
                        </div>
                    </div>
                    <div className="footerSection mx-auto w-full xsm:pt-2 lg:pt-4">
                        <Footer />
                    </div>
                </div>
            </motion.div>
        </>
    )
}