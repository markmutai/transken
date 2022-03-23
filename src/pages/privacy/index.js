import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

import { Navbar } from "../../components/navbar";
import { HeaderContact } from "../../components/headercontact";
import { Footer } from "../../components/footer";
import MapContainer from "../../components/map";
import Form from "../../components/contact/form.tsx";
import Fonts from "../../components/theme/fonts";
import Colors from "../../components/theme/colors";
import Buttons from "../../components/theme/buttons";
import Images from "../../assets/img/index.js";

export const Privacy = () => {
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

    const navigate = useNavigate();

    return (
        <>
            <motion.div
                transition={{
                    duration: 1,
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
                    <HeaderContact />
                    <Navbar />
                    <div className="contentContainer mx-auto md:w-11/12 lg:w-9/12 2xl:w-3/5 2xlPlus:w-[64%] 3xl:w-3/5 xsm:pb-10 md:pb-12 lg:pb-16">
                        <div className="relative z-30 flex justify-center">
                            <img className="md:relative lg:absolute xsm:w-22 md:w-18 lg:w-16 2xl:w-18 xsm:my-12 lg:-mt-6 2xl:-mt-8" src={Images.logo} alt="TranskenLogo" />
                        </div>
                        <div className="glsWindow relative z-20 border-t-5 border-white border-opacity-80 xsm:rounded-t-3xl lg:rounder-t-2xl lg:rounded-t-4xl xsm:rounded-b-3xl lg:rounded-b-3xl 2xl:rounded-b-4xl shadow-2xl xsm:px-4 md:px-10 lg:px-14 2xl:px-18 xsm:pt-12 md:pt-7 lg:pt-7 xsm:pb-10 md:pb-12 2xl:pb-16">
                            <div className="introContainer flex-row">
                                <div className="introInfo mx-auto xsm:w-full lg:w-full xsm:pr-0 lg:px-12 z-20 pt-0 pb-7">
                                    <h2 className="titles xsm:text-center xsm:text-3xl lg:text-4xl 2xl:text-7xl xsm:leading-6 lg:leading-6 2xl:leading-8 text-tBlue50">
                                        Privacy
                                    </h2>
                                    {/* <div className="introTxtContainer">
                                        <p className={`parIntro xsm:px-8 md:px-24 lg:px-14 2xl:px-20 xsm:mt-3 md:mt-4 xl:mt-4 2xl:mt-6 opacity-85 ${Fonts.bodyFontStyle} ${Fonts.parLeading}`}>
                                            Our Privacy
                                        </p>
                                    </div> */}
                                </div>
                                {/* <div className="w-full">
                                    <button className={`rounded-t-md mt-2 px-12 xsm:py-3 2xl:py-4 xsm:w-full md:w-5/12 2xl:w-7/12 ${Buttons.buttonPrimary}`} onClick={() => navigate(-1)}>
                                        Back
                                    </button>
                                </div> */}
                            </div>
                            {/* introContainer -------------------------------------------*/}
                            <div className="w-full bg-gray-50 bg-opacity-60 md:rounded-xl xl:rounded-2xl 2xl:rounded-3xl detailsContainer pt-0 pb-0 border-t-5 border-white border-opacity-50 shadow-2xl xsm:text-xsxminiplus lg:text-mini 2xl:text-tinyxsm">
                                <div className="md:px-10 2xl:px-12">
                                    <h3 className={`${Fonts.titlePrivacy} ${Fonts.titleFontStyle}`}>
                                        Our Privacy Policy
                                    </h3>
                                    <hr className={`w-full border-b ${Colors.borderTitleStyle}`} />
                                    <div className="flex flex-wrap md:flex-row xsm:py-4 lg:py-4 2xl:py-8 px-12">
                                        <p className={`parIntro xsm:px-8 md:px-10 lg:px-14 2xl:px-20 xsm:my-3 md:my-4 xl:my-4 2xl:my-6 opacity-85 ${Fonts.bodyFontStyle} ${Fonts.parLeading}`}>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eius eligendi nemo excepturi perspiciatis, accusantium et expedita. Eos officiis, ad, necessitatibus amet quod suscipit sint corrupti, voluptas ipsam quidem voluptatem!
                                            Magnam aut, suscipit fuga praesentium soluta fugiat incidunt tempora vel quia illum quisquam. Labore voluptatibus odio officia modi esse unde corporis voluptate! Non doloribus suscipit aspernatur accusamus sit vero cumque.
                                            Provident ex cum dolore, accusamus esse praesentium nulla culpa aliquam ipsa quos! Fuga voluptates quidem harum earum sint nisi nihil perspiciatis culpa facere, quam, laborum est quis cum nemo voluptate!
                                            <br />
                                            <br />
                                            Quam explicabo deleniti, asperiores voluptatum sequi eveniet excepturi, illum, iste obcaecati ea aut minima perspiciatis? Odio nesciunt atque hic? Fugiat suscipit a nam dicta explicabo doloremque possimus reiciendis officia quos!
                                            Nesciunt magnam, quisquam deleniti molestias eligendi facilis maxime? Voluptatum ipsa quasi harum non, doloremque atque omnis sapiente eius modi iusto animi consequatur, corrupti quia? Dolor cumque consequuntur quas a cum.
                                            <br />
                                            <br />
                                            Minus officia inventore aspernatur sunt et! Ipsam ab cupiditate quaerat repudiandae molestiae numquam, minus velit ut impedit earum sint sed veniam ad mollitia iure aliquid ipsa tempore? Deleniti, exercitationem nobis.
                                            Ipsum ratione inventore officia vitae voluptas, necessitatibus perferendis molestiae fugit vero. Error quibusdam distinctio quia commodi, repellendus praesentium facere, voluptates fuga omnis eius, expedita suscipit. Nobis mollitia velit earum veniam!
                                            Nostrum eligendi voluptatem pariatur error molestiae facere similique accusantium reprehenderit minus molestias cum animi totam maiores ipsam ullam, optio, beatae suscipit quis eum rerum ut inventore quae. Vero, consequatur ab.
                                            Quae vitae repellendus excepturi, ex laborum fugiat animi ut sint cum! Molestias animi, totam natus qui deleniti ea veritatis. Commodi qui eos itaque dolorem suscipit voluptates dignissimos fugit laudantium deleniti.
                                            Similique temporibus eius provident, explicabo fuga dolores sit maiores eveniet quas dolorem, odit sunt deleniti aperiam! Similique minima debitis, odit vitae soluta aspernatur alias ullam possimus eligendi eius nesciunt velit?
                                        </p>
                                    </div>
                                </div>
                                {/* <ImageSlider slides={SliderData}/> */}
                                <div id="contact" className="whoContainer w-full md:rounded-xl xl:rounded-2xl 2xl:rounded-3xl bg-white bg-opacity-90 border-t-2 border-gray-300 border-opacity-30 mt-0">
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
                    <div className="footerSection mx-auto w-full xsm:pt-2 lg:pt-0">
                        <Footer />
                    </div>
                </div>
            </motion.div>
        </>
    )
}