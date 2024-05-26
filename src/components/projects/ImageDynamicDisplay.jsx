import * as React from 'react';
import {useEffect, useState} from "react";
import PropTypes from "prop-types";


function ImageDynamicDisplay({images, interval=3000}) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const imageSwitcher = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(imageSwitcher);
    }, [images.length, interval]);

    return (
        <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className={"w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"}
        />
    );
}

ImageDynamicDisplay.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    interval: PropTypes.number
};


export default ImageDynamicDisplay;
