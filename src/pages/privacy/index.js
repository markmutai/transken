import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

import { Navbar } from "../../components/navbar";
import { HeaderContact } from "../../components/headercontact";
import { Footer } from "../../components/footer";
import MapContainer from "../../components/map";
import Form from "../../components/contact/form.tsx";
import Fonts from "../../components/theme/fonts";
import Colors from "../../components/theme/colors";
// import Buttons from "../../components/theme/buttons";
import Images from "../../assets/img/index.js";

export const Privacy = () => {
    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    // const [selected, setSelected] = useState(null)

    // const toggle = () => {
    //     setSelected(!selected);
    // }

    // const navigate = useNavigate();

    const privacySection = "flex flex-wrap md:flex-row xsm:py-4 lg:py-4 2xl:py-8 xsm:px-2 md:px-12";

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
                    <HeaderContact />
                    <Navbar />
                    <div className="contentContainer mx-auto md:w-11/12 lg:w-9/12 2xl:w-3/5 2xlPlus:w-[64%] 3xl:w-3/5 xsm:pb-10 md:pb-12 lg:pb-16">
                        <div className="relative z-30 flex justify-center">
                            <img className="md:relative lg:absolute xsm:w-22 md:w-18 lg:w-16 2xl:w-16 xsm:my-12 lg:-mt-6 2xl:-mt-8" src={Images.logo} alt="TranskenLogo" />
                        </div>
                        <div className="glsWindow relative z-20 border-t-5 border-white border-opacity-80 xsm:rounded-t-3xl lg:rounder-t-2xl lg:rounded-t-4xl xsm:rounded-b-3xl lg:rounded-b-3xl 2xl:rounded-b-4xl shadow-2xl xsm:px-4 md:px-10 lg:px-14 2xl:px-18 xsm:pt-5 md:pt-7 lg:pt-10 xsm:pb-10 md:pb-12 2xl:pb-16">
                            <div className="introContainer flex-row">
                                <div className="introInfo mx-auto xsm:w-full lg:w-full xsm:pr-0 lg:px-12 z-20 pt-0 xsm:pb-8 md:pb-10 xl:pb-10">
                                    <h2 className="titles xsm:text-center xsm:text-3xl lg:text-4xl 2xl:text-7xl xsm:leading-6 lg:leading-6 2xl:leading-8 text-tBlue50">
                                        Privacy
                                    </h2>
                                    <div className="introTxtContainer">
                                        <p className={`parIntro xsm:px-4 md:px-36 lg:px-14 2xl:px-20 xsm:mt-3 md:mt-6 xl:mt-4 2xl:mt-6 opacity-85 ${Fonts.bodyFontStyle} ${Fonts.parLeading}`}>
                                            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                                            <br />
                                            <br />
                                            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                                        </p>
                                    </div>
                                </div>
                                {/* <div className="w-full">
                                    <button className={`rounded-t-md mt-2 px-12 xsm:py-3 2xl:py-4 xsm:w-full md:w-5/12 2xl:w-7/12 ${Buttons.buttonPrimary}`} onClick={() => navigate(-1)}>
                                        Back
                                    </button>
                                </div> */}
                            </div>
                            {/* introContainer -------------------------------------------*/}
                            <div className="w-full bg-gray-50 bg-opacity-60 md:rounded-xl xl:rounded-2xl 2xl:rounded-3xl detailsContainer pt-0 pb-0 border-t-5 border-white border-opacity-50 shadow-2xl xsm:text-xsxminiplus lg:text-mini 2xl:text-tinyxsm">
                                <div className="md:px-10 2xl:px-10">
                                    <h3 className={`${Fonts.titlePrivacy} ${Fonts.titleFontStyle}`}>
                                        Interpretation &amp; Definitions
                                    </h3>
                                    <hr className={`w-full border-b ${Colors.borderTitleStyle}`} />
                                    <div className={privacySection}>
                                        <p className={`${Fonts.privacyInfo} ${Fonts.bodyFontStyle} ${Fonts.parLeading}`}>
                                            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                                        </p>
                                        <p className={`text-left xsm:px-4 md:px-10 lg:px-14 2xl:px-10 opacity-85 ${Fonts.bodyFontStyle} ${Fonts.parLeading}`}>
                                            For the purposes of this Privacy Policy:
                                            <br />
                                            <br />
                                            <ul className="list-disc pl-5">
                                                <li className="xsm:pl-1 md:pl-2"><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                                                <li className="xsm:pl-1 md:pl-2"><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Transken Ltd.</li>
                                                <li className="xsm:pl-1 md:pl-2"><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                                                <li className="xsm:pl-1 md:pl-2"><strong>Country</strong> refers to: Kenya</li>
                                                <li className="xsm:pl-1 md:pl-2"><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                                                <li className="xsm:pl-1 md:pl-2"><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                                                <li className="xsm:pl-1 md:pl-2"><strong>Service</strong> refers to the Website.</li>
                                                <li className="xsm:pl-1 md:pl-2"><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                                                <li className="xsm:pl-1 md:pl-2"><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                                                <li className="xsm:pl-1 md:pl-2"><strong>Website</strong> refers to Linchpin Ltd, accessible from www.linchpin.co.ke</li>
                                                <li className="xsm:pl-1 md:pl-2"><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                                            </ul>

                                        </p>
                                    </div>
                                    <h3 className={`${Fonts.titlePrimary} ${Fonts.titleFontStyle}`}>
                                        Types of Data Collected
                                    </h3>
                                    <hr className={`w-full border-b ${Colors.borderTitleStyle}`} />
                                    <div className={privacySection}>
                                        <p className={`${Fonts.privacyInfo} ${Fonts.bodyFontStyle} ${Fonts.parLeading}`}>
                                            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:

                                        </p>
                                        <p className={`text-left xsm:px-8 md:px-10 lg:px-14 2xl:px-10 xsm:mb-3 md:mb-6 xl:mb-6 2xl:mb-6 opacity-85 ${Fonts.bodyFontStyle} ${Fonts.parLeading}`}>
                                            For the purposes of this Privacy Policy:
                                            <br />
                                            <br />
                                            <ul className="list-disc pl-5">
                                                <li className="pl-2"><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                                                <li className="pl-2"><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Transken Ltd.</li>
                                                <li className="pl-2"><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                                                <li className="pl-2"><strong>Country</strong> refers to: Kenya</li>
                                                <li className="pl-2"><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                                                <li className="pl-2"><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                                                <li className="pl-2"><strong>Service</strong> refers to the Website.</li>
                                                <li className="pl-2"><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                                                <li className="pl-2"><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                                                <li className="pl-2"><strong>Website</strong> refers to Linchpin Ltd, accessible from www.linchpin.co.ke</li>
                                                <li className="pl-2"><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                {/* <ImageSlider slides={SliderData}/> */}
                                <div id="contact" className="whoContainer w-full bg-white bg-opacity-90 border-t-2 border-gray-300 border-opacity-30 mt-0">
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