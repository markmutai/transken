import React, { Component } from "react"
import "../../tailwind.min.css"
import { ThemeContext } from "./themeContext"
import tglico from "../../assets/img/tgl.png"
import tglico_off from "../../assets/img/tgl_off.png"

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="z-50">
            {theme === "dark" ? (
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="bg-gray-400 border-opacity-30 xsm:h-13 xsm:w-13 md:w-13 md:h-13 lg:w-14 xl:w-14 2xl:w-17 lg:h-14 xl:h-15 2xl:h-16 2xsm:text-2xl md:text-1.5xl 2xl:text-2xl xsm:rounded-bl-sm xl:rounded-bl"
                >
                    <img src={tglico_off} className="xsm:w-6 lg:w-7 xl:w-6 2xl:w-8" alt="toggle_mode" />
                </button>
            ) : (
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="bg-gray-400 border-opacity-30 xsm:h-13 xsm:w-13 md:w-13 md:h-13 lg:w-14 xl:w-14 2xl:w-17 lg:h-14 xl:h-15 2xl:h-16 2xsm:text-2xl md:text-1.5xl 2xl:text-2xl xsm:rounded-bl-sm xl:rounded-bl"
                >
                    <img src={tglico} className="xsm:w-6 lg:w-7 xl:w-6 2xl:w-8" alt="toggle_mode" />
                </button>
            )}
        </div>
    );
};

export default Toggle;
