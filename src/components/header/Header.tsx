import React from 'react'
import CTA from './CTA'
import "./header.css"
import ME from "/images/me.png"
import HeaderSocial from "./HeaderSocial"
import {BiArrowToBottom} from "react-icons/bi"

const Header = () => {
  return (
    <header>
      <header className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Seokhun Yoon</h1>
        <h5 className="text-light">Blockchain Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          {/* <BiArrowToBottom /> */}
          Scroll Down
        </a>
      </header>
    </header>
  )
}

export default Header