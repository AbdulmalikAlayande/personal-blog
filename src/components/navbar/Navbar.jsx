import React, { useState } from 'react'
import { Link } from "react-scroll";
// import { FiMenu } from "react-icons/fi";
// import { MdClose } from "react-icons/md";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className={"h-[120px] w-[135px] flex justify-between items-center"}>
          <div className={"border-[2px] border-solid rounded-full "}>
              <img src={logo} alt="logo"/>
          </div>
          <p className={"text-lg text-lightText tracking-wide font-medium"}>IN BIO</p>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar
