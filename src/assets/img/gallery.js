import React from 'react';

const Category = [
    {
        id: 1,
        img: require('./products/dicalcium.webp'),
        title: 'DiCalcium Phosphate',
        info: '18% Feed Grade',
    }
]

export { Category };

export const Gallery = ({ Category }) => {
    return (
        <div>
            {Category.map(({ id, img, title, info }))}
            <li
                className="carousel-item relative float-left w-full"
                key={id}>
                <img
                    src={img}
                    className="block h-full mx-auto"
                    alt={title}
                />
                <div className="carousel-caption hidden bottom-0 bg-white shadow-xl text-gray-500 rounded-md px-6 pb-10 mb-4 md:block absolute text-center">
                    <h5 className={`${Fonts.titleFontStyle}`}>
                        {title}
                    </h5>
                    <p className="parTxt xsm:text-tiny 2xl:text-base opacity-80">
                        {info}
                    </p>
                </div>
            </li>
        </div>
    )
}

