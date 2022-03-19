import React from 'react';

const NavItems = ({ children }) => (
    <div>
        <li
            className="flex items-center text-gray-800 hover:text-tBlue50 text-opacity-90 dark:text-opacity-95 uppercase tracking-smidgeplus dark:text-tBlue50 dark:hover:text-gray-50 justify-center border-l border-tBlue50 dark:border-tBlue50 border-opacity-10 dark:border-opacity-20 md:w-10/12 xl:w-full md:text-3xs xl:text-2xs 2xl:text-mini"
        >
            {children}
        </li>
    </div>
);

export default NavItems;