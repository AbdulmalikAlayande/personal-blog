import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import ImageDynamicDisplay from "./ImageDynamicDisplay";
import PropTypes, {object} from "prop-types";

const ProjectsCard = ({ title, des, images, siteUrl, githubUrl }) => {
    return (
        <div
            className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
            <div className="w-full h-[80%] overflow-hidden rounded-lg">
              <ImageDynamicDisplay images={images} interval={3000}/>
            </div>
            <div className="w-full mt-5 flex flex-col  gap-6">
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base uppercase text-designColor font-normal">
                            {title}
                        </h3>
                        <div className="flex gap-2">
                            <a href={githubUrl}>
                                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                                    <BsGithub/>
                                </span>
                            </a>
                            <a href={siteUrl}>
                                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                                    <FaGlobe/>
                                </span>
                            </a>
                        </div>
                    </div>
                    <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                        {des}
                    </p>
                </div>
            </div>
        </div>
    );
}

ProjectsCard.propTypes = {
    title: PropTypes.string.isRequired,
    des: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(object).isRequired,
    siteUrl: PropTypes.string,
    githubUrl: PropTypes.string,
}

export default ProjectsCard